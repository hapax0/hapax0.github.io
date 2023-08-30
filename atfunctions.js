let atList = ["origamiAt", "airplaneAt", "envelopeAt", "sardinesAt", "refractionAt", 
  "mothAt", "firebirdAt", "spiralAt", "finger_gunAt", "vineAt", "triangleAt", "flaskAt", "pencilAt", 
  "elephantAt", "coreAt", "orbitAt", "lensAt", "theoremAt", "floppyAt", "spiderAt", "shoesAt", 
  "mushroomAt", "catAt", "birbAt", "functionAt", "coneAt", "pageAt", "urnAt", "venn_diagramAt", "monsterAt", "frameAt",
   "pantsAt", "tvAt", "duckrabbitAt", "fishAt", "cactusAt", "umbrellaAt", "flameAt", "bulbAt",
   "mazeAt", "transomAt", "cameraAt", "bowed_HeronAt", "bicycleAt", "cigarettesAt", 
    "appleAt", "bridgeAt", "bugAt", "mailboxAt", "jumpropeAt", "pointy_houseAt", "domeAt", "heronAt",
    "houseAt", "falling_chairAt", "birdhouseAt", "factoryAt", "shellsAt", "phaseAt",
    "leafAt", /*"allAt", "thenAt", "existAt", "tildeAt",*/ "userAt", "heartAt", "glassAt", "prayerAt", 
    "thoughtAt", "skullAt", "lampAt", "chairAt", "cubeAt", "cupAt", "mouseAt", "uapAt", 
  "stairsAt", "pineAt", "slideAt", "ladderAt", "swingAt", "cakeAt", "piechartAt"]  
  
  function twocards () {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let W = canvas.width, H = canvas.height
    x = 0, y = 0
    w = W/2.3, h = H/1.4 - 30
    let funcs = shuffle(atList)
    let numbers = shuffle(["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII",
    "XIII", "XIV", "XV","XVI", "XVII", "XVIII","XIX", "XX", "XXI", "XXII"])
    tarotcard(x+32, y+156, w, h, funcs[0], numbers[0])
    
    tarotcard(x+W/2+18, y+156, w, h, funcs[1], numbers[1])
  }
  
  function uapAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+21*H/24)
    cpx = x+3*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+18*H/24)
    cpx = x+3*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+15*H/24)
    cpx = x+13*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+18*H/24)
    cpx = x+13*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+21*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+15*H/24)
    ctx.lineTo(x+2*W/24, y+21*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+15*H/24)
    ctx.lineTo(x+14*W/24, y+20*H/24)
    ctx.lineTo(x+14*W/24, y+21*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+16*H/24)
    ctx.lineTo(x+21*W/24, y+13*H/24)
    ctx.lineTo(x+17*W/24, y+9*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+16*W/24, y+8*H/24, W/24, 0, Math.PI*2)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+7*H/24)
    ctx.lineTo(x+11*W/24, y+3*H/24)
    ctx.lineTo(x+8*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+8*H/24)
    ctx.lineTo(x+19*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+8*H/24)
    ctx.lineTo(x+13*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+7*H/24)
    ctx.lineTo(x+16*W/24, y+5*H/24)
    ctx.stroke()
  }
  
  function pppuapAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+18*H/24)
    cpx = x+2*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+12*H/24)
    cpx = x+2*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+6*H/24)
    cpx = x+22*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+12*H/24)
    cpx = x+22*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+18*H/24)
    ctx.stroke()
  }
  
  function cigarettesAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+8*H/24)
    ctx.lineTo(x+7*W/24, y+6*H/24)
    ctx.lineTo(x+5*W/24, y+3*H/24)
    ctx.lineTo(x+2*W/24, y+5*H/24)
    ctx.lineTo(x+4*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+8*H/24)
    ctx.lineTo(x+4*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+2*H/24)
    ctx.lineTo(x+16*W/24, y+2*H/24)
    ctx.lineTo(x+16*W/24, y+8*H/24)
    ctx.lineTo(x+14*W/24, y+8*H/24)
    ctx.lineTo(x+14*W/24, y+2*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+5*H/24)
    ctx.lineTo(x+18*W/24, y+5*H/24)
    ctx.lineTo(x+18*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+6*H/24)
    ctx.lineTo(x+14*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+3*H/24)
    ctx.lineTo(x+14*W/24, y+3*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+6*H/24)
    ctx.lineTo(x+17*W/24, y+3*H/24)
    ctx.lineTo(x+16*W/24, y+3*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+6*H/24)
    ctx.lineTo(x+19*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+6*H/24)
    ctx.lineTo(x+18*W/24, y+7*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+8*H/24)
    ctx.lineTo(x+7*W/24, y+20*H/24)
    ctx.lineTo(x+4*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+22*H/24)
    ctx.lineTo(x+19*W/24, y+20*H/24)
    ctx.lineTo(x+7*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+8*H/24)
    cpx = x+11*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+10*H/24)
    cpx = x+15*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+8*H/24)
    ctx.stroke()
    
    // top of opening
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+8*H/24)
    ctx.lineTo(x+19*W/24, y+8*H/24)
    ctx.stroke()
    // rt side and bottom
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+8*H/24)
    ctx.lineTo(x+19*W/24, y+20*H/24)
    ctx.lineTo(x+17*W/24, y+22*H/24)
    ctx.lineTo(x+4*W/24, y+22*H/24)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+12*H/24)
    ctx.lineTo(x+8*W/24, y+15*H/24)
    ctx.lineTo(x+18*W/24, y+14*H/24)
    ctx.lineTo(x+18*W/24, y+11*H/24)
    ctx.lineTo(x+8*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+17*H/24)
    ctx.lineTo(x+10*W/24, y+18*H/24)
    ctx.lineTo(x+16*W/24, y+18*H/24)
    ctx.lineTo(x+16*W/24, y+17*H/24)
    ctx.lineTo(x+10*W/24, y+17*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+7*H/24)
    ctx.lineTo(x+16*W/24, y+7*H/24)
    ctx.stroke()
  }
  
  function bicycleAt (x,y,W,color) { 
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"

    ctx.beginPath()
    ctx.arc(x+5*W/24, y+14*H/24, 4.4*W/24, 0, Math.PI*2)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+12*W/24, y+14*H/24, 1*W/24, 0, Math.PI*2)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+19*W/24, y+14*H/24, 4.4*W/24, 0, Math.PI*2)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+14*H/24)
    ctx.lineTo(x+12*W/24, y+14*H/24)
    ctx.lineTo(x+8*W/24, y+9*H/24)
    ctx.lineTo(x+5*W/24, y+14*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+9*H/24)
    ctx.lineTo(x+17*W/24, y+7*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+14*H/24)
    ctx.lineTo(x+16*W/24, y+5*H/24)
    ctx.lineTo(x+18*W/24, y+4*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+8*H/24)
    ctx.lineTo(x+12*W/24, y+14*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+6*H/24)
    ctx.lineTo(x+8*W/24, y+9*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+6*H/24)
    ctx.lineTo(x+7*W/24, y+6*H/24)
    ctx.stroke()
  }
  
  function bowed_HeronAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+22*W/24, y+21*H/24)
    cpx = x+22*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+9*H/24)
    cpx = x+15*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
    cpx = x+4*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+13*H/24)
    cpx = x+5*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+11*H/24)
    cpx = x+12*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+8*H/24)
    cpx = x+14*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+13*H/24)
    cpx = x+20*W/24
    cpy = y+17*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+19*H/24)
    cpx = x+21*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+21*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+10*H/24)
    ctx.lineTo(x+12*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+10*H/24)
    ctx.lineTo(x+11*W/24, y+15*H/24)
    ctx.lineTo(x+14*W/24, y+21*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+21*W/24, y+19*H/24, ctx.lineWidth*1, 0, Math.PI*2)
    ctx.stroke()
  }