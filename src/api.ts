export const fetch = (key: string, opts = {}) => {
  return localStorage.getItem(key)
}

export const clear = () => {
  return localStorage.clear()
}