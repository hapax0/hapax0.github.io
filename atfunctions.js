let atList = ["origamiAt", "airplaneAt", "envelopeAt", "sardinesAt", "refractionAt", "starsAt", "mountainAt", 
  "mothAt", "firebirdAt", "spiralAt", "finger_gunAt", "vineAt", "triangleAt", "flaskAt", "pencilAt", "forestAt", 
  "elephantAt", "coreAt", "orbitAt", "lensAt", "theoremAt", "floppyAt", "spiderAt", "shoesAt", "bee_hiveAt", 
  "mushroomAt", "catAt", "birdAt", "functionAt", "coneAt", /*"pageAt",*/ "urnAt", "venn_diagramAt", "monsterAt", "frameAt",
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
  'bandaidAt', "witch_huntAt", "racetrackAt", "heirloomAt", "rainAt", "cloudsAt","sailboatAt", 
  "doorAt", "sunAt","waveAt", "lighthouseAt", "sofaAt", "windowAt", "conference_room_bAt","talkAt",
  "medicationAt","paint_brushAt", "hammerAt","pencil_sharpenerAt","clickAt", "stumpAt","walk_it_backAt",
  "shopping_listAt","paper_bagAt","press_the_buttonAt","seedAt","thread_the_needleAt","too_many_thingsAt",
  "rainbowAt","flock_of_birdsAt","aiAt","antsAt","keyAt","alarm_clockAt","herdAt","fish_hookAt","checkpointAt","coat_hangerAt","teak_rat_sculptureAt",
  "icebergAt","screwAt","nailAt","pillAt","vinylAt","compassAt","islandAt","toy_drumAt","almost_hanged_manAt",
  "eclipseAt","tidesAt","power_linesAt","cubicleAt","furniture_at_nightAt","indicate_by_pointingAt","plastic_owlAt","stone_axeAt",
  "invisible_handAt","unknown_birdAt", "dormerAt","skates_purseAt","shopping_cartAt","tickAt","incomingAt","passwordAt","snowmanAt", "calendarAt","gliderAt","hang_manAt","octopusAt","reel_to_reelAt","flyover_statesAt","coffee_makerAt","big_cityAt","joineryAt","missingAt","hexAt","unoAt","fourofdiamondsAt","space_intentionally_left_blankAt","regexAt","one_of_suitsAt","galleryAt","le_crépusculeAt","pongAt", "meanAt","quantum_tunnellingAt","mona_lisaAt", "divide_by_zeroAt","your_pointy_elbowsAt","workAt","doll_houseAt","pixelAt","game_pieceAt","gameAt","windAt","steering_wheelAt", "urgentAt", "holeAt","evidenceAt", "solar_systemAt","suburbsAt","empty_setAt","nowAt","scattered_leavesAt","cabin_air_filterAt","tape_dispenserAt","running_with_scissorsAt","free_palletsAt","whaleAt","bacteriophageAt","stone_wallAt","eyeglassesAt","blast_radiusAt","winter_stickAt","dreyAt","oocyteAt","bird_cageAt","parking_lotAt","lemonAt","dieAt","riverAt","progress_indicatorAt","postcardAt", "keyholeAt", "puzzle_pieceAt", "monitorAt", "impossibleAt", "uphillAt", "connect_the_dotsAt","dog_whistleAt"]  
let noDraw = ["fourofdiamondsAt","unoAt"]
let apostrophy = ["skates_purseAt"]
let noThe = ["hang_manAt","space_intentionally_left_blankAt","le_crépusculeAt","pongAt","quantum_tunnellingAt","divide_by_zeroAt","your_pointy_elbowsAt","workAt","urgentAt","nowAt","scattered_leavesAt","running_with_scissorsAt","too_many_thingsAt","flock_of_birdsAt","aiAt","walk_it_backAt","thread_the_needleAt","indicate_by_pointingAt","press_the_buttonAt","conference_room_bAt", "ghost_in_the_machineAt", "gas_station_shrubberyAt", "greenwashingAt", "refractionAt", "clickbaotAt",  "plate_tectonicsAt",
"furniture_at_nightAt", "misheard_lyricsAt", "negative_spaceAt","nice_thingsAt", "talkAt", "connect_the_dotsAt", "entanglementAt",'get_off_my_lawnAt']
let shortlist = ["windAt","calendarAt","nowAt"]

function recent () { // last 10
  let keys = Object.keys(defs)
  return (keys.slice(keys.length-4, keys.length))
} 

function cardnumber (name) {
  let keys = Object.keys(defs)
  return keys.indexOf(name)+1
}

function printableCard (f) {
  if (document.getElementById("canvassizes").value !== "3.5X5") {
    document.getElementById("canvassizes").value = "3.5X5"
    resizeCanvas()
  }
  if (!f)
    f = randomPick(atList)
 // console.log(f)
  tarotcard(0,0,3.5*96,5*96,f,cardnumber(f),true,false)
  if(document.getElementById("palettechoice").value === "dos")
    loadPalette()
}
  
function fillcard () {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let mode = document.getElementById("mode").value
  
  let r = 13
  let W = canvas.width, H = canvas.height
  let x = 0, y = 0
  let w = W/2*1.2, h = w*1.58 - 30
  x+=W/2-w/2, y+=H/2-h/2
  ctx.save()
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.arcTo(x+w, y,   x+w, y+h, r); // across to right
    ctx.arcTo(x+w, y+h, x,   y+h, r);
    ctx.arcTo(x,   y+h, x,   y,   r);
    ctx.arcTo(x,   y,   x+w, y,   r);
    ctx.closePath()
  ctx.clip()
  ctx.fillStyle = "#ffffee"
  ctx.globalCompositeOperation = "destination-over"
  ctx.fillRect(0,0,canvas.width,canvas.height)
  ctx.globalCompositeOperation = mode
  ctx.restore()
}

function tarotcard (x,y,w,h,f,n,IU,INVERT) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = canvas.height, W = canvas.width
  
  let colors = shuffle(getCurrentPalette())
  let up = true
  let r = 13, invert = false
  let fontsize = w/20
  BRIGHT = true
  if (IU != undefined) {
    up = IU
    BRIGHT = IU
  }
  up = true
    BRIGHT = true
  let pal = sortByBrightness(colors)
  if (IU === undefined) {
    if (Math.random() > 0.5) {
      up = false
      pal = sortByBrightness(pal)
    }
    if (INVERT && INVERT[0] === 1) {
      up = false
      BRIGHT = false
      pal = sortByBrightness(pal)
    } else
    if (INVERT && INVERT[0] === 0) {
      up = true
      BRIGHT = true
      pal = sortByBrightness(pal)
    }
  }
  
  let u = "u"
  if (up === false)
    u = "i"
  
  let brightness = brightnessOf10 (ctx,canvas.width/2,canvas.height*0.8,10)
  if (noDraw.includes(f)) {
    window[f](x,y,w*1.5)
    //return
  } else {
  let fillindex = randomPick([...Array(Math.floor(pal.length/2)).keys()])
  ctx.fillStyle = pal[fillindex]
  ctx.strokeStyle = randomPick(pal.slice(pal.length/2))
  ctx.lineWidth = 9
 
  ctx.shadowBlur = 10
  ctx.shadowColor = "#444444"
  ctx.shadowOffsetX = 2
  ctx.shadowOffsetY  = 12
  ctx.lineWidth = fontsize*0.9
  if (w === 3*96 || w === 3.5*96) {
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
  let sf = ctx.fillStyle
  let ss = ctx.strokeStyle
  // draw the icon
  ctx.fillStyle = sf
  ctx.strokeStyle = ss
  if (!up && !IU) {
    invert = true
    window[f](x,y+h/4, w*0.8,ctx.strokeStyle, invert)
  } else {
    window[f](x,y+h/4, w*0.8,ctx.strokeStyle, invert)
  }
  x = xp
  ctx.fillStyle = ctx.strokeStyle
}
  let prefix = "THE "
  if (noThe.includes(f))
    prefix = ""
  
  let text = prefix+capitalize(f.slice(0,-2))
  if (apostrophy.includes(f)) {
    text = text.replace(/s_/g, "'s_")
  }

  text = text.replace(/_/g, " ")
  text = text.toUpperCase()
  nw = text.split(" ").length
  let face = "sans serif"
  ctx.font = "800 "+(fontsize)+"pt " + face
  let width = ctx.measureText(text).width
  let chuncks = []
  if (!noDraw.includes(f)) {
    if (width > (w - r*2)-4) {
      let words = text.split(" ")
      chuncks.push(words.slice(0,nw/2).join(" "))
      chuncks.push(words.slice(nw/2,nw).join(" "))
      width = ctx.measureText(chuncks[0]).width
      ctx.fillText(chuncks[0], x+w/2-width/2+0, y+h-fontsize*3.2)
      width = ctx.measureText(chuncks[1]).width
      ctx.fillText(chuncks[1], x+w/2-width/2+0, y+h-fontsize*1.2)
    } else
      ctx.fillText(text, x+w/2-width/2+0, y+h-fontsize*1.2)
  }
  ctx.lineWidth = 2
  // up or down
  ctx.strokeStyle = ctx.fillStyle
  text = up? "\u{1F829}": "\u{1F82B}"
  width = ctx.measureText(text).width
  if ((w !== 3*96 && w !== 3.5*96) && !noDraw.includes(f))
    ctx.fillText(text, x+w-40-fontsize/2, y+fontsize*2)
  text = n // card number
  width = ctx.measureText(text).width
  if (!noDraw.includes(f))
    ctx.fillText(text, x+w/2-width/2, y+fontsize*2)
  if (!INVERT)
  cardcaption (f,u,x,y,w,h)
  return invert
}
    
function cardcaption (f,u,x,y,w,h) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let brightness = brightnessOf10 (ctx,canvas.width/2,canvas.height*0.8,10)
  ctx.fillStyle = "#ffffff"
  if (brightness > 5)
    ctx.fillStyle = "#000000"
  ctx.font = "500 "+(16)+"pt sans serif" 
  text = defs[f][u].split(",")
  y -= 22
  let i = 0
  for (; i < text.length; i++) {
    let width = ctx.measureText(text[i]).width
    ctx.fillText(text[i], x+w/2-width/2, y+h+100)
    y += 22
  }
}

function threecards () {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let W = canvas.width, H = canvas.height
  x = 0, y = 0
  w = W/3.2, h = H/2 - 30
  let funcs = shuffle(atList)
  
  //funcs = (shortlist)

  ctx.fillStyle = randomPick(getCurrentPalette())
  ctx.fillRect(0,0,W,H)
  ctx.fillStyle = randomPick(getCurrentPalette())
  haze()
  tarotcard(x+12, y+156 +pet(49), w, h, funcs[0], cardnumber(funcs[0]),undefined, false)
  if(document.getElementById("palettechoice").value === "dos")
    loadPalette()
  tarotcard(x+2*W/3+4, y+156+pet(49), w, h, funcs[2], cardnumber(funcs[2]),undefined, false)
  if(document.getElementById("palettechoice").value === "dos")
    loadPalette()
  tarotcard(x+1*W/3+8, y+156+pet(49), w, h, funcs[1], cardnumber(funcs[1]),undefined, false) 
  if(document.getElementById("palettechoice").value === "dos")
    loadPalette()
  if (funcs[0] === funcs[1] || funcs[0] === funcs[2] || funcs[1] === funcs[2])
    console.log(funcs[0], funcs[1], funcs[2])
}

function bigcard () {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let W = canvas.width, H = canvas.height
  x = 0, y = 0
  w = W/2*1.2, h = w*1.58 - 30
  let funcs = ["passwordAt"]//shuffle(atList)
  if(document.getElementById("palettechoice").value === "dos")
    loadPalette()
  let I = tarotcard(x+W/2-w/2, y+H/2-h/2, w*1, h, funcs[0], cardnumber(funcs[0]),undefined, false) 
  if (I) {
    rc()
    rc()
  }
}

function twosides () {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let W = canvas.width, H = canvas.height
  ctx.fillStyle = randomPick(getCurrentPalette())
  ctx.fillRect(0,0,W,H)
  haze()
  x = 0, y = 0
  w = W/2*0.84, h = w*1.58 - 10
  let funcs = shuffle(recent())//shuffle(atList)
  if (document.getElementById("palettechoice").value === "dos")
    loadPalette()
  tarotcard(x+W/4-w/2, y+H/2-h/2, w, h, funcs[0], cardnumber(funcs[0]),undefined, [0]) 
  cardcaption (funcs[0],"u",x+W/4-w/2, y+H/2-h/2,x+w,y+h)
  ctx.save()
  ctx.translate(3*W/4, H/2)
  ctx.rotate(Math.PI)
  ctx.translate(-3*W/4, -H/2)
  tarotcard(x+3*W/4-w/2, y+H/2-h/2, w, h, funcs[0], cardnumber(funcs[0]),undefined, [1]) 
  ctx.restore()
  cardcaption (funcs[0],"i",x+3*W/4-w/2,y+H/2-h/2,x+w,y+h)
}

function dormerAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+18*H/24)
  ctx.lineTo(x+18*W/24, y+18*H/24)
  ctx.lineTo(x+18*W/24, y+12*H/24)
  ctx.lineTo(x+14*W/24, y+9*H/24)
  ctx.lineTo(x+10*W/24, y+12*H/24)
  ctx.lineTo(x+10*W/24, y+18*H/24)
  ctx.stroke()
  //18
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+18*H/24)
  ctx.lineTo(x+5*W/24, y+14*H/24)
  ctx.stroke()

  //20
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+14*H/24)
  ctx.lineTo(x+5*W/24, y+12*H/24)
  ctx.lineTo(x+7.5*W/24, y+9.3*H/24)
  ctx.lineTo(x+14*W/24, y+9*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+4*H/24)
  ctx.lineTo(x+10*W/24, y+9*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+19*H/24)
  ctx.lineTo(x+21*W/24, y+20*H/24)
  ctx.lineTo(x+4*W/24, y+20*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+20*H/24)
  ctx.lineTo(x+21*W/24, y+23*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+9*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+15.7*H/24)
  ctx.lineTo(x+22*W/24, y+19*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+17*H/24)
  ctx.lineTo(x+17*W/24, y+17*H/24)
  ctx.lineTo(x+17*W/24, y+12*H/24)
  ctx.lineTo(x+11*W/24, y+12*H/24)
  ctx.lineTo(x+11*W/24, y+17*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+14*H/24)
  ctx.lineTo(x+17*W/24, y+14*H/24)
  ctx.stroke()

  //10
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+14*H/24)
  ctx.lineTo(x+14*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+15.3*H/24, W/96, 0, Math.PI*2)
  ctx.stroke()
  //11
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+19*H/24)
  ctx.lineTo(x+4*W/24, y+19*H/24)
  ctx.stroke()
  //13
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+12*H/24)
  ctx.lineTo(x+10*W/24, y+12*H/24)
  ctx.stroke()
  //15 drain pipe
  ctx.beginPath()
  ctx.moveTo(x+18.8*W/24, y+20*H/24)
  cpx = x+19*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+21*H/24)
  cpx = x+17*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+22*H/24)
  cpx = x+17*W/24
  cpy = y+23*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+23*H/24)
  ctx.stroke()
  //14
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+20*H/24)
  cpx = x+20*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+21*H/24)
  cpx = x+20*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+22*H/24)
  cpx = x+18*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18.2*W/24, y+23*H/24)
  ctx.stroke()
  //22
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+22*H/24)
  ctx.lineTo(x+17*W/24, y+22*H/24)
  ctx.stroke()

  //23
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+22*H/24)
  ctx.lineTo(x+21*W/24, y+22*H/24)
  ctx.stroke()
}

function unknown_birdAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  ctx.setLineDash([W/32])
  //1
  ctx.beginPath()
  ctx.moveTo(x+1*W/24, y+19*H/24)
  ctx.lineTo(x+4*W/24, y+22*H/24)
  ctx.lineTo(x+10*W/24, y+16*H/24)
  cpx = x+14*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+16*H/24)
  cpx = x+22*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+7*H/24)
  cpx = x+23*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+6*H/24)
  cpx = x+21*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+5*H/24)
  cpx = x+21*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+2*H/24)
  cpx = x+13*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+14*H/24)
  cpx = x+1*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/24, y+19*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+7*H/24)
  cpx = x+19*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+6*H/24)
  cpx = x+19*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+5*H/24)
  cpx = x+17*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+6*H/24)
  cpx = x+17*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+7*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+17.4*H/24)
  cpx = x+15*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15.5*W/24, y+21*H/24)
  ctx.lineTo(x+15*W/24, y+18*H/24)
  ctx.lineTo(x+17*W/24, y+21*H/24)
  ctx.lineTo(x+17*W/24, y+17*H/24)
  //ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+18*H/24)
  ctx.lineTo(x+15*W/24, y+21*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+18*H/24)
  ctx.lineTo(x+17*W/24, y+21*H/24)
  ctx.stroke()
  ctx.setLineDash([])
}

function invisible_handAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "round"
  ctx.lineJoin = "bevel"
  ctx.setLineDash([W/32])
 
  //6
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+22*H/24)
  cpx = x+6*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+19*H/24)
  cpx = x+4*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+9*H/24)
  cpx = x+3*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+8*H/24)
  cpx = x+6*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+10*H/24)
  cpx = x+8*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+14*H/24)
  cpx = x+8*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+5*H/24)
  cpx = x+8*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+3*H/24)
  cpx = x+10*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+3*H/24)
  cpx = x+11*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+4*H/24)
  cpx = x+11*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+10*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+4*H/24)
  cpx = x+11*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+3*H/24)
  cpx = x+11*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+13*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+2*H/24)
  cpx = x+14*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+3*H/24)
  cpx = x+14*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+10*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+4*H/24)
  cpx = x+14*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+3*H/24)
  cpx = x+16*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+3*H/24)
  cpx = x+17*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+4*H/24)
  cpx = x+17*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+11*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+6*H/24)
  cpx = x+17*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+5*H/24)
  cpx = x+19*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+5*H/24)
  cpx = x+20*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+6*H/24)
  cpx = x+20*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+18*H/24)
  cpx = x+20*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+22*H/24)
  ctx.stroke()

  //10
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+11*H/24)
  cpx = x+14*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+14*H/24)
  cpx = x+19*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+14*H/24)
  ctx.stroke()

  //11
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+12*H/24)
  cpx = x+13*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+20*H/24)
  ctx.stroke()

  //12
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+12*H/24)
  cpx = x+14*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+20*H/24)
  ctx.stroke()

 ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+12*H/24)
  cpx = x+9*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+11*H/24)
  cpx = x+13*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+11*H/24)
  cpx = x+16*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+12*H/24)
  cpx = x+18*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+12*H/24)
  ctx.stroke()

  ctx.setLineDash([])
}

function skates_purseAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+16*H/24)
  cpx = x+12*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+16*H/24)
  cpx = x+18*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+17*H/24)
  cpx = x+22*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+15*H/24)
  cpx = x+22*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+14*H/24)
  cpx = x+20*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+15*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+16*H/24)
  cpx = x+6*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+17*H/24)
  cpx = x+2*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+15*H/24)
  cpx = x+2*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+14*H/24)
  cpx = x+4*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+15*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+7*H/24)
  cpx = x+4*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+6*H/24)
  cpx = x+2*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+7*H/24)
  cpx = x+2*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+9*H/24)
  cpx = x+6*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+8*H/24)
  cpx = x+12*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+8*H/24)
  cpx = x+18*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+9*H/24)
  cpx = x+22*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+7*H/24)
  cpx = x+22*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+6*H/24)
  cpx = x+20*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+7*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+9*H/24)
  cpx = x+18*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+10*H/24)
  cpx = x+22*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+7*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+9*H/24)
  cpx = x+6*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+10*H/24)
  cpx = x+2*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+7*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+9*H/24)
  cpx = x+7*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+15*H/24)
  cpx = x+6*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+16*H/24)
  cpx = x+2*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+15*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+9*H/24)
  cpx = x+17*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+15*H/24)
  cpx = x+18*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+16*H/24)
  cpx = x+22*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+15*H/24)
  ctx.stroke()
}

function eclipseAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy//, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let points = 17
  let incs = (Math.PI* 1)/(points*2)
  let r1 = 7*W/24, r2 = 12*W/24
  let a = 0, cx = x+W/2, cy = y-6*W/24
  let i = 1, maxp = points*2 +1
  ctx.beginPath()
  let x2 = cx + r2 * Math.cos(a),
      y2 = cy + r1 * Math.sin(a)
  ctx.moveTo(x2,y2)
  for (; i < maxp; i++) {
    let r = (i % 2 === 0)? r2: r1;
    a += incs
    x2 = cx + r * Math.cos(a)
    y2 = cy + r * Math.sin(a)
    ctx.lineTo(x2,y2)
  }
  //ctx.closePath()
  ctx.stroke()
  //1
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+24*H/24)
  cpx = x+6*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+18*H/24)
  cpx = x+18*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+24*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+6*H/24)
  cpx = x+4*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+0*H/24)
  //ctx.stroke()
  //3
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+6*H/24)
  cpx = x+20*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+0*H/24)
  //ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+22*H/24)
  cpx = x+13*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+21*H/24)
  cpx = x+13*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+20*H/24)
  cpx = x+11*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+21*H/24)
  cpx = x+11*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  ctx.fill() 
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+12*H/24)
  cpx = x+14*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+10*H/24)
  cpx = x+14*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
  cpx = x+10*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
  cpx = x+10*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+10*H/24)
  cpx = x+10*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  cpx = x+14*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+10*H/24)
  ctx.lineTo(x+10*W/24, y+10*H/24)
  ctx.fill()
  //7
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+10*H/24)
  ctx.lineTo(x+11*W/24, y+21*H/24)
  ctx.stroke()
  //8
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+21*H/24)
  ctx.lineTo(x+14*W/24, y+10*H/24)
  ctx.stroke()
}

function tidesAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  //2 fish
  ctx.lineWidth /= 2
  ctx.beginPath()
  ctx.moveTo(x+22*W/48, y+28*H/48)
  cpx = x+23*W/48
  cpy = y+27*H/48
  ctx.quadraticCurveTo(cpx, cpy, x+24*W/48, y+27*H/48)
  cpx = x+25*W/48
  cpy = y+27*H/48
  ctx.quadraticCurveTo(cpx, cpy, x+26*W/48, y+28*H/48)
  cpx = x+26*W/48
  cpy = y+29*H/48
  ctx.quadraticCurveTo(cpx, cpy, x+27*W/48, y+29*H/48)
  cpx = x+27*W/48
  cpy = y+27*H/48
  ctx.quadraticCurveTo(cpx, cpy, x+27*W/48, y+27*H/48)
  cpx = x+26*W/48
  cpy = y+27*H/48
  ctx.quadraticCurveTo(cpx, cpy, x+26*W/48, y+28*H/48)
  cpx = x+25*W/48
  cpy = y+29*H/48
  ctx.quadraticCurveTo(cpx, cpy, x+24*W/48, y+29*H/48)
  cpx = x+23*W/48
  cpy = y+29*H/48
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/48, y+28*H/48)
  ctx.stroke()
  // eye
  ctx.beginPath()
  ctx.arc(x+23*W/48, y+28*H/48, W/120, 0, Math.PI*2)
  ctx.stroke()
  ctx.lineWidth *= 2
  //1
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+24*H/24)
  cpx = x+3*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  cpx = x+21*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+24*H/24)
  ctx.stroke()
    
  //3
  ctx.beginPath()
  ctx.arc(x+12*W/24, y+24*H/24, 8.2*W/24, Math.PI, Math.PI*2)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.arc(x+12*W/24, y+2.5*H/24, 2*W/24, 0, Math.PI*2)
  ctx.stroke()

}

function shopping_cartAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+6*H/24)
  cpx = x+2*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+6*H/24)
  cpx = x+3*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+15*H/24)
  cpx = x+20*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+16*H/24)
  cpx = x+20*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+6*H/24)
  cpx = x+20*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+5*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+16*H/24)
  cpx = x+20*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+19*H/24)
  cpx = x+5*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+19*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+20*H/24)
  cpx = x+7*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+21*H/24)
  cpx = x+7*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+22*H/24)
  cpx = x+5*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+21*H/24)
  cpx = x+5*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+20*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+20*H/24)
  cpx = x+19*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+21*H/24)
  cpx = x+19*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+22*H/24)
  cpx = x+17*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+21*H/24)
  cpx = x+17*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+20*H/24)
  ctx.stroke()

  //5 horizontals
  ctx.beginPath()
  ctx.moveTo(x+2.2*W/24, y+8*H/24)
  ctx.lineTo(x+20*W/24, y+8*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+2.4*W/24, y+10*H/24)
  ctx.lineTo(x+20*W/24, y+10*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+2.8*W/24, y+12*H/24)
  ctx.lineTo(x+20*W/24, y+12*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+2.9*W/24, y+14*H/24)
  ctx.lineTo(x+20*W/24, y+14*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+6*H/24)
  ctx.lineTo(x+4*W/24, y+15*H/24)
  ctx.stroke()

  //10 verticals
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+6*H/24)
  ctx.lineTo(x+6*W/24, y+15*H/24)
  ctx.stroke()

  //11
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+6*H/24)
  ctx.lineTo(x+8*W/24, y+15.2*H/24)
  ctx.stroke()

  //12
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+6*H/24)
  ctx.lineTo(x+10*W/24, y+15.4*H/24)
  ctx.stroke()

  //13
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+6*H/24)
  ctx.lineTo(x+12*W/24, y+15.6*H/24)
  ctx.stroke()

  //14
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+6*H/24)
  ctx.lineTo(x+14*W/24, y+15.7*H/24)
  ctx.stroke()

  //15
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+6*H/24)
  ctx.lineTo(x+16*W/24, y+15.8*H/24)
  ctx.stroke()

  //16
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+6*H/24)
  ctx.lineTo(x+18*W/24, y+15.9*H/24)
  ctx.stroke()
}

function tickAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
 //1
 ctx.beginPath()
 ctx.moveTo(x+24*W/48, y+23*H/48)
 cpx = x+25*W/48
 cpy = y+24*H/48
 ctx.quadraticCurveTo(cpx, cpy, x+25*W/48, y+26*H/48)
 cpx = x+25*W/48
 cpy = y+27*H/48
 ctx.quadraticCurveTo(cpx, cpy, x+24*W/48, y+27*H/48)
 cpx = x+23*W/48
 cpy = y+27*H/48
 ctx.quadraticCurveTo(cpx, cpy, x+23*W/48, y+26*H/48)
 cpx = x+23*W/48
 cpy = y+24*H/48
 ctx.quadraticCurveTo(cpx, cpy, x+24*W/48, y+23*H/48)
 ctx.stroke()

 //2
 ctx.beginPath()
 ctx.moveTo(x+25*W/48, y+24*H/48)
 cpx = x+27*W/48
 cpy = y+24*H/48
 ctx.quadraticCurveTo(cpx, cpy, x+28*W/48, y+22*H/48)
 ctx.stroke()

 //3
 ctx.beginPath()
 ctx.moveTo(x+23*W/48, y+24*H/48)
 cpx = x+21*W/48
 cpy = y+24*H/48
 ctx.quadraticCurveTo(cpx, cpy, x+20*W/48, y+22*H/48)
 ctx.stroke()

 //4
 ctx.beginPath()
 ctx.moveTo(x+25*W/48, y+26*H/48)
 cpx = x+26*W/48
 cpy = y+26*H/48
 ctx.quadraticCurveTo(cpx, cpy, x+26*W/48, y+29*H/48)
 ctx.stroke()

 //5
 ctx.beginPath()
 ctx.moveTo(x+23*W/48, y+26*H/48)
 cpx = x+22*W/48
 cpy = y+26*H/48
 ctx.quadraticCurveTo(cpx, cpy, x+22*W/48, y+29*H/48)
 ctx.stroke()

 //6
 ctx.beginPath()
 ctx.moveTo(x+25*W/48, y+24.5*H/48)
 cpx = x+29*W/48
 cpy = y+24*H/48
 ctx.quadraticCurveTo(cpx, cpy, x+29*W/48, y+23*H/48)
 ctx.stroke()

 //7
 ctx.beginPath()
 ctx.moveTo(x+23*W/48, y+24.5*H/48)
 cpx = x+19*W/48
 cpy = y+24*H/48
 ctx.quadraticCurveTo(cpx, cpy, x+19*W/48, y+23*H/48)
 ctx.stroke()

 //8
 ctx.beginPath()
 ctx.moveTo(x+23*W/48, y+25*H/48)
 cpx = x+21*W/48
 cpy = y+25*H/48
 ctx.quadraticCurveTo(cpx, cpy, x+19*W/48, y+27*H/48)
 ctx.stroke()

 //9
 ctx.beginPath()
 ctx.moveTo(x+25*W/48, y+25*H/48)
 cpx = x+27*W/48
 cpy = y+25*H/48
 ctx.quadraticCurveTo(cpx, cpy, x+29*W/48, y+27*H/48)
 ctx.stroke()
}

function incomingAt (x,y,W,color,INVERTED) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, angle = -135
  if (INVERTED)
    angle = 0
  //1
  ctx.beginPath()
  p = rotatePoint(x+16*W/24, y+14*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+16*W/24
  cpy = y+15*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+17*W/24, y+15*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+21*W/24
  cpy = y+15*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+21*W/24, y+15*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+22*W/24
  cpy = y+15*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+22*W/24, y+14*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+22*W/24
  cpy = y+11*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+22*W/24, y+11*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+22*W/24
  cpy = y+9*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+19*W/24, y+9*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+5*W/24
  cpy = y+9*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+5*W/24, y+9*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+2*W/24
  cpy = y+9*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+2*W/24, y+11*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+2*W/24
  cpy = y+14*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+2*W/24, y+14*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+2*W/24
  cpy = y+15*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+3*W/24, y+15*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+7*W/24
  cpy = y+15*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+7*W/24, y+15*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+8*W/24
  cpy = y+15*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+8*W/24, y+14*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+8*W/24
  cpy = y+13*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+8*W/24, y+13*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+8*W/24
  cpy = y+12*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+9*W/24, y+12*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+15*W/24
  cpy = y+12*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+15*W/24, y+12*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+16*W/24
  cpy = y+12*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+16*W/24, y+13*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+16*W/24
  cpy = y+14*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+16*W/24, y+14*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()
  //2
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1], 11*W/24, 0, Math.PI*2)
  ctx.stroke()
}

function password () {
  let result = [], i = 0, str = ""
  const found6 = words.match(/\b\w{6}\b/gm)
  const found5 = words.match(/\b\w{5}\b/gm)
  const found4 = words.match(/\b\w{4}\b/gm)
  str += randomPick(found6)
  str += randomPick(found5)
  str += randomPick(found4)
  str += randomPick(found4)
  str += randomPick(found5)
  str += randomPick(found6)
  result = str.split('')
  return result
}

function passwordAt (x,y,W,color,INVERTED) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.fillStyle = color
  //1
  ctx.beginPath()
  ctx.moveTo(x+5.5*W/24, y+20*H/24)
  ctx.lineTo(x+19*W/24, y+20*H/24)
  ctx.stroke()
  let pw = password()
  if (INVERTED) {
    pw = (new Array(30)).fill("\u2022")
  }
  let fs = W/12
  ctx.font = "800 "+(W/12)+"pt AmericanTypewriter,Courier"
  let x2 = 5.5*W/24, y2 = H/3
  let i = 0
  for (; i < pw.length; i++) {
    if (i > 0 && i % 6 === 0) {
      y2 += fs*1.4
      x2 = 5.5*W/24
    }
    ctx.fillText(pw[i], x+x2, y+y2)
    x2 += fs*1.2
  }
  ctx.font = "100 "+(W/14)+"pt AmericanTypewriter,Courier"
  ctx.fillText("|", x+x2-fs*0.6, y+y2-fs*0.15)

 // let x2 = 5.5*W/24, y2 = H/3

  ctx.font = "100 "+(W/22)+"pt AmericanTypewriter,Courier"
  ctx.fillText("Show password", x+8*W/24, y+21.7*H/24)
  let saved = ctx.lineWidth
  ctx.lineWidth /= 2
  //1 show
  ctx.beginPath()
  ctx.moveTo(x+5.5*W/24, y+20.5*H/24)
  ctx.lineTo(x+5.5*W/24, y+22*H/24)
  ctx.lineTo(x+7*W/24, y+22*H/24)
  ctx.lineTo(x+7*W/24, y+20.5*H/24)
  ctx.lineTo(x+5.5*W/24, y+20.5*H/24)
  ctx.stroke()
  
  if (!INVERTED) {
    //2
    ctx.beginPath()
    ctx.moveTo(x+5.5*W/24, y+20.5*H/24)
    ctx.lineTo(x+7*W/24, y+22*H/24)
    ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.moveTo(x+5.5*W/24, y+22*H/24)
    ctx.lineTo(x+7*W/24, y+20.5*H/24)
    ctx.stroke()
  }
  ctx.lineWidth = saved
}


function gliderAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.fillStyle = color
  //1
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+13*H/16)
  ctx.rect(x+11*W/16, y+13*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //2
  ctx.beginPath()
  ctx.moveTo(x+12*W/16, y+13*H/16)
  ctx.rect(x+12*W/16, y+13*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //3
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+13*H/16)
  ctx.rect(x+13*W/16, y+13*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //4
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+12*H/16)
  ctx.rect(x+13*W/16, y+12*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //5
  ctx.beginPath()
  ctx.moveTo(x+12*W/16, y+11*H/16)
  ctx.rect(x+12*W/16, y+11*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //6
  ctx.beginPath()
  ctx.moveTo(x+8*W/16, y+7*H/16)
  ctx.rect(x+8*W/16, y+7*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //7
  ctx.beginPath()
  ctx.moveTo(x+8*W/16, y+8*H/16)
  ctx.rect(x+8*W/16, y+8*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //8
  ctx.beginPath()
  ctx.moveTo(x+7*W/16, y+8*H/16)
  ctx.rect(x+7*W/16, y+8*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //9
  ctx.beginPath()
  ctx.moveTo(x+7*W/16, y+9*H/16)
  ctx.rect(x+7*W/16, y+9*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //10
  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+7*H/16)
  ctx.rect(x+6*W/16, y+7*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //11
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+2*H/16)
  ctx.rect(x+4*W/16, y+2*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //12
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+3*H/16)
  ctx.rect(x+4*W/16, y+3*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //13
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+4*H/16)
  ctx.rect(x+4*W/16, y+4*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //14
  ctx.beginPath()
  ctx.moveTo(x+3*W/16, y+4*H/16)
  ctx.rect(x+3*W/16, y+4*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //15
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+3*H/16)
  ctx.rect(x+2*W/16, y+3*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
}

function calendarAt(x,y,W,color,I) {
  calAt (x,y,W,color,I)
}

function calAt (x,y,W,color, INVERTED) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W
  let days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.fillStyle = color
  let date = (new Date()).getDate()
  let day = days[(new Date()).getDay()]
  if (INVERTED) {
    let a = new Date()
    a.setDate(a.getDate()+1)
    date = a.getDate()
    day = days[a.getDay()]
  }
  ctx.font = "800 "+(W/5)+"pt AmericanTypewriter,Courier"
  let width = ctx.measureText(date).width
  ctx.fillText(date, x+W/2-width/2, y+11.5*H/16)

  ctx.font = "800 "+(W/9)+"pt AmericanTypewriter,Courier"
  width = ctx.measureText(day).width
  ctx.fillText(day, x+W/2-width/2, y+8*H/16)
    //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+14*H/16)
  ctx.rect(x+2*W/16, y+14*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //2
  ctx.beginPath()
  ctx.moveTo(x+3*W/16, y+14*H/16)
  ctx.rect(x+3*W/16, y+14*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //3
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+14*H/16)
  ctx.rect(x+4*W/16, y+14*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //4
  ctx.beginPath()
  ctx.moveTo(x+5*W/16, y+14*H/16)
  ctx.rect(x+5*W/16, y+14*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //5
  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+14*H/16)
  ctx.rect(x+6*W/16, y+14*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //6
  ctx.beginPath()
  ctx.moveTo(x+7*W/16, y+14*H/16)
  ctx.rect(x+7*W/16, y+14*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //7
  ctx.beginPath()
  ctx.moveTo(x+8*W/16, y+14*H/16)
  ctx.rect(x+8*W/16, y+14*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //8
  ctx.beginPath()
  ctx.moveTo(x+9*W/16, y+14*H/16)
  ctx.rect(x+9*W/16, y+14*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //9
  ctx.beginPath()
  ctx.moveTo(x+10*W/16, y+14*H/16)
  ctx.rect(x+10*W/16, y+14*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //10
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+14*H/16)
  ctx.rect(x+11*W/16, y+14*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //11
  ctx.beginPath()
  ctx.moveTo(x+12*W/16, y+14*H/16)
  ctx.rect(x+12*W/16, y+14*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //12
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+14*H/16)
  ctx.rect(x+13*W/16, y+14*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //13
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+13*H/16)
  ctx.rect(x+13*W/16, y+13*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //14
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+12*H/16)
  ctx.rect(x+13*W/16, y+12*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //15
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+7*H/16)
  ctx.rect(x+13*W/16, y+7*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //16
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+8*H/16)
  ctx.rect(x+13*W/16, y+8*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //17
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+9*H/16)
  ctx.rect(x+13*W/16, y+9*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //18
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+10*H/16)
  ctx.rect(x+13*W/16, y+10*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //19
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+11*H/16)
  ctx.rect(x+13*W/16, y+11*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //20
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+8*H/16)
  ctx.rect(x+2*W/16, y+8*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //21
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+9*H/16)
  ctx.rect(x+2*W/16, y+9*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //22
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+10*H/16)
  ctx.rect(x+2*W/16, y+10*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //23
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+11*H/16)
  ctx.rect(x+2*W/16, y+11*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //24
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+12*H/16)
  ctx.rect(x+2*W/16, y+12*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //25
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+13*H/16)
  ctx.rect(x+2*W/16, y+13*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //26
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+4*H/16)
  ctx.rect(x+2*W/16, y+4*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //27
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+5*H/16)
  ctx.rect(x+2*W/16, y+5*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //28
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+6*H/16)
  ctx.rect(x+2*W/16, y+6*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //29
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+7*H/16)
  ctx.rect(x+2*W/16, y+7*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //30
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+3*H/16)
  ctx.rect(x+2*W/16, y+3*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //31
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+2*H/16)
  ctx.rect(x+2*W/16, y+2*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //32
  ctx.beginPath()
  ctx.moveTo(x+3*W/16, y+2*H/16)
  ctx.rect(x+3*W/16, y+2*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //33
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+2*H/16)
  ctx.rect(x+4*W/16, y+2*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //34
  ctx.beginPath()
  ctx.moveTo(x+5*W/16, y+2*H/16)
  ctx.rect(x+5*W/16, y+2*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //35
  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+2*H/16)
  ctx.rect(x+6*W/16, y+2*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //36
  ctx.beginPath()
  ctx.moveTo(x+7*W/16, y+2*H/16)
  ctx.rect(x+7*W/16, y+2*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //37
  ctx.beginPath()
  ctx.moveTo(x+8*W/16, y+2*H/16)
  ctx.rect(x+8*W/16, y+2*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //38
  ctx.beginPath()
  ctx.moveTo(x+9*W/16, y+2*H/16)
  ctx.rect(x+9*W/16, y+2*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //39
  ctx.beginPath()
  ctx.moveTo(x+10*W/16, y+2*H/16)
  ctx.rect(x+10*W/16, y+2*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //40
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+2*H/16)
  ctx.rect(x+11*W/16, y+2*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //41
  ctx.beginPath()
  ctx.moveTo(x+12*W/16, y+2*H/16)
  ctx.rect(x+12*W/16, y+2*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //42
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+2*H/16)
  ctx.rect(x+13*W/16, y+2*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //43
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+3*H/16)
  ctx.rect(x+13*W/16, y+3*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //44
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+4*H/16)
  ctx.rect(x+13*W/16, y+4*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //45
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+5*H/16)
  ctx.rect(x+13*W/16, y+5*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //46
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+6*H/16)
  ctx.rect(x+13*W/16, y+6*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //47
  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+1*H/16)
  ctx.rect(x+6*W/16, y+1*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //48
  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+3*H/16)
  ctx.rect(x+6*W/16, y+3*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //49
  ctx.beginPath()
  ctx.moveTo(x+9*W/16, y+1*H/16)
  ctx.rect(x+9*W/16, y+1*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //50
  ctx.beginPath()
  ctx.moveTo(x+9*W/16, y+3*H/16)
  ctx.rect(x+9*W/16, y+3*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //51
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+12*H/16)
  ctx.rect(x+4*W/16, y+12*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //52
  ctx.beginPath()
  ctx.moveTo(x+5*W/16, y+12*H/16)
  ctx.rect(x+5*W/16, y+12*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //53
  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+12*H/16)
  ctx.rect(x+6*W/16, y+12*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //54
  ctx.beginPath()
  ctx.moveTo(x+7*W/16, y+12*H/16)
  ctx.rect(x+7*W/16, y+12*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //55
  ctx.beginPath()
  ctx.moveTo(x+8*W/16, y+12*H/16)
  ctx.rect(x+8*W/16, y+12*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //56
  ctx.beginPath()
  ctx.moveTo(x+9*W/16, y+12*H/16)
  ctx.rect(x+9*W/16, y+12*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //57
  ctx.beginPath()
  ctx.moveTo(x+10*W/16, y+12*H/16)
  ctx.rect(x+10*W/16, y+12*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //58
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+12*H/16)
  ctx.rect(x+11*W/16, y+12*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //59
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+11*H/16)
  ctx.rect(x+11*W/16, y+11*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //60
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+10*H/16)
  ctx.rect(x+11*W/16, y+10*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //61
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+9*H/16)
  ctx.rect(x+11*W/16, y+9*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //62
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+8*H/16)
  ctx.rect(x+11*W/16, y+8*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //63
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+7*H/16)
  ctx.rect(x+11*W/16, y+7*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //64
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+6*H/16)
  ctx.rect(x+11*W/16, y+6*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //65
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+5*H/16)
  ctx.rect(x+11*W/16, y+5*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //66
  ctx.beginPath()
  ctx.moveTo(x+10*W/16, y+5*H/16)
  ctx.rect(x+10*W/16, y+5*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //67
  ctx.beginPath()
  ctx.moveTo(x+9*W/16, y+5*H/16)
  ctx.rect(x+9*W/16, y+5*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //68
  ctx.beginPath()
  ctx.moveTo(x+8*W/16, y+5*H/16)
  ctx.rect(x+8*W/16, y+5*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //69
  ctx.beginPath()
  ctx.moveTo(x+7*W/16, y+5*H/16)
  ctx.rect(x+7*W/16, y+5*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //70
  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+5*H/16)
  ctx.rect(x+6*W/16, y+5*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //71
  ctx.beginPath()
  ctx.moveTo(x+5*W/16, y+5*H/16)
  ctx.rect(x+5*W/16, y+5*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //72
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+5*H/16)
  ctx.rect(x+4*W/16, y+5*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //73
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+6*H/16)
  ctx.rect(x+4*W/16, y+6*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //74
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+7*H/16)
  ctx.rect(x+4*W/16, y+7*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //75
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+8*H/16)
  ctx.rect(x+4*W/16, y+8*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //76
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+9*H/16)
  ctx.rect(x+4*W/16, y+9*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //77
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+10*H/16)
  ctx.rect(x+4*W/16, y+10*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
  //78
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+11*H/16)
  ctx.rect(x+4*W/16, y+11*H/16,W/16,W/16)
  ctx.closePath()
  ctx.fill()
}

function dogcowAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.fillStyle = color
  //1
  ctx.beginPath()
  ctx.moveTo(x+31*W/32, y+12*H/32)
  ctx.rect(x+31*W/32, y+12*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //2
  ctx.beginPath()
  ctx.moveTo(x+30*W/32, y+11*H/32)
  ctx.rect(x+30*W/32, y+11*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //3
  ctx.beginPath()
  ctx.moveTo(x+29*W/32, y+10*H/32)
  ctx.rect(x+29*W/32, y+10*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //4
  ctx.beginPath()
  ctx.moveTo(x+28*W/32, y+9*H/32)
  ctx.rect(x+28*W/32, y+9*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //5
  ctx.beginPath()
  ctx.moveTo(x+27*W/32, y+8*H/32)
  ctx.rect(x+27*W/32, y+8*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //6
  ctx.beginPath()
  ctx.moveTo(x+27*W/32, y+7*H/32)
  ctx.rect(x+27*W/32, y+7*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //7
  ctx.beginPath()
  ctx.moveTo(x+26*W/32, y+6*H/32)
  ctx.rect(x+26*W/32, y+6*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //8
  ctx.beginPath()
  ctx.moveTo(x+25*W/32, y+7*H/32)
  ctx.rect(x+25*W/32, y+7*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //9
  ctx.beginPath()
  ctx.moveTo(x+25*W/32, y+8*H/32)
  ctx.rect(x+25*W/32, y+8*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //10
  ctx.beginPath()
  ctx.moveTo(x+24*W/32, y+8*H/32)
  ctx.rect(x+24*W/32, y+8*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //11
  ctx.beginPath()
  ctx.moveTo(x+23*W/32, y+8*H/32)
  ctx.rect(x+23*W/32, y+8*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //12
  ctx.beginPath()
  ctx.moveTo(x+22*W/32, y+7*H/32)
  ctx.rect(x+22*W/32, y+7*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //13
  ctx.beginPath()
  ctx.moveTo(x+21*W/32, y+7*H/32)
  ctx.rect(x+21*W/32, y+7*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //14
  ctx.beginPath()
  ctx.moveTo(x+21*W/32, y+8*H/32)
  ctx.rect(x+21*W/32, y+8*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //15
  ctx.beginPath()
  ctx.moveTo(x+21*W/32, y+9*H/32)
  ctx.rect(x+21*W/32, y+9*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //16
  ctx.beginPath()
  ctx.moveTo(x+22*W/32, y+10*H/32)
  ctx.rect(x+22*W/32, y+10*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //17
  ctx.beginPath()
  ctx.moveTo(x+22*W/32, y+11*H/32)
  ctx.rect(x+22*W/32, y+11*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //18
  ctx.beginPath()
  ctx.moveTo(x+21*W/32, y+12*H/32)
  ctx.rect(x+21*W/32, y+12*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //19
  ctx.beginPath()
  ctx.moveTo(x+20*W/32, y+13*H/32)
  ctx.rect(x+20*W/32, y+13*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //20
  ctx.beginPath()
  ctx.moveTo(x+19*W/32, y+13*H/32)
  ctx.rect(x+19*W/32, y+13*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //21
  ctx.beginPath()
  ctx.moveTo(x+26*W/32, y+13*H/32)
  ctx.rect(x+26*W/32, y+13*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //22
  ctx.beginPath()
  ctx.moveTo(x+27*W/32, y+13*H/32)
  ctx.rect(x+27*W/32, y+13*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //23
  ctx.beginPath()
  ctx.moveTo(x+28*W/32, y+13*H/32)
  ctx.rect(x+28*W/32, y+13*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //24
  ctx.beginPath()
  ctx.moveTo(x+29*W/32, y+13*H/32)
  ctx.rect(x+29*W/32, y+13*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //25
  ctx.beginPath()
  ctx.moveTo(x+30*W/32, y+13*H/32)
  ctx.rect(x+30*W/32, y+13*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //26
  ctx.beginPath()
  ctx.moveTo(x+25*W/32, y+14*H/32)
  ctx.rect(x+25*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //27
  ctx.beginPath()
  ctx.moveTo(x+25*W/32, y+15*H/32)
  ctx.rect(x+25*W/32, y+15*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //28
  ctx.beginPath()
  ctx.moveTo(x+24*W/32, y+16*H/32)
  ctx.rect(x+24*W/32, y+16*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //29
  ctx.beginPath()
  ctx.moveTo(x+24*W/32, y+17*H/32)
  ctx.rect(x+24*W/32, y+17*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //30
  ctx.beginPath()
  ctx.moveTo(x+24*W/32, y+18*H/32)
  ctx.rect(x+24*W/32, y+18*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //31
  ctx.beginPath()
  ctx.moveTo(x+24*W/32, y+19*H/32)
  ctx.rect(x+24*W/32, y+19*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //32
  ctx.beginPath()
  ctx.moveTo(x+24*W/32, y+20*H/32)
  ctx.rect(x+24*W/32, y+20*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //33
  ctx.beginPath()
  ctx.moveTo(x+24*W/32, y+21*H/32)
  ctx.rect(x+24*W/32, y+21*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //34
  ctx.beginPath()
  ctx.moveTo(x+24*W/32, y+22*H/32)
  ctx.rect(x+24*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //35
  ctx.beginPath()
  ctx.moveTo(x+24*W/32, y+23*H/32)
  ctx.rect(x+24*W/32, y+23*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //36
  ctx.beginPath()
  ctx.moveTo(x+24*W/32, y+24*H/32)
  ctx.rect(x+24*W/32, y+24*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //37
  ctx.beginPath()
  ctx.moveTo(x+24*W/32, y+25*H/32)
  ctx.rect(x+24*W/32, y+25*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //38
  ctx.beginPath()
  ctx.moveTo(x+24*W/32, y+26*H/32)
  ctx.rect(x+24*W/32, y+26*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //39
  ctx.beginPath()
  ctx.moveTo(x+25*W/32, y+27*H/32)
  ctx.rect(x+25*W/32, y+27*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //40
  ctx.beginPath()
  ctx.moveTo(x+26*W/32, y+28*H/32)
  ctx.rect(x+26*W/32, y+28*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //41
  ctx.beginPath()
  ctx.moveTo(x+26*W/32, y+29*H/32)
  ctx.rect(x+26*W/32, y+29*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //42
  ctx.beginPath()
  ctx.moveTo(x+25*W/32, y+29*H/32)
  ctx.rect(x+25*W/32, y+29*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //43
  ctx.beginPath()
  ctx.moveTo(x+24*W/32, y+29*H/32)
  ctx.rect(x+24*W/32, y+29*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //44
  ctx.beginPath()
  ctx.moveTo(x+23*W/32, y+28*H/32)
  ctx.rect(x+23*W/32, y+28*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //45
  ctx.beginPath()
  ctx.moveTo(x+22*W/32, y+27*H/32)
  ctx.rect(x+22*W/32, y+27*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //46
  ctx.beginPath()
  ctx.moveTo(x+22*W/32, y+26*H/32)
  ctx.rect(x+22*W/32, y+26*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //47
  ctx.beginPath()
  ctx.moveTo(x+22*W/32, y+25*H/32)
  ctx.rect(x+22*W/32, y+25*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //48
  ctx.beginPath()
  ctx.moveTo(x+22*W/32, y+24*H/32)
  ctx.rect(x+22*W/32, y+24*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //49
  ctx.beginPath()
  ctx.moveTo(x+22*W/32, y+23*H/32)
  ctx.rect(x+22*W/32, y+23*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //50
  ctx.beginPath()
  ctx.moveTo(x+21*W/32, y+22*H/32)
  ctx.rect(x+21*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //51
  ctx.beginPath()
  ctx.moveTo(x+20*W/32, y+22*H/32)
  ctx.rect(x+20*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //52
  ctx.beginPath()
  ctx.moveTo(x+19*W/32, y+22*H/32)
  ctx.rect(x+19*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //53
  ctx.beginPath()
  ctx.moveTo(x+18*W/32, y+22*H/32)
  ctx.rect(x+18*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //54
  ctx.beginPath()
  ctx.moveTo(x+17*W/32, y+22*H/32)
  ctx.rect(x+17*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //55
  ctx.beginPath()
  ctx.moveTo(x+16*W/32, y+22*H/32)
  ctx.rect(x+16*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //56
  ctx.beginPath()
  ctx.moveTo(x+25*W/32, y+10*H/32)
  ctx.rect(x+25*W/32, y+10*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //57
  ctx.beginPath()
  ctx.moveTo(x+15*W/32, y+22*H/32)
  ctx.rect(x+15*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //58
  ctx.beginPath()
  ctx.moveTo(x+14*W/32, y+22*H/32)
  ctx.rect(x+14*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //59
  ctx.beginPath()
  ctx.moveTo(x+13*W/32, y+22*H/32)
  ctx.rect(x+13*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //60
  ctx.beginPath()
  ctx.moveTo(x+12*W/32, y+22*H/32)
  ctx.rect(x+12*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //61
  ctx.beginPath()
  ctx.moveTo(x+11*W/32, y+22*H/32)
  ctx.rect(x+11*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //62
  ctx.beginPath()
  ctx.moveTo(x+10*W/32, y+22*H/32)
  ctx.rect(x+10*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //63
  ctx.beginPath()
  ctx.moveTo(x+9*W/32, y+22*H/32)
  ctx.rect(x+9*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //64
  ctx.beginPath()
  ctx.moveTo(x+8*W/32, y+22*H/32)
  ctx.rect(x+8*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //65
  ctx.beginPath()
  ctx.moveTo(x+7*W/32, y+23*H/32)
  ctx.rect(x+7*W/32, y+23*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //66
  ctx.beginPath()
  ctx.moveTo(x+6*W/32, y+24*H/32)
  ctx.rect(x+6*W/32, y+24*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //67
  ctx.beginPath()
  ctx.moveTo(x+5*W/32, y+25*H/32)
  ctx.rect(x+5*W/32, y+25*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //68
  ctx.beginPath()
  ctx.moveTo(x+5*W/32, y+26*H/32)
  ctx.rect(x+5*W/32, y+26*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //69
  ctx.beginPath()
  ctx.moveTo(x+6*W/32, y+27*H/32)
  ctx.rect(x+6*W/32, y+27*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //70
  ctx.beginPath()
  ctx.moveTo(x+7*W/32, y+28*H/32)
  ctx.rect(x+7*W/32, y+28*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //71
  ctx.beginPath()
  ctx.moveTo(x+7*W/32, y+29*H/32)
  ctx.rect(x+7*W/32, y+29*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //72
  ctx.beginPath()
  ctx.moveTo(x+6*W/32, y+29*H/32)
  ctx.rect(x+6*W/32, y+29*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //73
  ctx.beginPath()
  ctx.moveTo(x+5*W/32, y+29*H/32)
  ctx.rect(x+5*W/32, y+29*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //74
  ctx.beginPath()
  ctx.moveTo(x+4*W/32, y+28*H/32)
  ctx.rect(x+4*W/32, y+28*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //75
  ctx.beginPath()
  ctx.moveTo(x+3*W/32, y+27*H/32)
  ctx.rect(x+3*W/32, y+27*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //76
  ctx.beginPath()
  ctx.moveTo(x+3*W/32, y+26*H/32)
  ctx.rect(x+3*W/32, y+26*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //77
  ctx.beginPath()
  ctx.moveTo(x+3*W/32, y+25*H/32)
  ctx.rect(x+3*W/32, y+25*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //78
  ctx.beginPath()
  ctx.moveTo(x+3*W/32, y+24*H/32)
  ctx.rect(x+3*W/32, y+24*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //79
  ctx.beginPath()
  ctx.moveTo(x+4*W/32, y+23*H/32)
  ctx.rect(x+4*W/32, y+23*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //80
  ctx.beginPath()
  ctx.moveTo(x+4*W/32, y+22*H/32)
  ctx.rect(x+4*W/32, y+22*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //81
  ctx.beginPath()
  ctx.moveTo(x+4*W/32, y+21*H/32)
  ctx.rect(x+4*W/32, y+21*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //82
  ctx.beginPath()
  ctx.moveTo(x+4*W/32, y+20*H/32)
  ctx.rect(x+4*W/32, y+20*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //83
  ctx.beginPath()
  ctx.moveTo(x+4*W/32, y+19*H/32)
  ctx.rect(x+4*W/32, y+19*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //84
  ctx.beginPath()
  ctx.moveTo(x+3*W/32, y+18*H/32)
  ctx.rect(x+3*W/32, y+18*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //85
  ctx.beginPath()
  ctx.moveTo(x+3*W/32, y+17*H/32)
  ctx.rect(x+3*W/32, y+17*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //86
  ctx.beginPath()
  ctx.moveTo(x+2*W/32, y+16*H/32)
  ctx.rect(x+2*W/32, y+16*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //87
  ctx.beginPath()
  ctx.moveTo(x+1*W/32, y+15*H/32)
  ctx.rect(x+1*W/32, y+15*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //88
  ctx.beginPath()
  ctx.moveTo(x+1*W/32, y+14*H/32)
  ctx.rect(x+1*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //89
  ctx.beginPath()
  ctx.moveTo(x+1*W/32, y+13*H/32)
  ctx.rect(x+1*W/32, y+13*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //90
  ctx.beginPath()
  ctx.moveTo(x+1*W/32, y+12*H/32)
  ctx.rect(x+1*W/32, y+12*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //91
  ctx.beginPath()
  ctx.moveTo(x+2*W/32, y+11*H/32)
  ctx.rect(x+2*W/32, y+11*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //92
  ctx.beginPath()
  ctx.moveTo(x+2*W/32, y+10*H/32)
  ctx.rect(x+2*W/32, y+10*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //93
  ctx.beginPath()
  ctx.moveTo(x+3*W/32, y+12*H/32)
  ctx.rect(x+3*W/32, y+12*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //94
  ctx.beginPath()
  ctx.moveTo(x+4*W/32, y+13*H/32)
  ctx.rect(x+4*W/32, y+13*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //95
  ctx.beginPath()
  ctx.moveTo(x+5*W/32, y+14*H/32)
  ctx.rect(x+5*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //96
  ctx.beginPath()
  ctx.moveTo(x+6*W/32, y+14*H/32)
  ctx.rect(x+6*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //97
  ctx.beginPath()
  ctx.moveTo(x+7*W/32, y+14*H/32)
  ctx.rect(x+7*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //98
  ctx.beginPath()
  ctx.moveTo(x+8*W/32, y+14*H/32)
  ctx.rect(x+8*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //99
  ctx.beginPath()
  ctx.moveTo(x+9*W/32, y+14*H/32)
  ctx.rect(x+9*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //100
  ctx.beginPath()
  ctx.moveTo(x+10*W/32, y+14*H/32)
  ctx.rect(x+10*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //101
  ctx.beginPath()
  ctx.moveTo(x+11*W/32, y+14*H/32)
  ctx.rect(x+11*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //102
  ctx.beginPath()
  ctx.moveTo(x+12*W/32, y+14*H/32)
  ctx.rect(x+12*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //103
  ctx.beginPath()
  ctx.moveTo(x+13*W/32, y+14*H/32)
  ctx.rect(x+13*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //104
  ctx.beginPath()
  ctx.moveTo(x+14*W/32, y+14*H/32)
  ctx.rect(x+14*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //105
  ctx.beginPath()
  ctx.moveTo(x+15*W/32, y+14*H/32)
  ctx.rect(x+15*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //106
  ctx.beginPath()
  ctx.moveTo(x+16*W/32, y+14*H/32)
  ctx.rect(x+16*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //107
  ctx.beginPath()
  ctx.moveTo(x+17*W/32, y+14*H/32)
  ctx.rect(x+17*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //108
  ctx.beginPath()
  ctx.moveTo(x+18*W/32, y+14*H/32)
  ctx.rect(x+18*W/32, y+14*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //109
  ctx.beginPath()
  ctx.moveTo(x+23*W/32, y+18*H/32)
  ctx.rect(x+23*W/32, y+18*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //110
  ctx.beginPath()
  ctx.moveTo(x+23*W/32, y+19*H/32)
  ctx.rect(x+23*W/32, y+19*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //111
  ctx.beginPath()
  ctx.moveTo(x+11*W/32, y+15*H/32)
  ctx.rect(x+11*W/32, y+15*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //112
  ctx.beginPath()
  ctx.moveTo(x+12*W/32, y+15*H/32)
  ctx.rect(x+12*W/32, y+15*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //113
  ctx.beginPath()
  ctx.moveTo(x+13*W/32, y+15*H/32)
  ctx.rect(x+13*W/32, y+15*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //114
  ctx.beginPath()
  ctx.moveTo(x+14*W/32, y+15*H/32)
  ctx.rect(x+14*W/32, y+15*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //115
  ctx.beginPath()
  ctx.moveTo(x+15*W/32, y+15*H/32)
  ctx.rect(x+15*W/32, y+15*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //116
  ctx.beginPath()
  ctx.moveTo(x+16*W/32, y+15*H/32)
  ctx.rect(x+16*W/32, y+15*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //117
  ctx.beginPath()
  ctx.moveTo(x+11*W/32, y+16*H/32)
  ctx.rect(x+11*W/32, y+16*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //118
  ctx.beginPath()
  ctx.moveTo(x+12*W/32, y+16*H/32)
  ctx.rect(x+12*W/32, y+16*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //119
  ctx.beginPath()
  ctx.moveTo(x+13*W/32, y+16*H/32)
  ctx.rect(x+13*W/32, y+16*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //120
  ctx.beginPath()
  ctx.moveTo(x+14*W/32, y+16*H/32)
  ctx.rect(x+14*W/32, y+16*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //121
  ctx.beginPath()
  ctx.moveTo(x+15*W/32, y+16*H/32)
  ctx.rect(x+15*W/32, y+16*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //122
  ctx.beginPath()
  ctx.moveTo(x+16*W/32, y+16*H/32)
  ctx.rect(x+16*W/32, y+16*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //123
  ctx.beginPath()
  ctx.moveTo(x+11*W/32, y+17*H/32)
  ctx.rect(x+11*W/32, y+17*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //124
  ctx.beginPath()
  ctx.moveTo(x+12*W/32, y+17*H/32)
  ctx.rect(x+12*W/32, y+17*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //125
  ctx.beginPath()
  ctx.moveTo(x+13*W/32, y+17*H/32)
  ctx.rect(x+13*W/32, y+17*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //126
  ctx.beginPath()
  ctx.moveTo(x+14*W/32, y+17*H/32)
  ctx.rect(x+14*W/32, y+17*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //127
  ctx.beginPath()
  ctx.moveTo(x+15*W/32, y+17*H/32)
  ctx.rect(x+15*W/32, y+17*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //128
  ctx.beginPath()
  ctx.moveTo(x+16*W/32, y+17*H/32)
  ctx.rect(x+16*W/32, y+17*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //129
  ctx.beginPath()
  ctx.moveTo(x+12*W/32, y+18*H/32)
  ctx.rect(x+12*W/32, y+18*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //130
  ctx.beginPath()
  ctx.moveTo(x+13*W/32, y+18*H/32)
  ctx.rect(x+13*W/32, y+18*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //131
  ctx.beginPath()
  ctx.moveTo(x+14*W/32, y+18*H/32)
  ctx.rect(x+14*W/32, y+18*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //132
  ctx.beginPath()
  ctx.moveTo(x+15*W/32, y+18*H/32)
  ctx.rect(x+15*W/32, y+18*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()

  //129
  ctx.beginPath()
  ctx.moveTo(x+12*W/32, y+18*H/32)
  ctx.rect(x+12*W/32, y+18*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //130
  ctx.beginPath()
  ctx.moveTo(x+13*W/32, y+18*H/32)
  ctx.rect(x+13*W/32, y+18*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //131
  ctx.beginPath()
  ctx.moveTo(x+14*W/32, y+18*H/32)
  ctx.rect(x+14*W/32, y+18*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //132
  ctx.beginPath()
  ctx.moveTo(x+15*W/32, y+18*H/32)
  ctx.rect(x+15*W/32, y+18*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //133
  ctx.beginPath()
  ctx.moveTo(x+23*W/32, y+17*H/32)
  ctx.rect(x+23*W/32, y+17*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //134
  ctx.beginPath()
  ctx.moveTo(x+23*W/32, y+16*H/32)
  ctx.rect(x+23*W/32, y+16*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //135
  ctx.beginPath()
  ctx.moveTo(x+22*W/32, y+17*H/32)
  ctx.rect(x+22*W/32, y+17*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //136
  ctx.beginPath()
  ctx.moveTo(x+22*W/32, y+18*H/32)
  ctx.rect(x+22*W/32, y+18*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //137
  ctx.beginPath()
  ctx.moveTo(x+17*W/32, y+16*H/32)
  ctx.rect(x+17*W/32, y+16*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //138
  ctx.beginPath()
  ctx.moveTo(x+17*W/32, y+15*H/32)
  ctx.rect(x+17*W/32, y+15*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //139
  ctx.beginPath()
  ctx.moveTo(x+10*W/32, y+15*H/32)
  ctx.rect(x+10*W/32, y+15*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
  //140
  ctx.beginPath()
  ctx.moveTo(x+10*W/32, y+16*H/32)
  ctx.rect(x+10*W/32, y+16*H/32,W/32,W/32)
  ctx.closePath()
  ctx.fill()
}

function snowmanAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+22*H/24)
  cpx = x+18*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+18*H/24)
  cpx = x+18*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
  cpx = x+17*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+10*H/24)
  cpx = x+17*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
  cpx = x+15*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+4*H/24)
  cpx = x+15*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+9*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+4*H/24)
  cpx = x+9*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
  cpx = x+7*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+10*H/24)
  cpx = x+7*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
  cpx = x+6*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+18*H/24)
  cpx = x+6*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  ctx.stroke()
  let r = W/96
  //2
  ctx.beginPath()
  ctx.arc(x+11*W/24, y+4*H/24, r, 0, Math.PI*2)
  ctx.fill()

  //3
  ctx.beginPath()
  ctx.arc(x+13*W/24, y+4*H/24, r, 0, Math.PI*2)
  ctx.fill()

  //4
  ctx.beginPath()
  ctx.arc(x+12*W/24, y+8.5*H/24, r, 0, Math.PI*2)
  ctx.fill()

  //5
  ctx.beginPath()
  ctx.arc(x+12*W/24, y+10.5*H/24, r, 0, Math.PI*2)
  ctx.fill()

  //6
  ctx.beginPath()
  ctx.arc(x+12*W/24, y+12.5*H/24, r, 0, Math.PI*2)
  ctx.fill()

  //7
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+10*H/24)
  ctx.lineTo(x+20*W/24, y+8*H/24)
  ctx.lineTo(x+22*W/24, y+8*H/24)
  ctx.lineTo(x+20*W/24, y+8*H/24)
  ctx.lineTo(x+21*W/24, y+6*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+10*H/24)
  ctx.lineTo(x+4*W/24, y+8*H/24)
  ctx.lineTo(x+2*W/24, y+8*H/24)
  ctx.lineTo(x+4*W/24, y+8*H/24)
  ctx.lineTo(x+3*W/24, y+6*H/24)
  ctx.stroke()
  let saved = ctx.fillStyle
  ctx.fillStyle = '#ED9121'
  //9
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+4.5*H/24)
  ctx.lineTo(x+14*W/24, y+5*H/24)
  ctx.lineTo(x+12*W/24, y+5.5*H/24)
  ctx.fill()
  ctx.fillStyle = saved
}

function flyover_statesAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
    //1
    ctx.beginPath()
    ctx.moveTo(x+0*W/24, y+1*H/24)
    cpx = x+10*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+3*H/24)
    ctx.lineTo(x+15*W/24, y+3*H/24)
    ctx.lineTo(x+16*W/24, y+4*H/24)
    ctx.lineTo(x+17*W/24, y+4*H/24)
    ctx.lineTo(x+16*W/24, y+5*H/24)
    ctx.lineTo(x+17*W/24, y+5*H/24)
    ctx.lineTo(x+18*W/24, y+4*H/24)
    ctx.lineTo(x+18*W/24, y+5*H/24)
    ctx.lineTo(x+19*W/24, y+5*H/24)
    ctx.lineTo(x+20*W/24, y+4*H/24)
    ctx.lineTo(x+21*W/24, y+5*H/24)
    cpx = x+20*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+6*H/24)
    cpx = x+18*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+7*H/24)
    cpx = x+19*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+6*H/24)
    cpx = x+18*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+9*H/24)
    cpx = x+20*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+7*H/24)
    cpx = x+19*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+6*H/24)
    cpx = x+20*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+5.5*H/24)
    cpx = x+21*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21.5*W/24, y+6*H/24)
    cpx = x+21*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21.5*W/24, y+7*H/24)
    cpx = x+22*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+8*H/24)
    cpx = x+21*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21.6*W/24, y+9*H/24)
    cpx = x+22*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+9*H/24)
    cpx = x+24*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+24*W/24, y+8*H/24)
    ctx.stroke()
  
    //2
    ctx.beginPath()
    ctx.moveTo(x+0*W/24, y+17*H/24)
    ctx.lineTo(x+2*W/24, y+18*H/24)
    ctx.lineTo(x+4*W/24, y+18*H/24)
    ctx.lineTo(x+5*W/24, y+18*H/24)
    ctx.lineTo(x+6*W/24, y+19*H/24)
    ctx.lineTo(x+7*W/24, y+19*H/24)
    ctx.lineTo(x+7*W/24, y+20*H/24)
    ctx.lineTo(x+8*W/24, y+20*H/24)
    ctx.lineTo(x+9*W/24, y+20*H/24)
    ctx.lineTo(x+10*W/24, y+22*H/24)
    ctx.lineTo(x+11*W/24, y+23*H/24)
    ctx.lineTo(x+12*W/24, y+24*H/24)
    ctx.lineTo(x+12*W/24, y+23*H/24)
    cpx = x+12*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+21*H/24)
    cpx = x+14*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+20*H/24)
    cpx = x+17*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+21*H/24)
    cpx = x+18*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+20*H/24)
    cpx = x+18*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+19*H/24)
    cpx = x+19*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+19*H/24)
    cpx = x+21*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+20*H/24)
    cpx = x+23*W/24
    cpy = y+19.7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+20*H/24)
    cpx = x+24*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+24*W/24, y+21*H/24)
    ctx.stroke()
}

function reel_to_reelAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+2*H/24)
  cpx = x+8*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+8*H/24)
  cpx = x+8*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+14*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+9*H/24)
  cpx = x+3*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+8*H/24)
  cpx = x+3*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+7*H/24)
  cpx = x+1*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/24, y+8*H/24)
  cpx = x+1*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+9*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+14*H/24)
  cpx = x+16*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+8*H/24)
  cpx = x+16*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+2*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+9*H/24)
  cpx = x+23*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+8*H/24)
  cpx = x+23*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+7*H/24)
  cpx = x+21*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+8*H/24)
  cpx = x+21*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+9*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+20*H/24)
  cpx = x+8*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+19*H/24)
  cpx = x+8*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+18*H/24)
  cpx = x+6*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+19*H/24)
  cpx = x+6*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+20*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+20*H/24)
  cpx = x+18*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+19*H/24)
  cpx = x+18*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+18*H/24)
  cpx = x+16*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+19*H/24)
  cpx = x+16*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+20*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+19*H/24)
  ctx.lineTo(x+23*W/24, y+14*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+19*H/24)
  ctx.lineTo(x+1*W/24, y+14*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+19*H/24)
  ctx.lineTo(x+8*W/24, y+15*H/24)
  ctx.stroke()

  //10
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+19*H/24)
  ctx.lineTo(x+16*W/24, y+15*H/24)
  ctx.stroke()

  //11
  ctx.beginPath()
  ctx.arc(x+9*W/24, y+15*H/24, W/24, 0, Math.PI*2)
  ctx.stroke()

  //12
  ctx.beginPath()
  ctx.arc(x+15*W/24, y+15*H/24, W/24, 0, Math.PI*2)
  ctx.stroke()

  //13
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+14*H/24)
  cpx = x+15*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+12*H/24)
  cpx = x+9*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+12*H/24)
  cpx = x+9*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
  ctx.stroke()

  //14
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+14*H/24)
  cpx = x+13*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+15*H/24)
  cpx = x+13*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+16*H/24)
  cpx = x+11*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+16*H/24)
  cpx = x+11*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+15*H/24)
  cpx = x+11*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
  ctx.stroke()

  //15
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+14*H/24)
  ctx.lineTo(x+15*W/24, y+14*H/24)
  ctx.stroke()

  //16
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+14*H/24)
  ctx.lineTo(x+1*W/24, y+14*H/24)
  ctx.stroke()

  //17
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+2*H/24)
  ctx.lineTo(x+1*W/24, y+2*H/24)
  ctx.stroke()

  //18
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+14*H/24)
  ctx.lineTo(x+23*W/24, y+14*H/24)
  ctx.stroke()

  //19
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+2*H/24)
  ctx.lineTo(x+23*W/24, y+2*H/24)
  ctx.stroke()
  //20 spokes
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+9*H/24)
  cpx = x+3*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+10*H/24)
  cpx = x+3*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+13*H/24)
  cpx = x+6*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+10*H/24)
  cpx = x+7*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+9*H/24)
  ctx.stroke()

  //21
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+7*H/24)
  cpx = x+3*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+6*H/24)
  cpx = x+3*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+3*H/24)
  cpx = x+6*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+6*H/24)
  cpx = x+7*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+7*H/24)
  ctx.stroke()

  //22
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+7*H/24)
  cpx = x+21*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+6*H/24)
  cpx = x+21*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+3*H/24)
  cpx = x+18*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+6*H/24)
  cpx = x+17*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+7*H/24)
  ctx.stroke()

  //23
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+9*H/24)
  cpx = x+21*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+10*H/24)
  cpx = x+21*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+13*H/24)
  cpx = x+18*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+10*H/24)
  cpx = x+17*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+9*H/24)
  ctx.stroke()
  //24
  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+6*H/24)
  cpx = x+23*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+24*W/24, y+3*H/24)
  ctx.stroke()

  //25
  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+10*H/24)
  cpx = x+23*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+24*W/24, y+13*H/24)
  ctx.stroke()

  //26
  ctx.beginPath()
  ctx.moveTo(x+1*W/24, y+10*H/24)
  cpx = x+1*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+0*W/24, y+13*H/24)
  ctx.stroke()

  //27
  ctx.beginPath()
  ctx.moveTo(x+1*W/24, y+6*H/24)
  cpx = x+1*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+0*W/24, y+3*H/24)
  ctx.stroke()

  //28
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+6*H/24)
  ctx.lineTo(x+15*W/24, y+6*H/24)
  ctx.lineTo(x+15*W/24, y+2*H/24)
  ctx.lineTo(x+9*W/24, y+2*H/24)
  ctx.lineTo(x+9*W/24, y+6*H/24)
  ctx.stroke()

  //29
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+5*H/24)
  ctx.lineTo(x+14*W/24, y+5*H/24)
  cpx = x+14*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+3*H/24)
  cpx = x+10*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+5*H/24)
  ctx.stroke()

  //30
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+5*H/24)
  ctx.lineTo(x+11*W/24, y+4*H/24)
  ctx.stroke()
}

function octopusAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "round"
  ctx.lineJoin = "round"
  //1
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+10*H/24)
  cpx = x+11*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+8*H/24)
  cpx = x+9*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+5*H/24)
  cpx = x+9*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+15*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+5*H/24)
  cpx = x+15*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+8*H/24)
  cpx = x+13*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+10*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.arc(x+14*W/24, y+5*H/24, W/32, 0, Math.PI*2)
  ctx.stroke()
  //3
  ctx.beginPath()
  ctx.arc(x+10*W/24, y+5*H/24, W/32, 0, Math.PI*2)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+10*H/24)
  cpx = x+4*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+14*H/24)
  cpx = x+4*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+20*H/24)
  cpx = x+5*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+14*H/24)
  cpx = x+5*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+11*H/24)
  ctx.stroke()
  //5
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+10*H/24)
  cpx = x+20*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+14*H/24)
  cpx = x+20*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+20*H/24)
  cpx = x+19*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+14*H/24)
  cpx = x+19*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+11*H/24)
  ctx.stroke()
  //8
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+11*H/24)
  cpx = x+6*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+15*H/24)
  cpx = x+6*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+21*H/24)
  cpx = x+7*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+15*H/24)
  cpx = x+7*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+11*H/24)
  ctx.stroke()
  //9
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+11*H/24)
  cpx = x+18*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+15*H/24)
  cpx = x+18*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+21*H/24)
  cpx = x+17*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+15*H/24)
  cpx = x+17*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+11*H/24)
  ctx.stroke()
  // inner legs 
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+11*H/24)
  cpx = x+8*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+16*H/24)
  cpx = x+8*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+22*H/24)
  cpx = x+9*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+16*H/24)
  cpx = x+9*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+11*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+11*H/24)
  cpx = x+16*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+16*H/24)
  cpx = x+16*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+22*H/24)
  cpx = x+15*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+16*H/24)
  cpx = x+15*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+11*H/24)
  ctx.stroke()
  //1
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+11*H/24)
  cpx = x+10*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+16*H/24)
  cpx = x+10*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+23*H/24)
  cpx = x+11*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+16*H/24)
  cpx = x+11*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+11*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+11*H/24)
  cpx = x+14*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+16*H/24)
  cpx = x+14*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+23*H/24)
  cpx = x+13*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+16*H/24)
  cpx = x+13*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+11*H/24)
  ctx.stroke()
}

function hang_manAt (x,y,W,color,invert) {
  if (invert)
    hangmaniAt(x,y,W,color)
  else
    hangmanuAt(x,y,W,color)
}

function hangmaniAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  const found = words.match(/\b\w{5}\b/gm)
  let wrd = randomPick(found).split('')
  let fs = W/24 * 2, i = 0
  ctx.font = "800 "+(fs)+"pt AmericanTypewriter,Courier"
  let m = [2,6,10,14,18]
  for (; i < 5; i++) {
    if (Math.random() < 0.6)
      ctx.fillText(wrd[i],x+m[i]*W/24, y+21*H/24)
  }
  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+4*W/24, y+22*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+22*H/24)
  ctx.lineTo(x+8*W/24, y+22*H/24)
  ctx.stroke()
  //3
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+22*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+22*H/24)
  ctx.lineTo(x+16*W/24, y+22*H/24)
  ctx.stroke()
  //5
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+22*H/24)
  ctx.lineTo(x+20*W/24, y+22*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+18*H/24)
  ctx.lineTo(x+8*W/24, y+18*H/24)
  ctx.stroke()
  //7
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+18*H/24)
  ctx.lineTo(x+5*W/24, y+2*H/24)
  ctx.lineTo(x+14*W/24, y+2*H/24)
  ctx.lineTo(x+14*W/24, y+4*H/24)
  ctx.stroke()
  //11
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+13*H/24)
  ctx.lineTo(x+14*W/24, y+12*H/24)
  ctx.stroke()
  //8
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+4*H/24)
  cpx = x+16*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+8*H/24)
  cpx = x+20*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+5*H/24)
  ctx.lineTo(x+16*W/24, y+8*H/24)
  ctx.lineTo(x+14*W/24, y+12*H/24)
  ctx.stroke()
  //9
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+12*H/24)
  ctx.lineTo(x+12*W/24, y+9*H/24)
  ctx.lineTo(x+14*W/24, y+12*H/24)
  ctx.lineTo(x+18*W/24, y+11*H/24)
  ctx.stroke()
  //10
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+13*H/24)
  cpx = x+15*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+14*H/24)
  cpx = x+15*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+15*H/24)
  cpx = x+13*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+14*H/24)
  cpx = x+13*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+13*H/24)
  ctx.stroke()
}

function hangmanuAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  const found = words.match(/\b\w{5}\b/gm)
  let wrd = randomPick(found).split('')
  let fs = W/24 * 2, i = 0
  ctx.font = "800 "+(fs)+"pt AmericanTypewriter,Courier"
  let m = [2,6,10,14,18]
  for (; i < 5; i++) {
    if (Math.random() < 0.6)
      ctx.fillText(wrd[i],x+m[i]*W/24, y+21*H/24)
  }
  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+4*W/24, y+22*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+22*H/24)
  ctx.lineTo(x+8*W/24, y+22*H/24)
  ctx.stroke()
  //3
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+22*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+22*H/24)
  ctx.lineTo(x+16*W/24, y+22*H/24)
  ctx.stroke()
  //5
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+22*H/24)
  ctx.lineTo(x+20*W/24, y+22*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+18*H/24)
  ctx.lineTo(x+8*W/24, y+18*H/24)
  ctx.stroke()
  //7
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+18*H/24)
  ctx.lineTo(x+5*W/24, y+2*H/24)
  ctx.lineTo(x+14*W/24, y+2*H/24)
  ctx.lineTo(x+14*W/24, y+4*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+6*H/24)
  cpx = x+15*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+5*H/24)
  cpx = x+15*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+4*H/24)
  cpx = x+13*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+5*H/24)
  cpx = x+13*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+6*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+6*H/24)
  ctx.lineTo(x+14*W/24, y+7*H/24)
  ctx.lineTo(x+11*W/24, y+10*H/24)
  ctx.lineTo(x+14*W/24, y+7*H/24)
  ctx.lineTo(x+17*W/24, y+10*H/24)
  ctx.stroke()

  //10
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+7*H/24)
  ctx.lineTo(x+14*W/24, y+12*H/24)
  ctx.lineTo(x+11*W/24, y+15*H/24)
  ctx.lineTo(x+14*W/24, y+12*H/24)
  ctx.lineTo(x+17*W/24, y+15*H/24)
  ctx.stroke()
}

function coffee_makerAt (x,y,W,color,invert) {
  if (invert)
    french_pressAt(x,y,W,color)
  else
    mr_coffeeAt(x,y,W,color)
}

function french_pressAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+22*H/24)
  cpx = x+18*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+21*H/24)
  cpx = x+18*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+6*H/24)
  cpx = x+18*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+4*H/24)
  cpx = x+10*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+4*H/24)
  cpx = x+8*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+6*H/24)
  cpx = x+8*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+21*H/24)
  cpx = x+8*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+22*H/24)
  cpx = x+17*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+22*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+19*H/24)
  ctx.lineTo(x+8*W/24, y+20*H/24)
  ctx.lineTo(x+18*W/24, y+20*H/24)
  ctx.lineTo(x+18*W/24, y+19*H/24)
  ctx.lineTo(x+8*W/24, y+19*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+6*H/24)
  ctx.lineTo(x+20*W/24, y+6*H/24)
  ctx.lineTo(x+18*W/24, y+9*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+6*H/24)
  ctx.lineTo(x+13*W/24, y+19*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+4*H/24)
  ctx.lineTo(x+13*W/24, y+3*H/24)
  cpx = x+14*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+2*H/24)
  cpx = x+14*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+1*H/24)
  cpx = x+12*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+12*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+3*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+6*H/24)
  cpx = x+5*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+6*H/24)
  cpx = x+4*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+7*H/24)
  cpx = x+4*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+18*H/24)
  cpx = x+4*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+19*H/24)
  cpx = x+8*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+19*H/24)
  ctx.stroke()
  //7
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+18*H/24)
  cpx = x+6*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+18*H/24)
  cpx = x+5*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+17*H/24)
  cpx = x+5*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+8*H/24)
  cpx = x+5*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+7*H/24)
  cpx = x+8*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+7*H/24)
  ctx.stroke()
}

function locationAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.fillStyle = 'red'
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+22*H/24)
  cpx = x+13*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+8*H/24)
  cpx = x+14*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+1*H/24)
  cpx = x+0*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+0*W/24, y+8*H/24)
  cpx = x+1*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+22*H/24)
  cpx = x+7*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+11*H/24)
  cpx = x+4*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+8*H/24)
  cpx = x+4*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+5*H/24)
  cpx = x+10*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+8*H/24)
  cpx = x+10*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+11*H/24)
  cpx = x+7*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+22*H/24)
  ctx.fill()
}
function joineryAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+22*H/24)
  ctx.lineTo(x+16*W/24, y+20*H/24)
  ctx.lineTo(x+16*W/24, y+21*H/24)
  ctx.lineTo(x+12*W/24, y+23*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.lineTo(x+8*W/24, y+20*H/24)
  ctx.lineTo(x+8*W/24, y+19*H/24)
  ctx.lineTo(x+12*W/24, y+21*H/24)
  ctx.lineTo(x+12*W/24, y+20*H/24)
  ctx.lineTo(x+16*W/24, y+18*H/24)
  ctx.lineTo(x+16*W/24, y+19*H/24)
  ctx.lineTo(x+12*W/24, y+21*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+23*H/24)
  ctx.lineTo(x+2*W/24, y+18*H/24)
  ctx.stroke()
  //3
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+20*H/24)
  ctx.lineTo(x+2*W/24, y+15*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+21*H/24)
  ctx.lineTo(x+22*W/24, y+18*H/24)
  ctx.stroke()
  //5
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+18*H/24)
  ctx.lineTo(x+22*W/24, y+15*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+18*H/24)
  ctx.lineTo(x+2*W/24, y+11*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+11*H/24)
  ctx.lineTo(x+12*W/24, y+16*H/24)
  ctx.stroke()
  //8
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+21*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.stroke()
  //right piece
  //1
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+9*H/24)
  ctx.lineTo(x+20*W/24, y+7*H/24)
  ctx.lineTo(x+20*W/24, y+8*H/24)
  ctx.lineTo(x+22*W/24, y+7*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+6*H/24)
  ctx.lineTo(x+20*W/24, y+5*H/24)
  ctx.lineTo(x+22*W/24, y+4*H/24)
  ctx.stroke()
  //3
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+3*H/24)
  ctx.lineTo(x+20*W/24, y+5*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+6*H/24)
  ctx.lineTo(x+16*W/24, y+4*H/24)
  ctx.lineTo(x+16*W/24, y+3*H/24)
  ctx.lineTo(x+18*W/24, y+2*H/24)
  ctx.stroke()
  //5
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+4*H/24)
  ctx.lineTo(x+12*W/24, y+6*H/24)
  ctx.lineTo(x+12*W/24, y+7*H/24)
  ctx.lineTo(x+16*W/24, y+9*H/24)
  ctx.lineTo(x+16*W/24, y+8*H/24)
  ctx.lineTo(x+12*W/24, y+6*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+6*H/24)
  ctx.lineTo(x+16*W/24, y+8*H/24)
  ctx.stroke()
  //7
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+8*H/24)
  ctx.lineTo(x+19*W/24, y+7.5*H/24)
  ctx.stroke()
  // left part
  //1
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+4*H/24)
  ctx.lineTo(x+7*W/24, y+2*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+6*H/24)
  ctx.lineTo(x+11*W/24, y+4*H/24)
  ctx.lineTo(x+11*W/24, y+5*H/24)
  ctx.lineTo(x+7*W/24, y+7*H/24)
  ctx.lineTo(x+7*W/24, y+6*H/24)
  ctx.lineTo(x+2*W/24, y+3.5*H/24)
  ctx.stroke()
  //3
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+6*H/24)
  ctx.lineTo(x+11*W/24, y+7*H/24)
  ctx.lineTo(x+7*W/24, y+9*H/24)
  ctx.lineTo(x+7*W/24, y+8*H/24)
  ctx.lineTo(x+11*W/24, y+6*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+7*H/24)
  ctx.lineTo(x+3*W/24, y+5*H/24)
  ctx.lineTo(x+3*W/24, y+6*H/24)
  ctx.lineTo(x+7*W/24, y+8*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+9*H/24)
  ctx.lineTo(x+2*W/24, y+6.5*H/24)
  ctx.stroke()
  //7
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+6*H/24)
  ctx.lineTo(x+10*W/24, y+5.5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+6*H/24)
  ctx.lineTo(x+4*W/24, y+5.5*H/24)
  ctx.stroke()
}

function big_cityAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
   //1
   ctx.beginPath()
   ctx.moveTo(x+2*W/24, y+4*H/24)
   ctx.lineTo(x+6*W/24, y+8*H/24)
   ctx.lineTo(x+2*W/24, y+12*H/24)
   ctx.stroke()
 
   //2
   ctx.beginPath()
   ctx.moveTo(x+8*W/24, y+8*H/24)
   ctx.lineTo(x+12*W/24, y+4*H/24)
   ctx.lineTo(x+16*W/24, y+8*H/24)
   ctx.lineTo(x+12*W/24, y+12*H/24)
   ctx.lineTo(x+8*W/24, y+8*H/24)
   ctx.stroke()
 
   //3
   ctx.beginPath()
   ctx.moveTo(x+7*W/24, y+9*H/24)
   ctx.lineTo(x+3*W/24, y+13*H/24)
   ctx.lineTo(x+7*W/24, y+17*H/24)
   ctx.lineTo(x+11*W/24, y+13*H/24)
   ctx.lineTo(x+7*W/24, y+9*H/24)
   ctx.stroke()
 
   //4
   ctx.beginPath()
   ctx.moveTo(x+3*W/24, y+3*H/24)
   ctx.lineTo(x+7*W/24, y+7*H/24)
   ctx.lineTo(x+11*W/24, y+3*H/24)
   ctx.lineTo(x+10*W/24, y+2*H/24)
   ctx.stroke()
 
   //5
   ctx.beginPath()
   ctx.moveTo(x+4*W/24, y+2*H/24)
   ctx.lineTo(x+3*W/24, y+3*H/24)
   ctx.stroke()
 
   //6
   ctx.beginPath()
   ctx.moveTo(x+13*W/24, y+13*H/24)
   ctx.lineTo(x+17*W/24, y+9*H/24)
   ctx.lineTo(x+21*W/24, y+13*H/24)
   ctx.lineTo(x+17*W/24, y+17*H/24)
   ctx.lineTo(x+13*W/24, y+13*H/24)
   ctx.stroke()
 
   //7
   ctx.beginPath()
   ctx.moveTo(x+12*W/24, y+14*H/24)
   ctx.lineTo(x+16*W/24, y+18*H/24)
   ctx.lineTo(x+12*W/24, y+22*H/24)
   ctx.lineTo(x+8*W/24, y+18*H/24)
   ctx.lineTo(x+12*W/24, y+14*H/24)
   ctx.stroke()
 
   //8
   ctx.beginPath()
   ctx.moveTo(x+7*W/24, y+19*H/24)
   ctx.lineTo(x+10*W/24, y+22*H/24)
   ctx.stroke()
 
   //9
   ctx.beginPath()
   ctx.moveTo(x+7*W/24, y+19*H/24)
   ctx.lineTo(x+4*W/24, y+22*H/24)
   ctx.stroke()
 
   //10
   ctx.beginPath()
   ctx.moveTo(x+2*W/24, y+22*H/24)
   ctx.lineTo(x+6*W/24, y+18*H/24)
   ctx.lineTo(x+2*W/24, y+14*H/24)
   ctx.stroke()
 
   //11
   ctx.beginPath()
   ctx.moveTo(x+14*W/24, y+22*H/24)
   ctx.lineTo(x+17*W/24, y+19*H/24)
   ctx.lineTo(x+20*W/24, y+22*H/24)
   ctx.stroke()
 
   //12
   ctx.beginPath()
   ctx.moveTo(x+22*W/24, y+14*H/24)
   ctx.lineTo(x+18*W/24, y+18*H/24)
   ctx.lineTo(x+22*W/24, y+22*H/24)
   ctx.stroke()
 
   //13
   ctx.beginPath()
   ctx.moveTo(x+13*W/24, y+3*H/24)
   ctx.lineTo(x+17*W/24, y+7*H/24)
   ctx.lineTo(x+21*W/24, y+3*H/24)
   ctx.lineTo(x+20*W/24, y+2*H/24)
   ctx.stroke()
 
   //14
   ctx.beginPath()
   ctx.moveTo(x+14*W/24, y+2*H/24)
   ctx.lineTo(x+13*W/24, y+3*H/24)
   ctx.stroke()
 
   //15
   ctx.beginPath()
   ctx.moveTo(x+18*W/24, y+8*H/24)
   ctx.lineTo(x+22*W/24, y+4*H/24)
   ctx.stroke()
 
   //16
   ctx.beginPath()
   ctx.moveTo(x+18*W/24, y+8*H/24)
   ctx.lineTo(x+22*W/24, y+12*H/24)
   ctx.stroke()
 
   //17
   ctx.beginPath()
   ctx.moveTo(x+6*W/24, y+15*H/24)
   ctx.lineTo(x+7*W/24, y+16*H/24)
   ctx.lineTo(x+8*W/24, y+15*H/24)
   ctx.lineTo(x+8*W/24, y+11*H/24)
   ctx.lineTo(x+7*W/24, y+10*H/24)
   ctx.lineTo(x+6*W/24, y+11*H/24)
   ctx.lineTo(x+6*W/24, y+15*H/24)
   ctx.stroke()
 
   //18
   ctx.beginPath()
   ctx.moveTo(x+6*W/24, y+11*H/24)
   ctx.lineTo(x+7*W/24, y+12*H/24)
   ctx.lineTo(x+8*W/24, y+11*H/24)
   ctx.stroke()
 
   //19
   ctx.beginPath()
   ctx.moveTo(x+7*W/24, y+12*H/24)
   ctx.lineTo(x+7*W/24, y+16*H/24)
   ctx.stroke()
 
   //20
   ctx.beginPath()
   ctx.moveTo(x+12*W/24, y+11*H/24)
   ctx.lineTo(x+11*W/24, y+10*H/24)
   ctx.lineTo(x+11*W/24, y+6*H/24)
   ctx.lineTo(x+12*W/24, y+5*H/24)
   ctx.lineTo(x+13*W/24, y+6*H/24)
   ctx.lineTo(x+13*W/24, y+10*H/24)
   ctx.lineTo(x+12*W/24, y+11*H/24)
   ctx.lineTo(x+12*W/24, y+7*H/24)
   ctx.lineTo(x+13*W/24, y+6*H/24)
   ctx.stroke()
 
   //21
   ctx.beginPath()
   ctx.moveTo(x+11*W/24, y+6*H/24)
   ctx.lineTo(x+12*W/24, y+7*H/24)
   ctx.stroke()
 
   //22
   ctx.beginPath()
   ctx.moveTo(x+10*W/24, y+19*H/24)
   ctx.lineTo(x+12*W/24, y+21*H/24)
   ctx.lineTo(x+14*W/24, y+19*H/24)
   ctx.lineTo(x+14*W/24, y+17*H/24)
   ctx.lineTo(x+12*W/24, y+15*H/24)
   ctx.lineTo(x+10*W/24, y+17*H/24)
   ctx.lineTo(x+10*W/24, y+19*H/24)
   ctx.stroke()
 
   //23
   ctx.beginPath()
   ctx.moveTo(x+10*W/24, y+17*H/24)
   ctx.lineTo(x+12*W/24, y+19*H/24)
   ctx.lineTo(x+14*W/24, y+17*H/24)
   ctx.stroke()
 
   //24
   ctx.beginPath()
   ctx.moveTo(x+12*W/24, y+19*H/24)
   ctx.lineTo(x+12*W/24, y+21*H/24)
   ctx.stroke()
  
  //45
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+16*H/24)
  ctx.lineTo(x+19*W/24, y+14*H/24)
  ctx.lineTo(x+19*W/24, y+12*H/24)
  ctx.lineTo(x+17*W/24, y+10*H/24)
  ctx.lineTo(x+15*W/24, y+12*H/24)
  ctx.lineTo(x+15*W/24, y+14*H/24)
  ctx.lineTo(x+17*W/24, y+16*H/24)
  ctx.stroke()

  //46
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+12*H/24)
  ctx.lineTo(x+17*W/24, y+14*H/24)
  ctx.lineTo(x+19*W/24, y+12*H/24)
  ctx.stroke()

  //47
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+14*H/24)
  ctx.lineTo(x+17*W/24, y+16*H/24)
  ctx.stroke()

  //48
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+9*H/24)
  ctx.lineTo(x+2*W/24, y+11*H/24)
  ctx.stroke()
 
   //28
   ctx.beginPath()
   ctx.moveTo(x+17*W/24, y+6*H/24)
   ctx.lineTo(x+19*W/24, y+4*H/24)
   ctx.lineTo(x+19*W/24, y+2*H/24)
   ctx.stroke()
 
   //29
   ctx.beginPath()
   ctx.moveTo(x+17*W/24, y+6*H/24)
   ctx.lineTo(x+15*W/24, y+4*H/24)
   ctx.lineTo(x+15*W/24, y+2*H/24)
   ctx.stroke()
 
   //30
   ctx.beginPath()
   ctx.moveTo(x+17*W/24, y+6*H/24)
   ctx.lineTo(x+17*W/24, y+3*H/24)
   ctx.lineTo(x+18*W/24, y+2*H/24)
   ctx.lineTo(x+17*W/24, y+3*H/24)
   ctx.lineTo(x+16*W/24, y+2*H/24)
   ctx.stroke()
 
   //31
   ctx.beginPath()
   ctx.moveTo(x+2*W/24, y+11*H/24)
   ctx.lineTo(x+4*W/24, y+9*H/24)
   ctx.lineTo(x+4*W/24, y+7*H/24)
   ctx.lineTo(x+2*W/24, y+9*H/24)
   ctx.stroke()
 
   //32
   ctx.beginPath()
   ctx.moveTo(x+2*W/24, y+5*H/24)
   ctx.lineTo(x+4*W/24, y+7*H/24)
   ctx.stroke()
 
   //33
   ctx.beginPath()
   ctx.moveTo(x+17*W/24, y+20*H/24)
   ctx.lineTo(x+15*W/24, y+22*H/24)
   ctx.lineTo(x+17*W/24, y+20*H/24)
   ctx.lineTo(x+19*W/24, y+22*H/24)
   ctx.stroke()
 
   //34
   ctx.beginPath()
   ctx.moveTo(x+22*W/24, y+15*H/24)
   ctx.lineTo(x+20*W/24, y+17*H/24)
   ctx.lineTo(x+22*W/24, y+19*H/24)
   ctx.lineTo(x+22*W/24, y+21*H/24)
   ctx.lineTo(x+20*W/24, y+19*H/24)
   ctx.lineTo(x+20*W/24, y+17*H/24)
   ctx.stroke()
 
   //35
   ctx.beginPath()
   ctx.moveTo(x+22*W/24, y+5*H/24)
   ctx.lineTo(x+21*W/24, y+6*H/24)
   ctx.lineTo(x+21*W/24, y+10*H/24)
   ctx.lineTo(x+22*W/24, y+11*H/24)
   ctx.lineTo(x+22*W/24, y+7*H/24)
   ctx.lineTo(x+21*W/24, y+6*H/24)
   ctx.stroke()
 
   //36
   ctx.beginPath()
   ctx.moveTo(x+7*W/24, y+6*H/24)
   ctx.lineTo(x+9*W/24, y+4*H/24)
   ctx.lineTo(x+9*W/24, y+2*H/24)
   ctx.stroke()
 
   //37
   ctx.beginPath()
   ctx.moveTo(x+7*W/24, y+3*H/24)
   ctx.lineTo(x+7*W/24, y+6*H/24)
   ctx.lineTo(x+5*W/24, y+4*H/24)
   ctx.lineTo(x+5*W/24, y+2*H/24)
   ctx.stroke()
 
   //38
   ctx.beginPath()
   ctx.moveTo(x+6*W/24, y+2*H/24)
   ctx.lineTo(x+7*W/24, y+3*H/24)
   ctx.lineTo(x+8*W/24, y+2*H/24)
   ctx.stroke()
 
   //39
   ctx.beginPath()
   ctx.moveTo(x+7*W/24, y+19*H/24)
   ctx.lineTo(x+6*W/24, y+20*H/24)
   ctx.lineTo(x+7*W/24, y+21*H/24)
   ctx.lineTo(x+8*W/24, y+20*H/24)
   ctx.lineTo(x+8*W/24, y+22*H/24)
   ctx.stroke()
 
   //40
   ctx.beginPath()
   ctx.moveTo(x+7*W/24, y+21*H/24)
   ctx.lineTo(x+7*W/24, y+22*H/24)
   ctx.stroke()
 
   //41
   ctx.beginPath()
   ctx.moveTo(x+6*W/24, y+20*H/24)
   ctx.lineTo(x+6*W/24, y+22*H/24)
   ctx.stroke()
 
   //42
   ctx.beginPath()
   ctx.moveTo(x+2*W/24, y+21*H/24)
   ctx.lineTo(x+4*W/24, y+19*H/24)
   ctx.lineTo(x+4*W/24, y+17*H/24)
   ctx.lineTo(x+2*W/24, y+19*H/24)
   ctx.lineTo(x+2*W/24, y+21*H/24)
   ctx.stroke()
 
   //43
   ctx.beginPath()
   ctx.moveTo(x+4*W/24, y+17*H/24)
   ctx.lineTo(x+2*W/24, y+15*H/24)
   ctx.stroke()

     //49
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+14*H/24)
  ctx.lineTo(x+5*W/24, y+12*H/24)
  ctx.lineTo(x+6*W/24, y+13*H/24)
  ctx.lineTo(x+6*W/24, y+11*H/24)
  ctx.lineTo(x+5*W/24, y+12*H/24)
  ctx.lineTo(x+5*W/24, y+14*H/24)
  ctx.lineTo(x+6*W/24, y+15*H/24)
  ctx.stroke()

  //50
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+10*H/24)
  ctx.lineTo(x+14*W/24, y+9*H/24)
  ctx.lineTo(x+14*W/24, y+7*H/24)
  ctx.lineTo(x+13*W/24, y+8*H/24)
  ctx.lineTo(x+14*W/24, y+7*H/24)
  ctx.lineTo(x+13*W/24, y+6*H/24)
  ctx.stroke()
  let f = W/4
  locationAt(x+W/2+pet(W/2), y+W/2+pet(W/3), f)
}

function stomachAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+1*H/24)
  cpx = x+10*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+6*H/24)
  cpx = x+13*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+3*H/24)
  cpx = x+22*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+11*H/24)
  cpx = x+22*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+21*H/24)
  cpx = x+8*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+16*H/24)
  cpx = x+5*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+18*H/24)
  cpx = x+5*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+22*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+22*H/24)
  cpx = x+3*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+18*H/24)
  cpx = x+3*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+14*H/24)
  cpx = x+7*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+12*H/24)
  cpx = x+12*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
  cpx = x+12*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+8*H/24)
  cpx = x+10*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+5*H/24)
  cpx = x+8*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+1*H/24)
  ctx.stroke()
}
function missingAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+21*H/24)
  cpx = x+3*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+16*H/24)
  cpx = x+13*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+10*H/24)
  cpx = x+17*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+2*H/24)
  cpx = x+22*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+4*H/24)
  cpx = x+23*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+6*H/24)
  cpx = x+20*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+12*H/24)
  cpx = x+20*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+17*H/24)
  cpx = x+14*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+23*H/24)
  cpx = x+5*W/24
  cpy = y+23*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+21*H/24)
  ctx.stroke()

  ctx.setLineDash([W/24])
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+21*H/24)
  cpx = x+1*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+16*H/24)
  cpx = x+11*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
  cpx = x+15*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+2*H/24)
  cpx = x+20*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+4*H/24)
  cpx = x+21*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+6*H/24)
  cpx = x+18*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+12*H/24)
  cpx = x+18*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+17*H/24)
  cpx = x+12*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+23*H/24)
  cpx = x+3*W/24
  cpy = y+23*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+21*H/24)
  ctx.stroke()
  ctx.setLineDash([])
}

function hexAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let hex = color//randomColor()
  ctx.fillStyle = hex
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = hex
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  let cc = closestColor(hex)
  //1
  defs["hexAt"].i = "closest Pantone: " + cc[1]
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+2*H/24)
  ctx.fill()
  let fs = W/24 * 2
  ctx.font = "100 "+(fs)+"pt AmericanTypewriter,Courier"
  hex = hex.toUpperCase()
  let tw = ctx.measureText(hex).width
  ctx.fillText(hex, x+12*W/24-tw/2, y+fs+23*H/24)
}

function unoAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = "#ffffee"
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, angle = 0
  defs["unoAt"] = {"u":"where did that come from?","i":"Kobayashi Maru"},
  //1
  ctx.beginPath()
  p = rotatePoint(x+1*W/24, y+24*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+15*W/24, y+24*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  cpx = x+16*W/24
  cpy = y+24*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+16*W/24, y+23*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  p = rotatePoint(x+16*W/24, y+1*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  cpx = x+16*W/24
  cpy = y+0*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+15*W/24, y+0*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  p = rotatePoint(x+1*W/24, y+0*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  cpx = x+0*W/24
  cpy = y+0*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+0*W/24, y+1*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  p = rotatePoint(x+0*W/24, y+23*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  cpx = x+0*W/24
  cpy = y+24*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+1*W/24, y+24*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()
  ctx.fillStyle = "#2222ff"
  //2 inner fill
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+23*H/24)
  cpx = x+15*W/24
  cpy = y+23*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+22*H/24)
  ctx.lineTo(x+15*W/24, y+2*H/24)
  cpx = x+15*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+1*H/24)
  ctx.lineTo(x+2*W/24, y+1*H/24)
  cpx = x+1*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/24, y+2*H/24)
  ctx.lineTo(x+1*W/24, y+22*H/24)
  cpx = x+1*W/24
  cpy = y+23*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+23*H/24)
  ctx.lineTo(x+14*W/24, y+23*H/24)
  ctx.fill()
  ctx.fillStyle = "#ffffee"
  //3 inner oval
  ctx.beginPath()
  ctx.moveTo(x+1*W/24, y+14*H/24)
  cpx = x+1*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+22*H/24)
  cpx = x+14*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+9*H/24)
  cpx = x+15*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+2*H/24)
  cpx = x+2*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/24, y+14*H/24)
  ctx.fill()
  
  ctx.fillStyle = "#ffffee"
  //4
  ctx.beginPath()
  p = rotatePoint(x+2*W/24, y+2*H/24 ,cx,cy,0)
  twoAt(p[0],p[1],W/12, ctx.fillStyle, 0)
  ctx.fill()
  //5
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+20*H/24 ,cx,cy,0)
  twoAt(p[0],p[1],W/12, ctx.fillStyle, 180)
  ctx.fill()
  ctx.fillStyle = "#2222ff"
  //6
  ctx.beginPath()
  p = rotatePoint(x+4.3*W/24, y+8*H/24 ,cx,cy,0)
  twoAt(p[0],p[1],W/3, ctx.fillStyle, 0)
  ctx.fill()
}

function twoAt (x,y,W,color,angle) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2

  ctx.beginPath()
  p = rotatePoint(x+8*W/24, y+19*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+17*W/24
  cpy = y+15*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+20*W/24, y+10*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+22*W/24
  cpy = y+6*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+19*W/24, y+2*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+17*W/24
  cpy = y+0*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+13*W/24, y+0*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+3*W/24
  cpy = y+1*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+2*W/24, y+10*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+8*W/24
  cpy = y+10*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+8*W/24, y+10*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+9*W/24
  cpy = y+5*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+5*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+15*W/24
  cpy = y+5*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+15*W/24, y+8*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+14*W/24
  cpy = y+11*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+10*W/24, y+13*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+1*W/24
  cpy = y+16*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+0*W/24, y+24*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  p = rotatePoint(x+18*W/24, y+24*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+19*W/24, y+19*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+8*W/24, y+19*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.fill()
}

function space_intentionally_left_blankAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.setLineDash([W/24, w/24])
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+2*H/24)
  ctx.stroke()
  ctx.setLineDash([])
}

function fourofdiamondsAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  x -=  W/6
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = 'red'
  ctx.fillStyle = '#ffffee'
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, angle = 0
  ctx.shadowBlur = 10
  ctx.shadowColor = "#444444"
  ctx.shadowOffsetX = 2
  ctx.shadowOffsetY  = 12
  defs["fourofdiamondsAt"] = {"u":"where did that come from?","i":"out of the blue,immaterial,inapplicable,extraneous"},
  //1
  ctx.beginPath()
  p = rotatePoint(x+5*W/24, y+24*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+19*W/24
  cpy = y+24*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+19*W/24, y+24*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+20*W/24
  cpy = y+24*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+20*W/24, y+23*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+20*W/24
  cpy = y+1*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+20*W/24, y+1*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+20*W/24
  cpy = y+0*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+19*W/24, y+0*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+5*W/24
  cpy = y+0*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+5*W/24, y+0*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+4*W/24
  cpy = y+0*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+4*W/24, y+1*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+4*W/24
  cpy = y+23*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+4*W/24, y+23*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+4*W/24
  cpy = y+24*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+5*W/24, y+24*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()
  ctx.fillStyle = '#ff4000'
  //2
  ctx.shadowBlur = 0
  ctx.shadowColor = "#444444"
  ctx.shadowOffsetX = 0
  ctx.shadowOffsetY  = 0

  diamondAt(x+7.5*W/24,y+4*H/24, 4*H/24)
  //3
  diamondAt(x+7.5*W/24,y+16*H/24, 4*H/24)
  //4
  diamondAt(x+13.5*W/24,y+16*H/24, 4*H/24)
  //5
  diamondAt(x+13.5*W/24,y+4*H/24, 4*H/24)

  //6
  ctx.beginPath()
  p = rotatePoint(x+4.5*W/24, y+0.5*H/24 ,cx,cy,angle)
  fourAt(p[0],p[1],W/12, ctx.fillStyle, 0)
  ctx.fill()
  //7
  ctx.beginPath()
  p = rotatePoint(x+17.5*W/24, y+21.5*H/24 ,cx,cy,angle)
  fourAt(p[0],p[1],W/12, ctx.fillStyle, 180)
  ctx.fill()
  //8
   ctx.beginPath()
   p = rotatePoint(x+4.5*W/24, y+3*H/24 ,cx,cy,angle)
   diamondAt(p[0],p[1],W/12)
   ctx.fill()
   //9
   ctx.beginPath()
   p = rotatePoint(x+17.5*W/24, y+19*H/24 ,cx,cy,angle)
   diamondAt(p[0],p[1],W/12)
   ctx.fill()
}

function fourAt (x,y,W,color, angle) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2//, angle = 0
   //1
   ctx.beginPath()
   p = rotatePoint(x+13*W/24, y+22*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   cpx = x+13*W/24
   cpy = y+17*H/24
   cp = rotatePoint(cpx,cpy,cx,cy,angle)
   p = rotatePoint(x+13*W/24, y+17*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+15*W/24, y+17*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+16*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+13*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+13*W/24, y+0*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+10*W/24, y+0*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+0*W/24, y+15*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+0*W/24, y+16*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+3*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+10*W/24, y+3*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+10*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+3*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+0*W/24, y+16*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+0*W/24, y+17*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+10*W/24, y+17*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+10*W/24, y+22*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   cpx = x+10*W/24
   cpy = y+23*H/24
   cp = rotatePoint(cpx,cpy,cx,cy,angle)
   p = rotatePoint(x+8*W/24, y+23*H/24,cx,cy,angle)
   ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
   cpx = x+7*W/24
   cpy = y+23*H/24
   cp = rotatePoint(cpx,cpy,cx,cy,angle)
   p = rotatePoint(x+7*W/24, y+24*H/24,cx,cy,angle)
   ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
   cpx = x+16*W/24
   cpy = y+24*H/24
   cp = rotatePoint(cpx,cpy,cx,cy,angle)
   p = rotatePoint(x+16*W/24, y+24*H/24,cx,cy,angle)
   ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
   cpx = x+16*W/24
   cpy = y+23*H/24
   cp = rotatePoint(cpx,cpy,cx,cy,angle)
   p = rotatePoint(x+15*W/24, y+23*H/24,cx,cy,angle)
   ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
   cpx = x+13*W/24
   cpy = y+23*H/24
   cp = rotatePoint(cpx,cpy,cx,cy,angle)
   p = rotatePoint(x+13*W/24, y+22*H/24,cx,cy,angle)
   ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
   ctx.fill()
}

function diamondAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+24*H/24)
  cpx = x+11*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+12*H/24)
  cpx = x+11*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+0*H/24)
  cpx = x+5*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+0*W/24, y+12*H/24)
  cpx = x+5*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+24*H/24)
  ctx.fill()
}

function regexAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+16*H/24)
  ctx.lineTo(x+4*W/24, y+9*H/24)
  ctx.stroke()
//14
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+15*H/24)
  ctx.lineTo(x+22*W/24, y+11*H/24)
  ctx.stroke()
  //3
  ctx.beginPath()
  ctx.arc(x+22*W/24, y+10*H/24,ctx.lineWidth/1.2,0,Math.PI*2)
  ctx.fill()
  //5
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+9*H/24)
  ctx.lineTo(x+5*W/24, y+9*H/24)
  ctx.lineTo(x+5*W/24, y+16*H/24)
  ctx.lineTo(x+7*W/24, y+16*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+14*H/24)
  cpx = x+8*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+15*H/24)
  cpx = x+6*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+14*H/24)
  cpx = x+6*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+13*H/24)
  cpx = x+6*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+12*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+11*H/24)
  cpx = x+7*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+11*H/24)
  cpx = x+8*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+12*H/24)
  cpx = x+8*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+14*H/24)
  cpx = x+8*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+15*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+13*H/24)
  ctx.lineTo(x+11*W/24, y+13*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+11*H/24)
  ctx.lineTo(x+13*W/24, y+11*H/24)
  ctx.lineTo(x+11*W/24, y+15*H/24)
  ctx.lineTo(x+13*W/24, y+15*H/24)
  ctx.stroke()

  //10
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+16*H/24)
  ctx.lineTo(x+14*W/24, y+16*H/24)
  ctx.lineTo(x+14*W/24, y+9*H/24)
  ctx.lineTo(x+12*W/24, y+9*H/24)
  ctx.stroke()

  //11
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+13*H/24)
  ctx.lineTo(x+17*W/24, y+13*H/24)
  ctx.stroke()

  //12
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+12*H/24)
  ctx.lineTo(x+16*W/24, y+14*H/24)
  ctx.stroke()

  //13
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+16*H/24)
  ctx.lineTo(x+19*W/24, y+9*H/24)
  ctx.stroke()

  //16
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+11*H/24)
  cpx = x+19*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+12*H/24)
  cpx = x+19*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+14*H/24)
  cpx = x+19*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+15*H/24)
  cpx = x+21*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+14*H/24)
  cpx = x+21*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+17*H/24)
  cpx = x+21*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+18*H/24)
  cpx = x+19*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+17*H/24)
  ctx.stroke()

  //17
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+11*H/24)
  ctx.lineTo(x+21*W/24, y+14*H/24)
  ctx.stroke()
}

function one_of_suitsAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
 //1
 ctx.beginPath()
 ctx.moveTo(x+10*W/24, y+1*H/24)
 ctx.lineTo(x+13*W/24, y+4*H/24)
 ctx.lineTo(x+16*W/24, y+1*H/24)
 ctx.lineTo(x+16*W/24, y+2*H/24)
 ctx.lineTo(x+15*W/24, y+6*H/24)
 ctx.lineTo(x+13*W/24, y+4*H/24)
 ctx.lineTo(x+11*W/24, y+6*H/24)
 ctx.lineTo(x+10*W/24, y+3*H/24)
 ctx.lineTo(x+10*W/24, y+1*H/24)
 ctx.stroke()

 //2
 ctx.beginPath()
 ctx.moveTo(x+12*W/24, y+5*H/24)
 ctx.lineTo(x+13*W/24, y+6*H/24)
 ctx.lineTo(x+14*W/24, y+6*H/24)
 ctx.lineTo(x+14*W/24, y+5*H/24)
 ctx.stroke()

 //3
 ctx.beginPath()
 ctx.moveTo(x+13*W/24, y+19*H/24)
 cpx = x+17*W/24
 cpy = y+11*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+2*H/24)
 ctx.stroke()

 //4
 ctx.beginPath()
 ctx.moveTo(x+13*W/24, y+19*H/24)
 cpx = x+10*W/24
 cpy = y+8*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+3*H/24)
 ctx.stroke()

 //5
 ctx.beginPath()
 ctx.moveTo(x+13*W/24, y+19*H/24)
 cpx = x+19*W/24
 cpy = y+11*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+7*H/24)
 ctx.lineTo(x+18*W/24, y+6*H/24)
 ctx.lineTo(x+19*W/24, y+6*H/24)
 ctx.stroke()

 //6
 ctx.beginPath()
 ctx.moveTo(x+13*W/24, y+19*H/24)
 ctx.lineTo(x+7*W/24, y+6*H/24)
 ctx.lineTo(x+8*W/24, y+5*H/24)
 ctx.lineTo(x+7*W/24, y+4*H/24)
 ctx.stroke()

 //7
 ctx.beginPath()
 ctx.moveTo(x+13*W/24, y+6*H/24)
 cpx = x+12*W/24
 cpy = y+6*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
 ctx.stroke()

 //8
 ctx.beginPath()
 ctx.moveTo(x+14*W/24, y+6*H/24)
 cpx = x+15*W/24
 cpy = y+7*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+12*H/24)
 ctx.stroke()

 //9
 ctx.beginPath()
 ctx.moveTo(x+10*W/24, y+1*H/24)
 cpx = x+9*W/24
 cpy = y+3*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+4*H/24)
 cpx = x+4*W/24
 cpy = y+5*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+5*H/24)
 cpx = x+1*W/24
 cpy = y+12*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+1*W/24, y+22*H/24)
 ctx.stroke()

 //10
 ctx.beginPath()
 ctx.moveTo(x+16*W/24, y+1*H/24)
 cpx = x+17*W/24
 cpy = y+5*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+7*H/24)
 cpx = x+23*W/24
 cpy = y+14*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+22*H/24)
 ctx.stroke()

 //11
 ctx.beginPath()
 ctx.moveTo(x+19*W/24, y+22*H/24)
 cpx = x+20*W/24
 cpy = y+17*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+12*H/24)
 ctx.stroke()

 //12
 ctx.beginPath()
 ctx.moveTo(x+5*W/24, y+22*H/24)
 cpx = x+5*W/24
 cpy = y+14*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+12*H/24)
 cpx = x+4*W/24
 cpy = y+10*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+7*H/24)
 ctx.stroke()

 //13
 ctx.beginPath()
 ctx.moveTo(x+17*W/24, y+13*H/24)
 ctx.lineTo(x+20*W/24, y+13*H/24)
 ctx.lineTo(x+19*W/24, y+11*H/24)
 ctx.lineTo(x+17*W/24, y+13*H/24)
 ctx.stroke()
 
 //14
 ctx.beginPath()
 ctx.moveTo(x+19*W/24, y+6*H/24)
 ctx.lineTo(x+17.5*W/24, y+4*H/24)
 ctx.stroke()

 //15
 ctx.beginPath()
 ctx.moveTo(x+15*W/24, y+14*H/24)
 ctx.lineTo(x+15*W/24, y+12*H/24)
 ctx.stroke()

 //16
 ctx.beginPath()
 ctx.moveTo(x+12*W/24, y+14*H/24)
 ctx.lineTo(x+12*W/24, y+15*H/24)
 ctx.stroke()
 
 //17
 ctx.beginPath()
 ctx.moveTo(x+13*W/24, y+19*H/24)
 cpx = x+12*W/24
 cpy = y+20*H/24
 ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
 ctx.stroke()

 //18
 let r = W/38
 ctx.beginPath()
 ctx.arc(x+13.3*W/24, y+20.5*H/24, r, 0, Math.PI*2)
 ctx.stroke()
 
}

function galleryAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+13*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+14*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+14*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+13*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+13*H/24)
  ctx.lineTo(x+14*W/24, y+22*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+13*H/24)
  ctx.lineTo(x+16*W/24, y+22*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+13*H/24)
  ctx.lineTo(x+18*W/24, y+22*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+13*H/24)
  ctx.lineTo(x+20*W/24, y+22*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.stroke()

  //10
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+19*H/24)
  ctx.stroke()

  //11
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+17*H/24)
  ctx.stroke()

  //12
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+15.5*H/24)
  ctx.stroke()

  //13
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+13*H/24)
  ctx.lineTo(x+10*W/24, y+22*H/24)
  ctx.stroke()

  //14
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+13*H/24)
  ctx.lineTo(x+8*W/24, y+22*H/24)
  ctx.stroke()

  //15
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+13*H/24)
  ctx.lineTo(x+6*W/24, y+22*H/24)
  ctx.stroke()

  //16
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+13*H/24)
  ctx.lineTo(x+4*W/24, y+22*H/24)
  ctx.stroke()

  //17
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.stroke()

  //18
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+19*H/24)
  ctx.stroke()

  //19
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+17*H/24)
  ctx.stroke()

  //20
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+15.4*H/24)
  ctx.stroke()

  //22
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+2*H/24)
  ctx.lineTo(x+8*W/24, y+10*H/24)
  ctx.lineTo(x+18*W/24, y+10*H/24)
  ctx.lineTo(x+18*W/24, y+2*H/24)
  ctx.lineTo(x+8*W/24, y+2*H/24)
  ctx.stroke()

  //23
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+2*H/24)
  ctx.lineTo(x+2*W/24, y+5*H/24)
  ctx.lineTo(x+5*W/24, y+5*H/24)
  ctx.lineTo(x+5*W/24, y+2*H/24)
  ctx.lineTo(x+2*W/24, y+2*H/24)
  ctx.stroke()

  //24
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+6*H/24)
  ctx.lineTo(x+2*W/24, y+9*H/24)
  ctx.lineTo(x+5*W/24, y+9*H/24)
  ctx.lineTo(x+5*W/24, y+6*H/24)
  ctx.lineTo(x+2*W/24, y+6*H/24)
  ctx.stroke()

  //25
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+3*H/24)
  ctx.lineTo(x+21*W/24, y+3*H/24)
  ctx.lineTo(x+21*W/24, y+9*H/24)
  ctx.lineTo(x+22*W/24, y+9*H/24)
  ctx.stroke()
  figureAt(x+pet(12*W/24),y-1.5*H/24+pet(W/24),W,color)
  figure2At(x+pet(12*W/24),y-1.5*H/24+pet(W/24),W,color)
}

function figure2At (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+18*H/24)
  cpx = x+14*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+22*H/24)
  cpx = x+11*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+22*H/24)
  cpx = x+11*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+21*H/24)
  cpx = x+12*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+18*H/24)
  cpx = x+9*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+18*H/24)
  cpx = x+9*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+12*H/24)
  cpx = x+9*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+8*H/24)
  cpx = x+11*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+7*H/24)
  cpx = x+11*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+6*H/24)
  cpx = x+11*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+5*H/24)
  cpx = x+13*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+6*H/24)
  cpx = x+13*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+8*H/24)
  cpx = x+15*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+9*H/24)
  cpx = x+15*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+11*H/24)
  cpx = x+15*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+12*H/24)
  cpx = x+14*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+17*H/24)
  cpx = x+15*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+18*H/24)
  ctx.fill()
}
function figureAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+22*H/24)
  cpx = x+15*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+22*H/24)
  cpx = x+15*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+21*H/24)
  cpx = x+13*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+20*H/24)
  cpx = x+13*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+15*H/24)
  cpx = x+14*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+14*H/24)
  cpx = x+14*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+9*H/24)
  cpx = x+14*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+7*H/24)
  cpx = x+12*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+5*H/24)
  cpx = x+12*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
  cpx = x+12*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+3*H/24)
  cpx = x+10*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+4*H/24)
  cpx = x+10*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+6*H/24)
  cpx = x+8*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+8*H/24)
  cpx = x+8*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+13*H/24)
  cpx = x+8*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+14*H/24)
  cpx = x+9*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+22*H/24)
  cpx = x+12*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  cpx = x+12*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+21*H/24)
  cpx = x+10*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+20*H/24)
  cpx = x+11*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+15*H/24)
  cpx = x+12*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+20*H/24)
  cpx = x+12*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  ctx.closePath()
  ctx.fill()
}

function le_crépusculeAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+13*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+13*H/24)
  cpx = x+9*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+11*H/24)
  cpx = x+15*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+13*H/24)
  ctx.stroke()
  let lw = ctx.lineWidth * 1.2
  let i = 0, j = 0, max = 9
  for (; i < 21; i++) {
    j = 0
    max = (i > 6 && i < 14)?8:11;
    if (/*i === 6 || i === 14 ||*/ i === 7 || i ===13) max = 9
    ctx.lineWidth = lw
    for (; j < max; j++) {
      ctx.beginPath()
      ctx.moveTo(x+(2+i)*W/24, y+(2+j)*H/24)
      ctx.lineTo(x+(2+i)*W/24, y+(3+j)*H/24)
      ctx.stroke()
      ctx.lineWidth *= 0.84
    }
  }
  ctx.lineWidth = lw
     //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+13*H/24)
  //ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+14*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+14*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+13*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+13*H/24)
  ctx.lineTo(x+14*W/24, y+22*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+13*H/24)
  ctx.lineTo(x+16*W/24, y+22*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+13*H/24)
  ctx.lineTo(x+18*W/24, y+22*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+13*H/24)
  ctx.lineTo(x+20*W/24, y+22*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.stroke()

  //10
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+19*H/24)
  ctx.stroke()

  //11
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+17*H/24)
  ctx.stroke()

  //12
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+15.5*H/24)
  ctx.stroke()

  //13
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+13*H/24)
  ctx.lineTo(x+10*W/24, y+22*H/24)
  ctx.stroke()

  //14
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+13*H/24)
  ctx.lineTo(x+8*W/24, y+22*H/24)
  ctx.stroke()

  //15
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+13*H/24)
  ctx.lineTo(x+6*W/24, y+22*H/24)
  ctx.stroke()

  //16
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+13*H/24)
  ctx.lineTo(x+4*W/24, y+22*H/24)
  ctx.stroke()

  //17
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.stroke()

  //18
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+19*H/24)
  ctx.stroke()

  //19
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+17*H/24)
  ctx.stroke()

  //20
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+15.4*H/24)
  ctx.stroke()
}

function pongAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+10*H/24)
  ctx.lineTo(x+2*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+10*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+14*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+14*H/24)
  ctx.stroke()

  let my = 3 + Math.floor(Math.random() * 16)
  //3
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+my*H/24)
  ctx.lineTo(x+4*W/24, y+(my+3)*H/24)
  ctx.stroke()
  my = 3 + Math.floor(Math.random() * 16)
  //4
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+my*H/24)
  ctx.lineTo(x+20*W/24, y+(my+3)*H/24)
  ctx.stroke()

  //5
  ctx.setLineDash([W/32])
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+2*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.stroke()
  ctx.setLineDash([])
  //7
  if (Math.random() > 0.5) {
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+3*H/24)
    ctx.lineTo(x+10*W/24, y+4*H/24)
    ctx.lineTo(x+11*W/24, y+4*H/24)
    ctx.lineTo(x+11*W/24, y+3*H/24)
    ctx.lineTo(x+11*W/24, y+5*H/24)
    ctx.stroke()
  } else {
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+3*H/24)
    ctx.lineTo(x+10*W/24, y+3*H/24)
    ctx.lineTo(x+10*W/24, y+4*H/24)
    ctx.lineTo(x+10*W/24, y+5*H/24)
    ctx.lineTo(x+11*W/24, y+5*H/24)
    ctx.lineTo(x+11*W/24, y+4*H/24)
    ctx.lineTo(x+10*W/24, y+4*H/24)
    ctx.stroke()
  }
  //8 
  if (Math.random() > 0.5) {
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+3*H/24)
    ctx.lineTo(x+15*W/24, y+3*H/24)
    ctx.lineTo(x+15*W/24, y+4*H/24)
    ctx.lineTo(x+16*W/24, y+4*H/24)
    ctx.lineTo(x+16*W/24, y+5*H/24)
    ctx.lineTo(x+15*W/24, y+5*H/24)
    ctx.stroke()
  } else {
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+3*H/24)
    ctx.lineTo(x+16*W/24, y+3*H/24)
    ctx.lineTo(x+16*W/24, y+4*H/24)
    ctx.lineTo(x+15*W/24, y+4*H/24)
    ctx.lineTo(x+16*W/24, y+4*H/24)
    ctx.lineTo(x+16*W/24, y+5*H/24)
    ctx.lineTo(x+15*W/24, y+5*H/24)
    ctx.stroke()
  }
  //6 puck
  ctx.beginPath()
  let mx = 4 + Math.floor(Math.random() * 16)
  my = 5 + Math.floor(Math.random() * 15)
  ctx.fillRect(x+mx*W/24, y+my*H/24,1*W/32+ctx.lineWidth/2,1*H/32+ctx.lineWidth/2)
  //1 zero
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+3*H/24)
  ctx.lineTo(x+14*W/24, y+3*H/24)
  ctx.lineTo(x+14*W/24, y+5*H/24)
  ctx.lineTo(x+13*W/24, y+5*H/24)
  ctx.lineTo(x+13*W/24, y+3*H/24)
  ctx.stroke()

  //2 zero
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+3*H/24)
  ctx.lineTo(x+8*W/24, y+5*H/24)
  ctx.lineTo(x+9*W/24, y+5*H/24)
  ctx.lineTo(x+9*W/24, y+3*H/24)
  ctx.lineTo(x+8*W/24, y+3*H/24)
  ctx.stroke()
}

function meanAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+1*W/24, y+18*H/24)
  cpx = x+4*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+14*H/24)
  cpx = x+9*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+6*H/24)
  cpx = x+15*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+14*H/24)
  cpx = x+20*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+18*H/24)
  ctx.stroke()

  ctx.setLineDash([W/32])
  //3
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+6*H/24)
  ctx.lineTo(x+12*W/24, y+18*H/24)
  ctx.stroke()
  ctx.setLineDash([])

  //5
  ctx.beginPath()
  ctx.moveTo(x+11.3*W/24, y+3*H/24)
  ctx.lineTo(x+12.7*W/24, y+5*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+5*H/24)
  ctx.lineTo(x+13*W/24, y+3*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+11.3*W/24, y+2.3*H/24)
  ctx.lineTo(x+13*W/24, y+2.3*H/24)
  ctx.stroke()
}

function quantum_tunnellingAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+18*H/24)
  cpx = x+7*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+10*H/24)
  cpx = x+9*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+6*H/24)
  cpx = x+18*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+12*H/24)
  cpx = x+16*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+18*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+13*H/24)
  cpx = x+4.7*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+12*H/24)
  cpx = x+5*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+11*H/24)
  cpx = x+3.3*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+12*H/24)
  cpx = x+3*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+13*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+20.4*W/24, y+13*H/24)
  cpx = x+21.1*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21.4*W/24, y+12*H/24)
  cpx = x+21.4*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20.4*W/24, y+11*H/24)
  cpx = x+19.7*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19.4*W/24, y+12*H/24)
  cpx = x+19.4*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20.4*W/24, y+13*H/24)
  ctx.stroke()
  ctx.setLineDash([4*W/96])
  //4
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+12*H/24)
  ctx.lineTo(x+18.8*W/24, y+12*H/24)
  ctx.stroke()
  ctx.setLineDash([])
  
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+11*H/24)
  ctx.lineTo(x+18.8*W/24, y+12*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+13*H/24)
  ctx.lineTo(x+18.8*W/24, y+12*H/24)
  ctx.stroke()
}

function mona_lisaAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+13*H/24)
  cpx = x+14*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+8*H/24)
  cpx = x+14*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+4*H/24)
  cpx = x+8*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+8*H/24)
  cpx = x+8*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+13*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+23*H/24)
  cpx = x+22*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+17*H/24)
  cpx = x+18*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+9*H/24)
  cpx = x+16*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+3*H/24)
  cpx = x+9*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+7*H/24)
  cpx = x+7*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+13*H/24)
  cpx = x+8*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+17*H/24)
  cpx = x+4*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+23*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+18*H/24)
  cpx = x+15*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+13*H/24)
  cpx = x+14*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+7*H/24)
  cpx = x+12*W/24
  cpy = y+4*H/24
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+13*H/24)
  cpx = x+11*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+15*H/24)
  cpx = x+9*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+18*H/24)
  cpx = x+8*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+20*H/24)
  cpx = x+13*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+19*H/24)
  cpx = x+15*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+16*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+22*H/24)
  cpx = x+15*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+18*H/24)
  cpx = x+19*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+19*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+18*H/24)
  cpx = x+17*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+16*H/24)
  ctx.stroke()

  //7 left eye
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+8*H/24)
  cpx = x+10*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+8*H/24)
  ctx.stroke()
  //12 right eye
  ctx.beginPath()
  ctx.moveTo(x+11.5*W/24, y+8*H/24)
  cpx = x+12*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+8*H/24)
  ctx.stroke()
  //8 smile
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+11*H/24)
  cpx = x+11*W/24
  cpy = y+11.33*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+11*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+0*W/24, y+9*H/24)
  cpx = x+0*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+7*H/24)
  cpx = x+4*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+8*H/24)
  cpx = x+6*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+9*H/24)
  ctx.stroke()
  //10
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+9*H/24)
  cpx = x+21*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+9*H/24)
  cpx = x+24*W/24
  cpy = y+10*H/24
  ctx.stroke()

  //11
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+17*H/24)
  cpx = x+22*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+24*W/24, y+19*H/24)
  ctx.stroke()

  //13
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+20*H/24)
  cpx = x+6*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+23*H/24)
  ctx.stroke()

   //14
   ctx.beginPath()
   ctx.moveTo(x+16*W/24, y+23*H/24)
   cpx = x+17*W/24
   cpy = y+21*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+21*H/24)
   ctx.stroke()
 
   //15
   ctx.beginPath()
   ctx.moveTo(x+6*W/24, y+13*H/24)
   cpx = x+3*W/24
   cpy = y+14*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+15*H/24)
   ctx.stroke()
 
   //16
   ctx.beginPath()
   ctx.moveTo(x+2*W/24, y+16*H/24)
   cpx = x+2*W/24
   cpy = y+18*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+18*H/24)
   cpx = x+4*W/24
   cpy = y+19*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+19*H/24)
   cpx = x+2*W/24
   cpy = y+20*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+21*H/24)
   cpx = x+3*W/24
   cpy = y+21*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+21*H/24)
   ctx.stroke()
 
   //17
   ctx.beginPath()
   ctx.moveTo(x+19*W/24, y+14*H/24)
   cpx = x+21*W/24
   cpy = y+14*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+14*H/24)
   ctx.stroke()
 
   //18
   ctx.beginPath()
   ctx.moveTo(x+17*W/24, y+7*H/24)
   cpx = x+18*W/24
   cpy = y+6*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+7*H/24)
   cpx = x+20*W/24
   cpy = y+8*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+8*H/24)
   ctx.stroke()
 
   //19
   ctx.beginPath()
   ctx.moveTo(x+1*W/24, y+10*H/24)
   cpx = x+2*W/24
   cpy = y+10*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+11*H/24)
   ctx.stroke()
}

function divide_by_zeroAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
    //1
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+12*H/24)
    ctx.lineTo(x+17*W/24, y+12*H/24)
    ctx.stroke()
    //2
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+4*H/24)
    ctx.lineTo(x+12*W/24, y+2*H/24)
    ctx.lineTo(x+12*W/24, y+11*H/24)
    ctx.lineTo(x+10*W/24, y+11*H/24)
    ctx.lineTo(x+14*W/24, y+11*H/24)
    ctx.stroke()
    //3
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+22*H/24)
    cpx = x+15*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+17*H/24)
    cpx = x+15*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+13*H/24)
    cpx = x+9*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+18*H/24)
    cpx = x+9*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
    ctx.stroke()
}

function your_pointy_elbowsAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //3
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+3*H/24)
  cpx = x+15*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+12*H/24)
  cpx = x+9*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+17*H/24)
  cpx = x+16*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+19*H/24)
  cpx = x+20*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+18*H/24)
  cpx = x+23*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+16*H/24)
  cpx = x+20*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  cpx = x+21*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+8*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+13*H/24)
  ctx.lineTo(x+17*W/24, y+11*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+23*H/24)
  cpx = x+14*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+17*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+14*H/24)
  ctx.lineTo(x+3*W/24, y+15*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+12*H/24)
  ctx.lineTo(x+2*W/24, y+12*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+10*H/24)
  ctx.lineTo(x+3*W/24, y+9*H/24)
  ctx.stroke()
}

function workAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "miter"
  
  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+1*H/24)
  ctx.lineTo(x+2*W/24, y+5*H/24)
  ctx.lineTo(x+15*W/24, y+5*H/24)
  ctx.lineTo(x+15*W/24, y+1*H/24)
  ctx.lineTo(x+2*W/24, y+1*H/24)
  ctx.stroke()
  let fs = W/14
  ctx.font = "200 "+(fs)+"pt Calibri" 
  ctx.fillText(" Calibri", x+2.2*W/24, y+fs+1*H/12) 
  ctx.fillText(" 11", x+16.7*W/24, y+fs+1*H/12) 
  //2
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+1*H/24)
  ctx.lineTo(x+17*W/24, y+5*H/24)
  ctx.lineTo(x+22*W/24, y+5*H/24)
  ctx.lineTo(x+22*W/24, y+1*H/24)
  ctx.lineTo(x+17*W/24, y+1*H/24)
  ctx.stroke()
  //3
  ctx.beginPath()
  ctx.moveTo(x+13.5*W/24, y+3*H/24)
  ctx.lineTo(x+14*W/24, y+3.5*H/24)
  ctx.lineTo(x+14.5*W/24, y+3*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+20.5*W/24, y+3*H/24)
  ctx.lineTo(x+21*W/24, y+3.5*H/24)
  ctx.lineTo(x+21.5*W/24, y+3*H/24)
  ctx.stroke()
  
  ctx.lineWidth *= 2.4
  //5
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+7*H/24)
  ctx.lineTo(x+3*W/24, y+11*H/24)
  ctx.lineTo(x+4*W/24, y+11*H/24)
  cpx = x+5*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+10*H/24)
  cpx = x+5*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+9*H/24)
  cpx = x+3*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+9*H/24)
  cpx = x+4*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+9*H/24)
  cpx = x+5*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+8*H/24)
  cpx = x+5*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+7*H/24)
  cpx = x+3*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+7*H/24)
  ctx.stroke()
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  //6
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+11*H/24)
  ctx.lineTo(x+8*W/24, y+11*H/24)
  ctx.lineTo(x+9*W/24, y+7*H/24)
  ctx.lineTo(x+10*W/24, y+7*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+7*H/24)
  ctx.lineTo(x+9*W/24, y+7*H/24)
  ctx.stroke()
  //8
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+11*H/24)
  ctx.lineTo(x+8*W/24, y+11*H/24)
  ctx.stroke()
  //9
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+7*H/24)
  ctx.lineTo(x+12*W/24, y+9*H/24)
  cpx = x+12*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+10*H/24)
  cpx = x+14*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+9*H/24)
  ctx.lineTo(x+14*W/24, y+7*H/24)
  ctx.stroke()
  //10
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+11*H/24)
  ctx.lineTo(x+14*W/24, y+11*H/24)
  ctx.stroke()
  //11 pips
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+7*H/24)
  ctx.lineTo(x+17.5*W/24, y+6.5*H/24)
  ctx.lineTo(x+18*W/24, y+7*H/24)
  ctx.lineTo(x+17.5*W/24, y+7.5*H/24)
  ctx.closePath()
  ctx.fill()
  //12
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+9*H/24)
  ctx.lineTo(x+17.5*W/24, y+8.5*H/24)
  ctx.lineTo(x+18*W/24, y+9*H/24)
  ctx.lineTo(x+17.5*W/24, y+9.5*H/24)
  ctx.closePath()
  ctx.fill()
  //13
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+11*H/24)
  ctx.lineTo(x+17.5*W/24, y+10.5*H/24)
  ctx.lineTo(x+18*W/24, y+11*H/24)
  ctx.lineTo(x+17.5*W/24, y+11.5*H/24)
  ctx.closePath()
  ctx.fill()
  //14
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+7*H/24)
  ctx.lineTo(x+22*W/24, y+7*H/24)
  ctx.stroke()
  //15
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+9*H/24)
  ctx.lineTo(x+22*W/24, y+9*H/24)
  ctx.stroke()
  //16
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+11*H/24)
  ctx.lineTo(x+22*W/24, y+11*H/24)
  ctx.stroke()
  //17
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+13*H/24)
  ctx.lineTo(x+6*W/24, y+13*H/24)
  ctx.stroke()
  //18
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+14*H/24)
  ctx.lineTo(x+4*W/24, y+14*H/24)
  ctx.stroke()
  //19
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+15*H/24)
  ctx.lineTo(x+6*W/24, y+15*H/24)
  ctx.stroke()
  //20
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+16*H/24)
  ctx.lineTo(x+4*W/24, y+16*H/24)
  ctx.stroke()
  //21
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+17*H/24)
  ctx.lineTo(x+6*W/24, y+17*H/24)
  ctx.stroke()
  //22
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+13*H/24)
  ctx.lineTo(x+13*W/24, y+13*H/24)
  ctx.stroke()
  //23
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+14*H/24)
  ctx.lineTo(x+12*W/24, y+14*H/24)
  ctx.stroke()
  //24
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+15*H/24)
  ctx.lineTo(x+13*W/24, y+15*H/24)
  ctx.stroke()

  //25
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+16*H/24)
  ctx.lineTo(x+12*W/24, y+16*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+17*H/24)
  ctx.lineTo(x+13*W/24, y+17*H/24)
  ctx.stroke()
  //27
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+13*H/24)
  ctx.lineTo(x+20*W/24, y+13*H/24)
  ctx.stroke()
  //28
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+14*H/24)
  ctx.lineTo(x+20*W/24, y+14*H/24)
  ctx.stroke()
  //29
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+15*H/24)
  ctx.lineTo(x+20*W/24, y+15*H/24)
  ctx.stroke()
  //30
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+16*H/24)
  ctx.lineTo(x+20*W/24, y+16*H/24)
  ctx.stroke()
  //31
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+17*H/24)
  ctx.lineTo(x+20*W/24, y+17*H/24)
  ctx.stroke()
  //32
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+23*H/24)
  ctx.lineTo(x+6*W/24, y+23*H/24)
  ctx.lineTo(x+6*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.stroke()
  ctx.closePath()
  ctx.fill()
  //33
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+21*H/24)
  ctx.lineTo(x+4*W/24, y+18*H/24)
  ctx.lineTo(x+6*W/24, y+21*H/24)
  ctx.stroke()
  //34
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+20*H/24)
  ctx.lineTo(x+5*W/24, y+20*H/24)
  ctx.stroke()

  //35
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+22*H/24)
  ctx.lineTo(x+11*W/24, y+19*H/24)
  ctx.lineTo(x+13*W/24, y+22*H/24)
  ctx.stroke()
  //36
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+21*H/24)
  ctx.lineTo(x+12*W/24, y+21*H/24)
  ctx.stroke()
  //37
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+19.5*H/24)
  ctx.lineTo(x+14*W/24, y+19.5*H/24)
  ctx.lineTo(x+13.5*W/24, y+19*H/24)
  ctx.closePath()
  ctx.fill()
  //38
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+22*H/24)
  ctx.lineTo(x+17*W/24, y+20*H/24)
  ctx.lineTo(x+18*W/24, y+22*H/24)
  ctx.stroke()
  //39
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+19*H/24)
  ctx.lineTo(x+20*W/24, y+19*H/24)
  ctx.lineTo(x+19.5*W/24, y+19.5*H/24)
  ctx.closePath()
  ctx.fill()
  //40
  ctx.beginPath()
  ctx.moveTo(x+16.5*W/24, y+21*H/24)
  ctx.lineTo(x+17.5*W/24, y+21*H/24)
  ctx.stroke()
}

function car_keyAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+11*H/24)
  cpx = x+12*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+11*H/24)
  cpx = x+12*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+11*H/24)
  cpx = x+15*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+11*H/24)
  cpx = x+17*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+11*H/24)
  cpx = x+18*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+12*H/24)
  cpx = x+19*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+11*H/24)
  cpx = x+21*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+12*H/24)
  ctx.stroke()
  //3
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+10*H/24)
  cpx = x+10*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+7*H/24)
  cpx = x+10*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+6*H/24)
  cpx = x+2*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+7*H/24)
  cpx = x+2*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+15*H/24)
  cpx = x+2*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+16*H/24)
  cpx = x+10*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+15*H/24)
  cpx = x+10*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+13*H/24)
  cpx = x+5*W/24
  cpy = y+10*H/24
  ctx.stroke()
  //5
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+14*H/24)
  cpx = x+9*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+12*H/24)
  cpx = x+9*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+10*H/24)
  cpx = x+5*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+12*H/24)
  cpx = x+5*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+14*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+13*H/24)
  cpx = x+21*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+13*H/24)
  cpx = x+22*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+12*H/24)
  cpx = x+22*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+11*H/24)
  cpx = x+22*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+10*H/24)
  cpx = x+10*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
  ctx.stroke()
  //7
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+10*H/24)
  ctx.lineTo(x+10*W/24, y+13*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+10*H/24)
  cpx = x+5*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+9*H/24)
  cpx = x+5*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+8*H/24)
  cpx = x+3*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+9*H/24)
  cpx = x+3*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+10*H/24)
  ctx.stroke()
}

function doll_houseAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  x+22*W/24, y+22*H/24
  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+20*H/24)
  ctx.lineTo(x+22*W/24, y+20*H/24)
  ctx.lineTo(x+22*W/24, y+8*H/24)
  ctx.lineTo(x+20*W/24, y+2*H/24)
  ctx.lineTo(x+19*W/24, y+2*H/24)
 // ctx.lineTo(x+4*W/24, y+2*H/24)
 // ctx.lineTo(x+2*W/24, y+8*H/24)
 // ctx.lineTo(x+2*W/24, y+20*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+2*H/24)
  ctx.lineTo(x+4*W/24, y+2*H/24)
  ctx.lineTo(x+2*W/24, y+8*H/24)
  ctx.lineTo(x+2*W/24, y+20*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+8*H/24)
  ctx.lineTo(x+22*W/24, y+8*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+14*H/24)
  ctx.lineTo(x+22*W/24, y+14*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+20*H/24)
  ctx.lineTo(x+8*W/24, y+8*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+20*H/24)
  ctx.lineTo(x+16*W/24, y+8*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+20*H/24)
  ctx.lineTo(x+12*W/24, y+14*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+20*H/24)
  ctx.lineTo(x+14*W/24, y+14*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+14*H/24)
  ctx.lineTo(x+4*W/24, y+12*H/24)
  ctx.lineTo(x+8*W/24, y+12*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+12*H/24)
  ctx.lineTo(x+4*W/24, y+8*H/24)
  ctx.stroke()

  //10
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+14*H/24)
  ctx.lineTo(x+4*W/24, y+18*H/24)
  ctx.lineTo(x+8*W/24, y+18*H/24)
  ctx.stroke()

  //11
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+20*H/24)
  ctx.lineTo(x+4*W/24, y+18*H/24)
  ctx.stroke()

  //12
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+18*H/24)
  ctx.lineTo(x+20*W/24, y+14*H/24)
  ctx.stroke()

  //13
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+18*H/24)
  ctx.lineTo(x+20*W/24, y+18*H/24)
  ctx.lineTo(x+22*W/24, y+20*H/24)
  ctx.stroke()

  //14
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+12*H/24)
  ctx.lineTo(x+20*W/24, y+12*H/24)
  ctx.lineTo(x+22*W/24, y+14*H/24)
  ctx.stroke()

  //15
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+8*H/24)
  ctx.lineTo(x+20*W/24, y+11*H/24)
  ctx.lineTo(x+20*W/24, y+12*H/24)
  ctx.stroke()

  //16
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+20*H/24)
  ctx.lineTo(x+10*W/24, y+18*H/24)
  ctx.lineTo(x+10*W/24, y+14*H/24)
  ctx.stroke()

  //17
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+20*H/24)
  ctx.lineTo(x+14*W/24, y+18*H/24)
  ctx.stroke()

  //18
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+14*H/24)
  ctx.lineTo(x+10*W/24, y+12*H/24)
  ctx.lineTo(x+10*W/24, y+8*H/24)
  ctx.stroke()

  //19
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+14*H/24)
  ctx.lineTo(x+14*W/24, y+12*H/24)
  ctx.lineTo(x+14*W/24, y+8*H/24)
  ctx.stroke()

  //20
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+19*H/24)
  ctx.lineTo(x+14*W/24, y+19*H/24)
  ctx.lineTo(x+14*W/24, y+18*H/24)
  ctx.lineTo(x+12*W/24, y+18*H/24)
  ctx.lineTo(x+12*W/24, y+17*H/24)
  ctx.lineTo(x+14*W/24, y+17*H/24)
  ctx.lineTo(x+14*W/24, y+16*H/24)
  ctx.lineTo(x+12*W/24, y+16*H/24)
  ctx.lineTo(x+12*W/24, y+15*H/24)
  ctx.lineTo(x+14*W/24, y+15*H/24)
  ctx.stroke()

  //21
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+8*H/24)
  ctx.lineTo(x+5*W/24, y+10*H/24)
  ctx.lineTo(x+7*W/24, y+10*H/24)
  ctx.lineTo(x+7*W/24, y+8*H/24)
  ctx.stroke()

  //22
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+14*H/24)
  ctx.lineTo(x+17*W/24, y+16*H/24)
  ctx.lineTo(x+19*W/24, y+16*H/24)
  ctx.lineTo(x+19*W/24, y+14*H/24)
  ctx.stroke()

  //23
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+8*H/24)
  ctx.lineTo(x+17*W/24, y+10*H/24)
  ctx.lineTo(x+19*W/24, y+10*H/24)
  ctx.lineTo(x+19*W/24, y+8*H/24)
  ctx.stroke()

  //24
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+14*H/24)
  ctx.lineTo(x+5*W/24, y+16*H/24)
  ctx.lineTo(x+7*W/24, y+16*H/24)
  ctx.lineTo(x+7*W/24, y+14*H/24)
  ctx.stroke()

  //25
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+8*H/24)
  ctx.lineTo(x+11*W/24, y+10*H/24)
  ctx.lineTo(x+13*W/24, y+10*H/24)
  ctx.lineTo(x+13*W/24, y+8*H/24)
  ctx.stroke()

  //26
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+12*H/24)
  ctx.lineTo(x+14*W/24, y+12*H/24)
  ctx.stroke()

  //27
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+18*H/24)
  ctx.lineTo(x+12*W/24, y+18*H/24)
  ctx.stroke()

  //28
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+6*H/24)
  ctx.lineTo(x+19*W/24, y+6*H/24)
  ctx.lineTo(x+19*W/24, y+1*H/24)
  ctx.lineTo(x+17*W/24, y+1*H/24)
  ctx.lineTo(x+17*W/24, y+6*H/24)
  ctx.stroke()
}

function game_pieceAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  //1
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+22*H/24)
  cpx = x+19*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+21*H/24)
  cpx = x+19*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+20*H/24)
  cpx = x+12*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+7*H/24)
  cpx = x+13*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+6*H/24)
  cpx = x+15*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+4*H/24)
  cpx = x+15*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+9*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+4*H/24)
  cpx = x+9*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+6*H/24)
  cpx = x+12*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+20*H/24)
  cpx = x+5*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+21*H/24)
  cpx = x+5*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+22*H/24)
  cpx = x+18*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+22*H/24)
  ctx.stroke()
}

function gameAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+2*H/24)
  ctx.lineTo(x+2*W/24, y+2*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+15*H/24)
  ctx.lineTo(x+22*W/24, y+15*H/24)
  ctx.stroke()
  //3
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+9*H/24)
  ctx.lineTo(x+2*W/24, y+9*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+2*H/24)
  ctx.lineTo(x+9*W/24, y+22*H/24)
  ctx.stroke()
  //5
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+22*H/24)
  ctx.lineTo(x+15*W/24, y+2*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+9*H/24)
  ctx.lineTo(x+3*W/24, y+15*H/24)
  ctx.stroke()
  //7
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+9*H/24)
  ctx.lineTo(x+4*W/24, y+15*H/24)
  ctx.stroke()
  //8
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+9*H/24)
  ctx.lineTo(x+5*W/24, y+15*H/24)
  ctx.stroke()
  //9
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+9*H/24)
  ctx.lineTo(x+6*W/24, y+15*H/24)
  ctx.stroke()
  //10
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+9*H/24)
  ctx.lineTo(x+7*W/24, y+15*H/24)
  ctx.stroke()
  //11
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+9*H/24)
  ctx.lineTo(x+8*W/24, y+15*H/24)
  ctx.stroke()
  //12
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+9*H/24)
  ctx.lineTo(x+16*W/24, y+15*H/24)
  ctx.stroke()
  //13
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+9*H/24)
  ctx.lineTo(x+17*W/24, y+15*H/24)
  ctx.stroke()
  //14
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+9*H/24)
  ctx.lineTo(x+18*W/24, y+15*H/24)
  ctx.stroke()
  //15
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+9*H/24)
  ctx.lineTo(x+19*W/24, y+14*H/24)
  ctx.lineTo(x+19*W/24, y+15*H/24)
  ctx.stroke()
  //16
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+9*H/24)
  ctx.lineTo(x+20*W/24, y+15*H/24)
  ctx.stroke()
  //17
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+9*H/24)
  ctx.lineTo(x+21*W/24, y+15*H/24)
  ctx.stroke()
  //18
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+8*H/24)
  ctx.lineTo(x+15*W/24, y+8*H/24)
  ctx.stroke()
  //19
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+7*H/24)
  ctx.lineTo(x+15*W/24, y+7*H/24)
  ctx.stroke()
  //20
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+6*H/24)
  ctx.lineTo(x+15*W/24, y+6*H/24)
  ctx.stroke()
  //21
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+5*H/24)
  ctx.lineTo(x+15*W/24, y+5*H/24)
  ctx.stroke()
  //22
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+4*H/24)
  ctx.lineTo(x+15*W/24, y+4*H/24)
  ctx.stroke()
  //23
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+3*H/24)
  ctx.lineTo(x+15*W/24, y+3*H/24)
  ctx.stroke()
  //24
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+16*H/24)
  ctx.lineTo(x+15*W/24, y+16*H/24)
  ctx.stroke()
  //25
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+17*H/24)
  ctx.lineTo(x+15*W/24, y+17*H/24)
  ctx.stroke()
  //26
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+18*H/24)
  ctx.lineTo(x+15*W/24, y+18*H/24)
  ctx.stroke()
  //27
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+19*H/24)
  ctx.lineTo(x+15*W/24, y+19*H/24)
  ctx.stroke()
  //28
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+20*H/24)
  ctx.lineTo(x+15*W/24, y+20*H/24)
  ctx.stroke()
  //29
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+21*H/24)
  ctx.lineTo(x+15*W/24, y+21*H/24)
  ctx.stroke()
  //center
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+12*H/24)
  cpx = x+12*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+15*H/24)
  cpx = x+9*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  cpx = x+15*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+9*H/24)
  cpx = x+12*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  cpx = x+12*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+15*H/24)
  cpx = x+15*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  cpx = x+9*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+9*H/24)
  cpx = x+12*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  ctx.stroke()
// hptz dots
  let r = W/48 //- ctx.lineWidth/2
  //30
  ctx.beginPath()
  ctx.arc(x+2.5*W/24, y+12*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  //31
  ctx.beginPath()
  ctx.arc(x+6.5*W/24, y+11*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  //32
  ctx.beginPath()
  ctx.arc(x+6.5*W/24, y+13*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  //33
  ctx.beginPath()
  ctx.arc(x+17.5*W/24, y+11*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  //34
  ctx.beginPath()
  ctx.arc(x+17.5*W/24, y+13*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  //35
  ctx.beginPath()
  ctx.arc(x+21.5*W/24, y+12*H/24, r, 0, Math.PI*2)
  ctx.stroke()
// vertical
  //36
  ctx.beginPath()
  ctx.arc(x+12*W/24, y+2.5*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  //37
  ctx.beginPath()
  ctx.arc(x+11*W/24, y+6.5*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  //38
  ctx.beginPath()
  ctx.arc(x+13*W/24, y+6.5*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  //39
  ctx.beginPath()
  ctx.arc(x+11*W/24, y+17.5*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  //40
  ctx.beginPath()
  ctx.arc(x+13*W/24, y+17.5*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  //41
  ctx.beginPath()
  ctx.arc(x+12*W/24, y+21.5*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  // corner circs
  r = 3.5 * W/24 - ctx.lineWidth
  x+= W/48, y += H/48
    //42
  ctx.beginPath()
  ctx.arc(x+5*W/24, y+5*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  //43
  ctx.beginPath()
  ctx.arc(x+18*W/24, y+5*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  //44
  ctx.beginPath()
  ctx.arc(x+5*W/24, y+18*H/24, r, 0, Math.PI*2)
  ctx.stroke()
  //45
  ctx.beginPath()
  ctx.arc(x+18*W/24, y+18*H/24, r, 0, Math.PI*2)
  ctx.stroke()
}

function pixelAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2 + W/48, cy = y+H/2 + H/48, angle = pet(180)
  //1
  ctx.beginPath()
  p = rotatePoint(x+11*W/24, y+11*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+11*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+12*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+12*W/24, y+11*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+11*W/24, y+11*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.fill()
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
  //1
  //7
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+5*H/24)
  cpx = x+12*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+3*H/24)
  cpx = x+22*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+10*H/24)
  cpx = x+21*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+22*H/24)
  cpx = x+13*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+21*H/24)
  cpx = x+11*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+22*H/24)
  cpx = x+3*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+10*H/24)
  cpx = x+2*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+3*H/24)
  cpx = x+12*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+5*H/24)
  cpx = x+12*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+1*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+12*H/24)
  cpx = x+10*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+14*H/24)
  cpx = x+10*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+15*H/24)
  cpx = x+12*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+12*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+12*H/24)
  cpx = x+14*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+14*H/24)
  cpx = x+14*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+15*H/24)
  cpx = x+12*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+12*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+6*H/24)
  ctx.lineTo(x+12*W/24, y+20*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+3*H/24)
  cpx = x+12*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+3*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+1*H/24)
  cpx = x+14*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+1*H/24)
  cpx = x+12*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+5*H/24)
  ctx.stroke()
}

function wd () {
  let ws = 0, ws2 = 0
  let apik = "3045dd712ffe6e702e3245525ac7fa38"
  fetch('https://api.openweathermap.org/data/2.5/weather?q=mattapoisett&units=imperial&appid='+apik)
    .then(res => res.json())
    .then(data => {
      ws = data['wind']['deg']
      ws2 = data['wind']['speed']
      WD = ws
      WS = Math.round(ws2)+ " mph"
    })
    .catch(err => alert(err))
}

function windAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, angle = 0
  //1
  ctx.beginPath()
  p = rotatePoint(x+10*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+12*W/24
  cpy = y+4*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+1*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+12*W/24
  cpy = y+4*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+4*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+13*W/24
  cpy = y+1*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+1*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()
  //1
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+23*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+12*W/24, y+22*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()
  //2
  ctx.beginPath()
  p = rotatePoint(x+1*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+2*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()
  //3
  ctx.beginPath()
  p = rotatePoint(x+22*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+21*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()
  
  let speed = WS
  let face = "Garamond"
  ctx.font = "100 italic "+(W/12)+"pt " + face
  let width = ctx.measureText(speed).width
  ctx.fillText(speed, x+W/2-width/2, y+2*H/3)
  angle = WD//pet(360)
  //1
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+13*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+13*W/24
  cpy = y+13*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+13*W/24, y+12*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+13*W/24
  cpy = y+11*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+11*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+11*W/24
  cpy = y+11*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+11*W/24, y+12*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+11*W/24
  cpy = y+13*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+13*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()
  //2
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+11*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+12*W/24
  cpy = y+4*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+4*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+12*W/24
  cpy = y+6*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+13*W/24, y+6*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+12*W/24
  cpy = y+6*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+4*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+12*W/24
  cpy = y+6*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+11*W/24, y+6*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()
  //3
  ctx.beginPath()
  p = rotatePoint(x+11*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+12*W/24
  cpy = y+20*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+18*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+12*W/24
  cpy = y+20*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+13*W/24, y+20*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()
  //4
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+12*W/24
  cpy = y+13*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+13*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()
}

function mr_coffeeAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors =getCurrentPalette()
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2
  //1
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+8*H/24)
  ctx.lineTo(x+17*W/24, y+8*H/24)
  ctx.lineTo(x+19*W/24, y+2*H/24)
  ctx.lineTo(x+2*W/24, y+2*H/24)
  ctx.lineTo(x+4*W/24, y+10*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+20*W/24, y+22*H/24)
  ctx.lineTo(x+19*W/24, y+19*H/24)
  ctx.lineTo(x+6*W/24, y+19*H/24)
  ctx.lineTo(x+7*W/24, y+11*H/24)
  ctx.lineTo(x+6*W/24, y+8*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+19*H/24)
  ctx.lineTo(x+19*W/24, y+19*H/24)
  ctx.lineTo(x+20*W/24, y+22*H/24)
  ctx.lineTo(x+18*W/24, y+22*H/24)
  ctx.stroke()
  //5
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+11*H/24)
  ctx.lineTo(x+16*W/24, y+11*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+13*H/24)
  ctx.lineTo(x+16*W/24, y+13*H/24)
  ctx.stroke()
  //7
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+15*H/24)
  ctx.lineTo(x+16*W/24, y+15*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+6*H/24)
  cpx = x+16*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+5*H/24)
  cpx = x+16*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+4*H/24)
  cpx = x+14*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+5*H/24)
  cpx = x+14*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+6*H/24)
  ctx.stroke()
  //1
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+9*H/24)
  cpx = x+19*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+9*H/24)
  cpx = x+20*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+10*H/24)
  cpx = x+21*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+15*H/24)
  cpx = x+21*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+16*H/24)
  cpx = x+18*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+16*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+18*H/24)
  ctx.lineTo(x+17*W/24, y+9*H/24)
  ctx.lineTo(x+7.25*W/24, y+9*H/24)
  ctx.lineTo(x+8*W/24, y+11*H/24)
  ctx.lineTo(x+7*W/24, y+18*H/24)
  ctx.lineTo(x+18*W/24, y+18*H/24)
  ctx.stroke()
}

function shade_birdAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, angle = pet(180)

  //1
  ctx.beginPath()
  p = rotatePoint(x+1*W/24, y+24*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+1*W/24
  cpy = y+10*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+4*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+14*W/24
  cpy = y+0*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+0*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+15*W/24
  cpy = y+3*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+15*W/24, y+4*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+23*W/24
  cpy = y+6*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+23*W/24, y+24*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+17*W/24
  cpy = y+21*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+13*W/24, y+14*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+15*W/24
  cpy = y+21*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+17*W/24, y+23*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+13*W/24
  cpy = y+24*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+10*W/24, y+24*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+11*W/24
  cpy = y+20*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+11*W/24, y+13*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+9*W/24
  cpy = y+20*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+1*W/24, y+24*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()
  ctx.fillStyle = colors[0]
  //2
  ctx.beginPath()
  p = rotatePoint(x+1*W/24, y+24*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+5*W/24
  cpy = y+14*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+11*W/24, y+13*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+9*W/24
  cpy = y+20*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+1*W/24, y+24*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()

  //3
  ctx.beginPath()
  p = rotatePoint(x+13*W/24, y+14*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+20*W/24
  cpy = y+15*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+23*W/24, y+24*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+17*W/24
  cpy = y+21*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+13*W/24, y+14*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()

  //4
  ctx.beginPath()
  p = rotatePoint(x+14*W/24, y+0*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+14*W/24
  cpy = y+4*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+15*W/24, y+4*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()

  //5
  ctx.beginPath()
  p = rotatePoint(x+10*W/24, y+24*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+13*W/24
  cpy = y+24*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+17*W/24, y+23*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+15*W/24
  cpy = y+21*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+13*W/24, y+14*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+14*W/24
  cpy = y+21*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+10*W/24, y+24*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()
}

function plantaAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, angle = pet(180)

  //1
  ctx.beginPath()
  p = rotatePoint(x+11*W/24, y+24*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+11*W/24, y+15*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  cpx = x+4*W/24
  cpy = y+15*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+4*W/24, y+8*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+9*W/24
  cpy = y+7*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+11*W/24, y+14*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+7*W/24
  cpy = y+5*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+13*W/24, y+0*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+18*W/24
  cpy = y+7*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+14*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+17*W/24
  cpy = y+8*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+21*W/24, y+13*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+17*W/24
  cpy = y+16*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+15*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+12*W/24
  cpy = y+24*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+24*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()
}

function blast_radiusAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.setLineDash([1,12])
  ctx.beginPath()
  ctx.arc(x+24*W/24, y+12*H/24, W/2.2, Math.PI/2, Math.PI *1.5)
  ctx.stroke()
  ctx.setLineDash([])
  //4
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+23*H/24)
  ctx.lineTo(x+14*W/24, y+22*H/24)
  ctx.lineTo(x+15*W/24, y+22*H/24)
  ctx.lineTo(x+14*W/24, y+20*H/24)
  ctx.lineTo(x+13*W/24, y+22*H/24)
  ctx.lineTo(x+14*W/24, y+22*H/24)
  ctx.stroke()
  //5
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+16*H/24)
  ctx.lineTo(x+11*W/24, y+15*H/24)
  ctx.lineTo(x+12*W/24, y+15*H/24)
  ctx.lineTo(x+11*W/24, y+13*H/24)
  ctx.lineTo(x+10*W/24, y+15*H/24)
  ctx.lineTo(x+11*W/24, y+15*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+8*H/24)
  ctx.lineTo(x+12*W/24, y+7*H/24)
  ctx.lineTo(x+13*W/24, y+7*H/24)
  ctx.lineTo(x+12*W/24, y+5*H/24)
  ctx.lineTo(x+11*W/24, y+7*H/24)
  ctx.lineTo(x+12*W/24, y+7*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+4*H/24)
  ctx.lineTo(x+15*W/24, y+3*H/24)
  ctx.lineTo(x+16*W/24, y+3*H/24)
  ctx.lineTo(x+15*W/24, y+1*H/24)
  ctx.lineTo(x+14*W/24, y+3*H/24)
  ctx.lineTo(x+15*W/24, y+3*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+21*H/24)
  ctx.lineTo(x+11*W/24, y+20*H/24)
  ctx.lineTo(x+12*W/24, y+20*H/24)
  ctx.lineTo(x+11*W/24, y+18*H/24)
  ctx.lineTo(x+10*W/24, y+20*H/24)
  ctx.lineTo(x+11*W/24, y+20*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+11*H/24)
  ctx.lineTo(x+10*W/24, y+10*H/24)
  ctx.lineTo(x+11*W/24, y+10*H/24)
  ctx.lineTo(x+10*W/24, y+8*H/24)
  ctx.lineTo(x+9*W/24, y+10*H/24)
  ctx.lineTo(x+10*W/24, y+10*H/24)
  ctx.stroke()

  //10
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+5*H/24)
  ctx.lineTo(x+10*W/24, y+4*H/24)
  ctx.lineTo(x+11*W/24, y+4*H/24)
  ctx.lineTo(x+10*W/24, y+2*H/24)
  ctx.lineTo(x+9*W/24, y+4*H/24)
  ctx.lineTo(x+10*W/24, y+4*H/24)
  ctx.stroke()

  //11
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+21*H/24)
  ctx.lineTo(x+20*W/24, y+19*H/24)
  ctx.stroke()

  //12
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+13*H/24)
  ctx.lineTo(x+14*W/24, y+13*H/24)
  ctx.stroke()

  //13
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+7*H/24)
  ctx.lineTo(x+17*W/24, y+5*H/24)
  ctx.stroke()

  //14
  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+4*H/24)
  ctx.lineTo(x+23*W/24, y+2*H/24)
  ctx.stroke()

  //15
  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+20*H/24)
  ctx.lineTo(x+23*W/24, y+21*H/24)
  ctx.stroke()

  //16
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+15*H/24)
  ctx.lineTo(x+19*W/24, y+16*H/24)
  ctx.stroke()

  //17
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+12*H/24)
  ctx.lineTo(x+19*W/24, y+12*H/24)
  ctx.stroke()

  //18
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+16*H/24)
  ctx.lineTo(x+22*W/24, y+18*H/24)
  ctx.stroke()

  //19
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+8*H/24)
  ctx.lineTo(x+21*W/24, y+6*H/24)
  ctx.stroke()

  //20
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+9*H/24)
  ctx.lineTo(x+15*W/24, y+8*H/24)
  ctx.stroke()

  //21
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+10*H/24)
  ctx.lineTo(x+15*W/24, y+11*H/24)
  ctx.stroke()

  //22
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+16*H/24)
  ctx.lineTo(x+16*W/24, y+15*H/24)
  ctx.stroke()

  //23
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+4*H/24)
  ctx.lineTo(x+20*W/24, y+3*H/24)
  ctx.stroke()

  //24
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+10*H/24)
  ctx.lineTo(x+19*W/24, y+8*H/24)
  ctx.stroke()

  //25
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+11*H/24)
  ctx.lineTo(x+16*W/24, y+10*H/24)
  ctx.stroke()

  //26
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+19*H/24)
  ctx.lineTo(x+21*W/24, y+21*H/24)
  ctx.stroke()

  //27
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+18*H/24)
  ctx.lineTo(x+16*W/24, y+18*H/24)
  ctx.stroke()

  //28
  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+14*H/24)
  ctx.stroke()

  //29
  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+11*H/24)
  ctx.lineTo(x+23*W/24, y+10*H/24)
  ctx.stroke()

  //30
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+11*H/24)
  ctx.lineTo(x+21*W/24, y+10*H/24)
  ctx.stroke()

  //31
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+14*H/24)
  ctx.lineTo(x+17*W/24, y+14*H/24)
  ctx.stroke()

  //32
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+16*H/24)
  ctx.lineTo(x+17*W/24, y+17*H/24)
  ctx.stroke()

  //33
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+20*H/24)
  ctx.lineTo(x+19*W/24, y+19*H/24)
  ctx.stroke()

  //34
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+17*H/24)
  ctx.lineTo(x+21*W/24, y+16*H/24)
  ctx.stroke()

  //35
  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+16*H/24)
  ctx.lineTo(x+23*W/24, y+15*H/24)
  ctx.stroke()

  //36
  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+7*H/24)
  ctx.lineTo(x+23*W/24, y+6*H/24)
  ctx.stroke()

  //37
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+7*H/24)
  ctx.lineTo(x+19*W/24, y+6*H/24)
  ctx.stroke()

  //38
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+7*H/24)
  ctx.lineTo(x+16*W/24, y+7*H/24)
  ctx.stroke()

  //39
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+4*H/24)
  ctx.lineTo(x+18*W/24, y+3*H/24)
  ctx.stroke()

  //40
  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+18*H/24)
  ctx.lineTo(x+22*W/24, y+19*H/24)
  ctx.stroke()

  //41
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+13*H/24)
  ctx.lineTo(x+17*W/24, y+12*H/24)
  ctx.stroke()

  //42
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+13*H/24)
  ctx.lineTo(x+20*W/24, y+14*H/24)
  ctx.stroke()

  //43
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+16*H/24)
  ctx.lineTo(x+9*W/24, y+18*H/24)
  ctx.lineTo(x+8*W/24, y+18*H/24)
  ctx.lineTo(x+8*W/24, y+19*H/24)
  ctx.lineTo(x+8*W/24, y+18*H/24)
  ctx.lineTo(x+7*W/24, y+18*H/24)
  ctx.lineTo(x+8*W/24, y+16*H/24)
  ctx.stroke()

  //44
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+3*H/24)
  ctx.lineTo(x+22*W/24, y+2*H/24)
  ctx.stroke()

  //45
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+13*H/24)
  ctx.lineTo(x+8*W/24, y+13*H/24)
  ctx.lineTo(x+7*W/24, y+11*H/24)
  ctx.lineTo(x+6*W/24, y+13*H/24)
  ctx.lineTo(x+7*W/24, y+13*H/24)
  ctx.lineTo(x+7*W/24, y+14*H/24)
  ctx.stroke()

  //46
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+8*H/24)
  ctx.lineTo(x+7*W/24, y+7*H/24)
  ctx.lineTo(x+8*W/24, y+7*H/24)
  ctx.lineTo(x+7*W/24, y+5*H/24)
  ctx.lineTo(x+6*W/24, y+7*H/24)
  ctx.lineTo(x+7*W/24, y+7*H/24)
  ctx.stroke()

  //47
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+11*H/24)
  ctx.lineTo(x+5*W/24, y+10*H/24)
  ctx.lineTo(x+6*W/24, y+10*H/24)
  ctx.lineTo(x+5*W/24, y+8*H/24)
  ctx.lineTo(x+4*W/24, y+10*H/24)
  ctx.lineTo(x+5*W/24, y+10*H/24)
  ctx.stroke()

  //48
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+6*H/24)
  ctx.lineTo(x+4*W/24, y+5*H/24)
  ctx.lineTo(x+5*W/24, y+5*H/24)
  ctx.lineTo(x+4*W/24, y+3*H/24)
  ctx.lineTo(x+3*W/24, y+5*H/24)
  ctx.lineTo(x+4*W/24, y+5*H/24)
  ctx.stroke()

  //49
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+13*H/24)
  ctx.lineTo(x+3*W/24, y+11*H/24)
  ctx.lineTo(x+4*W/24, y+13*H/24)
  ctx.lineTo(x+3*W/24, y+13*H/24)
  ctx.lineTo(x+2*W/24, y+13*H/24)
  ctx.lineTo(x+3*W/24, y+13*H/24)
  ctx.lineTo(x+3*W/24, y+14*H/24)
  ctx.stroke()

  //50
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+17*H/24)
  ctx.lineTo(x+5*W/24, y+16*H/24)
  ctx.lineTo(x+6*W/24, y+16*H/24)
  ctx.lineTo(x+5*W/24, y+14*H/24)
  ctx.lineTo(x+4*W/24, y+16*H/24)
  ctx.lineTo(x+5*W/24, y+16*H/24)
  ctx.stroke()

  //51
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+22*H/24)
  ctx.lineTo(x+3*W/24, y+21*H/24)
  ctx.lineTo(x+4*W/24, y+21*H/24)
  ctx.lineTo(x+3*W/24, y+19*H/24)
  ctx.lineTo(x+2*W/24, y+21*H/24)
  ctx.lineTo(x+3*W/24, y+21*H/24)
  ctx.stroke()

  //52
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+23*H/24)
  ctx.lineTo(x+7*W/24, y+22*H/24)
  ctx.lineTo(x+8*W/24, y+22*H/24)
  ctx.lineTo(x+7*W/24, y+20*H/24)
  ctx.lineTo(x+6*W/24, y+22*H/24)
  ctx.lineTo(x+7*W/24, y+22*H/24)
  ctx.stroke()
}

function urgentAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+3*H/24)
  ctx.lineTo(x+19*W/24, y+5*H/24)
  ctx.lineTo(x+21*W/24, y+5*H/24)
  ctx.lineTo(x+21*W/24, y+3*H/24)
  ctx.lineTo(x+19*W/24, y+3*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+5*H/24)
  ctx.lineTo(x+14*W/24, y+5*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+8*H/24)
  ctx.lineTo(x+18*W/24, y+8*H/24)
  ctx.stroke()
  //5
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+10*H/24)
  ctx.lineTo(x+21*W/24, y+10*H/24)
  ctx.lineTo(x+21*W/24, y+21*H/24)
  ctx.lineTo(x+3*W/24, y+21*H/24)
  ctx.lineTo(x+3*W/24, y+10*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+12*H/24)
  ctx.lineTo(x+14*W/24, y+12*H/24)
  ctx.stroke()
  //7
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+14*H/24)
  ctx.lineTo(x+14*W/24, y+14*H/24)
  ctx.stroke()
  //8
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+16*H/24)
  ctx.lineTo(x+14*W/24, y+16*H/24)
  ctx.stroke()
  //9
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+18*H/24)
  ctx.lineTo(x+14*W/24, y+18*H/24)
  ctx.stroke()
  //10
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+20*H/24)
  ctx.lineTo(x+20*W/24, y+20*H/24)
  ctx.stroke()
  //11
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+10*H/24)
  ctx.lineTo(x+14*W/24, y+18*H/24)
  ctx.lineTo(x+21*W/24, y+18*H/24)
  ctx.stroke()
  //12
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+11*H/24)
  ctx.lineTo(x+15*W/24, y+12*H/24)
  ctx.lineTo(x+16*W/24, y+12*H/24)
  ctx.lineTo(x+16*W/24, y+11*H/24)
  ctx.lineTo(x+15*W/24, y+11*H/24)
  ctx.stroke()
  //13
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+13*H/24)
  ctx.lineTo(x+15*W/24, y+14*H/24)
  ctx.lineTo(x+16*W/24, y+14*H/24)
  ctx.lineTo(x+16*W/24, y+13*H/24)
  ctx.lineTo(x+15*W/24, y+13*H/24)
  ctx.stroke()
  //14
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+15*H/24)
  ctx.lineTo(x+15*W/24, y+16*H/24)
  ctx.lineTo(x+16*W/24, y+16*H/24)
  ctx.lineTo(x+16*W/24, y+15*H/24)
  ctx.lineTo(x+15*W/24, y+15*H/24)
  ctx.stroke()

  //16
  let face = "serif"
  ctx.font = "800 "+(W/24)+"pt " + face
  ctx.fillText("Urgent", x+14.5*W/24, y+4.5*H/24)
  ctx.font = "100 "+(W/48)+"pt " + face
  ctx.fillText("A-9711", x+2.5*W/24, y+21.7*H/24)

  ctx.lineWidth *= 1.4
  //17
  ctx.beginPath()
  ctx.moveTo(x+14.8*W/24, y+11.4*H/24)
  ctx.lineTo(x+15.5*W/24, y+12.3*H/24)
  ctx.lineTo(x+15.8*W/24, y+10.7*H/24)
  ctx.stroke()
  
  let v = document.getElementById("featuresize").value
  ctx.lineWidth  = document.getElementById("featuresize").value /= 9
  scriptAt(x+(4+pet(1))*W/24, y+7*H/24,H/32,color)
  scriptAt(x+(11+pet(1))*W/24, y+7*H/24,H/32,color)
  scriptAt(x+(4.5+pet(1))*W/24, y+9.5*H/20,H/29,color)
  scriptAt(x+(9+pet(1))*W/24, y+9.5*H/20,H/28,color)
 
  document.getElementById("featuresize").value = v
}

function holeAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
   //1
   ctx.beginPath()
   ctx.moveTo(x+2*W/24, y+12*H/24)
   cpx = x+2*W/24
   cpy = y+9*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+9*H/24)
   cpx = x+22*W/24
   cpy = y+9*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+12*H/24)
   cpx = x+22*W/24
   cpy = y+15*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+15*H/24)
   cpx = x+2*W/24
   cpy = y+15*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+12*H/24)
   cpx = x+3*W/24
   cpy = y+10*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
   cpx = x+21*W/24
   cpy = y+10*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+12*H/24)
   ctx.stroke()
}

function suburbsAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+6*H/24)
  ctx.lineTo(x+6*W/24, y+6*H/24)
  ctx.lineTo(x+6*W/24, y+4*H/24)
  ctx.lineTo(x+4*W/24, y+2*H/24)
  ctx.lineTo(x+2*W/24, y+4*H/24)
  ctx.lineTo(x+2*W/24, y+6*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+6*H/24)
  ctx.lineTo(x+14*W/24, y+6*H/24)
  ctx.lineTo(x+14*W/24, y+4*H/24)
  ctx.lineTo(x+12*W/24, y+2*H/24)
  ctx.lineTo(x+10*W/24, y+4*H/24)
  ctx.lineTo(x+10*W/24, y+6*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+6*H/24)
  ctx.lineTo(x+22*W/24, y+6*H/24)
  ctx.lineTo(x+22*W/24, y+4*H/24)
  ctx.lineTo(x+20*W/24, y+2*H/24)
  ctx.lineTo(x+18*W/24, y+4*H/24)
  ctx.lineTo(x+18*W/24, y+6*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+6*H/24)
  ctx.lineTo(x+7*W/24, y+5*H/24)
  ctx.lineTo(x+7*W/24, y+3*H/24)
  ctx.lineTo(x+5*W/24, y+1*H/24)
  ctx.lineTo(x+4*W/24, y+2*H/24)
  ctx.lineTo(x+6*W/24, y+4*H/24)
  ctx.lineTo(x+7*W/24, y+3*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+2*H/24)
  ctx.lineTo(x+13*W/24, y+1*H/24)
  ctx.lineTo(x+15*W/24, y+3*H/24)
  ctx.lineTo(x+15*W/24, y+5*H/24)
  ctx.lineTo(x+14*W/24, y+6*H/24)
  ctx.lineTo(x+14*W/24, y+4*H/24)
  ctx.lineTo(x+15*W/24, y+3*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+6*H/24)
  ctx.lineTo(x+23*W/24, y+5*H/24)
  ctx.lineTo(x+23*W/24, y+3*H/24)
  ctx.lineTo(x+21*W/24, y+1*H/24)
  ctx.lineTo(x+20*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+4*H/24)
  ctx.lineTo(x+23*W/24, y+3*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+6*W/24, y+22*H/24)
  ctx.lineTo(x+6*W/24, y+20*H/24)
  ctx.lineTo(x+4*W/24, y+18*H/24)
  ctx.lineTo(x+2*W/24, y+20*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+22*H/24)
  ctx.lineTo(x+10*W/24, y+20*H/24)
  ctx.lineTo(x+12*W/24, y+18*H/24)
  ctx.lineTo(x+14*W/24, y+20*H/24)
  ctx.lineTo(x+14*W/24, y+22*H/24)
  ctx.lineTo(x+10*W/24, y+22*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+20*H/24)
  ctx.lineTo(x+20*W/24, y+18*H/24)
  ctx.lineTo(x+18*W/24, y+20*H/24)
  ctx.lineTo(x+18*W/24, y+22*H/24)
  ctx.stroke()

  //10
  ctx.beginPath()
  ctx.moveTo(x+1*W/24, y+14*H/24)
  ctx.lineTo(x+5*W/24, y+14*H/24)
  ctx.lineTo(x+5*W/24, y+12*H/24)
  ctx.lineTo(x+3*W/24, y+10*H/24)
  ctx.lineTo(x+1*W/24, y+12*H/24)
  ctx.lineTo(x+1*W/24, y+14*H/24)
  ctx.stroke()

  //11
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+14*H/24)
  ctx.lineTo(x+9*W/24, y+12*H/24)
  ctx.lineTo(x+11*W/24, y+10*H/24)
  ctx.lineTo(x+13*W/24, y+12*H/24)
  ctx.lineTo(x+13*W/24, y+14*H/24)
  ctx.lineTo(x+9*W/24, y+14*H/24)
  ctx.stroke()

  //12
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+14*H/24)
  ctx.lineTo(x+21*W/24, y+14*H/24)
  ctx.lineTo(x+21*W/24, y+12*H/24)
  ctx.lineTo(x+19*W/24, y+10*H/24)
  ctx.lineTo(x+17*W/24, y+12*H/24)
  ctx.lineTo(x+17*W/24, y+14*H/24)
  ctx.stroke()

  //13
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+14*H/24)
  ctx.lineTo(x+22*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+11*H/24)
  ctx.lineTo(x+20*W/24, y+9*H/24)
  ctx.lineTo(x+19*W/24, y+10*H/24)
  ctx.lineTo(x+21*W/24, y+12*H/24)
  ctx.lineTo(x+22*W/24, y+11*H/24)
  ctx.stroke()

  //14
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+14*H/24)
  ctx.lineTo(x+14*W/24, y+13*H/24)
  ctx.lineTo(x+14*W/24, y+11*H/24)
  ctx.lineTo(x+12*W/24, y+9*H/24)
  ctx.lineTo(x+11*W/24, y+10*H/24)
  ctx.lineTo(x+13*W/24, y+12*H/24)
  ctx.lineTo(x+14*W/24, y+11*H/24)
  ctx.stroke()

  //15
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+22*H/24)
  ctx.lineTo(x+15*W/24, y+21*H/24)
  ctx.lineTo(x+15*W/24, y+19*H/24)
  ctx.lineTo(x+13*W/24, y+17*H/24)
  ctx.lineTo(x+12*W/24, y+18*H/24)
  ctx.lineTo(x+14*W/24, y+20*H/24)
  ctx.lineTo(x+15*W/24, y+19*H/24)
  ctx.stroke()

  //16
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+23*W/24, y+21*H/24)
  ctx.lineTo(x+23*W/24, y+19*H/24)
  ctx.lineTo(x+21*W/24, y+17*H/24)
  ctx.lineTo(x+20*W/24, y+18*H/24)
  ctx.lineTo(x+22*W/24, y+20*H/24)
  ctx.lineTo(x+23*W/24, y+19*H/24)
  ctx.stroke()

  //17
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+22*H/24)
  ctx.lineTo(x+7*W/24, y+21*H/24)
  ctx.lineTo(x+7*W/24, y+19*H/24)
  ctx.lineTo(x+5*W/24, y+17*H/24)
  ctx.lineTo(x+4*W/24, y+18*H/24)
  ctx.lineTo(x+6*W/24, y+20*H/24)
  ctx.lineTo(x+7*W/24, y+19*H/24)
  ctx.stroke()

  //18
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+14*H/24)
  ctx.lineTo(x+6*W/24, y+13*H/24)
  ctx.lineTo(x+6*W/24, y+11*H/24)
  ctx.lineTo(x+4*W/24, y+9*H/24)
  ctx.lineTo(x+3*W/24, y+10*H/24)
  ctx.lineTo(x+5*W/24, y+12*H/24)
  ctx.lineTo(x+6*W/24, y+11*H/24)
  ctx.stroke()

  let f = W/4
  locationAt(x+W/2+pet(W/2), y+W/2+pet(W/3), f)
}

function empty_setAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  //1
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+2*H/24)
  cpx = x+4*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+6*H/24)
  cpx = x+7*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+12*H/24)
  cpx = x+7*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+18*H/24)
  cpx = x+4*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+22*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+22*H/24)
  cpx = x+20*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+18*H/24)
  cpx = x+17*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+12*H/24)
  cpx = x+17*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+6*H/24)
  cpx = x+20*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+2*H/24)
  ctx.stroke()
}

function nowAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, angle = pet(360)
  let d = new Date()
  let h = d.getHours()
  let m = d.getMinutes()
  //1 minute
  angle = m * 6
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+12*W/24, y+3*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+13*W/24, y+4*H/24 ,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+3*H/24 ,cx,cy,angle)
  p = rotatePoint(x+11*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.stroke()
  angle = h*30 // plus small amount for minute
  angle += m*0.6
  //2 hour
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+12*W/24, y+5*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+11*W/24, y+6*H/24 ,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+5*H/24 ,cx,cy,angle)
  p = rotatePoint(x+13*W/24, y+6*H/24 ,cx,cy,angle)
  ctx.stroke()
  
  //3
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],10*W/24,0,Math.PI*2)
  ctx.stroke()
  angle = 0
  // date
  let day = d.getDate()
  if (day < 10)
    day = "0"+day
  let face = "sans serif"
  ctx.font = (1.4*W/24)+"pt " + face
  ctx.fillText(day,x+17.5*W/24, y+11*H/24+1.7*W/24)
  // box for date
  angle = 0
  ctx.beginPath()
  p = rotatePoint(x+17*W/24, y+13*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+17*W/24, y+11*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+20*W/24, y+11*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+20*W/24, y+13*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+17*W/24, y+13*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()
  
  ctx.lineWidth = 0.5 + document.getElementById("featuresize").value/180
  let secs = d.getSeconds()
  angle = secs * 6
  //4 secondhand
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+12*W/24, y+3*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()
  
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  angle = 0
  //1
  ctx.beginPath()
  p = rotatePoint(x+4*W/24, y+22*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+4*W/24, y+18.5*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //2
  ctx.beginPath()
  p = rotatePoint(x+4*W/24, y+5.5*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+4*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //3
  ctx.beginPath()
  p = rotatePoint(x+20*W/24, y+22*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+20*W/24, y+18.5*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //4
  ctx.beginPath()
  p = rotatePoint(x+20*W/24, y+5.5*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+20*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //5
  ctx.beginPath()
  p = rotatePoint(x+22*W/24, y+11*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+23*W/24
  cpy = y+11*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+23*W/24, y+12*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+23*W/24
  cpy = y+13*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+22*W/24, y+13*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()
}

function bridgeAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+8*H/24)
  cpx = x+22*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+8*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+16*H/24)
  cpx = x+8*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
  cpx = x+16*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+16*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+7*H/24)
  ctx.lineTo(x+22*W/24, y+7*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+14*H/24)
  ctx.lineTo(x+4*W/24, y+8*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+10*H/24)
  ctx.lineTo(x+12*W/24, y+8*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+14*H/24)
  ctx.lineTo(x+20*W/24, y+8*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+11*H/24)
  ctx.lineTo(x+8*W/24, y+8*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+11*H/24)
  ctx.lineTo(x+16*W/24, y+8*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+18*H/24)
  cpx = x+8*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+11*H/24)
  cpx = x+16*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+18*H/24)
  ctx.stroke()

  //10 car
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+6*H/24)
  cpx = x+17*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+6*H/24)
  cpx = x+17*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+5*H/24)
  cpx = x+17*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+4*H/24)
  cpx = x+14*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+4*H/24)
  cpx = x+13*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+5*H/24)
  cpx = x+12*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+6*H/24)
  ctx.stroke()

  //11
  ctx.beginPath()
  ctx.arc(x+13*W/24, y+6.5*H/24, W/48, 0, Math.PI*2)
  ctx.stroke()

  //12
  ctx.beginPath()
  ctx.arc(x+16*W/24, y+6.5*H/24, W/48, 0, Math.PI*2)
  ctx.stroke()
}

function shoesAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  //1
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+22*H/24)
  cpx = x+22*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+15*H/24)
  cpx = x+22*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+6*H/24)
  cpx = x+22*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+2*H/24)
  cpx = x+14*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+6*H/24)
  cpx = x+14*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+10*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+22*H/24)
  cpx = x+14*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+16*H/24)
  cpx = x+15*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+6*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+22*H/24)
  cpx = x+2*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+16*H/24)
  cpx = x+2*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+6*H/24)
  cpx = x+2*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+2*H/24)
  cpx = x+10*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+6*H/24)
  cpx = x+10*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+10*H/24)
  cpx = x+2*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+6*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+22*H/24)
  cpx = x+10*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+16*H/24)
  cpx = x+9*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+6*H/24)
  ctx.stroke()

  
  //13
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+10*H/24)
  cpx = x+22*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+6*H/24)
  ctx.stroke()
  
  //1
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+10*H/24)
  ctx.lineTo(x+16*W/24, y+11*H/24)
  ctx.lineTo(x+20*W/24, y+12*H/24)
  ctx.lineTo(x+16*W/24, y+13*H/24)
  ctx.lineTo(x+20*W/24, y+14*H/24)
  ctx.lineTo(x+16*W/24, y+15*H/24)
  ctx.lineTo(x+20*W/24, y+15*H/24)
  ctx.lineTo(x+16*W/24, y+14*H/24)
  ctx.lineTo(x+20*W/24, y+13*H/24)
  ctx.lineTo(x+16*W/24, y+12*H/24)
  ctx.lineTo(x+20*W/24, y+11*H/24)
  ctx.lineTo(x+16*W/24, y+10*H/24)
  cpx = x+13*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  cpx = x+12*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+16*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+10*H/24)
  cpx = x+22*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+13*H/24)
  cpx = x+22*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+16*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+10*H/24)
  ctx.lineTo(x+4*W/24, y+11*H/24)
  ctx.lineTo(x+8*W/24, y+12*H/24)
  ctx.lineTo(x+4*W/24, y+13*H/24)
  ctx.lineTo(x+8*W/24, y+14*H/24)
  ctx.lineTo(x+4*W/24, y+15*H/24)
  ctx.lineTo(x+8*W/24, y+15*H/24)
  ctx.lineTo(x+4*W/24, y+14*H/24)
  ctx.lineTo(x+8*W/24, y+13*H/24)
  ctx.lineTo(x+4*W/24, y+12*H/24)
  ctx.lineTo(x+8*W/24, y+11*H/24)
  ctx.lineTo(x+4*W/24, y+10*H/24)
  cpx = x+2*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+15*H/24)
  cpx = x+2*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/24, y+18*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+10*H/24)
  cpx = x+10*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+14*H/24)
  cpx = x+11*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+16*H/24)
  ctx.stroke()
}

function cabin_air_filterAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, angle = pet(80)

  //1
  ctx.beginPath()
  p = rotatePoint(x+3*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+4*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+5*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+6*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+7*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+8*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+9*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+10*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+11*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+12*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+13*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+14*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+15*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+16*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+17*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+18*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+19*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+22*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+21*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+20*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+19*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+18*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+17*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+16*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+15*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+14*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+13*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+12*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+11*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+10*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+9*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+8*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+7*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+6*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+3*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //2
  ctx.beginPath()
  p = rotatePoint(x+4*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+7*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //3
  ctx.beginPath()
  p = rotatePoint(x+18*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+21*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //4
  ctx.beginPath()
  p = rotatePoint(x+16*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+19*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //5
  ctx.beginPath()
  p = rotatePoint(x+15*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+18*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //6
  ctx.beginPath()
  p = rotatePoint(x+14*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+17*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //7
  ctx.beginPath()
  p = rotatePoint(x+17*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+20*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //8
  ctx.beginPath()
  p = rotatePoint(x+13*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+16*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //9
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+15*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //10
  ctx.beginPath()
  p = rotatePoint(x+11*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+14*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //11
  ctx.beginPath()
  p = rotatePoint(x+10*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+13*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //12
  ctx.beginPath()
  p = rotatePoint(x+9*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+12*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //13
  ctx.beginPath()
  p = rotatePoint(x+8*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+11*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //14
  ctx.beginPath()
  p = rotatePoint(x+7*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+10*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //15
  ctx.beginPath()
  p = rotatePoint(x+6*W/24, y+18*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+9*W/24, y+2*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //16
  ctx.beginPath()
  p = rotatePoint(x+5*W/24, y+20*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+8*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //17
  ctx.beginPath()
  p = rotatePoint(x+2*W/24, y+21*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+20*W/24, y+21*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+23*W/24, y+3*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+22*W/24, y+3*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //18
  ctx.beginPath()
  p = rotatePoint(x+2*W/24, y+21*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+5*W/24, y+3*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+6*W/24, y+3*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //19
  ctx.beginPath()
  p = rotatePoint(x+21*W/24, y+16*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+22*W/24, y+16*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+23*W/24, y+10*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+22*W/24, y+10*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()

  //20
  ctx.beginPath()
  p = rotatePoint(x+3*W/24, y+15*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+2*W/24, y+15*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+3*W/24, y+10*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+4*W/24, y+10*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.stroke()
  let v = document.getElementById("featuresize").value
  ctx.lineWidth =  document.getElementById("featuresize").value/150
  let i = 0, x1, x2
  for (; i < 23; i++) {
   x1 = x + 3*W/24 + Math.random() * 17*W/24
   y1 = y + 3*W/24 + Math.random() * 17*W/24
   p = rotatePoint(x1,y1 ,cx,cy,angle)
   ctx.beginPath()
   ctx.moveTo(p[0], p[1])
   cpx = x + 3*W/24 + Math.random() * 17*W/24
   cpy = y + 3*W/24 + Math.random() * 17*W/24
   cp = rotatePoint(cpx,cpy,cx,cy,angle)
   x1 = x + 3*W/24 + Math.random() * 17*W/24
   y1 = y + 3*W/24 + Math.random() * 17*W/24
   p = rotatePoint(x1,y1 ,cx,cy,angle)
   ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
   ctx.stroke()
  }
  document.getElementById("featuresize").value = v
}


function catAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  
  //1
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+22*H/24)
  cpx = x+22*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+16*H/24)
  cpx = x+22*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+2*H/24)
  cpx = x+20*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+4*H/24)
  cpx = x+18*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+4*H/24)
  cpx = x+14*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+2*H/24)
  cpx = x+14*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+5*H/24)
  cpx = x+14*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+6*H/24)
  cpx = x+2*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+16*H/24)
  cpx = x+2*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+22*H/24)
  cpx = x+16*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+22*H/24)
  ctx.stroke()
}

function elephantAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //12
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+21*H/24)
  ctx.lineTo(x+22*W/24, y+21*H/24)
  ctx.stroke()
  //11
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+21*H/24)
  cpx = x+21*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+6*H/24)
  cpx = x+21*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+3*H/24)
  cpx = x+14*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+4*H/24)
  cpx = x+2*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+12*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+21*H/24)
  cpx = x+20*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+10*H/24)
  cpx = x+19*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+14*H/24)
  cpx = x+18*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+10*H/24)
  cpx = x+16*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+12*H/24)
  cpx = x+17*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+21*H/24)
  cpx = x+18*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+22*H/24)
  cpx = x+15*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+22*H/24)
  cpx = x+15*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+15*H/24)
  cpx = x+10*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+17*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+15*H/24)
  cpx = x+13*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+21*H/24)
  cpx = x+13*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+22*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+12*H/24)
  cpx = x+7*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+17*H/24)
  cpx = x+6*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+21*H/24)
  cpx = x+8*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+22*H/24)
  cpx = x+5*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+22*H/24)
  cpx = x+2*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+12*H/24)
  ctx.stroke()
  //5
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+12*H/24)
  cpx = x+2*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/24, y+18*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+17*H/24)
  cpx = x+2*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+21*H/24)
  cpx = x+2*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+22*H/24)
  ctx.stroke()
  //7
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+6*H/24)
  cpx = x+17*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+11*H/24)
  cpx = x+11*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+7*H/24)
  cpx = x+10*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+4*H/24)
  ctx.stroke()
  //13
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+10*H/24)
  cpx = x+19*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+10*H/24)
  ctx.stroke()
  //8
  ctx.beginPath()
  ctx.arc(x+19*W/24, y+6*H/24, W/72, 0, Math.PI*2)
  ctx.stroke()
}

function solar_systemAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let i = 0, r = W/24, r2 = ctx.lineWidth * 1.6
  
  for (; i < 8; i++) {
    ctx.beginPath()
    ctx.arc(x+W/2,y+H/2,r,0,Math.PI*2)
    ctx.stroke()
    a = Math.PI*2*Math.random()
    //The parametric equation for a circle is
    x2 = x+W/2 + r * Math.cos(a)
    y2 = y+H/2 + r * Math.sin(a)
    ctx.beginPath()
    ctx.arc(x2,y2,r2,0,Math.PI*2)
    ctx.fill()
    r += W/18
    if (i === 3)
      r2 *= 1.3
    if (i === 5)
      r2 /= 1.3
  }
}

function fourbirdsAt () {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let W = canvas.width, H = W
  let color = getselectedcolor()
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  //let p = [], cp = [], lastp = []
  //let cx = x+W/2, cy = y+H/2, angle = pet(180)
  filledcatAt (40,40,   W/2.5)
  filledcatAt (40,40+H/2,  W/2.5)
  filledcatAt (40+W/2,40,W/2.5)
  filledcatAt (40+W/2,40+H/2,W/2.5)
}

function filledcatAt (x,y,W, color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  //let color = getselectedcolor()
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.fillStyle = color

  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, angle = 0//pet(400)

  //1
  ctx.beginPath()
  p = rotatePoint(x+4*W/24, y+16*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+4*W/24
  cpy = y+22*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+10*W/24, y+22*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+16*W/24
  cpy = y+22*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+16*W/24, y+22*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+22*W/24
  cpy = y+22*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+22*W/24, y+15*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+22*W/24
  cpy = y+1*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+22*W/24, y+1*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+20*W/24
  cpy = y+4*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+20*W/24, y+4*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+19*W/24
  cpy = y+3*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+18*W/24, y+4*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+16*W/24
  cpy = y+1*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+16*W/24, y+1*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+16*W/24
  cpy = y+6*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+16*W/24, y+6*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+16*W/24
  cpy = y+8*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+8*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+6*W/24
  cpy = y+9*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+4*W/24, y+16*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()
}

function filledfloppyAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  let i = 0
  ctx.strokeStyle = colors[i++]
  ctx.fillStyle = colors[i++]
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, angle = pet(360)

  //1
  ctx.beginPath()
  p = rotatePoint(x+3*W/24, y+22*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+21*W/24
  cpy = y+22*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+21*W/24, y+22*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+22*W/24
  cpy = y+22*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+22*W/24, y+21*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+22*W/24
  cpy = y+7*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+22*W/24, y+7*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+17*W/24
  cpy = y+2*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+17*W/24, y+2*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+3*W/24
  cpy = y+2*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+3*W/24, y+2*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+2*W/24
  cpy = y+2*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+2*W/24, y+3*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+2*W/24
  cpy = y+21*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+2*W/24, y+21*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+2*W/24
  cpy = y+22*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+3*W/24, y+22*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()
  ctx.fillStyle = colors[i++]
  //2
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+14*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+14*W/24
  cpy = y+14*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+12*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+14*W/24
  cpy = y+10*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+10*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+10*W/24
  cpy = y+10*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+10*W/24, y+12*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+10*W/24
  cpy = y+14*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+14*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()
  ctx.fillStyle = colors[i++]
  //3
  ctx.beginPath()
  p = rotatePoint(x+4*W/24, y+22*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+4*W/24
  cpy = y+17*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+4*W/24, y+17*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+4*W/24
  cpy = y+16*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+5*W/24, y+16*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+19*W/24
  cpy = y+16*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+19*W/24, y+16*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+20*W/24
  cpy = y+16*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+20*W/24, y+17*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+20*W/24
  cpy = y+22*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+20*W/24, y+22*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()
  ctx.fillStyle = colors[i++]
  //4
  ctx.beginPath()
  p = rotatePoint(x+4*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+4*W/24, y+6*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+18*W/24, y+6*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+18*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+4*W/24, y+4*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.fill()
  ctx.fillStyle = colors[i++]
  //5
  ctx.beginPath()
  p = rotatePoint(x+14*W/24, y+22*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+14*W/24, y+16*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+19*W/24, y+16*H/24 ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  cpx = x+20*W/24
  cpy = y+16*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+20*W/24, y+17*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+20*W/24
  cpy = y+22*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+20*W/24, y+22*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+14*W/24
  cpy = y+22*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+22*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()
}

function filledbirdAt (x,y,W,color) {
  console.log(x,y,W)
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
 // let color = getselectedcolor()
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, angle = pet(360)

//1
ctx.beginPath()
p = rotatePoint(x+12*W/24, y+23*H/24 ,cx,cy,angle)
ctx.moveTo(p[0],p[1])
cpx = x+9*W/24
cpy = y+14*H/24
cp = rotatePoint(cpx,cpy,cx,cy,angle)
p = rotatePoint(x+9*W/24, y+9*H/24,cx,cy,angle)
ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
cpx = x+11*W/24
cpy = y+14*H/24
cp = rotatePoint(cpx,cpy,cx,cy,angle)
p = rotatePoint(x+6*W/24, y+23*H/24,cx,cy,angle)
ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
cpx = x+1*W/24
cpy = y+14*H/24
cp = rotatePoint(cpx,cpy,cx,cy,angle)
p = rotatePoint(x+2*W/24, y+10*H/24,cx,cy,angle)
ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
cpx = x+4*W/24
cpy = y+4*H/24
cp = rotatePoint(cpx,cpy,cx,cy,angle)
p = rotatePoint(x+11*W/24, y+4*H/24,cx,cy,angle)
ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
cpx = x+12*W/24
cpy = y+1*H/24
cp = rotatePoint(cpx,cpy,cx,cy,angle)
p = rotatePoint(x+12*W/24, y+1*H/24,cx,cy,angle)
ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
cpx = x+13*W/24
cpy = y+4*H/24
cp = rotatePoint(cpx,cpy,cx,cy,angle)
p = rotatePoint(x+13*W/24, y+4*H/24,cx,cy,angle)
ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
cpx = x+20*W/24
cpy = y+4*H/24
cp = rotatePoint(cpx,cpy,cx,cy,angle)
p = rotatePoint(x+22*W/24, y+10*H/24,cx,cy,angle)
ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
cpx = x+23*W/24
cpy = y+14*H/24
cp = rotatePoint(cpx,cpy,cx,cy,angle)
p = rotatePoint(x+18*W/24, y+23*H/24,cx,cy,angle)
ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
cpx = x+13*W/24
cpy = y+14*H/24
cp = rotatePoint(cpx,cpy,cx,cy,angle)
p = rotatePoint(x+15*W/24, y+9*H/24,cx,cy,angle)
ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
cpx = x+15*W/24
cpy = y+14*H/24
cp = rotatePoint(cpx,cpy,cx,cy,angle)
p = rotatePoint(x+12*W/24, y+23*H/24,cx,cy,angle)
ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
ctx.fill()
}

function mothAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  //1
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+6*H/24)
  cpx = x+5*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+16*H/24)
  cpx = x+2*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+18*H/24)
  cpx = x+12*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+8*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+18*H/24)
  cpx = x+10*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+17*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+17*H/24)
  cpx = x+14*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+18*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+8*H/24)
  cpx = x+12*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+18*H/24)
  cpx = x+22*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+16*H/24)
  cpx = x+19*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+6*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+13*H/24)
  cpx = x+11*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+17*H/24)
  cpx = x+13*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+13*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+5*H/24)
  cpx = x+6*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+9*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+5*H/24)
  cpx = x+18*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+9*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+6*H/24)
  cpx = x+12*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+6*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+6*H/24)
  cpx = x+10*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+8*H/24)
  ctx.stroke()

  //10
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+6*H/24)
  cpx = x+14*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+8*H/24)
  ctx.stroke()

  //11
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+15*H/24)
  cpx = x+7*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+14*H/24)
  cpx = x+7*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+13*H/24)
  cpx = x+5*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+14*H/24)
  cpx = x+5*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+15*H/24)
  ctx.stroke()

  //12
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+15*H/24)
  cpx = x+19*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+14*H/24)
  cpx = x+19*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+13*H/24)
  cpx = x+17*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+14*H/24)
  cpx = x+17*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+15*H/24)
  ctx.stroke()
  let r = W/72
  //13
  ctx.beginPath()
  ctx.arc(x+11.5*W/24, y+5.3*H/24, r, 0, Math.PI * 2)
  ctx.stroke()

  //14
  ctx.beginPath()
  ctx.arc(x+12.5*W/24, y+5.3*H/24, r, 0, Math.PI * 2)
  ctx.stroke()
}

function tape_dispenserAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+12*H/24)
  cpx = x+2*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+20*H/24)
  cpx = x+18*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+20*H/24)
  cpx = x+22*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+16*H/24)
  cpx = x+22*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+10*H/24)
  cpx = x+22*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+4*H/24)
  cpx = x+6*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+10*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+13*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+19*H/24)
  cpx = x+21*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+12*H/24)
  cpx = x+21*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+5*H/24)
  cpx = x+7*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+12*H/24)
  cpx = x+7*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+19*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+12*H/24)
  cpx = x+7*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+12*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+9*H/24)
  cpx = x+11*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+12*H/24)
  cpx = x+11*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+15*H/24)
  cpx = x+17*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+12*H/24)
  cpx = x+17*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+9*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+1*W/24, y+15*H/24)
  cpx = x+2*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+12*H/24)
  ctx.stroke()
  //7
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+12*H/24)
  cpx = x+4*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+12*H/24)
  cpx = x+4*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+14*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+15*H/24)
  cpx = x+13*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+14*H/24)
  cpx = x+15*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+15*H/24)
  ctx.stroke()
  //10
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+9*H/24)
  cpx = x+13*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+10*H/24)
  cpx = x+15*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+9*H/24)
  ctx.stroke()
   //11
   ctx.beginPath()
   ctx.moveTo(x+14*W/24, y+16*H/24)
   cpx = x+18*W/24
   cpy = y+16*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+12*H/24)
   cpx = x+18*W/24
   cpy = y+8*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+8*H/24)
   cpx = x+10*W/24
   cpy = y+8*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+12*H/24)
   cpx = x+10*W/24
   cpy = y+16*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+16*H/24)
   ctx.stroke()
}   
    
function running_with_scissorsAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, angle = pet(360)
  let v = document.getElementById("featuresize").value
  //1
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+18*W/24
  cpy = y+2*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+18*W/24, y+2*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+16*W/24
  cpy = y+9*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+12*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()

  //2
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+8*W/24
  cpy = y+2*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+8*W/24, y+2*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+9*W/24
  cpy = y+9*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+10*W/24, y+12*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()

  //3
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+10*W/24
  cpy = y+16*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+10*W/24, y+16*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+7*W/24
  cpy = y+16*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+7*W/24, y+19*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+7*W/24
  cpy = y+22*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+10*W/24, y+22*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+11*W/24
  cpy = y+22*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+11*W/24, y+19*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+11*W/24
  cpy = y+17*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+11*W/24, y+17*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+13*W/24
  cpy = y+14*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+12*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()

  //4
  ctx.beginPath()
  p = rotatePoint(x+10*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+11*W/24
  cpy = y+14*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+11*W/24, y+14*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()

  //5
  ctx.beginPath()
  p = rotatePoint(x+13*W/24, y+17*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+12*W/24
  cpy = y+15.4*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle) // fix
  p = rotatePoint(x+12*W/24, y+15.4*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()

  //6
  ctx.beginPath()
  p = rotatePoint(x+13*W/24, y+14*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+14*W/24
  cpy = y+16*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+16*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+17*W/24
  cpy = y+16*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+17*W/24, y+19*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+17*W/24
  cpy = y+22*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+22*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+13*W/24
  cpy = y+22*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+13*W/24, y+19*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+13*W/24
  cpy = y+17*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+13*W/24, y+17*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+12*W/24
  cpy = y+15*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+12*W/24, y+15*H/24,cx,cy,angle)
 // ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()

  //7
  ctx.beginPath()
  p = rotatePoint(x+10*W/24, y+19*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+10*W/24
  cpy = y+21*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+9*W/24, y+21*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+8*W/24
  cpy = y+21*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+8*W/24, y+19*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+8*W/24
  cpy = y+17*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+10*W/24, y+17*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+10*W/24
  cpy = y+19*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+10*W/24, y+19*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()

  //8
  ctx.beginPath()
  p = rotatePoint(x+14*W/24, y+17*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+16*W/24
  cpy = y+17*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+16*W/24, y+19*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+16*W/24
  cpy = y+21*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+15*W/24, y+21*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+15*W/24
  cpy = y+21*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+15*W/24, y+21*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+14*W/24
  cpy = y+21*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+19*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+14*W/24
  cpy = y+17*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+17*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()
  
  //9
  ctx.beginPath()
  p = rotatePoint(x+10*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+11*W/24
  cpy = y+14*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+11*W/24, y+14*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()
  
  //10
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+14*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1], W/48,0,Math.PI*2)
  ctx.stroke()
}

function free_palletsAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, angle = pet(180)
    
   //1
   ctx.beginPath()
   p = rotatePoint(x+4*W/24, y+2*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+22*W/24, y+2*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+22*W/24, y+21*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+4*W/24, y+21*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+4*W/24, y+2*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+6*W/24, y+2*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+6*W/24, y+21*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+8*W/24, y+21*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+8*W/24, y+2*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+10*W/24, y+2*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+10*W/24, y+21*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+12*W/24, y+21*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+12*W/24, y+2*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+14*W/24, y+2*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+14*W/24, y+21*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+16*W/24, y+21*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+16*W/24, y+2*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+18*W/24, y+2*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+18*W/24, y+21*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+20*W/24, y+21*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+20*W/24, y+2*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //2
   ctx.beginPath()
   p = rotatePoint(x+6*W/24, y+11*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+8*W/24, y+11*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //3
   ctx.beginPath()
   p = rotatePoint(x+10*W/24, y+11*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+12*W/24, y+11*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //4
   ctx.beginPath()
   p = rotatePoint(x+14*W/24, y+11*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+16*W/24, y+11*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //5
   ctx.beginPath()
   p = rotatePoint(x+18*W/24, y+11*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+20*W/24, y+11*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //6
   ctx.beginPath()
   p = rotatePoint(x+20*W/24, y+12*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+18*W/24, y+12*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //7
   ctx.beginPath()
   p = rotatePoint(x+16*W/24, y+12*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+14*W/24, y+12*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //8
   ctx.beginPath()
   p = rotatePoint(x+12*W/24, y+12*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+10*W/24, y+12*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //9
   ctx.beginPath()
   p = rotatePoint(x+8*W/24, y+12*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+6*W/24, y+12*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //10
   ctx.beginPath()
   p = rotatePoint(x+6*W/24, y+20*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+8*W/24, y+20*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //11
   ctx.beginPath()
   p = rotatePoint(x+10*W/24, y+20*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+12*W/24, y+20*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //12
   ctx.beginPath()
   p = rotatePoint(x+14*W/24, y+20*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+16*W/24, y+20*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //13
   ctx.beginPath()
   p = rotatePoint(x+18*W/24, y+20*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+20*W/24, y+20*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //14
   ctx.beginPath()
   p = rotatePoint(x+6*W/24, y+3*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+8*W/24, y+3*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //15
   ctx.beginPath()
   p = rotatePoint(x+10*W/24, y+3*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+12*W/24, y+3*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //16
   ctx.beginPath()
   p = rotatePoint(x+14*W/24, y+3*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+16*W/24, y+3*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //17
   ctx.beginPath()
   p = rotatePoint(x+18*W/24, y+3*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+20*W/24, y+3*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //18
   ctx.beginPath()
   p = rotatePoint(x+4*W/24, y+2*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+2*W/24, y+4*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+2*W/24, y+23*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+20*W/24, y+23*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+22*W/24, y+21*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //19
   ctx.beginPath()
   p = rotatePoint(x+4*W/24, y+21*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+2*W/24, y+23*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //20
   ctx.beginPath()
   p = rotatePoint(x+4*W/24, y+20*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+2*W/24, y+22*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //21
   ctx.beginPath()
   p = rotatePoint(x+4*W/24, y+11*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+2*W/24, y+13*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+2*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   p = rotatePoint(x+4*W/24, y+12*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //22
   ctx.beginPath()
   p = rotatePoint(x+2*W/24, y+5*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+4*W/24, y+3*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //23
   ctx.beginPath()
   p = rotatePoint(x+2*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+4*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //24
   ctx.beginPath()
   p = rotatePoint(x+6*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+8*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //25
   ctx.beginPath()
   p = rotatePoint(x+10*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+12*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //26
   ctx.beginPath()
   p = rotatePoint(x+14*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+16*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //27
   ctx.beginPath()
   p = rotatePoint(x+18*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+20*W/24, y+14*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //28
   ctx.beginPath()
   p = rotatePoint(x+2*W/24, y+5*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+4*W/24, y+5*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //29
   ctx.beginPath()
   p = rotatePoint(x+6*W/24, y+5*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+8*W/24, y+5*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //30
   ctx.beginPath()
   p = rotatePoint(x+10*W/24, y+5*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+12*W/24, y+5*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //31
   ctx.beginPath()
   p = rotatePoint(x+14*W/24, y+5*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+16*W/24, y+5*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
 
   //32
   ctx.beginPath()
   p = rotatePoint(x+18*W/24, y+5*H/24 ,cx,cy,angle)
   ctx.moveTo(p[0],p[1])
   p = rotatePoint(x+20*W/24, y+5*H/24 ,cx,cy,angle)
   ctx.lineTo(p[0],p[1])
   ctx.stroke()
   // nails
   let r = W/120
   
  //33
  ctx.beginPath()
  p = rotatePoint(x+5*W/24, y+2.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()

  //34
  ctx.beginPath()
  p = rotatePoint(x+9*W/24, y+2.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()

  //35
  ctx.beginPath()
  p = rotatePoint(x+13*W/24, y+2.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()

  //36
  ctx.beginPath()
  p = rotatePoint(x+17*W/24, y+2.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()
  
  //37
  ctx.beginPath()
  p = rotatePoint(x+21*W/24, y+2.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()

  //38
  ctx.beginPath()
  p = rotatePoint(x+5*W/24, y+11.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()

  //39
  ctx.beginPath()
  p = rotatePoint(x+9*W/24, y+11.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()

  //40
  ctx.beginPath()
  p = rotatePoint(x+13*W/24, y+11.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()

  //41
  ctx.beginPath()
  p = rotatePoint(x+17*W/24, y+11.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()

  //42
  ctx.beginPath()
  p = rotatePoint(x+21*W/24, y+11.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()

  //43
  ctx.beginPath()
  p = rotatePoint(x+21*W/24, y+20.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()

  //44
  ctx.beginPath()
  p = rotatePoint(x+13*W/24, y+20.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()

  //45
  ctx.beginPath()
  p = rotatePoint(x+5*W/24, y+20.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()

  //46
  ctx.beginPath()
  p = rotatePoint(x+9*W/24, y+20.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()

  //47
  ctx.beginPath()
  p = rotatePoint(x+17*W/24, y+20.5*H/24 ,cx,cy,angle)
  ctx.arc(p[0],p[1],r,0,Math.PI*2)
  ctx.stroke()
  
}

    
  function drfilledAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = getselectedcolor()
    ctx.fillStyle = getselectedcolor()
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    let p = [], cp = [], lastp = []
    let cx = x+W/2, cy = y+H/2, angle = pet(180)
  
    //1
    ctx.beginPath()
    p = rotatePoint(x+12*W/24, y+22*H/24 ,cx,cy,angle)
    ctx.moveTo(p[0],p[1])
    cpx = x+10*W/24
    cpy = y+20*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+10*W/24, y+18*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+14*W/24
    cpy = y+18*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+14*W/24, y+13*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+21*W/24
    cpy = y+15*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+21*W/24, y+15*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+22*W/24
    cpy = y+15*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+22*W/24, y+14*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+14*W/24
    cpy = y+12*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+14*W/24, y+12*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+22*W/24
    cpy = y+10*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+22*W/24, y+10*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+22*W/24
    cpy = y+9*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+21*W/24, y+9*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+14*W/24
    cpy = y+11*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+14*W/24, y+11*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+14*W/24
    cpy = y+6*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+8*W/24, y+6*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+2*W/24
    cpy = y+6*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+2*W/24, y+12*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+2*W/24
    cpy = y+18*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+6*W/24, y+18*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+6*W/24
    cpy = y+20*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+4*W/24, y+22*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    ctx.fill()
  
    //2
    ctx.beginPath()
    p = rotatePoint(x+9*W/24, y+11*H/24 ,cx,cy,angle)
    ctx.moveTo(p[0],p[1])
    cpx = x+8*W/24
    cpy = y+11*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+8*W/24, y+10*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+8*W/24
    cpy = y+9*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+9*W/24, y+9*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+10*W/24
    cpy = y+9*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+10*W/24, y+10*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    cpx = x+10*W/24
    cpy = y+11*H/24
    cp = rotatePoint(cpx,cpy,cx,cy,angle)
    p = rotatePoint(x+9*W/24, y+11*H/24,cx,cy,angle)
    ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
    ctx.fill()
  }
  
  function duckrabbitAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.fillStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    let p = [], cp = [], lastp = []
    let cx = x+W/2, cy = y+H/2, angle =  0

    if (Math.random() > 0.5)
    angle = -90
  //1
  ctx.beginPath()
  p = rotatePoint(x+14*W/24, y+12*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+22*W/24
  cpy = y+10*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+22*W/24, y+10*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+22*W/24
  cpy = y+9*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+21*W/24, y+9*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+14*W/24
  cpy = y+11*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+11*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+14*W/24
  cpy = y+6*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+8*W/24, y+6*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+2*W/24
  cpy = y+6*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+2*W/24, y+12*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+2*W/24
  cpy = y+18*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+6*W/24, y+18*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+6*W/24
  cpy = y+20*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+4*W/24, y+22*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()

  //2
  ctx.beginPath()
  p = rotatePoint(x+12*W/24, y+22*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+10*W/24
  cpy = y+20*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+10*W/24, y+18*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+14*W/24
  cpy = y+18*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+13*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+21*W/24
  cpy = y+15*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+21*W/24, y+15*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+22*W/24
  cpy = y+15*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+22*W/24, y+14*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+14*W/24
  cpy = y+12*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+14*W/24, y+12*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()

  //3
  ctx.beginPath()
  p = rotatePoint(x+9*W/24, y+11*H/24 ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+8*W/24
  cpy = y+11*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+8*W/24, y+10*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+8*W/24
  cpy = y+9*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+9*W/24, y+9*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+10*W/24
  cpy = y+9*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+10*W/24, y+10*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+10*W/24
  cpy = y+11*H/24
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+9*W/24, y+11*H/24,cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.stroke()
}
  
  function whaleAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    //1
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+10*H/24)
    cpx = x+5*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+18*H/24)
    cpx = x+18*W/24
    cpy = y+17*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+18*H/24)
    cpx = x+22*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+17*H/24)
    cpx = x+21*W/24
    cpy = y+17*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+17*H/24)
    cpx = x+17*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+16*H/24)
    cpx = x+23*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+12*H/24)
    cpx = x+23*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+11*H/24)
    cpx = x+14*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+12*H/24)
    cpx = x+6*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+10*H/24)
    cpx = x+7*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+7*H/24)
    cpx = x+7*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+6*H/24)
    cpx = x+5*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+8*H/24)
    cpx = x+4*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+7*H/24)
    cpx = x+2*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+10*H/24)
    ctx.stroke()
  
    //2
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+16*H/24)
    cpx = x+14*W/24
    cpy = y+17*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+17*H/24)
    cpx = x+11*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+15*H/24)
    cpx = x+14*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+15*H/24)
    ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.arc(x+18*W/24, y+14*H/24,W/96,0,2*Math.PI)
    ctx.stroke()
  }
  
  function stone_wallAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    //1
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+19*H/24)
    ctx.lineTo(x+4*W/24, y+20*H/24)
    ctx.lineTo(x+7*W/24, y+20*H/24)
    ctx.lineTo(x+8*W/24, y+16*H/24)
    ctx.lineTo(x+4*W/24, y+16*H/24)
    ctx.lineTo(x+2*W/24, y+17*H/24)
    ctx.lineTo(x+2*W/24, y+19*H/24)
    ctx.stroke()
  
    //2
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+20*H/24)
    ctx.lineTo(x+8*W/24, y+17*H/24)
    ctx.lineTo(x+9*W/24, y+16*H/24)
    ctx.lineTo(x+13*W/24, y+17*H/24)
    ctx.lineTo(x+13*W/24, y+19*H/24)
    ctx.lineTo(x+12*W/24, y+20*H/24)
    ctx.lineTo(x+8*W/24, y+20*H/24)
    ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+16*H/24)
    ctx.lineTo(x+4*W/24, y+15*H/24)
    ctx.lineTo(x+4*W/24, y+14*H/24)
    ctx.lineTo(x+5*W/24, y+13*H/24)
    ctx.lineTo(x+5*W/24, y+12*H/24)
    ctx.lineTo(x+2*W/24, y+11*H/24)
    ctx.stroke()
  
    //4
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+20*H/24)
    ctx.lineTo(x+14*W/24, y+16*H/24)
    ctx.lineTo(x+15*W/24, y+15*H/24)
    ctx.lineTo(x+19*W/24, y+15*H/24)
    ctx.lineTo(x+21*W/24, y+16*H/24)
    ctx.lineTo(x+20*W/24, y+18*H/24)
    ctx.lineTo(x+20*W/24, y+19*H/24)
    ctx.lineTo(x+19*W/24, y+20*H/24)
    ctx.lineTo(x+14*W/24, y+20*H/24)
    ctx.stroke()
  
    //5
    ctx.beginPath()
    ctx.moveTo(x+21*W/24, y+20*H/24)
    ctx.lineTo(x+21*W/24, y+18*H/24)
    ctx.lineTo(x+22*W/24, y+16*H/24)
    ctx.lineTo(x+23*W/24, y+15*H/24)
    ctx.stroke()
  
    //6
    ctx.beginPath()
    ctx.moveTo(x+21*W/24, y+20*H/24)
    ctx.lineTo(x+23*W/24, y+20*H/24)
    ctx.stroke()
  
    //7
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+15*H/24)
    ctx.lineTo(x+5*W/24, y+13*H/24)
    ctx.lineTo(x+7*W/24, y+13*H/24)
    ctx.lineTo(x+8*W/24, y+14*H/24)
    ctx.lineTo(x+8*W/24, y+15*H/24)
    ctx.lineTo(x+5*W/24, y+15*H/24)
    ctx.stroke()
  
    //8
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+12*H/24)
    ctx.lineTo(x+9*W/24, y+14*H/24)
    ctx.lineTo(x+9*W/24, y+15*H/24)
    ctx.lineTo(x+12*W/24, y+16*H/24)
    ctx.lineTo(x+14*W/24, y+15*H/24)
    ctx.lineTo(x+14*W/24, y+13*H/24)
    ctx.lineTo(x+13*W/24, y+12*H/24)
    ctx.lineTo(x+11*W/24, y+11*H/24)
    ctx.lineTo(x+10*W/24, y+12*H/24)
    ctx.lineTo(x+8*W/24, y+11*H/24)
    ctx.lineTo(x+7*W/24, y+12*H/24)
    ctx.stroke()
  
    //9
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+11*H/24)
    ctx.lineTo(x+15*W/24, y+13*H/24)
    ctx.lineTo(x+16*W/24, y+14*H/24)
    ctx.lineTo(x+18*W/24, y+14*H/24)
    ctx.lineTo(x+19*W/24, y+13*H/24)
    ctx.lineTo(x+20*W/24, y+12*H/24)
    ctx.lineTo(x+19*W/24, y+10*H/24)
    ctx.lineTo(x+18*W/24, y+9*H/24)
    ctx.lineTo(x+17*W/24, y+10*H/24)
    ctx.lineTo(x+15*W/24, y+10*H/24)
    ctx.lineTo(x+14*W/24, y+11*H/24)
    ctx.stroke()
  
    //10
    ctx.beginPath()
    ctx.moveTo(x+20*W/24, y+13*H/24)
    ctx.lineTo(x+19*W/24, y+14*H/24)
    ctx.lineTo(x+21*W/24, y+15*H/24)
    ctx.lineTo(x+22*W/24, y+14*H/24)
    ctx.lineTo(x+21*W/24, y+13*H/24)
    ctx.lineTo(x+20*W/24, y+13*H/24)
    ctx.stroke()
  
    //11
    ctx.beginPath()
    ctx.moveTo(x+20*W/24, y+10*H/24)
    ctx.lineTo(x+21*W/24, y+12*H/24)
    ctx.lineTo(x+22*W/24, y+13*H/24)
    ctx.lineTo(x+23*W/24, y+13*H/24)
    ctx.stroke()
  
    //12
    ctx.beginPath()
    ctx.moveTo(x+20*W/24, y+10*H/24)
    ctx.lineTo(x+20*W/24, y+9*H/24)
    ctx.lineTo(x+21*W/24, y+8*H/24)
    ctx.lineTo(x+22*W/24, y+8*H/24)
    ctx.lineTo(x+23*W/24, y+8*H/24)
    ctx.stroke()
  
    //13
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+10*H/24)
    ctx.lineTo(x+2*W/24, y+9*H/24)
    ctx.lineTo(x+2*W/24, y+8*H/24)
    ctx.lineTo(x+2*W/24, y+7*H/24)
    ctx.lineTo(x+5*W/24, y+7*H/24)
    ctx.lineTo(x+7*W/24, y+8*H/24)
    ctx.lineTo(x+8*W/24, y+9*H/24)
    ctx.lineTo(x+7*W/24, y+11*H/24)
    ctx.lineTo(x+6*W/24, y+11*H/24)
    ctx.lineTo(x+5*W/24, y+11*H/24)
    ctx.lineTo(x+4*W/24, y+11*H/24)
    ctx.lineTo(x+3*W/24, y+10*H/24)
    ctx.stroke()
  
    //14
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+11*H/24)
    ctx.lineTo(x+11*W/24, y+10*H/24)
    ctx.lineTo(x+11*W/24, y+9*H/24)
    ctx.lineTo(x+10*W/24, y+9*H/24)
    ctx.lineTo(x+8*W/24, y+10*H/24)
    ctx.lineTo(x+9*W/24, y+11*H/24)
    ctx.stroke()
  
    //15
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+8*H/24)
    ctx.lineTo(x+12*W/24, y+11*H/24)
    ctx.lineTo(x+13*W/24, y+11*H/24)
    ctx.lineTo(x+14*W/24, y+10*H/24)
    ctx.lineTo(x+15*W/24, y+9*H/24)
    ctx.lineTo(x+16*W/24, y+9*H/24)
    ctx.lineTo(x+16*W/24, y+7*H/24)
    ctx.lineTo(x+14*W/24, y+5*H/24)
    ctx.lineTo(x+12*W/24, y+5*H/24)
    ctx.lineTo(x+13*W/24, y+7*H/24)
    ctx.lineTo(x+12*W/24, y+8*H/24)
    ctx.stroke()
  
    //16
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+8*H/24)
    ctx.lineTo(x+11*W/24, y+8*H/24)
    ctx.lineTo(x+12*W/24, y+7*H/24)
    ctx.lineTo(x+11*W/24, y+5*H/24)
    ctx.lineTo(x+8*W/24, y+5*H/24)
    ctx.lineTo(x+6*W/24, y+5*H/24)
    ctx.lineTo(x+6*W/24, y+6*H/24)
    ctx.lineTo(x+7*W/24, y+7*H/24)
    ctx.lineTo(x+9*W/24, y+8*H/24)
    ctx.stroke()
  
    //17
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+6*H/24)
    ctx.lineTo(x+4*W/24, y+6*H/24)
    ctx.lineTo(x+5*W/24, y+5*H/24)
    ctx.lineTo(x+3*W/24, y+5*H/24)
    ctx.lineTo(x+2*W/24, y+5*H/24)
    ctx.stroke()
  
    //18
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+5*H/24)
    ctx.lineTo(x+16*W/24, y+6*H/24)
    ctx.lineTo(x+17*W/24, y+7*H/24)
    ctx.lineTo(x+17*W/24, y+8*H/24)
    ctx.lineTo(x+19*W/24, y+8*H/24)
    ctx.lineTo(x+20*W/24, y+7*H/24)
    ctx.lineTo(x+21*W/24, y+6*H/24)
    ctx.lineTo(x+20*W/24, y+5*H/24)
    ctx.lineTo(x+19*W/24, y+5*H/24)
    ctx.lineTo(x+18*W/24, y+6*H/24)
    ctx.lineTo(x+17*W/24, y+5*H/24)
    ctx.lineTo(x+16*W/24, y+5*H/24)
    ctx.stroke()
  
    //19
    ctx.beginPath()
    ctx.moveTo(x+22*W/24, y+5*H/24)
    ctx.lineTo(x+22*W/24, y+6*H/24)
    ctx.lineTo(x+21*W/24, y+7*H/24)
    ctx.lineTo(x+23*W/24, y+7*H/24)
    ctx.stroke()
  
    //20
    ctx.beginPath()
    ctx.moveTo(x+23*W/24, y+5*H/24)
    ctx.stroke()
    
    // dents
    //21
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+18*H/24)
    ctx.lineTo(x+16*W/24, y+19*H/24)
    ctx.lineTo(x+17*W/24, y+19*H/24)
    ctx.stroke()

    //22
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+18*H/24)
    ctx.lineTo(x+11*W/24, y+19*H/24)
    ctx.lineTo(x+10*W/24, y+19*H/24)
    ctx.stroke()

    //23
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+18*H/24)
    ctx.lineTo(x+5*W/24, y+19*H/24)
    ctx.lineTo(x+6*W/24, y+18*H/24)
    ctx.stroke()

    //24
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+15*H/24)
    ctx.lineTo(x+13*W/24, y+15*H/24)
    ctx.lineTo(x+13*W/24, y+14*H/24)
    ctx.stroke()

    //25
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+12*H/24)
    ctx.lineTo(x+16*W/24, y+13*H/24)
    ctx.lineTo(x+17*W/24, y+13*H/24)
    ctx.stroke()

    //26
    ctx.beginPath()
    ctx.moveTo(x+23*W/24, y+17*H/24)
    ctx.lineTo(x+22*W/24, y+18*H/24)
    ctx.lineTo(x+23*W/24, y+18*H/24)
    ctx.stroke()

    //27
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+8*H/24)
    ctx.lineTo(x+6*W/24, y+9*H/24)
    ctx.lineTo(x+6*W/24, y+10*H/24)
    ctx.stroke()

    //28
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+8*H/24)
    ctx.lineTo(x+13*W/24, y+9*H/24)
    ctx.stroke()

    //29
    ctx.beginPath()
    ctx.moveTo(x+21*W/24, y+10*H/24)
    ctx.lineTo(x+22*W/24, y+11*H/24)
    ctx.stroke()

    //30
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+7*H/24)
    ctx.lineTo(x+10*W/24, y+6*H/24)
    ctx.stroke()

    //31
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+12*H/24)
    ctx.lineTo(x+3*W/24, y+13*H/24)
    ctx.lineTo(x+3*W/24, y+14*H/24)
    ctx.stroke()
  }
  
  function bacteriophageAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    //1
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+8*H/24)
    ctx.lineTo(x+15*W/24, y+8*H/24)
    ctx.lineTo(x+12*W/24, y+2*H/24)
    ctx.lineTo(x+9*W/24, y+8*H/24)
    ctx.stroke()
  
    //2
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+8*H/24)
    ctx.lineTo(x+12*W/24, y+10*H/24)
    ctx.lineTo(x+15*W/24, y+8*H/24)
    ctx.lineTo(x+15*W/24, y+3*H/24)
    ctx.lineTo(x+12*W/24, y+2*H/24)
    ctx.lineTo(x+9*W/24, y+3*H/24)
    ctx.lineTo(x+9*W/24, y+8*H/24)
    ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+10*H/24)
    ctx.lineTo(x+14*W/24, y+10*H/24)
    ctx.lineTo(x+13*W/24, y+10*H/24)
    ctx.lineTo(x+13*W/24, y+20*H/24)
    ctx.lineTo(x+11*W/24, y+20*H/24)
    ctx.lineTo(x+11*W/24, y+10*H/24)
    ctx.stroke()
  
    //4
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+20*H/24)
    ctx.lineTo(x+14*W/24, y+20*H/24)
    ctx.lineTo(x+19*W/24, y+13*H/24)
    ctx.lineTo(x+22*W/24, y+22*H/24)
    ctx.stroke()
  
    //5
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+20*H/24)
    ctx.lineTo(x+5*W/24, y+13*H/24)
    ctx.lineTo(x+2*W/24, y+22*H/24)
    ctx.stroke()
  
    //6
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+20*H/24)
    ctx.lineTo(x+8*W/24, y+13*H/24)
    ctx.lineTo(x+5*W/24, y+21*H/24)
    ctx.stroke()
  
    //7
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+20*H/24)
    ctx.lineTo(x+16*W/24, y+13*H/24)
    ctx.lineTo(x+19*W/24, y+21*H/24)
    ctx.stroke()
  
    //8
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+20*H/24)
    ctx.lineTo(x+10*W/24, y+21*H/24)
    ctx.lineTo(x+14*W/24, y+21*H/24)
    ctx.lineTo(x+14*W/24, y+20*H/24)
    ctx.stroke()
  }
  
  function eyeglassesAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
   //6
   ctx.beginPath()
   ctx.moveTo(x+21*W/24, y+10*H/24)
   cpx = x+6*W/24
   cpy = y+5*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+5*H/24)
   cpx = x+4*W/24
   cpy = y+5*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+9*H/24)
   ctx.stroke()
 
   //7
   ctx.beginPath()
   ctx.moveTo(x+3*W/24, y+10*H/24)
   cpx = x+18*W/24
   cpy = y+5*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+5*H/24)
   cpx = x+20*W/24
   cpy = y+5*H/24
   ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+9*H/24)
   ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+11*H/24)
    cpx = x+2*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+18*H/24)
    cpx = x+11*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+11*H/24)
    cpx = x+11*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
    cpx = x+3*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+10*H/24)
    cpx = x+2*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+11*H/24)
    ctx.stroke()
  
    //4
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+11*H/24)
    cpx = x+13*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+18*H/24)
    cpx = x+22*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+11*H/24)
    cpx = x+22*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+10*H/24)
    cpx = x+14*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+10*H/24)
    cpx = x+13*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+11*H/24)
    ctx.stroke()
  
    //5
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+11*H/24)
    cpx = x+11*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
    cpx = x+13*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+11*H/24)
    ctx.stroke()
  }
  
  function dreyAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    //1
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+22*H/24)
    ctx.lineTo(x+10*W/24, y+13*H/24)
    ctx.lineTo(x+6*W/24, y+8*H/24)
    ctx.lineTo(x+1*W/24, y+6*H/24)
    ctx.stroke()
  
    //2
    ctx.beginPath()
    ctx.moveTo(x+1*W/24, y+5*H/24)
    ctx.lineTo(x+5*W/24, y+6*H/24)
    ctx.lineTo(x+3*W/24, y+1*H/24)
    ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+1*H/24)
    ctx.lineTo(x+8*W/24, y+7*H/24)
    ctx.lineTo(x+12*W/24, y+10*H/24)
    ctx.lineTo(x+16*W/24, y+6*H/24)
    ctx.lineTo(x+17*W/24, y+1*H/24)
    ctx.stroke()
  
    //4
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+22*H/24)
    ctx.lineTo(x+14*W/24, y+12*H/24)
    ctx.lineTo(x+17*W/24, y+8*H/24)
    ctx.lineTo(x+23*W/24, y+4*H/24)
    ctx.stroke()
  
    //5
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+1*H/24)
    ctx.lineTo(x+18*W/24, y+6*H/24)
    ctx.lineTo(x+23*W/24, y+3*H/24)
    ctx.stroke()
  
    //6
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+10*H/24)
    ctx.lineTo(x+14*W/24, y+6*H/24)
    ctx.stroke()
    
    let v = document.getElementById("featuresize").value
    ctx.lineWidth = 1+document.getElementById("featuresize").value/75
    //7
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+8*H/24)
    ctx.lineTo(x+15*W/24, y+8*H/24)
    ctx.stroke()
  
    //8
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+6*H/24)
    ctx.lineTo(x+13*W/24, y+10*H/24)
    ctx.stroke()
  
    //9
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+9*H/24)
    ctx.lineTo(x+14*W/24, y+7*H/24)
    ctx.stroke()
  
    //10
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+7*H/24)
    ctx.lineTo(x+14*W/24, y+9*H/24)
    ctx.stroke()
  
    //11
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+8*H/24)
    ctx.lineTo(x+12*W/24, y+5*H/24)
    ctx.stroke()
  
    //12
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+6*H/24)
    ctx.lineTo(x+13*W/24, y+8*H/24)
    ctx.stroke()
  
    //13
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+6*H/24)
    ctx.lineTo(x+10*W/24, y+7*H/24)
    ctx.stroke()
  
    //14
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+5*H/24)
    ctx.lineTo(x+14*W/24, y+8*H/24)
    ctx.stroke()
  
    //15
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+10*H/24)
    ctx.lineTo(x+12*W/24, y+6*H/24)
    ctx.stroke()
  
    //16
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+9*H/24)
    ctx.lineTo(x+10*W/24, y+5*H/24)
    ctx.stroke()
  
    //17
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+7*H/24)
    ctx.lineTo(x+13*W/24, y+5*H/24)
    ctx.stroke()
  
    //18
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+8*H/24)
    ctx.lineTo(x+12*W/24, y+9*H/24)
    ctx.stroke()
  
    //19
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+7*H/24)
    ctx.lineTo(x+10*W/24, y+7*H/24)
    ctx.stroke()
  
    //20
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+6*H/24)
    ctx.lineTo(x+11*W/24, y+7*H/24)
    ctx.stroke()
  
    //21
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+7*H/24)
    ctx.lineTo(x+12*W/24, y+5*H/24)
    ctx.stroke()
    document.getElementById("featuresize").value = v
  }
  
  function winter_stickAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    //1
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+18*H/24)
    ctx.lineTo(x+16*W/24, y+3*H/24)
    ctx.lineTo(x+14*W/24, y+2*H/24)
    ctx.lineTo(x+9*W/24, y+17*H/24)
    ctx.stroke()
  
    //2
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+5*H/24)
    ctx.lineTo(x+15*W/24, y+6*H/24)
    ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+18*H/24)
    cpx = x+8*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+16*H/24)
    cpx = x+8*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+18*H/24)
    cpx = x+12*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+16*H/24)
    cpx = x+12*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+18*H/24)
    ctx.stroke()
    
    ctx.setLineDash([4,8])
    //4
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+17*H/24)
    ctx.lineTo(x+8*W/24, y+20*H/24)
    ctx.stroke()
  
    //5
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+18*H/24)
    ctx.lineTo(x+10*W/24, y+21*H/24)
    ctx.stroke()
    ctx.setLineDash([])
    //6
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+14*H/24)
    cpx = x+6*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+12*H/24)
    cpx = x+6*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+14*H/24)
    ctx.stroke()
  
    //7
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+14*H/24)
    cpx = x+16*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+12*H/24)
    cpx = x+16*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+14*H/24)
    cpx = x+20*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+12*H/24)
    cpx = x+20*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+14*H/24)
    cpx = x+2*W/24
    cpy = y+10*H/24
    ctx.stroke()
  
    //8
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+10*H/24)
    cpx = x+4*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+8*H/24)
    cpx = x+4*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+10*H/24)
    cpx = x+8*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+8*H/24)
    cpx = x+8*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
    ctx.stroke()
  
    //9
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+20*H/24)
    ctx.stroke()
  
    //10
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+22*H/24)
    cpx = x+14*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+20*H/24)
    cpx = x+14*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+22*H/24)
    cpx = x+18*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+20*H/24)
    cpx = x+18*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+22*H/24)
    ctx.stroke()
  
    //11
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+22*H/24)
    cpx = x+4*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+20*H/24)
    cpx = x+4*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+22*H/24)
    ctx.stroke()
  
    //12
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+18*H/24)
    cpx = x+18*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+16*H/24)
    cpx = x+18*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+18*H/24)
    ctx.stroke()
  
    //13
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+4*H/24)
    cpx = x+2*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+6*H/24)
    cpx = x+6*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+4*H/24)
    cpx = x+6*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+6*H/24)
    cpx = x+10*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+4*H/24)
    cpx = x+10*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+6*H/24)
    ctx.stroke()
  
    //14
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+10*H/24)
    cpx = x+17*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+8*H/24)
    cpx = x+17*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+10*H/24)
    cpx = x+21*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+8*H/24)
    cpx = x+21*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+10*H/24)
    ctx.stroke()
  
    //15
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+6*H/24)
    cpx = x+19*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+4*H/24)
    cpx = x+19*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+6*H/24)
    ctx.stroke()
  
    //16
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+18*H/24)
    cpx = x+4*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+16*H/24)
    cpx = x+4*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+18*H/24)
    ctx.stroke()
    
    //17
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+22*H/24)
    cpx = x+9*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+20*H/24)
    cpx = x+9*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+22*H/24)
    ctx.stroke()
  }
  
  function oocyteAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    //1
    ctx.beginPath()
    ctx.arc(x+12*W/24, y+12*H/24, 12*W/24, 0, 2*Math.PI)
    ctx.stroke()
  
    //2
    ctx.beginPath()
    ctx.arc(x+12*W/24, y+12*H/24, 10*W/24, 0, 2*Math.PI)
    ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.arc(x+12*W/24, y+13*H/24, 9*W/24, 0, 2*Math.PI)
    ctx.stroke()
  
    //4 pb
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
  }
  
  function bird_cageAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
   
     //11
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+20*H/24)
    ctx.lineTo(x+10*W/24, y+17*H/24)
    cpx = x+15*W/24
    cpy = y+17*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+12*H/24)
    cpx = x+15*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+11*H/24)
    cpx = x+16*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+10*H/24)
    cpx = x+15*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+9*H/24)
    cpx = x+12*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+11*H/24)
    cpx = x+9*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+15*H/24)
    cpx = x+6*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+18*H/24)
    cpx = x+6*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+20*H/24)
    //ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+12*W/24, y+1*H/24, W/24, 0, Math.PI*2)
 
    ctx.stroke()
    //2
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+22*H/24)
    ctx.lineTo(x+20*W/24, y+22*H/24)
    ctx.lineTo(x+20*W/24, y+8*H/24)
    cpx = x+20*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
    cpx = x+4*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+8*H/24)
    cpx = x+4*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+22*H/24)
    ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+2*H/24)
    cpx = x+6*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+8*H/24)
    cpx = x+6*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+22*H/24)
    ctx.stroke()
  
    //4
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+2*H/24)
    cpx = x+8*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+8*H/24)
    cpx = x+8*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+22*H/24)
    ctx.stroke()
  
    //5
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+2*H/24)
    cpx = x+10*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+8*H/24)
    cpx = x+10*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+22*H/24)
    ctx.stroke()
  
    //6
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+2*H/24)
    cpx = x+18*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+8*H/24)
    cpx = x+18*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+22*H/24)
    ctx.stroke()
  
    //7
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+2*H/24)
    cpx = x+16*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+8*H/24)
    cpx = x+16*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+22*H/24)
    cpx = x+12*W/24
    cpy = y+2*H/24
    ctx.stroke()
  
    //8
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+2*H/24)
    cpx = x+14*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+8*H/24)
    cpx = x+14*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+22*H/24)
    ctx.lineTo(x+12*W/24, y+22*H/24)
    ctx.lineTo(x+12*W/24, y+2*H/24)
    ctx.stroke()
  
    //9
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+21*H/24)
    ctx.lineTo(x+20*W/24, y+21*H/24)
    ctx.stroke()
  
    //10
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+8*H/24)
    ctx.lineTo(x+20*W/24, y+8*H/24)
    ctx.stroke()
  }
  
  function fliesAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    let s = +document.getElementById("featuresize").value
    document.getElementById("featuresize").value = s/3
    ctx.strokeStyle = randomPick(colors)
    ctx.fillStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    let pad = 2*W/24
    let i = 0,x1 = pad, y1 = pad, W1=W/6
    let space = W1/20
    for (; i < 64; i++) {
      ctx.strokeStyle = randomPick(colors)
      flyAt (x+Math.random()*W,y+Math.random()*H,W1*Math.random() *5,color, i)
    }
    document.getElementById("featuresize").value = s
  }
  
  function flyAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    let angle = Math.random() * 2 * Math.PI
    let angle2 = angle + Math.PI/7
    let inc = Math.PI/randomPick([4,3,8])
    //39 fly
    ctx.beginPath()
    ctx.ellipse(x, y, W/19+Math.random()*W/30, W/9, angle,0,Math.PI*2)
    ctx.stroke()
    ctx.beginPath()
    ctx.ellipse(x, y, W/19, W/9+Math.random()*W/30, angle+inc,0,Math.PI*2)
    ctx.stroke()
    ctx.beginPath()
    ctx.ellipse(x, y, W/19+Math.random()*W/30, W/9, angle2+inc,0,Math.PI*2)
    ctx.stroke()
  }
  
  function almost_hanged_manAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    //1
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+20*H/24)
    cpx = x+12*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+20*H/24)
    cpx = x+16*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+15*H/24)
    cpx = x+18*W/24
    cpy = y+15*H/24
    ctx.stroke()
  
    //2
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+16*H/24)
    cpx = x+18*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+21*H/24)
    ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+15*H/24)
    cpx = x+18*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+19*H/24)
    cpx = x+16*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+22*H/24)
    ctx.stroke()
  
    //4
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+23*H/24)
    cpx = x+12*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+21*H/24)
    ctx.stroke()
  
    //5
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+23*H/24)
    cpx = x+18*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+16*H/24)
    ctx.stroke()
  
    //6
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+23*H/24)
    cpx = x+7*W/24
    cpy = y+23*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+21*H/24)
    ctx.stroke()
  
    //7
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+19*H/24)
    cpx = x+8*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+22*H/24)
    ctx.stroke()
  
    //8
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+16*H/24)
    cpx = x+7*W/24
    cpy = y+17*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+18*H/24)
    cpx = x+9*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+23*H/24)
    ctx.stroke()
  
    //9
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+17*H/24)
    cpx = x+12*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+18*H/24)
    ctx.stroke()
  
    //10
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+15*H/24)
    cpx = x+20*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+12*H/24)
    cpx = x+20*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+10*H/24)
    cpx = x+18*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+11*H/24)
    ctx.stroke()
  
    //11
    //12
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+12*H/24)
    cpx = x+16*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+13*H/24)
    ctx.stroke()
  
    //13
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+16*H/24)
    cpx = x+6*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+13*H/24)
    ctx.stroke()
  
    //14 ear left

     //43
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+15*H/24)
    cpx = x+5*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+13*H/24)
    cpx = x+4*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+10*H/24)
    cpx = x+6*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+11*H/24)
    ctx.stroke()
    //44
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+14*H/24)
    cpx = x+5*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+12*H/24)
    ctx.stroke()
  
    //15
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+14*H/24)
    cpx = x+11*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+14*H/24)
    ctx.stroke()
  
    //16 nostril

    //18
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+12*H/24)
    cpx = x+10*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+14*H/24)
    ctx.stroke()
  
    //19
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+8*H/24)
    cpx = x+9*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+8*H/24)
    cpx = x+11*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+10*H/24)
    ctx.stroke()
  
    //20 right hair
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+10*H/24)
    cpx = x+19*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+5*H/24)
    cpx = x+17*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+3*H/24)
    cpx = x+16*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+7*H/24)
    cpx = x+18*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+10*H/24)
    ctx.stroke()
  
    //21
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+8*H/24)
    cpx = x+14*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+8*H/24)
    ctx.stroke()
  
    //22
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+6*H/24)
    cpx = x+9*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+6*H/24)
    ctx.stroke()
  
    //23
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+10*H/24)
    cpx = x+7*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+6*H/24)
    cpx = x+7*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+4*H/24)
    cpx = x+5*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+6*H/24)
    cpx = x+5*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+10*H/24)
    cpx = x+6*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+10*H/24)
    //ctx.stroke()
  
    //24 top hair
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+4*H/24)
    cpx = x+7*W/24
    cpy = y+1*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+1*H/24)
    cpx = x+14*W/24
    cpy = y+1*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+3*H/24)
    cpx = x+16*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+4*H/24)
    cpx = x+13*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+3*H/24)
    cpx = x+7*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+4*H/24)
    ctx.stroke()
  
    //25
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+10*H/24)
    cpx = x+8*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+9*H/24)
    ctx.stroke()
  
    //26
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+10*H/24)
    cpx = x+9*W/24
    cpy = y+9.4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
    ctx.stroke()
  
    //27
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+10*H/24)
    cpx = x+9*W/24
    cpy = y+10.7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
    ctx.stroke()
  
    //28
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+10*H/24)
    cpx = x+14*W/24
    cpy = y+10.6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+10*H/24)
    cpx = x+14*W/24
    cpy = y+9.4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+10*H/24)
    ctx.stroke()
  
    //29
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+9*H/24)
    cpx = x+14*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+9*H/24)
    ctx.stroke()
  
    //30
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+10*H/24)
    cpx = x+10*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+9*H/24)
    ctx.stroke()
  
    //31
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+16*H/24)
    cpx = x+12*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+16*H/24)
    ctx.stroke()
  
    //32
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+7*H/24)
    cpx = x+8*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+6*H/24)
    cpx = x+10*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+6*H/24)
    ctx.stroke()
  
    //33
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+13*H/24)
    cpx = x+18*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+13*H/24)
    cpx = x+19*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+11*H/24)
    ctx.stroke()
  
    //34
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+12*H/24)
    cpx = x+5*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+12*H/24)
    //ctx.stroke()
  
    //35
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+11*H/24)
    cpx = x+10*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
    ctx.stroke()
  
    //36
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+12*H/24)
    cpx = x+19*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+13*H/24)
    ctx.stroke()
  
      //46 rt side of nose
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+15*H/24)
    cpx = x+14*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+13*H/24)
    cpx = x+12*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+11*H/24)
    ctx.stroke()
    //37
    ctx.beginPath()
    ctx.arc(x+9.3*W/24, y+10*H/24, W/88, 0, Math.PI*2)
    ctx.stroke()
  
    //38
    ctx.beginPath()
    ctx.arc(x+14.4*W/24, y+10*H/24, W/88, 0, Math.PI*2)
    ctx.stroke()
  
    //39 fly
    ctx.lineWidth /=2
    ctx.beginPath()
    ctx.ellipse(x+9*W/24, y+2*H/24, W/96, W/48, Math.PI/5,0,Math.PI*2)
    ctx.stroke()
    ctx.beginPath()
    ctx.ellipse(x+9.2*W/24, y+2.3*H/24, W/96, W/48, Math.PI/2,0,Math.PI*2)
    ctx.stroke()
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
      //48 mouth
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+16*H/24)
    cpx = x+10*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+15*H/24)
    cpx = x+12*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+15*H/24)
    cpx = x+13*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+16*H/24)
    ctx.stroke()
    
    //40 rt nostril
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+14*H/24)
    cpx = x+12*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
    ctx.stroke()
    
      //50 left hair
//52
ctx.beginPath()
ctx.moveTo(x+5*W/24, y+10*H/24)
cpx = x+5*W/24
cpy = y+3*H/24
ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+4*H/24)
cpx = x+7*W/24
cpy = y+8*H/24
ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+10*H/24)
cpx = x+5*W/24
cpy = y+10*H/24
ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+10*H/24)
ctx.stroke()
  }
  
  function checkpointAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    //1
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+20*H/24)
    ctx.lineTo(x+8*W/24, y+20*H/24)
    ctx.lineTo(x+8*W/24, y+7*H/24)
    ctx.lineTo(x+5*W/24, y+3*H/24)
    ctx.lineTo(x+2*W/24, y+7*H/24)
    ctx.lineTo(x+2*W/24, y+20*H/24)
    ctx.stroke()
  
    //2
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+8*H/24)
    ctx.lineTo(x+3*W/24, y+19*H/24)
    ctx.lineTo(x+7*W/24, y+19*H/24)
    ctx.lineTo(x+7*W/24, y+8*H/24)
    cpx = x+7*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+6*H/24)
    cpx = x+3*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+8*H/24)
    ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.moveTo(x+22*W/24, y+20*H/24)
    cpx = x+18*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+20*H/24)
    ctx.lineTo(x+18*W/24, y+19*H/24)
    ctx.lineTo(x+22*W/24, y+19*H/24)
    ctx.lineTo(x+22*W/24, y+20*H/24)
    ctx.stroke()
  
    //4
    ctx.beginPath()
    ctx.moveTo(x+21*W/24, y+19*H/24)
    ctx.lineTo(x+21*W/24, y+13*H/24)
    cpx = x+21*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+12*H/24)
    cpx = x+19*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+13*H/24)
    cpx = x+19*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+19*H/24)
    ctx.stroke()
  
    //5
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+14*H/24)
    ctx.lineTo(x+9*W/24, y+14*H/24)
    ctx.lineTo(x+9*W/24, y+12*H/24)
    ctx.lineTo(x+20*W/24, y+12*H/24)
    ctx.stroke()
    //6
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+14*H/24)
    ctx.lineTo(x+11*W/24, y+12*H/24)
    ctx.stroke()
    //7
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+14*H/24)
    ctx.lineTo(x+13*W/24, y+12*H/24)
    ctx.stroke()
    //8
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+14*H/24)
    ctx.lineTo(x+15*W/24, y+12*H/24)
    ctx.stroke()
    //9
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+14*H/24)
    ctx.lineTo(x+17*W/24, y+12*H/24)
    ctx.stroke()
    //10
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+14*H/24)
    ctx.lineTo(x+19*W/24, y+12*H/24)
    ctx.stroke()
   //12
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+13*H/24)
    ctx.lineTo(x+8*W/24, y+13*H/24)
    ctx.stroke()
    //11
    ctx.beginPath()
    ctx.arc(x+20*W/24, y+13*H/24, W/48,0,Math.PI*2)
    ctx.stroke()
  }
  
  function alarm_clockAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    //2
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+12*H/24)
    ctx.lineTo(x+10*W/24, y+12*H/24)
    cpx = x+10*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
    cpx = x+14*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+12*H/24)
    ctx.stroke()
    //3
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+15*H/24)
    ctx.lineTo(x+14*W/24, y+15*H/24)
    ctx.lineTo(x+14*W/24, y+16*H/24)
    ctx.lineTo(x+10*W/24, y+16*H/24)
    ctx.lineTo(x+10*W/24, y+15*H/24)
    ctx.stroke()
    //4
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+12*H/24)
    cpx = x+11*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+11*H/24)
    cpx = x+13*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+12*H/24)
    ctx.stroke()
    //5
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+12*H/24)
    cpx = x+14*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+15*H/24)
    ctx.stroke()
    //6
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+12*H/24)
    cpx = x+13*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+15*H/24)
    ctx.stroke()
    //7
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+16*H/24)
    ctx.lineTo(x+16*W/24, y+16*H/24)
    ctx.stroke()
    //8
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+11*H/24)
    ctx.lineTo(x+16*W/24, y+10*H/24)
    ctx.lineTo(x+20*W/24, y+10*H/24)
    ctx.lineTo(x+20*W/24, y+11*H/24)
    ctx.stroke()
    //9
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+11*H/24)
    ctx.lineTo(x+19*W/24, y+11*H/24)
    ctx.stroke()
    //10
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+11*H/24)
    cpx = x+17*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+16*H/24)
    ctx.stroke()
    //11
    ctx.beginPath()
    ctx.moveTo(x+20*W/24, y+11*H/24)
    cpx = x+18*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+16*H/24)
    ctx.stroke()
  
    //12
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+16*H/24)
    ctx.lineTo(x+7*W/24, y+16*H/24)
    ctx.lineTo(x+7*W/24, y+10*H/24)
    ctx.lineTo(x+6*W/24, y+10*H/24)
    cpx = x+6*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+11*H/24)
    ctx.lineTo(x+6*W/24, y+11*H/24)
    ctx.lineTo(x+6*W/24, y+16*H/24)
    ctx.stroke()
  
    //13
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+11*H/24)
    ctx.lineTo(x+8*W/24, y+12*H/24)
    ctx.lineTo(x+9*W/24, y+12*H/24)
    ctx.lineTo(x+9*W/24, y+11*H/24)
    ctx.lineTo(x+8*W/24, y+11*H/24)
    ctx.stroke()
  
    //14
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+14*H/24)
    ctx.lineTo(x+8*W/24, y+15*H/24)
    ctx.lineTo(x+9*W/24, y+15*H/24)
    ctx.lineTo(x+9*W/24, y+14*H/24)
    ctx.lineTo(x+8*W/24, y+14*H/24)
    ctx.stroke()
  
    //15
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+9*H/24)
    ctx.lineTo(x+3*W/24, y+17*H/24)
    ctx.lineTo(x+21*W/24, y+17*H/24)
    ctx.lineTo(x+21*W/24, y+9*H/24)
    ctx.lineTo(x+3*W/24, y+9*H/24)
    ctx.stroke()
  
    //16
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+19*H/24)
    ctx.lineTo(x+21*W/24, y+19*H/24)
    cpx = x+23*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+17*H/24)
    ctx.lineTo(x+23*W/24, y+9*H/24)
    cpx = x+23*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+7*H/24)
    ctx.lineTo(x+3*W/24, y+7*H/24)
    cpx = x+1*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+1*W/24, y+9*H/24)
    ctx.lineTo(x+1*W/24, y+17*H/24)
    cpx = x+1*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+19*H/24)
    ctx.stroke()
  
    //17
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+19*H/24)
    ctx.lineTo(x+3*W/24, y+20*H/24)
    ctx.lineTo(x+5*W/24, y+20*H/24)
    ctx.lineTo(x+5*W/24, y+19*H/24)
    ctx.stroke()
  
    //18
    ctx.beginPath()
    ctx.moveTo(x+21*W/24, y+19*H/24)
    ctx.lineTo(x+21*W/24, y+20*H/24)
    ctx.lineTo(x+19*W/24, y+20*H/24)
    ctx.lineTo(x+19*W/24, y+19*H/24)
    ctx.stroke()
  
    //19
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+7*H/24)
    ctx.lineTo(x+10*W/24, y+6*H/24)
    ctx.lineTo(x+14*W/24, y+6*H/24)
    ctx.lineTo(x+14*W/24, y+7*H/24)
    ctx.stroke()
    
 
    //21
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+13*H/24)
    ctx.lineTo(x+7*W/24, y+13*H/24)
    ctx.stroke()

    //22
    ctx.beginPath()
    ctx.moveTo(x+17.5*W/24, y+13*H/24)
    ctx.lineTo(x+18.4*W/24, y+13*H/24)
    ctx.stroke()

    //24
    ctx.beginPath()
    ctx.moveTo(x+12.8*W/24, y+13*H/24)
    ctx.lineTo(x+13.6*W/24, y+13*H/24)
    ctx.stroke()
  }
  
  function teak_rat_sculptureAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    //1
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+18*H/24)
    ctx.lineTo(x+20*W/24, y+18*H/24)
    ctx.lineTo(x+20*W/24, y+10*H/24)
    cpx = x+12*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+14*H/24)
    cpx = x+8*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+16*H/24)
    cpx = x+2*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+18*H/24)
    ctx.stroke()
  
    //2
    ctx.beginPath()
    ctx.moveTo(x+20*W/24, y+16*H/24)
    cpx = x+22*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+14*H/24)
    cpx = x+22*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+7*H/24)
    ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+18*H/24)
    ctx.lineTo(x+7*W/24, y+20*H/24)
    ctx.stroke()
  
    //4
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+18*H/24)
    ctx.lineTo(x+10*W/24, y+20*H/24)
    ctx.stroke()
  
    //5
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+18*H/24)
    ctx.lineTo(x+20*W/24, y+20*H/24)
    ctx.stroke()
  
    //6
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+18*H/24)
    ctx.lineTo(x+16*W/24, y+20*H/24)
    ctx.stroke()
  
    //7 eye
    ctx.beginPath()
    ctx.arc(x+11*W/24, y+15*H/24, W/48, 0, Math.PI*2)
    ctx.stroke()
  
    //8
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+16*H/24)
    ctx.lineTo(x+2*W/24, y+14*H/24)
    ctx.stroke()
  
    //9
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+16*H/24)
    ctx.lineTo(x+4*W/24, y+14*H/24)
    ctx.stroke()
  
    //10
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+16*H/24)
    ctx.lineTo(x+6*W/24, y+14*H/24)
    ctx.stroke()
  }
  
  function coat_hangerAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
      //1
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+5*H/24)
    cpx = x+14*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
    cpx = x+10*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+4*H/24)
    cpx = x+10*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+6*H/24)
    cpx = x+12*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
    cpx = x+12*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+9*H/24)
    ctx.stroke()

    //2
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+20*H/24)
    ctx.lineTo(x+20*W/24, y+20*H/24)
    cpx = x+22*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+18*H/24)
    cpx = x+20*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+9*H/24)
    ctx.stroke()

    //3
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+20*H/24)
    cpx = x+2*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+18*H/24)
    cpx = x+4*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+9*H/24)
    ctx.stroke()
  }
  
  function fish_hookAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
  //1
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+22*H/24)
    cpx = x+8*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+18*H/24)
    cpx = x+9*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+12*H/24)
    cpx = x+12*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
    cpx = x+12*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
    cpx = x+13*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+3*H/24)
    cpx = x+13*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
    cpx = x+11*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+3*H/24)
    cpx = x+11*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
    ctx.stroke()

    //2
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+22*H/24)
    cpx = x+16*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+18*H/24)
    cpx = x+16*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+16*H/24)
    cpx = x+16*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+18*H/24)
    ctx.stroke()
  }
  
  function herdAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    let s = +document.getElementById("featuresize").value
    document.getElementById("featuresize").value = s/3
    ctx.strokeStyle = color
    ctx.fillStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    let pad = 2*W/24
    let i = 0,x1 = pad, y1 = pad, W1=W/6
    let space = W1/20
    let f = Math.floor(Math.random() * 25)
    for (; i < 25; i++) {
      if (i > 0 && i % 5 === 0) {
        y1 += W1 +space
        x1 = pad
      } 
     // y1 += pet (W/12)
      animalAt (x+x1,y+y1,W1,color, f===i)
      x1 += W1 + space
    }
    document.getElementById("featuresize").value = s
  }
  
  function animalAt (x,y,W,color,f) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    //1
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+16*H/24)
    cpx = x+19*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+12*H/24)
    cpx = x+19*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
    cpx = x+5*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+12*H/24)
    cpx = x+5*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+16*H/24)
    if(f)
      ctx.fill()
    else
      ctx.stroke()
  
    //2
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+15*H/24)
    ctx.lineTo(x+7*W/24, y+22*H/24)
    ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+15*H/24)
    ctx.lineTo(x+9*W/24, y+22*H/24)
    ctx.stroke()
  
    //4
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+15*H/24)
    ctx.lineTo(x+17*W/24, y+22*H/24)
    ctx.stroke()
  
    //5
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+15*H/24)
    ctx.lineTo(x+15*W/24, y+22*H/24)
    ctx.stroke()
    
  let r = Math.random()
  if (r < 0.25) {
     //6
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+12*H/24)
    ctx.lineTo(x+20*W/24, y+8*H/24)
    ctx.stroke()
    //7 up right
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+12*H/24)
    ctx.lineTo(x+4*W/24, y+16*H/24)
    ctx.stroke()

    //8
    ctx.beginPath()
    ctx.moveTo(x+20*W/24, y+8*H/24)
    cpx = x+22*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+6*H/24)
    cpx = x+22*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+4*H/24)
    cpx = x+20*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+8*H/24)
    if(f)
      ctx.fill()
    ctx.stroke()
  } else 
  if (r < 0.5) {
      //14
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+12*H/24)
    ctx.lineTo(x+4*W/24, y+8*H/24)
    ctx.stroke()
    //9
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+12*H/24)
    ctx.lineTo(x+20*W/24, y+16*H/24)
    cpx = x+22*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+18*H/24)
    cpx = x+22*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+20*H/24)
    cpx = x+20*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+16*H/24)
    if(f)
      ctx.fill()
    ctx.stroke()
  } else 
    if (r < 0.75) {
    //10
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+12*H/24)
    ctx.lineTo(x+4*W/24, y+8*H/24)
    cpx = x+2*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+6*H/24)
    cpx = x+2*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+4*H/24)
    cpx = x+4*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+8*H/24)
    if(f)
      ctx.fill()
    ctx.stroke()

    //11
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+12*H/24)
    ctx.lineTo(x+20*W/24, y+16*H/24)
    ctx.stroke()
  }  else  {
     //12
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+12*H/24)
    ctx.lineTo(x+4*W/24, y+16*H/24)
    cpx = x+2*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+18*H/24)
    cpx = x+2*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+20*H/24)
    cpx = x+4*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+16*H/24)
    if(f)
      ctx.fill()
    ctx.stroke()

    //15
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+12*H/24)
    ctx.lineTo(x+20*W/24, y+8*H/24)
    ctx.stroke()
  }
  
}
  
  function rainbowAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+17*H/24)
    cpx = x+3*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
    cpx = x+21*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+17*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+17*H/24)
    cpx = x+5*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+9*H/24)
    cpx = x+19*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+17*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+17*H/24)
    cpx = x+7*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+11*H/24)
    cpx = x+17*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+17*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+17*H/24)
    cpx = x+9*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+13*H/24)
    cpx = x+15*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+17*H/24)
    ctx.stroke()
  }
  
  function keyAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+22*H/24)
    ctx.lineTo(x+11*W/24, y+8*H/24)
    ctx.lineTo(x+9*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+17*H/24)
    ctx.lineTo(x+12*W/24, y+8*H/24)
    ctx.lineTo(x+14*W/24, y+8*H/24)
    cpx = x+16*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+6*H/24)
    cpx = x+16*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+4*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+8*H/24)
    cpx = x+7*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+6*H/24)
    cpx = x+7*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+4*H/24)
    cpx = x+9*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+2*H/24)
    cpx = x+12*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
    cpx = x+14*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+4*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+7*H/24)
    cpx = x+8*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+6*H/24)
    cpx = x+8*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+5*H/24)
    cpx = x+10*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+5*H/24)
    cpx = x+10*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+4*H/24)
    cpx = x+10*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+3*H/24)
    cpx = x+12*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+3*H/24)
    cpx = x+13*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+4*H/24)
    cpx = x+13*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+5*H/24)
    cpx = x+14*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+5*H/24)
    cpx = x+15*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+6*H/24)
    cpx = x+15*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+7*H/24)
    ctx.lineTo(x+9*W/24, y+7*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+8*H/24)
    ctx.lineTo(x+11*W/24, y+22*H/24)
    ctx.lineTo(x+12*W/24, y+22*H/24)
    ctx.lineTo(x+12*W/24, y+20*H/24)
    ctx.lineTo(x+14*W/24, y+20*H/24)
    ctx.lineTo(x+14*W/24, y+22*H/24)
    ctx.lineTo(x+15*W/24, y+22*H/24)
    ctx.lineTo(x+15*W/24, y+17*H/24)
    ctx.lineTo(x+14*W/24, y+17*H/24)
    ctx.lineTo(x+14*W/24, y+19*H/24)
    ctx.lineTo(x+12*W/24, y+19*H/24)
    ctx.lineTo(x+12*W/24, y+8*H/24)
    ctx.stroke()
  }
  
  function too_many_thingsAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
   // let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    let s = +document.getElementById("featuresize").value
    document.getElementById("featuresize").value = s/3
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    let pad = 2*W/24
    let i = 0,x1 = pad, y1 = pad,W1=W/5
    let space = W1/7
    //shuffle(atList)
    let index = Math.floor(atList.length * Math.random())
    for (; i < 16; i++) {
       if (i > 0 && i % 4 === 0) {
         y1 += W1 +space
         x1 = pad
       } 
       window [atList[index%atList.length]] (x+x1,y+y1,W1,color)
       x1 += W1 + space
       index++
     }
    document.getElementById("featuresize").value = s
  }
  
  function flock_of_birdsAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    let i = 0,x1,y1,W1=W/8
    let pad = 2*W/24
    for (; i < 23; i++) {
      x1 = x + (Math.random() * (W - 2*pad))
      y1 = y + (Math.random() * (H - 2*pad))
      gullAt (x1,y1,W1,color)
    }
  }
  
  function gullAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    let r = Math.random()
    if (r < 0.333) {
      ctx.beginPath()
      ctx.moveTo(x+2*W/24, y+18*H/24)
      cpx = x+4*W/24
      cpy = y+11*H/24
      ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+11*H/24)
      cpx = x+12*W/24
      cpy = y+11*H/24
      ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+14*H/24)
      cpx = x+13*W/24
      cpy = y+8*H/24
      ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+7*H/24)
      cpx = x+21*W/24
      cpy = y+6*H/24
      ctx.quadraticCurveTo(cpx, cpy, x+23*W/24, y+8*H/24)
      ctx.stroke()
    } else 
    if (r < 0.667) {
      ctx.beginPath()
      ctx.moveTo(x+22*W/24, y+18*H/24)
      cpx = x+20*W/24
      cpy = y+11*H/24
      ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+11*H/24)
      cpx = x+14*W/24
      cpy = y+11*H/24
      ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+14*H/24)
      cpx = x+13*W/24
      cpy = y+8*H/24
      ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+7*H/24)
      cpx = x+6*W/24
      cpy = y+6*H/24
      ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+8*H/24)
      ctx.stroke()
    } else {
      ctx.beginPath()
      ctx.moveTo(x+22*W/24, y+9*H/24)
      cpx = x+19*W/24
      cpy = y+11*H/24
      ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+11*H/24)
      cpx = x+12*W/24
      cpy = y+11*H/24
      ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
      cpx = x+12*W/24
      cpy = y+11*H/24
      ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+11*H/24)
      cpx = x+5*W/24
      cpy = y+11*H/24
      ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+9*H/24)
      ctx.stroke()
    }
  }
  
  function antsAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    let i = 0,x1,y1,W1=W/8
    let pad = 2*W/24
    for (; i < 19; i++) {
      x1 = x + (Math.random() * (W - 2*pad))
      y1 = y + (Math.random() * (H - 2*pad))
      antAt (x1,y1,W1,color)
    }
  }
  
function evidenceAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+12*H/24)
  ctx.lineTo(x+6*W/24, y+1*H/24)
  ctx.lineTo(x+10*W/24, y+13*H/24)
  ctx.lineTo(x+20*W/24, y+9*H/24)
  ctx.lineTo(x+16*W/24, y+1*H/24)
  ctx.lineTo(x+6*W/24, y+1*H/24)
  ctx.stroke()
  //7
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+1*H/24)
  ctx.lineTo(x+20*W/24, y+9*H/24)
  ctx.lineTo(x+10*W/24, y+13*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+12*H/24)
  ctx.lineTo(x+9*W/24, y+10*H/24)
  ctx.stroke()
  //3
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+16*H/24)
  ctx.lineTo(x+15*W/24, y+18*H/24)
  cpx = x+20*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+17*H/24)
  cpx = x+22*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+14*H/24)
  cpx = x+20*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+16*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+18*H/24)
  cpx = x+16*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+20*H/24)
  cpx = x+8*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+20*H/24)
  ctx.stroke()
  //5
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+20*H/24)
  cpx = x+14*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+16*H/24)
  ctx.stroke()
  //2 2
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+5*H/24)
  cpx = x+9*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
  cpx = x+15*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+4*H/24)
  cpx = x+15*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
  cpx = x+17*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+8*H/24)
  ctx.stroke()
}
  
function antAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/75
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  let r = 2.8 * W/24
  if (Math.random() > 0.5) {
    ctx.beginPath()
    ctx.arc(x+12*W/24, y+12*H/24,r,0,Math.PI*2)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+16*W/24, y+16*H/24,r,0,Math.PI*2)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+8*W/24, y+8*H/24,r,0,Math.PI*2)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+9*H/24)
    ctx.lineTo(x+12*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+15*H/24)
    ctx.lineTo(x+12*W/24, y+18*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+12*H/24)
    ctx.lineTo(x+18*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+12*H/24)
    ctx.lineTo(x+6*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+14*H/24)
    ctx.lineTo(x+8*W/24, y+16*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+10*H/24)
    ctx.lineTo(x+16*W/24, y+8*H/24)
    ctx.stroke()
  } else {
    ctx.beginPath()
    ctx.arc(x+12*W/24, y+12*H/24,r,0,Math.PI*2)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+16*W/24, y+8*H/24,r,0,Math.PI*2)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.arc(x+8*W/24, y+16*H/24,r,0,Math.PI*2)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+9*H/24)
    ctx.lineTo(x+12*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+15*H/24)
    ctx.lineTo(x+12*W/24, y+18*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+12*H/24)
    ctx.lineTo(x+6*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+12*H/24)
    ctx.lineTo(x+18*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+10*H/24)
    ctx.lineTo(x+8*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+14*H/24)
    ctx.lineTo(x+16*W/24, y+16*H/24)
    ctx.stroke()
  }
}
  
  function aiAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+3*W/24, y+5*H/24)
    cpx = x+3*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+2*H/24)
    cpx = x+9*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+4*H/24)
    cpx = x+9*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+5*H/24)
    cpx = x+6*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+5*H/24)
    cpx = x+5*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+6*H/24)
    cpx = x+3*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+5*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+5*H/24)
    cpx = x+15*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+3*H/24)
    cpx = x+21*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+6*H/24)
    cpx = x+21*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+7*H/24)
    cpx = x+19*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+6*H/24)
    cpx = x+18*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+6*H/24)
    cpx = x+15*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+5*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+11*H/24)
    cpx = x+2*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+9*H/24)
    cpx = x+8*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+12*H/24)
    cpx = x+8*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+13*H/24)
    cpx = x+6*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+12*H/24)
    cpx = x+5*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+12*H/24)
    cpx = x+2*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+11*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+10*H/24)
    cpx = x+11*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+8*H/24)
    cpx = x+17*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+11*H/24)
    cpx = x+17*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+12*H/24)
    cpx = x+15*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+11*H/24)
    cpx = x+14*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+11*H/24)
    cpx = x+11*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+17*H/24)
    cpx = x+16*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+14*H/24)
    cpx = x+22*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+16*H/24)
    cpx = x+22*W/24
    cpy = y+17*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+17*H/24)
    cpx = x+19*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+17*H/24)
    cpx = x+18*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+18*H/24)
    cpx = x+16*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+17*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+21*H/24)
    cpx = x+2*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+18*H/24)
    cpx = x+8*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+20*H/24)
    cpx = x+8*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+21*H/24)
    cpx = x+5*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+21*H/24)
    cpx = x+4*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+22*H/24)
    cpx = x+2*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+21*H/24)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+16*H/24)
    cpx = x+8*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+14*H/24)
    cpx = x+14*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+17*H/24)
    cpx = x+14*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+18*H/24)
    cpx = x+12*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+17*H/24)
    cpx = x+11*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+17*H/24)
    cpx = x+8*W/24
    cpy = y+17*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+16*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+21*H/24)
    cpx = x+12*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+19*H/24)
    cpx = x+18*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+22*H/24)
    cpx = x+18*W/24
    cpy = y+23*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+23*H/24)
    cpx = x+16*W/24
    cpy = y+23*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+22*H/24)
    cpx = x+15*W/24
    cpy = y+23*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+22*H/24)
    cpx = x+12*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+21*H/24)
    ctx.stroke()
  
    ctx.setLineDash([4,8])
    
    ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+19*H/24)
  ctx.lineTo(x+15*W/24, y+20*H/24)
  ctx.lineTo(x+19*W/24, y+15*H/24)
  ctx.lineTo(x+18*W/24, y+4*H/24)
  ctx.lineTo(x+6*W/24, y+3*H/24)
  ctx.lineTo(x+5*W/24, y+10*H/24)
  ctx.lineTo(x+5*W/24, y+19*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+19*H/24)
  ctx.lineTo(x+11*W/24, y+15*H/24)
  ctx.lineTo(x+15*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+15*H/24)
  ctx.lineTo(x+11*W/24, y+15*H/24)
  ctx.lineTo(x+14*W/24, y+9*H/24)
  ctx.lineTo(x+19*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+4*H/24)
  ctx.lineTo(x+14*W/24, y+9*H/24)
  ctx.lineTo(x+11*W/24, y+7*H/24)
  ctx.lineTo(x+18*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+10*H/24)
  ctx.lineTo(x+11*W/24, y+7*H/24)
  ctx.lineTo(x+6*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+10*H/24)
  ctx.lineTo(x+11*W/24, y+15*H/24)
  ctx.stroke()
    ctx.setLineDash([])
  }
  
  function toy_drumAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+3*H/24)
    cpx = x+4*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+8*H/24)
    cpx = x+4*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
    cpx = x+20*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+8*H/24)
    cpx = x+20*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+3*H/24)
    ctx.stroke()
  //right top
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+4*H/24)
    cpx = x+19*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+8*H/24)
    cpx = x+19*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+13*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+4*H/24)
    cpx = x+5*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+8*H/24)
    cpx = x+5*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+13*H/24)
    ctx.stroke()
  
   // bottom
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+16*H/24)
    cpx = x+4*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
    cpx = x+20*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+14*H/24)
    ctx.lineTo(x+20*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+9*H/24)
    ctx.lineTo(x+4*W/24, y+16*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+13*H/24)
    ctx.lineTo(x+6*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+14*H/24)
    ctx.lineTo(x+9*W/24, y+21.5*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+14*H/24)
    ctx.lineTo(x+12*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+14*H/24)
    ctx.lineTo(x+15*W/24, y+21.5*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+13*H/24)
    ctx.lineTo(x+18*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+12*H/24)
    cpx = x+4*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+3*H/24)
    cpx = x+4*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+3*H/24)
    cpx = x+17*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+12*H/24)
    cpx = x+19*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+3*H/24)
    cpx = x+20*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+3*H/24)
    cpx = x+7*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+12*H/24)
    ctx.stroke()
  }
  
  function walk_it_backAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, poinats = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+20*H/24)
    ctx.lineTo(x+8*W/24, y+20*H/24)
    ctx.lineTo(x+4*W/24, y+19*H/24)
    cpx = x+4*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+18*H/24)
    cpx = x+7*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+18*H/24)
    ctx.lineTo(x+7*W/24, y+12*H/24)
    ctx.lineTo(x+8*W/24, y+4*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+20*H/24)
    ctx.lineTo(x+9*W/24, y+18*H/24)
    ctx.lineTo(x+10*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+20*H/24)
    ctx.lineTo(x+12*W/24, y+20*H/24)
    cpx = x+12*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+19*H/24)
    ctx.lineTo(x+15*W/24, y+18*H/24)
    ctx.lineTo(x+13*W/24, y+12*H/24)
    ctx.lineTo(x+13*W/24, y+5*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+12*H/24)
    ctx.lineTo(x+12*W/24, y+6*H/24)
    ctx.lineTo(x+13*W/24, y+5*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+15*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+20*H/24)
    ctx.lineTo(x+18*W/24, y+19*H/24)
    ctx.lineTo(x+17*W/24, y+17*H/24)
    ctx.lineTo(x+16*W/24, y+12*H/24)
    ctx.lineTo(x+17*W/24, y+5*H/24)
    ctx.lineTo(x+17*W/24, y+4*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+11*H/24)
    ctx.lineTo(x+20*W/24, y+11*H/24)
    ctx.lineTo(x+20*W/24, y+9*H/24)
    ctx.lineTo(x+22*W/24, y+12*H/24)
    ctx.lineTo(x+20*W/24, y+15*H/24)
    ctx.lineTo(x+20*W/24, y+13*H/24)
    ctx.lineTo(x+18*W/24, y+13*H/24)
    ctx.lineTo(x+18*W/24, y+11*H/24)
    ctx.stroke()
  }
  
  
  function islandAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+20*H/24)
    cpx = x+18*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+10*H/24)
    cpx = x+18*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+4*H/24)
    cpx = x+10*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
    cpx = x+10*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+14*H/24)
    cpx = x+4*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+17*H/24)
    cpx = x+4*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+4*H/24)
    cpx = x+4*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+2*H/24)
    cpx = x+4*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+4*H/24)
    cpx = x+8*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+2*H/24)
    cpx = x+8*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+4*H/24)
    cpx = x+12*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
    cpx = x+12*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+4*H/24)
    cpx = x+16*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+2*H/24)
    cpx = x+16*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+4*H/24)
    cpx = x+20*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+2*H/24)
    cpx = x+20*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+4*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+7*H/24)
    cpx = x+4*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+5*H/24)
    cpx = x+4*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+7*H/24)
    cpx = x+8*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+5*H/24)
    cpx = x+8*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+7*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+7*H/24)
    cpx = x+20*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+5*H/24)
    cpx = x+20*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+7*H/24)
    ctx.stroke()
    
    ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+13*H/24)
  cpx = x+4*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+11*H/24)
  cpx = x+4*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+13*H/24)
  cpx = x+8*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+11*H/24)
  cpx = x+8*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9.3*W/24, y+12.7*H/24)
  ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+10*H/24)
    cpx = x+4*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+8*H/24)
    cpx = x+4*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+10*H/24)
    cpx = x+8*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+8*H/24)
    cpx = x+8*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+10*H/24)
    cpx = x+20*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+8*H/24)
    cpx = x+20*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+13*H/24)
    cpx = x+4*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+11*H/24)
    cpx = x+4*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+13*H/24)
    cpx = x+8*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+11*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+13*H/24)
    cpx = x+20*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+11*H/24)
    cpx = x+20*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+13*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+16*H/24)
    cpx = x+4*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+14*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+16*H/24)
    cpx = x+20*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+14*H/24)
    cpx = x+20*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+16*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+19*H/24)
    cpx = x+4*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+17*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+22*W/24, y+19*H/24)
    cpx = x+20*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+17*H/24)
    cpx = x+20*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+19*H/24)
    cpx = x+16.3*W/24
    cpy = y+19.1*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16.2*W/24, y+17.3*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+22*H/24)
    cpx = x+4*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+20*H/24)
    cpx = x+4*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+22*H/24)
    cpx = x+8*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+20*H/24)
    cpx = x+8*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+22*H/24)
    cpx = x+12*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+20*H/24)
    cpx = x+12*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+22*H/24)
    cpx = x+16*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+20*H/24)
    cpx = x+16*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+22*H/24)
    cpx = x+20*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+20*H/24)
    cpx = x+20*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+22*H/24)
    ctx.stroke()
  }
  
  function thread_the_needleAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+13*W/24, y+24*H/24)
    cpx = x+13*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+18*H/24)
    cpx = x+18*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+10*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+8*H/24)
    cpx = x+18*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+2*H/24)
    cpx = x+6*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+9*H/24)
    cpx = x+6*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+18*H/24)
    cpx = x+11*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+24*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+22*W/24, y+7*H/24)
    cpx = x+20*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+8*H/24)
    cpx = x+12*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+22*W/24, y+9*H/24)
    cpx = x+20*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+10*H/24)
    cpx = x+12*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+14*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+10*H/24)
    cpx = x+16*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+16*H/24)
    cpx = x+8*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+9*H/24)
    cpx = x+8*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+4*H/24)
    cpx = x+16*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+15*H/24)
    cpx = x+6*W/24
    cpy = y+17*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+19*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+17*H/24)
    cpx = x+7*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+21*H/24)
    ctx.stroke()
  }
  
  function stone_axeAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+20*H/24)
    cpx = x+8*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+22*H/24)
    cpx = x+15*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+20*H/24)
    cpx = x+19*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+16*H/24)
    cpx = x+21*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+14*H/24)
    cpx = x+19*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+9*H/24)
    cpx = x+18*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+6*H/24)
    cpx = x+15*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+4*H/24)
    cpx = x+13*W/24
    cpy = y+2*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+3*H/24)
    cpx = x+10*W/24
    cpy = y+3*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+4*H/24)
    cpx = x+5*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+8*H/24)
    cpx = x+3*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+12*H/24)
    cpx = x+4*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+17*H/24)
    cpx = x+3*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+19*H/24)
    cpx = x+9*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+16*H/24)
    cpx = x+11*W/24
    cpy = y+19*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+21*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+16*H/24)
    cpx = x+12*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+15*H/24)
    cpx = x+11*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+15*H/24)
    cpx = x+15*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+15*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+19*H/24)
    cpx = x+14*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+17*H/24)
    cpx = x+19*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+16*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+17*H/24)
    cpx = x+7*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+14*H/24)
    cpx = x+6*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+8*H/24)
    cpx = x+8*W/24
    cpy = y+8*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+7*H/24)
    cpx = x+6*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+5*H/24)
    cpx = x+8*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+7*H/24)
    cpx = x+9*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+4*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+6*H/24)
    cpx = x+15*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+19*W/24, y+12*H/24)
    cpx = x+17*W/24
    cpy = y+13*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+14*H/24)
    cpx = x+19*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+14*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+20*H/24)
    cpx = x+6*W/24
    cpy = y+23*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+22*H/24)
    cpx = x+9*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+22*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+22*H/24)
    cpx = x+13*W/24
    cpy = y+23*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+3*H/24)
    cpx = x+12*W/24
    cpy = y+4*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+4*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+11*H/24)
    cpx = x+6*W/24
    cpy = y+11*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+10*H/24)
    cpx = x+7*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+8*H/24)
    cpx = x+16*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+11*H/24)
    cpx = x+17*W/24
    cpy = y+12*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+11*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+17*H/24)
    cpx = x+19*W/24
    cpy = y+18*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+18*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+10*H/24)
    cpx = x+10*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+5*H/24)
    cpx = x+11*W/24
    cpy = y+6*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/24, y+19*H/24)
    ctx.lineTo(x+5*W/24, y+18*H/24)
    ctx.lineTo(x+5*W/24, y+17*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+20*W/24, y+14*H/24)
    ctx.lineTo(x+19*W/24, y+15*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+7*W/24, y+22*H/24)
    ctx.lineTo(x+7*W/24, y+21*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+4*H/24)
    cpx = x+13*W/24
    cpy = y+5*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+6*H/24)
    cpx = x+14*W/24
    cpy = y+7*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+12*H/24)
    ctx.lineTo(x+10*W/24, y+14*H/24)
    ctx.stroke()
  }
  
  function indicate_by_pointingAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+22*H/24)
    cpx = x+19*W/24
    cpy = y+21*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+19*H/24)
    cpx = x+19*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+16*H/24)
    cpx = x+19*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+15*H/24)
    cpx = x+20*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+14*H/24)
    cpx = x+17*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+16*H/24)
    cpx = x+17*W/24
    cpy = y+10*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+10*H/24)
    cpx = x+17*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+9*H/24)
    cpx = x+15*W/24
    cpy = y+9*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+10*H/24)
    cpx = x+15*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+15*H/24)
    cpx = x+15*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+14*H/24)
    cpx = x+13*W/24
    cpy = y+14*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+15*H/24)
    cpx = x+13*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+16*H/24)
    cpx = x+13*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+15*H/24)
    cpx = x+11*W/24
    cpy = y+15*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+16*H/24)
    cpx = x+11*W/24
    cpy = y+17*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+17*H/24)
    cpx = x+11*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+16*H/24)
    cpx = x+9*W/24
    cpy = y+16*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+17*H/24)
    cpx = x+9*W/24
    cpy = y+20*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+20*H/24)
    cpx = x+9*W/24
    cpy = y+22*H/24
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+22*H/24)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+4*H/24)
    ctx.lineTo(x+2*W/24, y+8*H/24)
    ctx.lineTo(x+2*W/24, y+6*H/24)
    ctx.lineTo(x+22*W/24, y+6*H/24)
    ctx.lineTo(x+22*W/24, y+4*H/24)
    ctx.lineTo(x+22*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+18*W/24, y+4*H/24)
    ctx.lineTo(x+18*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+14*W/24, y+4*H/24)
    ctx.lineTo(x+14*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+10*W/24, y+4*H/24)
    ctx.lineTo(x+10*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+6*W/24, y+4*H/24)
    ctx.lineTo(x+6*W/24, y+8*H/24)
    ctx.stroke()
  }
  
function plastic_owlAt (x,y,W,color) {
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
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+20*H/24)
  cpx = x+17*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+16*H/24)
  cpx = x+17*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+9*H/24)
  cpx = x+18*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+6*H/24)
  cpx = x+17*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+4*H/24)
  cpx = x+17*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+3*H/24)
  cpx = x+17*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/24, y+1*H/24)
  cpx = x+15*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+3*H/24)
  cpx = x+12*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+3*H/24)
  cpx = x+9*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+1*H/24)
  cpx = x+7*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+3*H/24)
  cpx = x+7*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+4*H/24)
  cpx = x+7*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+6*H/24)
  cpx = x+6*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+9*H/24)
  cpx = x+7*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+16*H/24)
  cpx = x+7*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+20*H/24)
  cpx = x+7*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+7*H/24)
  cpx = x+15*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+13*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+7*H/24)
  cpx = x+9*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+13*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+6*H/24)
  cpx = x+9*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/24, y+5*H/24)
  cpx = x+9*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+4*H/24)
  cpx = x+11*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+5*H/24)
  cpx = x+11*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+6*H/24)
  cpx = x+13*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+5*H/24)
  cpx = x+13*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+4*H/24)
  cpx = x+15*W/24
  cpy = y+4*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+5*H/24)
  cpx = x+15*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+5*H/24)
  cpx = x+11*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+8*H/24)
  cpx = x+13*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+6*H/24)
  cpx = x+10*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+7*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+6*H/24)
  cpx = x+14*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+7*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+20*H/24)
  ctx.lineTo(x+10*W/24, y+17*H/24)
  ctx.lineTo(x+11*W/24, y+20*H/24)
  ctx.lineTo(x+9*W/24, y+18*H/24)
  ctx.lineTo(x+8*W/24, y+20*H/24)
  ctx.lineTo(x+8*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+17*H/24)
  ctx.lineTo(x+16*W/24, y+20*H/24)
  ctx.lineTo(x+15*W/24, y+18*H/24)
  ctx.lineTo(x+13*W/24, y+20*H/24)
  ctx.lineTo(x+14*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+3*H/24)
  ctx.lineTo(x+10*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+4*H/24)
  ctx.lineTo(x+15*W/24, y+3*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+16*H/24)
  ctx.lineTo(x+11*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+16*H/24)
  ctx.lineTo(x+12*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+16*H/24)
  ctx.lineTo(x+13*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+16*H/24)
  ctx.lineTo(x+10*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+16*H/24)
  ctx.lineTo(x+14*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+10*W/24, y+5*H/24,W/48, 0, Math.PI*2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+5*H/24,W/48, 0, Math.PI*2)
  ctx.stroke()
}

function furniture_at_nightAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.setLineDash([1,20])
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+16*H/24)
  ctx.lineTo(x+6*W/24, y+22*H/24)
  ctx.lineTo(x+7*W/24, y+22*H/24)
  ctx.lineTo(x+7*W/24, y+21*H/24)
  ctx.lineTo(x+17*W/24, y+21*H/24)
  ctx.lineTo(x+17*W/24, y+22*H/24)
  ctx.lineTo(x+18*W/24, y+22*H/24)
  ctx.lineTo(x+18*W/24, y+21*H/24)
  ctx.stroke()
  
  ctx.setLineDash([2,15])
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+16*H/24)
  ctx.lineTo(x+6*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+21*H/24)
  ctx.lineTo(x+18*W/24, y+15*H/24)
  ctx.stroke()
  
  ctx.setLineDash([4,10])
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+10*H/24)
  ctx.lineTo(x+6*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+15*H/24)
  ctx.lineTo(x+18*W/24, y+8*H/24)
  ctx.stroke()
  
  ctx.setLineDash([])
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+4*H/24)
  ctx.lineTo(x+6*W/24, y+2*H/24)
  ctx.lineTo(x+18*W/24, y+2*H/24)
  ctx.lineTo(x+18*W/24, y+3*H/24)
  ctx.stroke()
  
  ctx.setLineDash([8,10])
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+8*H/24)
  ctx.lineTo(x+18*W/24, y+3*H/24)
  ctx.stroke()
  
  //draws
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+7*H/24)
  ctx.lineTo(x+7*W/24, y+3*H/24)
  ctx.lineTo(x+17*W/24, y+3*H/24)
  ctx.stroke()
  let r = W/48
  ctx.beginPath()
  ctx.arc(x+9*W/24, y+5*H/24,r,0,Math.PI*2)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(x+15*W/24, y+5*H/24,r,0,Math.PI*2)
  ctx.stroke()
  
  ctx.setLineDash([4,10])
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+11*H/24)
  ctx.lineTo(x+7*W/24, y+7*H/24)
  ctx.lineTo(x+17*W/24, y+7*H/24)
  ctx.lineTo(x+17*W/24, y+3*H/24)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(x+9*W/24, y+9*H/24,r,0,Math.PI*2)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(x+15*W/24, y+9*H/24,r,0,Math.PI*2)
  ctx.stroke()
  
  ctx.setLineDash([3,10])
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+15*H/24)
  ctx.lineTo(x+7*W/24, y+11*H/24)
  ctx.lineTo(x+17*W/24, y+11*H/24)
  ctx.lineTo(x+17*W/24, y+7*H/24)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(x+9*W/24, y+13*H/24,r,0,Math.PI*2)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(x+15*W/24, y+13*H/24,r,0,Math.PI*2)
  ctx.stroke()
  
  ctx.setLineDash([2,15])
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+20*H/24)
  ctx.lineTo(x+7*W/24, y+15*H/24)
  ctx.lineTo(x+17*W/24, y+15*H/24)
  ctx.lineTo(x+17*W/24, y+11*H/24)
  ctx.stroke()
  ctx.setLineDash([1,20])
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+20*H/24)
  ctx.lineTo(x+17*W/24, y+20*H/24)
  ctx.lineTo(x+17*W/24, y+15*H/24)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(x+9*W/24, y+17.5*H/24,r,0,Math.PI*2)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(x+15*W/24, y+17.5*H/24,r,0,Math.PI*2)
  ctx.stroke()
  ctx.setLineDash([])
}

  
  function cubicleAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+6*H/24)
    ctx.lineTo(x+8*W/24, y+12*H/24)
    ctx.lineTo(x+8*W/24, y+22*H/24)
    ctx.lineTo(x+2*W/24, y+16*H/24)
    ctx.lineTo(x+2*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/24, y+6*H/24)
    ctx.lineTo(x+16*W/24, y+6*H/24)
    ctx.lineTo(x+22*W/24, y+12*H/24)
    ctx.lineTo(x+14*W/24, y+12*H/24)
    ctx.lineTo(x+14*W/24, y+22*H/24)
    ctx.lineTo(x+22*W/24, y+22*H/24)
    ctx.lineTo(x+22*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+6*H/24)
    ctx.lineTo(x+16*W/24, y+10*H/24)
    ctx.lineTo(x+16*W/24, y+11*H/24)
    ctx.lineTo(x+17*W/24, y+12*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+11*H/24)
    ctx.lineTo(x+10*W/24, y+11*H/24)
    ctx.lineTo(x+9*W/24, y+11*H/24)
    ctx.lineTo(x+12*W/24, y+14*H/24)
    ctx.lineTo(x+14*W/24, y+14*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+16*H/24)
    ctx.lineTo(x+14*W/24, y+16*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+14*H/24)
    ctx.lineTo(x+12*W/24, y+20*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+9*W/24, y+11*H/24)
    ctx.lineTo(x+9*W/24, y+17*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+11*W/24, y+7*H/24)
    ctx.lineTo(x+11*W/24, y+9*H/24)
    ctx.lineTo(x+14*W/24, y+9*H/24)
    ctx.lineTo(x+14*W/24, y+7*H/24)
    ctx.lineTo(x+11*W/24, y+7*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+17*W/24, y+8*H/24)
    ctx.lineTo(x+17*W/24, y+10*H/24)
    ctx.lineTo(x+19*W/24, y+12*H/24)
    ctx.lineTo(x+19*W/24, y+10*H/24)
    ctx.lineTo(x+17*W/24, y+8*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+16*W/24, y+6*H/24)
    ctx.lineTo(x+22*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+2*H/24)
    ctx.lineTo(x+16*W/24, y+6*H/24)
    ctx.lineTo(x+12*W/24, y+2*H/24)
    ctx.lineTo(x+12*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+2*H/24)
    ctx.lineTo(x+6*W/24, y+2*H/24)
    ctx.lineTo(x+6*W/24, y+6*H/24)
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(x+12*W/24, y+2*H/24)
    ctx.lineTo(x+18*W/24, y+2*H/24)
    ctx.lineTo(x+18*W/24, y+6*H/24)
    ctx.stroke()
    
    ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+12*H/24)
  ctx.lineTo(x+22*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+16*H/24)
  ctx.lineTo(x+1*W/24, y+15*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+6*H/24)
  ctx.lineTo(x+1*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+23*W/24, y+6*H/24)
  ctx.lineTo(x+22*W/24, y+6*H/24)
  ctx.stroke()
  }

function power_linesAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+2*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+4*H/24)
  ctx.lineTo(x+15*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+8*H/24)
  ctx.lineTo(x+17*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+9*H/24)
  ctx.lineTo(x+7*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+5*H/24)
  ctx.lineTo(x+9*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+5*H/24)
  ctx.lineTo(x+15*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+9*H/24)
  ctx.lineTo(x+17*W/24, y+10*H/24)
  ctx.stroke()
  
  ctx.lineWidth *= 0.5
  
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+2*H/24)
  ctx.lineTo(x+9*W/24, y+6*H/24)
  ctx.lineTo(x+5*W/24, y+22*H/24)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+2*H/24)
  ctx.lineTo(x+7*W/24, y+10*H/24)
  ctx.lineTo(x+5*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+2*H/24)
  ctx.lineTo(x+15*W/24, y+6*H/24)
  ctx.lineTo(x+6*W/24, y+22*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+22*H/24)
  ctx.lineTo(x+17*W/24, y+10*H/24)
  ctx.lineTo(x+22*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+9*H/24)
  ctx.lineTo(x+7*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+9*H/24)
  ctx.lineTo(x+17*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+5*H/24)
  ctx.lineTo(x+15*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+5*H/24)
  ctx.lineTo(x+9*W/24, y+4*H/24)
  ctx.stroke()
}

function vinylAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  ctx.lineWidth *= 1.3
  let r = H/60
  ctx.beginPath()
  ctx.arc(x+12*W/24, y+12*H/24,r,0,2*Math.PI)
  ctx.stroke()
  let i = 0
  r *= 5
  for (; i < 7; i++) {
    r+= H/24
    ctx.beginPath()
    ctx.arc(x+12*W/24, y+12*H/24,r,0,2*Math.PI)
    ctx.stroke()
    if (i === 0)
      ctx.lineWidth /= 2
  }
  ctx.lineWidth = 1.3 * (1 + document.getElementById("featuresize").value/50)
  r+= H/24
  ctx.beginPath()
  ctx.arc(x+12*W/24, y+12*H/24,r,0,2*Math.PI)
  ctx.stroke()
}

function strokeorfill (ctx) {
  
  ctx.stroke()
  if (Math.random() > 0.5) {
    ctx.closePath()
    ctx.fill()
  }
}

function pillAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+8*H/24)
  ctx.lineTo(x+7*W/24, y+12*H/24)
  ctx.lineTo(x+4*W/24, y+9*H/24)
  cpx = x+2*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+5*H/24)
  cpx = x+6*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+5*H/24)
  cpx = x+11*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+8*H/24)
  ctx.lineTo(x+17*W/24, y+12*H/24)
  ctx.lineTo(x+20*W/24, y+9*H/24)
  cpx = x+22*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+5*H/24)
  cpx = x+18*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+5*H/24)
  cpx = x+13*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+8*H/24)
  ctx.stroke()
  
  let r = W/64
  
  ctx.beginPath()
  ctx.arc(x+18*W/24, y+9*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+16*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+17*W/24, y+11*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+15*W/24, y+12*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+15*W/24, y+14*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+16*W/24, y+17*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+7*W/24, y+10*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+12*W/24, y+21*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+13*W/24, y+19*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+11*W/24, y+18*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+12*W/24, y+16*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+8*W/24, y+12*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+10*W/24, y+13*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+10*W/24, y+16*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+12*W/24, y+14*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+8*W/24, y+14*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+8*W/24, y+16*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+9*W/24, y+18*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+10*W/24, y+20*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+9*W/24, y+22*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+15*W/24, y+19*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+13*W/24, y+13*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+6*W/24, y+9*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+22*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+17*W/24, y+22*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+18*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+20*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+13*W/24, y+15*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+11*W/24, y+15*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+5*W/24, y+21*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+7*W/24, y+19*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+19*W/24, y+20*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)

  ctx.beginPath()
  ctx.arc(x+17*W/24, y+20*H/24,r,0,2*Math.PI)
  strokeorfill(ctx)
}

function compassAt (x,y,W,color) {
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
  ctx.lineTo(x+12*W/24, y+2*H/24)
  ctx.lineTo(x+13*W/24, y+2*H/24)
  ctx.lineTo(x+13*W/24, y+4*H/24)
  ctx.lineTo(x+11*W/24, y+4*H/24)
  ctx.lineTo(x+11*W/24, y+5*H/24)
  ctx.lineTo(x+14*W/24, y+5*H/24)
  ctx.lineTo(x+14*W/24, y+4*H/24)
  ctx.lineTo(x+13*W/24, y+4*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+5*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+21*W/24, y+20*H/24)
  ctx.lineTo(x+19*W/24, y+20*H/24)
  ctx.lineTo(x+12*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+5*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+3*W/24, y+20*H/24)
  ctx.lineTo(x+5*W/24, y+20*H/24)
  ctx.lineTo(x+13*W/24, y+5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+6*H/24)
  cpx = x+20*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+12*H/24)
  cpx = x+5*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+6*H/24)
  ctx.stroke()
}

function sol_lewittAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/25
  ctx.strokeStyle = color
 // ctx.lineCap = "square"
 // ctx.lineJoin = "bevel"

  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+2*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+2*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+20*H/24)
  ctx.lineTo(x+4*W/24, y+4*H/24)
  ctx.lineTo(x+20*W/24, y+4*H/24)
  ctx.lineTo(x+20*W/24, y+20*H/24)
  ctx.lineTo(x+4*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+4*H/24)
  ctx.lineTo(x+12*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+12*H/24)
  ctx.lineTo(x+20*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+10*H/24)
  ctx.lineTo(x+20*W/24, y+10*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+8*H/24)
  ctx.lineTo(x+20*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+6*H/24)
  ctx.lineTo(x+20*W/24, y+6*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+4*H/24)
  ctx.lineTo(x+10*W/24, y+12*H/24)
  ctx.stroke()
//
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+4*H/24)
  ctx.lineTo(x+8*W/24, y+11*H/24)
  ctx.lineTo(x+8*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+4*H/24)
  ctx.lineTo(x+6*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+14*H/24)
  ctx.lineTo(x+6*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+12*H/24)
  ctx.lineTo(x+20*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+12*H/24)
  ctx.lineTo(x+20*W/24, y+17*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+12*H/24)
  ctx.lineTo(x+20*W/24, y+14*H/24)
  ctx.stroke()
//
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+18*H/24)
  ctx.lineTo(x+14*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+20*H/24)
  ctx.lineTo(x+12*W/24, y+15*H/24)
  ctx.stroke()
  // lower left
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+18*H/24)
  ctx.lineTo(x+10*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+15*H/24)
  ctx.lineTo(x+7*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+20*H/24)
  ctx.lineTo(x+12*W/24, y+12*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+12*H/24)
  ctx.lineTo(x+4*W/24, y+17*H/24)
  ctx.stroke()
}
//
function mark_rothkoAt (x,y,W,color) {
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
  ctx.moveTo(x+3*W/24, y+2*H/24)
  ragged(ctx,x+21*W/24, y+2*H/24,x+3*W/24, y+2*H/24)
  ragged(ctx,x+21*W/24, y+8*H/24,x+21*W/24, y+2*H/24)
  ragged(ctx,x+3*W/24, y+8*H/24,x+21*W/24, y+8*H/24)
  ragged(ctx,x+3*W/24, y+2*H/24,x+3*W/24, y+8*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3.3*W/24, y+8.5*H/24)
  ragged (ctx,x+3.3*W/24, y+11.5*H/24,x+3.3*W/24, y+8.5*H/24)
  ragged (ctx,x+20.7*W/24, y+11.5*H/24,x+3.3*W/24, y+11.5*H/24)
  ragged (ctx,x+20.7*W/24, y+8.5*H/24, x+20.7*W/24, y+11.5*H/24)
  ragged (ctx,x+3.3*W/24, y+8.5*H/24,x+20.7*W/24, y+8.5*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+12*H/24)
  ragged(ctx,x+21*W/24, y+12*H/24,x+3*W/24, y+12*H/24)
  ragged(ctx,x+21*W/24, y+22*H/24,x+21*W/24, y+12*H/24)
  ragged(ctx,x+3*W/24, y+22*H/24,x+21*W/24, y+22*H/24)
  ragged(ctx,x+3*W/24, y+12*H/24,x+3*W/24, y+22*H/24)
  ctx.stroke()
}
 
function josef_albersAt (x,y,W,color) {
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
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+2*H/24)
  ctx.lineTo(x+2*W/24, y+2*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+21*H/24)
  ctx.lineTo(x+20*W/24, y+21*H/24)
  ctx.lineTo(x+20*W/24, y+5*H/24)
  ctx.lineTo(x+4*W/24, y+5*H/24)
  ctx.lineTo(x+4*W/24, y+21*H/24)
  //ctx.lineTo(x+6*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+20*H/24)
  ctx.lineTo(x+18*W/24, y+20*H/24)
  ctx.lineTo(x+18*W/24, y+8*H/24)
  ctx.lineTo(x+6*W/24, y+8*H/24)
  ctx.lineTo(x+6*W/24, y+20*H/24)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+19*H/24)
  ctx.lineTo(x+16*W/24, y+19*H/24)
  ctx.lineTo(x+16*W/24, y+11*H/24)
  ctx.lineTo(x+8*W/24, y+11*H/24)
  ctx.lineTo(x+8*W/24, y+19*H/24)
  ctx.stroke()
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
  
  let v = document.getElementById("featuresize").value
  document.getElementById("featuresize").value /= 2
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
  document.getElementById("featuresize").value = v
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
  
  let v = document.getElementById("featuresize").value
  document.getElementById("featuresize").value /= 2
  scriptAt(x+(4+pet(2))*W/24, y+8*H/24,H/25,color)
  scriptAt(x+(3.5+pet(2))*W/24, y+11*H/24,H/25,color)
  scriptAt(x+(8+pet(2))*W/24, y+11*H/24,H/25,color)
  scriptAt(x+(3.5+pet(2))*W/24, y+14*H/24,H/25,color)
  scriptAt(x+(3.5+pet(2))*W/24, y+17*H/24,H/25,color)
  scriptAt(x+(8+pet(3))*W/24, y+17*H/24,H/25,color)
  
  document.getElementById("featuresize").value = v
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
  ctx.moveTo(x+2*W/24, y+22*H/24)
  cpx = x+12*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+22*H/24)
  cpx = x+12*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+16*H/24)
  cpx = x+12*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+15*H/24)
  cpx = x+5*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+15*H/24)
  cpx = x+5*W/24
  cpy = y+11*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+11*H/24)
  cpx = x+5*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+10*H/24)
  cpx = x+2*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+10*H/24)
  cpx = x+2*W/24
  cpy = y+22*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+22*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+12*H/24)
  ctx.lineTo(x+22*W/24, y+6*H/24)
  cpx = x+22*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+21*W/24, y+5*H/24)
  cpx = x+15*W/24
  cpy = y+5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+5*H/24)
  cpx = x+15*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+2*H/24)
  cpx = x+15*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+1*H/24)
  cpx = x+12*W/24
  cpy = y+1*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+1*H/24)
  cpx = x+2*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+10*H/24)
  ctx.stroke()
  //10
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+16*H/24)
  ctx.lineTo(x+21*W/24, y+8*H/24)
  ctx.lineTo(x+13*W/24, y+8*H/24)
  ctx.lineTo(x+6*W/24, y+14*H/24)
  ctx.lineTo(x+7*W/24, y+14*H/24)
  ctx.stroke()
  //4
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+16*H/24)
  ctx.lineTo(x+13*W/24, y+15*H/24)
  cpx = x+13*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
  cpx = x+7*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+14*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+7*H/24)
  cpx = x+21*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+6*H/24)
  cpx = x+15*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/24, y+6*H/24)
  ctx.stroke()
  //7
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+7*H/24)
  ctx.lineTo(x+21*W/24, y+12*H/24)
  ctx.stroke()
  //8
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+20*H/24)
  ctx.lineTo(x+13*W/24, y+16*H/24)
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
  //ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+2*H/24)
  ctx.lineTo(x+2*W/24, y+14*H/24)
  //ctx.stroke()
  
    //2
    ctx.beginPath()
    ctx.moveTo(x+8*W/24, y+2*H/24)
    ctx.lineTo(x+5*W/24, y+8*H/24)
    ctx.stroke()
  
    //3
    ctx.beginPath()
    ctx.moveTo(x+5*W/24, y+10*H/24)
    ctx.lineTo(x+3*W/24, y+14*H/24)
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
  if (W < 60)
    ctx.font = '0pt Garamond'
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

  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+20*H/24)
  ctx.lineTo(x+22*W/24, y+20*H/24)
  ctx.lineTo(x+22*W/24, y+7*H/24)
  ctx.lineTo(x+12*W/24, y+2*H/24)
  ctx.lineTo(x+2*W/24, y+7*H/24)
  ctx.lineTo(x+2*W/24, y+20*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+20*H/24)
  ctx.lineTo(x+3*W/24, y+10*H/24)
  ctx.lineTo(x+11*W/24, y+10*H/24)
  ctx.lineTo(x+11*W/24, y+19*H/24)
  ctx.lineTo(x+11*W/24, y+20*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+20*H/24)
  ctx.lineTo(x+13*W/24, y+10*H/24)
  ctx.lineTo(x+21*W/24, y+10*H/24)
  ctx.lineTo(x+21*W/24, y+20*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+13*H/24)
  ctx.lineTo(x+21*W/24, y+13*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+6.75*W/24, y+19*H/24)
  ctx.lineTo(x+7.25*W/24, y+19*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+16.75*W/24, y+12*H/24)
  ctx.lineTo(x+17.25*W/24, y+12*H/24)
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
  //1
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+4*W/24, y+22*H/24)
  ctx.lineTo(x+4*W/24, y+8*H/24)
  ctx.lineTo(x+3*W/24, y+6*H/24)
  ctx.lineTo(x+2*W/24, y+8*H/24)
  ctx.lineTo(x+2*W/24, y+22*H/24)
  ctx.stroke()
  //2
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+22*W/24, y+8*H/24)
  ctx.lineTo(x+21*W/24, y+6*H/24)
  ctx.lineTo(x+20*W/24, y+8*H/24)
  ctx.lineTo(x+20*W/24, y+22*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+8*H/24)
  ctx.lineTo(x+12*W/24, y+4*H/24)
  ctx.lineTo(x+20*W/24, y+8*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+9*H/24)
  ctx.lineTo(x+12*W/24, y+5*H/24)
  ctx.lineTo(x+4*W/24, y+9*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+21*H/24)
  ctx.lineTo(x+20*W/24, y+21*H/24)
  ctx.stroke()
  
  ctx.lineWidth *= 1.2
  //6
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+4*H/24)
  ctx.lineTo(x+12*W/24, y+22*H/24)
  ctx.stroke()
  ctx.lineWidth *= 0.8
  //7
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+6*H/24)
  ctx.lineTo(x+10*W/24, y+21*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+7*H/24)
  ctx.lineTo(x+8*W/24, y+20*H/24)
  ctx.lineTo(x+8*W/24, y+21*H/24)
  ctx.stroke()

  //9
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+8*H/24)
  ctx.lineTo(x+6*W/24, y+21*H/24)
  ctx.stroke()

  //10
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+6*H/24)
  ctx.lineTo(x+14*W/24, y+21*H/24)
  ctx.stroke()

  //11
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+7*H/24)
  ctx.lineTo(x+16*W/24, y+21*H/24)
  ctx.stroke()

  //12
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+8*H/24)
  ctx.lineTo(x+18*W/24, y+21*H/24)
  ctx.stroke()

  //13
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+14*H/24)
  ctx.lineTo(x+11*W/24, y+14*H/24)
  ctx.lineTo(x+11*W/24, y+13*H/24)
  ctx.lineTo(x+12*W/24, y+13*H/24)
  ctx.stroke()

  //14
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+14*H/24)
  ctx.lineTo(x+20*W/24, y+14*H/24)
  ctx.stroke()

  //15
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+22*H/24)
  ctx.lineTo(x+20*W/24, y+22*H/24)
  ctx.stroke()
// 2nd ary
  //16
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+9*H/24)
  ctx.lineTo(x+19*W/24, y+21*H/24)
  ctx.stroke()

  //17
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+8*H/24)
  ctx.lineTo(x+17*W/24, y+21*H/24)
  ctx.stroke()

  //18
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+7*H/24)
  ctx.lineTo(x+15*W/24, y+21*H/24)
  ctx.stroke()

  //19
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+6*H/24)
  ctx.lineTo(x+13*W/24, y+21*H/24)
  ctx.stroke()

  //20
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+6*H/24)
  ctx.lineTo(x+11*W/24, y+21*H/24)
  ctx.stroke()

  //21
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+7*H/24)
  ctx.lineTo(x+9*W/24, y+21*H/24)
  ctx.stroke()

  //22
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+8*H/24)
  ctx.lineTo(x+7*W/24, y+21*H/24)
  ctx.stroke()

  //23
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+9*H/24)
  ctx.lineTo(x+5*W/24, y+21*H/24)
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
  
      //1
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+21*H/24)
  ctx.lineTo(x+21*W/24, y+21*H/24)
  cpx = x+21*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+20*H/24)
  cpx = x+22*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+22*W/24, y+12*H/24)
  cpx = x+22*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+3*H/24)
  cpx = x+2*W/24
  cpy = y+3*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/24, y+12*H/24)
  cpx = x+2*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+20*H/24)
  cpx = x+3*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/24, y+21*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+19*H/24)
  cpx = x+18*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+13*H/24)
  cpx = x+18*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+7*H/24)
  cpx = x+6*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+13*H/24)
  cpx = x+6*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+19*H/24)
  ctx.stroke()

  //3
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+14*H/24)
  cpx = x+13*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+13*H/24)
  cpx = x+13*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+12*H/24)
  cpx = x+11*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+13*H/24)
  cpx = x+11*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+14*H/24)
  ctx.stroke()

  //4
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+12*H/24)
  ctx.lineTo(x+12*W/24, y+7*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+14*H/24)
  ctx.lineTo(x+8*W/24, y+18*H/24)
  ctx.stroke()

  //6
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+14*H/24)
  ctx.lineTo(x+16*W/24, y+18*H/24)
  ctx.stroke()

  //7
  ctx.beginPath()
  ctx.moveTo(x+17.5*W/24, y+11*H/24)
  ctx.lineTo(x+13*W/24, y+12.5*H/24)
  ctx.stroke()

  //8
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+12.5*H/24)
  ctx.lineTo(x+6.5*W/24, y+11*H/24)
  ctx.stroke()
   
  }
  
function swingAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  //2
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+10*H/24)
  ctx.lineTo(x+18*W/24, y+2*H/24)
  ctx.stroke()

  //1
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+9*H/24)
  cpx = x+8*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+16*H/24)
  cpx = x+10*W/24
  cpy = y+17*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+15*H/24)
  cpx = x+11*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/24, y+7*H/24)
  ctx.stroke()

  //2
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+5.5*H/24)
  cpx = x+13*W/24
  cpy = y+12.5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+12.5*H/24)
  cpx = x+15*W/24
  cpy = y+13.5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+11.5*H/24)
  cpx = x+16*W/24
  cpy = y+3.5*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+3.5*H/24)
  ctx.stroke()

  //5
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+16*H/24)
  cpx = x+8*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+16*H/24)
  ctx.stroke()
  //6
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+22*H/24)
  ctx.lineTo(x+6*W/24, y+10*H/24)
  ctx.lineTo(x+10*W/24, y+22*H/24)
  ctx.stroke()
  //9
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+14*H/24)
  ctx.lineTo(x+18*W/24, y+2*H/24)
  ctx.lineTo(x+14*W/24, y+14*H/24)
  ctx.stroke()
  //8
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+8*H/24)
  ctx.lineTo(x+20*W/24, y+8*H/24)
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
  //1
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+23*H/24)
  cpx = x+4*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+10*H/24)
  cpx = x+6*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+2*H/24)
  cpx = x+8*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+2*H/24)
  cpx = x+8*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+10*H/24)
  cpx = x+16*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+16*W/24, y+2*H/24)
  cpx = x+18*W/24
  cpy = y+2*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+2*H/24)
  cpx = x+18*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+10*H/24)
  cpx = x+20*W/24
  cpy = y+23*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+23*H/24)
  cpx = x+4*W/24
  cpy = y+23*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+23*H/24)
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
  