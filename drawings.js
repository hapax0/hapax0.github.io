function ____At (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = [], n = 0
  let STROKE = false, FILL = true, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.fillStyle = randomPick(colors)
  ctx.strokeStyle = 'black'
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  //1
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/23, y+4*H/23)
  ctx.lineTo(x+18*W/23, y+5*H/23)
  ctx.lineTo(x+16*W/23, y+9*H/23)
  ctx.lineTo(x+4*W/23, y+5*H/23)
  if (FILL) {
    ctx.fillStyle = randomGradientPal()
  n += randomPick([1,2])
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  ctx.lineWidth = randomPick([1,2,3,6])
/*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  