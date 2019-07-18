/* global localStorage */
import { COMPANIES_SYMBOLS_KEY } from './../../constants/storage'

export function getCompanySymbols () {
  return JSON.parse(localStorage.getItem(COMPANIES_SYMBOLS_KEY) || '[]')
}

export function addCompanySymbol (symbol) {
  save([...new Set(getCompanySymbols().concat(symbol))])
}

export function removeCompanySymbol (symbol) {
  save(getCompanySymbols().filter(s => s !== symbol))
}

function save (symbols) {
  localStorage.setItem(COMPANIES_SYMBOLS_KEY, JSON.stringify(symbols))
}
