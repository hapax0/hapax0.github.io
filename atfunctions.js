let atList = ["origamiAt", "airplaneAt", "envelopeAt", "sardinesAt", "refractionAt", "starsAt", "mountainAt", 
  "mothAt", "firebirdAt", "spiralAt", "finger_gunAt", "vineAt", "triangleAt", "flaskAt", "pencilAt", "forestAt", 
  "elephantAt", "coreAt", "orbitAt", "lensAt", "theoremAt", "floppyAt", "spiderAt", "shoesAt", "bee_hiveAt", 
  "mushroomAt", "catAt", "birdAt", "functionAt", "coneAt", "pageAt", "urnAt", "venn_diagramAt", "monsterAt", "frameAt",
   "pantsAt", "tvAt", "duckrabbitAt", "fishAt", "cactusAt", "umbrellaAt", "flameAt", "bulbAt", "deadlockAt",
   "mazeAt", "transomAt", "cameraAt", /*"bowed_HeronAt","pointy_houseAt", "shellsAt", */ 
   "bicycleAt", "cigarettesAt", "phoneAt", "wife_beaterAt", "clickbaitAt", "two_ingredient_brownieAt",
  "appleAt", "bridgeAt", "bugAt", "mailboxAt", "jumpropeAt",  "observatoryAt", "heronAt", "crazy_wallAt", 
  "houseAt", "falling_chairAt", "birdhouseAt", "factoryAt","phaseAt", "mirrorAt", "blind_eyeAt", "gateAt", 
  "leafAt", /*"allAt", "thenAt", "existAt", "tildeAt",*/ "userAt", "heartAt", "glassAt", "prayerAt", "body_of_waterAt",
  "thoughtAt", "skullAt", "lampAt", "chairAt", "cubeAt", "full_cupAt", "mouseAt", "uapAt", "flipflopAt", 
  "chatAt", "gas_station_shrubberyAt", "misheard_lyricsAt", "plate_tectonicsAt", "negative_spaceAt",
  "stairsAt", "treeAt", "slideAt", "ladderAt", "swingAt", "cakeAt", "nice_thingsAt", "fossilAt", "tissue_boxAt",
  "piechartAt", "too_expensive_burgerAt", 'get_off_my_lawnAt',"virusAt", "two_car_garageAt","flat_tireAt",
  "big_fishAt", "greenwashingAt", "bribeAt", "entanglementAt", "unread_spreadAt", "ghost_in_the_machineAt",
  'bandaidAt', "witch_huntAt", "racetrackAt", "heirloomAt", "rainAt", "cloudsAt",
  "doorAt", "sunAt","waveAt", "lighthouseAt", "sofaAt", "windowAt", "conference_room_bAt","talkAt",
  "medicationAt","paint_brushAt", "hammerAt","pencil_sharpenerAt","clickAt", "stumpAt",
  "shopping_listAt","paper_bagAt","press_the_buttonAt",
  "icebergAt","screwAt","nailAt",
  "parking_lotAt","lemonAt","dieAt","riverAt","progress_indicatorAt","postcardAt", "keyholeAt", "puzzle_pieceAt", "monitorAt", "sailboatAt", "impossibleAt", "uphillAt", "connect_the_dotsAt","dog_whistleAt"]  
  
  let noThe = ["press_the_buttonAt","conference_room_bAt", "ghost_in_the_machineAt", "gas_station_shrubberyAt", "greenwashingAt", "refractionAt", "clickbaotAt",  "plate_tectonicsAt",
  "two_ingredient_brownieAt","misheard_lyricsAt", "negative_spaceAt","nice_thingsAt", "talkAt", "connect_the_dotsAt", "entanglementAt",'get_off_my_lawnAt']
  let shortlist = ["icebergAt","screwAt","nailAt"]//, "puzzle_pieceAt", "doorAt", "sunAt","waveAt", "lighthouseAt", "postcardAt", "windowAt", "conference_room_bAt"]
  
  function cardnumber (name) {
    let keys = Object.keys(defs)
    return keys.indexOf(name)+1
  }
  
  function printableCard () {
    if (document.getElementById("canvassizes").value !== "3X5") {
      document.getElementById("canvassizes").value = "3X5"
      resizeCanvas()
    }
    let f = randomPick(atList)
    tarotcard(0,0,3*96,5*96,f,cardnumber(f),true)
  }
  
  function tarotcard (x,y,w,h,f,n,IU) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let colors = shuffle(getCurrentPalette())
    let up = true
    let r = 13
    BRIGHT = true
    if (IU != undefined) {
      up = IU
      BRIGHT = IU
    }
    // test longest name
    //if (Math.random() > 0.6)
    //  f = "too_expensive_burgerAt"
    let pal = sortByBrightness(colors)
    if (IU === undefined)
      if (Math.random() > 0.5) {
        up = false
        pal = sortByBrightness(pal)
      }
    let u = "u"
    if (up === false)
      u = "i"
    let brightness = brightnessOf10 (ctx,canvas.width/2,canvas.height*0.8,10)
    let fillindex = randomPick([...Array(Math.floor(pal.length/2)).keys()])
    ctx.fillStyle = pal[fillindex]
    ctx.strokeStyle = randomPick(pal.slice(pal.length/2))
    ctx.lineWidth = 9
    ctx.shadowBlur = 10
    ctx.shadowColor = "#444444"
    ctx.shadowOffsetX = 2
    ctx.shadowOffsetY  = 12
    ctx.lineWidth = 13
    if (w === 3*96) {
      ctx.lineWidth = 24
      r = 24
    }
    roundedRect (x, y, w, h, r, ctx)
    ctx.shadowBlur = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY  = 0
    roundedRectFrame (x, y, w, h, r, ctx)
    let xp = x, yp = y+h/5
    x = x + w/2 - (w*0.8)/2
   
    // draw the icon

    if (!up) {
      ctx.save()
      ctx.translate(x+w/2, yp+w/2)
      ctx.rotate(Math.PI)
      ctx.translate(-(x+w/2-(w*0.2)), -(yp))
      window[f](x,y, w*0.8,ctx.strokeStyle)
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.restore()
    } else {
      window[f](x,y+h/5, w*0.8,ctx.strokeStyle)
    }
    x = xp
    ctx.fillStyle = ctx.strokeStyle
    let fontsize = 17
    if (w === 3*96)
      fontsize = 14
    let prefix = "THE "
    if (noThe.includes(f))
      prefix = ""
    let text = prefix+capitalize(f.slice(0,-2))
    text = text.replace(/_/g, " ")
    text = text.toUpperCase()
    let face = "sans serif"
    ctx.font = "800 "+(fontsize)+"pt " + face
    let width = ctx.measureText(text).width
    let chuncks = []
    if (width > (w - r*2)-4) {
      chuncks.push(text.substring(0,text.lastIndexOf(" ")))
      chuncks.push(text.trim().substring(text.lastIndexOf(" ")+1,text.length))
      width = ctx.measureText(chuncks[0]).width
      ctx.fillText(chuncks[0], x+w/2-width/2+0, y+h-24-14-28)
      width = ctx.measureText(chuncks[1]).width
      ctx.fillText(chuncks[1], x+w/2-width/2+0, y+h-24-14)
    } else
      ctx.fillText(text, x+w/2-width/2+0, y+h-24-14)
    ctx.lineWidth = 2

    // up or down
    ctx.strokeStyle = ctx.fillStyle
    text = up? "\u{1F829}": "\u{1F82B}"
    width = ctx.measureText(text).width
    if (w !== 3*96)
      ctx.fillText(text, x+w-40, y+40)
    
    text = n
    width = ctx.measureText(text).width
    ctx.fillText(text, x+w/2-width/2, y+48)
    
    ctx.fillStyle = "#ffffff"
    if (brightness > 5)
      ctx.fillStyle = "#000000"
    ctx.font = "500 "+(16)+"pt " + face
    text = defs[f][u].split(",")
    y -= 22
    let i = 0
    for (; i < text.length; i++) {
      width = ctx.measureText(text[i]).width
      ctx.fillText(text[i], x+w/2-width/2, y+h+100)
      y += 22
    }
  }
  
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
    console.log(funcs.slice(0,3))
    tarotcard(x+12, y+156 +pet(49), w, h, funcs[0], cardnumber(funcs[0]))
    tarotcard(x+2*W/3+4, y+156+pet(49), w, h, funcs[2], cardnumber(funcs[2]))
    tarotcard(x+1*W/3+8, y+156+pet(49), w, h, funcs[1], cardnumber(funcs[1])) 
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
    tarotcard(x+32, y+156, w, h, funcs[0], numbers[0], true)
    //cardback(x+32, y+156, w, h,funcs[0])
    //cardback(x+W/2+18, y+156, w, h, funcs[1])
    tarotcard(x+W/2+18, y+156, w, h, funcs[0], numbers[0], false)
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

function icebergAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+9*H/24)
  ctx.lineTo(x+8*W/24, y+7*H/24)
  ctx.lineTo(x+9*W/24, y+6*H/24)
  ctx.lineTo(x+10*W/24, y+4*H/24)
  ctx.lineTo(x+11*W/24, y+4*H/24)
  ctx.lineTo(x+12*W/24, y+2*H/24)
  ctx.lineTo(x+13*W/24, y+4*H/24)
  ctx.lineTo(x+15*W/24, y+3*H/24)
  ctx.lineTo(x+16*W/24, y+4*H/24)
  ctx.lineTo(x+17*W/24, y+3*H/24)
  ctx.lineTo(x+18*W/24, y+6*H/24)
  ctx.lineTo(x+21*W/24, y+11*H/24)
  ctx.lineTo(x+21*W/24, y+16*H/24)
  ctx.lineTo(x+19*W/24, y+17*H/24)
  ctx.lineTo(x+17*W/24, y+20*H/24)
  ctx.lineTo(x+14*W/24, y+22*H/24)
  ctx.lineTo(x+8*W/24, y+21*H/24)
  ctx.lineTo(x+7*W/24, y+20*H/24)
  ctx.lineTo(x+5*W/24, y+18*H/24)
  ctx.lineTo(x+4*W/24, y+15*H/24)
  ctx.lineTo(x+6*W/24, y+12*H/24)
  ctx.lineTo(x+5*W/24, y+9*H/24)
  ctx.lineTo(x+8*W/24, y+7*H/24)
  ctx.lineTo(x+9*W/24, y+6*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+6*H/24)
  ctx.lineTo(x+22*W/24, y+6*H/24)
  ctx.stroke()
}

function screwAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+4*H/24)
  cpx = x+10*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+3*H/24)
  cpx = x+10*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+14*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+3*H/24)
  cpx = x+14*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+4*H/24)
  cpx = x+12*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+5*H/24)
  cpx = x+12*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+6*H/24)
  cpx = x+12*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+7*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+7*H/24)
  cpx = x+12*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+8*H/24)
  cpx = x+12*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+9*H/24)
  cpx = x+12*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+10*H/24)
  cpx = x+12*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+11*H/24)
  cpx = x+12*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+12*H/24)
  cpx = x+12*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+13*H/24)
  cpx = x+12*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+14*H/24)
  cpx = x+12*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+15*H/24)
  cpx = x+12*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+16*H/24)
  cpx = x+12*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+17*H/24)
  cpx = x+12*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+18*H/24)
  cpx = x+12*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+19*H/24)
  cpx = x+12*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+20*H/24)
  cpx = x+12*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+21*H/24)
  ctx.stroke()


  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+20*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.lineTo(x+13*W/24, y+20*H/24)
  ctx.lineTo(x+13*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+4*H/24)
  ctx.lineTo(x+11*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+3*H/24)
  ctx.lineTo(x+13*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+2.5*H/24)
  ctx.lineTo(x+12*W/24, y+3.5*H/24)
  ctx.stroke()
}

function nailAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+4*H/24)
  cpx = x+10*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+3*H/24)
  cpx = x+10*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+14*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+3*H/24)
  cpx = x+14*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+4*H/24)
  ctx.lineTo(x+11*W/24, y+20*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.lineTo(x+13*W/24, y+20*H/24)
  ctx.lineTo(x+13*W/24, y+4*H/24)
  ctx.stroke()
}

function press_the_buttonAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+21*H/24)
  cpx = x+12*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+20*H/24)
  cpx = x+12*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+17*H/24)
  cpx = x+12*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+16*H/24)
  cpx = x+6*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+17*H/24)
  cpx = x+6*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+18*H/24)
  cpx = x+12*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+21*H/24)
  cpx = x+6*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+20*H/24)
  cpx = x+6*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+17*H/24)
  ctx.stroke()
  


  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+14*H/24)
  cpx = x+6*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+16*H/24)
  cpx = x+12*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+14*H/24)
  cpx = x+22*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+14*H/24)
  cpx = x+6*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+12*H/24)
  cpx = x+22*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+12*H/24)
  cpx = x+6*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+14*H/24)
  cpx = x+12*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+12*H/24)
  cpx = x+12*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
  ctx.stroke()
}

