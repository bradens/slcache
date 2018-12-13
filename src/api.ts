import { storageAvailable } from './utils'

/**
 * Constants for time in milliseconds
 * @hidden
 */
const HOUR = 1000 * 60 * 60

/**
 * Unwraps a function or value into a primitive
 * @hidden
 */
const unwrap = valueOrFunction => {
  if (typeof valueOrFunction === 'function') {
    return valueOrFunction()
  } else {
    return valueOrFunction
  }
}

/**
 * Adds expiry metadata to the value stored in the cache
 * @hidden
 */
const addMetaData = (value, opts = {}) => {
  return {
    value,
    expiry: new Date(new Date().getTime() + HOUR),
    ...opts
  }
}

/**
 * Stringifies an object to be placed in the cache
 * @param object Object to be serialized into a string
 * @hidden
 */
const serialize = (object: object) => JSON.stringify(object)

/**
 * Get an object from the cache, ignoring expiry, mostly to be used internally
 * @param key cache key
 */
export const get = (key: string) => storageAvailable() ? JSON.parse(localStorage.getItem(key)) : null


/**
 * Store a value in the cache
 * @param key cache key
 * @param value value to be stored, if there is a cache miss
 * @param opts options, currently just a custom expiry is supported (UNIX timestamp)
 */
export const set = (key: string, value, opts = {}) => {
  let serialized = serialize(addMetaData(value, opts))
  storageAvailable() && localStorage.setItem(key, serialized)
  return serialized
}

/**
 * The main function of the module. Reads the value in the cache, and if it can't be found, stores the second param 
 * @param key cache key
 * @param value value to be stored, if there is a cache miss
 * @param opts options, currently just a custom expiry is supported (UNIX timestamp)
 */
export const fetch = (key: string, value = null, opts = {}) => {
  let fetched = get(key)

  if (fetched && fetched.expiry && fetched.expiry &&
      new Date(fetched.expiry).getTime() > new Date().getTime()) {
    return fetched.value
  } else {
    let unwrappedValue = unwrap(value)
    set(key, unwrappedValue, opts)
    return unwrappedValue
  } 
}

/**
 * Remove an item from the cache
 * @param key cache key to be removed
 */
export const remove = (key: string) => {
  storageAvailable() && localStorage.removeItem(key)
  return true
}

/**
 * Clear everything.
 */
export const clear = () => {
  return localStorage.clear()
}