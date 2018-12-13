[slcache](../README.md) > ["api"](../modules/_api_.md)

# External module: "api"

## Index

### Variables

* [DAY](_api_.md#day)
* [HOUR](_api_.md#hour)
* [MINUTE](_api_.md#minute)
* [SECOND](_api_.md#second)

### Functions

* [addMetaData](_api_.md#addmetadata)
* [clear](_api_.md#clear)
* [fetch](_api_.md#fetch)
* [get](_api_.md#get)
* [remove](_api_.md#remove)
* [serialize](_api_.md#serialize)
* [set](_api_.md#set)
* [unwrap](_api_.md#unwrap)

---

## Variables

<a id="day"></a>

### `<Const>` DAY

**● DAY**: *`number`* =  HOUR*24

*Defined in [api.ts:7](https://github.com/bradens/slcache/blob/3d29b67/src/api.ts#L7)*

___
<a id="hour"></a>

### `<Const>` HOUR

**● HOUR**: *`number`* =  MINUTE*60

*Defined in [api.ts:6](https://github.com/bradens/slcache/blob/3d29b67/src/api.ts#L6)*

___
<a id="minute"></a>

### `<Const>` MINUTE

**● MINUTE**: *`number`* =  SECOND*60

*Defined in [api.ts:5](https://github.com/bradens/slcache/blob/3d29b67/src/api.ts#L5)*

___
<a id="second"></a>

### `<Const>` SECOND

**● SECOND**: *`1000`* = 1000

*Defined in [api.ts:4](https://github.com/bradens/slcache/blob/3d29b67/src/api.ts#L4)*

___

## Functions

<a id="addmetadata"></a>

### `<Const>` addMetaData

▸ **addMetaData**(value: *`any`*, opts?: *`object`*): `object`

*Defined in [api.ts:17](https://github.com/bradens/slcache/blob/3d29b67/src/api.ts#L17)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| value | `any` | - |
| `Default value` opts | `object` |  {} |

**Returns:** `object`

___
<a id="clear"></a>

### `<Const>` clear

▸ **clear**(): `void`

*Defined in [api.ts:53](https://github.com/bradens/slcache/blob/3d29b67/src/api.ts#L53)*

**Returns:** `void`

___
<a id="fetch"></a>

### `<Const>` fetch

▸ **fetch**(key: *`string`*, valueOrFunction?: *`any`*, opts?: *`object`*): `any`

*Defined in [api.ts:35](https://github.com/bradens/slcache/blob/3d29b67/src/api.ts#L35)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| key | `string` | - |
| `Default value` valueOrFunction | `any` |  null |
| `Default value` opts | `object` |  {} |

**Returns:** `any`

___
<a id="get"></a>

### `<Const>` get

▸ **get**(key: *`string`*): `any`

*Defined in [api.ts:27](https://github.com/bradens/slcache/blob/3d29b67/src/api.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `any`

___
<a id="remove"></a>

### `<Const>` remove

▸ **remove**(key: *`string`*): `boolean`

*Defined in [api.ts:48](https://github.com/bradens/slcache/blob/3d29b67/src/api.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `boolean`

___
<a id="serialize"></a>

### `<Const>` serialize

▸ **serialize**(object: *`object`*): `string`

*Defined in [api.ts:25](https://github.com/bradens/slcache/blob/3d29b67/src/api.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| object | `object` |

**Returns:** `string`

___
<a id="set"></a>

### `<Const>` set

▸ **set**(key: *`string`*, value: *`any`*, opts?: *`object`*): `string`

*Defined in [api.ts:29](https://github.com/bradens/slcache/blob/3d29b67/src/api.ts#L29)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| key | `string` | - |
| value | `any` | - |
| `Default value` opts | `object` |  {} |

**Returns:** `string`

___
<a id="unwrap"></a>

### `<Const>` unwrap

▸ **unwrap**(valueOrFunction: *`any`*): `any`

*Defined in [api.ts:9](https://github.com/bradens/slcache/blob/3d29b67/src/api.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| valueOrFunction | `any` |

**Returns:** `any`

___

