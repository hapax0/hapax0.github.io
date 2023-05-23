function house4At (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+18*H/20)
  ctx.lineTo(x+10*W/20, y+18*H/20)
  ctx.lineTo(x+10*W/20, y+10*H/20)
  ctx.lineTo(x+6*W/20, y+4*H/20)
  ctx.lineTo(x+2*W/20, y+10*H/20)
  ctx.lineTo(x+2*W/20, y+18*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/20, y+17*H/20)
  ctx.lineTo(x+18*W/20, y+17*H/20)
  ctx.lineTo(x+18*W/20, y+10*H/20)
  ctx.lineTo(x+10*W/20, y+10*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+18*W/20, y+10*H/20)
  ctx.lineTo(x+14*W/20, y+4*H/20)
  ctx.lineTo(x+6*W/20, y+4*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/20, y+6*H/20)
  ctx.lineTo(x+10*W/20, y+2*H/20)
  ctx.lineTo(x+12*W/20, y+2*H/20)
  ctx.lineTo(x+12*W/20, y+4*H/20)
  ctx.lineTo(x+12*W/20, y+6*H/20)
  ctx.lineTo(x+10*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/20, y+18*H/20)
  ctx.lineTo(x+5*W/20, y+16*H/20)
  ctx.lineTo(x+7*W/20, y+16*H/20)
  ctx.lineTo(x+7*W/20, y+18*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/20, y+12*H/20)
  ctx.lineTo(x+3*W/20, y+10*H/20)
  ctx.lineTo(x+4*W/20, y+10*H/20)
  ctx.lineTo(x+4*W/20, y+12*H/20)
  ctx.lineTo(x+3*W/20, y+12*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/20, y+10*H/20)
  ctx.lineTo(x+5*W/20, y+12*H/20)
  ctx.lineTo(x+6*W/20, y+12*H/20)
  ctx.lineTo(x+6*W/20, y+10*H/20)
  ctx.lineTo(x+5*W/20, y+10*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/20, y+10*H/20)
  ctx.lineTo(x+7*W/20, y+12*H/20)
  ctx.lineTo(x+8*W/20, y+12*H/20)
  ctx.lineTo(x+8*W/20, y+10*H/20)
  ctx.lineTo(x+7*W/20, y+10*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/20, y+11*H/20)
  ctx.lineTo(x+11*W/20, y+13*H/20)
  ctx.lineTo(x+12*W/20, y+13*H/20)
  ctx.lineTo(x+12*W/20, y+11*H/20)
  ctx.lineTo(x+11*W/20, y+11*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/20, y+11*H/20)
  ctx.lineTo(x+16*W/20, y+13*H/20)
  ctx.lineTo(x+17*W/20, y+13*H/20)
  ctx.lineTo(x+17*W/20, y+11*H/20)
  ctx.lineTo(x+16*W/20, y+11*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+6*H/20)
  ctx.lineTo(x+4*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/20, y+6*H/20)
  ctx.lineTo(x+18*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+3*H/20)
  ctx.lineTo(x+9*W/20, y+3*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/20, y+3*H/20)
  ctx.lineTo(x+18*W/20, y+3*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/20, y+18*H/20)
  ctx.lineTo(x+16*W/20, y+18*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/20, y+2*H/20)
  ctx.lineTo(x+11*W/20, y+3*H/20)
  ctx.lineTo(x+11*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/20, y+1*H/20)
  ctx.lineTo(x+12*W/20, y+2*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+5*H/20)
  ctx.lineTo(x+9*W/20, y+10*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/20, y+5*H/20)
  ctx.lineTo(x+16*W/20, y+9*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/20, y+16*H/20)
  ctx.lineTo(x+17*W/20, y+16*H/20)
  ctx.lineTo(x+17*W/20, y+15*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/20, y+11*H/20)
  ctx.lineTo(x+9*W/20, y+16*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+9*H/20)
  ctx.lineTo(x+3*W/20, y+8*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  


function stallsAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/20, y+14*H/20)
  ctx.lineTo(x+18*W/20, y+14*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+11*H/20)
  ctx.lineTo(x+18*W/20, y+11*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/20, y+12*H/20)
  ctx.lineTo(x+6*W/20, y+12*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/20, y+12*H/20)
  ctx.lineTo(x+9*W/20, y+12*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/20, y+12*H/20)
  ctx.lineTo(x+12*W/20, y+12*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/20, y+12*H/20)
  ctx.lineTo(x+15*W/20, y+12*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/20, y+12*H/20)
  ctx.lineTo(x+18*W/20, y+12*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+11*H/20)
  ctx.lineTo(x+2*W/20, y+9*H/20)
  ctx.lineTo(x+16*W/20, y+9*H/20)
  ctx.lineTo(x+18*W/20, y+11*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/20, y+11*H/20)
  ctx.lineTo(x+12*W/20, y+9*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/20, y+11*H/20)
  ctx.lineTo(x+8*W/20, y+9*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+11*H/20)
  ctx.lineTo(x+4*W/20, y+9*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/20, y+7*H/20)
  ctx.lineTo(x+4*W/20, y+4*H/20)
  ctx.lineTo(x+6*W/20, y+2*H/20)
  ctx.lineTo(x+18*W/20, y+2*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/20, y+7*H/20)
  ctx.lineTo(x+18*W/20, y+7*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/20, y+5*H/20)
  ctx.lineTo(x+2*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/20, y+14*H/20)
  ctx.lineTo(x+2*W/20, y+11*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/20, y+4*H/20)
  ctx.lineTo(x+18*W/20, y+4*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/20, y+5*H/20)
  ctx.lineTo(x+5*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+5*H/20)
  ctx.lineTo(x+6*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/20, y+5*H/20)
  ctx.lineTo(x+8*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/20, y+5*H/20)
  ctx.lineTo(x+9*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/20, y+5*H/20)
  ctx.lineTo(x+11*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/20, y+5*H/20)
  ctx.lineTo(x+12*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/20, y+5*H/20)
  ctx.lineTo(x+14*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/20, y+5*H/20)
  ctx.lineTo(x+15*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+17*W/20, y+5*H/20)
  ctx.lineTo(x+17*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+18*W/20, y+5*H/20)
  ctx.lineTo(x+18*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+16*H/20)
  ctx.lineTo(x+14*W/20, y+16*H/20)
  ctx.lineTo(x+16*W/20, y+17*H/20)
  ctx.lineTo(x+18*W/20, y+17*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+17*H/20)
  ctx.lineTo(x+4*W/20, y+17*H/20)
  ctx.lineTo(x+5*W/20, y+18*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+17*H/20)
  ctx.lineTo(x+8*W/20, y+17*H/20)
  ctx.lineTo(x+9*W/20, y+18*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/20, y+17*H/20)
  ctx.lineTo(x+12*W/20, y+17*H/20)
  ctx.lineTo(x+13*W/20, y+18*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/20, y+17*H/20)
  ctx.lineTo(x+15*W/20, y+18*H/20)
  ctx.lineTo(x+17*W/20, y+18*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/20, y+16*H/20)
  ctx.lineTo(x+16*W/20, y+16*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/20, y+15*H/20)
  ctx.lineTo(x+16*W/20, y+15*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/20, y+4*H/20)
  ctx.lineTo(x+12*W/20, y+3*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/20, y+4*H/20)
  ctx.lineTo(x+8*W/20, y+3*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/20, y+4*H/20)
  ctx.lineTo(x+17*W/20, y+3*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/20, y+7*H/20)
  ctx.lineTo(x+7*W/20, y+4*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/20, y+4*H/20)
  ctx.lineTo(x+16*W/20, y+7*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/20, y+6*H/20)
  ctx.lineTo(x+10*W/20, y+8*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+13*H/20)
  ctx.lineTo(x+6*W/20, y+14*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/20, y+13*H/20)
  ctx.lineTo(x+12*W/20, y+14*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/20, y+13*H/20)
  ctx.lineTo(x+16*W/20, y+13*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/20, y+3*H/20)
  ctx.lineTo(x+3*W/20, y+3*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/20, y+16*H/20)
  ctx.lineTo(x+4*W/20, y+15*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/20, y+16*H/20)
  ctx.lineTo(x+10*W/20, y+15*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/20, y+2*H/20)
  ctx.lineTo(x+14*W/20, y+3*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+17*W/20, y+16*H/20)
  ctx.lineTo(x+17*W/20, y+16*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+17*W/20, y+15*H/20)
  ctx.lineTo(x+17*W/20, y+15*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  


function wetAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/20, y+18*H/20)
  ctx.lineTo(x+5*W/20, y+18*H/20)
  ctx.lineTo(x+5*W/20, y+17*H/20)
  ctx.lineTo(x+13*W/20, y+17*H/20)
  ctx.lineTo(x+13*W/20, y+18*H/20)
  ctx.lineTo(x+14*W/20, y+18*H/20)
  ctx.lineTo(x+14*W/20, y+17*H/20)
  ctx.lineTo(x+14*W/20, y+4*H/20)
  ctx.lineTo(x+11*W/20, y+4*H/20)
  cpx = x+11*W/20
  cpy = y+3*H/20
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/20, y+3*H/20)
  cpx = x+7*W/20
  cpy = y+3*H/20
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/20, y+4*H/20)
  ctx.lineTo(x+4*W/20, y+4*H/20)
  ctx.lineTo(x+4*W/20, y+18*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/20, y+4*H/20)
  ctx.lineTo(x+16*W/20, y+17*H/20)
  ctx.lineTo(x+16*W/20, y+18*H/20)
  ctx.lineTo(x+15*W/20, y+18*H/20)
  ctx.lineTo(x+15*W/20, y+17*H/20)
  ctx.lineTo(x+14*W/20, y+17*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+5*H/20)
  ctx.lineTo(x+12*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+6*H/20)
  ctx.lineTo(x+12*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+7*H/20)
  ctx.lineTo(x+12*W/20, y+7*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+14*H/20)
  ctx.lineTo(x+12*W/20, y+14*H/20)
  ctx.lineTo(x+9*W/20, y+9*H/20)
  ctx.lineTo(x+6*W/20, y+14*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+15*H/20)
  ctx.lineTo(x+10*W/20, y+15*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/20, y+15*H/20)
  ctx.lineTo(x+12*W/20, y+15*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/20, y+16*H/20)
  ctx.lineTo(x+12*W/20, y+16*H/20)
  ctx.lineTo(x+8*W/20, y+16*H/20)
  ctx.lineTo(x+6*W/20, y+16*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  

function chrsAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+12*H/24)
  ctx.lineTo(x+15*W/24, y+15*H/24)
  ctx.lineTo(x+20*W/24, y+11*H/24)
  ctx.lineTo(x+13*W/24, y+9*H/24)
  ctx.lineTo(x+8*W/24, y+12*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+12*H/24)
  ctx.lineTo(x+7*W/24, y+3*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+12*H/24)
  ctx.lineTo(x+9*W/24, y+22*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+15*H/24)
  ctx.lineTo(x+16*W/24, y+22*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+11*H/24)
  ctx.lineTo(x+21*W/24, y+22*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+9*H/24)
  ctx.lineTo(x+13*W/24, y+2*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+3*H/24)
  ctx.lineTo(x+13*W/24, y+2*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+12*H/24)
  ctx.lineTo(x+5*W/24, y+14*H/24)
  ctx.lineTo(x+7*W/24, y+12*H/24)
  ctx.lineTo(x+5*W/24, y+11*H/24)
  ctx.lineTo(x+3*W/24, y+12*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+12*H/24)
  ctx.lineTo(x+3*W/24, y+17*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+14*H/24)
  ctx.lineTo(x+5*W/24, y+17*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+12*H/24)
  ctx.lineTo(x+7*W/24, y+17*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+12*H/24)
  ctx.lineTo(x+2*W/24, y+8*H/24)
  ctx.lineTo(x+5*W/24, y+8*H/24)
  ctx.lineTo(x+5*W/24, y+11*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  

function goalAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+22*H/24)
  cpx = x+20*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/24, y+16*H/24)
  ctx.lineTo(x+14*W/24, y+22*H/24)
  ctx.lineTo(x+20*W/24, y+22*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+19*H/24)
  cpx = x+22*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/24, y+15*H/24)
  ctx.lineTo(x+18*W/24, y+19*H/24)
  ctx.lineTo(x+22*W/24, y+19*H/24)
  ctx.lineTo(x+20*W/24, y+22*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+22*H/24)
  ctx.lineTo(x+18*W/24, y+19*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+16*H/24)
  ctx.lineTo(x+18*W/24, y+15*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  
}

function heoAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+8*H/16)
  ctx.lineTo(x+5*W/16, y+3*H/16)
  ctx.lineTo(x+12*W/16, y+2*H/16)
  ctx.lineTo(x+14*W/16, y+8*H/16)
  ctx.lineTo(x+14*W/16, y+13*H/16)
  ctx.lineTo(x+2*W/16, y+14*H/16)
  ctx.lineTo(x+2*W/16, y+8*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+8*H/16)
  ctx.lineTo(x+14*W/16, y+8*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/16, y+8*H/16)
  ctx.lineTo(x+2*W/16, y+14*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+8*H/16)
  ctx.lineTo(x+3*W/16, y+13*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/16, y+8*H/16)
  ctx.lineTo(x+4*W/16, y+13*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+8*H/16)
  ctx.lineTo(x+5*W/16, y+12*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/16, y+8*H/16)
  ctx.lineTo(x+6*W/16, y+11*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/16, y+8*H/16)
  ctx.lineTo(x+7*W/16, y+12*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/16, y+8*H/16)
  ctx.lineTo(x+8*W/16, y+11*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/16, y+8*H/16)
  ctx.lineTo(x+9*W/16, y+10*H/16)
  ctx.lineTo(x+11*W/16, y+8*H/16)
  ctx.lineTo(x+10*W/16, y+10*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/16, y+8*H/16)
  ctx.lineTo(x+11*W/16, y+10*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+8*H/16)
  ctx.lineTo(x+12*W/16, y+9*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+3*H/16)
  ctx.lineTo(x+5*W/16, y+5*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/16, y+3*H/16)
  ctx.lineTo(x+6*W/16, y+5*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/16, y+3*H/16)
  ctx.lineTo(x+7*W/16, y+4*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/16, y+3*H/16)
  ctx.lineTo(x+8*W/16, y+5*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/16, y+3*H/16)
  ctx.lineTo(x+9*W/16, y+4*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+3*H/16)
  ctx.lineTo(x+10*W/16, y+4*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
   // ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/16, y+2*H/16)
  ctx.lineTo(x+11*W/16, y+3*H/16)
  ctx.lineTo(x+12*W/16, y+4*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    //ctx.stroke()
  }
}  

 
function hboneAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/20, y+18*H/20)
  ctx.lineTo(x+10*W/20, y+2*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+18*H/20)
  ctx.lineTo(x+6*W/20, y+2*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+18*H/20)
  ctx.lineTo(x+2*W/20, y+2*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/20, y+18*H/20)
  ctx.lineTo(x+14*W/20, y+2*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+18*W/20, y+18*H/20)
  ctx.lineTo(x+18*W/20, y+2*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+2*H/20)
  ctx.lineTo(x+4*W/20, y+4*H/20)
  ctx.lineTo(x+6*W/20, y+2*H/20)
  ctx.lineTo(x+8*W/20, y+4*H/20)
  ctx.lineTo(x+10*W/20, y+2*H/20)
  ctx.lineTo(x+12*W/20, y+4*H/20)
  ctx.lineTo(x+14*W/20, y+2*H/20)
  ctx.lineTo(x+16*W/20, y+4*H/20)
  ctx.lineTo(x+18*W/20, y+2*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+4*H/20)
  ctx.lineTo(x+4*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/20, y+6*H/20)
  ctx.lineTo(x+6*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+4*H/20)
  ctx.lineTo(x+8*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/20, y+4*H/20)
  ctx.lineTo(x+8*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/20, y+4*H/20)
  ctx.lineTo(x+12*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/20, y+6*H/20)
  ctx.lineTo(x+14*W/20, y+4*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/20, y+6*H/20)
  ctx.lineTo(x+14*W/20, y+4*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+18*W/20, y+4*H/20)
  ctx.lineTo(x+16*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+18*W/20, y+6*H/20)
  ctx.lineTo(x+16*W/20, y+8*H/20)
  ctx.lineTo(x+14*W/20, y+6*H/20)
  ctx.lineTo(x+12*W/20, y+8*H/20)
  ctx.lineTo(x+10*W/20, y+6*H/20)
  ctx.lineTo(x+8*W/20, y+8*H/20)
  ctx.lineTo(x+6*W/20, y+6*H/20)
  ctx.lineTo(x+4*W/20, y+8*H/20)
  ctx.lineTo(x+2*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+8*H/20)
  ctx.lineTo(x+4*W/20, y+10*H/20)
  ctx.lineTo(x+6*W/20, y+8*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+8*H/20)
  ctx.lineTo(x+8*W/20, y+10*H/20)
  ctx.lineTo(x+10*W/20, y+8*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/20, y+8*H/20)
  ctx.lineTo(x+12*W/20, y+10*H/20)
  ctx.lineTo(x+14*W/20, y+8*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/20, y+8*H/20)
  ctx.lineTo(x+16*W/20, y+10*H/20)
  ctx.lineTo(x+18*W/20, y+8*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+10*H/20)
  ctx.lineTo(x+4*W/20, y+12*H/20)
  ctx.lineTo(x+6*W/20, y+10*H/20)
  ctx.lineTo(x+8*W/20, y+12*H/20)
  ctx.lineTo(x+10*W/20, y+10*H/20)
  ctx.lineTo(x+12*W/20, y+12*H/20)
  ctx.lineTo(x+14*W/20, y+10*H/20)
  ctx.lineTo(x+16*W/20, y+12*H/20)
  ctx.lineTo(x+18*W/20, y+10*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+18*W/20, y+12*H/20)
  ctx.lineTo(x+16*W/20, y+14*H/20)
  ctx.lineTo(x+14*W/20, y+12*H/20)
  ctx.lineTo(x+12*W/20, y+14*H/20)
  ctx.lineTo(x+10*W/20, y+12*H/20)
  ctx.lineTo(x+8*W/20, y+14*H/20)
  ctx.lineTo(x+6*W/20, y+12*H/20)
  ctx.lineTo(x+4*W/20, y+14*H/20)
  ctx.lineTo(x+2*W/20, y+12*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/20, y+14*H/20)
  ctx.lineTo(x+4*W/20, y+16*H/20)
  ctx.lineTo(x+6*W/20, y+14*H/20)
  ctx.lineTo(x+8*W/20, y+16*H/20)
  ctx.lineTo(x+10*W/20, y+14*H/20)
  ctx.lineTo(x+12*W/20, y+16*H/20)
  ctx.lineTo(x+14*W/20, y+14*H/20)
  ctx.lineTo(x+16*W/20, y+16*H/20)
  ctx.lineTo(x+18*W/20, y+14*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+18*W/20, y+16*H/20)
  ctx.lineTo(x+16*W/20, y+18*H/20)
  ctx.lineTo(x+14*W/20, y+16*H/20)
  ctx.lineTo(x+12*W/20, y+18*H/20)
  ctx.lineTo(x+10*W/20, y+16*H/20)
  ctx.lineTo(x+8*W/20, y+18*H/20)
  ctx.lineTo(x+6*W/20, y+16*H/20)
  ctx.lineTo(x+4*W/20, y+18*H/20)
  ctx.lineTo(x+2*W/20, y+16*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  
function bflyAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/20, y+10*H/20)
  cpx = x+2*W/20
  cpy = y+10*H/20
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/20, y+18*H/20)
  cpx = x+9*W/20
  cpy = y+18*H/20
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/20, y+10*H/20)
  cpx = x+17*W/20
  cpy = y+10*H/20
  ctx.quadraticCurveTo(cpx, cpy, x+17*W/20, y+18*H/20)
  cpx = x+10*W/20
  cpy = y+18*H/20
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/20, y+6*H/20)
  cpx = x+10*W/20
  cpy = y+2*H/20
  ctx.quadraticCurveTo(cpx, cpy, x+18*W/20, y+2*H/20)
  cpx = x+18*W/20
  cpy = y+9*H/20
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/20, y+8*H/20)
  cpx = x+2*W/20
  cpy = y+9*H/20
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/20, y+2*H/20)
  cpx = x+9*W/20
  cpy = y+2*H/20
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/20, y+7*H/20)
  ctx.lineTo(x+14*W/20, y+9*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/20, y+6*H/20)
  ctx.lineTo(x+16*W/20, y+8*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/20, y+13*H/20)
  ctx.lineTo(x+16*W/20, y+12*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/20, y+12*H/20)
  ctx.lineTo(x+15*W/20, y+10*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/20, y+6*H/20)
  ctx.lineTo(x+17*W/20, y+7*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/20, y+7*H/20)
  ctx.lineTo(x+12*W/20, y+9*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/20, y+11*H/20)
  ctx.lineTo(x+10*W/20, y+12*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/20, y+5*H/20)
  ctx.lineTo(x+10*W/20, y+4*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/20, y+4*H/20)
  ctx.lineTo(x+11*W/20, y+2*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/20, y+3*H/20)
  ctx.lineTo(x+14*W/20, y+1*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/20, y+3*H/20)
  ctx.lineTo(x+17*W/20, y+1*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/20, y+16*H/20)
  ctx.lineTo(x+13*W/20, y+18*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/20, y+14*H/20)
  ctx.lineTo(x+11*W/20, y+15*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/20, y+11*H/20)
  ctx.lineTo(x+6*W/20, y+10*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+14*H/20)
  ctx.lineTo(x+8*W/20, y+16*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/20, y+13*H/20)
  ctx.lineTo(x+3*W/20, y+11*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+12*H/20)
  ctx.lineTo(x+4*W/20, y+11*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/20, y+13*H/20)
  ctx.lineTo(x+8*W/20, y+14*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/20, y+15*H/20)
  ctx.lineTo(x+7*W/20, y+16*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/20, y+3*H/20)
  ctx.lineTo(x+7*W/20, y+2*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/20, y+5*H/20)
  ctx.lineTo(x+2*W/20, y+7*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/20, y+17*H/20)
  ctx.lineTo(x+5*W/20, y+18*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/20, y+16*H/20)
  ctx.lineTo(x+1*W/20, y+15*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/20, y+14*H/20)
  ctx.lineTo(x+2*W/20, y+13*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/20, y+16*H/20)
  ctx.lineTo(x+18*W/20, y+15*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/20, y+15*H/20)
  ctx.lineTo(x+17*W/20, y+14*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+17*W/20, y+4*H/20)
  ctx.lineTo(x+18*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/20, y+3*H/20)
  ctx.lineTo(x+4*W/20, y+1*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/20, y+4*H/20)
  ctx.lineTo(x+8*W/20, y+3*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/20, y+7*H/20)
  ctx.lineTo(x+5*W/20, y+9*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/20, y+7*H/20)
  ctx.lineTo(x+4*W/20, y+8*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/20, y+4*H/20)
  ctx.lineTo(x+2*W/20, y+3*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/20, y+5*H/20)
  ctx.lineTo(x+2*W/20, y+5*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/20, y+16*H/20)
  ctx.lineTo(x+12*W/20, y+16*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/20, y+6*H/20)
  ctx.lineTo(x+10*W/20, y+6*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/20, y+13*H/20)
  ctx.lineTo(x+10*W/20, y+14*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/20, y+11*H/20)
  ctx.lineTo(x+13*W/20, y+10*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/20, y+7*H/20)
  ctx.lineTo(x+8*W/20, y+9*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/20, y+12*H/20)
  ctx.lineTo(x+9*W/20, y+11*H/20)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  

