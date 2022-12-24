export function saveLocalValue(type, value) {
  localStorage.setItem(`${type}`, JSON.stringify(value))
}
export function getLocalValue(type) {
  return JSON.parse(localStorage.getItem(`${type}`))
}
export function add(a, b) {
  return a + b
}
export function minus(a, b) {
  return a - b
}
export function orderedMulti(str) {
  let newStr
  const lastIndex = str.length - 1
  for (let i = 0; i < lastIndex; i++) {
    if (str[i] === '*') {
      if (!isNaN(str[i - 1]) && !isNaN(str[i + 1])) {
        try {
          newStr = str.slice(0, i - 1) + str[i - 1] * str[i + 1]
        } catch (e) {
          newStr = str[i - 1] * str[i + 1]
        }
        try {
          newStr += str.slice(i + 2, lastIndex + 1)
        } catch (e) {}
      }
      return newStr
    }
  }
  return false
}
export function calculateAllMultiple(str) {
  let newStr
  while (newStr) {
    newStr = orderedMulti(str)
  }
}
export function divide(a, b) {
  return a / b
}

export function calculation(str) {
  let result
  let prelength = str.length

  do {
    prelength = newStr.length
    newStr = calculateAllMultiple(str)
  } while (newStr.length !== prelength)
  return newStr
}
