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

const player = {
  id: undefined,
  time: 100,
  ui:{
    container1:document.querySelector('#container1'),
    container2:document.querySelector('#container2')
  },
  n:1,
  events: {
    '#btnPause':'pause',
    '#btnPlay':'play',
    '#btnSlow':'slow',
    '#btnNormal':'normal',
    '#btnFast':'fast',
  },
  init:()=>{
    player.ui.container1.innerText = string.substr(0, player.n)
    player.ui.container1.innerHTML.substr(0, player.n)
    player.play()
    player.bindEvents()
  },
  bindEvents:()=>{
    for(let key in player.events){
      if(player.events.hasOwnProperty(key)){//防御性编程
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run:()=>{
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.container1.innerText = string.substr(0, player.n)
    player.ui.container2.innerHTML = string.substr(0, player.n)
    player.ui.container1.scrollTop = player.ui.container1.scrollHeight
  },
  play:()=>{
    player.id = setInterval(player.run,player.time)
  },
  pause:()=>{
    window.clearInterval(player.id)
  },
  slow:()=>{
    player.pause()
    player.time = 300
    player.play()
  },
  normal:()=>{
    player.pause()
    player.time = 100
    player.play()
  },
  fast:()=>{
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()