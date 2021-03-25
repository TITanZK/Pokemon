const string = `
.box * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.box *::before {
  box-sizing: border-box;
}

.box *::after {
  box-sizing: border-box;
}

body {
  background: #ffe600;
}
.html{
  min-height: 100vh;
  position: relative;
}

/*画出圆脑袋*/
.box {
  
  width: 400px;
  height: 400px;
  position: absolute;
  top: 200px;
  left: 50%;
  margin-left: -200px;
  border-radius: 50%;
  background-color: #fdff00;
}

/*画眼睛*/
.box .eye {
  border: 2px solid #2e2e2e;
  border-radius: 50%;
  width: 54px;
  height: 54px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
}

.box .eye::before {
  content: '';
  display: block;
  background: #fff;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  position: relative;

}

.box .eye.left::before {
  left: 23px;
  top: 4px;
}

.box .eye.right::before {
  left: 2px;
  top: 4px;
}

.box .eye.left {
  transform: translateX(-145px);
}

.box .eye.right {
  transform: translateX(55px);
}

/*画鼻子*/
.box .nose {
  width: 0;
  height: 0;
  transform: translate(140px, 185px) rotate(180deg);
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #000000;
}

/*画酒窝*/
.box .circle {
  width: 74px;
  height: 74px;
  background-color: #FF0000;
  border-radius: 100px;
  border: 1px solid black;
  position: absolute;
}

.box .circle.left {
  transform: translate(-45px, 160px) rotate(0deg);
}

.box .circle.right {
  transform: translate(275px, 160px) rotate(0deg);
}

.box .mouth {
  width: 85px;
  height: 99px;
  border: 3px solid;
  border-color: #000 transparent transparent transparent;
  border-radius: 70%/100px 100px 0 0;
}

.box .mouth.left {
  transform: translate(84px, 134px) rotate(180deg);
}

.box .mouth.right {
  transform: translate(133px, 35px) rotate(180deg);
}

/*画耳朵*/
.ears {
  width: 125px;
  height: 55px;
  top: 100%;
  left: 9px;
  background-color: #fdff00;
  border-radius: 10px;
}

.ears.left {
  transform: translate(-90px, -235px) rotate(220deg);
}

.ears.right {
  transform: translate(260px, -294px) rotate(140deg);
}

.ears.left::before {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border-top: 80px solid black;
  border-left: 80px solid transparent;
  transform: translate(117px, -25px) rotate(540deg);
}

.ears.right::before {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border-bottom: 80px solid black;
  border-right: 80px solid transparent;
  transform: translate(-74px, -24px) rotate(269deg);
}
`

let n = 1

container1.innerText = string.substr(0, n)
container2.innerHTML = string.substr(0, n)

let time = 100

const run = () => {
  n += 1
  if (n > string.length) {
    window.clearInterval(id)
    return
  }
  container1.innerText = string.substr(0, n)
  container2.innerHTML = string.substr(0, n)
  container1.scrollTop = container1.scrollHeight
}
const play = ()=>{
  return setInterval(run, time)
}

const pause = ()=>{
  window.clearInterval(id)
}

let id = play()

btnPause.onclick = () => {
  pause()
}
btnPlay.onclick = () => {
  id = play()
}
btnSlow.onclick = () => {
  pause()
  time = 300
  id = play()
}
btnNormal.onclick = () => {
  pause()
  time = 100
  id = play()
}
btnFast.onclick = () => {
  pause()
  time = 0
  id = play()
}