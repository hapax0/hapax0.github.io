let atList = ["origamiAt", "airplaneAt", "envelopeAt", "sardinesAt", "refractionAt", "starsAt", "mountainAt", 
  "mothAt", "firebirdAt", "spiralAt", "finger_gunAt", "vineAt", "triangleAt", "flaskAt", "pencilAt", "forestAt", 
  "elephantAt", "coreAt", "orbitAt", "lensAt", "theoremAt", "floppyAt", "spiderAt", "shoesAt", "bee_hiveAt", 
  "mushroomAt", "catAt", "birdAt", "functionAt", /*"coneAt",*/ "pageAt", "urnAt", "venn_diagramAt", "monsterAt", "frameAt",
   "pantsAt", "tvAt", "duckrabbitAt", "fishAt", "cactusAt", "umbrellaAt", "flameAt", "bulbAt", "deadlockAt",
   "mazeAt", "transomAt", "cameraAt", /*"bowed_HeronAt","pointy_houseAt", "shellsAt", */ 
   "bicycleAt", "cigarettesAt", "phoneAt", "wife_beaterAt", "clickbaitAt", "two_ingredient_brownieAt",
  "appleAt", "bridgeAt", "bugAt", "mailboxAt", "jumpropeAt",  "observatoryAt", "heronAt", "crazy_wallAt", 
  "houseAt", "falling_chairAt", "birdhouseAt", "factoryAt","phaseAt", "mirrorAt", "blind_eyeAt", "gateAt", 
  "leafAt", /*"allAt", "thenAt", "existAt", "tildeAt",*/ "userAt", "heartAt", "glassAt", "prayerAt", "body_of_waterAt",
  "thoughtAt", "skullAt", "lampAt", "chairAt", "cubeAt", "full_cupAt", "mouseAt", "uapAt", "flipflopAt", 
  "chatAt", "gas_station_shrubberyAt", "misheard_lyricsAt", "plate_tectonicsAt", "negative_spaceAt",
  "stairsAt", "treeAt", "slideAt", "ladderAt", "swingAt", "cakeAt", "piechartAt", "big_fishAt", "greenwashingAt", "bribeAt"]  
  
  let noThe = ["gas_station_shrubberyAt", "greenwashingAt", "refractionAt", "clickbaotAt",  "plate_tectonicsAt",
  "two_ingredient_brownieAt","misheard_lyricsAt", "negative_spaceAt"]
  let shortlist = ["negative_spaceAt", "misheard_lyricsAt",  "plate_tectonicsAt"]
  
  function twocards () {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let W = canvas.width, H = canvas.height
    x = 0, y = 0
    w = W/2.3, h = H/1.4 - 30
    let funcs = shuffle(atList)
    let numbers = shuffle(["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII",
    "XIII", "XIV", "XV","XVI", "XVII", "XVIII","XIX", "XX", "XXI", "XXII"])
    ctx.fillStyle = randomPick(getCurrentPalette())
    ctx.fillRect(0,0,W,H)
    tarotcard(x+32, y+156, w, h, funcs[0], numbers[0])
    tarotcard(x+W/2+18, y+156, w, h, funcs[1], numbers[1])
  }
  
  function threecards () {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let W = canvas.width, H = canvas.height
    x = 0, y = 0
    w = W/3.2, h = H/2 - 30
    let funcs = shuffle(atList)
    
    //funcs = shuffle(shortlist)
    
    let numbers = shuffle(["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII",
    "XIII", "XIV", "XV","XVI", "XVII", "XVIII","XIX", "XX", "XXI", "XXII"])
    ctx.fillStyle = randomPick(getCurrentPalette())
    ctx.fillRect(0,0,W,H)
    ctx.fillStyle = randomPick(getCurrentPalette())
    haze()
    
    tarotcard(x+12, y+156 +pet(49), w, h, funcs[0], numbers[0])

    tarotcard(x+2*W/3+4, y+156+pet(49), w, h, funcs[2], numbers[2])
    
    tarotcard(x+1*W/3+8, y+156+pet(49), w, h, funcs[1], numbers[1])
  }
  
  function twocardbacks () {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let W = canvas.width, H = canvas.height
    x = 0, y = 0
    w = W/2.3, h = H/1.4 - 30
    let funcs = shuffle(atList)
    let numbers = shuffle(["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII",
    "XIII", "XIV", "XV","XVI", "XVII", "XVIII","XIX", "XX", "XXI", "XXII"])
    ctx.fillStyle = randomPick(getCurrentPalette())
    ctx.fillRect(0,0,W,H)
  // tarotcard(x+32, y+156, w, h, funcs[0], numbers[0])
    cardback(x+32, y+156, w, h,funcs[0])
    cardback(x+W/2+18, y+156, w, h, funcs[1])
    //tarotcard(x+W/2+18, y+156, w, h, funcs[1], numbers[1])
  }
  
  function roundedRectCard (x, y, w, h, r) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    ctx.save()
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.arcTo(x+w, y,   x+w, y+h, r); // across to right
    ctx.arcTo(x+w, y+h, x,   y+h, r);
    ctx.arcTo(x,   y+h, x,   y,   r);
    ctx.arcTo(x,   y,   x+w, y,   r);
    ctx.closePath();
    ctx.fill()
    ctx.clip()
    let pal =  shuffle(getCurrentPalette())
    ctx.fillStyle = pal[0]
    ctx.fillRect(x, y, w, h)
    ctx.strokeStyle = pal[1]
    LASTCLICK[0] = x+w/2, LASTCLICK[1] = y+h/2
    linearSpiral(pal[1])
    ctx.restore()
  }
  
  function cardback (x,y,w,h,f) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let offcanvas = document.createElement('CANVAS')
    let offctx = offcanvas.getContext("2d")
    offcanvas.width = w, offcanvas.height = h
    let colors = shuffle(getCurrentPalette())
    let up = true, r = 32
    BRIGHT = true
    let pal = colors
    ctx.fillStyle = pal[randomPick([0,1])]
    ctx.strokeStyle = pal[randomPick([pal.length-1], [pal.length-2])]
    ctx.lineWidth = 9
    
    ctx.shadowBlur = 10
    ctx.shadowColor = "#444444"
    ctx.shadowOffsetX = 2
    ctx.shadowOffsetY  = 12
    roundedRect (x, y, w, h, 32, ctx)
    ctx.shadowBlur = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY  = 0
    ctx.lineWidth = 18
    let numbers = shuffle(["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII",
    "XIII", "XIV", "XV","XVI", "XVII", "XVIII","XIX", "XX", "XXI", "XXII"])
    roundedRect (x, y, w, h, r, ctx)
    roundedRectCard (x+8, y+8, w-16, h-16, r)
    canvas.addEventListener("mousedown", function(evt) {
      let mousePos = getMousePos(canvas, evt);
      let mx = mousePos.x, my = mousePos.y
        tarotcard(x, y, w, h, f, numbers[0]);
    }, {once: true});
  }

