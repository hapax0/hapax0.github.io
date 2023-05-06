function usaAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/10
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+11*H/12)
  cpx = x+4*W/12
  cpy = y+12*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+12*H/12)
  cpx = x+6*W/12
  cpy = y+12*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+11*H/12)
  ragged(ctx, x+6*W/12, y+7*H/12, 6*W/12, 11*W/12)
  ragged(ctx, x+6*W/12, y+11*H/12, 6*W/12, 7*W/12)
  cpx = x+6*W/12
  cpy = y+12*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+12*H/12)
  cpx = x+8*W/12
  cpy = y+12*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+11*H/12)
  ragged(ctx, x+8*W/12, y+4*H/12, 8*W/12, 11*W/12)
  ragged(ctx, x+8*W/12, y+7*H/12, 8*W/12, 4*W/12)
  ragged(ctx, x+8*W/12, y+8*H/12, 8*W/12, 7*W/12)
  cpx = x+8*W/12
  cpy = y+8*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+9*H/12)
  cpx = x+9*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+9*H/12)
  cpx = x+10*W/12
  cpy = y+8*H/12
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/12, y+4*H/12)
  cpx = x+10*W/12
  cpy = y+2*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+2*H/12)
  cpx = x+7*W/12
  cpy = y+2*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+0*H/12)
  cpx = x+6*W/12
  cpy = y+0*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+0*H/12)
  cpx = x+5*W/12
  cpy = y+2*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+2*H/12)
  cpx = x+2*W/12
  cpy = y+2*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/12, y+4*H/12)
  ragged(ctx, x+2*W/12, y+7*H/12, 2*W/12, 4*W/12)
  cpx = x+2*W/12
  cpy = y+8*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+8*H/12)
  cpx = x+4*W/12
  cpy = y+8*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+7*H/12)
  ragged(ctx, x+4*W/12, y+4*H/12, 4*W/12, 7*W/12)
  ragged(ctx, x+4*W/12, y+11*H/12, 4*W/12, 4*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+3*H/12)
  cpx = x+5*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+2*H/12)
  cpx = x+5*W/12
  cpy = y+0*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+0*H/12)
  cpx = x+7*W/12
  cpy = y+0*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+2*H/12)
  cpx = x+7*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+3*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+3*H/12)
  cpx = x+2*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/12, y+4*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/12, y+3*H/12)
  cpx = x+8*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+4*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/12, y+3*H/12)
  cpx = x+10*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+4*H/12)
  cpx = x+10*W/12
  cpy = y+6*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+8*H/12)
  cpx = x+10*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+9*H/12)
  cpx = x+8*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+8*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+3*H/12)
  cpx = x+5*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+2*H/12)
  cpx = x+5*W/12
  cpy = y+1*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+0*H/12)
  cpx = x+7*W/12
  cpy = y+0*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+1*H/12)
  cpx = x+7*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+3*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+3*H/12)
  cpx = x+3*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+4*H/12)
  cpx = x+3*W/12
  cpy = y+7*H/12
  ragged(ctx, x+3*W/12, y+8*H/12, 3*W/12, 4*W/12)
  ragged(ctx, x+4*W/12, y+8*H/12, 3*W/12, 8*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/12, y+3*H/12)
  ragged(ctx, x+9*W/12, y+7*H/12, 9*W/12, 3*W/12)
  cpx = x+9*W/12
  cpy = y+8*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+8*H/12)
  cpx = x+8*W/12
  cpy = y+7*H/12
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/12, y+12*H/12)
  cpx = x+2*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+11*H/12)
  cpx = x+4*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+10*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/12, y+10*H/12)
  cpx = x+7*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+11*H/12)
  cpx = x+9*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+12*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/12, y+8*H/12)
  cpx = x+3*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/12, y+9*H/12)
  cpx = x+1*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/12, y+8*H/12)
  ragged(ctx, x+1*W/12, y+3*H/12, 1*W/12, 8*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/12, y+2*H/12)
  ragged(ctx, x+5*W/12, y+1*H/12, 5*W/12, 2*W/12)
  ragged(ctx, x+4*W/12, y+0*H/12, 5*W/12, 1*W/12)
  ragged(ctx, x+3*W/12, y+0*H/12, 4*W/12, 0*W/12)
  ragged(ctx, x+2*W/12, y+0*H/12, 3*W/12, 0*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/12, y+6*H/12)
  ragged(ctx, x+7*W/12, y+9*H/12, 7*W/12, 6*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/12, y+7*H/12)
  ragged(ctx, x+5*W/12, y+5*H/12, 5*W/12, 7*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+9*H/12)
  ragged(ctx, x+5*W/12, y+9*H/12, 4*W/12, 9*W/12)
  ragged(ctx, x+5*W/12, y+8*H/12, 5*W/12, 9*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/12, y+11*H/12)
  ragged(ctx, x+5*W/12, y+12*H/12, 5*W/12, 11*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+1*H/12)
  ragged(ctx, x+6*W/12, y+2*H/12, 6*W/12, 1*W/12)
  ragged(ctx, x+7*W/12, y+2*H/12, 6*W/12, 2*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/12, y+1*H/12)
  ragged(ctx, x+12*W/12, y+1*H/12, 9*W/12, 1*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/12, y+1*H/12)
  ragged(ctx, x+2*W/12, y+1*H/12, 3*W/12, 1*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/12, y+5*H/12)
  ragged(ctx, x+12*W/12, y+5*H/12, 11*W/12, 5*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/12, y+8*H/12)
  ragged(ctx, x+11*W/12, y+9*H/12, 11*W/12, 8*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/12, y+10*H/12)
  ragged(ctx, x+11*W/12, y+10*H/12, 10*W/12, 10*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/12, y+10*H/12)
  ragged(ctx, x+1*W/12, y+11*H/12, 1*W/12, 10*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/12, y+4*H/12)
  ragged(ctx, x+0*W/12, y+4*H/12, 1*W/12, 4*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/12, y+2*H/12)
  ragged(ctx, x+1*W/12, y+1*H/12, 1*W/12, 2*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/12, y+3*H/12)
  ragged(ctx, x+11*W/12, y+2*H/12, 11*W/12, 3*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+4*H/12)
  ragged(ctx, x+7*W/12, y+4*H/12, 6*W/12, 4*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/12, y+5*H/12)
  ragged(ctx, x+3*W/12, y+7*H/12, 3*W/12, 5*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/12, y+5*H/12)
  ragged(ctx, x+8*W/12, y+4*H/12, 7*W/12, 5*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/12, y+11*H/12)
  ragged(ctx, x+11*W/12, y+12*H/12, 10*W/12, 11*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/12, y+10*H/12)
  ragged(ctx, x+2*W/12, y+11*H/12, 3*W/12, 10*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/12, y+1*H/12)
  ragged(ctx, x+8*W/12, y+0*H/12, 8*W/12, 1*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/12, y+7*H/12)
  ragged(ctx, x+9*W/12, y+7*H/12, 8*W/12, 7*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+11*H/12)
  ragged(ctx, x+7*W/12, y+11*H/12, 6*W/12, 11*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/12, y+6*H/12)
  ragged(ctx, x+12*W/12, y+7*H/12, 11*W/12, 6*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/12, y+1*H/12)
  ragged(ctx, x+11*W/12, y+0*H/12, 11*W/12, 1*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/12, y+7*H/12)
  ragged(ctx, x+0*W/12, y+7*H/12, 1*W/12, 7*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/12, y+2*H/12)
  ragged(ctx, x+4*W/12, y+3*H/12, 3*W/12, 2*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/12, y+1*H/12)
  ragged(ctx, x+0*W/12, y+0*H/12, 1*W/12, 1*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/12, y+4*H/12)
  ragged(ctx, x+6*W/12, y+3*H/12, 5*W/12, 4*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/12, y+9*H/12)
  ragged(ctx, x+0*W/12, y+10*H/12, 1*W/12, 9*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/12, y+4*H/12)
  ragged(ctx, x+11*W/12, y+4*H/12, 9*W/12, 4*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
}  

function spiralPAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = false, FILL = true, PATTERN = true
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  
  ctx.shadowBlur = 5 + Math.random() * 5
  ctx.shadowColor = "#666666"
  ctx.shadowOffsetX = 3+(Math.random()-0.5) * 8
  ctx.shadowOffsetY  = 3+(Math.random()-0.5) * 8

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+6*H/12)
  ragged(ctx, x+7*W/12, y+5*H/12, 6*W/12, 6*W/12)
  ragged(ctx, x+7*W/12, y+3*H/12, 7*W/12, 5*W/12)
  ragged(ctx, x+4*W/12, y+3*H/12, 7*W/12, 3*W/12)
  ragged(ctx, x+3*W/12, y+6*H/12, 4*W/12, 3*W/12)
  ragged(ctx, x+6*W/12, y+9*H/12, 3*W/12, 6*W/12)
  ragged(ctx, x+9*W/12, y+8*H/12, 6*W/12, 9*W/12)
  ragged(ctx, x+10*W/12, y+4*H/12, 9*W/12, 8*W/12)
  ragged(ctx, x+8*W/12, y+1*H/12, 10*W/12, 4*W/12)
  ragged(ctx, x+3*W/12, y+1*H/12, 8*W/12, 1*W/12)
  ragged(ctx, x+1*W/12, y+3*H/12, 3*W/12, 1*W/12)
  ragged(ctx, x+1*W/12, y+9*H/12, 1*W/12, 3*W/12)
  ragged(ctx, x+8*W/12, y+12*H/12, 1*W/12, 9*W/12)
  ragged(ctx, x+12*W/12, y+6*H/12, 8*W/12, 12*W/12)
  ragged(ctx, x+9*W/12, y+9*H/12, 12*W/12, 6*W/12)
  ragged(ctx, x+8*W/12, y+11*H/12, 9*W/12, 9*W/12)
  ragged(ctx, x+4*W/12, y+9*H/12, 8*W/12, 11*W/12)
  ragged(ctx, x+2*W/12, y+8*H/12, 4*W/12, 9*W/12)
  ragged(ctx, x+2*W/12, y+3*H/12, 2*W/12, 8*W/12)
  ragged(ctx, x+4*W/12, y+2*H/12, 2*W/12, 3*W/12)
  ragged(ctx, x+8*W/12, y+3*H/12, 4*W/12, 2*W/12)
  ragged(ctx, x+9*W/12, y+4*H/12, 8*W/12, 3*W/12)
  ragged(ctx, x+8*W/12, y+7*H/12, 9*W/12, 4*W/12)
  ragged(ctx, x+6*W/12, y+8*H/12, 8*W/12, 7*W/12)
  ragged(ctx, x+4*W/12, y+6*H/12, 6*W/12, 8*W/12)
  ragged(ctx, x+5*W/12, y+4*H/12, 4*W/12, 6*W/12)
  ragged(ctx, x+6*W/12, y+4*H/12, 5*W/12, 4*W/12)
  ragged(ctx, x+6*W/12, y+6*H/12, 6*W/12, 4*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/12, y+4*H/12)
  ragged(ctx, x+9*W/12, y+8*H/12, 10*W/12, 4*W/12)
  ragged(ctx, x+9*W/12, y+9*H/12, 9*W/12, 8*W/12)
  ragged(ctx, x+12*W/12, y+3*H/12, 9*W/12, 9*W/12)
  ragged(ctx, x+11*W/12, y+2*H/12, 12*W/12, 3*W/12)
  ragged(ctx, x+10*W/12, y+2*H/12, 11*W/12, 2*W/12)
  ragged(ctx, x+9*W/12, y+2*H/12, 10*W/12, 2*W/12)
  ragged(ctx, x+10*W/12, y+3*H/12, 9*W/12, 2*W/12)
  ragged(ctx, x+10*W/12, y+4*H/12, 10*W/12, 3*W/12)
  ragged(ctx, x+9*W/12, y+8*H/12, 10*W/12, 4*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/12, y+9*H/12)
  ragged(ctx, x+12*W/12, y+6*H/12, 9*W/12, 9*W/12)
  ragged(ctx, x+12*W/12, y+3*H/12, 12*W/12, 6*W/12)
  ragged(ctx, x+9*W/12, y+9*H/12, 12*W/12, 3*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/12, y+12*H/12)
  ragged(ctx, x+11*W/12, y+10*H/12, 8*W/12, 12*W/12)
  ragged(ctx, x+12*W/12, y+6*H/12, 11*W/12, 10*W/12)
  ragged(ctx, x+8*W/12, y+12*H/12, 12*W/12, 6*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/12, y+8*H/12)
  ragged(ctx, x+6*W/12, y+10*H/12, 5*W/12, 8*W/12)
  ragged(ctx, x+8*W/12, y+11*H/12, 6*W/12, 10*W/12)
  ragged(ctx, x+9*W/12, y+9*H/12, 8*W/12, 11*W/12)
  ragged(ctx, x+9*W/12, y+8*H/12, 9*W/12, 9*W/12)
  ragged(ctx, x+6*W/12, y+9*H/12, 9*W/12, 8*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+10*H/12)
  ragged(ctx, x+5*W/12, y+8*H/12, 6*W/12, 10*W/12)
  ragged(ctx, x+3*W/12, y+6*H/12, 5*W/12, 8*W/12)
  ragged(ctx, x+2*W/12, y+5*H/12, 3*W/12, 6*W/12)
  ragged(ctx, x+2*W/12, y+8*H/12, 2*W/12, 5*W/12)
  ragged(ctx, x+6*W/12, y+10*H/12, 2*W/12, 8*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/12, y+6*H/12)
  ragged(ctx, x+4*W/12, y+3*H/12, 3*W/12, 6*W/12)
  ragged(ctx, x+4*W/12, y+2*H/12, 4*W/12, 3*W/12)
  ragged(ctx, x+2*W/12, y+3*H/12, 4*W/12, 2*W/12)
  ragged(ctx, x+2*W/12, y+5*H/12, 2*W/12, 3*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+2*H/12)
  ragged(ctx, x+8*W/12, y+3*H/12, 4*W/12, 2*W/12)
  ragged(ctx, x+8*W/12, y+4*H/12, 8*W/12, 3*W/12)
  ragged(ctx, x+7*W/12, y+4*H/12, 8*W/12, 4*W/12)
  ragged(ctx, x+7*W/12, y+3*H/12, 7*W/12, 4*W/12)
  ragged(ctx, x+4*W/12, y+3*H/12, 7*W/12, 3*W/12)
  ragged(ctx, x+4*W/12, y+2*H/12, 4*W/12, 3*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/12, y+4*H/12)
  ragged(ctx, x+7*W/12, y+6*H/12, 7*W/12, 4*W/12)
  ragged(ctx, x+6*W/12, y+7*H/12, 7*W/12, 6*W/12)
  ragged(ctx, x+8*W/12, y+7*H/12, 6*W/12, 7*W/12)
  ragged(ctx, x+9*W/12, y+4*H/12, 8*W/12, 7*W/12)
  ragged(ctx, x+8*W/12, y+3*H/12, 9*W/12, 4*W/12)
  ragged(ctx, x+8*W/12, y+4*H/12, 8*W/12, 3*W/12)
  ragged(ctx, x+7*W/12, y+4*H/12, 8*W/12, 4*W/12)
  ragged(ctx, x+7*W/12, y+5*H/12, 7*W/12, 4*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/12, y+7*H/12)
  ragged(ctx, x+6*W/12, y+8*H/12, 8*W/12, 7*W/12)
  ragged(ctx, x+4*W/12, y+6*H/12, 6*W/12, 8*W/12)
  ragged(ctx, x+6*W/12, y+7*H/12, 4*W/12, 6*W/12)
  ragged(ctx, x+8*W/12, y+7*H/12, 6*W/12, 7*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+6*H/12)
  ragged(ctx, x+6*W/12, y+5*H/12, 4*W/12, 6*W/12)
  ragged(ctx, x+6*W/12, y+4*H/12, 6*W/12, 5*W/12)
  ragged(ctx, x+5*W/12, y+4*H/12, 6*W/12, 4*W/12)
  ragged(ctx, x+4*W/12, y+6*H/12, 5*W/12, 4*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+5*H/12)
  ragged(ctx, x+4*W/12, y+6*H/12, 6*W/12, 5*W/12)
  ragged(ctx, x+6*W/12, y+7*H/12, 4*W/12, 6*W/12)
  ragged(ctx, x+7*W/12, y+6*H/12, 6*W/12, 7*W/12)
  ragged(ctx, x+7*W/12, y+5*H/12, 7*W/12, 6*W/12)
  ragged(ctx, x+6*W/12, y+6*H/12, 7*W/12, 5*W/12)
  ragged(ctx, x+6*W/12, y+5*H/12, 6*W/12, 6*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/12, y+12*H/12)
  ragged(ctx, x+4*W/12, y+12*H/12, 8*W/12, 12*W/12)
  ragged(ctx, x+3*W/12, y+11*H/12, 4*W/12, 12*W/12)
  ragged(ctx, x+3*W/12, y+10*H/12, 3*W/12, 11*W/12)
  ragged(ctx, x+8*W/12, y+12*H/12, 3*W/12, 10*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+12*H/12)
  ragged(ctx, x+3*W/12, y+11*H/12, 4*W/12, 12*W/12)
  ragged(ctx, x+3*W/12, y+10*H/12, 3*W/12, 11*W/12)
  ragged(ctx, x+1*W/12, y+9*H/12, 3*W/12, 10*W/12)
  ragged(ctx, x+0*W/12, y+8*H/12, 1*W/12, 9*W/12)
  ragged(ctx, x+0*W/12, y+12*H/12, 0*W/12, 8*W/12)
  ragged(ctx, x+4*W/12, y+12*H/12, 0*W/12, 12*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/12, y+9*H/12)
  ragged(ctx, x+1*W/12, y+3*H/12, 1*W/12, 9*W/12)
  ragged(ctx, x+2*W/12, y+2*H/12, 1*W/12, 3*W/12)
  ragged(ctx, x+1*W/12, y+1*H/12, 2*W/12, 2*W/12)
  ragged(ctx, x+0*W/12, y+0*H/12, 1*W/12, 1*W/12)
  ragged(ctx, x+0*W/12, y+8*H/12, 0*W/12, 0*W/12)
  ragged(ctx, x+1*W/12, y+9*H/12, 0*W/12, 8*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+0*W/12, y+0*H/12)
  ragged(ctx, x+7*W/12, y+0*H/12, 0*W/12, 0*W/12)
  ragged(ctx, x+8*W/12, y+1*H/12, 7*W/12, 0*W/12)
  ragged(ctx, x+3*W/12, y+1*H/12, 8*W/12, 1*W/12)
  ragged(ctx, x+2*W/12, y+2*H/12, 3*W/12, 1*W/12)
  ragged(ctx, x+0*W/12, y+0*H/12, 2*W/12, 2*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/12, y+4*H/12)
  ragged(ctx, x+10*W/12, y+3*H/12, 10*W/12, 4*W/12)
  ragged(ctx, x+9*W/12, y+2*H/12, 10*W/12, 3*W/12)
  ragged(ctx, x+9*W/12, y+1*H/12, 9*W/12, 2*W/12)
  ragged(ctx, x+9*W/12, y+0*H/12, 9*W/12, 1*W/12)
  ragged(ctx, x+7*W/12, y+0*H/12, 9*W/12, 0*W/12)
  ragged(ctx, x+8*W/12, y+1*H/12, 7*W/12, 0*W/12)
  ragged(ctx, x+10*W/12, y+4*H/12, 8*W/12, 1*W/12)
  ragged(ctx, x+10*W/12, y+3*H/12, 10*W/12, 4*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/12, y+2*H/12)
  ragged(ctx, x+12*W/12, y+0*H/12, 9*W/12, 2*W/12)
  ragged(ctx, x+9*W/12, y+0*H/12, 12*W/12, 0*W/12)
  ragged(ctx, x+9*W/12, y+2*H/12, 9*W/12, 0*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/12, y+2*H/12)
  ragged(ctx, x+11*W/12, y+2*H/12, 9*W/12, 2*W/12)
  ragged(ctx, x+12*W/12, y+3*H/12, 11*W/12, 2*W/12)
  ragged(ctx, x+12*W/12, y+0*H/12, 12*W/12, 3*W/12)
  ragged(ctx, x+9*W/12, y+2*H/12, 12*W/12, 0*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/12, y+12*H/12)
  ragged(ctx, x+12*W/12, y+12*H/12, 8*W/12, 12*W/12)
  ragged(ctx, x+12*W/12, y+7*H/12, 12*W/12, 12*W/12)
  ragged(ctx, x+11*W/12, y+10*H/12, 12*W/12, 7*W/12)
  ragged(ctx, x+8*W/12, y+12*H/12, 11*W/12, 10*W/12)
  ragged(ctx, x+8*W/12, y+12*H/12, 8*W/12, 12*W/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  ctx.shadowBlur = 0
}  

function flagtestAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let oc = document.createElement('canvas')
    let occtx = oc.getContext("2d")
    oc.height = canvas.height, oc.width = canvas.width
    let colors = shuffle(getCurrentPalette(true,13))
    let H = W, cpx, cpy, points = []
    let STROKE = true, FILL = false, PATTERN = true
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+5*W/10, y+0*H/10)
    ragged(ctx, x+4*W/10, y+2*H/10, 5*W/10, 0*W/10)
    ragged(ctx, x+2*W/10, y+2*H/10, 4*W/10, 2*W/10)
    ragged(ctx, x+3*W/10, y+6*H/10, 2*W/10, 2*W/10)
    ragged(ctx, x+5*W/10, y+4*H/10, 3*W/10, 6*W/10)
    ragged(ctx, x+8*W/10, y+6*H/10, 5*W/10, 4*W/10)
    ragged(ctx, x+8*W/10, y+2*H/10, 8*W/10, 6*W/10)
    ragged(ctx, x+5*W/10, y+2*H/10, 8*W/10, 2*W/10)
    ragged(ctx, x+5*W/10, y+0*H/10, 5*W/10, 2*W/10)
    if (FILL) {
      ctx.fillStyle = randomPick(colors)
      ctx.fill()
    }
  
    ctx.clip()
    if (PATTERN)
      ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    if (STROKE) {
      ctx.strokeStyle = randomPick(colors)
      ctx.stroke()
    }
  
  }  

