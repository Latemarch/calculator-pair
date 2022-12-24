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
export function popLettersUntilNum() {
  while (isNaN(getLastLetter(screen.innerText))) {
    popLastLetter()
  }
}
export function getLastLetter(str) {
  return str[str.length - 1]
}

export function addNum(str) {
  let screenText = screen.innerText + str
  let num
  let i = screenText.length - 1
  for (; i >= 0; i--) {
    if (isNaN(screenText[i]) && screenText[i] !== '.') {
      num = screenText.slice(i + 1, screenText.length)
      break
    } else {
      num = screenText
    }
  }

  screen.innerText = screenText.slice(0, i + 1) + Number(num)

  controlFontSize(screen.innerText)
}

export function addDot() {
  let screenText = screen.innerText
  let i = screenText.length - 1

  while (!(isNaN(screenText[i]) && screenText[i] !== '.')) {
    if (screenText[i] === '.') {
      return
    }
    i--
    if (i < 0) {
      break
    }
  }
  screen.innerText += '.'
}
export function addRules(btnText) {
  const lastLetter = getLastLetter(screen.innerText)
  if (isNaN(lastLetter) || lastLetter === '.') {
    popLettersUntilNum()
  }
  screen.innerText += btnText
  controlFontSize(screen.innerText)
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
}