function paper_bagAt (x,y,W,color) {
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
  ctx.lineTo(x+20*W/24, y+22*H/24)
  ctx.lineTo(x+20*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+22*H/24)
  ctx.lineTo(x+10*W/24, y+2*H/24)
  ctx.lineTo(x+4*W/24, y+2*H/24)
  ctx.lineTo(x+4*W/24, y+21*H/24)
  ctx.lineTo(x+4*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+2*H/24)
  ctx.lineTo(x+14*W/24, y+2*H/24)
  cpx = x+14*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+3*H/24)
  cpx = x+16*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+2*H/24)
  ctx.lineTo(x+20*W/24, y+2*H/24)
  ctx.stroke()
  
  ctx.setLineDash([W/32, W/24])
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+22*H/24)
  ctx.lineTo(x+7*W/24, y+18*H/24)
  ctx.lineTo(x+10*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+18*H/24)
  ctx.lineTo(x+7*W/24, y+2*H/24)
  ctx.stroke()
  ctx.setLineDash([])
}

function medicationAt (x,y,W,color) {
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
  ctx.lineTo(x+22*W/24, y+8*H/24)
  ctx.lineTo(x+2*W/24, y+8*H/24)
  ctx.lineTo(x+2*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+8*H/24)
  ctx.lineTo(x+4*W/24, y+5*H/24)
  ctx.lineTo(x+20*W/24, y+5*H/24)
  ctx.lineTo(x+22*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+20*H/24)
  ctx.lineTo(x+7*W/24, y+8*H/24)
  ctx.lineTo(x+7*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+10*H/24)
  ctx.lineTo(x+10*W/24, y+10*H/24)
  ctx.lineTo(x+8*W/24, y+12*H/24)
  ctx.lineTo(x+10*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+12*H/24)
  ctx.lineTo(x+11*W/24, y+11*H/24)
  ctx.lineTo(x+12*W/24, y+11*H/24)
  ctx.lineTo(x+12*W/24, y+12*H/24)
  ctx.lineTo(x+11*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+10*H/24)
  ctx.lineTo(x+13*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+11*H/24)
  ctx.lineTo(x+14*W/24, y+12*H/24)
  ctx.lineTo(x+15*W/24, y+12*H/24)
  ctx.lineTo(x+15*W/24, y+11*H/24)
  ctx.lineTo(x+14*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+12*H/24)
  ctx.lineTo(x+16*W/24, y+10*H/24)
  ctx.lineTo(x+17*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+11*H/24)
  ctx.lineTo(x+17*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+10*H/24)
  ctx.lineTo(x+18*W/24, y+12*H/24)
  ctx.lineTo(x+18*W/24, y+11*H/24)
  ctx.lineTo(x+19*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+10*H/24)
  ctx.lineTo(x+20*W/24, y+10*H/24)
  ctx.lineTo(x+20*W/24, y+15*H/24)
  ctx.lineTo(x+22*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+13*H/24)
  ctx.lineTo(x+8*W/24, y+17*H/24)
  ctx.lineTo(x+12*W/24, y+17*H/24)
  ctx.lineTo(x+12*W/24, y+13*H/24)
  ctx.lineTo(x+8*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+16*H/24)
  ctx.lineTo(x+10*W/24, y+15*H/24)
  ctx.lineTo(x+11*W/24, y+15*H/24)
  ctx.lineTo(x+10*W/24, y+14*H/24)
  ctx.lineTo(x+9*W/24, y+15*H/24)
  ctx.lineTo(x+10*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+17*H/24)
  ctx.lineTo(x+14*W/24, y+17*H/24)
  ctx.lineTo(x+14*W/24, y+16*H/24)
  ctx.lineTo(x+13*W/24, y+16*H/24)
  ctx.lineTo(x+13*W/24, y+15*H/24)
  ctx.lineTo(x+14*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+17*H/24)
  ctx.lineTo(x+15*W/24, y+15*H/24)
  ctx.lineTo(x+16*W/24, y+15*H/24)
  ctx.lineTo(x+16*W/24, y+17*H/24)
  ctx.lineTo(x+15*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+16*H/24)
  ctx.lineTo(x+17*W/24, y+17*H/24)
  ctx.lineTo(x+17*W/24, y+16*H/24)
  ctx.lineTo(x+18*W/24, y+16*H/24)
  ctx.lineTo(x+18*W/24, y+17*H/24)
  ctx.lineTo(x+18*W/24, y+16*H/24)
  ctx.lineTo(x+19*W/24, y+16*H/24)
  ctx.lineTo(x+19*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+17*H/24)
  ctx.lineTo(x+20*W/24, y+17*H/24)
  ctx.lineTo(x+20*W/24, y+16*H/24)
  ctx.lineTo(x+21*W/24, y+16*H/24)
  ctx.lineTo(x+21*W/24, y+17*H/24)
  ctx.lineTo(x+21*W/24, y+18*H/24)
  ctx.lineTo(x+20*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+19*H/24)
  ctx.lineTo(x+9*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+19*H/24)
  ctx.lineTo(x+11*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+19*H/24)
  ctx.lineTo(x+13*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+19*H/24)
  ctx.lineTo(x+15*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+12*H/24)
  cpx = x+3*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+11*H/24)
  cpx = x+3*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+10*H/24)
  cpx = x+6*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+11*H/24)
  cpx = x+6*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+12*H/24)
  cpx = x+18*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+12*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+12*H/24)
  ctx.lineTo(x+21*W/24, y+13*H/24)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+11*H/24)
  ctx.lineTo(x+5*W/24, y+11*H/24)
  ctx.stroke()
}

function paint_brushAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+3*H/24)
  cpx = x+11*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+13*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+3*H/24)
  cpx = x+13*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+10*H/24)
  cpx = x+17*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+12*H/24)
  cpx = x+17*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+16*H/24)
  cpx = x+7*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+16*H/24)
  cpx = x+7*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+12*H/24)
  cpx = x+7*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+10*H/24)
  cpx = x+11*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+16*H/24)
  cpx = x+7*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+16*H/24)
  cpx = x+8*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+16*H/24)
  cpx = x+9*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+16*H/24)
  cpx = x+10*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+16*H/24)
  cpx = x+11*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+16*H/24)
  cpx = x+12*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+16*H/24)
  cpx = x+13*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+16*H/24)
  cpx = x+14*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+16*H/24)
  cpx = x+15*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+16*H/24)
  cpx = x+16*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+16*H/24)
  cpx = x+17*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+14*H/24)
  ctx.lineTo(x+17*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+3*H/24)
  ctx.lineTo(x+12*W/24, y+4*H/24)
  ctx.stroke()
}

function pencil_sharpenerAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+15*H/24)
  ctx.lineTo(x+10*W/24, y+3*H/24)
  ctx.lineTo(x+11*W/24, y+3*H/24)
  ctx.lineTo(x+11*W/24, y+15*H/24)
  ctx.lineTo(x+10*W/24, y+15*H/24)
  ctx.lineTo(x+15*W/24, y+15*H/24)
  ctx.lineTo(x+15*W/24, y+3*H/24)
  ctx.lineTo(x+11*W/24, y+3*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+2*H/24)
  cpx = x+6*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+6*H/24)
  cpx = x+7*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+9*H/24)
  cpx = x+7*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+12*H/24)
  cpx = x+6*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+16*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+16*H/24)
  ctx.lineTo(x+19*W/24, y+12*H/24)
  cpx = x+18*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+9*H/24)
  cpx = x+18*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+6*H/24)
  ctx.lineTo(x+19*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+2*H/24)
  ctx.lineTo(x+4*W/24, y+8*H/24)
  ctx.lineTo(x+4*W/24, y+12*H/24)
  ctx.lineTo(x+6*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+22*H/24)
  ctx.lineTo(x+4*W/24, y+18*H/24)
  ctx.lineTo(x+6*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+12*H/24)
  cpx = x+5*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+19*H/24)
  cpx = x+7*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+17*H/24)
  cpx = x+13*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+19*H/24)
  cpx = x+13*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+21*H/24)
  cpx = x+7*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12.5*W/24, y+9*H/24)
  ctx.lineTo(x+13.5*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+8.5*H/24)
  ctx.lineTo(x+13*W/24, y+9.5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+10*H/24)
  cpx = x+12*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+9*H/24)
  cpx = x+12*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+8*H/24)
  cpx = x+14*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+9*H/24)
  cpx = x+14*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+16*H/24)
  ctx.lineTo(x+4*W/24, y+22*H/24)
  ctx.lineTo(x+17*W/24, y+22*H/24)
  ctx.lineTo(x+19*W/24, y+16*H/24)
  ctx.lineTo(x+6*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+2*H/24)
  ctx.lineTo(x+19*W/24, y+2*H/24)
  ctx.stroke()
}

function hammerAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+11*H/24)
  ctx.lineTo(x+22*W/24, y+9*H/24)
  ctx.lineTo(x+21*W/24, y+8*H/24)
  cpx = x+19*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+6*H/24)
  cpx = x+17*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+11*H/24)
  cpx = x+19*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+10*H/24)
  cpx = x+19*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+8*H/24)
  cpx = x+15*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+5*H/24)
  cpx = x+11*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+3*H/24)
  cpx = x+16*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+6*H/24)
  cpx = x+2*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+18*H/24)
  cpx = x+5*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+21*H/24)
  cpx = x+17*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+5*H/24)
  cpx = x+11*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+4*H/24)
  cpx = x+14*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+6*H/24)
  ctx.stroke()
}

function clickAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+3*H/24)
  ctx.lineTo(x+5*W/24, y+19*H/24)
  ctx.lineTo(x+10*W/24, y+15*H/24)
  ctx.lineTo(x+14*W/24, y+22*H/24)
  ctx.lineTo(x+16*W/24, y+21*H/24)
  ctx.lineTo(x+12*W/24, y+14*H/24)
  ctx.lineTo(x+12*W/24, y+14*H/24)
  ctx.lineTo(x+17*W/24, y+13*H/24)
  ctx.lineTo(x+5*W/24, y+3*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+2*H/24)
  ctx.lineTo(x+3*W/24, y+1*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+2*H/24)
  ctx.lineTo(x+5*W/24, y+1*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+2*H/24)
  ctx.lineTo(x+7*W/24, y+1*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+3*H/24)
  ctx.lineTo(x+7*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+3*H/24)
  ctx.lineTo(x+3*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+4*H/24)
  ctx.lineTo(x+3*W/24, y+5*H/24)
  ctx.stroke()
}

function stumpAt (x,y,W,color) {
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
  ctx.lineTo(x+5*W/24, y+19*H/24)
  ctx.lineTo(x+5*W/24, y+22*H/24)
  ctx.lineTo(x+7*W/24, y+19*H/24)
  ctx.lineTo(x+7*W/24, y+22*H/24)
  ctx.lineTo(x+9*W/24, y+19*H/24)
  ctx.lineTo(x+9*W/24, y+22*H/24)
  ctx.lineTo(x+11*W/24, y+19*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.lineTo(x+13*W/24, y+19*H/24)
  ctx.lineTo(x+15*W/24, y+22*H/24)
  ctx.lineTo(x+15*W/24, y+19*H/24)
  ctx.lineTo(x+17*W/24, y+22*H/24)
  ctx.lineTo(x+17*W/24, y+19*H/24)
  ctx.lineTo(x+19*W/24, y+22*H/24)
  ctx.lineTo(x+19*W/24, y+19*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+22*H/24)
  cpx = x+6*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+22*H/24)
  cpx = x+18*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+6*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+6*H/24)
  cpx = x+6*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+18*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+6*H/24)
  cpx = x+18*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
  cpx = x+6*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+9*H/24)
  cpx = x+7*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+6*H/24)
  cpx = x+7*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+3*H/24)
  cpx = x+17*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+6*H/24)
  cpx = x+17*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+8*H/24)
  cpx = x+8*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+6*H/24)
  cpx = x+8*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
  cpx = x+16*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+6*H/24)
  cpx = x+16*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+7*H/24)
  cpx = x+9*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+6*H/24)
  cpx = x+9*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+5*H/24)
  cpx = x+15*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+6*H/24)
  cpx = x+15*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
  ctx.stroke()
}

function progress_indicatorAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let r = 10 * W/24, i = 0
  let fadd = (Math.PI)/180
  let start = 0
  
  ctx.beginPath()
  for (; i < 360; i++) {
    ctx.arc(x+12*W/24, y+12*H/24, r, start, start + fadd)
    start += fadd
    r += W/24/360
  }
  ctx.stroke()
  i = 0, start = 0
  r = 10 * W/24
  ctx.beginPath()
  for (; i < 360; i++) {
    ctx.arc(x+12*W/24, y+12*H/24, r, start, start + fadd)
    start += fadd
    r -= W/24/360
  }
  ctx.lineTo(x+23*W/24, y+12*H/24)
  ctx.stroke()
}

