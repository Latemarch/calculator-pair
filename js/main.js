import * as dis from './display.js'
const screen = document.querySelector('.screen')
const btns = document.querySelector('.btns-panel')
const btnEqual = document.querySelector('.btn-equal')
const btnClear = document.querySelector('.btn-clear')
const btnDot = document.querySelector('.btn-dot')

function onClickBtn(event) {
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
  dis.clearStr(0)
  dis.controlFontSize(screen.innerText)
}
function onClickBtnEqual() {
  let strOnScreen = screen.innerText
  if (isNaN(strOnScreen)) {
    strOnScreen = dis.popLastLetter(strOnScreen)
    console.log(strOnScreen)
  }
  screen.innerText = 0
  screen.style.fontSize = '40px'
  dis.clearStr(0)
  dis.controlFontSize(screen.innerText)
}
localStorage.setItem(`numbers`, JSON.stringify([]))
btns.addEventListener('click', onClickBtn)
btnClear.addEventListener('click', onClickBtnClear)
btnEqual.addEventListener('click', onClickBtnEqual)
