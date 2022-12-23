const screen = document.querySelector('.screen')
const btns = document.querySelector('.btns-panel')
const btnEqual = document.querySelector('.btn-equal')
const btnClear = document.querySelector('.btn-clear')
const btnDot = document.querySelector('.btn-dot')
let preBtnText
let wasDot = 0
let wasClear = 1

function popLastLetter() {
  screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1)
}
function getLastLetter(str) {
  return str[str.length - 1]
}
function addInnerText(str) {
  let screenText = screen.innerText
  if (screenText.length < 20) {
    console.log(screenText + str)
    screen.innerText = screenText + str
    controlFontSize(screen.innerText)
  }
}
function saveLocalValue(type, value) {
  localStorage.setItem(`${type}`, JSON.stringify(value))
}
function getLocalValue(type) {
  return JSON.parse(localStorage.getItem(`${type}`))
}
function addRules(btnText) {
  const lastLetter = getLastLetter(screen.innerText)
  if (isNaN(lastLetter)) {
    popLastLetter()
    addInnerText(btnText)
  } else {
    addInnerText(btnText)
  }
  wasDot = 0
}

function controlFontSize(str) {
  const strLen = str.length
  const screenWidth = screen.clientWidth
  const fontSize = (screenWidth * 1.6) / strLen
  if (fontSize < 40) {
    screen.style.fontSize = `${fontSize}px`
  }
}

function onClickBtnDot() {
  const lastLetter = getLastLetter(screen.innerText)
  if (lastLetter === '.') {
    popLastLetter()
    addInnerText('.')
    return
  }
  if (!wasDot) {
    addInnerText('.')
    wasDot = 1
  }
}
function onClickBtn(event) {
  const btnClass = event.srcElement.classList[1]
  const btnText = event.srcElement.innerText
  if (wasClear) {
    if (btnClass !== 'btn-clear') {
      screen.innerText = ''
      wasClear = 0
    }
  }
  switch (btnClass) {
    case 'btn-num':
      addInnerText(btnText)
      break
    case 'btn-rule':
      addRules(btnText)
  }
}

function onClickBtnClear() {
  screen.innerText = '0'
  screen.style.fontSize = '40px'
  wasClear = 1
}
btnClear.addEventListener('click', onClickBtnClear)
btns.addEventListener('click', onClickBtn)
btnDot.addEventListener('click', onClickBtnDot)

console.log(screen.clientWidth)