function riverAt (x,y,W,color) {
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
  cpx = x+10*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+12*H/24)
  cpx = x+7*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+6*H/24)
  cpx = x+19*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+13*H/24)
  cpx = x+15*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+14*H/24)
  cpx = x+6*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+8*H/24)
  cpx = x+2*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+2*H/24)
  cpx = x+21*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+6*H/24)
  cpx = x+20*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+5*H/24)
  cpx = x+9*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+4*H/24)
  cpx = x+9*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+4*H/24)
  cpx = x+12*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+3*H/24)
  cpx = x+12*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+5*H/24)
  cpx = x+15*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+4*H/24)
  cpx = x+15*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+8*H/24)
  cpx = x+18*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+7*H/24)
  cpx = x+19*W/24
  cpy = y+8*H/24
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+8*H/24)
  cpx = x+18*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+7*H/24)
  cpx = x+18*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+6*H/24)
  cpx = x+19*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+5*H/24)
  cpx = x+19*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+19*H/24)
  cpx = x+3*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+18*H/24)
  cpx = x+3*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+17*H/24)
  cpx = x+4*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+16*H/24)
  cpx = x+4*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+16*H/24)
  cpx = x+7*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+15*H/24)
  cpx = x+7*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+15*H/24)
  cpx = x+5*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+14*H/24)
  cpx = x+5*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+13*H/24)
  cpx = x+6*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+12*H/24)
  cpx = x+6*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+11*H/24)
  cpx = x+7*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+10*H/24)
  cpx = x+7*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+9*H/24)
  cpx = x+6*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+8*H/24)
  cpx = x+6*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+7*H/24)
  cpx = x+7*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+6*H/24)
  cpx = x+7*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+7*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+5*H/24)
  cpx = x+6*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+4*H/24)
  cpx = x+6*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+10*H/24)
  cpx = x+19*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+9*H/24)
  cpx = x+19*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+12*H/24)
  cpx = x+19*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+11*H/24)
  cpx = x+19*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+14*H/24)
  cpx = x+18*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+13*H/24)
  cpx = x+18*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+16*H/24)
  cpx = x+19*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+15*H/24)
  cpx = x+19*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+18*H/24)
  cpx = x+20*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+17*H/24)
  cpx = x+20*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+15*H/24)
  cpx = x+21*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+14*H/24)
  cpx = x+21*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+4*H/24)
  cpx = x+17*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+3*H/24)
  cpx = x+17*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+4*H/24)
  ctx.stroke()
}

function shopping_listAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  scriptAt(x+(7+pet(1))*W/24, y+6*H/24,H/32,color)
  scriptAt(x+(7+pet(1))*W/24, y+8*H/24,H/32,color)
  scriptAt(x+(10+pet(1))*W/24, y+8*H/24,H/32,color)
  scriptAt(x+(7+pet(1))*W/24, y+10*H/24,H/32,color)
  scriptAt(x+(7+pet(1))*W/24, y+12*H/24,H/32,color)
  scriptAt(x+(10+pet(1))*W/24, y+12*H/24,H/32,color)
  scriptAt(x+(7+pet(1))*W/24, y+14*H/24,H/32,color)
  scriptAt(x+(11+pet(1))*W/24, y+14*H/24,H/32,color)
  scriptAt(x+(7+pet(1))*W/24, y+16*H/24,H/34,color)
  scriptAt(x+(7+pet(1))*W/24, y+18*H/24,H/34,color)
  scriptAt(x+(10+pet(1))*W/24, y+18*H/24,H/34,color)

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+22*H/24)
  ctx.lineTo(x+5*W/24, y+2*H/24)
  ctx.lineTo(x+6*W/24, y+2*H/24)
  ctx.lineTo(x+6*W/24, y+3*H/24)
  ctx.lineTo(x+7*W/24, y+3*H/24)
  ctx.lineTo(x+7*W/24, y+2*H/24)
  ctx.lineTo(x+8*W/24, y+2*H/24)
  ctx.lineTo(x+8*W/24, y+3*H/24)
  ctx.lineTo(x+9*W/24, y+3*H/24)
  ctx.lineTo(x+9*W/24, y+2*H/24)
  ctx.lineTo(x+10*W/24, y+2*H/24)
  ctx.lineTo(x+10*W/24, y+3*H/24)
  ctx.lineTo(x+11*W/24, y+3*H/24)
  ctx.lineTo(x+11*W/24, y+2*H/24)
  ctx.lineTo(x+12*W/24, y+2*H/24)
  ctx.lineTo(x+12*W/24, y+3*H/24)
  ctx.lineTo(x+13*W/24, y+3*H/24)
  ctx.lineTo(x+13*W/24, y+2*H/24)
  ctx.lineTo(x+14*W/24, y+2*H/24)
  ctx.lineTo(x+14*W/24, y+3*H/24)
  ctx.lineTo(x+15*W/24, y+3*H/24)
  ctx.lineTo(x+15*W/24, y+2*H/24)
  ctx.lineTo(x+16*W/24, y+2*H/24)
  ctx.lineTo(x+16*W/24, y+3*H/24)
  ctx.lineTo(x+17*W/24, y+3*H/24)
  ctx.lineTo(x+17*W/24, y+2*H/24)
  ctx.lineTo(x+18*W/24, y+2*H/24)
  ctx.lineTo(x+18*W/24, y+21*H/24)
  ctx.lineTo(x+17*W/24, y+21*H/24)
  ctx.lineTo(x+17*W/24, y+22*H/24)
  ctx.lineTo(x+18*W/24, y+21*H/24)
  ctx.lineTo(x+17*W/24, y+22*H/24)
  ctx.lineTo(x+5*W/24, y+22*H/24)
  ctx.stroke()
}

function postcardAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  
  scriptAt(x+(4+pet(2))*W/24, y+8*H/24,H/25,color)
  scriptAt(x+(3.5+pet(2))*W/24, y+11*H/24,H/25,color)
  scriptAt(x+(8+pet(2))*W/24, y+11*H/24,H/25,color)
  scriptAt(x+(3.5+pet(2))*W/24, y+14*H/24,H/25,color)
  scriptAt(x+(3.5+pet(2))*W/24, y+17*H/24,H/25,color)
  scriptAt(x+(8+pet(3))*W/24, y+17*H/24,H/25,color)
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+5*H/24)
  ctx.lineTo(x+22*W/24, y+5*H/24)
  ctx.lineTo(x+22*W/24, y+19*H/24)
  ctx.lineTo(x+2*W/24, y+19*H/24)
  ctx.lineTo(x+2*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+6*H/24)
  ctx.lineTo(x+21*W/24, y+10*H/24)
  ctx.lineTo(x+18*W/24, y+10*H/24)
  ctx.lineTo(x+18*W/24, y+6*H/24)
  ctx.lineTo(x+21*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+8*H/24)
  ctx.lineTo(x+12*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+17*H/24)
  ctx.lineTo(x+20*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+15*H/24)
  ctx.lineTo(x+20*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+13*H/24)
  ctx.lineTo(x+20*W/24, y+13*H/24)
  ctx.stroke()
}

function puzzle_pieceAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+22*H/24)
  cpx = x+22*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+21*H/24)
  cpx = x+22*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+16*H/24)
  cpx = x+22*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+15*H/24)
  cpx = x+17*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+13*H/24)
  cpx = x+17*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+11*H/24)
  cpx = x+22*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+10*H/24)
  cpx = x+22*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+8*H/24)
  cpx = x+22*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+7*H/24)
  cpx = x+15*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+7*H/24)
  cpx = x+14*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+6*H/24)
  cpx = x+16*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+2*H/24)
  cpx = x+7*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+6*H/24)
  cpx = x+10*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+7*H/24)
  cpx = x+7*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+7*H/24)
  cpx = x+6*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+8*H/24)
  cpx = x+6*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+11*H/24)
  cpx = x+6*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+12*H/24)
  cpx = x+2*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+15*H/24)
  cpx = x+2*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+17*H/24)
  cpx = x+6*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+21*H/24)
  cpx = x+6*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+22*H/24)
  cpx = x+11*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+22*H/24)
  cpx = x+12*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+21*H/24)
  cpx = x+10*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+16*H/24)
  cpx = x+18*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+21*H/24)
  cpx = x+16*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+22*H/24)
  cpx = x+21*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+22*H/24)
  ctx.stroke()
}

function lighthouseAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+22*H/24)
  cpx = x+9*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+7*H/24)
  ctx.lineTo(x+15*W/24, y+7*H/24)
  ctx.lineTo(x+18*W/24, y+22*H/24)
  ctx.lineTo(x+6*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+22*H/24)
  ctx.lineTo(x+11*W/24, y+18*H/24)
  ctx.lineTo(x+13*W/24, y+18*H/24)
  ctx.lineTo(x+13*W/24, y+21*H/24)
  ctx.lineTo(x+13*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+7*H/24)
  ctx.lineTo(x+9*W/24, y+3*H/24)
  ctx.lineTo(x+11*W/24, y+3*H/24)
  ctx.lineTo(x+11*W/24, y+7*H/24)
  ctx.lineTo(x+13*W/24, y+7*H/24)
  ctx.lineTo(x+13*W/24, y+3*H/24)
  ctx.lineTo(x+15*W/24, y+3*H/24)
  ctx.lineTo(x+15*W/24, y+7*H/24)
  ctx.lineTo(x+15*W/24, y+3*H/24)
  ctx.lineTo(x+11*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+3*H/24)
  ctx.lineTo(x+12*W/24, y+2*H/24)
  ctx.lineTo(x+15*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+18*H/24)
  cpx = x+11*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+17*H/24)
  cpx = x+13*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+5*H/24)
  ctx.lineTo(x+22*W/24, y+8*H/24)
  ctx.lineTo(x+15*W/24, y+5*H/24)
  ctx.lineTo(x+22*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+5*H/24)
  ctx.lineTo(x+2*W/24, y+2*H/24)
  ctx.lineTo(x+9*W/24, y+5*H/24)
  ctx.lineTo(x+2*W/24, y+8*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+6*H/24)
  ctx.lineTo(x+16*W/24, y+6*H/24)
  ctx.lineTo(x+16*W/24, y+7*H/24)
  ctx.lineTo(x+8*W/24, y+7*H/24)
  ctx.lineTo(x+8*W/24, y+6*H/24)
  ctx.stroke()
}

function waveAt (x,y,W,color) {
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
  cpx = x+18*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+15*H/24)
  cpx = x+18*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
  cpx = x+8*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+14*H/24)
  cpx = x+8*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+16*H/24)
  cpx = x+8*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+14*H/24)
  cpx = x+4*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+8*H/24)
  cpx = x+8*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+4*H/24)
  cpx = x+20*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+6*H/24)
  ctx.stroke()
}

function sofaAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+14*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.lineTo(x+12*W/24, y+15*H/24)
  cpx = x+12*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+14*H/24)
  cpx = x+2*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+12*H/24)
  ctx.lineTo(x+22*W/24, y+5*H/24)
  cpx = x+22*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+4*H/24)
  ctx.lineTo(x+12*W/24, y+4*H/24)
  ctx.lineTo(x+2*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+12*H/24)
  ctx.lineTo(x+13*W/24, y+12*H/24)
  cpx = x+14*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+13*H/24)
  ctx.lineTo(x+14*W/24, y+17*H/24)
  ctx.lineTo(x+20*W/24, y+11*H/24)
  ctx.lineTo(x+20*W/24, y+7*H/24)
  cpx = x+20*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+6*H/24)
  ctx.lineTo(x+12*W/24, y+6*H/24)
  ctx.lineTo(x+6*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+11*H/24)
  ctx.lineTo(x+12*W/24, y+11*H/24)
  ctx.lineTo(x+12*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+11*H/24)
  ctx.lineTo(x+11*W/24, y+12*H/24)
  ctx.stroke()
}

