const screen = document.querySelector('.screen')
let numNow = 0
let strNow = 0
export function clearStr() {
  numNow = 0
  strNow = 0
}
export function popLastLetter(str) {
  if (str) {
    return str.slice(0, str.length - 1)
  } else {
    screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1)
  }
}
export function getLastLetter(str) {
  return str[str.length - 1]
}
export function saveLocalValue(type, value) {
  localStorage.setItem(`${type}`, JSON.stringify(value))
}
export function getLocalValue(type) {
  return JSON.parse(localStorage.getItem(`${type}`))
}

export function addNum(str) {
  numNow = Number(numNow + str)
  screen.innerText = strNow + numNow
  controlFontSize(screen.innerText)
}

export function addDot() {
  let testNum = numNow + '.'
  console.log(testNum)
  if (isNaN(testNum)) {
    console.log('NaN by dot')
  } else {
    numNow = testNum
    screen.innerText += '.'
  }
}
export function addRules(btnText) {
  const lastLetter = getLastLetter(screen.innerText)
  if (isNaN(lastLetter)) {
    popLastLetter()
  }
  controlFontSize(screen.innerText)
  screen.innerText += btnText
  strNow = screen.innerText
  numNow = 0
}

export function controlFontSize(str) {
  const strLen = str.length
  const screenWidth = screen.clientWidth
  const fontSize = (screenWidth * 1.5) / strLen
  if (fontSize < 40) {
    screen.style.fontSize = `${fontSize}px`
  }
  console.log(strLen, screen.style.fontSize)
}
