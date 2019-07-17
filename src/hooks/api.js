import { useReducer, useEffect } from 'react'
import axios from 'axios'
const API_KEY = 'n2456mas'

function reducer (state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: '',
        data: action.data
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      throw new Error('Company Reducer: Unknown action')
  }
}

function removeSuffix (string) {
  return string.replace(/\s+[\w.]*$/, '')
}

async function getCompanyOperatingTimeAndPlace (symbol) {
  const response = await axios(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${API_KEY}`
  )
  const bestMatch = response.data.bestMatches[0]
  const {
    '2. name': name,
    '4. region': region,
    '5. marketOpen': marketOpen,
    '6. marketClose': marketClose,
    '7. timezone': timezone,
    '8. currency': currency
  } = bestMatch

  return { name, region, marketOpen, marketClose, timezone, currency }
}

async function getCompanyFinanceValues (symbol) {
  const response = await axios(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
  )
  const {
    '05. price': price,
    '09. change': change,
    '07. latest trading day': closeDate,
    '10. change percent': trend
  } = response.data['Global Quote']
  const error = response.data.Note

  /* Alphavantage API is REST incompatible and returns 200 Status Code on errors,
   * so we have to handle it ourselves. Common problem is their quota - limited API calls
   * per minute and day.
   */
  if (error) {
    throw Error(response.data.Note)
  }

  return { price, change, closeDate, trend }
}

async function getCompanyLogoAndDomain (name) {
  const response = await axios(
    `https://autocomplete.clearbit.com/v1/companies/suggest?query=${removeSuffix(
      name
    )}`
  )

  const { logo, domain } = response.data[0]

  return { logo, domain }
}

export function useApi (symbol) {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    error: '',
    data: {}
  })

  useEffect(
    () => {
      let didCancel = false

      const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' })

        try {
          const operationInfo = await getCompanyOperatingTimeAndPlace(symbol)
          const financeValues = await getCompanyFinanceValues(symbol)
          const logoAndWebsite = await getCompanyLogoAndDomain(
            operationInfo.name
          )
          const result = {
            ...operationInfo,
            ...financeValues,
            ...logoAndWebsite
          }

          if (!didCancel) {
            dispatch({
              type: 'FETCH_SUCCESS',
              data: result
            })
          }
        } catch (error) {
          if (!didCancel) {
            dispatch({ type: 'FETCH_FAILURE', error: error.message })
          }
        }
      }

      fetchData()

      return () => {
        didCancel = true
      }
    },
    [symbol]
  )

  return [state]
}