function conference_room_bAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+3*H/24)
  ctx.lineTo(x+2*W/24, y+5*H/24)
  ctx.lineTo(x+3*W/24, y+6*H/24)
  ctx.lineTo(x+3*W/24, y+4*H/24)
  ctx.lineTo(x+2*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+4*H/24)
  ctx.lineTo(x+5*W/24, y+4*H/24)
  ctx.lineTo(x+5*W/24, y+6*H/24)
  ctx.lineTo(x+3*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+6*H/24)
  ctx.lineTo(x+4*W/24, y+7*H/24)
  ctx.lineTo(x+3*W/24, y+6*H/24)
  ctx.lineTo(x+5*W/24, y+6*H/24)
  ctx.lineTo(x+6*W/24, y+7*H/24)
  ctx.lineTo(x+5*W/24, y+6*H/24)
  ctx.lineTo(x+5*W/24, y+4*H/24)
  ctx.lineTo(x+6*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+3*H/24)
  ctx.lineTo(x+22*W/24, y+5*H/24)
  ctx.lineTo(x+21*W/24, y+6*H/24)
  ctx.lineTo(x+21*W/24, y+4*H/24)
  ctx.lineTo(x+22*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+4*H/24)
  ctx.lineTo(x+19*W/24, y+4*H/24)
  ctx.lineTo(x+19*W/24, y+6*H/24)
  ctx.lineTo(x+21*W/24, y+6*H/24)
  ctx.lineTo(x+20*W/24, y+7*H/24)
  ctx.lineTo(x+21*W/24, y+6*H/24)
  ctx.lineTo(x+19*W/24, y+6*H/24)
  ctx.lineTo(x+18*W/24, y+7*H/24)
  ctx.lineTo(x+19*W/24, y+6*H/24)
  ctx.lineTo(x+19*W/24, y+4*H/24)
  ctx.lineTo(x+18*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+4*H/24)
  ctx.lineTo(x+7*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+4*H/24)
  ctx.lineTo(x+17*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+4*H/24)
  cpx = x+7*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+2*H/24)
  cpx = x+15*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+2*H/24)
  cpx = x+17*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+20*H/24)
  cpx = x+7*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+22*H/24)
  cpx = x+15*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+22*H/24)
  cpx = x+17*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+19*H/24)
  ctx.lineTo(x+3*W/24, y+17*H/24)
  ctx.lineTo(x+5*W/24, y+17*H/24)
  ctx.lineTo(x+5*W/24, y+19*H/24)
  ctx.lineTo(x+6*W/24, y+20*H/24)
  ctx.lineTo(x+5*W/24, y+19*H/24)
  ctx.lineTo(x+5*W/24, y+17*H/24)
  ctx.lineTo(x+6*W/24, y+18*H/24)
  ctx.lineTo(x+5*W/24, y+17*H/24)
  ctx.lineTo(x+5*W/24, y+19*H/24)
  ctx.lineTo(x+3*W/24, y+19*H/24)
  ctx.lineTo(x+4*W/24, y+20*H/24)
  ctx.lineTo(x+3*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+19*H/24)
  ctx.lineTo(x+2*W/24, y+18*H/24)
  ctx.lineTo(x+2*W/24, y+16*H/24)
  ctx.lineTo(x+3*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+12*H/24)
  ctx.lineTo(x+2*W/24, y+10*H/24)
  ctx.lineTo(x+3*W/24, y+11*H/24)
  ctx.lineTo(x+3*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+12*H/24)
  ctx.lineTo(x+3*W/24, y+13*H/24)
  ctx.lineTo(x+5*W/24, y+13*H/24)
  ctx.lineTo(x+5*W/24, y+11*H/24)
  ctx.lineTo(x+3*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+13*H/24)
  ctx.lineTo(x+4*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+13*H/24)
  ctx.lineTo(x+6*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+11*H/24)
  ctx.lineTo(x+6*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+10*H/24)
  ctx.lineTo(x+19*W/24, y+12*H/24)
  ctx.lineTo(x+21*W/24, y+12*H/24)
  ctx.lineTo(x+21*W/24, y+10*H/24)
  ctx.lineTo(x+19*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+18*H/24)
  ctx.lineTo(x+19*W/24, y+20*H/24)
  ctx.lineTo(x+21*W/24, y+20*H/24)
  ctx.lineTo(x+21*W/24, y+18*H/24)
  ctx.lineTo(x+19*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+18*H/24)
  ctx.lineTo(x+22*W/24, y+17*H/24)
  ctx.lineTo(x+22*W/24, y+19*H/24)
  ctx.lineTo(x+21*W/24, y+20*H/24)
  ctx.lineTo(x+20*W/24, y+21*H/24)
  ctx.lineTo(x+21*W/24, y+20*H/24)
  ctx.lineTo(x+19*W/24, y+20*H/24)
  ctx.lineTo(x+18*W/24, y+21*H/24)
  ctx.lineTo(x+19*W/24, y+20*H/24)
  ctx.lineTo(x+19*W/24, y+18*H/24)
  ctx.lineTo(x+18*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+11*H/24)
  ctx.lineTo(x+19*W/24, y+10*H/24)
  ctx.lineTo(x+19*W/24, y+12*H/24)
  ctx.lineTo(x+18*W/24, y+13*H/24)
  ctx.lineTo(x+19*W/24, y+12*H/24)
  ctx.lineTo(x+21*W/24, y+12*H/24)
  ctx.lineTo(x+20*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+11*H/24)
  ctx.lineTo(x+22*W/24, y+9*H/24)
  ctx.lineTo(x+21*W/24, y+10*H/24)
  ctx.stroke()
  
  //table legs
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+22*H/24)
  ctx.lineTo(x+9*W/24, y+23*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+22*H/24)
  ctx.lineTo(x+17*W/24, y+23*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+3*H/24)
  ctx.lineTo(x+18*W/24, y+4*H/24)
  ctx.stroke()
}

function doorAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+20*H/24)
  ctx.lineTo(x+10*W/24, y+22*H/24)
  ctx.lineTo(x+10*W/24, y+4*H/24)
  ctx.lineTo(x+18*W/24, y+2*H/24)
  ctx.lineTo(x+18*W/24, y+20*H/24)
  ctx.lineTo(x+22*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+20*H/24)
  ctx.lineTo(x+2*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+20*H/24)
  ctx.lineTo(x+8*W/24, y+2*H/24)
  ctx.lineTo(x+18*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+12*W/24, y+13*H/24, W/48, 0, Math.PI*2)
  ctx.stroke()
}

function windowAt (x,y,W,color) {
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
  ctx.lineTo(x+19*W/24, y+22*H/24)
  ctx.lineTo(x+19*W/24, y+2*H/24)
  ctx.lineTo(x+5*W/24, y+2*H/24)
  ctx.lineTo(x+5*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+3*H/24)
  ctx.lineTo(x+18*W/24, y+3*H/24)
  ctx.lineTo(x+18*W/24, y+21*H/24)
  ctx.lineTo(x+6*W/24, y+21*H/24)
  ctx.lineTo(x+6*W/24, y+3*H/24)
  ctx.lineTo(x+6*W/24, y+12*H/24)
  ctx.lineTo(x+18*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+3*H/24)
  ctx.lineTo(x+12*W/24, y+12*H/24)
  ctx.stroke()
}

function sunAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+16*H/24)
  cpx = x+16*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+12*H/24)
  cpx = x+16*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
  cpx = x+8*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+12*H/24)
  cpx = x+8*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+17*H/24)
  ctx.lineTo(x+12*W/24, y+21*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+12*H/24)
  ctx.lineTo(x+21*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+7*H/24)
  ctx.lineTo(x+12*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+12*H/24)
  ctx.lineTo(x+3*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+16*H/24)
  ctx.lineTo(x+5*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+16*H/24)
  ctx.lineTo(x+19*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+8*H/24)
  ctx.lineTo(x+19*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+8*H/24)
  ctx.lineTo(x+5*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+10*H/24)
  ctx.lineTo(x+4*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+10*H/24)
  ctx.lineTo(x+20*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+14*H/24)
  ctx.lineTo(x+20*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+14*H/24)
  ctx.lineTo(x+4*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+7*H/24)
  ctx.lineTo(x+9*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+7*H/24)
  ctx.lineTo(x+15*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+17*H/24)
  ctx.lineTo(x+9*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+17*H/24)
  ctx.lineTo(x+15*W/24, y+20*H/24)
  ctx.stroke()
}

function rainAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+2*H/24)
  ctx.lineTo(x+2*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+6*H/24)
  ctx.lineTo(x+6*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+13*H/24)
  ctx.lineTo(x+3*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+7*H/24)
  ctx.lineTo(x+5*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+2*H/24)
  ctx.lineTo(x+9*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+6*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+14*H/24)
  ctx.lineTo(x+12*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+20*H/24)
  ctx.lineTo(x+11*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+22*H/24)
  ctx.lineTo(x+11*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+12*H/24)
  ctx.lineTo(x+16*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+15*H/24)
  ctx.lineTo(x+15*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+5*H/24)
  ctx.lineTo(x+17*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+9*H/24)
  ctx.lineTo(x+19*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+3*H/24)
  ctx.lineTo(x+20*W/24, y+7*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+10*H/24)
  ctx.lineTo(x+15*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+21*H/24)
  ctx.lineTo(x+16*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+22*H/24)
  ctx.lineTo(x+17*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+16*H/24)
  ctx.lineTo(x+21*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+13*H/24)
  ctx.lineTo(x+19*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+17*H/24)
  ctx.stroke()
}

function cloudsAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+8*H/24)
  cpx = x+10*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+8*H/24)
  cpx = x+12*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
  cpx = x+13*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+6*H/24)
  cpx = x+13*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+4*H/24)
  cpx = x+10*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+3*H/24)
  cpx = x+6*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+4*H/24)
  cpx = x+4*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+5*H/24)
  cpx = x+2*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+7*H/24)
  cpx = x+2*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+8*H/24)
  cpx = x+5*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+22*H/24)
  cpx = x+2*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+20*H/24)
  cpx = x+2*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+19*H/24)
  cpx = x+3*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+18*H/24)
  cpx = x+5*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+16*H/24)
  cpx = x+8*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+17*H/24)
  cpx = x+10*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+19*H/24)
  cpx = x+12*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+20*H/24)
  cpx = x+12*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+22*H/24)
  cpx = x+4*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+15*H/24)
  cpx = x+11*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+13*H/24)
  cpx = x+11*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  cpx = x+12*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+10*H/24)
  cpx = x+14*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+10*H/24)
  cpx = x+14*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+9*H/24)
  cpx = x+17*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+9*H/24)
  cpx = x+19*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+11*H/24)
  cpx = x+21*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+12*H/24)
  cpx = x+22*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+14*H/24)
  cpx = x+22*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+15*H/24)
  cpx = x+13*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+15*H/24)
  ctx.stroke()
}

function spiderAt (x,y,W,color) {
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
  cpx = x+6*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+16*H/24)
  cpx = x+6*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  cpx = x+18*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+16*H/24)
  cpx = x+18*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+12*H/24)
  cpx = x+15*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+10*H/24)
  cpx = x+15*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
  cpx = x+9*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+10*H/24)
  cpx = x+9*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+8*H/24)
  ctx.lineTo(x+8*W/24, y+6*H/24)
  ctx.lineTo(x+8*W/24, y+3*H/24)
  ctx.lineTo(x+11*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+9*H/24)
  ctx.lineTo(x+6*W/24, y+8*H/24)
  ctx.lineTo(x+4*W/24, y+3*H/24)
  ctx.lineTo(x+7*W/24, y+1*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+10*H/24)
  ctx.lineTo(x+3*W/24, y+10*H/24)
  ctx.lineTo(x+2*W/24, y+15*H/24)
  ctx.lineTo(x+3*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+11*H/24)
  ctx.lineTo(x+4*W/24, y+12*H/24)
  ctx.lineTo(x+4*W/24, y+17*H/24)
  ctx.lineTo(x+6*W/24, y+21*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+11*H/24)
  ctx.lineTo(x+20*W/24, y+12*H/24)
  ctx.lineTo(x+20*W/24, y+17*H/24)
  ctx.lineTo(x+18*W/24, y+21*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+10*H/24)
  ctx.lineTo(x+21*W/24, y+10*H/24)
  ctx.lineTo(x+22*W/24, y+15*H/24)
  ctx.lineTo(x+21*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+9*H/24)
  ctx.lineTo(x+18*W/24, y+8*H/24)
  ctx.lineTo(x+20*W/24, y+3*H/24)
  ctx.lineTo(x+17*W/24, y+1*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+8*H/24)
  ctx.lineTo(x+16*W/24, y+6*H/24)
  ctx.lineTo(x+16*W/24, y+3*H/24)
  ctx.lineTo(x+13*W/24, y+2*H/24)
  ctx.stroke()
}

function flameAt (x,y,W,color) {
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
  cpx = x+2*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+12*H/24)
  cpx = x+2*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+7*H/24)
  cpx = x+5*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+12*H/24)
  cpx = x+7*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+2*H/24)
  cpx = x+13*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+12*H/24)
  cpx = x+17*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+8*H/24)
  cpx = x+21*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+14*H/24)
  cpx = x+20*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  ctx.stroke()
}

