let ITEM = 0
let ocd = null
let offdctx = null
let CELLSIZE = 0
let GRIDSIZE = 1
let lastpoints = []
let ITEMS = []
let INDEX = 0
let code = [], cpx, cpy, cx, cy, radius = 1
  
function initOC () {
  let canvas = document.getElementById('myDCanvas')
  let ctx = canvas.getContext('2d')
  
  let lastx, lasty, lx, ly
  lastpoints = []
  
  let ocd = document.createElement('canvas')
  ocd.height = canvas.height, ocd.width = canvas.width
  let gs = document.getElementById("gridsize").value
  GRIDSIZE = gs, CELLSIZE = canvas.width/GRIDSIZE
  offdctx = ocd.getContext('2d')
  offdctx.strokeStyle = "#55dd55"
  offdctx.fillStyle = "#55dd55"
  offdctx.lineWidth = 4
  offdctx.setLineDash([4, 4])
  canvas.addEventListener('mousedown', function (evt) {
    let LINETO = false
    CELLSIZE = canvas.width/GRIDSIZE
    let dmode = document.getElementById("dmode").value
    let mousePos = getMousePos(canvas, evt);
    ctx.fillStyle = '#000000'
    if (INDEX === 0) {
      ITEM++
      code.push("  //"+ITEM)
      /*code.push("  if (PATTERN)")
      code.push("    fillOC(oc, occtx)")
      code.push("  ctx.save()")*/
      code.push("  P = 0")
      code.push("  if(document.getElementById('grungy').checked)")
      code.push("    P = 37")
      code.push("  resctx.beginPath()")
      code.push("  resctx.moveTo(x+"+Math.round(mousePos.x/CELLSIZE)+"*W/"+GRIDSIZE+"+pet(P)"+", y+"+Math.round(mousePos.y/CELLSIZE)+"*H/"+GRIDSIZE+"+pet(P)"+")")
      ctx.lineWidth = 4
      ctx.beginPath()
      lastx = Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE
      lasty = Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE
      lx = Math.round(mousePos.x/CELLSIZE)+"*W/"+GRIDSIZE
      ly = Math.round(mousePos.y/CELLSIZE)+"*W/"+GRIDSIZE
      ctx.moveTo(Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE, Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE)
      ctx.fillRect(Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE-4, Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE-4, 10, 10)
      LINETO = false
    } else {
      //if (!mode) {
      if (dmode === "line") {
      // if (document.getElementById("ragged").checked)
      //   code.push("  ragged(ctx, x+"+Math.round(mousePos.x/CELLSIZE)+"*W/"+GRIDSIZE+", y+"+Math.round(mousePos.y/CELLSIZE)+"*H/"+GRIDSIZE+", "+lx+", "+ly+")")
      // else
        code.push("  resctx.lineTo(x+"+Math.round(mousePos.x/CELLSIZE)+"*W/"+GRIDSIZE+"+pet(P)"+", y+"+Math.round(mousePos.y/CELLSIZE)+"*H/"+GRIDSIZE+"+pet(P)"+")")
        LINETO = true
        ctx.lineTo(Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE, Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE)
        lastx = Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE
        lasty = Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE
        lx = Math.round(mousePos.x/CELLSIZE)+"*W/"+GRIDSIZE
        ly = Math.round(mousePos.y/CELLSIZE)+"*W/"+GRIDSIZE
        ctx.strokeStyle = "#ff4444"
        ctx.lineWidth = 4
        ctx.setLineDash([4, 4])
        ctx.stroke()
        ctx.fillStyle = "black"
        ctx.fillRect(Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE-5, Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE-5, 10, 10)
        INDEX = 0
      } else 
      if (dmode === "circ") {
        if (INDEX % 2 === 1) { // radius point
          ctx.strokeStyle = "#ff4444"
          ctx.lineWidth = 4
          lx = Math.round(mousePos.x/CELLSIZE)+"*W/"+GRIDSIZE
          ly = Math.round(mousePos.y/CELLSIZE)+"*W/"+GRIDSIZE
          let rx = Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE
          let ry = Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE
          radius = Math.sqrt(Math.pow(lastx-rx, 2) +Math.pow(lasty-ry, 2))
          offdctx.strokeStyle = "#00aaff"
          offdctx.setLineDash([])
          offdctx.beginPath()
          offdctx.arc(lastx, lasty, radius, 0, Math.PI*2)
          offdctx.stroke()
          LINETO = false
          ctx.drawImage(ocd,0,0,canvas.width,canvas.height)
          //offdctx.setLineDash([])
          code.push("  resctx.beginPath()")
          code.push("  cpx = x+"+Math.round(lastx/CELLSIZE)+"*W/"+GRIDSIZE+"+pet(P)")
          code.push("  cpy = y+"+Math.round(lasty/CELLSIZE)+"*H/"+GRIDSIZE+"+pet(P)")
          code.push("  resctx.arc(cpx, cpy, ("+radius/CELLSIZE+"*W/"+GRIDSIZE+"),0, Math.PI*2)")
         // if fill
            code.push("  resctx.closePath()")
          lastpoints.push(lastx,lasty)
          closePath()
          INDEX = -1
        } else {
          ;
         /*
          console.log("INDEX b ", INDEX)
          ctx.beginPath()
          lastx = Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE
          lasty = Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE
          lx = Math.round(mousePos.x/CELLSIZE)+"*W/"+GRIDSIZE
          ly = Math.round(mousePos.y/CELLSIZE)+"*W/"+GRIDSIZE
          ctx.moveTo(Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE, Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE)
          ctx.fillRect(Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE-4, Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE-4, 10, 10)
        */
        }
      } else
      if (dmode === "quad") {
        if (INDEX % 2 === 1) { // control point
          cpx = Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE
          cpy = Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE
          code.push("  cpx = x+"+Math.round(mousePos.x/CELLSIZE)+"*W/"+GRIDSIZE+"+pet(P)")
          code.push("  cpy = y+"+Math.round(mousePos.y/CELLSIZE)+"*H/"+GRIDSIZE+"+pet(P)")
          ctx.fillStyle = "#55dd55"
          offdctx.strokeStyle = "#ffffff"
          offdctx.setLineDash([])
          offdctx.beginPath()
          offdctx.moveTo(lastx, lasty)
          offdctx.lineTo(cpx,cpy)
          offdctx.strokeStyle = "#55dd55"
          offdctx.setLineDash([4,4])
          offdctx.beginPath()
          offdctx.moveTo(lastx, lasty)
          offdctx.lineTo(cpx,cpy)
          offdctx.stroke()
          offdctx.fillRect(Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE-5, Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE-5, 10, 10)
          ctx.drawImage(ocd,0,0,canvas.width,canvas.height)
          ctx.setLineDash([4, 4])
          ctx.strokeStyle = "#ff4444"
        } else {
          code.push("  resctx.quadraticCurveTo(cpx+pet(P), cpy+pet(P), x+"+Math.round(mousePos.x/CELLSIZE)+"*W/"+GRIDSIZE+", y+"+Math.round(mousePos.y/CELLSIZE)+"*H/"+GRIDSIZE+")")
          ctx.quadraticCurveTo(cpx, cpy, Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE, Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE)
          ctx.strokeStyle = "#ff4444"
          ctx.lineWidth = 4
          ctx.setLineDash([4, 4])
          ctx.stroke()
          ctx.fillStyle = "black"
          lastx = Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE
          lasty = Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE
          lx = Math.round(mousePos.x/CELLSIZE)+"*W/"+GRIDSIZE
          ly = Math.round(mousePos.y/CELLSIZE)+"*W/"+GRIDSIZE
          ctx.fillRect(Math.round(mousePos.x/CELLSIZE)*W/GRIDSIZE-5, Math.round(mousePos.y/CELLSIZE)*W/GRIDSIZE-5, 10, 10)
        }
      }
    }
    if (dmode != "circ")
    lastpoints.push(lastx,lasty)
    INDEX++
  }, false)

}

