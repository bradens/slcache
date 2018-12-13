# slcache

Simple LocalStorage Cache inspired heavily by the Rails.cache module.


## Usage

```
import { fetch } from 'slcache'

// This is both how you get and set values from the cache. 
// This will store 'value' in the cache under the key 'cache_key', with a default
// expiry of 1h
fetch('cache_key', 'value') // returns 'value'

// Read from the cache
fetch('cache_key')

// Remove something from the cache
remove('cache_key')

// Fetch can take a function as the second param as well, storing the return value.
fetch('cache_key', () => {
  // ... computations
  return ...
})

// You can modify the expiry by passing a third argument to fetch
let future = new Date(new Date().getTime() + 1000 * 60 * 60 * 24) // 1 Day from now

fetch('cache_key', 'something', { expiry: new Date(future)})
```

[Full API](./docs/index.html)