function hop_scotchAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+7*W/16, y+15*H/16)
  ctx.lineTo(x+9*W/16, y+15*H/16)
  ctx.lineTo(x+9*W/16, y+13*H/16)
  ctx.lineTo(x+7*W/16, y+13*H/16)
  ctx.lineTo(x+7*W/16, y+15*H/16)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/16, y+13*H/16)
  ctx.lineTo(x+8*W/16, y+11*H/16)
  ctx.lineTo(x+6*W/16, y+11*H/16)
  ctx.lineTo(x+6*W/16, y+13*H/16)
  ctx.lineTo(x+8*W/16, y+13*H/16)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/16, y+11*H/16)
  ctx.lineTo(x+7*W/16, y+9*H/16)
  ctx.lineTo(x+9*W/16, y+9*H/16)
  ctx.lineTo(x+9*W/16, y+11*H/16)
  ctx.lineTo(x+7*W/16, y+11*H/16)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/16, y+9*H/16)
  ctx.lineTo(x+8*W/16, y+7*H/16)
  ctx.lineTo(x+10*W/16, y+7*H/16)
  ctx.lineTo(x+10*W/16, y+9*H/16)
  ctx.lineTo(x+8*W/16, y+9*H/16)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/16, y+7*H/16)
  ctx.lineTo(x+9*W/16, y+7*H/16)
  ctx.lineTo(x+9*W/16, y+5*H/16)
  ctx.lineTo(x+7*W/16, y+5*H/16)
  ctx.lineTo(x+7*W/16, y+7*H/16)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+5*H/16)
  ctx.lineTo(x+6*W/16, y+3*H/16)
  ctx.lineTo(x+10*W/16, y+3*H/16)
  ctx.lineTo(x+10*W/16, y+5*H/16)
  ctx.lineTo(x+8*W/16, y+5*H/16)
  ctx.lineTo(x+8*W/16, y+3*H/16)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+5*H/16)
  ctx.lineTo(x+8*W/16, y+5*H/16)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/16, y+11*H/16)
  ctx.lineTo(x+10*W/16, y+11*H/16)
  ctx.lineTo(x+10*W/16, y+13*H/16)
  ctx.lineTo(x+9*W/16, y+13*H/16)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/16, y+7*H/16)
  ctx.lineTo(x+6*W/16, y+7*H/16)
  ctx.lineTo(x+6*W/16, y+9*H/16)
  ctx.lineTo(x+7*W/16, y+9*H/16)
  ctx.lineTo(x+8*W/16, y+9*H/16)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+3*H/16)
  cpx = x+6*W/16
  cpy = y+1*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/16, y+1*H/16)
  cpx = x+10*W/16
  cpy = y+1*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/16, y+3*H/16)
  ctx.stroke()
}

function parking_lotAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+23*H/24)
  ctx.lineTo(x+5*W/24, y+23*H/24)
  ctx.lineTo(x+5*W/24, y+15*H/24)
  ctx.lineTo(x+2*W/24, y+15*H/24)
  ctx.lineTo(x+2*W/24, y+23*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+2*H/24)
  ctx.lineTo(x+5*W/24, y+2*H/24)
  ctx.lineTo(x+5*W/24, y+10*H/24)
  ctx.lineTo(x+2*W/24, y+10*H/24)
  ctx.lineTo(x+2*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+19*H/24)
  ctx.lineTo(x+23*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+6*H/24)
  ctx.lineTo(x+23*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+2*H/24)
  ctx.lineTo(x+8*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+15*H/24)
  ctx.lineTo(x+8*W/24, y+23*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+23*H/24)
  ctx.lineTo(x+11*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+10*H/24)
  ctx.lineTo(x+11*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+23*H/24)
  ctx.lineTo(x+14*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+10*H/24)
  ctx.lineTo(x+14*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+2*H/24)
  ctx.lineTo(x+17*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+2*H/24)
  ctx.lineTo(x+20*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+2*H/24)
  ctx.lineTo(x+23*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+15*H/24)
  ctx.lineTo(x+17*W/24, y+23*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+15*H/24)
  ctx.lineTo(x+20*W/24, y+23*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+15*H/24)
  ctx.lineTo(x+23*W/24, y+23*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+2*H/24)
  ctx.lineTo(x+2*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+3*H/24)
  ctx.lineTo(x+2*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+9*H/24)
  ctx.lineTo(x+2*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+8*H/24)
  ctx.lineTo(x+2*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+7*H/24)
  ctx.lineTo(x+2*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+6*H/24)
  ctx.lineTo(x+2*W/24, y+7*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+5*H/24)
  ctx.lineTo(x+2*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+4*H/24)
  ctx.lineTo(x+2*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+15*H/24)
  ctx.lineTo(x+2*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+16*H/24)
  ctx.lineTo(x+2*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+17*H/24)
  ctx.lineTo(x+2*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+23*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+20*H/24)
  ctx.lineTo(x+2*W/24, y+21*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+19*H/24)
  ctx.lineTo(x+2*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+18*H/24)
  ctx.lineTo(x+2*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+21*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.stroke()
}

function tunnelAt (x,y,W,color) {
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
  cpx = x+4*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+6*H/24)
  cpx = x+20*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+18*H/24)
  cpx = x+22*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
  cpx = x+2*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+9*H/24)
  cpx = x+11*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
  cpx = x+13*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+1*W/24, y+18*H/24)
  ctx.lineTo(x+4*W/24, y+18*H/24)
  ctx.lineTo(x+11*W/24, y+9*H/24)
  ctx.lineTo(x+13*W/24, y+9*H/24)
  ctx.lineTo(x+20*W/24, y+18*H/24)
  ctx.lineTo(x+23*W/24, y+18*H/24)
  ctx.stroke()
}

function steering_wheelAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+20*H/24)
  cpx = x+13*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+19*H/24)
  cpx = x+13*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+17*H/24)
  cpx = x+13*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+14*H/24)
  cpx = x+20*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+15*H/24)
  cpx = x+19*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+20*H/24)
  cpx = x+11*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+19*H/24)
  cpx = x+11*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+17*H/24)
  cpx = x+11*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+14*H/24)
  cpx = x+4*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+15*H/24)
  cpx = x+5*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+4*H/24)
  cpx = x+20*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+10*H/24)
  cpx = x+20*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+11*H/24)
  cpx = x+12*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+11*H/24)
  cpx = x+4*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+10*H/24)
  cpx = x+4*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+22*H/24)
  cpx = x+2*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+12*H/24)
  cpx = x+2*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+22*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+12*H/24)
  cpx = x+22*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  ctx.stroke()
}

function seedAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+23*H/24)
  cpx = x+12*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+21*H/24)
  cpx = x+21*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+8*H/24)
  cpx = x+22*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+7*H/24)
  cpx = x+22*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+4*H/24)
  ctx.lineTo(x+13*W/24, y+2*H/24)
  ctx.lineTo(x+11*W/24, y+2*H/24)
  ctx.lineTo(x+11*W/24, y+4*H/24)
  cpx = x+2*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+7*H/24)
  cpx = x+2*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+8*H/24)
  cpx = x+3*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+21*H/24)
  cpx = x+12*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+23*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+8*H/24)
  ctx.lineTo(x+21*W/24, y+8*H/24)
  ctx.lineTo(x+3*W/24, y+8*H/24)
  ctx.stroke()
}

function impossibleAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+18*H/24)
  ctx.lineTo(x+4*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+6*H/24)
  ctx.lineTo(x+18*W/24, y+6*H/24)
  ctx.lineTo(x+18*W/24, y+14*H/24)
  ctx.lineTo(x+4*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+6*H/24)
  ctx.lineTo(x+16*W/24, y+10*H/24)
  ctx.lineTo(x+16*W/24, y+14*H/24)
  ctx.lineTo(x+16*W/24, y+10*H/24)
  ctx.lineTo(x+4*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+22*H/24)
  ctx.lineTo(x+20*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+18*H/24)
  ctx.stroke()


  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+6*H/24)
  cpx = x+3*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+4*H/24)
  cpx = x+3*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+2*H/24)
  cpx = x+5*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+4*H/24)
  cpx = x+5*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+14*H/24)
  cpx = x+3*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+12*H/24)
  cpx = x+3*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+10*H/24)
  cpx = x+5*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+12*H/24)
  cpx = x+5*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+22*H/24)
  cpx = x+3*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+20*H/24)
  cpx = x+3*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+18*H/24)
  cpx = x+5*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+20*H/24)
  cpx = x+5*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+22*H/24)
  ctx.stroke()
}

function uphillAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+12*H/24)
  ctx.lineTo(x+7*W/24, y+17*H/24)
  ctx.lineTo(x+17*W/24, y+7*H/24)
  ctx.lineTo(x+15*W/24, y+5*H/24)
  ctx.lineTo(x+13*W/24, y+7*H/24)
  ctx.lineTo(x+10*W/24, y+6*H/24)
  ctx.lineTo(x+4*W/24, y+12*H/24)
  ctx.stroke()

  let r = 1.42 * W/24
  ctx.beginPath()
  ctx.arc(x+10*W/24, y+16*H/24, r, 0, Math.PI * 2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+16*W/24, y+10*H/24, r, 0, Math.PI * 2)
  ctx.stroke()
}

function witch_huntAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+12*H/24)
  ctx.lineTo(x+9*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+14*H/24)
  ctx.lineTo(x+11*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+15*H/24)
  ctx.lineTo(x+12*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+15*H/24)
  cpx = x+5*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+14*H/24)
  ctx.lineTo(x+2*W/24, y+18*H/24)
  ctx.lineTo(x+2*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+18*H/24)
  ctx.lineTo(x+16*W/24, y+2*H/24)
  ctx.lineTo(x+20*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+17*H/24)
  cpx = x+10*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+18*H/24)
  cpx = x+10*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+19*H/24)
  cpx = x+22*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+18*H/24)
  cpx = x+22*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+17*H/24)
  ctx.stroke()
}

function sailboatAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+18*H/24)
  ctx.lineTo(x+10*W/24, y+2*H/24)
  ctx.lineTo(x+10*W/24, y+3*H/24)
  ctx.lineTo(x+21*W/24, y+17*H/24)
  ctx.lineTo(x+10*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+15*H/24)
  ctx.lineTo(x+22*W/24, y+14*H/24)
  ctx.lineTo(x+19*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+14*H/24)
  ctx.lineTo(x+22*W/24, y+14*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+8*W/24, y+22*H/24)
  cpx = x+4*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+18*H/24)
  cpx = x+4*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+14*H/24)
  ctx.lineTo(x+10*W/24, y+14*H/24)
  ctx.stroke()
}

 
function lemonAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+11*H/24)
  cpx = x+21*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+7*H/24)
  cpx = x+11*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+6*H/24)
  cpx = x+11*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+5*H/24)
  cpx = x+13*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+6*H/24)
  cpx = x+13*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+7*H/24)
  cpx = x+12*W/24
  cpy = y+11*H/24
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+7*H/24)
  ctx.lineTo(x+12*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+6*H/24)
  ctx.lineTo(x+21*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+7*H/24)
  ctx.lineTo(x+18*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+5*H/24)
  ctx.lineTo(x+12*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+6*H/24)
  cpx = x+21*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+3*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+6*H/24)
  cpx = x+3*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+5*H/24)
  ctx.lineTo(x+6*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+6*H/24)
  ctx.lineTo(x+3*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+7*H/24)
  ctx.lineTo(x+6*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+5*H/24)
  ctx.lineTo(x+18*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+12*H/24)
  cpx = x+2*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+6*H/24)
  cpx = x+2*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+1*H/24)
  cpx = x+22*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+6*H/24)
  cpx = x+22*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+6*H/24)
  cpx = x+2*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+21*H/24)
  cpx = x+11*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  cpx = x+13*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+21*H/24)
  cpx = x+22*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+6*H/24)
  ctx.stroke()
}

function dieAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let r = W/50
  
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+16*W/24, y+22*H/24)
  ctx.lineTo(x+16*W/24, y+8*H/24)
  ctx.lineTo(x+2*W/24, y+8*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+16*H/24)
  ctx.lineTo(x+22*W/24, y+2*H/24)
  ctx.lineTo(x+16*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+8*H/24)
  ctx.lineTo(x+8*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+2*H/24)
  ctx.stroke()
  //5
  ctx.beginPath()
  ctx.arc(x+5*W/24, y+11*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+13*W/24, y+11*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+9*W/24, y+15*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+13*W/24, y+19*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+5*W/24, y+19*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+12*W/24, y+5*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+19*W/24, y+12*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  // 3 top
  ctx.beginPath()
  ctx.arc(x+9*W/24, y+3*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(x+15*W/24, y+7*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(x+12*W/24, y+5*H/24, r, 0, Math.PI*2)
  ctx.stroke()
}

function talkAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  
  randomWordAt(x-1*W/24, y+6*H/24,H/20,W,color)
  randomWordAt(x-1*W/24, y+10*H/24,H/20,W,color)
  randomWordAt(x-1*W/24, y+14*H/24,H/20,W,color)

  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+20*H/24)
  cpx = x+18*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+18*H/24)
  cpx = x+6*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+18*H/24)
  cpx = x+2*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+14*H/24)
  cpx = x+2*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+6*H/24)
  cpx = x+2*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+2*H/24)
  cpx = x+16*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+2*H/24)
  cpx = x+20*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+6*H/24)
  cpx = x+20*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+16*H/24)
  cpx = x+22*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+20*H/24)
  ctx.stroke()
}

function dog_whistleAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+10*H/24)
  cpx = x+2*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+6*H/24)
  cpx = x+2*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+2*H/24)
  cpx = x+10*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+6*H/24)
  cpx = x+10*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+10*H/24)
  cpx = x+7*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+9*H/24)
  cpx = x+7*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+8*H/24)
  cpx = x+6*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+6*H/24)
  cpx = x+9*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+8*H/24)
  cpx = x+8*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+9*H/24)
  ctx.lineTo(x+8*W/24, y+10*H/24)
  ctx.lineTo(x+16*W/24, y+18*H/24)
  ctx.lineTo(x+18*W/24, y+20*H/24)
  cpx = x+20*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+18*H/24)
  cpx = x+18*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+20*H/24)
  cpx = x+20*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+18*H/24)
  ctx.lineTo(x+10*W/24, y+8*H/24)
  ctx.lineTo(x+9*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+18*H/24)
  ctx.lineTo(x+18*W/24, y+16*H/24)
  cpx = x+17*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+15*H/24)
  cpx = x+15*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+18*H/24)
  cpx = x+16*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+16*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+9*H/24)
  cpx = x+3*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+6*H/24)
  cpx = x+3*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+3*H/24)
  cpx = x+9*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+6*H/24)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+6*H/24)
  cpx = x+9*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+7*H/24)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+9*H/24)
  ctx.lineTo(x+7*W/24, y+9*H/24)
  ctx.stroke()
}
 
