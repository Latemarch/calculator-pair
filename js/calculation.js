import * as dis from './display.js'
export function saveLocalValue(type, value) {
  localStorage.setItem(`${type}`, JSON.stringify(value))
}
export function getLocalValue(type) {
  return JSON.parse(localStorage.getItem(`${type}`))
}

export function operators(rule, a, b) {
  console.log('rule', rule, a, b)
  a = parseFloat(a)
  b = parseFloat(b)
  switch (rule) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return a / b
  }
}
export function operate(rule, str) {
  if (!isNaN(str)) {
    return str
  }
  let newStr
  const lastIndex = str.length - 1
  let i = 0
  for (; i < lastIndex; i++) {
    if (str[i] === rule) {
      if (!isNaN(str[i - 1]) && !isNaN(str[i + 1])) {
        let a = dis.getNumBackward(str, i - 1)
        let b = dis.getNumForward(str, i + 1)
        newStr = operators(rule, a.num, b.num)
        console.log('dddd', newStr)
        try {
          newStr = str.slice(0, a.index + 1) + newStr // + operators(rule, str[i - 1], str[i + 1])
        } catch (e) {}
        try {
          newStr += str.slice(b.index, lastIndex + 1)
        } catch (e) {}
      }
      return newStr
    }
  }
  return str
}
export function doAllOptInStr(rule, str) {
  let newStr = str
  let prenewStr
  do {
    prenewStr = newStr
    newStr = operate(rule, newStr)
  } while (newStr !== prenewStr)
  return newStr
}

export function calculation(str) {
  let newStr

  newStr = doAllOptInStr('*', str)
  newStr = doAllOptInStr('/', newStr)
  newStr = doAllOptInStr('+', newStr)
  newStr = doAllOptInStr('-', newStr)
  return newStr
}