function scatter () {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"
  let i = 0, x, y
  let N = 1 + document.getElementById("number").value/100
  for (; i < N; i++) {
    x = Math.random() * canvas.width
    y = Math.random() * canvas.height
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x+pet(0.1), y+pet(0.1))
    ctx.stroke()
  }
  
}

function dottedAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "round"
  ctx.lineJoin = "meter"

  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+18*H/24)
  ctx.lineTo(x+5*W/24, y+18*H/24)
  cpx = x+5*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+14*H/24)
  cpx = x+7*W/24
  cpy = y+14*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+18*H/24)
  ctx.lineTo(x+9*W/24, y+18*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+15*H/24)
  cpx = x+4*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+13*H/24)
  cpx = x+8*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+15*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+17*H/24)
  ctx.lineTo(x+9*W/24, y+14*H/24)
  ctx.lineTo(x+10*W/24, y+13*H/24)
  ctx.lineTo(x+11*W/24, y+13*H/24)
  ctx.lineTo(x+11*W/24, y+14*H/24)
  ctx.lineTo(x+11*W/24, y+17*H/24)
  ctx.lineTo(x+14*W/24, y+17*H/24)
  ctx.lineTo(x+14*W/24, y+14*H/24)
  ctx.lineTo(x+13*W/24, y+13*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+15*H/24)
  ctx.lineTo(x+12*W/24, y+15*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+17*H/24)
  ctx.lineTo(x+3*W/24, y+17*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+16*H/24)
  ctx.lineTo(x+4*W/24, y+16*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+18*H/24)
  ctx.lineTo(x+11*W/24, y+18*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+18*H/24)
  ctx.lineTo(x+13*W/24, y+18*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+18*H/24)
  ctx.lineTo(x+14*W/24, y+18*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+19*H/24)
  ctx.lineTo(x+5*W/24, y+19*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+19*H/24)
  ctx.lineTo(x+6*W/24, y+19*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+19*H/24)
  ctx.lineTo(x+10*W/24, y+19*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+16*H/24)
  ctx.lineTo(x+13*W/24, y+16*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+15*H/24)
  ctx.lineTo(x+10*W/24, y+15*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+19*H/24)
  ctx.lineTo(x+14*W/24, y+14*H/24)
  ctx.lineTo(x+16*W/24, y+13*H/24)
  ctx.lineTo(x+18*W/24, y+19*H/24)
  ctx.lineTo(x+15*W/24, y+19*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+18*H/24)
  ctx.lineTo(x+18*W/24, y+13*H/24)
  ctx.lineTo(x+17*W/24, y+13*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+13*H/24)
  cpx = x+19*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+16*H/24)
  cpx = x+19*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+20*W/24, y+18*H/24)
  cpx = x+20*W/24
  cpy = y+19*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+19*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+13*H/24)
  ctx.lineTo(x+21*W/24, y+13*H/24)
  ctx.lineTo(x+21*W/24, y+17*H/24)
  ctx.lineTo(x+22*W/24, y+18*H/24)
  ctx.lineTo(x+21*W/24, y+19*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+15*H/24)
  ctx.lineTo(x+20*W/24, y+15*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+14*H/24)
  ctx.lineTo(x+16*W/24, y+16*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+17*H/24)
  ctx.lineTo(x+16*W/24, y+17*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+18*H/24)
  ctx.lineTo(x+17*W/24, y+18*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+13*H/24)
  ctx.lineTo(x+22*W/24, y+15*H/24)
  ctx.lineTo(x+22*W/24, y+15*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+16*H/24)
  ctx.lineTo(x+22*W/24, y+16*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+14*H/24)
  ctx.lineTo(x+3*W/24, y+14*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+13*H/24)
  ctx.lineTo(x+3*W/24, y+13*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+10*H/24)
  ctx.lineTo(x+6*W/24, y+10*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+8*H/24)
  ctx.lineTo(x+9*W/24, y+8*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+10*H/24)
  ctx.lineTo(x+8*W/24, y+10*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+10*H/24)
  ctx.lineTo(x+12*W/24, y+10*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+11*H/24)
  ctx.lineTo(x+10*W/24, y+11*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+12*H/24)
  ctx.lineTo(x+5*W/24, y+12*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+12*H/24)
  ctx.lineTo(x+14*W/24, y+12*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+12*H/24)
  ctx.lineTo(x+12*W/24, y+12*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+12*H/24)
  ctx.lineTo(x+17*W/24, y+12*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+12*H/24)
  ctx.lineTo(x+20*W/24, y+12*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+10*H/24)
  ctx.lineTo(x+19*W/24, y+10*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+8*H/24)
  ctx.lineTo(x+15*W/24, y+8*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+10*H/24)
  ctx.lineTo(x+15*W/24, y+10*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+8*H/24)
  ctx.lineTo(x+2*W/24, y+8*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+10*H/24)
  ctx.lineTo(x+4*W/24, y+10*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+7*H/24)
  ctx.lineTo(x+6*W/24, y+7*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+7*H/24)
  ctx.lineTo(x+12*W/24, y+7*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+7*H/24)
  ctx.lineTo(x+17*W/24, y+7*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+6*H/24)
  ctx.lineTo(x+20*W/24, y+6*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+9*H/24)
  ctx.lineTo(x+21*W/24, y+9*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+9*H/24)
  ctx.lineTo(x+17*W/24, y+9*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+5*H/24)
  ctx.lineTo(x+15*W/24, y+5*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+6*H/24)
  ctx.lineTo(x+12*W/24, y+6*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+4*H/24)
  ctx.lineTo(x+10*W/24, y+4*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+18*W/24, y+5*H/24)
  ctx.lineTo(x+18*W/24, y+5*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+4*H/24)
  ctx.lineTo(x+21*W/24, y+4*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+4*H/24)
  ctx.lineTo(x+4*W/24, y+4*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+6*H/24)
  ctx.lineTo(x+4*W/24, y+6*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+5*H/24)
  ctx.lineTo(x+7*W/24, y+5*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+3*H/24)
  ctx.lineTo(x+3*W/24, y+3*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+3*H/24)
  ctx.lineTo(x+6*W/24, y+3*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+2*H/24)
  ctx.lineTo(x+5*W/24, y+2*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+3*H/24)
  ctx.lineTo(x+12*W/24, y+3*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+2*H/24)
  ctx.lineTo(x+14*W/24, y+2*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+2*H/24)
  ctx.lineTo(x+17*W/24, y+2*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+2*H/24)
  ctx.lineTo(x+20*W/24, y+2*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+3*H/24)
  ctx.lineTo(x+19*W/24, y+3*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+7*H/24)
  ctx.lineTo(x+21*W/24, y+7*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+2*H/24)
  ctx.lineTo(x+9*W/24, y+2*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+4*H/24)
  ctx.lineTo(x+8*W/24, y+4*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+11*H/24)
  ctx.lineTo(x+3*W/24, y+11*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+8*H/24)
  ctx.lineTo(x+5*W/24, y+8*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+9*H/24)
  ctx.lineTo(x+13*W/24, y+9*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+20*H/24)
  ctx.lineTo(x+3*W/24, y+20*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/24, y+20*H/24)
  ctx.lineTo(x+12*W/24, y+20*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+20*H/24)
  ctx.lineTo(x+17*W/24, y+20*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+20*H/24)
  ctx.lineTo(x+22*W/24, y+20*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+21*H/24)
  ctx.lineTo(x+7*W/24, y+21*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+22*H/24)
  ctx.lineTo(x+3*W/24, y+22*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/24, y+22*H/24)
  ctx.lineTo(x+10*W/24, y+22*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/24, y+21*H/24)
  ctx.lineTo(x+15*W/24, y+21*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+19*W/24, y+22*H/24)
  ctx.lineTo(x+19*W/24, y+22*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+22*H/24)
  ctx.lineTo(x+17*W/24, y+22*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+20*W/24, y+20*H/24)
  ctx.lineTo(x+20*W/24, y+20*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+20*H/24)
  ctx.lineTo(x+9*W/24, y+20*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+21*H/24)
  ctx.lineTo(x+5*W/24, y+21*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+22*H/24)
  ctx.lineTo(x+6*W/24, y+22*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+21*H/24)
  ctx.lineTo(x+13*W/24, y+21*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+11*H/24)
  ctx.lineTo(x+22*W/24, y+11*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/24, y+6*H/24)
  ctx.lineTo(x+9*W/24, y+6*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+4*H/24)
  ctx.lineTo(x+13*W/24, y+4*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/24, y+5*H/24)
  ctx.lineTo(x+2*W/24, y+5*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/24, y+19*H/24)
  ctx.lineTo(x+14*W/24, y+19*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+16*H/24)
  ctx.lineTo(x+6*W/24, y+16*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+16*H/24)
  ctx.lineTo(x+8*W/24, y+16*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+15*H/24)
  ctx.lineTo(x+3*W/24, y+15*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+17*H/24)
  ctx.lineTo(x+22*W/24, y+17*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+17*W/24, y+14*H/24)
  ctx.lineTo(x+17*W/24, y+14*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+17*H/24)
  ctx.lineTo(x+6*W/24, y+17*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+16*W/24, y+3*H/24)
  ctx.lineTo(x+16*W/24, y+3*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/24, y+19*H/24)
  ctx.lineTo(x+11*W/24, y+19*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/24, y+19*H/24)
  ctx.lineTo(x+13*W/24, y+19*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+13*H/24)
  ctx.lineTo(x+8*W/24, y+13*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/24, y+11*H/24)
  ctx.lineTo(x+7*W/24, y+11*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  

function streetAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/12, y+5*H/12)
  ctx.lineTo(x+8*W/12, y+3*H/12)
  ctx.lineTo(x+9*W/12, y+5*H/12)
  ctx.lineTo(x+9*W/12, y+6*H/12)
  ctx.lineTo(x+7*W/12, y+6*H/12)
  ctx.lineTo(x+7*W/12, y+5*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+6*H/12)
  ctx.lineTo(x+4*W/12, y+4*H/12)
  ctx.lineTo(x+5*W/12, y+3*H/12)
  ctx.lineTo(x+6*W/12, y+4*H/12)
  ctx.lineTo(x+6*W/12, y+6*H/12)
  ctx.lineTo(x+4*W/12, y+6*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/12, y+3*H/12)
  ctx.lineTo(x+8*W/12, y+3*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/12, y+5*H/12)
  ctx.lineTo(x+6*W/12, y+4*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+6*H/12)
  ctx.lineTo(x+7*W/12, y+6*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/12, y+5*H/12)
  ctx.lineTo(x+9*W/12, y+3*H/12)
  ctx.lineTo(x+11*W/12, y+4*H/12)
  ctx.lineTo(x+11*W/12, y+6*H/12)
  ctx.lineTo(x+9*W/12, y+6*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+4*H/12)
  ctx.lineTo(x+3*W/12, y+3*H/12)
  ctx.lineTo(x+1*W/12, y+4*H/12)
  ctx.lineTo(x+1*W/12, y+6*H/12)
  ctx.lineTo(x+4*W/12, y+6*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/12, y+4*H/12)
  ctx.lineTo(x+3*W/12, y+4*H/12)
  ctx.lineTo(x+3*W/12, y+3*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/12, y+4*H/12)
  ctx.lineTo(x+11*W/12, y+4*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/12, y+7*H/12)
  ctx.lineTo(x+3*W/12, y+9*H/12)
  ctx.lineTo(x+3*W/12, y+10*H/12)
  ctx.lineTo(x+1*W/12, y+10*H/12)
  ctx.lineTo(x+1*W/12, y+7*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/12, y+9*H/12)
  ctx.lineTo(x+3*W/12, y+7*H/12)
  ctx.lineTo(x+5*W/12, y+7*H/12)
  ctx.lineTo(x+6*W/12, y+8*H/12)
  ctx.lineTo(x+6*W/12, y+10*H/12)
  ctx.lineTo(x+3*W/12, y+10*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+10*H/12)
  ctx.lineTo(x+7*W/12, y+7*H/12)
  ctx.lineTo(x+8*W/12, y+8*H/12)
  ctx.lineTo(x+8*W/12, y+9*H/12)
  ctx.lineTo(x+8*W/12, y+10*H/12)
  ctx.lineTo(x+6*W/12, y+10*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/12, y+7*H/12)
  ctx.lineTo(x+4*W/12, y+8*H/12)
  ctx.lineTo(x+6*W/12, y+8*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/12, y+7*H/12)
  ctx.lineTo(x+3*W/12, y+8*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/12, y+8*H/12)
  ctx.lineTo(x+10*W/12, y+7*H/12)
  ctx.lineTo(x+11*W/12, y+8*H/12)
  ctx.lineTo(x+11*W/12, y+10*H/12)
  ctx.lineTo(x+8*W/12, y+10*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/12, y+10*H/12)
  ctx.lineTo(x+9*W/12, y+8*H/12)
  ctx.lineTo(x+10*W/12, y+7*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+10*H/12)
  ctx.lineTo(x+4*W/12, y+9*H/12)
  ctx.lineTo(x+5*W/12, y+9*H/12)
  ctx.lineTo(x+5*W/12, y+10*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/12, y+6*H/12)
  ctx.lineTo(x+2*W/12, y+5*H/12)
  ctx.lineTo(x+3*W/12, y+5*H/12)
  ctx.lineTo(x+3*W/12, y+6*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+8*H/12)
  ctx.lineTo(x+7*W/12, y+7*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/12, y+3*H/12)
  ctx.lineTo(x+3*W/12, y+2*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/12, y+3*H/12)
  ctx.lineTo(x+10*W/12, y+2*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/12, y+3*H/12)
  ctx.lineTo(x+6*W/12, y+2*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/12, y+3*H/12)
  ctx.lineTo(x+8*W/12, y+2*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  



function trashAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+21*W/24, y+6*H/24)
  ctx.lineTo(x+21*W/24, y+2*H/24)
  ctx.lineTo(x+14*W/24, y+2*H/24)
  ctx.lineTo(x+8*W/24, y+3*H/24)
  ctx.lineTo(x+3*W/24, y+8*H/24)
  cpx = x+3*W/24
  cpy = y+9*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+9*H/24)
  ctx.lineTo(x+9*W/24, y+5*H/24)
  ctx.lineTo(x+13*W/24, y+5*H/24)
  cpx = x+14*W/24
  cpy = y+6*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/24, y+8*H/24)
  ctx.lineTo(x+7*W/24, y+11*H/24)
  cpx = x+7*W/24
  cpy = y+12*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+12*H/24)
  ctx.lineTo(x+18*W/24, y+8*H/24)
  cpx = x+19*W/24
  cpy = y+7*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+19*W/24, y+6*H/24)
  ctx.lineTo(x+21*W/24, y+6*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/24, y+9*H/24)
  cpx = x+4*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+10*H/24)
  ctx.lineTo(x+9*W/24, y+5*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+9*H/24)
  cpx = x+6*W/24
  cpy = y+10*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/24, y+10*H/24)
  cpx = x+8*W/24
  cpy = y+8*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+6*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+15*H/24)
  cpx = x+4*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+18*H/24)
  cpx = x+4*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+21*H/24)
  cpx = x+6*W/24
  cpy = y+21*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+18*H/24)
  cpx = x+6*W/24
  cpy = y+15*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/24, y+15*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
   // ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/24, y+21*H/24)
  cpx = x+12*W/24
  cpy = y+20*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+20*H/24)
  cpx = x+13*W/24
  cpy = y+18*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+16*H/24)
  ctx.lineTo(x+5*W/24, y+15*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
   // ctx.stroke()
  }
  // heart
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/24, y+20*H/24)
  cpx = x+4*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/24, y+15*H/24)
  cpx = x+4*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/24, y+13*H/24)
  cpx = x+8*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+15*H/24)
  cpx = x+8*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/24, y+13*H/24)
  cpx = x+12*W/24
  cpy = y+13*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/24, y+15*H/24)
  cpx = x+12*W/24
  cpy = y+16*H/24
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/24, y+20*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    //ctx.stroke()
  }
  // cube
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+14*H/24)
  ctx.lineTo(x+7*W/24, y+13*H/24)
  ctx.lineTo(x+10*W/24, y+14*H/24)
  ctx.lineTo(x+10*W/24, y+19*H/24)
  ctx.lineTo(x+6*W/24, y+20*H/24)
  ctx.lineTo(x+3*W/24, y+18*H/24)
  ctx.lineTo(x+3*W/24, y+14*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/24, y+14*H/24)
  ctx.lineTo(x+6*W/24, y+15*H/24)
  ctx.lineTo(x+10*W/24, y+14*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  if (PATTERN)
    fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/24, y+20*H/24)
  ctx.lineTo(x+6*W/24, y+15*H/24)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  

function alterAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+11*H/12)
  cpx = x+1*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/12, y+7*H/12)
  cpx = x+6*W/12
  cpy = y+7*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+10*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+9*H/12)
  cpx = x+11*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+5*H/12)
  cpx = x+6*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+8*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+7*H/12)
  cpx = x+1*W/12
  cpy = y+7*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/12, y+3*H/12)
  cpx = x+6*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+6*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+5*H/12)
  cpx = x+11*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+2*H/12)
  cpx = x+6*W/12
  cpy = y+2*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+4*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+3*H/12)
  cpx = x+3*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+1*H/12)
  cpx = x+6*W/12
  cpy = y+1*H/12
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
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+2*H/12)
  cpx = x+8*W/12
  cpy = y+2*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+1*H/12)
  cpx = x+6*W/12
  cpy = y+1*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+2*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+11*H/12)
  ctx.lineTo(x+6*W/12, y+1*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  

function hangerAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/12, y+10*H/12)
  cpx = x+12*W/12
  cpy = y+10*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+8*H/12)
  ctx.lineTo(x+6*W/12, y+5*H/12)
  ctx.lineTo(x+2*W/12, y+8*H/12)
  cpx = x+0*W/12
  cpy = y+10*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/12, y+10*H/12)
  ctx.lineTo(x+10*W/12, y+10*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+5*H/12)
  ctx.lineTo(x+6*W/12, y+4*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+4*H/12)
  cpx = x+6*W/12
  cpy = y+2*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+2*H/12)
  cpx = x+8*W/12
  cpy = y+2*H/12
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
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  


function inoutAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/12, y+1*H/12)
  cpx = x+1*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/12, y+3*H/12)
  cpx = x+3*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+1*H/12)
  cpx = x+3*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+3*H/12)
  cpx = x+5*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+1*H/12)
  cpx = x+5*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+3*H/12)
  cpx = x+7*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+1*H/12)
  cpx = x+7*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+3*H/12)
  cpx = x+9*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+1*H/12)
  cpx = x+9*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+3*H/12)
  cpx = x+11*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+1*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/12, y+1*H/12)
  cpx = x+1*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+7*H/12)
  cpx = x+11*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+1*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/12, y+1*H/12)
  cpx = x+3*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+7*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+5*W/12, y+1*H/12)
  cpx = x+5*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+7*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/12, y+1*H/12)
  cpx = x+9*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+7*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/12, y+1*H/12)
  cpx = x+7*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+7*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+10*H/12)
  ctx.lineTo(x+6*W/12, y+7*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+10*H/12)
  cpx = x+6*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+11*H/12)
  cpx = x+4*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+10*H/12)
  ctx.lineTo(x+4*W/12, y+9*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  

function atomAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+11*H/12)
  cpx = x+9*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+6*H/12)
  cpx = x+9*W/12
  cpy = y+1*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+1*H/12)
  cpx = x+3*W/12
  cpy = y+1*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+6*H/12)
  cpx = x+3*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+11*H/12)
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
  ctx.moveTo(x+1*W/12, y+6*H/12)
  cpx = x+1*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+3*H/12)
  cpx = x+11*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+6*H/12)
  cpx = x+11*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+9*H/12)
  cpx = x+1*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/12, y+6*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
   // ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+6*H/12)
  cpx = x+4*W/12
  cpy = y+4*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+4*H/12)
  cpx = x+8*W/12
  cpy = y+4*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+6*H/12)
  cpx = x+8*W/12
  cpy = y+8*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+8*H/12)
  cpx = x+4*W/12
  cpy = y+8*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+6*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    //ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
}  

function fingersAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/16, y+15*H/16)
  cpx = x+1*W/16
  cpy = y+12*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/16, y+12*H/16)
  cpx = x+5*W/16
  cpy = y+12*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/16, y+15*H/16)
  ctx.lineTo(x+5*W/16, y+11*H/16)
  cpx = x+5*W/16
  cpy = y+8*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/16, y+8*H/16)
  cpx = x+9*W/16
  cpy = y+8*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/16, y+11*H/16)
  ctx.lineTo(x+9*W/16, y+12*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/16, y+12*H/16)
  ctx.lineTo(x+9*W/16, y+7*H/16)
  cpx = x+9*W/16
  cpy = y+4*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/16, y+4*H/16)
  cpx = x+13*W/16
  cpy = y+4*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/16, y+7*H/16)
  ctx.lineTo(x+13*W/16, y+15*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/16, y+1*H/16)
  cpx = x+15*W/16
  cpy = y+4*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/16, y+4*H/16)
  cpx = x+11*W/16
  cpy = y+4*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/16, y+1*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+1*H/16)
  cpx = x+11*W/16
  cpy = y+4*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/16, y+4*H/16)
  cpx = x+7*W/16
  cpy = y+4*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/16, y+1*H/16)
  ctx.lineTo(x+7*W/16, y+6*H/16)
  cpx = x+7*W/16
  cpy = y+8*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/16, y+8*H/16)
  cpx = x+3*W/16
  cpy = y+8*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/16, y+6*H/16)
  ctx.lineTo(x+3*W/16, y+1*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/16, y+10*H/16)
  cpx = x+3*W/16
  cpy = y+10*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/16, y+7*H/16)
  ctx.lineTo(x+3*W/16, y+6*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/16, y+5*H/16)
  cpx = x+13*W/16
  cpy = y+5*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/16, y+7*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/16, y+15*H/16)
  ctx.lineTo(x+9*W/16, y+12*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  

function wrapAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/16, y+15*H/16)
  ctx.lineTo(x+1*W/16, y+12*H/16)
  cpx = x+1*W/16
  cpy = y+10*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/16, y+7*H/16)
  cpx = x+5*W/16
  cpy = y+10*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/16, y+12*H/16)
  ctx.lineTo(x+5*W/16, y+15*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/16, y+11*H/16)
  cpx = x+2*W/16
  cpy = y+11*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/16, y+10*H/16)
  cpx = x+2*W/16
  cpy = y+9*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/16, y+9*H/16)
  cpx = x+4*W/16
  cpy = y+9*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/16, y+10*H/16)
  cpx = x+4*W/16
  cpy = y+11*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/16, y+11*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+2*W/16, y+10*H/16)
  ctx.lineTo(x+2*W/16, y+15*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/16, y+15*H/16)
  ctx.lineTo(x+3*W/16, y+11*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+14*H/16)
  ctx.lineTo(x+4*W/16, y+10*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/16, y+14*H/16)
  ctx.lineTo(x+4*W/16, y+15*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+15*H/16)
  ctx.lineTo(x+6*W/16, y+1*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/16, y+15*H/16)
  ctx.lineTo(x+7*W/16, y+1*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/16, y+15*H/16)
  ctx.lineTo(x+8*W/16, y+1*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/16, y+15*H/16)
  ctx.lineTo(x+9*W/16, y+1*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+10*W/16, y+15*H/16)
  ctx.lineTo(x+10*W/16, y+1*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+1*H/16)
  ctx.lineTo(x+11*W/16, y+4*H/16)
  cpx = x+11*W/16
  cpy = y+6*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/16, y+7*H/16)
  cpx = x+15*W/16
  cpy = y+7*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+15*W/16, y+11*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+15*W/16, y+1*H/16)
  ctx.lineTo(x+15*W/16, y+4*H/16)
  cpx = x+15*W/16
  cpy = y+6*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/16, y+7*H/16)
  cpx = x+11*W/16
  cpy = y+7*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/16, y+11*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+11*H/16)
  ctx.lineTo(x+13*W/16, y+1*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/16, y+11*H/16)
  cpx = x+12*W/16
  cpy = y+8*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/16, y+7*H/16)
  cpx = x+14*W/16
  cpy = y+6*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/16, y+4*H/16)
  ctx.lineTo(x+14*W/16, y+1*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+14*W/16, y+11*H/16)
  cpx = x+14*W/16
  cpy = y+8*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/16, y+7*H/16)
  cpx = x+12*W/16
  cpy = y+6*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/16, y+4*H/16)
  ctx.lineTo(x+12*W/16, y+1*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/16, y+11*H/16)
  ctx.lineTo(x+15*W/16, y+11*H/16)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  

function spillAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+11*H/12)
  cpx = x+4*W/12
  cpy = y+10*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+10*H/12)
  cpx = x+5*W/12
  cpy = y+8*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+8*H/12)
  cpx = x+11*W/12
  cpy = y+8*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+11*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+8*H/12)
  ctx.lineTo(x+8*W/12, y+4*H/12)
  ctx.lineTo(x+1*W/12, y+1*H/12)
  ctx.lineTo(x+4*W/12, y+8*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/12, y+11*H/12)
  ctx.lineTo(x+11*W/12, y+11*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  

function heartsideAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/14, y+13*H/14)
  cpx = x+4*W/14
  cpy = y+13*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/14, y+9*H/14)
  cpx = x+3*W/14
  cpy = y+1*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/14, y+1*H/14)
  cpx = x+13*W/14
  cpy = y+1*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/14, y+6*H/14)
  cpx = x+13*W/14
  cpy = y+9*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/14, y+9*H/14)
  cpx = x+13*W/14
  cpy = y+9*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/14, y+13*H/14)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  

function halfAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/14, y+13*H/14)
  cpx = x+1*W/14
  cpy = y+6*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/14, y+1*H/14)
  cpx = x+7*W/14
  cpy = y+6*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/14, y+13*H/14)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/14, y+6*H/14)
  cpx = x+3*W/14
  cpy = y+6*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/14, y+5*H/14)
  cpx = x+3*W/14
  cpy = y+4*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/14, y+4*H/14)
  cpx = x+5*W/14
  cpy = y+4*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/14, y+5*H/14)
  cpx = x+5*W/14
  cpy = y+6*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/14, y+6*H/14)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+8*W/14, y+13*H/14)
  cpx = x+8*W/14
  cpy = y+6*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/14, y+4*H/14)
  cpx = x+13*W/14
  cpy = y+6*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/14, y+13*H/14)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/14, y+1*H/14)
  cpx = x+8*W/14
  cpy = y+4*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/14, y+4*H/14)
  cpx = x+12*W/14
  cpy = y+4*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/14, y+1*H/14)
  ctx.lineTo(x+7*W/14, y+1*H/14)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
}  

function adropAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = randomPick(colors)
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/14, y+7*H/14)
  cpx = x+5*W/14
  cpy = y+9*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/14, y+8*H/14)
  ctx.lineTo(x+13*W/14, y+6*H/14)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/14, y+7*H/14)
  ctx.lineTo(x+4*W/14, y+6*H/14)
  ctx.lineTo(x+13*W/14, y+2*H/14)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/14, y+6*H/14)
  cpx = x+5*W/14
  cpy = y+7*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/14, y+7*H/14)
  cpx = x+7*W/14
  cpy = y+7*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/14, y+6*H/14)
  cpx = x+7*W/14
  cpy = y+5*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/14, y+5*H/14)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/14, y+9*H/14)
  cpx = x+6*W/14
  cpy = y+8*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/14, y+9*H/14)
  cpx = x+6*W/14
  cpy = y+10*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/14, y+9*H/14)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/14, y+9*H/14)
  ctx.lineTo(x+4*W/14, y+11*H/14)
  cpx = x+6*W/14
  cpy = y+12*H/14
  //ctx.quadraticCurveTo(cpx, cpy, x+6*W/14, y+11*H/14)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/14, y+11*H/14)
  cpx = x+6*W/14
  cpy = y+12*H/14
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/14, y+11*H/14)
  ctx.lineTo(x+8*W/14, y+9*H/14)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
  /*  ctx.strokeStyle = randomPick(colors)*/
    ctx.stroke()
  }
} 

function tulipAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/12, y+9*H/12)
  ctx.lineTo(x+2*W/12, y+9*H/12)
  cpx = x+2*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+11*H/12)
  ctx.lineTo(x+6*W/12, y+11*H/12)
  cpx = x+6*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+9*H/12)
  ctx.lineTo(x+7*W/12, y+9*H/12)
  cpx = x+7*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+11*H/12)
  ctx.lineTo(x+11*W/12, y+11*H/12)
  cpx = x+11*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+9*H/12)
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
  ctx.moveTo(x+1*W/12, y+8*H/12)
  ctx.lineTo(x+2*W/12, y+8*H/12)
  cpx = x+2*W/12
  cpy = y+1*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+1*H/12)
  cpx = x+7*W/12
  cpy = y+8*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+8*H/12)
  cpx = x+7*W/12
  cpy = y+8*H/12
  if (FILL) {
   // ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    //ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+3*W/12, y+8*H/12)
  ctx.lineTo(x+7*W/12, y+8*H/12)
  if (FILL) {
   // ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    //ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/12, y+5*H/12)
  cpx = x+10*W/12
  cpy = y+5*H/12
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    //ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+7*W/12, y+8*H/12)
  cpx = x+7*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+5*H/12)
  ctx.lineTo(x+11*W/12, y+5*H/12)
  cpx = x+11*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+9*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    //ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
}  

function hang3At (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "meter"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/10, y+1*H/10)
  ctx.lineTo(x+2*W/10, y+1*H/10)
  ctx.lineTo(x+2*W/10, y+3*H/10)
  ctx.lineTo(x+1*W/10, y+3*H/10)
  ctx.lineTo(x+1*W/10, y+5*H/10)
  ctx.lineTo(x+2*W/10, y+5*H/10)
  ctx.lineTo(x+2*W/10, y+7*H/10)
  ctx.lineTo(x+2*W/10, y+5*H/10)
  ctx.lineTo(x+3*W/10, y+5*H/10)
  ctx.lineTo(x+3*W/10, y+3*H/10)
  ctx.lineTo(x+2*W/10, y+3*H/10)
  ctx.lineTo(x+2*W/10, y+1*H/10)
  ctx.lineTo(x+5*W/10, y+1*H/10)
  ctx.lineTo(x+5*W/10, y+6*H/10)
  ctx.lineTo(x+4*W/10, y+6*H/10)
  ctx.lineTo(x+4*W/10, y+7*H/10)
  ctx.lineTo(x+5*W/10, y+7*H/10)
  ctx.lineTo(x+5*W/10, y+6*H/10)
  ctx.lineTo(x+5*W/10, y+1*H/10)
  ctx.lineTo(x+8*W/10, y+1*H/10)
  ctx.lineTo(x+8*W/10, y+5*H/10)
  ctx.lineTo(x+6*W/10, y+5*H/10)
  ctx.lineTo(x+6*W/10, y+7*H/10)
  ctx.lineTo(x+8*W/10, y+7*H/10)
  ctx.lineTo(x+8*W/10, y+8*H/10)
  ctx.lineTo(x+8*W/10, y+1*H/10)
  ctx.lineTo(x+9*W/10, y+1*H/10)
  ctx.lineTo(x+9*W/10, y+5*H/10)
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
  ctx.moveTo(x+6*W/10, y+1*H/10)
  ctx.lineTo(x+6*W/10, y+3*H/10)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    //ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+4*W/10, y+1*H/10)
  ctx.lineTo(x+4*W/10, y+2*H/10)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    //ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
}  