function ghost_in_the_machineAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+14*H/24)
  cpx = x+9*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+14*H/24)
  cpx = x+11*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
  cpx = x+13*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+14*H/24)
  cpx = x+15*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+14*H/24)
  cpx = x+16*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+8*H/24)
  cpx = x+16*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
  cpx = x+8*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+8*H/24)
  cpx = x+8*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+13*H/24)
  cpx = x+11*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+12*H/24)
  cpx = x+11*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+11*H/24)
  cpx = x+11*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
  cpx = x+13*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+11*H/24)
  cpx = x+13*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+12*H/24)
  cpx = x+13*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+13*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+9*H/24)
  cpx = x+9*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+8*H/24)
  cpx = x+9*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+7*H/24)
  cpx = x+11*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+8*H/24)
  cpx = x+11*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+9*H/24)
  cpx = x+13*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+8*H/24)
  cpx = x+13*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+7*H/24)
  cpx = x+15*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+8*H/24)
  cpx = x+15*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+16*H/24)
  cpx = x+5*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+16*H/24)
  cpx = x+4*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+15*H/24)
  cpx = x+4*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+3*H/24)
  cpx = x+4*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+2*H/24)
  cpx = x+19*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+2*H/24)
  cpx = x+20*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+3*H/24)
  cpx = x+20*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+15*H/24)
  cpx = x+20*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+17*H/24)
  ctx.lineTo(x+6*W/24, y+17*H/24)
  ctx.lineTo(x+6*W/24, y+18*H/24)
  ctx.lineTo(x+7*W/24, y+18*H/24)
  ctx.lineTo(x+7*W/24, y+19*H/24)
  ctx.lineTo(x+6*W/24, y+19*H/24)
  ctx.lineTo(x+6*W/24, y+20*H/24)
  ctx.lineTo(x+5*W/24, y+20*H/24)
  ctx.lineTo(x+5*W/24, y+19*H/24)
  ctx.lineTo(x+4*W/24, y+19*H/24)
  ctx.lineTo(x+4*W/24, y+18*H/24)
  ctx.lineTo(x+5*W/24, y+18*H/24)
  ctx.lineTo(x+5*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+21*H/24)
  cpx = x+15*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+20*H/24)
  cpx = x+15*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+19*H/24)
  cpx = x+17*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+20*H/24)
  cpx = x+17*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+21*H/24)
  cpx = x+19*W/24
  cpy = y+19*H/24
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+19*H/24)
  cpx = x+18*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+18*H/24)
  cpx = x+18*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+17*H/24)
  cpx = x+20*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+18*H/24)
  cpx = x+20*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+1*H/24)
  ctx.lineTo(x+3*W/24, y+23*H/24)
  ctx.lineTo(x+19*W/24, y+23*H/24)
  cpx = x+21*W/24
  cpy = y+23*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+21*H/24)
  cpx = x+21*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+1*H/24)
  cpx = x+3*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+1*H/24)
  cpx = x+11*W/24
  cpy = y+20*H/24
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+20*H/24)
  ctx.lineTo(x+8*W/24, y+21*H/24)
  ctx.moveTo(x+13*W/24, y+20*H/24)
  ctx.lineTo(x+11*W/24, y+21*H/24)
  ctx.stroke()
}

function connect_the_dotsAt  (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.font = '600 13pt Garamond'
  let count = 1, r = W/72
  let cx = x+W/2, cy = y+H/2
  let offx = 12, offy = 12
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.arc(x+10*W/24, y+2*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+10*W/24 < cx) offx = -18
  offy =  20
 if (y+2*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+10*W/24, y+offy+2*H/24)
  ctx.beginPath()
  ctx.arc(x+14*W/24, y+2*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+14*W/24 < cx) offx = -18
  offy = 20
  if (y+2*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+14*W/24, y+offy+2*H/24)
  ctx.beginPath()
  ctx.arc(x+18*W/24, y+2*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+18*W/24 < cx) offx = -18
  offy = 20
  if (y+2*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+18*W/24, y+offy+2*H/24)
  ctx.beginPath()
  ctx.arc(x+20*W/24, y+6*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+20*W/24 < cx) offx = -18
  offy = 20
  if (y+6*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+20*W/24, y+offy+6*H/24)
  ctx.beginPath()
  ctx.arc(x+22*W/24, y+10*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+22*W/24 < cx) offx = -18
  offy = 20
  if (y+10*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+22*W/24, y+offy+10*H/24)
  ctx.beginPath()
  ctx.arc(x+22*W/24, y+14*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+22*W/24 < cx) offx = -18
  offy = 20
  if (y+14*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+22*W/24, y+offy+14*H/24)
  ctx.beginPath()
  ctx.arc(x+22*W/24, y+18*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+22*W/24 < cx) offx = -18
  offy = 20
  if (y+18*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+22*W/24, y+offy+18*H/24)
  ctx.beginPath()
  ctx.arc(x+22*W/24, y+22*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+22*W/24 < cx) offx = -18
  offy = 20
  if (y+22*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+22*W/24, y+offy+22*H/24)
  ctx.beginPath()
  ctx.arc(x+18*W/24, y+22*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+18*W/24 < cx) offx = -18
  offy = 20
  if (y+22*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+18*W/24, y+offy+22*H/24)
  ctx.beginPath()
  ctx.arc(x+14*W/24, y+22*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+14*W/24 < cx) offx = -18
  offy = 20
  if (y+22*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+14*W/24, y+offy+22*H/24)
  ctx.beginPath()
  ctx.arc(x+10*W/24, y+22*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+10*W/24 < cx) offx = -18
  offy = 20
  if (y+22*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+10*W/24, y+offy+22*H/24)
  ctx.beginPath()
  ctx.arc(x+10*W/24, y+18*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+10*W/24 < cx) offx = -18
  offy = 20
  if (y+18*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+10*W/24, y+offy+18*H/24)
  ctx.beginPath()
  ctx.arc(x+10*W/24, y+14*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+10*W/24 < cx) offx = -18
  offy = 20
  if (y+14*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+10*W/24, y+offy+14*H/24)
  ctx.beginPath()
  ctx.arc(x+10*W/24, y+10*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+10*W/24 < cx) offx = -18
  offy = 20
  if (y+10*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+10*W/24, y+offy+10*H/24)
  ctx.beginPath()
  ctx.arc(x+8*W/24, y+6*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+8*W/24 < cx) offx = -18
  offy = 20
  if (y+6*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+8*W/24, y+offy+6*H/24)
  ctx.beginPath()
  ctx.arc(x+6*W/24, y+2*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+6*W/24 < cx) offx = -18
  offy = 20
  if (y+2*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+6*W/24, y+offy+2*H/24)
  ctx.beginPath()
  ctx.arc(x+4*W/24, y+6*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+4*W/24 < cx) offx = -18
  offy = 20
  if (y+6*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+4*W/24, y+offy+6*H/24)
  ctx.beginPath()
  ctx.arc(x+2*W/24, y+10*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+2*W/24 < cx) offx = -18
  offy = 20
  if (y+10*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+2*W/24, y+offy+10*H/24)
  ctx.beginPath()
  ctx.arc(x+2*W/24, y+14*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+2*W/24 < cx) offx = -18
  offy = 20
  if (y+14*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+2*W/24, y+offy+14*H/24)
  ctx.beginPath()
  ctx.arc(x+2*W/24, y+18*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+2*W/24 < cx) offx = -18
  offy = 20
  if (y+18*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+2*W/24, y+offy+18*H/24)
  ctx.beginPath()
  ctx.arc(x+2*W/24, y+22*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+2*W/24 < cx) offx = -18
  offy = 20
  if (y+22*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+2*W/24, y+offy+22*H/24)
  ctx.beginPath()
  ctx.arc(x+6*W/24, y+22*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+6*W/24 < cx) offx = -18
  offy = 20
  if (y+22*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+6*W/24, y+offy+22*H/24)
  ctx.beginPath()
  ctx.arc(x+14*W/24, y+10*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+14*W/24 < cx) offx = -18
  offy = 20
  if (y+10*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+14*W/24, y+offy+10*H/24)
  ctx.beginPath()
  ctx.arc(x+18*W/24, y+10*H/24,r,0,Math.PI*2)
  ctx.fill()
  offx = 8
  if (x+18*W/24 < cx) offx = -18
  offy = 20
  if (y+10*H/24 < cy) offy = -8
  ctx.fillText(count++,x+offx+18*W/24, y+offy+10*H/24)

}

function cheeseAt (x,y,W,color) {
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
  ctx.lineTo(x+12*W/24, y+2*H/24)
  cpx = x+21*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+8*H/24)
  ctx.lineTo(x+2*W/24, y+12*H/24)
  ctx.lineTo(x+2*W/24, y+20*H/24)
  ctx.lineTo(x+22*W/24, y+16*H/24)
  ctx.lineTo(x+22*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+14*H/24)
  cpx = x+3*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+15*H/24)
  cpx = x+3*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+19*H/24)
  cpx = x+5*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+17*H/24)
  cpx = x+9*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+14*H/24)
  cpx = x+7*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+13*H/24)
  cpx = x+7*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+12*H/24)
  cpx = x+9*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+13*H/24)
  cpx = x+9*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+14*H/24)
  cpx = x+14*W/24
  cpy = y+16*H/24
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+16*H/24)
  cpx = x+12*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
  cpx = x+12*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+12*H/24)
  cpx = x+16*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+14*H/24)
  cpx = x+16*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+16*H/24)
  cpx = x+17*W/24
  cpy = y+9*H/24
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+9*H/24)
  cpx = x+17*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+11*H/24)
  cpx = x+20*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+15*H/24)
  cpx = x+18*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+14*H/24)
  cpx = x+18*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+13*H/24)
  cpx = x+20*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+14*H/24)
  cpx = x+20*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+15*H/24)
  ctx.stroke()
}

function keyholeAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+8*H/24)
  cpx = x+6*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+13*H/24)
  cpx = x+7*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+22*H/24)
  cpx = x+17*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+22*H/24)
  cpx = x+15*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+13*H/24)
  cpx = x+18*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+8*H/24)
  cpx = x+18*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+6*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+8*H/24)
  ctx.stroke()
  
}

function unread_spreadAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+16*H/24)
  cpx = x+2*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+17*H/24)
  cpx = x+8*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+17*H/24)
  cpx = x+9*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+16*H/24)
  cpx = x+9*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+7*H/24)
  cpx = x+9*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+6*H/24)
  cpx = x+3*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+6*H/24)
  cpx = x+2*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+7*H/24)
  cpx = x+2*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+16*H/24)
  ctx.stroke()
// card2 
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+14*H/24)
  cpx = x+9*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+15*H/24)
  cpx = x+15*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+15*H/24)
  cpx = x+16*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+14*H/24)
  cpx = x+16*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+5*H/24)
  cpx = x+16*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+4*H/24)
  cpx = x+10*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+4*H/24)
  cpx = x+9*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+5*H/24)
  cpx = x+9*W/24
  cpy = y+7*H/24
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+16*H/24)
  cpx = x+16*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+15*H/24)
  cpx = x+16*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+6*H/24)
  cpx = x+16*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+5*H/24)
  cpx = x+22*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+5*H/24)
  cpx = x+23*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+6*H/24)
  cpx = x+23*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+15*H/24)
  cpx = x+23*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+16*H/24)
  cpx = x+17*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+16*H/24)
  cpx = x+3*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+15*H/24)
  cpx = x+3*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+8*H/24)
  cpx = x+3*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+7*H/24)
  cpx = x+7*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+7*H/24)
  cpx = x+8*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+8*H/24)
  cpx = x+8*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+15*H/24)
  cpx = x+8*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+16*H/24)
  cpx = x+4*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+14*H/24)
  cpx = x+10*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+13*H/24)
  cpx = x+10*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+6*H/24)
  cpx = x+10*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+5*H/24)
  cpx = x+14*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+5*H/24)
  cpx = x+15*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+6*H/24)
  cpx = x+15*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+13*H/24)
  cpx = x+15*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+14*H/24)
  cpx = x+11*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+15*H/24)
  cpx = x+17*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+14*H/24)
  cpx = x+17*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+7*H/24)
  cpx = x+17*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+6*H/24)
  cpx = x+21*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+6*H/24)
  cpx = x+22*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+7*H/24)
  cpx = x+22*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+14*H/24)
  cpx = x+22*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+15*H/24)
  cpx = x+18*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+15*H/24)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+7*H/24)
  ctx.lineTo(x+9*W/24, y+5*H/24)
  ctx.stroke()
}

function heirloomAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+8*H/24)
  cpx = x+12*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+5*H/24)
  cpx = x+3*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+12*H/24)
  cpx = x+3*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+18*H/24)
  cpx = x+12*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+18*H/24)
  cpx = x+21*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+12*H/24)
  cpx = x+21*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+5*H/24)
  cpx = x+12*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+8*H/24)
  cpx = x+13*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+6*H/24)
  cpx = x+17*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+8*H/24)
  cpx = x+11*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+4*H/24)
  cpx = x+12*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
  cpx = x+12*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+8*H/24)
  cpx = x+11*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+6*H/24)
  cpx = x+5*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+9*H/24)
  cpx = x+16*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+7*H/24)
  cpx = x+13*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+9*H/24)
  cpx = x+6*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+7*H/24)
  cpx = x+11*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+8*H/24)
  cpx = x+10*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+11*H/24)
  cpx = x+11*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
  ctx.stroke()
}

function racetrackAt (x,y,W,color) {
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
  cpx = x+20*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+14*H/24)
  cpx = x+20*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+10*H/24)
  cpx = x+20*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+4*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+10*H/24)
  cpx = x+4*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+14*H/24)
  cpx = x+4*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+18*H/24)
  cpx = x+16*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+14*H/24)
  cpx = x+16*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+10*H/24)
  cpx = x+16*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+6*H/24)
  cpx = x+8*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+10*H/24)
  cpx = x+8*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+14*H/24)
  cpx = x+8*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+18*H/24)
  ctx.stroke()
  ctx.setLineDash([W/48, W/24])

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+10*H/24)
  cpx = x+18*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
  cpx = x+6*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+14*H/24)
  cpx = x+6*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+20*H/24)
  cpx = x+18*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+14*H/24)
  ctx.stroke()
  
  ctx.setLineDash([])
  let r = W/60
  // cars
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+10*H/24)
  cpx = x+18*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+11*H/24)
  cpx = x+19*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+12*H/24)
  cpx = x+19*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+13*H/24)
  cpx = x+19*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+14*H/24)
  cpx = x+17*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+14*H/24)
  cpx = x+17*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+17*W/24, y+11*H/24, r, 0, 2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+17*W/24, y+13*H/24, r, 0, 2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+14*H/24)
  cpx = x+6*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+13*H/24)
  cpx = x+5*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+12*H/24)
  cpx = x+5*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+11*H/24)
  cpx = x+5*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+10*H/24)
  cpx = x+7*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+10*H/24)
  cpx = x+7*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+14*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(x+7*W/24, y+11*H/24, r, 0, 2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+7*W/24, y+13*H/24, r, 0, 2*Math.PI)
  ctx.stroke()
}

function rothkoAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
// ragged (ctx,endX,endY,x,y)
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+2*H/24)
  ragged (ctx,x+2*W/24, y+8*H/24,x+2*W/24, y+2*H/24,26)
  ragged (ctx,x+22*W/24, y+8*H/24,x+2*W/24, y+8*H/24)
  ragged (ctx,x+22*W/24, y+2*H/24,x+22*W/24, y+8*H/24)
  ragged (ctx,x+2*W/24, y+2*H/24,x+22*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+8*H/24)
  ragged (ctx,x+2*W/24, y+11*H/24,x+2*W/24, y+8*H/24)
  ragged (ctx,x+22*W/24, y+11*H/24,x+2*W/24, y+11*H/24)
  ragged (ctx,x+22*W/24, y+8*H/24,x+22*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+12*H/24)
  ragged (ctx,x+2*W/24, y+22*H/24,x+2*W/24, y+12*H/24)
  ragged (ctx,x+22*W/24, y+22*H/24,x+2*W/24, y+22*H/24)
  ragged (ctx,x+22*W/24, y+12*H/24,x+22*W/24, y+22*H/24)
  ragged (ctx,x+2*W/24, y+12*H/24,x+22*W/24, y+12*H/24)
  ctx.stroke()
}

function two_car_garageAt (x,y,W,color) {
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
  cpx = x+22*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+20*H/24)
  ctx.lineTo(x+22*W/24, y+8*H/24)
  ctx.lineTo(x+12*W/24, y+4*H/24)
  ctx.lineTo(x+2*W/24, y+8*H/24)
  ctx.lineTo(x+2*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+20*H/24)
  ctx.lineTo(x+11*W/24, y+11*H/24)
  ctx.lineTo(x+3*W/24, y+11*H/24)
  ctx.lineTo(x+3*W/24, y+19*H/24)
  ctx.lineTo(x+3*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+20*H/24)
  ctx.lineTo(x+13*W/24, y+11*H/24)
  ctx.lineTo(x+21*W/24, y+11*H/24)
  ctx.lineTo(x+21*W/24, y+20*H/24)
  ctx.stroke()
}

function virusAt (x,y,W,color) {
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
  cpx = x+18*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+12*H/24)
  cpx = x+18*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+6*H/24)
  cpx = x+6*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+12*H/24)
  cpx = x+6*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+6*H/24)
  cpx = x+11*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+5*H/24)
  cpx = x+11*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
  cpx = x+13*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+5*H/24)
  cpx = x+13*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+12*H/24)
  cpx = x+18*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+13*H/24)
  cpx = x+20*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+12*H/24)
  cpx = x+20*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+11*H/24)
  cpx = x+18*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+7*H/24)
  cpx = x+16*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+6*H/24)
  cpx = x+18*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+7*H/24)
  cpx = x+18*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+18*H/24)
  cpx = x+13*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+19*H/24)
  cpx = x+13*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+20*H/24)
  cpx = x+11*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+19*H/24)
  cpx = x+11*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+12*H/24)
  cpx = x+6*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+13*H/24)
  cpx = x+4*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+12*H/24)
  cpx = x+4*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+11*H/24)
  cpx = x+6*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+8*H/24)
  cpx = x+6*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+7*H/24)
  cpx = x+6*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+6*H/24)
  cpx = x+8*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+7*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+16*H/24)
  cpx = x+6*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+17*H/24)
  cpx = x+6*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+18*H/24)
  cpx = x+8*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+17*H/24)
  cpx = x+16*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+18*H/24)
  cpx = x+18*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+17*H/24)
  cpx = x+18*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+13*H/24)
  cpx = x+11*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+12*H/24)
  cpx = x+11*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+11*H/24)
  cpx = x+13*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+12*H/24)
  cpx = x+13*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+9*H/24)
  cpx = x+11*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+8*H/24)
  cpx = x+11*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
  cpx = x+13*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+8*H/24)
  cpx = x+13*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+9*H/24)
  cpx = x+16*W/24
  cpy = y+11*H/24
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+11*H/24)
  cpx = x+15*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+10*H/24)
  cpx = x+15*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+9*H/24)
  cpx = x+17*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+10*H/24)
  cpx = x+17*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+15*H/24)
  cpx = x+15*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+14*H/24)
  cpx = x+15*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+13*H/24)
  cpx = x+17*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+14*H/24)
  cpx = x+17*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+11*H/24)
  cpx = x+7*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+10*H/24)
  cpx = x+7*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+9*H/24)
  cpx = x+9*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+10*H/24)
  cpx = x+9*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+13*H/24)
  cpx = x+9*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+14*H/24)
  cpx = x+9*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+15*H/24)
  cpx = x+7*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+14*H/24)
  cpx = x+7*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+17*H/24)
  cpx = x+11*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+16*H/24)
  cpx = x+11*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+15*H/24)
  cpx = x+13*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+16*H/24)
  cpx = x+13*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+17*H/24)
  ctx.stroke()
}

function get_off_my_lawnAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+12*H/24)
  ctx.lineTo(x+21*W/24, y+12*H/24)
  ctx.lineTo(x+21*W/24, y+2*H/24)
  ctx.lineTo(x+3*W/24, y+2*H/24)
  ctx.lineTo(x+3*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+3*H/24)
  ctx.lineTo(x+5*W/24, y+7*H/24)
  ctx.lineTo(x+5*W/24, y+5*H/24)
  ctx.lineTo(x+8*W/24, y+3*H/24)
  ctx.lineTo(x+5*W/24, y+5*H/24)
  ctx.lineTo(x+8*W/24, y+7*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+3*H/24)
  ctx.lineTo(x+9*W/24, y+7*H/24)
  ctx.lineTo(x+12*W/24, y+7*H/24)
  ctx.lineTo(x+9*W/24, y+7*H/24)
  ctx.lineTo(x+9*W/24, y+3*H/24)
  ctx.lineTo(x+12*W/24, y+3*H/24)
  ctx.lineTo(x+9*W/24, y+3*H/24)
  ctx.lineTo(x+9*W/24, y+5*H/24)
  ctx.lineTo(x+11*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+7*H/24)
  ctx.lineTo(x+13*W/24, y+7*H/24)
  ctx.lineTo(x+13*W/24, y+3*H/24)
  ctx.lineTo(x+16*W/24, y+3*H/24)
  ctx.lineTo(x+13*W/24, y+3*H/24)
  ctx.lineTo(x+13*W/24, y+5*H/24)
  ctx.lineTo(x+15*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+7*H/24)
  ctx.lineTo(x+17*W/24, y+3*H/24)
  ctx.lineTo(x+19*W/24, y+3*H/24)
  cpx = x+20*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+4*H/24)
  cpx = x+20*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+5*H/24)
  cpx = x+17*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+9*H/24)
  cpx = x+6*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+8*H/24)
  cpx = x+10*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+9*H/24)
  cpx = x+10*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
  cpx = x+10*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+11*H/24)
  cpx = x+7*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+11*H/24)
  cpx = x+6*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+10*H/24)
  cpx = x+6*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+9*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+11*H/24)
  ctx.lineTo(x+11*W/24, y+8*H/24)
  ctx.lineTo(x+14*W/24, y+8*H/24)
  ctx.lineTo(x+11*W/24, y+8*H/24)
  ctx.lineTo(x+11*W/24, y+10*H/24)
  ctx.lineTo(x+13*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+11*H/24)
  ctx.lineTo(x+15*W/24, y+8*H/24)
  ctx.lineTo(x+18*W/24, y+8*H/24)
  ctx.lineTo(x+15*W/24, y+8*H/24)
  ctx.lineTo(x+15*W/24, y+10*H/24)
  ctx.lineTo(x+17*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+2*H/24)
  ctx.lineTo(x+11*W/24, y+1*H/24)
  ctx.lineTo(x+13*W/24, y+1*H/24)
  ctx.lineTo(x+13*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+12*H/24)
  ctx.lineTo(x+11*W/24, y+22*H/24)
  ctx.moveTo(x+13*W/24, y+22*H/24)
  ctx.lineTo(x+13*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+22*H/24)
  cpx = x+13*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+16*H/24)
  cpx = x+15*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+22*H/24)
  cpx = x+15*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+17*H/24)
  cpx = x+16*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+22*H/24)
  cpx = x+11*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+17*H/24)
  cpx = x+9*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+22*H/24)
  cpx = x+9*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+18*H/24)
  cpx = x+8*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+22*H/24)
  cpx = x+7*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+18*H/24)
  cpx = x+6*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+22*H/24)
  cpx = x+6*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+17*H/24)
  cpx = x+4*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+22*H/24)
  cpx = x+4*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/24, y+18*H/24)
  cpx = x+2*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+22*H/24)
  cpx = x+22*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+17*H/24)
  cpx = x+20*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+22*H/24)
  cpx = x+20*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+17*H/24)
  cpx = x+19*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+22*H/24)
  cpx = x+16*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+19*H/24)
  cpx = x+17*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+22*H/24)
  cpx = x+18*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+18*H/24)
  cpx = x+19*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+22*H/24)
  ctx.stroke()
}

function too_expensive_burgerAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+11*H/24)
  cpx = x+6*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+11*H/24)
  cpx = x+10*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+11*H/24)
  cpx = x+14*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+11*H/24)
  cpx = x+18*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+10*H/24)
  cpx = x+4*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+10*H/24)
  cpx = x+4*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+5*H/24)
  cpx = x+20*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+12*H/24)
  cpx = x+15*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+15*H/24)
  cpx = x+17*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+12*H/24)
  cpx = x+19*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+12*H/24)
  cpx = x+20*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+14*H/24)
  cpx = x+20*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+16*H/24)
  cpx = x+5*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+16*H/24)
  cpx = x+4*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+14*H/24)
  cpx = x+4*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+12*H/24)
  cpx = x+12*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+16*H/24)
  cpx = x+20*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+16*H/24)
  cpx = x+20*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+19*H/24)
  cpx = x+6*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+19*H/24)
  cpx = x+4*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+16*H/24)
  ctx.stroke()