function cigs2At (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let oc = document.createElement('canvas')
    let occtx = oc.getContext("2d")
    oc.height = canvas.height, oc.width = canvas.width
    let colors = shuffle(getCurrentPalette(true,13))
    let H = W, cpx, cpy, points = []
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+14*H/16)
    ctx.lineTo(x+14*W/16, y+14*H/16)
    ctx.lineTo(x+14*W/16, y+6*H/16)
    ctx.lineTo(x+4*W/16, y+6*H/16)
    ctx.lineTo(x+4*W/16, y+14*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+14*H/16)
    ctx.lineTo(x+0*W/16, y+11*H/16)
    ctx.lineTo(x+0*W/16, y+4*H/16)
    ctx.lineTo(x+4*W/16, y+6*H/16)
    ctx.lineTo(x+4*W/16, y+14*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+6*W/16, y+8*H/16)
    ctx.lineTo(x+6*W/16, y+12*H/16)
    ctx.lineTo(x+12*W/16, y+12*H/16)
    ctx.lineTo(x+12*W/16, y+8*H/16)
    ctx.lineTo(x+6*W/16, y+8*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+5*H/16)
    ctx.lineTo(x+2*W/16, y+12*H/16)
    ctx.lineTo(x+4*W/16, y+14*H/16)
    ctx.lineTo(x+4*W/16, y+7*H/16)
    ctx.lineTo(x+2*W/16, y+5*H/16)
    ctx.lineTo(x+2*W/16, y+12*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+10*W/16, y+3*H/16)
    ctx.lineTo(x+11*W/16, y+2*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+10*W/16, y+3*H/16)
    cpx = x+11*W/16
    cpy = y+2*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/16, y+3*H/16)
    cpx = x+11*W/16
    cpy = y+4*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/16, y+3*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+10*W/16, y+4*H/16)
    cpx = x+9*W/16
    cpy = y+3*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/16, y+4*H/16)
    cpx = x+9*W/16
    cpy = y+5*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/16, y+4*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+6*W/16, y+5*H/16)
    cpx = x+7*W/16
    cpy = y+4*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/16, y+5*H/16)
    cpx = x+7*W/16
    cpy = y+6*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/16, y+5*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+5*H/16)
    cpx = x+5*W/16
    cpy = y+4*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/16, y+5*H/16)
    cpx = x+5*W/16
    cpy = y+6*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/16, y+5*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+10*W/16, y+3*H/16)
    ctx.lineTo(x+10*W/16, y+6*H/16)
    ctx.lineTo(x+12*W/16, y+6*H/16)
    ctx.lineTo(x+12*W/16, y+3*H/16)
    cpx = x+11*W/16
    cpy = y+4*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/16, y+3*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+10*W/16, y+6*H/16)
    ctx.lineTo(x+10*W/16, y+4*H/16)
    cpx = x+9*W/16
    cpy = y+5*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/16, y+4*H/16)
    ctx.lineTo(x+8*W/16, y+6*H/16)
    ctx.lineTo(x+10*W/16, y+6*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+12*W/16, y+5*H/16)
    cpx = x+13*W/16
    cpy = y+4*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/16, y+5*H/16)
    cpx = x+13*W/16
    cpy = y+6*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/16, y+5*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+14*W/16, y+6*H/16)
    ctx.lineTo(x+14*W/16, y+5*H/16)
    cpx = x+12*W/16
    cpy = y+5*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/16, y+6*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+5*H/16)
    ctx.lineTo(x+4*W/16, y+3*H/16)
    ctx.lineTo(x+1*W/16, y+1*H/16)
    ctx.lineTo(x+0*W/16, y+4*H/16)
    ctx.lineTo(x+2*W/16, y+5*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+3*H/16)
    ctx.lineTo(x+10*W/16, y+3*H/16)
    cpx = x+11*W/16
    cpy = y+2*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/16, y+3*H/16)
    ctx.lineTo(x+13*W/16, y+3*H/16)
    ctx.lineTo(x+11*W/16, y+0*H/16)
    ctx.lineTo(x+1*W/16, y+1*H/16)
    ctx.lineTo(x+4*W/16, y+3*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+13*W/16, y+3*H/16)
    ctx.lineTo(x+12*W/16, y+5*H/16)
    ctx.lineTo(x+12*W/16, y+3*H/16)
    ctx.lineTo(x+13*W/16, y+3*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+5*H/16)
    ctx.lineTo(x+4*W/16, y+5*H/16)
    ctx.lineTo(x+4*W/16, y+6*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+6*H/16)
    ctx.lineTo(x+4*W/16, y+5*H/16)
    cpx = x+5*W/16
    cpy = y+6*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/16, y+5*H/16)
    ctx.lineTo(x+6*W/16, y+6*H/16)
    ctx.lineTo(x+4*W/16, y+6*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+6*W/16, y+6*H/16)
    ctx.lineTo(x+6*W/16, y+5*H/16)
    cpx = x+7*W/16
    cpy = y+6*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/16, y+5*H/16)
    ctx.lineTo(x+8*W/16, y+6*H/16)
    ctx.lineTo(x+6*W/16, y+6*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+12*W/16, y+6*H/16)
    ctx.lineTo(x+12*W/16, y+5*H/16)
    cpx = x+13*W/16
    cpy = y+6*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/16, y+5*H/16)
    ctx.lineTo(x+14*W/16, y+6*H/16)
    ctx.lineTo(x+12*W/16, y+6*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+12*W/16, y+5*H/16)
    cpx = x+13*W/16
    cpy = y+4*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/16, y+5*H/16)
    cpx = x+13*W/16
    cpy = y+6*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/16, y+5*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+14*W/16, y+14*H/16)
    ctx.lineTo(x+13*W/16, y+16*H/16)
    ctx.lineTo(x+0*W/16, y+16*H/16)
    ctx.lineTo(x+0*W/16, y+11*H/16)
    ctx.lineTo(x+4*W/16, y+14*H/16)
    ctx.lineTo(x+14*W/16, y+14*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+14*W/16, y+8*H/16)
    ctx.lineTo(x+16*W/16, y+8*H/16)
    ctx.lineTo(x+16*W/16, y+16*H/16)
    ctx.lineTo(x+13*W/16, y+16*H/16)
    ctx.lineTo(x+14*W/16, y+14*H/16)
    ctx.lineTo(x+14*W/16, y+8*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+6*W/16, y+3*H/16)
    cpx = x+5*W/16
    cpy = y+1*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/16, y+1*H/16)
    cpx = x+10*W/16
    cpy = y+1*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/16, y+3*H/16)
    ctx.lineTo(x+6*W/16, y+3*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+7*W/16, y+10*H/16)
    cpx = x+7*W/16
    cpy = y+9*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/16, y+9*H/16)
    cpx = x+11*W/16
    cpy = y+9*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/16, y+10*H/16)
    cpx = x+11*W/16
    cpy = y+11*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/16, y+11*H/16)
    cpx = x+7*W/16
    cpy = y+11*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/16, y+10*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
  }  
  
  function cigsAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
    ctx.fillStyle = randomPick(colors)
    ctx.beginPath()
    ctx.moveTo(x+4*W/12, y+10*H/12)
    ctx.lineTo(x+4*W/12, y+4*H/12)
    ctx.lineTo(x+9*W/12, y+4*H/12)
    ctx.lineTo(x+9*W/12, y+10*H/12)
    ctx.lineTo(x+4*W/12, y+10*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+4*W/12, y+4*H/12)
    ctx.lineTo(x+2*W/12, y+3*H/12)
    ctx.lineTo(x+2*W/12, y+9*H/12)
    ctx.lineTo(x+4*W/12, y+10*H/12)
    ctx.lineTo(x+4*W/12, y+4*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+3*H/12)
    ctx.lineTo(x+3*W/12, y+2*H/12)
    ctx.lineTo(x+2*W/12, y+0*H/12)
    ctx.lineTo(x+1*W/12, y+1*H/12)
    ctx.lineTo(x+2*W/12, y+3*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+3*W/12, y+2*H/12)
    ctx.lineTo(x+9*W/12, y+2*H/12)
    ctx.lineTo(x+8*W/12, y+0*H/12)
    ctx.lineTo(x+2*W/12, y+0*H/12)
    ctx.lineTo(x+3*W/12, y+2*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+5*W/12, y+6*H/12)
    ctx.lineTo(x+6*W/12, y+5*H/12)
    ctx.lineTo(x+6*W/12, y+4*H/12)
    ctx.lineTo(x+4*W/12, y+4*H/12)
    ctx.lineTo(x+4*W/12, y+10*H/12)
    ctx.lineTo(x+9*W/12, y+10*H/12)
    ctx.lineTo(x+9*W/12, y+4*H/12)
    ctx.lineTo(x+7*W/12, y+4*H/12)
    ctx.lineTo(x+7*W/12, y+5*H/12)
    ctx.lineTo(x+8*W/12, y+6*H/12)
    ctx.lineTo(x+8*W/12, y+8*H/12)
    ctx.lineTo(x+7*W/12, y+9*H/12)
    ctx.lineTo(x+6*W/12, y+9*H/12)
    ctx.lineTo(x+5*W/12, y+8*H/12)
    ctx.lineTo(x+5*W/12, y+6*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+5*H/12)
    ctx.lineTo(x+4*W/12, y+6*H/12)
    ctx.lineTo(x+4*W/12, y+4*H/12)
    ctx.lineTo(x+2*W/12, y+3*H/12)
    ctx.lineTo(x+2*W/12, y+5*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+3*H/12)
    ctx.lineTo(x+7*W/12, y+3*H/12)
    ctx.lineTo(x+9*W/12, y+4*H/12)
    ctx.lineTo(x+4*W/12, y+4*H/12)
    ctx.lineTo(x+2*W/12, y+3*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+3*H/12)
    ctx.lineTo(x+3*W/12, y+2*H/12)
    ctx.lineTo(x+9*W/12, y+2*H/12)
    ctx.lineTo(x+7*W/12, y+3*H/12)
    ctx.lineTo(x+2*W/12, y+3*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+4*W/12, y+6*H/12)
    ctx.lineTo(x+5*W/12, y+6*H/12)
    ctx.lineTo(x+6*W/12, y+5*H/12)
    ctx.lineTo(x+6*W/12, y+4*H/12)
    ctx.lineTo(x+4*W/12, y+4*H/12)
    ctx.lineTo(x+4*W/12, y+6*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+7*W/12, y+4*H/12)
    ctx.lineTo(x+7*W/12, y+5*H/12)
    ctx.lineTo(x+8*W/12, y+6*H/12)
    ctx.lineTo(x+9*W/12, y+6*H/12)
    ctx.lineTo(x+9*W/12, y+4*H/12)
    ctx.lineTo(x+7*W/12, y+4*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+5*W/12, y+2*H/12)
    ctx.lineTo(x+4*W/12, y+1*H/12)
    ctx.lineTo(x+6*W/12, y+1*H/12)
    ctx.lineTo(x+7*W/12, y+2*H/12)
    ctx.lineTo(x+5*W/12, y+2*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+3*H/12)
    ctx.lineTo(x+0*W/12, y+3*H/12)
    ctx.lineTo(x+0*W/12, y+9*H/12)
    ctx.lineTo(x+2*W/12, y+9*H/12)
    ctx.lineTo(x+2*W/12, y+3*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    
    ctx.beginPath()
    ctx.moveTo(x+9*W/12, y+0*H/12)
    ctx.lineTo(x+12*W/12, y+0*H/12)
    ctx.lineTo(x+12*W/12, y+12*H/12)
    ctx.lineTo(x+12*W/12, y+11*H/12)
    ctx.lineTo(x+9*W/12, y+9*H/12)
    ctx.lineTo(x+9*W/12, y+0*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+0*W/12, y+9*H/12)
    ctx.lineTo(x+2*W/12, y+9*H/12)
    ctx.lineTo(x+4*W/12, y+10*H/12)
    ctx.lineTo(x+9*W/12, y+10*H/12)
    ctx.lineTo(x+11*W/12, y+11*H/12)
    ctx.lineTo(x+11*W/12, y+12*H/12)
    ctx.lineTo(x+0*W/12, y+12*H/12)
    ctx.lineTo(x+0*W/12, y+9*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    
    ctx.beginPath()
    ctx.moveTo(x+7*W/12, y+1*H/12)
    cpx = x+8*W/12
    cpy = y+0*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+1*H/12)
    cpx = x+8*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+1*H/12)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+7*W/12, y+1*H/12)
    cpx = x+8*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+1*H/12)
    ctx.lineTo(x+9*W/12, y+4*H/12)
    ctx.lineTo(x+7*W/12, y+4*H/12)
    ctx.lineTo(x+7*W/12, y+1*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+5*W/12, y+3*H/12)
    cpx = x+6*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+3*H/12)
    cpx = x+6*W/12
    cpy = y+4*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+3*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+5*W/12, y+3*H/12)
    cpx = x+6*W/12
    cpy = y+4*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+3*H/12)
    ctx.lineTo(x+7*W/12, y+4*H/12)
    ctx.lineTo(x+5*W/12, y+4*H/12)
    ctx.lineTo(x+5*W/12, y+3*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.setLineDash([])
    drawStars(x,y,W,points)
  }  
  
  function homeAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let oc = document.createElement('canvas')
    let occtx = oc.getContext("2d")
    oc.height = canvas.height, oc.width = canvas.width
    let colors = shuffle(getCurrentPalette(true,13))
    let H = W, cpx, cpy, points = []
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+14*H/16)
    ctx.lineTo(x+2*W/16, y+7*H/16)
    ctx.lineTo(x+6*W/16, y+9*H/16)
    ctx.lineTo(x+6*W/16, y+14*H/16)
    ctx.lineTo(x+2*W/16, y+14*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+6*W/16, y+9*H/16)
    ragged(ctx, x+14*W/16, y+9*H/16, x+6*W/16, y+9*H/16)
    ragged(ctx, x+14*W/16, y+14*H/16, x+14*W/16, y+9*H/16)
    ragged(ctx, x+6*W/16, y+14*H/16, x+14*W/16, y+14*H/16)
    //ctx.lineTo(x+14*W/16, y+9*H/16)
    //ctx.lineTo(x+14*W/16, y+14*H/16)
    //ctx.lineTo(x+6*W/16, y+14*H/16)
  
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
  
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+6*W/16, y+9*H/16)
    ctx.lineTo(x+6*W/16, y+3*H/16)
    ctx.lineTo(x+2*W/16, y+7*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+6*W/16, y+3*H/16)
    ctx.lineTo(x+13*W/16, y+3*H/16)
    ctx.lineTo(x+14*W/16, y+9*H/16)
    ctx.lineTo(x+6*W/16, y+9*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+3*W/16, y+6*H/16)
    ctx.lineTo(x+3*W/16, y+3*H/16)
    ctx.lineTo(x+4*W/16, y+2*H/16)
    ctx.lineTo(x+4*W/16, y+5*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+7*H/16)
    ctx.lineTo(x+2*W/16, y+2*H/16)
    ctx.lineTo(x+3*W/16, y+3*H/16)
    ctx.lineTo(x+3*W/16, y+6*H/16)
    ctx.lineTo(x+2*W/16, y+7*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+2*H/16)
    ctx.lineTo(x+3*W/16, y+1*H/16)
    ctx.lineTo(x+4*W/16, y+2*H/16)
    ctx.lineTo(x+3*W/16, y+3*H/16)
    ctx.lineTo(x+2*W/16, y+2*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+8*W/16, y+7*H/16)
    ctx.lineTo(x+9*W/16, y+5*H/16)
    ctx.lineTo(x+10*W/16, y+5*H/16)
    ctx.lineTo(x+9*W/16, y+7*H/16)
    ctx.lineTo(x+8*W/16, y+7*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+9*W/16, y+7*H/16)
    ctx.lineTo(x+11*W/16, y+7*H/16)
    ctx.lineTo(x+10*W/16, y+5*H/16)
    ctx.lineTo(x+9*W/16, y+7*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+9*W/16, y+14*H/16)
    ctx.lineTo(x+9*W/16, y+12*H/16)
    ctx.lineTo(x+10*W/16, y+12*H/16)
    ctx.lineTo(x+10*W/16, y+14*H/16)
    ctx.lineTo(x+9*W/16, y+14*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+9*W/16, y+14*H/16)
    ctx.lineTo(x+10*W/16, y+16*H/16)
    ctx.lineTo(x+12*W/16, y+16*H/16)
    ctx.lineTo(x+10*W/16, y+14*H/16)
    ctx.lineTo(x+9*W/16, y+14*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+6*W/16, y+14*H/16)
    cpx = x+6*W/16
    cpy = y+9*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/16, y+9*H/16)
    ctx.lineTo(x+6*W/16, y+9*H/16)
    ctx.lineTo(x+6*W/16, y+14*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+6*W/16, y+12*H/16)
    ctx.lineTo(x+4*W/16, y+8*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+6*W/16, y+12*H/16)
    cpx = x+4*W/16
    cpy = y+8*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/16, y+10*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+6*W/16, y+12*H/16)
    cpx = x+4*W/16
    cpy = y+8*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/16, y+10*H/16)
    ctx.lineTo(x+2*W/16, y+7*H/16)
    ctx.lineTo(x+6*W/16, y+9*H/16)
    ctx.lineTo(x+6*W/16, y+12*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+12*W/16, y+10*H/16)
    ctx.lineTo(x+12*W/16, y+11*H/16)
    ctx.lineTo(x+13*W/16, y+11*H/16)
    ctx.lineTo(x+13*W/16, y+10*H/16)
    ctx.lineTo(x+12*W/16, y+10*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+10*W/16, y+10*H/16)
    ctx.lineTo(x+10*W/16, y+11*H/16)
    ctx.lineTo(x+11*W/16, y+11*H/16)
    ctx.lineTo(x+11*W/16, y+10*H/16)
    ctx.lineTo(x+10*W/16, y+10*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+8*W/16, y+10*H/16)
    ctx.lineTo(x+8*W/16, y+11*H/16)
    ctx.lineTo(x+9*W/16, y+11*H/16)
    ctx.lineTo(x+9*W/16, y+10*H/16)
    ctx.lineTo(x+8*W/16, y+10*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+11*W/16, y+12*H/16)
    ctx.lineTo(x+11*W/16, y+13*H/16)
    ctx.lineTo(x+12*W/16, y+13*H/16)
    ctx.lineTo(x+12*W/16, y+12*H/16)
    ctx.lineTo(x+11*W/16, y+12*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+7*W/16, y+12*H/16)
    ctx.lineTo(x+7*W/16, y+13*H/16)
    ctx.lineTo(x+8*W/16, y+13*H/16)
    ctx.lineTo(x+8*W/16, y+12*H/16)
    ctx.lineTo(x+7*W/16, y+12*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+12*H/16)
    ctx.lineTo(x+4*W/16, y+11*H/16)
    ctx.lineTo(x+5*W/16, y+11*H/16)
    ctx.lineTo(x+5*W/16, y+12*H/16)
    ctx.lineTo(x+4*W/16, y+12*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+3*W/16, y+9*H/16)
    ctx.lineTo(x+3*W/16, y+10*H/16)
    ctx.lineTo(x+4*W/16, y+10*H/16)
    ctx.lineTo(x+4*W/16, y+9*H/16)
    ctx.lineTo(x+3*W/16, y+9*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+10*H/16)
    ctx.lineTo(x+0*W/16, y+10*H/16)
    ctx.lineTo(x+0*W/16, y+16*H/16)
    ctx.lineTo(x+10*W/16, y+16*H/16)
    ctx.lineTo(x+9*W/16, y+14*H/16)
    ctx.lineTo(x+2*W/16, y+14*H/16)
    ctx.lineTo(x+2*W/16, y+10*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+14*W/16, y+11*H/16)
    ctx.lineTo(x+16*W/16, y+11*H/16)
    ctx.lineTo(x+16*W/16, y+16*H/16)
    ctx.lineTo(x+12*W/16, y+16*H/16)
    ctx.lineTo(x+10*W/16, y+14*H/16)
    ctx.lineTo(x+14*W/16, y+14*H/16)
    ctx.lineTo(x+14*W/16, y+11*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
    fillOC(oc, occtx)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x+0*W/16, y+3*H/16)
    cpx = x+1*W/16
    cpy = y+4*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/16, y+3*H/16)
    ctx.lineTo(x+2*W/16, y+2*H/16)
    ctx.lineTo(x+3*W/16, y+1*H/16)
    ctx.lineTo(x+4*W/16, y+2*H/16)
    ctx.lineTo(x+4*W/16, y+3*H/16)
    cpx = x+5*W/16
    cpy = y+0*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/16, y+0*H/16)
    cpx = x+11*W/16
    cpy = y+2*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+13*W/16, y+2*H/16)
    cpx = x+14*W/16
    cpy = y+2*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/16, y+4*H/16)
    cpx = x+15*W/16
    cpy = y+5*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/16, y+6*H/16)
    ctx.lineTo(x+16*W/16, y+0*H/16)
    ctx.lineTo(x+0*W/16, y+0*H/16)
    ctx.lineTo(x+0*W/16, y+3*H/16)
    ctx.clip()
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
    ctx.restore()
  }  
  function packageAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+12*H/16)
    ctx.lineTo(x+5*W/16, y+15*H/16)
    ctx.lineTo(x+15*W/16, y+15*H/16)
    ctx.lineTo(x+12*W/16, y+12*H/16)
    ctx.lineTo(x+2*W/16, y+12*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+12*H/16)
    ctx.lineTo(x+2*W/16, y+4*H/16)
    ctx.lineTo(x+12*W/16, y+4*H/16)
    ctx.lineTo(x+12*W/16, y+12*H/16)
    ctx.lineTo(x+2*W/16, y+12*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+12*W/16, y+4*H/16)
    ctx.lineTo(x+15*W/16, y+7*H/16)
    ctx.lineTo(x+15*W/16, y+15*H/16)
    ctx.lineTo(x+12*W/16, y+12*H/16)
    ctx.lineTo(x+12*W/16, y+4*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+3*W/16, y+6*H/16)
    cpx = x+4*W/16
    cpy = y+3*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/16, y+6*H/16)
    cpx = x+6*W/16
    cpy = y+3*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/16, y+6*H/16)
    cpx = x+8*W/16
    cpy = y+3*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/16, y+6*H/16)
    cpx = x+10*W/16
    cpy = y+3*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/16, y+6*H/16)
    ctx.lineTo(x+11*W/16, y+10*H/16)
    cpx = x+10*W/16
    cpy = y+12*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/16, y+10*H/16)
    cpx = x+8*W/16
    cpy = y+12*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/16, y+10*H/16)
    cpx = x+6*W/16
    cpy = y+12*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/16, y+10*H/16)
    cpx = x+4*W/16
    cpy = y+12*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/16, y+10*H/16)
    ctx.lineTo(x+3*W/16, y+6*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+4*H/16)
    ctx.lineTo(x+0*W/16, y+2*H/16)
    ctx.lineTo(x+10*W/16, y+2*H/16)
    ctx.lineTo(x+12*W/16, y+4*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+7*W/16, y+10*H/16)
    cpx = x+5*W/16
    cpy = y+10*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/16, y+8*H/16)
    cpx = x+5*W/16
    cpy = y+6*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/16, y+6*H/16)
    cpx = x+9*W/16
    cpy = y+6*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/16, y+8*H/16)
    cpx = x+9*W/16
    cpy = y+10*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/16, y+10*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+12*H/16)
    ctx.lineTo(x+3*W/16, y+13*H/16)
    ctx.lineTo(x+13*W/16, y+13*H/16)
    ctx.lineTo(x+12*W/16, y+12*H/16)
    ctx.lineTo(x+2*W/16, y+12*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+12*W/16, y+12*H/16)
    ctx.lineTo(x+12*W/16, y+4*H/16)
    ctx.lineTo(x+13*W/16, y+5*H/16)
    ctx.lineTo(x+13*W/16, y+13*H/16)
    ctx.lineTo(x+12*W/16, y+12*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+14*H/16)
    ctx.lineTo(x+14*W/16, y+14*H/16)
    ctx.lineTo(x+15*W/16, y+15*H/16)
    ctx.lineTo(x+5*W/16, y+15*H/16)
    ctx.lineTo(x+4*W/16, y+14*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+14*W/16, y+14*H/16)
    ctx.lineTo(x+14*W/16, y+6*H/16)
    ctx.lineTo(x+15*W/16, y+7*H/16)
    ctx.lineTo(x+15*W/16, y+15*H/16)
    ctx.lineTo(x+14*W/16, y+14*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+3*W/16, y+6*H/16)
    ctx.lineTo(x+5*W/16, y+8*H/16)
    ctx.lineTo(x+3*W/16, y+10*H/16)
    ctx.lineTo(x+3*W/16, y+6*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+11*W/16, y+6*H/16)
    ctx.lineTo(x+9*W/16, y+8*H/16)
    ctx.lineTo(x+11*W/16, y+10*H/16)
    ctx.lineTo(x+11*W/16, y+6*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+10*W/16, y+2*H/16)
    ctx.lineTo(x+16*W/16, y+1*H/16)
    ctx.lineTo(x+16*W/16, y+0*H/16)
    ctx.lineTo(x+0*W/16, y+0*H/16)
    ctx.lineTo(x+0*W/16, y+2*H/16)
    ctx.lineTo(x+10*W/16, y+2*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+12*W/16, y+3*H/16)
    cpx = x+14*W/16
    cpy = y+2*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+16*W/16, y+3*H/16)
    cpx = x+14*W/16
    cpy = y+5*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/16, y+3*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+1*W/16, y+13*H/16)
    cpx = x+1*W/16
    cpy = y+15*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/16, y+15*H/16)
    cpx = x+3*W/16
    cpy = y+13*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+1*W/16, y+13*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+0*W/16, y+4*H/16)
    ctx.lineTo(x+2*W/16, y+5*H/16)
    ctx.lineTo(x+0*W/16, y+6*H/16)
    ctx.lineTo(x+2*W/16, y+7*H/16)
    ctx.lineTo(x+0*W/16, y+8*H/16)
    ctx.lineTo(x+2*W/16, y+9*H/16)
    ctx.lineTo(x+0*W/16, y+10*H/16)
    ctx.lineTo(x+2*W/16, y+11*H/16)
    ctx.lineTo(x+0*W/16, y+12*H/16)
    ctx.lineTo(x+0*W/16, y+4*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+0*W/16, y+0*H/16)
    ctx.lineTo(x+1*W/16, y+2*H/16)
    ctx.lineTo(x+2*W/16, y+0*H/16)
    ctx.lineTo(x+0*W/16, y+0*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+0*H/16)
    ctx.lineTo(x+3*W/16, y+2*H/16)
    ctx.lineTo(x+4*W/16, y+0*H/16)
    ctx.lineTo(x+2*W/16, y+0*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+0*H/16)
    ctx.lineTo(x+5*W/16, y+2*H/16)
    ctx.lineTo(x+6*W/16, y+0*H/16)
    ctx.lineTo(x+4*W/16, y+0*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+6*W/16, y+0*H/16)
    ctx.lineTo(x+7*W/16, y+2*H/16)
    ctx.lineTo(x+8*W/16, y+0*H/16)
    ctx.lineTo(x+6*W/16, y+0*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+8*W/16, y+0*H/16)
    ctx.lineTo(x+9*W/16, y+2*H/16)
    ctx.lineTo(x+10*W/16, y+0*H/16)
    ctx.lineTo(x+8*W/16, y+0*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+16*H/16)
    ctx.lineTo(x+5*W/16, y+15*H/16)
    ctx.lineTo(x+5*W/16, y+16*H/16)
    ctx.lineTo(x+6*W/16, y+15*H/16)
    ctx.lineTo(x+6*W/16, y+16*H/16)
    ctx.lineTo(x+7*W/16, y+15*H/16)
    ctx.lineTo(x+7*W/16, y+16*H/16)
    ctx.lineTo(x+8*W/16, y+15*H/16)
    ctx.lineTo(x+8*W/16, y+16*H/16)
    ctx.lineTo(x+9*W/16, y+15*H/16)
    ctx.lineTo(x+9*W/16, y+16*H/16)
    ctx.lineTo(x+10*W/16, y+15*H/16)
    ctx.lineTo(x+10*W/16, y+16*H/16)
    ctx.lineTo(x+11*W/16, y+15*H/16)
    ctx.lineTo(x+11*W/16, y+16*H/16)
    ctx.lineTo(x+12*W/16, y+15*H/16)
    ctx.lineTo(x+12*W/16, y+16*H/16)
    ctx.lineTo(x+13*W/16, y+15*H/16)
    ctx.lineTo(x+13*W/16, y+16*H/16)
    ctx.lineTo(x+14*W/16, y+15*H/16)
    ctx.lineTo(x+14*W/16, y+16*H/16)
    ctx.lineTo(x+15*W/16, y+15*H/16)
    ctx.lineTo(x+15*W/16, y+16*H/16)
    ctx.lineTo(x+16*W/16, y+15*H/16)
    ctx.lineTo(x+15*W/16, y+15*H/16)
    ctx.lineTo(x+5*W/16, y+15*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+16*W/16, y+7*H/16)
    ctx.lineTo(x+15*W/16, y+8*H/16)
    ctx.lineTo(x+16*W/16, y+8*H/16)
    ctx.lineTo(x+16*W/16, y+7*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+15*W/16, y+9*H/16)
    ctx.lineTo(x+16*W/16, y+9*H/16)
    ctx.lineTo(x+16*W/16, y+8*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+16*W/16, y+9*H/16)
    ctx.lineTo(x+15*W/16, y+10*H/16)
    ctx.lineTo(x+16*W/16, y+10*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+16*W/16, y+11*H/16)
    ctx.lineTo(x+15*W/16, y+12*H/16)
    ctx.lineTo(x+16*W/16, y+12*H/16)
    ctx.lineTo(x+16*W/16, y+11*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+16*W/16, y+12*H/16)
    ctx.lineTo(x+15*W/16, y+13*H/16)
    ctx.lineTo(x+16*W/16, y+13*H/16)
    ctx.lineTo(x+16*W/16, y+12*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+16*W/16, y+13*H/16)
    ctx.lineTo(x+16*W/16, y+13*H/16)
    ctx.lineTo(x+15*W/16, y+14*H/16)
    ctx.lineTo(x+16*W/16, y+14*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+16*W/16, y+8*H/16)
    ctx.lineTo(x+15*W/16, y+9*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+16*W/16, y+10*H/16)
    ctx.lineTo(x+15*W/16, y+11*H/16)
    ctx.lineTo(x+16*W/16, y+11*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+1*W/16, y+3*H/16)
    ctx.lineTo(x+11*W/16, y+3*H/16)
    ctx.lineTo(x+12*W/16, y+4*H/16)
    ctx.lineTo(x+2*W/16, y+4*H/16)
    ctx.lineTo(x+1*W/16, y+3*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
  
    ctx.setLineDash([])
    drawStars(x,y,W,points)
  }  
  
  function tinAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+0*H/16)
    ctx.lineTo(x+6*W/16, y+2*H/16)
    ctx.lineTo(x+16*W/16, y+2*H/16)
    ctx.lineTo(x+14*W/16, y+0*H/16)
    ctx.lineTo(x+4*W/16, y+0*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+0*H/16)
    ctx.lineTo(x+2*W/16, y+3*H/16)
    ctx.lineTo(x+13*W/16, y+3*H/16)
    ctx.lineTo(x+14*W/16, y+2*H/16)
    ctx.lineTo(x+6*W/16, y+2*H/16)
    ctx.lineTo(x+4*W/16, y+0*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+3*H/16)
    ctx.lineTo(x+4*W/16, y+5*H/16)
    ctx.lineTo(x+15*W/16, y+5*H/16)
    ctx.lineTo(x+13*W/16, y+3*H/16)
    ctx.lineTo(x+2*W/16, y+3*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+5*H/16)
    ctx.lineTo(x+4*W/16, y+14*H/16)
    ctx.lineTo(x+15*W/16, y+14*H/16)
    ctx.lineTo(x+15*W/16, y+5*H/16)
    ctx.lineTo(x+4*W/16, y+5*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+14*H/16)
    ctx.lineTo(x+2*W/16, y+12*H/16)
    ctx.lineTo(x+2*W/16, y+3*H/16)
    ctx.lineTo(x+4*W/16, y+5*H/16)
    ctx.lineTo(x+4*W/16, y+14*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+2*W/16, y+6*H/16)
    ctx.lineTo(x+0*W/16, y+7*H/16)
    ctx.lineTo(x+0*W/16, y+16*H/16)
    ctx.lineTo(x+11*W/16, y+16*H/16)
    ctx.lineTo(x+15*W/16, y+14*H/16)
    ctx.lineTo(x+4*W/16, y+14*H/16)
    ctx.lineTo(x+2*W/16, y+12*H/16)
    ctx.lineTo(x+2*W/16, y+6*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+13*W/16, y+3*H/16)
    ctx.lineTo(x+13*W/16, y+5*H/16)
    ctx.lineTo(x+15*W/16, y+5*H/16)
    ctx.lineTo(x+13*W/16, y+3*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+15*W/16, y+6*H/16)
    ctx.lineTo(x+16*W/16, y+7*H/16)
    ctx.lineTo(x+16*W/16, y+16*H/16)
    ctx.lineTo(x+11*W/16, y+16*H/16)
    ctx.lineTo(x+15*W/16, y+14*H/16)
    ctx.lineTo(x+15*W/16, y+6*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+8*W/16, y+1*H/16)
    ctx.lineTo(x+9*W/16, y+2*H/16)
    ctx.lineTo(x+12*W/16, y+2*H/16)
    ctx.lineTo(x+11*W/16, y+1*H/16)
    ctx.lineTo(x+8*W/16, y+1*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+6*W/16, y+10*H/16)
    cpx = x+4*W/16
    cpy = y+10*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/16, y+11*H/16)
    cpx = x+4*W/16
    cpy = y+12*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/16, y+12*H/16)
    ctx.lineTo(x+12*W/16, y+12*H/16)
    cpx = x+12*W/16
    cpy = y+10*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/16, y+10*H/16)
    cpx = x+13*W/16
    cpy = y+11*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/16, y+12*H/16)
    cpx = x+12*W/16
    cpy = y+12*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/16, y+10*H/16)
    cpx = x+6*W/16
    cpy = y+10*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/16, y+10*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+5*W/16, y+11*H/16)
    cpx = x+6*W/16
    cpy = y+10*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/16, y+11*H/16)
    cpx = x+6*W/16
    cpy = y+12*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/16, y+11*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+5*W/16, y+7*H/16)
    cpx = x+6*W/16
    cpy = y+8*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/16, y+9*H/16)
    cpx = x+7*W/16
    cpy = y+9*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/16, y+7*H/16)
    cpx = x+7*W/16
    cpy = y+9*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/16, y+7*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+7*W/16, y+8*H/16)
    cpx = x+7*W/16
    cpy = y+7*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/16, y+7*H/16)
    cpx = x+9*W/16
    cpy = y+7*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/16, y+8*H/16)
    cpx = x+9*W/16
    cpy = y+9*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/16, y+9*H/16)
    cpx = x+7*W/16
    cpy = y+9*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/16, y+8*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+11*W/16, y+9*H/16)
    ctx.lineTo(x+11*W/16, y+6*H/16)
    ctx.lineTo(x+12*W/16, y+6*H/16)
    ctx.lineTo(x+13*W/16, y+7*H/16)
    ctx.lineTo(x+13*W/16, y+6*H/16)
    ctx.lineTo(x+14*W/16, y+6*H/16)
    ctx.lineTo(x+14*W/16, y+9*H/16)
    ctx.lineTo(x+13*W/16, y+9*H/16)
    ctx.lineTo(x+12*W/16, y+8*H/16)
    ctx.lineTo(x+12*W/16, y+9*H/16)
    ctx.lineTo(x+11*W/16, y+9*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+3*W/16, y+4*H/16)
    ctx.lineTo(x+3*W/16, y+13*H/16)
    ctx.lineTo(x+4*W/16, y+14*H/16)
    ctx.lineTo(x+4*W/16, y+5*H/16)
    ctx.lineTo(x+3*W/16, y+4*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+5*W/16, y+5*H/16)
    ctx.lineTo(x+6*W/16, y+4*H/16)
    ctx.lineTo(x+7*W/16, y+5*H/16)
    ctx.lineTo(x+8*W/16, y+4*H/16)
    ctx.lineTo(x+9*W/16, y+5*H/16)
    ctx.lineTo(x+10*W/16, y+4*H/16)
    ctx.lineTo(x+11*W/16, y+5*H/16)
    ctx.lineTo(x+12*W/16, y+4*H/16)
    ctx.lineTo(x+13*W/16, y+5*H/16)
    ctx.lineTo(x+5*W/16, y+5*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+8*W/16, y+14*H/16)
    ctx.lineTo(x+8*W/16, y+13*H/16)
    ctx.lineTo(x+11*W/16, y+13*H/16)
    ctx.lineTo(x+11*W/16, y+14*H/16)
    ctx.lineTo(x+8*W/16, y+14*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+13*H/16)
    cpx = x+5*W/16
    cpy = y+13*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/16, y+14*H/16)
    cpx = x+4*W/16
    cpy = y+14*H/16
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+14*W/16, y+14*H/16)
    cpx = x+14*W/16
    cpy = y+13*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/16, y+13*H/16)
    cpx = x+15*W/16
    cpy = y+14*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+14*W/16, y+14*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+4*W/16, y+6*H/16)
    cpx = x+5*W/16
    cpy = y+6*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/16, y+5*H/16)
    cpx = x+4*W/16
    cpy = y+5*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/16, y+5*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+14*W/16, y+5*H/16)
    cpx = x+14*W/16
    cpy = y+6*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/16, y+6*H/16)
    cpx = x+15*W/16
    cpy = y+5*H/16
    ctx.quadraticCurveTo(cpx, cpy, x+15*W/16, y+5*H/16)
    ctx.fillStyle = randomPick(colors)
   ctx.fill()
  
    ctx.setLineDash([])
    drawStars(x,y,W,points)
  }  
  function cannedAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    let colors = shuffle(getCurrentPalette(true,13))
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+1*W/12, y+3*H/12)
    points.push(x+1*W/12, y+3*H/12)
    cpx = x+1*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/12, y+2*H/12)
    points.push(x+2*W/12, y+2*H/12)
    ctx.lineTo(x+11*W/12, y+2*H/12)
    points.push(x+11*W/12, y+2*H/12)
    cpx = x+12*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/12, y+3*H/12)
    points.push(x+12*W/12, y+3*H/12)
    ctx.lineTo(x+12*W/12, y+10*H/12)
    points.push(x+12*W/12, y+10*H/12)
    cpx = x+12*W/12
    cpy = y+11*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+11*H/12)
    points.push(x+11*W/12, y+11*H/12)
    ctx.lineTo(x+2*W/12, y+11*H/12)
    points.push(x+2*W/12, y+11*H/12)
    cpx = x+1*W/12
    cpy = y+11*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+1*W/12, y+10*H/12)
    points.push(x+1*W/12, y+10*H/12)
    ctx.lineTo(x+1*W/12, y+3*H/12)
    points.push(x+1*W/12, y+3*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+11*H/12)
    points.push(x+2*W/12, y+11*H/12)
    cpx = x+1*W/12
    cpy = y+11*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+1*W/12, y+10*H/12)
    points.push(x+1*W/12, y+10*H/12)
    ctx.lineTo(x+1*W/12, y+4*H/12)
    points.push(x+1*W/12, y+4*H/12)
    cpx = x+1*W/12
    cpy = y+3*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/12, y+3*H/12)
    points.push(x+2*W/12, y+3*H/12)
    ctx.lineTo(x+10*W/12, y+3*H/12)
    points.push(x+10*W/12, y+3*H/12)
    cpx = x+11*W/12
    cpy = y+3*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+4*H/12)
    points.push(x+11*W/12, y+4*H/12)
    ctx.lineTo(x+11*W/12, y+10*H/12)
    points.push(x+11*W/12, y+10*H/12)
    cpx = x+11*W/12
    cpy = y+11*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+11*H/12)
    points.push(x+10*W/12, y+11*H/12)
    ctx.lineTo(x+2*W/12, y+11*H/12)
    points.push(x+2*W/12, y+11*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  
    ctx.beginPath()
    ctx.moveTo(x+1*W/12, y+3*H/12)
    points.push(x+1*W/12, y+3*H/12)
    ctx.lineTo(x+0*W/12, y+4*H/12)
    points.push(x+0*W/12, y+4*H/12)
    ctx.lineTo(x+0*W/12, y+12*H/12)
    points.push(x+0*W/12, y+12*H/12)
    ctx.lineTo(x+1*W/12, y+12*H/12)
    points.push(x+1*W/12, y+12*H/12)
    ctx.lineTo(x+2*W/12, y+11*H/12)
    points.push(x+2*W/12, y+11*H/12)
    cpx = x+1*W/12
    cpy = y+11*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+1*W/12, y+10*H/12)
    points.push(x+1*W/12, y+10*H/12)
    ctx.lineTo(x+1*W/12, y+3*H/12)
    points.push(x+1*W/12, y+3*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+11*H/12)
    points.push(x+2*W/12, y+11*H/12)
    ctx.lineTo(x+11*W/12, y+11*H/12)
    points.push(x+11*W/12, y+11*H/12)
    ctx.lineTo(x+10*W/12, y+12*H/12)
    points.push(x+10*W/12, y+12*H/12)
    ctx.lineTo(x+1*W/12, y+12*H/12)
    points.push(x+1*W/12, y+12*H/12)
    ctx.lineTo(x+2*W/12, y+11*H/12)
    points.push(x+2*W/12, y+11*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+4*W/12, y+3*H/12)
    points.push(x+4*W/12, y+3*H/12)
    cpx = x+3*W/12
    cpy = y+3*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+1*W/12, y+4*H/12)
    points.push(x+1*W/12, y+4*H/12)
    cpx = x+3*W/12
    cpy = y+5*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+5*H/12)
    points.push(x+4*W/12, y+5*H/12)
    ctx.lineTo(x+9*W/12, y+5*H/12)
    points.push(x+9*W/12, y+5*H/12)
    cpx = x+10*W/12
    cpy = y+4*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+5*H/12)
    points.push(x+11*W/12, y+5*H/12)
    cpx = x+12*W/12
    cpy = y+5*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+4*H/12)
    points.push(x+11*W/12, y+4*H/12)
    cpx = x+12*W/12
    cpy = y+3*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+3*H/12)
    points.push(x+11*W/12, y+3*H/12)
    cpx = x+10*W/12
    cpy = y+4*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+3*H/12)
    points.push(x+9*W/12, y+3*H/12)
    ctx.lineTo(x+4*W/12, y+3*H/12)
    points.push(x+4*W/12, y+3*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+9*W/12, y+6*H/12)
    points.push(x+9*W/12, y+6*H/12)
    cpx = x+10*W/12
    cpy = y+6*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/12, y+7*H/12)
    points.push(x+12*W/12, y+7*H/12)
    cpx = x+10*W/12
    cpy = y+8*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+8*H/12)
    points.push(x+9*W/12, y+8*H/12)
    ctx.lineTo(x+4*W/12, y+8*H/12)
    points.push(x+4*W/12, y+8*H/12)
    cpx = x+3*W/12
    cpy = y+7*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/12, y+8*H/12)
    points.push(x+2*W/12, y+8*H/12)
    cpx = x+1*W/12
    cpy = y+8*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/12, y+7*H/12)
    points.push(x+2*W/12, y+7*H/12)
    cpx = x+1*W/12
    cpy = y+6*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/12, y+6*H/12)
    points.push(x+2*W/12, y+6*H/12)
    cpx = x+3*W/12
    cpy = y+7*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+6*H/12)
    points.push(x+4*W/12, y+6*H/12)
    ctx.lineTo(x+9*W/12, y+6*H/12)
    points.push(x+9*W/12, y+6*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+4*W/12, y+9*H/12)
    points.push(x+4*W/12, y+9*H/12)
    cpx = x+3*W/12
    cpy = y+9*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+1*W/12, y+10*H/12)
    points.push(x+1*W/12, y+10*H/12)
    cpx = x+3*W/12
    cpy = y+11*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+11*H/12)
    points.push(x+4*W/12, y+11*H/12)
    ctx.lineTo(x+9*W/12, y+11*H/12)
    points.push(x+9*W/12, y+11*H/12)
    cpx = x+10*W/12
    cpy = y+10*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+11*H/12)
    points.push(x+11*W/12, y+11*H/12)
    cpx = x+12*W/12
    cpy = y+11*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+10*H/12)
    points.push(x+11*W/12, y+10*H/12)
    cpx = x+12*W/12
    cpy = y+9*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+9*H/12)
    points.push(x+11*W/12, y+9*H/12)
    cpx = x+10*W/12
    cpy = y+10*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+9*H/12)
    points.push(x+9*W/12, y+9*H/12)
    ctx.lineTo(x+4*W/12, y+9*H/12)
    points.push(x+4*W/12, y+9*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+3*W/12, y+4*H/12)
    points.push(x+3*W/12, y+4*H/12)
    cpx = x+3*W/12
    cpy = y+3*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+3*H/12)
    points.push(x+4*W/12, y+3*H/12)
    cpx = x+5*W/12
    cpy = y+3*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+4*H/12)
    points.push(x+5*W/12, y+4*H/12)
    cpx = x+5*W/12
    cpy = y+5*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+5*H/12)
    points.push(x+4*W/12, y+5*H/12)
    cpx = x+3*W/12
    cpy = y+5*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+4*H/12)
    points.push(x+3*W/12, y+4*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+3*W/12, y+10*H/12)
    points.push(x+3*W/12, y+10*H/12)
    cpx = x+3*W/12
    cpy = y+9*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+9*H/12)
    points.push(x+4*W/12, y+9*H/12)
    cpx = x+5*W/12
    cpy = y+9*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+10*H/12)
    points.push(x+5*W/12, y+10*H/12)
    cpx = x+5*W/12
    cpy = y+11*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+11*H/12)
    points.push(x+4*W/12, y+11*H/12)
    cpx = x+3*W/12
    cpy = y+11*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+10*H/12)
    points.push(x+3*W/12, y+10*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+9*W/12, y+7*H/12)
    points.push(x+9*W/12, y+7*H/12)
    cpx = x+9*W/12
    cpy = y+6*H/12
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+8*W/12, y+7*H/12)
    points.push(x+8*W/12, y+7*H/12)
    cpx = x+8*W/12
    cpy = y+6*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+6*H/12)
    points.push(x+9*W/12, y+6*H/12)
    cpx = x+10*W/12
    cpy = y+6*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+7*H/12)
    points.push(x+10*W/12, y+7*H/12)
    cpx = x+10*W/12
    cpy = y+8*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+8*H/12)
    points.push(x+9*W/12, y+8*H/12)
    cpx = x+8*W/12
    cpy = y+8*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+7*H/12)
    points.push(x+8*W/12, y+7*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+1*W/12, y+10*H/12)
    points.push(x+1*W/12, y+10*H/12)
    cpx = x+0*W/12
    cpy = y+11*H/12
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+1*W/12, y+10*H/12)
    points.push(x+1*W/12, y+10*H/12)
    ctx.lineTo(x+0*W/12, y+11*H/12)
    points.push(x+0*W/12, y+11*H/12)
    ctx.lineTo(x+0*W/12, y+10*H/12)
    points.push(x+0*W/12, y+10*H/12)
    ctx.lineTo(x+1*W/12, y+9*H/12)
    points.push(x+1*W/12, y+9*H/12)
    ctx.lineTo(x+1*W/12, y+10*H/12)
    points.push(x+1*W/12, y+10*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+10*W/12, y+11*H/12)
    points.push(x+10*W/12, y+11*H/12)
    ctx.lineTo(x+9*W/12, y+12*H/12)
    points.push(x+9*W/12, y+12*H/12)
    ctx.lineTo(x+10*W/12, y+12*H/12)
    points.push(x+10*W/12, y+12*H/12)
    ctx.lineTo(x+11*W/12, y+11*H/12)
    points.push(x+11*W/12, y+11*H/12)
    ctx.lineTo(x+10*W/12, y+11*H/12)
    points.push(x+10*W/12, y+11*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+1*W/12, y+4*H/12)
    points.push(x+1*W/12, y+4*H/12)
    ctx.lineTo(x+0*W/12, y+5*H/12)
    points.push(x+0*W/12, y+5*H/12)
    ctx.lineTo(x+0*W/12, y+4*H/12)
    points.push(x+0*W/12, y+4*H/12)
    ctx.lineTo(x+1*W/12, y+3*H/12)
    points.push(x+1*W/12, y+3*H/12)
    ctx.lineTo(x+1*W/12, y+4*H/12)
    points.push(x+1*W/12, y+4*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+0*W/12, y+0*H/12)
    points.push(x+0*W/12, y+0*H/12)
    ctx.lineTo(x+1*W/12, y+2*H/12)
    points.push(x+1*W/12, y+2*H/12)
    ctx.lineTo(x+0*W/12, y+2*H/12)
    points.push(x+0*W/12, y+2*H/12)
    ctx.lineTo(x+0*W/12, y+0*H/12)
    points.push(x+0*W/12, y+0*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+0*W/12, y+0*H/12)
    points.push(x+0*W/12, y+0*H/12)
    cpx = x+1*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/12, y+0*H/12)
    points.push(x+2*W/12, y+0*H/12)
    cpx = x+3*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+0*H/12)
    points.push(x+4*W/12, y+0*H/12)
    cpx = x+5*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+0*H/12)
    points.push(x+6*W/12, y+0*H/12)
    cpx = x+7*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+0*H/12)
    points.push(x+8*W/12, y+0*H/12)
    cpx = x+9*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+0*H/12)
    points.push(x+10*W/12, y+0*H/12)
    cpx = x+11*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/12, y+0*H/12)
    points.push(x+12*W/12, y+0*H/12)
    ctx.lineTo(x+12*W/12, y+2*H/12)
    points.push(x+12*W/12, y+2*H/12)
    ctx.lineTo(x+1*W/12, y+2*H/12)
    points.push(x+1*W/12, y+2*H/12)
    ctx.lineTo(x+0*W/12, y+0*H/12)
    points.push(x+0*W/12, y+0*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  
    
    ctx.beginPath()
    ctx.moveTo(x+11*W/12, y+12*H/12)
    points.push(x+11*W/12, y+12*H/12)
    cpx = x+12*W/12
    cpy = y+11*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+12*W/12, y+10*H/12)
    points.push(x+12*W/12, y+10*H/12)
    cpx = x+12*W/12
    cpy = y+11*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+11*H/12)
    points.push(x+11*W/12, y+11*H/12)
    ctx.lineTo(x+10*W/12, y+12*H/12)
    points.push(x+10*W/12, y+12*H/12)
    ctx.lineTo(x+11*W/12, y+12*H/12)
    points.push(x+11*W/12, y+12*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+2*H/12)
    points.push(x+2*W/12, y+2*H/12)
    cpx = x+1*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+0*W/12, y+3*H/12)
    points.push(x+0*W/12, y+3*H/12)
    ctx.lineTo(x+0*W/12, y+4*H/12)
    points.push(x+0*W/12, y+4*H/12)
    ctx.lineTo(x+1*W/12, y+3*H/12)
    points.push(x+1*W/12, y+3*H/12)
    cpx = x+1*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+2*W/12, y+2*H/12)
    points.push(x+2*W/12, y+2*H/12)
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
    ctx.setLineDash([])
    drawStars(x,y,W,points)
  }  
  
  
  function horseAt (x,y,W,color) {
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let H = W, cpx, cpy, points = []
    ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
    ctx.strokeStyle = color
    ctx.lineCap = "square"
    ctx.lineJoin = "bevel"
  
    ctx.beginPath()
    ctx.moveTo(x+4*W/12, y+2*H/12)
    ctx.lineTo(x+8*W/12, y+10*H/12)
    ctx.lineTo(x+11*W/12, y+5*H/12)
    ctx.lineTo(x+6*W/12, y+2*H/12)
    ctx.lineTo(x+4*W/12, y+2*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+4*W/12, y+2*H/12)
    ctx.lineTo(x+2*W/12, y+7*H/12)
    ctx.lineTo(x+6*W/12, y+2*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+8*W/12, y+10*H/12)
    ctx.lineTo(x+9*W/12, y+12*H/12)
    ctx.lineTo(x+12*W/12, y+12*H/12)
    ctx.lineTo(x+12*W/12, y+4*H/12)
    ctx.lineTo(x+8*W/12, y+10*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+7*H/12)
    ctx.lineTo(x+3*W/12, y+2*H/12)
    ctx.lineTo(x+6*W/12, y+2*H/12)
    ctx.lineTo(x+2*W/12, y+7*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+7*W/12, y+2*H/12)
    ctx.lineTo(x+12*W/12, y+5*H/12)
    ctx.lineTo(x+11*W/12, y+5*H/12)
    ctx.lineTo(x+6*W/12, y+2*H/12)
    ctx.lineTo(x+7*W/12, y+2*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+3*W/12, y+2*H/12)
    ctx.lineTo(x+7*W/12, y+1*H/12)
    ctx.lineTo(x+7*W/12, y+2*H/12)
    ctx.lineTo(x+3*W/12, y+3*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+7*H/12)
    cpx = x+2*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+2*H/12)
    cpx = x+6*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+5*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+7*H/12)
    cpx = x+3*W/12
    cpy = y+7*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+4*H/12)
    cpx = x+5*W/12
    cpy = y+10*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+10*H/12)
    cpx = x+7*W/12
    cpy = y+12*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+12*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+3*W/12, y+7*H/12)
    cpx = x+2*W/12
    cpy = y+7*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+1*W/12, y+6*H/12)
    cpx = x+2*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+2*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+4*W/12, y+2*H/12)
    cpx = x+7*W/12
    cpy = y+1*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+2*H/12)
    cpx = x+5*W/12
    cpy = y+3*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+4*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+3*W/12, y+2*H/12)
    cpx = x+4*W/12
    cpy = y+0*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+0*H/12)
    cpx = x+5*W/12
    cpy = y+1*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+2*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+5*W/12, y+4*H/12)
    cpx = x+5*W/12
    cpy = y+8*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+10*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+8*W/12, y+10*H/12)
    cpx = x+9*W/12
    cpy = y+7*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+5*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+5*W/12, y+4*H/12)
    cpx = x+6*W/12
    cpy = y+8*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+10*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+3*H/12)
    cpx = x+3*W/12
    cpy = y+3*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+3*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+3*W/12, y+4*H/12)
    ctx.lineTo(x+3*W/12, y+2*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+4*H/12)
    ctx.lineTo(x+4*W/12, y+2*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+2*W/12, y+2*H/12)
    ctx.lineTo(x+4*W/12, y+4*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+7*W/12, y+2*H/12)
    cpx = x+8*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+3*H/12)
    cpx = x+9*W/12
    cpy = y+2*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+3*H/12)
    cpx = x+10*W/12
    cpy = y+3*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+4*H/12)
    cpx = x+11*W/12
    cpy = y+3*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+4*H/12)
    cpx = x+12*W/12
    cpy = y+3*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+5*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+7*W/12, y+2*H/12)
    ctx.lineTo(x+8*W/12, y+1*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+7*W/12, y+3*H/12)
    ctx.lineTo(x+8*W/12, y+2*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+8*W/12, y+3*H/12)
    ctx.lineTo(x+9*W/12, y+2*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+9*W/12, y+3*H/12)
    ctx.lineTo(x+10*W/12, y+3*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+10*W/12, y+4*H/12)
    ctx.lineTo(x+11*W/12, y+3*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+11*W/12, y+5*H/12)
    ctx.lineTo(x+12*W/12, y+3*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+4*W/12, y+2*H/12)
    ctx.lineTo(x+6*W/12, y+1*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+1*W/12, y+6*H/12)
    ctx.lineTo(x+2*W/12, y+6*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+1*W/12, y+5*H/12)
    cpx = x+3*W/12
    cpy = y+5*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+6*H/12)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+1*W/12, y+4*H/12)
    cpx = x+3*W/12
    cpy = y+4*H/12
    ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+5*H/12)
    ctx.stroke()
  
    ctx.setLineDash([])
  
    drawStars(x,y,W,points)
  }  
      
  