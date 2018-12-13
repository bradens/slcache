import 'mock-local-storage'
import { fetch } from './dist/index.js'

test('fetch stores and fetches a value', () => {
  expect(localStorage.getItem('test-key')).toBe(null)
  expect(fetch('test-key', 'something')).toBe('something')
  expect(fetch('test-key')).toBe('something')
});