function negative_spaceAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+18*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+18*H/24)
  ctx.lineTo(x+4*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+18*H/24)
  ctx.lineTo(x+6*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+18*H/24)
  ctx.lineTo(x+8*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+18*H/24)
  ctx.lineTo(x+10*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+18*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+18*H/24)
  ctx.lineTo(x+14*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+16*H/24)
  ctx.lineTo(x+2*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+14*H/24)
  ctx.lineTo(x+2*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+12*H/24)
  ctx.lineTo(x+2*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+18*H/24)
  ctx.lineTo(x+22*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+16*H/24)
  ctx.lineTo(x+22*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+14*H/24)
  ctx.lineTo(x+22*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+14*H/24)
  ctx.lineTo(x+6*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+12*H/24)
  ctx.lineTo(x+6*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+10*H/24)
  ctx.lineTo(x+6*W/24, y+6*H/24)
  ctx.lineTo(x+10*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+8*H/24)
  ctx.lineTo(x+8*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+6*H/24)
  ctx.lineTo(x+6*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+4*H/24)
  ctx.lineTo(x+4*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+6*H/24)
  ctx.lineTo(x+12*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+12*H/24)
  ctx.lineTo(x+22*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+10*H/24)
  ctx.lineTo(x+22*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+8*H/24)
  ctx.lineTo(x+22*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+6*H/24)
  ctx.lineTo(x+22*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+6*H/24)
  ctx.lineTo(x+20*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+6*H/24)
  ctx.lineTo(x+18*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+6*H/24)
  ctx.lineTo(x+16*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+6*H/24)
  ctx.lineTo(x+14*W/24, y+2*H/24)
  ctx.stroke()
}

function plate_tectonicsAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+18*H/24)
  ctx.lineTo(x+18*W/24, y+18*H/24)
  ctx.lineTo(x+22*W/24, y+14*H/24)
  ctx.lineTo(x+22*W/24, y+6*H/24)
  ctx.lineTo(x+18*W/24, y+10*H/24)
  ctx.lineTo(x+18*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+12*H/24)
  ctx.lineTo(x+22*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+18*H/24)
  ctx.lineTo(x+2*W/24, y+12*H/24)
  ctx.lineTo(x+2*W/24, y+10*H/24)
  ctx.lineTo(x+6*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+10*H/24)
  ctx.lineTo(x+9*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+10*H/24)
  cpx = x+13*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+18*H/24)
  cpx = x+13*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+18*H/24)
  cpx = x+15*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+10*H/24)
  cpx = x+12*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+13*H/24)
  ctx.stroke()

  //
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+13*H/24)
  ctx.lineTo(x+17*W/24, y+8*H/24)
  cpx = x+19*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+6*H/24)
  cpx = x+14*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+6*H/24)
  cpx = x+16*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+8*H/24)
  ctx.stroke()
  //
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+12*H/24)
  cpx = x+9*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+12*H/24)
  cpx = x+12*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+6*H/24)
  cpx = x+13*W/24
  cpy = y+6*H/24
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+4*H/24)
  ctx.lineTo(x+12*W/24, y+4*H/24)
  ctx.lineTo(x+11*W/24, y+5*H/24)
  ctx.lineTo(x+12*W/24, y+4*H/24)
  ctx.lineTo(x+11*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+4*H/24)
  ctx.lineTo(x+18*W/24, y+4*H/24)
  ctx.lineTo(x+19*W/24, y+3*H/24)
  ctx.lineTo(x+18*W/24, y+4*H/24)
  ctx.lineTo(x+19*W/24, y+5*H/24)
  ctx.stroke()
}

function misheard_lyricsAt (x,y,W,color) {
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
  cpx = x+16*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+16*H/24)
  cpx = x+16*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+14*H/24)
  cpx = x+14*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+15*H/24)
  cpx = x+14*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+16*H/24)
  cpx = x+10*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+15*H/24)
  cpx = x+10*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+14*H/24)
  cpx = x+8*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+16*H/24)
  cpx = x+8*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+15*H/24)
  cpx = x+11*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+14*H/24)
  cpx = x+11*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+13*H/24)
  cpx = x+13*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+14*H/24)
  cpx = x+13*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+12*H/24)
  ctx.lineTo(x+11*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+13*H/24)
  ctx.lineTo(x+10*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+12*H/24)
  ctx.lineTo(x+15*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+13*H/24)
  ctx.lineTo(x+14*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+15*H/24)
  ctx.lineTo(x+9*W/24, y+17*H/24)
  ctx.lineTo(x+12*W/24, y+17*H/24)
 // ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+15*H/24)
  cpx = x+9*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+17*H/24)
  cpx = x+15*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+13*H/24)
  cpx = x+7*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+19*H/24)
  cpx = x+17*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+9*H/24)
  cpx = x+16*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+9*H/24)
  cpx = x+9*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+6*H/24)
  cpx = x+15*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+22*H/24)
  cpx = x+6*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+22*H/24)
  cpx = x+5*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+21*H/24)
  cpx = x+5*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+4*H/24)
  cpx = x+5*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+3*H/24)
  cpx = x+19*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+4*H/24)
  cpx = x+19*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+5*H/24)
  cpx = x+5*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+4*H/24)
  cpx = x+19*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+21*H/24)
  cpx = x+19*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+22*H/24)
  cpx = x+12*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+7*H/24)
  cpx = x+21*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+7*H/24)
  cpx = x+22*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+8*H/24)
  cpx = x+22*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+14*H/24)
  cpx = x+22*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+15*H/24)
  cpx = x+19*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+13*H/24)
  cpx = x+7*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+13*H/24)
  cpx = x+17*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+8*H/24)
  cpx = x+20*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+8*H/24)
  cpx = x+21*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+9*H/24)
  cpx = x+21*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+13*H/24)
  cpx = x+21*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+14*H/24)
  cpx = x+19*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+13*H/24)
  cpx = x+6*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+9*H/24)
  cpx = x+7*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+13*H/24)
  cpx = x+18*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+9*H/24)
  cpx = x+17*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+10*H/24)
  ctx.stroke()
}

