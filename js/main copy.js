import * as dis from './display.js'
const screen = document.querySelector('.screen')
const btns = document.querySelector('.btns-panel')
const btnEqual = document.querySelector('.btn-equal')
const btnClear = document.querySelector('.btn-clear')
const btnDot = document.querySelector('.btn-dot')
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
  console.log(screenText)
  if (screenText.length < 20) {
    if (screenText === '0') {
      screen.innerText = ''
    }
    screen.innerText = screen.innerText + str
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
  if (screen.innerText === '') {
    return
  }
  if (isNaN(lastLetter)) {
    // popLastLetter()
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
    dis.addInnerText('.')
    return
  }
  if (!wasDot) {
    dis.addInnerText('.')
    console.log(dis.popLastLetter())
    if (dis.popLastLetter() === '.') {
      wasDot = 1
    }
  }
}
function onClickBtn(event) {
  const btnClass = event.srcElement.classList[1]
  const btnText = event.srcElement.innerText
  if (wasClear) {
    //입력 시작 시 default 값인 0 지우기
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
function onClickBtn1(event) {
  const btnClass = event.srcElement.classList[1]
  const btnText = event.srcElement.innerText
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
  dis.controlFontSize(screen.innerText)
  wasClear = 1
  wasDot = 0
}
localStorage.setItem(`numbers`, JSON.stringify([]))
btnClear.addEventListener('click', onClickBtnClear)
btns.addEventListener('click', onClickBtn1)
btnDot.addEventListener('click', onClickBtnDot)