// letuce
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+12*H/24)
  ctx.lineTo(x+17*W/24, y+12*H/24)
  ctx.stroke()

  // seeds
  let r = W/96
  ctx.beginPath()
  ctx.arc(x+6*W/24, y+8*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+8*W/24, y+7*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+10*W/24, y+8*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+10*W/24, y+6*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+12*W/24, y+7*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+6*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+15*W/24, y+8*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+17*W/24, y+7*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+18*W/24, y+9*H/24, r, 0, Math.PI*2)
  ctx.stroke()
}

function bandaidAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+16*H/24)
  cpx = x+2*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+14*H/24)
  cpx = x+2*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+10*H/24)
  cpx = x+2*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+8*H/24)
  cpx = x+20*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+8*H/24)
  cpx = x+22*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+10*H/24)
  cpx = x+22*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+14*H/24)
  cpx = x+22*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+16*H/24)
  cpx = x+4*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+16*H/24)
  ctx.stroke()
  let r = W/96

  ctx.beginPath()
  ctx.arc(x+9*W/24, y+9*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+11*W/24, y+9*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+13*W/24, y+9*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+15*W/24, y+9*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+9*W/24, y+11*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+9*W/24, y+13*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+9*W/24, y+15*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+11*W/24, y+15*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+13*W/24, y+15*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+15*W/24, y+15*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+13*W/24, y+13*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+15*W/24, y+13*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+15*W/24, y+11*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+13*W/24, y+11*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+11*W/24, y+11*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+11*W/24, y+13*H/24, r, 0, Math.PI*2)
  ctx.stroke()
/////////////
  ctx.beginPath()
  ctx.arc(x+10*W/24, y+10*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+12*W/24, y+10*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+10*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+10*W/24, y+12*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+12*W/24, y+12*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+12*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+14*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+12*W/24, y+14*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+10*W/24, y+14*H/24, r, 0, Math.PI*2)
  ctx.stroke()
}

function monitorAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+6*H/24)
  ctx.lineTo(x+8*W/24, y+18*H/24)
  ctx.lineTo(x+22*W/24, y+18*H/24)
  ctx.lineTo(x+22*W/24, y+4*H/24)
  ctx.lineTo(x+8*W/24, y+4*H/24)
  ctx.lineTo(x+8*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+4*H/24)
  ctx.lineTo(x+6*W/24, y+4*H/24)
  ctx.lineTo(x+6*W/24, y+17*H/24)
  ctx.lineTo(x+8*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+16*H/24)
  ctx.lineTo(x+2*W/24, y+14*H/24)
  ctx.lineTo(x+2*W/24, y+5*H/24)
  ctx.lineTo(x+6*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+6*H/24)
  ctx.lineTo(x+3*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+6*H/24)
  ctx.lineTo(x+4*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+6*H/24)
  ctx.lineTo(x+5*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+5*H/24)
  ctx.lineTo(x+9*W/24, y+16*H/24)
  ctx.lineTo(x+21*W/24, y+16*H/24)
  ctx.lineTo(x+21*W/24, y+5*H/24)
  ctx.lineTo(x+9*W/24, y+5*H/24)
  ctx.stroke()
  let r = W/96
  ctx.beginPath()
  ctx.arc(x+10*W/24, y+17*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+11*W/24, y+17*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+19*W/24, y+17*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+20*W/24, y+17*H/24, r, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+18*H/24)
  ctx.lineTo(x+13*W/24, y+20*H/24)
  ctx.lineTo(x+15*W/24, y+20*H/24)
  ctx.lineTo(x+15*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+19*H/24)
  cpx = x+11*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+20*H/24)
  cpx = x+11*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+21*H/24)
  cpx = x+17*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+20*H/24)
  cpx = x+17*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+20*H/24)
  cpx = x+10*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+21*H/24)
  cpx = x+11*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+22*H/24)
  cpx = x+17*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+21*H/24)
  cpx = x+18*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+20*H/24)
  ctx.stroke()
}

function entanglementAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+20*H/24)
  cpx = x+6*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+22*H/24)
  cpx = x+2*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+20*H/24)
  cpx = x+2*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+18*H/24)
  cpx = x+6*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+6*H/24)
  cpx = x+18*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+4*H/24)
  cpx = x+18*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+2*H/24)
  cpx = x+22*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+4*H/24)
  cpx = x+22*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+18*H/24)
  cpx = x+5*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+16*H/24)
  cpx = x+11*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+14*H/24)
  cpx = x+9*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  cpx = x+15*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+10*H/24)
  cpx = x+13*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+8*H/24)
  cpx = x+19*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+5*H/24)
  ctx.lineTo(x+20*W/24, y+3*H/24)
  ctx.lineTo(x+19*W/24, y+4*H/24)
  ctx.lineTo(x+20*W/24, y+3*H/24)
  ctx.lineTo(x+21*W/24, y+4*H/24)
  ctx.lineTo(x+20*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+19*H/24)
  ctx.lineTo(x+4*W/24, y+21*H/24)
  ctx.lineTo(x+5*W/24, y+20*H/24)
  ctx.lineTo(x+4*W/24, y+21*H/24)
  ctx.lineTo(x+3*W/24, y+20*H/24)
  ctx.lineTo(x+4*W/24, y+21*H/24)
  ctx.stroke()
}

function mushroomAt (x,y,W,color) {
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
  cpx = x+16*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+18*H/24)
  cpx = x+15*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+10*H/24)
  cpx = x+12*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
  cpx = x+9*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+18*H/24)
  cpx = x+8*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+13*H/24)
  cpx = x+4*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+10*H/24)
  cpx = x+2*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+6*H/24)
  cpx = x+22*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+10*H/24)
  cpx = x+20*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+10*H/24)
  cpx = x+2*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+22*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+10*H/24)
  ctx.stroke()
}

function airplaneAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+13*H/24)
  ctx.lineTo(x+9*W/24, y+16*H/24)
  ctx.lineTo(x+22*W/24, y+5*H/24)
  ctx.lineTo(x+2*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+5*H/24)
  ctx.lineTo(x+12*W/24, y+17*H/24)
  ctx.lineTo(x+20*W/24, y+20*H/24)
  ctx.lineTo(x+22*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+18*H/24)
  ctx.lineTo(x+11*W/24, y+21*H/24)
  ctx.lineTo(x+12*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+21*H/24)
  ctx.lineTo(x+9*W/24, y+16*H/24)
  ctx.stroke()
}

function fossilAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+16*H/24)
  cpx = x+20*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+12*H/24)
  cpx = x+20*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+8*H/24)
  cpx = x+16*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+8*H/24)
  ctx.lineTo(x+13*W/24, y+16*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+9*H/24)
  ctx.lineTo(x+10*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+10*H/24)
  ctx.lineTo(x+7*W/24, y+14*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+12*H/24)
  cpx = x+4*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/24, y+9*H/24)
  cpx = x+1*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/24, y+15*H/24)
  cpx = x+4*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+12*H/24)
  ctx.lineTo(x+16*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+12*H/24)
  cpx = x+17*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+11*H/24)
  cpx = x+17*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+10*H/24)
  cpx = x+19*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+11*H/24)
  cpx = x+19*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+12*H/24)
  ctx.stroke()
}


function nice_thingsAt (x,y,W,color) {
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
  cpx = x+3*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+16*H/24)
  cpx = x+3*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+10*H/24)
  cpx = x+7*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+14*H/24)
  ctx.lineTo(x+10*W/24, y+14*H/24)
  ctx.lineTo(x+11*W/24, y+13*H/24)
  ctx.lineTo(x+10*W/24, y+14*H/24)
  ctx.lineTo(x+9*W/24, y+14*H/24)
  ctx.lineTo(x+11*W/24, y+15*H/24)
  ctx.lineTo(x+9*W/24, y+14*H/24)
  ctx.lineTo(x+7*W/24, y+16*H/24)
  cpx = x+7*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+10*H/24)
  cpx = x+12*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+15*H/24)
  ctx.lineTo(x+16*W/24, y+15*H/24)
  ctx.lineTo(x+14*W/24, y+16*H/24)
  cpx = x+12*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+13*H/24)
  ctx.lineTo(x+18*W/24, y+15*H/24)
  ctx.lineTo(x+18*W/24, y+20*H/24)
  cpx = x+18*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+21*H/24)
  cpx = x+14*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+22*H/24)
  cpx = x+23*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+22*H/24)
  cpx = x+23*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+21*H/24)
  cpx = x+19*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+20*H/24)
  cpx = x+19*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+18*H/24)
  ctx.lineTo(x+6*W/24, y+17*H/24)
  ctx.lineTo(x+3*W/24, y+18*H/24)
  ctx.lineTo(x+4*W/24, y+18*H/24)
  ctx.lineTo(x+5*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+22*H/24)
  ctx.lineTo(x+13*W/24, y+21*H/24)
  ctx.lineTo(x+13*W/24, y+22*H/24)
  ctx.lineTo(x+10*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+18*H/24)
  ctx.lineTo(x+21*W/24, y+21*H/24)
  ctx.lineTo(x+22*W/24, y+20*H/24)
  ctx.lineTo(x+19*W/24, y+18*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+22*H/24)
  ctx.lineTo(x+8*W/24, y+21*H/24)
  ctx.lineTo(x+9*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+21*H/24)
  ctx.lineTo(x+3*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+21*H/24)
  ctx.stroke()
}

function tissue_boxAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+19*H/24)
  ctx.lineTo(x+18*W/24, y+19*H/24)
  ctx.lineTo(x+22*W/24, y+14*H/24)
  ctx.lineTo(x+22*W/24, y+6*H/24)
  ctx.lineTo(x+18*W/24, y+11*H/24)
  ctx.lineTo(x+14*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+19*H/24)
  ctx.lineTo(x+2*W/24, y+11*H/24)
  ctx.lineTo(x+6*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+11*H/24)
  ctx.lineTo(x+6*W/24, y+6*H/24)
  ctx.lineTo(x+22*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+11*H/24)
  cpx = x+6*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+15*H/24)
  cpx = x+14*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+11*H/24)
  cpx = x+16*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
  cpx = x+8*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+11*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+12*H/24)
  ctx.lineTo(x+14*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+11*H/24)
  ctx.lineTo(x+18*W/24, y+19*H/24)
  ctx.stroke()

}

  function d_rAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+12*H/24)
    cpx = x+21*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+11*H/24)
    cpx = x+22*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+10*H/24)
    cpx = x+22*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+9*H/24)
    cpx = x+14*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+10*H/24)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+14*H/24)
    cpx = x+20*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+14*H/24)
    cpx = x+22*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+13*H/24)
    cpx = x+22*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+12*H/24)
    cpx = x+14*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+10*H/24)
    cpx = x+14*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+5*H/24)
    cpx = x+4*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+10*H/24)
    cpx = x+4*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+15*H/24)
    cpx = x+7*W/24
    cpy = y+17*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+19*H/24)
    cpx = x+4*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+14*H/24)
    cpx = x+14*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+18*H/24)
    cpx = x+13*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+20*H/24)
    cpx = x+18*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+10*H/24)
    cpx = x+9*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+9*H/24)
    cpx = x+9*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+8*H/24)
    cpx = x+11*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+9*H/24)
    cpx = x+11*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
    ctx.stroke()
    
    if (Math.random() > 0.5)
      rcc()
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

  function tissue_boxAt (x,y,W,color) {
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
    ctx.lineTo(x+18*W/24, y+18*H/24)
    ctx.lineTo(x+22*W/24, y+14*H/24)
    ctx.lineTo(x+22*W/24, y+8*H/24)
    ctx.lineTo(x+18*W/24, y+12*H/24)
    ctx.lineTo(x+14*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+18*H/24)
    ctx.lineTo(x+18*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+18*H/24)
    ctx.lineTo(x+2*W/24, y+18*H/24)
    ctx.lineTo(x+2*W/24, y+12*H/24)
    ctx.lineTo(x+6*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+12*H/24)
    ctx.lineTo(x+6*W/24, y+8*H/24)
    ctx.lineTo(x+22*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+12*H/24)
    cpx = x+8*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
    cpx = x+16*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+12*H/24)
    cpx = x+14*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+14*H/24)
    cpx = x+6*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+12*H/24)
    ctx.lineTo(x+13*W/24, y+12*H/24)
    ctx.stroke()
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
    ctx.moveTo(x+4*W/24, y+14*H/24)
    cpx = x+4*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+6*H/24)
    cpx = x+20*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+14*H/24)
    cpx = x+20*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+20*H/24)
    cpx = x+6*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+20*H/24)
    cpx = x+4*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+14*H/24)
    ctx.stroke()

    let r = W/5
    ctx.beginPath()
    ctx.arc(x+12*W/24, y+14*H/24, r, 0, 2*Math.PI)
    ctx.stroke()
    
    r = W/96
    
    ctx.beginPath()
    ctx.arc(x+10.75*W/24, y+15.5*H/24, r, 0, 2*Math.PI)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+13.25*W/24, y+15.5*H/24, r, 0, 2*Math.PI)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+14*W/24, y+13.5*H/24, r, 0, 2*Math.PI)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+12*W/24, y+12*H/24, r, 0, 2*Math.PI)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+10*W/24, y+13.5*H/24, r, 0, 2*Math.PI)
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
  