function hang2At (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "miter"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/10, y+1*H/10)
  ctx.lineTo(x+5*W/10, y+1*H/10)
  ctx.lineTo(x+5*W/10, y+8*H/10)
  ctx.lineTo(x+2*W/10, y+8*H/10)
  ctx.lineTo(x+5*W/10, y+3*H/10)
  ctx.lineTo(x+5*W/10, y+1*H/10)
  ctx.lineTo(x+7*W/10, y+1*H/10)
  ctx.lineTo(x+7*W/10, y+4*H/10)
  ctx.lineTo(x+8*W/10, y+8*H/10)
  ctx.lineTo(x+6*W/10, y+8*H/10)
  ctx.lineTo(x+7*W/10, y+4*H/10)
  ctx.lineTo(x+7*W/10, y+1*H/10)
  ctx.lineTo(x+9*W/10, y+1*H/10)
  ctx.lineTo(x+9*W/10, y+9*H/10)
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
  ctx.moveTo(x+3*W/10, y+1*H/10)
  ctx.lineTo(x+3*W/10, y+3*H/10)
  ctx.lineTo(x+4*W/10, y+8*H/10)
  ctx.lineTo(x+1*W/10, y+9*H/10)
  ctx.lineTo(x+3*W/10, y+3*H/10)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    //ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
}  

function hangAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "miter"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+9*W/10, y+1*H/10)
  ctx.lineTo(x+8*W/10, y+1*H/10)
  ctx.lineTo(x+8*W/10, y+8*H/10)
  ctx.lineTo(x+6*W/10, y+8*H/10)
  ctx.lineTo(x+8*W/10, y+1*H/10)
  ctx.lineTo(x+4*W/10, y+1*H/10)
  ctx.lineTo(x+5*W/10, y+8*H/10)
  ctx.lineTo(x+4*W/10, y+8*H/10)
  ctx.lineTo(x+4*W/10, y+1*H/10)
  ctx.lineTo(x+2*W/10, y+1*H/10)
  ctx.lineTo(x+2*W/10, y+8*H/10)
  ctx.lineTo(x+4*W/10, y+8*H/10)
  ctx.lineTo(x+2*W/10, y+1*H/10)
  ctx.lineTo(x+1*W/10, y+1*H/10)
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

function twotriAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+0*W/10, y+0*H/10)
  ctx.lineTo(x+0*W/10, y+10*H/10)
  ctx.lineTo(x+10*W/10, y+10*H/10)
  ctx.lineTo(x+10*W/10, y+0*H/10)
  ctx.lineTo(x+0*W/10, y+0*H/10)
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
    //ctx.stroke()
  }
  STROKE = true
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/10, y+9*H/10)
  ctx.lineTo(x+4*W/10, y+6*H/10)
  ctx.lineTo(x+9*W/10, y+9*H/10)
  ctx.lineTo(x+1*W/10, y+9*H/10)
  ctx.lineTo(x+1*W/10, y+4*H/10)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
   // ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/10, y+4*H/10)
  ctx.lineTo(x+9*W/10, y+4*H/10)
  ctx.lineTo(x+7*W/10, y+1*H/10)
  ctx.lineTo(x+1*W/10, y+4*H/10)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
  if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()
  if (STROKE) {
    //ctx.strokeStyle = randomPick(colors)
    ctx.stroke()
  }
}  

function ccAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+0*W/12, y+0*H/12)
  ctx.lineTo(x+12*W/12, y+0*H/12)
  ctx.lineTo(x+12*W/12, y+12*H/12)
  ctx.lineTo(x+0*W/12, y+12*H/12)
  ctx.lineTo(x+0*W/12, y+0*H/12)
  if (FILL) {
    ctx.fillStyle = randomPick(colors)
    ctx.fill()
  }
  ctx.clip()
 // if (PATTERN)
    ctx.drawImage(oc, 0, 0, canvas.width, canvas.height)
  ctx.restore()

  
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+0*W/12, y+12*H/12)
  ctx.lineTo(x+8*W/12, y+8*H/12)
  cpx = x+9*W/12
  cpy = y+7*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+6*H/12)
  ctx.lineTo(x+0*W/12, y+5*H/12)
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
  ctx.moveTo(x+0*W/12, y+4*H/12)
  ctx.lineTo(x+10*W/12, y+5*H/12)
  cpx = x+12*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/12, y+7*H/12)
  cpx = x+11*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+10*H/12)
  ctx.lineTo(x+8*W/12, y+12*H/12)
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
  ctx.moveTo(x+8*W/12, y+8*H/12)
  cpx = x+10*W/12
  cpy = y+7*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+6*H/12)
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
  ctx.moveTo(x+8*W/12, y+8*H/12)
  cpx = x+10*W/12
  cpy = y+6*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+6*H/12)
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
  ctx.moveTo(x+10*W/12, y+12*H/12)
  cpx = x+11*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/12, y+7*H/12)
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
  ctx.moveTo(x+0*W/12, y+10*H/12)
  cpx = x+5*W/12
  cpy = y+10*H/12
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
  ctx.moveTo(x+0*W/12, y+4*H/12)
  cpx = x+9*W/12
  cpy = y+4*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/12, y+3*H/12)
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
  ctx.moveTo(x+0*W/12, y+5*H/12)
  cpx = x+9*W/12
  cpy = y+4*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+5*H/12)
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
  ctx.moveTo(x+0*W/12, y+2*H/12)
  cpx = x+5*W/12
  cpy = y+4*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/12, y+3*H/12)
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
  cpx = x+6*W/12
  cpy = y+1*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/12, y+1*H/12)
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
  ctx.moveTo(x+0*W/12, y+1*H/12)
  cpx = x+4*W/12
  cpy = y+0*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+1*H/12)
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
  ctx.moveTo(x+6*W/12, y+12*H/12)
  cpx = x+12*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/12, y+7*H/12)
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
  ctx.moveTo(x+0*W/12, y+11*H/12)
  cpx = x+9*W/12
  cpy = y+8*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+6*H/12)
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
  ctx.moveTo(x+12*W/12, y+3*H/12)
  cpx = x+9*W/12
  cpy = y+0*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+3*H/12)
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

function ddAt (x,y,W,color) {
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
  
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+0*W/12, y+0*H/12)
  ctx.lineTo(x+12*W/12, y+0*H/12)
  ctx.lineTo(x+12*W/12, y+12*H/12)
  ctx.lineTo(x+0*W/12, y+12*H/12)
  ctx.lineTo(x+0*W/12, y+0*H/12)
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
  ragged(ctx, x+11*W/12, y+1*H/12, 11*W/12, 6*W/12)
  cpx = x+8*W/12
  cpy = y+1*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+4*H/12)
  cpx = x+8*W/12
  cpy = y+6*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+6*H/12)
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
  cpx = x+8*W/12
  cpy = y+4*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+9*H/12)
  cpx = x+8*W/12
  cpy = y+12*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+12*H/12)
  ragged(ctx, x+6*W/12, y+4*H/12, 6*W/12, 12*W/12)
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
  ctx.moveTo(x+5*W/12, y+0*H/12)
  ragged(ctx, x+5*W/12, y+7*H/12, 5*W/12, 0*W/12)
  cpx = x+3*W/12
  cpy = y+6*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+3*H/12)
  cpx = x+3*W/12
  cpy = y+1*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+0*H/12)
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
  cpx = x+5*W/12
  cpy = y+7*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+9*H/12)
  cpx = x+5*W/12
  cpy = y+12*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/12, y+12*H/12)
  ragged(ctx, x+1*W/12, y+7*H/12, 1*W/12, 12*W/12)
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
  ctx.moveTo(x+2*W/12, y+2*H/12)
  ragged(ctx, x+2*W/12, y+6*H/12, 2*W/12, 2*W/12)
  cpx = x+0*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+0*W/12, y+4*H/12)
  cpx = x+0*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/12, y+2*H/12)
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
  ctx.moveTo(x+9*W/12, y+7*H/12)
  cpx = x+11*W/12
  cpy = y+9*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+11*W/12, y+10*H/12)
  cpx = x+11*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+12*H/12)
  ragged(ctx, x+9*W/12, y+7*H/12, 9*W/12, 12*W/12)
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
  ctx.moveTo(x+8*W/12, y+0*H/12)
  ragged(ctx, x+8*W/12, y+2*H/12, 8*W/12, 0*W/12)
  cpx = x+6*W/12
  cpy = y+2*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+1*H/12)
  cpx = x+6*W/12
  cpy = y+0*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+0*H/12)
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

function skull2At (x,y,W,color) {
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

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/12, y+8*H/12)
  cpx = x+6*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+11*H/12)
  cpx = x+0*W/12
  cpy = y+11*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+0*W/12, y+6*H/12)
  cpx = x+1*W/12
  cpy = y+0*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+0*H/12)
  cpx = x+12*W/12
  cpy = y+1*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+6*H/12)
  ragged(ctx, x+12*W/12, y+12*H/12, 10*W/12, 6*W/12)
  ragged(ctx, x+7*W/12, y+12*H/12, 12*W/12, 12*W/12)
  ragged(ctx, x+6*W/12, y+8*H/12, 7*W/12, 12*W/12)
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
  ctx.moveTo(x+7*W/12, y+9*H/12)
  ragged(ctx, x+8*W/12, y+11*H/12, 7*W/12, 9*W/12)
  ragged(ctx, x+11*W/12, y+11*H/12, 8*W/12, 11*W/12)
  ragged(ctx, x+10*W/12, y+9*H/12, 11*W/12, 11*W/12)
  ragged(ctx, x+7*W/12, y+9*H/12, 10*W/12, 9*W/12)
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
  ctx.moveTo(x+8*W/12, y+9*H/12)
  ragged(ctx, x+9*W/12, y+11*H/12, 8*W/12, 9*W/12)
  ragged(ctx, x+8*W/12, y+11*H/12, 9*W/12, 11*W/12)
  ragged(ctx, x+7*W/12, y+9*H/12, 8*W/12, 11*W/12)
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
  ragged(ctx, x+10*W/12, y+11*H/12, 9*W/12, 9*W/12)
  ragged(ctx, x+9*W/12, y+11*H/12, 10*W/12, 11*W/12)
  ragged(ctx, x+8*W/12, y+9*H/12, 9*W/12, 11*W/12)
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
  ctx.moveTo(x+8*W/12, y+5*H/12)
  cpx = x+8*W/12
  cpy = y+4*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+4*H/12)
  cpx = x+10*W/12
  cpy = y+4*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/12, y+5*H/12)
  cpx = x+10*W/12
  cpy = y+6*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+6*H/12)
  cpx = x+8*W/12
  cpy = y+6*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+5*H/12)
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
  ctx.moveTo(x+5*W/12, y+6*H/12)
  cpx = x+5*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+5*H/12)
  cpx = x+7*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+6*H/12)
  cpx = x+7*W/12
  cpy = y+7*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+7*H/12)
  cpx = x+5*W/12
  cpy = y+7*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+6*H/12)
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
  ctx.moveTo(x+8*W/12, y+6*H/12)
  ragged(ctx, x+8*W/12, y+8*H/12, 8*W/12, 6*W/12)
  ragged(ctx, x+9*W/12, y+8*H/12, 8*W/12, 8*W/12)
  ragged(ctx, x+8*W/12, y+6*H/12, 9*W/12, 8*W/12)
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