function gas_station_shrubberyAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+18*H/24)
  cpx = x+17*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+16*H/24)
  cpx = x+15*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+18*H/24)
  cpx = x+15*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+16*H/24)
  cpx = x+13*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+16*H/24)
  cpx = x+16*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+14*H/24)
  cpx = x+14*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+18*H/24)
  cpx = x+6*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+21*H/24)
  cpx = x+6*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+21*H/24)
  cpx = x+6*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+22*H/24)
  cpx = x+17*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+22*H/24)
  cpx = x+18*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+21*H/24)
  cpx = x+18*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+18*H/24)
  cpx = x+6*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+18*H/24)
  cpx = x+8*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+16*H/24)
  cpx = x+6*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+14*H/24)
  cpx = x+12*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  cpx = x+10*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+12*H/24)
  cpx = x+10*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+10*H/24)
  cpx = x+8*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+16*H/24)
  cpx = x+13*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
  cpx = x+11*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+18*H/24)
  cpx = x+12*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+16*H/24)
  cpx = x+10*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+18*H/24)
  cpx = x+8*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+16*H/24)
  cpx = x+9*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+12*H/24)
  cpx = x+14*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
  cpx = x+12*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+15*H/24)
  cpx = x+14*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+12*H/24)
  cpx = x+12*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+18*H/24)
  cpx = x+13*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+15*H/24)
  cpx = x+12*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+16*H/24)
  cpx = x+10*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+15*H/24)
  cpx = x+10*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+14*H/24)
  cpx = x+8*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+13*H/24)
  cpx = x+14*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+12*H/24)
  cpx = x+16*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+13*H/24)
  cpx = x+16*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+13*H/24)
  cpx = x+9*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+13*H/24)
  cpx = x+8*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+16*H/24)
  cpx = x+8*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+14*H/24)
  cpx = x+6*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+18*H/24)
  cpx = x+18*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+16*H/24)
  cpx = x+17*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+12*H/24)
  cpx = x+16*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+10*H/24)
  cpx = x+14*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+11*H/24)
  cpx = x+11*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
  cpx = x+10*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+12*H/24)
  cpx = x+8*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+10*H/24)
  cpx = x+6*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+10*H/24)
  cpx = x+15*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+7*H/24)
  cpx = x+13*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+12*H/24)
  cpx = x+18*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+12*H/24)
  cpx = x+17*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+20*H/24)
  cpx = x+19*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+22*H/24)
  cpx = x+21*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+10*H/24)
  cpx = x+12*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+7*H/24)
  cpx = x+10*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+10*H/24)
  cpx = x+13*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+7*H/24)
  cpx = x+12*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+8*H/24)
  cpx = x+8*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+6*H/24)
  cpx = x+10*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+8*H/24)
  cpx = x+8*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+10*H/24)
  cpx = x+10*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+14*H/24)
  cpx = x+17*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+14*H/24)
  cpx = x+17*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+11*H/24)
  cpx = x+18*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+9*H/24)
  cpx = x+17*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+8*H/24)
  cpx = x+13*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+5*H/24)
  cpx = x+11*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+8*H/24)
  cpx = x+7*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+8*H/24)
  cpx = x+6*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+14*H/24)
  cpx = x+5*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+16*H/24)
  cpx = x+5*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+10*H/24)
  cpx = x+16*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+9*H/24)
  cpx = x+17*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+9*H/24)
  cpx = x+14*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+9*H/24)
  cpx = x+16*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+6*H/24)
  cpx = x+15*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+7*H/24)
  cpx = x+13*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+5*H/24)
  cpx = x+15*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+7*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+7*H/24)
  cpx = x+11*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+5*H/24)
  cpx = x+9*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+7*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+19*H/24)
  cpx = x+17*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+5*H/24)
  cpx = x+14*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+3*H/24)
  cpx = x+12*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+5*H/24)
  cpx = x+10*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+4*H/24)
  cpx = x+9*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+6*H/24)
  cpx = x+8*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+4*H/24)
  cpx = x+7*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+5*H/24)
  cpx = x+12*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+3*H/24)
  cpx = x+10*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+5*H/24)
  cpx = x+15*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+3*H/24)
  cpx = x+14*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+4*H/24)
  cpx = x+9*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+2*H/24)
  cpx = x+8*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+21*H/24)
  cpx = x+17*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+21*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+3*H/24)
  cpx = x+13*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+1*H/24)
  cpx = x+11*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+8*H/24)
  cpx = x+18*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+6*H/24)
  cpx = x+17*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+12*H/24)
  cpx = x+5*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+13*H/24)
  cpx = x+7*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+15*H/24)
  cpx = x+17*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+16*H/24)
  cpx = x+18*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+15*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+21*H/24)
  cpx = x+4*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+21*H/24)
  cpx = x+4*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+21*H/24)
  ctx.stroke()
  
  // bare twigs
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+6*H/24)
  ctx.lineTo(x+16*W/24, y+5*H/24)
  ctx.lineTo(x+18*W/24, y+5*H/24)
  ctx.lineTo(x+16*W/24, y+5*H/24)
  ctx.lineTo(x+17*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+3*H/24)
  ctx.lineTo(x+10*W/24, y+2*H/24)
  ctx.lineTo(x+9*W/24, y+2*H/24)
  ctx.lineTo(x+10*W/24, y+2*H/24)
  ctx.lineTo(x+10*W/24, y+1*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+7*H/24)
  ctx.lineTo(x+6*W/24, y+6*H/24)
  ctx.lineTo(x+4*W/24, y+6*H/24)
  ctx.lineTo(x+5*W/24, y+6*H/24)
  ctx.lineTo(x+5*W/24, y+5*H/24)
  ctx.stroke()

}

  
function chatAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+20*H/24)
  ctx.lineTo(x+20*W/24, y+18*H/24)
  ctx.lineTo(x+9*W/24, y+18*H/24)
  cpx = x+8*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+17*H/24)
  cpx = x+8*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+15*H/24)
  cpx = x+8*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+14*H/24)
  cpx = x+20*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+14*H/24)
  cpx = x+21*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+15*H/24)
  cpx = x+21*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+17*H/24)
  cpx = x+22*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+14*H/24)
  ctx.lineTo(x+4*W/24, y+12*H/24)
  ctx.lineTo(x+15*W/24, y+12*H/24)
  cpx = x+16*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+11*H/24)
  cpx = x+16*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+9*H/24)
  cpx = x+16*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+8*H/24)
  cpx = x+4*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+8*H/24)
  cpx = x+3*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+9*H/24)
  cpx = x+3*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+11*H/24)
  cpx = x+2*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+8*H/24)
  ctx.lineTo(x+20*W/24, y+6*H/24)
  ctx.lineTo(x+9*W/24, y+6*H/24)
  cpx = x+8*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+5*H/24)
  cpx = x+8*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+3*H/24)
  cpx = x+8*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+2*H/24)
  cpx = x+20*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+2*H/24)
  cpx = x+21*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+3*H/24)
  cpx = x+21*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+5*H/24)
  cpx = x+22*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+8*H/24)
  ctx.stroke()

  let r = ctx.lineWidth
  ctx.beginPath()
  ctx.arc(x+3*W/24, y+21*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+5*W/24, y+21*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+7*W/24, y+21*H/24, r, 0, Math.PI*2)
  ctx.stroke()
}

function two_ingredient_brownieAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+6*H/24)
  cpx = x+8*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+2*H/24)
  ctx.lineTo(x+18*W/24, y+3*H/24)
  ctx.lineTo(x+15*W/24, y+6*H/24)
  cpx = x+11*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+7*H/24)
  ctx.lineTo(x+4*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+6*H/24)
  ctx.lineTo(x+4*W/24, y+9*H/24)
  ctx.lineTo(x+10*W/24, y+10*H/24)
  cpx = x+12*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+9*H/24)
  ctx.lineTo(x+15*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+9*H/24)
  ctx.lineTo(x+18*W/24, y+6*H/24)
  ctx.lineTo(x+18*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+7*H/24)
  ctx.lineTo(x+10*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+13*H/24)
  ctx.lineTo(x+19*W/24, y+9*H/24)
  ctx.lineTo(x+17*W/24, y+7*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+13*H/24)
  ctx.lineTo(x+5*W/24, y+9*H/24)
  ctx.lineTo(x+5*W/24, y+13*H/24)
  ctx.lineTo(x+8*W/24, y+16*H/24)
  ctx.lineTo(x+19*W/24, y+12*H/24)
  ctx.lineTo(x+19*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+13*H/24)
  ctx.lineTo(x+8*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+15*H/24)
  ctx.lineTo(x+17*W/24, y+16*H/24)
  ctx.lineTo(x+18*W/24, y+13*H/24)
  ctx.lineTo(x+18*W/24, y+17*H/24)
  ctx.lineTo(x+17*W/24, y+19*H/24)
  ctx.lineTo(x+17*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+19*H/24)
  ctx.lineTo(x+5*W/24, y+18*H/24)
  ctx.lineTo(x+5*W/24, y+15*H/24)
  ctx.lineTo(x+7*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+15*H/24)
  ctx.lineTo(x+6*W/24, y+14*H/24)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+13*H/24)
  ctx.lineTo(x+17*W/24, y+13*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+10*H/24)
  cpx = x+2*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+16*H/24)
  cpx = x+2*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  cpx = x+22*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+16*H/24)
  cpx = x+22*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+10*H/24)
  ctx.stroke()
}

function clickbaitAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+23*H/24)
  cpx = x+6*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+12*H/24)
  cpx = x+9*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+14*H/24)
  cpx = x+6*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+13*H/24)
  cpx = x+7*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+1*H/24)
  cpx = x+7*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+8*H/24)
  cpx = x+11*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+11*H/24)
  cpx = x+12*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+18*H/24)
  cpx = x+12*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+23*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+7*H/24)
  ctx.lineTo(x+11*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+3*H/24)
  ctx.lineTo(x+8*W/24, y+6*H/24)
  ctx.lineTo(x+9*W/24, y+6*H/24)
  ctx.lineTo(x+10*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+2*H/24)
  ctx.lineTo(x+11*W/24, y+1*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+3*H/24)
  ctx.lineTo(x+6*W/24, y+3*H/24)
  ctx.stroke()

  // rightmost curve
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+8*H/24)
  cpx = x+24*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+23*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+8*H/24)
  cpx = x+17*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+1*H/24)
  ctx.stroke()


  //left eye  
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+4*H/24)
  cpx = x+8*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+4*H/24)
  ctx.stroke()
  // spine
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+13*H/24)
  cpx = x+19*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+23*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+8*H/24)
  cpx = x+15*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+3*H/24)
  cpx = x+11*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+4*H/24)
  cpx = x+15*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+1*H/24)
  cpx = x+14*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+2*H/24)
  ctx.stroke()

  ctx.setLineDash([4,5])
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+12*H/24)
  ctx.lineTo(x+2*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+11*H/24)
  ctx.lineTo(x+4*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+11*H/24)
  ctx.lineTo(x+7*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+14*H/24)
  cpx = x+5*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+15*H/24)
  cpx = x+3*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+17*H/24)
  ctx.stroke()

  ctx.setLineDash([])
  }

  function air_conditionerAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+14*H/24)
    ctx.lineTo(x+8*W/24, y+16*H/24)
    ctx.lineTo(x+22*W/24, y+16*H/24)
    ctx.lineTo(x+19*W/24, y+14*H/24)
    ctx.lineTo(x+5*W/24, y+14*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+16*H/24)
    ctx.lineTo(x+8*W/24, y+22*H/24)
    ctx.lineTo(x+22*W/24, y+22*H/24)
    ctx.lineTo(x+22*W/24, y+16*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+22*H/24)
    ctx.lineTo(x+5*W/24, y+20*H/24)
    ctx.lineTo(x+5*W/24, y+14*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+14*H/24)
    ctx.lineTo(x+19*W/24, y+12*H/24)
    ctx.lineTo(x+5*W/24, y+12*H/24)
    ctx.lineTo(x+5*W/24, y+13*H/24)
    ctx.lineTo(x+5*W/24, y+14*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+21*H/24)
    ctx.lineTo(x+3*W/24, y+21*H/24)
    ctx.lineTo(x+3*W/24, y+2*H/24)
    ctx.lineTo(x+21*W/24, y+2*H/24)
    ctx.lineTo(x+21*W/24, y+15*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+10*H/24)
    ctx.lineTo(x+19*W/24, y+4*H/24)
    ctx.lineTo(x+13*W/24, y+4*H/24)
    ctx.lineTo(x+13*W/24, y+10*H/24)
    ctx.lineTo(x+19*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+10*H/24)
    ctx.lineTo(x+5*W/24, y+10*H/24)
    ctx.lineTo(x+5*W/24, y+4*H/24)
    ctx.lineTo(x+11*W/24, y+4*H/24)
    ctx.lineTo(x+11*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+17*H/24)
    ctx.lineTo(x+9*W/24, y+21*H/24)
    ctx.lineTo(x+21*W/24, y+21*H/24)
    ctx.lineTo(x+21*W/24, y+17*H/24)
    ctx.lineTo(x+9*W/24, y+17*H/24)
    ctx.stroke()
  }
  
  function big_fishAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+12*H/24)
    cpx = x+4*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+10*H/24)
    cpx = x+8*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+12*H/24)
    cpx = x+11*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
    cpx = x+12*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
    cpx = x+11*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+12*H/24)
    cpx = x+8*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+14*H/24)
    cpx = x+4*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+4*W/24, y+12*H/24, W/48, 0, Math.PI*2)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(x+22*W/24, y+22*H/24)
    cpx = x+18*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+19*H/24)
    cpx = x+16*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+12*H/24)
    cpx = x+8*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+4*H/24)
    cpx = x+16*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+2*H/24)
    ctx.stroke()
   // eye
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+9*H/24)
    cpx = x+16*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+7*H/24)
    cpx = x+16*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+5*H/24)
    cpx = x+20*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+7*H/24)
    cpx = x+20*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+9*H/24)
    ctx.stroke()
  }
  
function gateAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+20*H/24)
  ctx.lineTo(x+22*W/24, y+20*H/24)
  ctx.lineTo(x+22*W/24, y+6*H/24)
  ctx.lineTo(x+16*W/24, y+6*H/24)
  cpx = x+16*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+3*H/24)
  cpx = x+11*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+3*H/24)
  cpx = x+8*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+6*H/24)
  cpx = x+2*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+6*H/24)
  cpx = x+2*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+6*H/24)
  ctx.lineTo(x+8*W/24, y+20*H/24)
  ctx.lineTo(x+16*W/24, y+20*H/24)
  ctx.lineTo(x+16*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+4*H/24)
  ctx.lineTo(x+2*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+4*H/24)
  ctx.lineTo(x+4*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+4*H/24)
  ctx.lineTo(x+6*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+4*H/24)
  ctx.lineTo(x+18*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+4*H/24)
  ctx.lineTo(x+20*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+4*H/24)
  ctx.lineTo(x+22*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+6*H/24)
  ctx.lineTo(x+15*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+3*H/24)
  ctx.lineTo(x+10*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+2*H/24)
  ctx.lineTo(x+12*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+3*H/24)
  ctx.lineTo(x+14*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+18*H/24)
  ctx.lineTo(x+22*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+8*H/24)
  ctx.lineTo(x+22*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+18*H/24)
  ctx.lineTo(x+2*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+8*H/24)
  ctx.lineTo(x+2*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+4*H/24)
  ctx.lineTo(x+8*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+4*H/24)
  ctx.lineTo(x+16*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+2*H/24)
  ctx.lineTo(x+10*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+2*H/24)
  ctx.lineTo(x+14*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+11*H/24)
  ctx.lineTo(x+14*W/24, y+11*H/24)
  ctx.lineTo(x+14*W/24, y+13*H/24)
  ctx.lineTo(x+16*W/24, y+13*H/24)
  ctx.lineTo(x+16*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+18*H/24)
  ctx.lineTo(x+15*W/24, y+18*H/24)
  ctx.stroke()
}
function observatoryAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+13*H/24)
  ctx.lineTo(x+3*W/24, y+22*H/24)
  ctx.lineTo(x+21*W/24, y+22*H/24)
  ctx.lineTo(x+21*W/24, y+13*H/24)
  ctx.lineTo(x+3*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+11*H/24)
  ctx.lineTo(x+22*W/24, y+11*H/24)
  ctx.lineTo(x+22*W/24, y+13*H/24)
  ctx.lineTo(x+21*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+11*H/24)
  cpx = x+3*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+21*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+2*H/24)
  cpx = x+15*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+2*H/24)
  cpx = x+9*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+8*H/24)
  cpx = x+10*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+6*H/24)
  cpx = x+10*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
  cpx = x+14*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+6*H/24)
  cpx = x+14*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
  ctx.stroke()
}

function mountainAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+20*H/24)
  ctx.lineTo(x+6*W/24, y+16*H/24)
  ctx.lineTo(x+8*W/24, y+15*H/24)
  ctx.lineTo(x+8*W/24, y+11*H/24)
  ctx.lineTo(x+11*W/24, y+8*H/24)
  ctx.lineTo(x+12*W/24, y+6*H/24)
  ctx.lineTo(x+13*W/24, y+2*H/24)
  ctx.lineTo(x+15*W/24, y+3*H/24)
  ctx.lineTo(x+16*W/24, y+6*H/24)
  ctx.lineTo(x+18*W/24, y+10*H/24)
  ctx.lineTo(x+21*W/24, y+12*H/24)
  ctx.lineTo(x+22*W/24, y+17*H/24)
  ctx.lineTo(x+23*W/24, y+19*H/24)
  ctx.lineTo(x+23*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+4*H/24)
  ctx.lineTo(x+14*W/24, y+6*H/24)
  ctx.lineTo(x+15*W/24, y+6*H/24)
  ctx.lineTo(x+14*W/24, y+9*H/24)
  ctx.lineTo(x+16*W/24, y+10*H/24)
  ctx.lineTo(x+17*W/24, y+12*H/24)
  ctx.lineTo(x+17*W/24, y+16*H/24)
  ctx.lineTo(x+19*W/24, y+18*H/24)
  ctx.lineTo(x+18*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+8*H/24)
  ctx.lineTo(x+11*W/24, y+11*H/24)
  ctx.lineTo(x+11*W/24, y+14*H/24)
  ctx.lineTo(x+10*W/24, y+13*H/24)
  ctx.lineTo(x+10*W/24, y+17*H/24)
  ctx.lineTo(x+9*W/24, y+18*H/24)
  ctx.lineTo(x+8*W/24, y+20*H/24)
  ctx.stroke()
}
  function forestAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+22*H/24)
    ctx.lineTo(x+4*W/24, y+21*H/24)
    ctx.lineTo(x+5*W/24, y+21*H/24)
    ctx.lineTo(x+4*W/24, y+18*H/24)
    ctx.lineTo(x+3*W/24, y+21*H/24)
    ctx.lineTo(x+4*W/24, y+21*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+20*H/24)
    ctx.lineTo(x+8*W/24, y+19*H/24)
    ctx.lineTo(x+9*W/24, y+19*H/24)
    ctx.lineTo(x+8*W/24, y+16*H/24)
    ctx.lineTo(x+7*W/24, y+19*H/24)
    ctx.lineTo(x+8*W/24, y+19*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+16*H/24)
    ctx.lineTo(x+5*W/24, y+15*H/24)
    ctx.lineTo(x+6*W/24, y+15*H/24)
    ctx.lineTo(x+5*W/24, y+12*H/24)
    ctx.lineTo(x+4*W/24, y+15*H/24)
    ctx.lineTo(x+5*W/24, y+15*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+17*H/24)
    ctx.lineTo(x+11*W/24, y+16*H/24)
    ctx.lineTo(x+10*W/24, y+16*H/24)
    ctx.lineTo(x+11*W/24, y+13*H/24)
    ctx.lineTo(x+12*W/24, y+16*H/24)
    ctx.lineTo(x+11*W/24, y+16*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+13*H/24)
    ctx.lineTo(x+9*W/24, y+12*H/24)
    ctx.lineTo(x+10*W/24, y+12*H/24)
    ctx.lineTo(x+9*W/24, y+9*H/24)
    ctx.lineTo(x+8*W/24, y+12*H/24)
    ctx.lineTo(x+9*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+12*H/24)
    ctx.lineTo(x+13*W/24, y+11*H/24)
    ctx.lineTo(x+12*W/24, y+11*H/24)
    ctx.lineTo(x+13*W/24, y+8*H/24)
    ctx.lineTo(x+14*W/24, y+11*H/24)
    ctx.lineTo(x+13*W/24, y+11*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+11*H/24)
    ctx.lineTo(x+3*W/24, y+10*H/24)
    ctx.lineTo(x+2*W/24, y+10*H/24)
    ctx.lineTo(x+3*W/24, y+7*H/24)
    ctx.lineTo(x+4*W/24, y+10*H/24)
    ctx.lineTo(x+3*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+22*H/24)
    ctx.lineTo(x+11*W/24, y+21*H/24)
    ctx.lineTo(x+12*W/24, y+21*H/24)
    ctx.lineTo(x+11*W/24, y+18*H/24)
    ctx.lineTo(x+10*W/24, y+21*H/24)
    ctx.lineTo(x+11*W/24, y+21*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+10*H/24)
    ctx.lineTo(x+6*W/24, y+9*H/24)
    ctx.lineTo(x+7*W/24, y+9*H/24)
    ctx.lineTo(x+6*W/24, y+6*H/24)
    ctx.lineTo(x+5*W/24, y+9*H/24)
    ctx.lineTo(x+6*W/24, y+9*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+21*H/24)
    ctx.lineTo(x+14*W/24, y+20*H/24)
    ctx.lineTo(x+13*W/24, y+20*H/24)
    ctx.lineTo(x+14*W/24, y+17*H/24)
    ctx.lineTo(x+15*W/24, y+20*H/24)
    ctx.lineTo(x+14*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+8*H/24)
    ctx.lineTo(x+11*W/24, y+7*H/24)
    ctx.lineTo(x+12*W/24, y+7*H/24)
    ctx.lineTo(x+11*W/24, y+4*H/24)
    ctx.lineTo(x+10*W/24, y+7*H/24)
    ctx.lineTo(x+11*W/24, y+7*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+21*H/24)
    ctx.lineTo(x+18*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+21*H/24)
    ctx.lineTo(x+19*W/24, y+21*H/24)
    ctx.lineTo(x+18*W/24, y+18*H/24)
    ctx.lineTo(x+17*W/24, y+21*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+16*H/24)
    ctx.lineTo(x+15*W/24, y+15*H/24)
    ctx.lineTo(x+14*W/24, y+15*H/24)
    ctx.lineTo(x+15*W/24, y+12*H/24)
    ctx.lineTo(x+16*W/24, y+15*H/24)
    ctx.lineTo(x+15*W/24, y+15*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+5*H/24)
    ctx.lineTo(x+3*W/24, y+4*H/24)
    ctx.lineTo(x+2*W/24, y+4*H/24)
    ctx.lineTo(x+3*W/24, y+1*H/24)
    ctx.lineTo(x+4*W/24, y+4*H/24)
    ctx.lineTo(x+3*W/24, y+4*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+6*H/24)
    ctx.lineTo(x+8*W/24, y+5*H/24)
    ctx.lineTo(x+7*W/24, y+5*H/24)
    ctx.lineTo(x+8*W/24, y+2*H/24)
    ctx.lineTo(x+9*W/24, y+5*H/24)
    ctx.lineTo(x+8*W/24, y+5*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+21*W/24, y+21*H/24)
    ctx.lineTo(x+21*W/24, y+20*H/24)
    ctx.lineTo(x+22*W/24, y+20*H/24)
    ctx.lineTo(x+21*W/24, y+17*H/24)
    ctx.lineTo(x+20*W/24, y+20*H/24)
    ctx.lineTo(x+21*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+21*W/24, y+12*H/24)
    ctx.lineTo(x+21*W/24, y+11*H/24)
    ctx.lineTo(x+22*W/24, y+11*H/24)
    ctx.lineTo(x+21*W/24, y+8*H/24)
    ctx.lineTo(x+20*W/24, y+11*H/24)
    ctx.lineTo(x+21*W/24, y+11*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+20*W/24, y+16*H/24)
    ctx.lineTo(x+20*W/24, y+15*H/24)
    ctx.lineTo(x+21*W/24, y+15*H/24)
    ctx.lineTo(x+20*W/24, y+12*H/24)
    ctx.lineTo(x+19*W/24, y+15*H/24)
    ctx.lineTo(x+20*W/24, y+15*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+14*H/24)
    ctx.lineTo(x+17*W/24, y+13*H/24)
    ctx.lineTo(x+18*W/24, y+13*H/24)
    ctx.lineTo(x+17*W/24, y+10*H/24)
    ctx.lineTo(x+16*W/24, y+13*H/24)
    ctx.lineTo(x+17*W/24, y+13*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+9*H/24)
    ctx.lineTo(x+15*W/24, y+8*H/24)
    ctx.lineTo(x+14*W/24, y+8*H/24)
    ctx.lineTo(x+15*W/24, y+5*H/24)
    ctx.lineTo(x+16*W/24, y+8*H/24)
    ctx.lineTo(x+15*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+9*H/24)
    ctx.lineTo(x+19*W/24, y+8*H/24)
    ctx.lineTo(x+18*W/24, y+8*H/24)
    ctx.lineTo(x+19*W/24, y+5*H/24)
    ctx.lineTo(x+20*W/24, y+8*H/24)
    ctx.lineTo(x+19*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+6*H/24)
    ctx.lineTo(x+17*W/24, y+5*H/24)
    ctx.lineTo(x+18*W/24, y+5*H/24)
    ctx.lineTo(x+17*W/24, y+2*H/24)
    ctx.lineTo(x+16*W/24, y+5*H/24)
    ctx.lineTo(x+17*W/24, y+5*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+21*W/24, y+6*H/24)
    ctx.lineTo(x+21*W/24, y+5*H/24)
    ctx.lineTo(x+22*W/24, y+5*H/24)
    ctx.lineTo(x+21*W/24, y+2*H/24)
    ctx.lineTo(x+20*W/24, y+5*H/24)
    ctx.lineTo(x+21*W/24, y+5*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+5*H/24)
    ctx.lineTo(x+13*W/24, y+4*H/24)
    ctx.lineTo(x+14*W/24, y+4*H/24)
    ctx.lineTo(x+13*W/24, y+1*H/24)
    ctx.lineTo(x+12*W/24, y+4*H/24)
    ctx.lineTo(x+13*W/24, y+4*H/24)
    ctx.stroke()
  }
  
  function bee_hiveAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+22*H/24)
    cpx = x+4*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+21*H/24)
    cpx = x+4*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+20*H/24)
    cpx = x+3*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+19*H/24)
    cpx = x+3*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+18*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+18*H/24)
    cpx = x+2*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+17*H/24)
    cpx = x+2*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+16*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+16*H/24)
    cpx = x+2*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+15*H/24)
    cpx = x+2*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+14*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+14*H/24)
    cpx = x+2*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+13*H/24)
    cpx = x+2*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+12*H/24)
    cpx = x+3*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+11*H/24)
    cpx = x+3*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+10*H/24)
    cpx = x+4*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+9*H/24)
    cpx = x+4*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+8*H/24)
    cpx = x+5*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+7*H/24)
    cpx = x+5*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+6*H/24)
    cpx = x+6*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+5*H/24)
    cpx = x+6*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+4*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+4*H/24)
    cpx = x+7*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+3*H/24)
    cpx = x+7*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+2*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+22*H/24)
    cpx = x+20*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+21*H/24)
    cpx = x+20*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+20*W/24, y+20*H/24)
    cpx = x+21*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+19*H/24)
    cpx = x+21*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+18*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+21*W/24, y+18*H/24)
    cpx = x+22*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+17*H/24)
    cpx = x+22*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+16*H/24)
    cpx = x+22*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+15*H/24)
    cpx = x+22*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+14*H/24)
    cpx = x+22*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+13*H/24)
    cpx = x+22*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+20*W/24, y+12*H/24)
    cpx = x+21*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+11*H/24)
    cpx = x+21*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+10*H/24)
    cpx = x+20*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+9*H/24)
    cpx = x+20*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+8*H/24)
    cpx = x+19*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+7*H/24)
    cpx = x+19*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+6*H/24)
    cpx = x+18*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+5*H/24)
    cpx = x+18*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+4*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+4*H/24)
    cpx = x+17*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+3*H/24)
    cpx = x+17*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+2*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+2*H/24)
    ctx.lineTo(x+16*W/24, y+2*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+22*H/24)
    ctx.lineTo(x+19*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+4*H/24)
    ctx.lineTo(x+16*W/24, y+4*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+6*H/24)
    ctx.lineTo(x+17*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+8*H/24)
    ctx.lineTo(x+18*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+10*H/24)
    ctx.lineTo(x+19*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+12*H/24)
    ctx.lineTo(x+20*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+21*H/24)
    cpx = x+11*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+20*H/24)
    cpx = x+11*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+19*H/24)
    cpx = x+13*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+20*H/24)
    cpx = x+13*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+21*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+14*H/24)
    ctx.lineTo(x+21*W/24, y+14*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+16*H/24)
    ctx.lineTo(x+21*W/24, y+16*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+18*H/24)
    ctx.lineTo(x+20*W/24, y+18*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+20*H/24)
    ctx.lineTo(x+11*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+20*H/24)
    ctx.lineTo(x+19*W/24, y+20*H/24)
    ctx.stroke()
  }
  
  function flat_tireAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+20*H/24)
    cpx = x+19*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+20*H/24)
    cpx = x+22*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+12*H/24)
    cpx = x+22*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
    cpx = x+2*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+12*H/24)
    cpx = x+2*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+20*H/24)
    cpx = x+12*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+20*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+8*H/24)
    cpx = x+18*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+14*H/24)
    cpx = x+18*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+20*H/24)
    cpx = x+6*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+14*H/24)
    cpx = x+6*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+19*H/24)
    cpx = x+7*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+14*H/24)
    cpx = x+7*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+9*H/24)
    cpx = x+17*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+14*H/24)
    cpx = x+17*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+19*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+16*H/24)
    cpx = x+10*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+14*H/24)
    cpx = x+10*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
    cpx = x+14*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+14*H/24)
    cpx = x+14*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+16*H/24)
    ctx.stroke()
  }
  
  function wife_beaterAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+22*W/24, y+22*H/24)
    cpx = x+22*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+12*H/24)
    cpx = x+18*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+2*H/24)
    cpx = x+16*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+2*H/24)
    cpx = x+16*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
    cpx = x+8*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+2*H/24)
    cpx = x+6*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+2*H/24)
    cpx = x+6*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+12*H/24)
    ctx.lineTo(x+2*W/24, y+22*H/24)
    ctx.lineTo(x+22*W/24, y+22*H/24)
    ctx.stroke()
  }
  
  function body_of_waterAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+18*H/24)
    cpx = x+6*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+16*H/24)
    cpx = x+6*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+18*H/24)
    cpx = x+8*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+18*H/24)
    //ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+18*H/24)
    cpx = x+6*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+16*H/24)
    cpx = x+6*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+18*H/24)
    cpx = x+10*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+16*H/24)
    cpx = x+10*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+18*H/24)
    cpx = x+14*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+16*H/24)
    cpx = x+14*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+18*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+14*H/24)
    cpx = x+8*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+12*H/24)
    cpx = x+8*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+14*H/24)
    cpx = x+12*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
    cpx = x+12*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+14*H/24)
    cpx = x+16*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+12*H/24)
    cpx = x+16*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+14*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+10*H/24)
    cpx = x+13*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+8*H/24)
    cpx = x+13*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+10*H/24)
    cpx = x+17*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+8*H/24)
    cpx = x+17*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+6*H/24)
    cpx = x+14*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+4*H/24)
    cpx = x+14*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+6*H/24)
    cpx = x+18*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+4*H/24)
    cpx = x+18*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+22*H/24)
    cpx = x+2*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+16*H/24)
    cpx = x+3*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+11*H/24)
    cpx = x+10*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+7*H/24)
    cpx = x+10*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+2*H/24)
    cpx = x+22*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+8*H/24)
    cpx = x+22*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+22*H/24)
    ctx.stroke()
  }
  
  function blind_eyeAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+2*H/24)
    ctx.lineTo(x+22*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+12*H/24)
    cpx = x+12*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+12*H/24)
    cpx = x+12*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+14*H/24)
    cpx = x+8*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+9*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+14*H/24)
    cpx = x+16*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+9*H/24)
    ctx.stroke()
  }
  
  function crazy_wallAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+2*H/24)
    ctx.lineTo(x+3*W/24, y+8*H/24)
    ctx.lineTo(x+8*W/24, y+8*H/24)
    ctx.lineTo(x+8*W/24, y+2*H/24)
    ctx.lineTo(x+3*W/24, y+2*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+3*H/24)
    ctx.lineTo(x+22*W/24, y+3*H/24)
    ctx.lineTo(x+22*W/24, y+9*H/24)
    ctx.lineTo(x+16*W/24, y+9*H/24)
    ctx.lineTo(x+16*W/24, y+3*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+10*H/24)
    ctx.lineTo(x+9*W/24, y+17*H/24)
    ctx.lineTo(x+15*W/24, y+17*H/24)
    ctx.lineTo(x+15*W/24, y+10*H/24)
    ctx.lineTo(x+9*W/24, y+10*H/24)
    //ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+17*H/24)
    ctx.lineTo(x+8*W/24, y+17*H/24)
    ctx.lineTo(x+8*W/24, y+22*H/24)
    ctx.lineTo(x+2*W/24, y+22*H/24)
    ctx.lineTo(x+2*W/24, y+17*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+14*H/24)
    ctx.lineTo(x+18*W/24, y+21*H/24)
    ctx.lineTo(x+23*W/24, y+21*H/24)
    ctx.lineTo(x+23*W/24, y+16*H/24)
    ctx.lineTo(x+21*W/24, y+14*H/24)
    ctx.lineTo(x+18*W/24, y+14*H/24)
    ctx.stroke()
   
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+4*H/24)
    cpx = x+7*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+20*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+4*H/24)
    cpx = x+12*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+5*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+11*H/24)
    ctx.lineTo(x+14*W/24, y+9*H/24)
    ctx.lineTo(x+16*W/24, y+16*H/24)
    ctx.lineTo(x+10*W/24, y+18*H/24)
    ctx.lineTo(x+8*W/24, y+11*H/24)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+5*H/24)
    cpx = x+18*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+13*H/24)
    cpx = x+11*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+19*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+13*H/24)
    cpx = x+17*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+17*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+20*W/24, y+6*H/24)
    ctx.lineTo(x+19*W/24, y+16*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+4*H/24)
    ctx.lineTo(x+7*W/24, y+20*H/24)
    ctx.stroke()
    
    
    // drop corner
    ctx.beginPath()
    ctx.moveTo(x+21*W/24, y+14*H/24)
    ctx.lineTo(x+21*W/24, y+16*H/24)
    ctx.lineTo(x+23*W/24, y+16*H/24)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+20*W/24, y+15*H/24)
    ctx.lineTo(x+5*W/24, y+5*H/24)
    ctx.stroke()
    
    //tacks
    let r = W/72
    ctx.beginPath()
    ctx.arc(x+4*W/24, y+4*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc( x+7*W/24, y+20*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x+5*W/24, y+4*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x+18*W/24, y+5*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x+19*W/24, y+5*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(cx+12*W/24, y+12*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x+11*W/24, y+13*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc( x+5*W/24, y+19*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x+12*W/24, y+13*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x+21*W/24, y+17*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x+20*W/24, y+6*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x+19*W/24, y+16*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x+4*W/24, y+4*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x+7*W/24, y+20*H/24, r, 0, Math.PI*2)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.arc(x+12*W/24, y+12*H/24, r, 0, Math.PI*2)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.arc(x+20*W/24, y+15*H/24, r, 0, Math.PI*2)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.arc(x+5*W/24, y+5*H/24, r, 0, Math.PI*2)
    ctx.stroke()
  }
  
  function flipflopAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+22*H/24)
    cpx = x+17*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+10*H/24)
    cpx = x+17*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
    cpx = x+7*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+10*H/24)
    cpx = x+9*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+18*H/24)
    cpx = x+8*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+9*H/24)
    cpx = x+9*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+5*H/24)
    cpx = x+16*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+9*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+5*H/24)
    cpx = x+12*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+3*H/24)
    ctx.stroke()
    
    let r = W/48
    
    ctx.beginPath()
    ctx.arc(x+12*W/24, y+3*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x+16*W/24, y+9*H/24, r, 0, Math.PI*2)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(x+9*W/24, y+9*H/24, r, 0, Math.PI*2)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+2*H/24)
    cpx = x+18*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+10*H/24)
    cpx = x+18*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
    ctx.stroke()
  }
  
  function greenwashingAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+22*H/24)
    cpx = x+4*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+14*H/24)
    cpx = x+4*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+7*H/24)
    cpx = x+11*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
    cpx = x+13*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+7*H/24)
    cpx = x+20*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+14*H/24)
    cpx = x+20*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+18*H/24)
    cpx = x+10*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+16*H/24)
    cpx = x+10*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+14*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+14*H/24)
    cpx = x+12*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+18*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+13*H/24)
    cpx = x+12*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+13*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+18*H/24)
    ctx.lineTo(x+7*W/24, y+11*H/24)
    ctx.stroke()
    //b loop
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+14*H/24)
    cpx = x+8*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+14*H/24)
    cpx = x+10*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+16*H/24)
    cpx = x+10*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+18*H/24)
    cpx = x+7*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+18*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+18*H/24)
    cpx = x+14*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+16*H/24)
    cpx = x+14*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+14*H/24)
    cpx = x+18*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+16*H/24)
    cpx = x+18*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+18*H/24)
    ctx.stroke()
    
  }
  
  function bribeAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+7*H/24)
    cpx = x+12*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
    cpx = x+9*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+10*H/24)
    cpx = x+9*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+13*H/24)
    cpx = x+15*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+16*H/24)
    cpx = x+15*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+19*H/24)
    cpx = x+9*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+19*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+6*H/24)
    ctx.lineTo(x+12*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+22*H/24)
    ctx.lineTo(x+20*W/24, y+22*H/24)
    ctx.lineTo(x+20*W/24, y+2*H/24)
    ctx.lineTo(x+4*W/24, y+2*H/24)
    ctx.lineTo(x+4*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+2*H/24)
    ctx.lineTo(x+5*W/24, y+4*H/24)
    ctx.lineTo(x+19*W/24, y+4*H/24)
    ctx.lineTo(x+20*W/24, y+2*H/24)
    ctx.stroke()
    
    ctx.setLineDash([W/96,W/32])
  
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+19*H/24)
    ctx.lineTo(x+19*W/24, y+21*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+7*H/24)
    ctx.lineTo(x+19*W/24, y+5*H/24)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+19*H/24)
    ctx.lineTo(x+5*W/24, y+21*H/24)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+7*H/24)
    ctx.lineTo(x+5*W/24, y+5*H/24)
    ctx.stroke()
  
    ctx.setLineDash([])
  }
  
  function deadlockAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+10*H/24)
    ctx.lineTo(x+2*W/24, y+14*H/24)
    ctx.lineTo(x+6*W/24, y+14*H/24)
    ctx.lineTo(x+6*W/24, y+10*H/24)
    ctx.lineTo(x+2*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+10*H/24)
    ctx.lineTo(x+22*W/24, y+10*H/24)
    ctx.lineTo(x+22*W/24, y+14*H/24)
    ctx.lineTo(x+18*W/24, y+14*H/24)
    ctx.lineTo(x+18*W/24, y+11*H/24)
    ctx.lineTo(x+18*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+22*H/24)
    cpx = x+10*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+20*H/24)
    cpx = x+10*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+18*H/24)
    cpx = x+14*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+20*H/24)
    cpx = x+14*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+2*H/24)
    cpx = x+14*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+4*H/24)
    cpx = x+14*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+6*H/24)
    cpx = x+10*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+4*H/24)
    cpx = x+10*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+15*H/24)
    ctx.lineTo(x+14*W/24, y+18*H/24)
    ctx.lineTo(x+14*W/24, y+16*H/24)
    ctx.lineTo(x+14*W/24, y+18*H/24)
    ctx.lineTo(x+16*W/24, y+18*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+9*H/24)
    ctx.lineTo(x+10*W/24, y+6*H/24)
    ctx.lineTo(x+10*W/24, y+8*H/24)
    ctx.lineTo(x+10*W/24, y+6*H/24)
    ctx.lineTo(x+8*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+15*H/24)
    ctx.lineTo(x+7*W/24, y+17*H/24)
    ctx.lineTo(x+7*W/24, y+15*H/24)
    ctx.lineTo(x+9*W/24, y+15*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+9*H/24)
    ctx.lineTo(x+17*W/24, y+9*H/24)
    ctx.lineTo(x+17*W/24, y+7*H/24)
    ctx.stroke()
    
    ctx.setLineDash([W/32, W/32])
    
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+15*H/24)
    ctx.lineTo(x+10*W/24, y+18*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+6*H/24)
    ctx.lineTo(x+17*W/24, y+9*H/24)
    ctx.stroke()
    ctx.setLineDash([])
  }
  
  function corridorAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+22*H/24)
    ctx.lineTo(x+11*W/24, y+13*H/24)
    ctx.lineTo(x+13*W/24, y+13*H/24)
    ctx.lineTo(x+22*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+10*H/24)
    ctx.lineTo(x+2*W/24, y+2*H/24)
    ctx.lineTo(x+11*W/24, y+10*H/24)
    ctx.lineTo(x+13*W/24, y+10*H/24)
    ctx.lineTo(x+22*W/24, y+2*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+10*H/24)
    ctx.lineTo(x+11*W/24, y+13*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+10*H/24)
    ctx.lineTo(x+13*W/24, y+13*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+22*W/24, y+22*H/24)
    ctx.lineTo(x+22*W/24, y+7*H/24)
    ctx.lineTo(x+19*W/24, y+9*H/24)
    ctx.lineTo(x+19*W/24, y+19*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+10*H/24)
    ctx.lineTo(x+17*W/24, y+17*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+11*H/24)
    ctx.lineTo(x+17*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+11*H/24)
    ctx.lineTo(x+15*W/24, y+15*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+15*H/24)
    ctx.lineTo(x+9*W/24, y+11*H/24)
    ctx.lineTo(x+7*W/24, y+10*H/24)
    ctx.lineTo(x+7*W/24, y+17*H/24)
    ctx.stroke()
  

  
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+19*H/24)
    ctx.lineTo(x+5*W/24, y+9*H/24)
    ctx.lineTo(x+2*W/24, y+7*H/24)
    ctx.lineTo(x+2*W/24, y+22*H/24)
    ctx.stroke()
  }
  
  function appleAt (x,y,W,color) {
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
    cpx = x+12*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+20*H/24)
    cpx = x+22*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+10*H/24)
    cpx = x+22*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+3*H/24)
    cpx = x+13*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
    cpx = x+11*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+3*H/24)
    cpx = x+2*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+10*H/24)
    cpx = x+2*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+20*H/24)
    cpx = x+12*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+18*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+8*H/24)
    cpx = x+12*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+3*H/24)
    cpx = x+12*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
    cpx = x+11*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
    ctx.stroke()
  
    
  }
  
  function starsAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+22*W/24, y+15*H/24)
    ctx.lineTo(x+19*W/24, y+19*H/24)
    ctx.lineTo(x+12*W/24, y+15*H/24)
    ctx.lineTo(x+13*W/24, y+10*H/24)
    ctx.lineTo(x+22*W/24, y+15*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+7*H/24)
    ctx.lineTo(x+13*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+7*H/24)
    ctx.lineTo(x+8*W/24, y+4*H/24)
    ctx.lineTo(x+2*W/24, y+3*H/24)
    ctx.stroke()
    // arcs 
    let r = ctx.lineWidth
    ctx.beginPath()
    ctx.arc(x+22*W/24, y+15*H/24, r, 0, Math.PI*2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x+19*W/24, y+19*H/24, r, 0, Math.PI*2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x+12*W/24, y+15*H/24, r, 0, Math.PI*2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x+13*W/24, y+10*H/24, r, 0, Math.PI*2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x+22*W/24, y+15*H/24, r, 0, Math.PI*2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x+10*W/24, y+7*H/24, r, 0, Math.PI*2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x+8*W/24, y+4*H/24, r, 0, Math.PI*2)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x+2*W/24, y+3*H/24, r, 0, Math.PI*2)
    ctx.stroke()
  }
  
  function mirrorAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+22*H/24)
    cpx = x+14*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+20*H/24)
    cpx = x+14*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+14*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+22*H/24)
    cpx = x+10*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+20*H/24)
    cpx = x+10*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+14*H/24)
    cpx = x+6*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+8*H/24)
    cpx = x+6*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
    cpx = x+18*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+8*H/24)
    cpx = x+18*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+14*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+13*H/24)
    cpx = x+7*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+8*H/24)
    cpx = x+7*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+3*H/24)
    cpx = x+17*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+8*H/24)
    cpx = x+17*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+13*H/24)
    ctx.stroke()
  }
  
  function phoneAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+3*H/24)
    cpx = x+6*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+2*H/24)
    cpx = x+17*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+2*H/24)
    cpx = x+18*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+3*H/24)
    cpx = x+18*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+21*H/24)
    cpx = x+18*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+22*H/24)
    cpx = x+7*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+22*H/24)
    cpx = x+6*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+21*H/24)
    cpx = x+6*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+3*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+21*H/24)
    cpx = x+11*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+20*H/24)
    cpx = x+11*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+19*H/24)
    cpx = x+13*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+20*H/24)
    cpx = x+13*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+21*H/24)
    ctx.stroke()

  
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+22*H/24)
    cpx = x+19*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+21*H/24)
    cpx = x+19*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+3*H/24)
    cpx = x+19*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+2*H/24)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+2*H/24)
    cpx = x+15*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+3*H/24)
    cpx = x+10*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+3*H/24)
    cpx = x+9*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+2*H/24)
    ctx.stroke()
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