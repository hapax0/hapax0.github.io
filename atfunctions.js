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
  "power_linesAt","cubicleAt","furniture_at_nightAt","indicate_by_pointingAt","plastic_owlAt","stone_axeAt",
  "steering_wheelAt", "urgentAt", "holeAt","evidenceAt", "solar_systemAt","suburbsAt","empty_setAt","nowAt","scattered_leavesAt","cabin_air_filterAt","tape_dispenserAt","running_with_scissorsAt","free_palletsAt","whaleAt","bacteriophageAt","stone_wallAt","eyeglassesAt","blast_radiusAt","winter_stickAt","dreyAt","oocyteAt","bird_cageAt","parking_lotAt","lemonAt","dieAt","riverAt","progress_indicatorAt","postcardAt", "keyholeAt", "puzzle_pieceAt", "monitorAt", "sailboatAt", "impossibleAt", "uphillAt", "connect_the_dotsAt","dog_whistleAt"]  
  
let noThe = ["urgentAt","nowAt","scattered_leavesAt","running_with_scissorsAt","too_many_thingsAt","flock_of_birdsAt","aiAt","walk_it_backAt","thread_the_needleAt","indicate_by_pointingAt","press_the_buttonAt","conference_room_bAt", "ghost_in_the_machineAt", "gas_station_shrubberyAt", "greenwashingAt", "refractionAt", "clickbaotAt",  "plate_tectonicsAt",
"furniture_at_nightAt", "misheard_lyricsAt", "negative_spaceAt","nice_thingsAt", "talkAt", "connect_the_dotsAt", "entanglementAt",'get_off_my_lawnAt']
let shortlist = ["urgentAt","holeAt","evidenceAt"]
//let lentlist = ["cabin_air_filterAt","treeAt","mouseAt","seedAt", "herdAt","big_fishAt", "heronAt", "heirloomAt","crazy_wallAt","too_expensive_burgerAt","icebergAt","plastic_owlAt","impossibleAt","birdAt","teak_rat_sculptureAt","dreyAt","winter_stickAt","paint_brushAt", "hammerAt","pencil_sharpenerAt","pencilAt","stumpAt","running_with_scissorsAt","lighthouseAt","sailboatAt","cameraAt","mailboxAt"]


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
  tarotcard(0,0,3.5*96,5*96,f,cardnumber(f),true)
  if(document.getElementById("palettechoice").value === "dos")
    loadPalette()
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
  up = true
    BRIGHT = true
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
  //diss()
  // draw the icon
  ctx.fillStyle = sf
  ctx.strokeStyle = ss
  
  if (!up && !IU) {
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
  if (w !== 3*96 && w !== 3.5*96)
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
    
function threecards () {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let W = canvas.width, H = canvas.height
  x = 0, y = 0
  w = W/3.2, h = H/2 - 30
  let funcs = shuffle(atList)
  
  //funcs = shuffle(shortlist)

  ctx.fillStyle = randomPick(getCurrentPalette())
  ctx.fillRect(0,0,W,H)
  ctx.fillStyle = randomPick(getCurrentPalette())
  haze()
//  console.log(funcs.slice(0,3))
  //funcs[1] = "almost_hanged_manAt"
  tarotcard(x+12, y+156 +pet(49), w, h, funcs[0], cardnumber(funcs[0]))
  if(document.getElementById("palettechoice").value === "dos")
    loadPalette()
  tarotcard(x+2*W/3+4, y+156+pet(49), w, h, funcs[2], cardnumber(funcs[2]))
  if(document.getElementById("palettechoice").value === "dos")
    loadPalette()
  tarotcard(x+1*W/3+8, y+156+pet(49), w, h, funcs[1], cardnumber(funcs[1])) 
  if(document.getElementById("palettechoice").value === "dos")
    loadPalette()
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
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    let s = +document.getElementById("featuresize").value
    document.getElementById("featuresize").value = s/3
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    let pad = 2*W/24
    let i = 0,x1 = pad, y1 = pad,W1=W/5
    let space = W1/7
    shuffle(atList)
    for (; i < 16; i++) {
     // x1 = x+pad //+ (Math.random() * (W -2*pad))
    //  y1 = y+pad //+ (Math.random() * (H -2*pad))
      if (i > 0 && i % 4 === 0) {
        y1 += W1 +space
        x1 = pad
      } 
      window [atList[i]] (x+x1,y+y1,W1,color)
      x1 += W1 + space
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

function pillAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
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
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+16*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+17*W/24, y+11*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+15*W/24, y+12*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+15*W/24, y+14*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+16*W/24, y+17*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+7*W/24, y+10*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+12*W/24, y+21*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+13*W/24, y+19*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+11*W/24, y+18*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+12*W/24, y+16*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+8*W/24, y+12*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+10*W/24, y+13*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+10*W/24, y+16*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+12*W/24, y+14*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+8*W/24, y+14*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+8*W/24, y+16*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+9*W/24, y+18*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+10*W/24, y+20*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+9*W/24, y+22*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+15*W/24, y+19*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+13*W/24, y+13*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+6*W/24, y+9*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+22*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+17*W/24, y+22*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+18*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+14*W/24, y+20*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+13*W/24, y+15*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+11*W/24, y+15*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+5*W/24, y+21*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+7*W/24, y+19*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+19*W/24, y+20*H/24,r,0,2*Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x+17*W/24, y+20*H/24,r,0,2*Math.PI)
  ctx.stroke()
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
  