function cone2At (x,y,W,color) {
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
  // all
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+0*W/16, y+0*H/16)
  ctx.lineTo(x+16*W/16, y+0*H/16)
  ctx.lineTo(x+16*W/16, y+16*H/16)
  ctx.lineTo(x+0*W/16, y+16*H/16)
  ctx.lineTo(x+0*W/16, y+0*H/16)
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
  // cone
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+0*W/16, y+16*H/16)
  ctx.lineTo(x+12*W/16, y+10*H/16)
  ctx.lineTo(x+6*W/16, y+4*H/16)
  ctx.lineTo(x+0*W/16, y+16*H/16)
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
  //icecream
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+6*W/16, y+4*H/16)
  cpx = x+5*W/16
  cpy = y+4*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/16, y+3*H/16)
  cpx = x+5*W/16
  cpy = y+2*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/16, y+2*H/16)
  cpx = x+11*W/16
  cpy = y+0*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/16, y+2*H/16)
  cpx = x+16*W/16
  cpy = y+5*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/16, y+9*H/16)
  cpx = x+14*W/16
  cpy = y+11*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/16, y+11*H/16)
  cpx = x+12*W/16
  cpy = y+11*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/16, y+10*H/16)
  ctx.lineTo(x+6*W/16, y+4*H/16)
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
  //fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+13*W/16, y+12*H/16)
  cpx = x+12*W/16
  cpy = y+13*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/16, y+14*H/16)
  cpx = x+14*W/16
  cpy = y+13*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/16, y+12*H/16)
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
  //fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+12*W/16, y+16*H/16)
  cpx = x+12*W/16
  cpy = y+15*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/16, y+15*H/16)
  cpx = x+14*W/16
  cpy = y+15*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+14*W/16, y+16*H/16)
  ctx.lineTo(x+12*W/16, y+16*H/16)
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

function coneAt (x,y,W,color) {
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
  
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+0*W/16, y+0*H/16)
  ctx.lineTo(x+0*W/16, y+16*H/16)
  ctx.lineTo(x+16*W/16, y+16*H/16)
  ctx.lineTo(x+16*W/16, y+0*H/16)
  ctx.lineTo(x+0*W/16, y+0*H/16)
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
  ctx.moveTo(x+11*W/16, y+6*H/16)
  cpx = x+11*W/16
  cpy = y+7*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/16, y+7*H/16)
  cpx = x+13*W/16
  cpy = y+7*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+13*W/16, y+6*H/16)
  cpx = x+13*W/16
  cpy = y+5*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/16, y+5*H/16)
  cpx = x+12*W/16
  cpy = y+3*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+10*W/16, y+3*H/16)
  cpx = x+10*W/16
  cpy = y+0*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/16, y+0*H/16)
  cpx = x+4*W/16
  cpy = y+0*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/16, y+3*H/16)
  cpx = x+3*W/16
  cpy = y+5*H/16
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/16, y+6*H/16)
  ctx.lineTo(x+11*W/16, y+6*H/16)
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
  ctx.moveTo(x+11*W/16, y+6*H/16)
  ctx.lineTo(x+8*W/16, y+16*H/16)
  ctx.lineTo(x+4*W/16, y+6*H/16)
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

function duck2At (x,y,W,color) {
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

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+0*W/12, y+0*H/12)
  ctx.lineTo(x+0*W/12, y+12*H/12)
  ctx.lineTo(x+12*W/12, y+12*H/12)
  ctx.lineTo(x+12*W/12, y+0*H/12)
  ctx.lineTo(x+0*W/12, y+0*H/12)
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
  cpx = x+0*W/12
  cpy = y+10*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+0*W/12, y+5*H/12)
  cpx = x+0*W/12
  cpy = y+0*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+0*H/12)
  cpx = x+9*W/12
  cpy = y+0*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/12, y+1*H/12)
  ctx.lineTo(x+11*W/12, y+2*H/12)
  ctx.lineTo(x+9*W/12, y+2*H/12)
  cpx = x+9*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+3*H/12)
  cpx = x+6*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+2*H/12)
  cpx = x+4*W/12
  cpy = y+2*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/12, y+3*H/12)
  cpx = x+4*W/12
  cpy = y+4*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+4*H/12)
  cpx = x+5*W/12
  cpy = y+3*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+3*H/12)
  ctx.lineTo(x+12*W/12, y+3*H/12)
  cpx = x+12*W/12
  cpy = y+6*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/12, y+8*H/12)
  cpx = x+12*W/12
  cpy = y+8*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/12, y+5*H/12)
  ctx.lineTo(x+12*W/12, y+9*H/12)
  cpx = x+12*W/12
  cpy = y+10*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+10*H/12)
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
  ctx.moveTo(x+7*W/12, y+8*H/12)
  cpx = x+7*W/12
  cpy = y+12*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+12*H/12)
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
  ctx.moveTo(x+5*W/12, y+10*H/12)
  cpx = x+5*W/12
  cpy = y+12*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/12, y+12*H/12)
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

function fhAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = false, FILL = true, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+11*W/14, y+14*H/14)
  ragged(ctx, x+11*W/14, y+5*H/14, 11*W/14, 14*W/14)
  ragged(ctx, x+6*W/14, y+5*H/14, 11*W/14, 5*W/14)
  ragged(ctx, x+6*W/14, y+14*H/14, 6*W/14, 5*W/14)
  ragged(ctx, x+11*W/14, y+14*H/14, 6*W/14, 14*W/14)
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
  ctx.moveTo(x+2*W/14, y+14*H/14)
  ragged(ctx, x+2*W/14, y+5*H/14, 2*W/14, 14*W/14)
  ragged(ctx, x+4*W/14, y+0*H/14, 2*W/14, 5*W/14)
  ragged(ctx, x+6*W/14, y+5*H/14, 4*W/14, 0*W/14)
  ragged(ctx, x+6*W/14, y+14*H/14, 6*W/14, 5*W/14)
  ragged(ctx, x+2*W/14, y+14*H/14, 6*W/14, 14*W/14)
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
  ctx.moveTo(x+4*W/14, y+0*H/14)
  ragged(ctx, x+11*W/14, y+0*H/14, 4*W/14, 0*W/14)
  ragged(ctx, x+11*W/14, y+5*H/14, 11*W/14, 0*W/14)
  ragged(ctx, x+6*W/14, y+5*H/14, 11*W/14, 5*W/14)
  ragged(ctx, x+4*W/14, y+0*H/14, 6*W/14, 5*W/14)
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
  ctx.moveTo(x+3*W/14, y+14*H/14)
  ragged(ctx, x+3*W/14, y+13*H/14, 3*W/14, 14*W/14)
  ragged(ctx, x+4*W/14, y+13*H/14, 3*W/14, 13*W/14)
  ragged(ctx, x+4*W/14, y+14*H/14, 4*W/14, 13*W/14)
  ragged(ctx, x+3*W/14, y+14*H/14, 4*W/14, 14*W/14)
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
  ctx.moveTo(x+7*W/14, y+6*H/14)
  ragged(ctx, x+7*W/14, y+7*H/14, 7*W/14, 6*W/14)
  ragged(ctx, x+8*W/14, y+7*H/14, 7*W/14, 7*W/14)
  ragged(ctx, x+8*W/14, y+6*H/14, 8*W/14, 7*W/14)
  ragged(ctx, x+7*W/14, y+6*H/14, 8*W/14, 6*W/14)
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
  ctx.moveTo(x+9*W/14, y+6*H/14)
  ragged(ctx, x+9*W/14, y+7*H/14, 9*W/14, 6*W/14)
  ragged(ctx, x+10*W/14, y+7*H/14, 9*W/14, 7*W/14)
  ragged(ctx, x+10*W/14, y+6*H/14, 10*W/14, 7*W/14)
  ragged(ctx, x+9*W/14, y+6*H/14, 10*W/14, 6*W/14)
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
  ctx.moveTo(x+11*W/14, y+0*H/14)
  ragged(ctx, x+14*W/14, y+0*H/14, 11*W/14, 0*W/14)
  ragged(ctx, x+14*W/14, y+14*H/14, 14*W/14, 0*W/14)
  ragged(ctx, x+12*W/14, y+14*H/14, 14*W/14, 14*W/14)
  ragged(ctx, x+11*W/14, y+14*H/14, 12*W/14, 14*W/14)
  ragged(ctx, x+11*W/14, y+0*H/14, 11*W/14, 14*W/14)
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
  ctx.moveTo(x+0*W/14, y+0*H/14)
  ragged(ctx, x+4*W/14, y+0*H/14, 0*W/14, 0*W/14)
  ragged(ctx, x+2*W/14, y+5*H/14, 4*W/14, 0*W/14)
  ragged(ctx, x+2*W/14, y+14*H/14, 2*W/14, 5*W/14)
  ragged(ctx, x+0*W/14, y+14*H/14, 2*W/14, 14*W/14)
  ragged(ctx, x+0*W/14, y+0*H/14, 0*W/14, 14*W/14)
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
function snekAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = false
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = color
  ctx.lineCap = "round"
  ctx.lineJoin = "bevel"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+1*W/10, y+8*H/10)
  cpx = x+1*W/10
  cpy = y+10*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/10, y+10*H/10)
  cpx = x+3*W/10
  cpy = y+10*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/10, y+8*H/10)
  ragged(ctx, x+3*W/10, y+5*H/10, 3*W/10, 8*W/10)
  cpx = x+3*W/10
  cpy = y+4*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/10, y+4*H/10)
  cpx = x+5*W/10
  cpy = y+4*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/10, y+5*H/10)
  ragged(ctx, x+5*W/10, y+7*H/10, 5*W/10, 5*W/10)
  cpx = x+5*W/10
  cpy = y+8*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/10, y+8*H/10)
  cpx = x+7*W/10
  cpy = y+8*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/10, y+7*H/10)
  ragged(ctx, x+7*W/10, y+3*H/10, 7*W/10, 7*W/10)
  cpx = x+7*W/10
  cpy = y+2*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/10, y+2*H/10)
  cpx = x+9*W/10
  cpy = y+2*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/10, y+3*H/10)
  ragged(ctx, x+9*W/10, y+6*H/10, 9*W/10, 3*W/10)
  ragged(ctx, x+9*W/10, y+8*H/10, 9*W/10, 6*W/10)
  cpx = x+9*W/10
  cpy = y+9*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+8*W/10, y+9*H/10)
  ragged(ctx, x+5*W/10, y+9*H/10, 8*W/10, 9*W/10)
  cpx = x+4*W/10
  cpy = y+9*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+4*W/10, y+8*H/10)
  ragged(ctx, x+4*W/10, y+6*H/10, 4*W/10, 8*W/10)
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
  ctx.moveTo(x+2*W/10, y+9*H/10)
  cpx = x+2*W/10
  cpy = y+7*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/10, y+7*H/10)
  cpx = x+0*W/10
  cpy = y+7*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+0*W/10, y+6*H/10)
  ragged(ctx, x+0*W/10, y+2*H/10, 0*W/10, 6*W/10)
  ragged(ctx, x+0*W/10, y+0*H/10, 0*W/10, 2*W/10)
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
  ctx.moveTo(x+0*W/10, y+2*H/10)
  cpx = x+0*W/10
  cpy = y+1*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/10, y+0*H/10)
  cpx = x+2*W/10
  cpy = y+1*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+2*W/10, y+2*H/10)
  ragged(ctx, x+2*W/10, y+4*H/10, 2*W/10, 2*W/10)
  ragged(ctx, x+2*W/10, y+5*H/10, 2*W/10, 4*W/10)
  cpx = x+2*W/10
  cpy = y+6*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+1*W/10, y+6*H/10)
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
  ctx.moveTo(x+4*W/10, y+3*H/10)
  cpx = x+4*W/10
  cpy = y+2*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/10, y+2*H/10)
  cpx = x+6*W/10
  cpy = y+2*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/10, y+3*H/10)
  ragged(ctx, x+6*W/10, y+6*H/10, 6*W/10, 3*W/10)
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
  ctx.moveTo(x+10*W/10, y+2*H/10)
  cpx = x+10*W/10
  cpy = y+1*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+9*W/10, y+1*H/10)
  ragged(ctx, x+4*W/10, y+1*H/10, 9*W/10, 1*W/10)
  cpx = x+3*W/10
  cpy = y+1*H/10
  ctx.quadraticCurveTo(cpx, cpy, x+3*W/10, y+2*H/10)
  ragged(ctx, x+3*W/10, y+4*H/10, 3*W/10, 2*W/10)
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
  ctx.moveTo(x+1*W/10, y+6*H/10)
  ragged(ctx, x+1*W/10, y+3*H/10, 1*W/10, 6*W/10)
  ragged(ctx, x+1*W/10, y+2*H/10, 1*W/10, 3*W/10)
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
  ctx.moveTo(x+5*W/10, y+9*H/10)
  ragged(ctx, x+4*W/10, y+10*H/10, 5*W/10, 9*W/10)
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
  ctx.moveTo(x+6*W/10, y+9*H/10)
  ragged(ctx, x+6*W/10, y+10*H/10, 6*W/10, 9*W/10)
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
  ctx.moveTo(x+7*W/10, y+9*H/10)
  ragged(ctx, x+7*W/10, y+10*H/10, 7*W/10, 9*W/10)
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
  ctx.moveTo(x+8*W/10, y+9*H/10)
  ragged(ctx, x+9*W/10, y+10*H/10, 8*W/10, 9*W/10)
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
  ctx.moveTo(x+9*W/10, y+8*H/10)
  ragged(ctx, x+10*W/10, y+8*H/10, 9*W/10, 8*W/10)
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
  ctx.moveTo(x+9*W/10, y+7*H/10)
  ragged(ctx, x+10*W/10, y+6*H/10, 9*W/10, 7*W/10)
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
  ctx.moveTo(x+9*W/10, y+5*H/10)
  ragged(ctx, x+10*W/10, y+3*H/10, 9*W/10, 5*W/10)
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
  ctx.moveTo(x+9*W/10, y+1*H/10)
  ragged(ctx, x+9*W/10, y+0*H/10, 9*W/10, 1*W/10)
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
  ctx.moveTo(x+8*W/10, y+1*H/10)
  ragged(ctx, x+7*W/10, y+0*H/10, 8*W/10, 1*W/10)
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
  ctx.moveTo(x+6*W/10, y+1*H/10)
  ragged(ctx, x+4*W/10, y+0*H/10, 6*W/10, 1*W/10)
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
  ctx.moveTo(x+8*W/10, y+8*H/10)
  ragged(ctx, x+8*W/10, y+7*H/10, 8*W/10, 8*W/10)
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
  ctx.moveTo(x+8*W/10, y+6*H/10)
  ragged(ctx, x+8*W/10, y+5*H/10, 8*W/10, 6*W/10)
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
  ctx.moveTo(x+8*W/10, y+4*H/10)
  ragged(ctx, x+8*W/10, y+3*H/10, 8*W/10, 4*W/10)
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

