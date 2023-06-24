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
  ctx.moveTo(x+1*W/14, y+6*H/14)
  ctx.lineTo(x+1*W/14, y+2*H/14)
  ctx.lineTo(x+3*W/14, y+0*H/14)
  ctx.lineTo(x+6*W/14, y+2*H/14)
  ctx.lineTo(x+6*W/14, y+6*H/14)
  ctx.lineTo(x+1*W/14, y+6*H/14)
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
  //2
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/14, y+6*H/14)
  ctx.lineTo(x+1*W/14, y+13*H/14)
  ctx.lineTo(x+13*W/14, y+13*H/14)
  ctx.lineTo(x+13*W/14, y+6*H/14)
  ctx.lineTo(x+6*W/14, y+6*H/14)
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
  //3
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/14, y+6*H/14)
  ctx.lineTo(x+7*W/14, y+13*H/14)
  ctx.lineTo(x+13*W/14, y+13*H/14)
  ctx.lineTo(x+13*W/14, y+6*H/14)
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
  //4
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/14, y+6*H/14)
  ctx.lineTo(x+7*W/14, y+1*H/14)
  ctx.lineTo(x+13*W/14, y+1*H/14)
  ctx.lineTo(x+13*W/14, y+6*H/14)
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
  //5
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/14, y+6*H/14)
  ctx.lineTo(x+2*W/14, y+11*H/14)
  ctx.lineTo(x+5*W/14, y+13*H/14)
  ctx.lineTo(x+7*W/14, y+12*H/14)
  ctx.lineTo(x+7*W/14, y+6*H/14)
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
  //6
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/14, y+6*H/14)
  ctx.lineTo(x+9*W/14, y+4*H/14)
  ctx.lineTo(x+10*W/14, y+3*H/14)
  ctx.lineTo(x+11*W/14, y+4*H/14)
  ctx.lineTo(x+11*W/14, y+6*H/14)
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
  //7
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/14, y+6*H/14)
  ctx.lineTo(x+8*W/14, y+10*H/14)
  ctx.lineTo(x+10*W/14, y+13*H/14)
  ctx.lineTo(x+13*W/14, y+11*H/14)
  ctx.lineTo(x+13*W/14, y+6*H/14)
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