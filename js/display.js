const screen = document.querySelector('.screen')

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
export function getNumBackward(str, index) {
  let i = index
  for (; i >= 0; i--) {
    if (isNaN(str[i]) && str[i] !== '.') {
      return { num: str.slice(i + 1, index + 1), index: i }
    }
  }
  return { num: str.slice(0, index + 1), index: i }
}
export function getNumForward(str, index) {
  let i = index
  for (; i >= 0; i++) {
    if (isNaN(str[i]) && str[i] !== '.') {
      return { num: str.slice(index, i), index: i }
    }
  }
  return { num: str, index: i }
}

export function addNum(btnText) {
  let screenText = screen.innerText // + btnText
  let numDict
  numDict = getNumBackward(screenText, screenText.length - 1)
  numDict.num += btnText
  screen.innerText =
    screenText.slice(0, numDict.index + 1) + Number(numDict.num)
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
}

export function controlFontSize(str) {
  const strLen = str.length
  const screenWidth = screen.clientWidth
  const fontSize = (screenWidth * 1.5) / strLen
  if (fontSize < 40) {
    screen.style.fontSize = `${fontSize}px`
  }
}
