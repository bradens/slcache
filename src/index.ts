import { storageAvailable } from './utils'

if (!storageAvailable()) {
  console.warn("No localstorage available, slcache will not store anything.")
}

export { fetch, clear, set, get, remove } from './api'
export * from './utils'