import { storageAvailable } from './utils'

// Units are in milliseconds
const SECOND = 1000
const MINUTE = SECOND*60
const HOUR = MINUTE*60
const DAY = HOUR*24

const unwrap = (valueOrFunction) => {
  if (typeof valueOrFunction === 'function') {
    return valueOrFunction()
  } else {
    return valueOrFunction
  }
}

const addMetaData = (value, opts = {}) => {
  return {
    value,
    expiry: new Date(new Date().getTime() + HOUR),
    ...opts
  }
}

const serialize = (object: object) => JSON.stringify(object)

export const get = (key: string) => storageAvailable() ? JSON.parse(localStorage.getItem(key)) : null

export const set = (key: string, value, opts = {}) => {
  let serialized = serialize(addMetaData(value, opts))
  storageAvailable() && localStorage.setItem(key, serialized)
  return serialized
}

export const fetch = (key: string, valueOrFunction = null, opts = {}) => {
  let fetched = get(key)

  if (fetched && fetched.expiry && fetched.expiry &&
      new Date(fetched.expiry).getTime() > new Date().getTime()) {
    return fetched.value
  } else {
    let value = unwrap(valueOrFunction)
    set(key, value, opts)
    return value
  } 
}

export const remove = (key: string) => {
  storageAvailable() && localStorage.removeItem(key)
  return true
}

export const clear = () => {
  return localStorage.clear()
}