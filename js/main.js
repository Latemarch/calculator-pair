import * as dis from './display.js'
import * as cal from './calculation.js'
const screen = document.querySelector('.screen')
const btns = document.querySelector('.btns-panel')
const btnEnter = document.querySelector('.btn-equal')
const btnClear = document.querySelector('.btn-clear')
const btnDot = document.querySelector('.btn-dot')

function onClickDisplayBtn(event) {
  const btnClass = event.srcElement.classList[1]
  const btnText = event.srcElement.innerText

  if (screen.innerText.length > 20) {
    return
  }
  switch (btnClass) {
    case 'btn-dot':
      dis.addDot()
      break
    case 'btn-num':
      dis.addNum(btnText)
      break
    case 'btn-rule':
      dis.addRules(btnText)
  }
}

function onClickBtnClear() {
  screen.innerText = 0
  screen.style.fontSize = '40px'
  dis.controlFontSize(screen.innerText)
}
function onClickBtnEnter() {
  let result
  let strOnScreen = screen.innerText
  let lastText = dis.getLastLetter(strOnScreen)

  if (isNaN(lastText)) {
    strOnScreen = dis.popLastLetter(strOnScreen)
    console.log('pop?', strOnScreen)
  }

  result = cal.calculation(strOnScreen)
  screen.innerText = result
  dis.controlFontSize(screen.innerText)
}

btns.addEventListener('click', onClickDisplayBtn)
btnClear.addEventListener('click', onClickBtnClear)
btnEnter.addEventListener('click', onClickBtnEnter)