function clearAll () {
  let canvas = document.getElementById('myDCanvas')
  W = canvas.width, H = W
  let ctx = canvas.getContext('2d')
  code = []
  ITEM = 0
  INDEX = 0
  ctx.fillStyle = 'white'
  ctx.globalAlpha = 1.0
  ctx.fillRect(0,0,canvas.width,canvas.height)
  offdctx.clearRect(0,0,canvas.width,canvas.height)
  frameVisible()
  document.getElementById("text1").value = ""
  updateItem()
  ctx.fillStyle = '#ffffff'
  ctx.lineWidth = 4
  ITEM = 0
}

function updateItem () {
  document.getElementById("lastitem").innerHTML = ITEM
}

function getIndex () {
  let v = +document.getElementById("index").value
  return(v)
}

function closePathIf() {
  if (document.getElementById("dmode").value === "circ")
    closePath()
}

function closePath () {
  let canvas = document.getElementById('myDCanvas')
  let ctx = canvas.getContext('2d')
  let FILL = false, STROKE = false
  let LW = document.getElementById('lwg').value*2
  let fs = document.getElementById("fillstroke").value
  if (fs === "fill") 
    FILL = true
  else
    STROKE = true
  if (INDEX === 0)
    return  
  ITEMS.push(lastpoints)
  lastpoints = []
  if (document.getElementById("gradient").checked)
    code.push("  if ("+FILL+") {\n    resctx.fillStyle = randomGradientPal()\n  n += randomPick([1,2])\n    resctx.fill()\n}")
  else
    code.push("  if ("+FILL+") {\n    resctx.fillStyle = colors[n%colors.length]\n  n += randomPick([1,2])\n    resctx.fill()\n}")
  code.push("  if ("+STROKE+") {\n  resctx.lineWidth = "+LW+"\n  resctx.strokeStyle = randomPick(colors)\n    resctx.stroke()\n  }")
  code.push("  ctx.imageSmoothingEnabled = true")
  code.push("  ctx.imageSmoothingQuality = 'high'")
  code.push("  ctx.drawImage(res,0,0,res.width,res.height,0,0,canvas.width/1,canvas.height/1)")
  ctx.setLineDash([])
  ctx.globalAlpha = 1
  ctx.strokeStyle = "#ff4444"
  ctx.stroke()
  updateItem()
  INDEX = 0
  showPoints()
}

