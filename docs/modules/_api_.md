[slcache](../README.md) > ["api"](../modules/_api_.md)

# External module: "api"

## Index

### Functions

* [clear](_api_.md#clear)
* [fetch](_api_.md#fetch)
* [get](_api_.md#get)
* [remove](_api_.md#remove)
* [set](_api_.md#set)

---

## Functions

<a id="clear"></a>

### `<Const>` clear

▸ **clear**(): `void`

*Defined in [api.ts:90](https://github.com/bradens/slcache/blob/fd925a6/src/api.ts#L90)*

Clear everything.

**Returns:** `void`

___
<a id="fetch"></a>

### `<Const>` fetch

▸ **fetch**(key: *`string`*, value?: *`any`*, opts?: *`object`*): `any`

*Defined in [api.ts:65](https://github.com/bradens/slcache/blob/fd925a6/src/api.ts#L65)*

The main function of the module. Reads the value in the cache, and if it can't be found, stores the second param

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| key | `string` | - |  cache key |
| `Default value` value | `any` |  null |  value to be stored, if there is a cache miss |
| `Default value` opts | `object` |  {} |  options, currently just a custom expiry is supported (UNIX timestamp) |

**Returns:** `any`

___
<a id="get"></a>

### `<Const>` get

▸ **get**(key: *`string`*): `any`

*Defined in [api.ts:44](https://github.com/bradens/slcache/blob/fd925a6/src/api.ts#L44)*

Get an object from the cache, ignoring expiry, mostly to be used internally

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  cache key |

**Returns:** `any`

___
<a id="remove"></a>

### `<Const>` remove

▸ **remove**(key: *`string`*): `boolean`

*Defined in [api.ts:82](https://github.com/bradens/slcache/blob/fd925a6/src/api.ts#L82)*

Remove an item from the cache

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  cache key to be removed |

**Returns:** `boolean`

___
<a id="set"></a>

### `<Const>` set

▸ **set**(key: *`string`*, value: *`any`*, opts?: *`object`*): `string`

*Defined in [api.ts:53](https://github.com/bradens/slcache/blob/fd925a6/src/api.ts#L53)*

Store a value in the cache

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| key | `string` | - |  cache key |
| value | `any` | - |  value to be stored, if there is a cache miss |
| `Default value` opts | `object` |  {} |  options, currently just a custom expiry is supported (UNIX timestamp) |

**Returns:** `string`

___