function eclipAt (x,y,W,color) {
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
  ctx.shadowBlur = 2 + Math.random() * 2
  ctx.shadowColor = "#333333"
  ctx.shadowOffsetX = 3+(Math.random()-0.5) * 2
  ctx.shadowOffsetY = 5+(Math.random()-0.5) * 2
  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+0*W/12, y+0*H/12)
  ragged(ctx, x+0*W/12, y+12*H/12, 0*W/12, 0*W/12)
  ragged(ctx, x+12*W/12, y+12*H/12, 0*W/12, 12*W/12)
  ragged(ctx, x+12*W/12, y+0*H/12, 12*W/12, 12*W/12)
  ragged(ctx, x+0*W/12, y+0*H/12, 12*W/12, 0*W/12)
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
  cpx = x+8*W/12
  cpy = y+8*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+12*W/12, y+8*H/12)
  ragged(ctx, x+12*W/12, y+12*H/12, 12*W/12, 8*W/12)
  ragged(ctx, x+8*W/12, y+12*H/12, 12*W/12, 12*W/12)
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
  ragged(ctx, x+5*W/12, y+0*H/12, 10*W/12, 10*W/12)
  ragged(ctx, x+0*W/12, y+5*H/12, 5*W/12, 0*W/12)
  ragged(ctx, x+10*W/12, y+10*H/12, 0*W/12, 5*W/12)
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
  ctx.moveTo(x+0*W/12, y+6*H/12)
  cpx = x+6*W/12
  cpy = y+6*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+0*H/12)
  ragged(ctx, x+0*W/12, y+0*H/12, 6*W/12, 0*W/12)
  ragged(ctx, x+0*W/12, y+6*H/12, 0*W/12, 0*W/12)
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
  ctx.moveTo(x+5*W/12, y+6*H/12)
  cpx = x+5*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+5*H/12)
  cpx = x+7*W/12
  cpy = y+5*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+7*W/12, y+6*H/12)
  cpx = x+7*W/12
  cpy = y+7*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+6*W/12, y+7*H/12)
  cpx = x+5*W/12
  cpy = y+7*H/12
  ctx.quadraticCurveTo(cpx, cpy, x+5*W/12, y+6*H/12)
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


function boxes2At (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let oc = document.createElement('canvas')
  let occtx = oc.getContext("2d")
  oc.height = canvas.height, oc.width = canvas.width
  let colors = shuffle(getCurrentPalette(true,13))
  let H = W, cpx, cpy, points = []
  let STROKE = true, FILL = false, PATTERN = true
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/5
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"

  fillOC(oc, occtx)
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x+0*W/12, y+0*H/12)
  ragged(ctx, x+0*W/12, y+3*H/12, 0*W/12, 0*W/12)
  ragged(ctx, x+3*W/12, y+3*H/12, 0*W/12, 3*W/12)
  ragged(ctx, x+3*W/12, y+0*H/12, 3*W/12, 3*W/12)
  ragged(ctx, x+0*W/12, y+0*H/12, 3*W/12, 0*W/12)
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
  ctx.moveTo(x+3*W/12, y+3*H/12)
  ragged(ctx, x+6*W/12, y+3*H/12, 3*W/12, 3*W/12)
  ragged(ctx, x+6*W/12, y+0*H/12, 6*W/12, 3*W/12)
  ragged(ctx, x+3*W/12, y+0*H/12, 6*W/12, 0*W/12)
  ragged(ctx, x+3*W/12, y+3*H/12, 3*W/12, 0*W/12)
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
  ctx.moveTo(x+6*W/12, y+0*H/12)
  ragged(ctx, x+6*W/12, y+3*H/12, 6*W/12, 0*W/12)
  ragged(ctx, x+9*W/12, y+3*H/12, 6*W/12, 3*W/12)
  ragged(ctx, x+9*W/12, y+0*H/12, 9*W/12, 3*W/12)
  ragged(ctx, x+6*W/12, y+0*H/12, 9*W/12, 0*W/12)
  ragged(ctx, x+6*W/12, y+2*H/12, 6*W/12, 0*W/12)
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
  ragged(ctx, x+12*W/12, y+3*H/12, 9*W/12, 3*W/12)
  ragged(ctx, x+12*W/12, y+0*H/12, 12*W/12, 3*W/12)
  ragged(ctx, x+9*W/12, y+0*H/12, 12*W/12, 0*W/12)
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
  ctx.moveTo(x+0*W/12, y+3*H/12)
  ragged(ctx, x+6*W/12, y+3*H/12, 0*W/12, 3*W/12)
  ragged(ctx, x+6*W/12, y+10*H/12, 6*W/12, 3*W/12)
  ragged(ctx, x+0*W/12, y+10*H/12, 6*W/12, 10*W/12)
  ragged(ctx, x+0*W/12, y+3*H/12, 0*W/12, 10*W/12)
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
  ctx.moveTo(x+0*W/12, y+10*H/12)
  ragged(ctx, x+4*W/12, y+10*H/12, 0*W/12, 10*W/12)
  ragged(ctx, x+4*W/12, y+12*H/12, 4*W/12, 10*W/12)
  ragged(ctx, x+0*W/12, y+12*H/12, 4*W/12, 12*W/12)
  ragged(ctx, x+0*W/12, y+10*H/12, 0*W/12, 12*W/12)
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
  ctx.moveTo(x+4*W/12, y+10*H/12)
  ragged(ctx, x+4*W/12, y+12*H/12, 4*W/12, 10*W/12)
  ragged(ctx, x+8*W/12, y+12*H/12, 4*W/12, 12*W/12)
  ragged(ctx, x+8*W/12, y+10*H/12, 8*W/12, 12*W/12)
  ragged(ctx, x+4*W/12, y+10*H/12, 8*W/12, 10*W/12)
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
  ctx.moveTo(x+8*W/12, y+10*H/12)
  ragged(ctx, x+8*W/12, y+12*H/12, 8*W/12, 10*W/12)
  ragged(ctx, x+12*W/12, y+12*H/12, 8*W/12, 12*W/12)
  ragged(ctx, x+12*W/12, y+10*H/12, 12*W/12, 12*W/12)
  ragged(ctx, x+8*W/12, y+10*H/12, 12*W/12, 10*W/12)
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
  ragged(ctx, x+12*W/12, y+3*H/12, 6*W/12, 3*W/12)
  ragged(ctx, x+12*W/12, y+10*H/12, 12*W/12, 3*W/12)
  ragged(ctx, x+6*W/12, y+10*H/12, 12*W/12, 10*W/12)
  ragged(ctx, x+6*W/12, y+4*H/12, 6*W/12, 10*W/12)
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
      
  