function showPoints () {
  if (ITEM <= 0) {
    document.getElementById("text1").value = ""
    return
  }
  let FILL = false, STROKE = false
  let fs = document.getElementById("fillstroke").value
  if (fs === "fill") 
    FILL = true
  else
    STROKE = true
  let header = "  let x = 0, y = 0, W = 1080*2\n\
  let canvas = document.getElementById(\"myCanvas\")\n\
  let ctx = canvas.getContext(\"2d\")\n\
  let res = document.createElement('canvas')\n\
  res.height = canvas.height*2, res.width = canvas.width*2\n\
  let resctx = res.getContext('2d')\n\
  let oc = document.createElement('canvas')\n\
  let occtx = oc.getContext(\"2d\")\n\
  oc.height = canvas.height, oc.width = canvas.width\n\
  let colors = shuffle(getCurrentPalette(true,13))\n\
  let H = W, cpx, cpy, points = [], n = 0\n\
  let STROKE = "+STROKE+", FILL = "+FILL+", PATTERN = false\n\
  let P = 0\n\
  resctx.strokeStyle = randomPick(colors)\n\
  resctx.fillStyle = randomPick(colors)\n\
  resctx.strokeStyle = 'black'\n\n\
  //resctx.lineCap = \"round\"\n\
  //resctx.lineJoin = \"round\"\n\n"
  document.getElementById("text1").value = header
  document.getElementById("text1").value += code.join("\n")
}

function getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect()
  return {
    x: Math.round(evt.clientX - rect.left),
    y: Math.round(evt.clientY - rect.top)
  };
}

