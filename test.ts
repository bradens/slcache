import { fetch, set, clear, get, remove } from './dist/index.js'

beforeEach(() => localStorage.clear())

describe('fetch', () => {
  test('stores a simple key and value', () => {
    expect(localStorage.getItem('test-key')).toBe(null)
    expect(fetch('test-key', 'something')).toBe('something')
    expect(fetch('test-key')).toBe('something')
  });

  test('an object value', () => {
    let testObj = { a: 1 }
    expect(fetch('test-key', testObj)).toEqual(testObj)
    expect(fetch('test-key')).toEqual(testObj)
  })

  test('an array', () => {
    let testArray = [1]
    expect(fetch('test-key', testArray)).toEqual(testArray)
    expect(fetch('test-key')).toEqual(testArray)
  })

  test('an array with objects in it', () => {
    let testArray = [{ a: 1 }]
    expect(fetch('test-key', testArray)).toEqual(testArray)
    expect(fetch('test-key')).toEqual(testArray)
  })

  describe('expiry', () => {
    test('an expired object should count as a cache miss', () => {
      set('tk', 'something', { expiry: new Date(new Date().getTime() - 100) })

      let valueFn = jest.fn(() => 'test')
      expect(fetch('tk', valueFn)).toBe('test')
      expect(valueFn).toHaveBeenCalled()
    })

    test('an object should not call the value fn when it is a cache hit', () => {
      set('tk', 'something')
      let valueFn = jest.fn(() => 'test')
      expect(fetch('tk', valueFn)).toBe('something')
      expect(valueFn).not.toHaveBeenCalled()
    })
  })

  describe('clear', () => {
    test('should clear all the keys', () => {
      set('tk', 'something')
      clear()
      expect(get('tk')).toBe(null)
    })
  })

  describe('remove', () => {
    test('should remove an item given a key', () => {
      set('tk', 'something')
      remove('tk')
      expect(get('tk')).toBe(null)
    })
  })
})
