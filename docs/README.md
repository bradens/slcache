
slcache
=======

Simple LocalStorage Cache inspired heavily by the Rails.cache module.

Usage
-----

```
import { get } from 'slcache'

// This is both how you get and set values from the cache. 
// This will store 'value' in the cache under the key 'cache_key', with a default
// expiry of 1h
get('cache_key', 'value') // returns 'value'

// Read from the cache
get('cache_key')

// Remove something from the cache
remove('cache_key')

// get can take a function as the second param as well, storing the return value.
get('cache_key', () => {
  // ... computations
  return ...
})

// You can modify the expiry by passing a third argument to get
let future = new Date(new Date().getTime() + 1000 * 60 * 60 * 24) // 1 Day from now

get('cache_key', 'something', { expiry: new Date(future)})
```

[Full API](./docs/modules/_api_.md)

## Index

### External modules

* ["api"](modules/_api_.md)
* ["index"](modules/_index_.md)
* ["utils"](modules/_utils_.md)

---