function undoLast () {
  closePath()
  if (ITEM < 1) 
    return
  let index = code.indexOf("  //"+ITEM)
  code = code.slice(0, index)
  ITEM -= 1
  copyCode()
  updateItem()
  let last = ITEMS.pop()
  crossoutItem(last)
}

function crossoutItem (item) {
  let canvas = document.getElementById('myDCanvas')
  let ctx = canvas.getContext('2d')
  let ocd = document.createElement('canvas')
  let offdctxctx = canvas.getContext('2d')
  let ofill = offdctx.fillStyle
  let cfill = ctx.fillStyle
  offdctx.fillStyle = "#ffd000"
  ctx.fillStyle = "#ffd000"
  let i = 0
  for (; i < item.length; i+=2) {
    offdctx.fillRect(Math.round(item[i])-6, Math.round(item[i+1])-6, 12, 12)
    ctx.drawImage(ocd,0,0,canvas.width,canvas.height)
    ctx.fillRect(Math.round(item[i])-6, Math.round(item[i+1])-6, 12, 12)
  }
  offdctx.fillStyle = ofill
  ctx.fillStyle = cfill
}

function copyCode () {
  closePath()
  showPoints()
  let copyText = document.getElementById("text1")
  navigator.clipboard.writeText(copyText.value)
}

function frameVisible () {
  let canvas = document.getElementById('myDCanvas')
  let ctx = canvas.getContext('2d')
  W = canvas.width, H = W
  ctx.fillStyle = "#ffffff"
  ctx.strokeStyle = "#d8d8d8"
  ctx.lineWidth = 3
  ctx.setLineDash([])
  ctx.fillRect(0,0,W,H)
  GRIDSIZE = document.getElementById("gridsize").value
  let CELLSIZE = W/GRIDSIZE
  if (document.getElementById("gridsize").value  >= 80)
    return
  let i = 0, x = 0, y = 0
  for (; i < GRIDSIZE; i++) {
    if (i % 2 === 0)
      ctx.strokeStyle = "#c0c0c0"
    else
      ctx.strokeStyle = "#d8d8d8"
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x+canvas.width, y)
    ctx.stroke()
    y += CELLSIZE
  }
  i = 0, x = 0, y = 0
  for (; i < GRIDSIZE; i++) {
    if (i % 2 === 0)
      ctx.strokeStyle = "#c0c0c0"
    else
      ctx.strokeStyle = "#d8d8d8"
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x, y+canvas.height)
    ctx.stroke()
    x += CELLSIZE
  }
  ctx.lineWidth = 4
}

function openFileD () {
  document.getElementById('uploadimage2').click();
}

function drawFileD () {
  let canvas = document.getElementById('myDCanvas')
  let ctx = canvas.getContext('2d')
  let IMG = new Image()
  let f = document.getElementById("uploadimage2").files[0]
  let url = window.URL || window.webkitURL
  let src = url.createObjectURL(f)
  let timestamp = new Date().getTime()
  IMG.src = src
  ctx.globalAlpha = 1
  ctx.globalCompositeOperation = "source-over"
  IMG.onload = function () {
    //canvas.height = this.height
    //canvas.width = this.width
    ctx.globalAlpha = 0.5
    ctx.drawImage(IMG, 0, 0, canvas.width, canvas.height);
   // resizeCanvas()
    url.revokeObjectURL(src);
    src  += timestamp
  }
  document.getElementById("uploadimage2").value = ""
}

// saveAs stuff
function downloadCode () {
  let filename = "drawing_code.js"
  let text  = document.getElementById("text1").value
  let pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  pom.setAttribute('download', filename);
  if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
  }
  else {
      pom.click();
  }
}

function updateGrid () {
  let gs = document.getElementById("gridsize").value
  GRIDSIZE = gs, CELLSIZE = W/GRIDSIZE
  frameVisible()
}

function killCP () {
  if (INDEX > 0 && document.getElementById("dmode").value === "quad") {
    INDEX = 1
  }
}
