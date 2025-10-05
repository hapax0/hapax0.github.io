let NUMPIECES = 16

function piece (i,x,y) {
  this.cols = Math.sqrt(NUMPIECES)
  this.i = i

  this.row = Math.floor(i/this.cols)
  this.LN = (i%this.cols === 0)? (i+this.cols-1): (i-1)
  this.RN = ((i+1) % this.cols) + this.row*this.cols 
  this.TN = (i-this.cols < 0)? (i+this.cols^(this.cols-1)): (i-this.cols) // 12????
  this.BN = (i < (this.cols^(this.cols-1)))? (i+this.cols): (i%this.cols)
  /*
  this.row = Math.floor(i / 4)
  this.LN = (i%4 === 0)? (i+3): (i-1)
  this.RN = ((i+1) % 4) + this.row*4 
  this.TN = (i-4 < 0)? (i+12): (i-4)
  this.BN = (i < 12)? (i+4): (i%4)
  */

  this.L = edgeComplement(this.LN, "R")
  this.R = edgeComplement(this.RN, "L")
  this.T = edgeComplement(this.TN, "B")
  this.B = edgeComplement(this.BN, "T")
  this.x = x
  this.y = y
}

let pieces = []
let edgetypes = ["in", "out", "flat"]

function edgeComplement (e, side) {
  //console.log(pieces[e])
  if (pieces[e] === undefined) {
    return randomPick(["in", "out"])//, "in", "out", "flat"])
  }
  if (pieces[e][side] === "in")
    return "out"
  if (pieces[e][side] === "out")
    return "in"
  else
    return "flat"
}

function board () {
  pieces = Array.apply(undefined, {length: NUMPIECES})
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  let cols = Math.sqrt(NUMPIECES)
  console.log(cols)
  let W = canvas.width, H = W, wp = W/(cols+2)
  let i = 0, x = 24, y = 24, ct = 0
  for (; i < NUMPIECES; i++) {
    p = new piece(i, x, y)
    pieces[i] = p
    if (i > 0 && i % cols === (cols-1)) {
      x = 24
      y += H/cols
    } else  
      x += W/cols
    ct++
  }
  //console.log(pieces)
}

function drawPieces () {
  NUMPIECES = randomPick([9,16,25])
  board()
 // pieces = shuffle(pieces)
  setPalette("dos")
  let colors = getCurrentPalette()
  let cols = Math.sqrt(NUMPIECES)
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = colors[0]//"#ffffdd"
  ctx.fillRect(0,0,canvas.width,canvas.height)
  ctx.lineWidth = 8
  ctx.strokeStyle = colors[1]//"#ae4230"
  ctx.fillStyle = colors[1]//ctx.strokeStyle
  let W = canvas.width, H = W, wp = W/(cols+1)
  let offset = (NUMPIECES > 9)? 10 : 24;
  if (NUMPIECES === 25)
    offset = 3
  let i = 0, x = offset, y = offset, ct = 0, catsize = wp/1.5
  for (; i < NUMPIECES; i++) {
    
    if(pieces[i].L === "in")
      out_catAt(x+2, y+(wp*1.15)/2 - catsize/2, catsize, 0)
    else
    if(pieces[i].L === "out")
      in_catAt(x+2, y+(wp*1.15)/2 - catsize/2, catsize, 180)

    if(pieces[i].R === "out")
      in_catAt(x+(wp*1.15)-catsize, y+(wp*1.15)/2 - catsize/2, catsize, 0)
    else
    if(pieces[i].R === "in")
      out_catAt(x+(wp*1.15)-catsize, y+(wp*1.15)/2 - catsize/2, catsize, 180)

    if (pieces[i].T === "in")
      out_catAt(x+(wp*1.15)/2 - catsize/2, y+4, catsize, 90)
    else
    if (pieces[i].T === "out")
      in_catAt(x+(wp*1.15)/2 - catsize/2, y+4, catsize, 90+180)

    if (pieces[i].B === "in")
      out_catAt(x+(wp*1.15)/2 - catsize/2, y+wp/2-4, catsize, 90+180)
    else
    if (pieces[i].B === "out")
      in_catAt(x+(wp*1.15)/2 - catsize/2, y+wp/2-4, catsize, 90)
  ctx.strokeRect(x,y,wp*1.15,wp*1.15)
    if (i > 0 && i % cols === (cols-1)) {
      x = offset
      y += H/cols
    } else  
      x += W/cols
  }
}

function in_catAt (x,y,W,A) { // tail
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, d = 0, angle = A
  
  //1
  ctx.beginPath()
  p = rotatePoint(x+24*W/24+pet(d), y+6*H/24+pet(d) ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+20*W/24+pet(d)
  cpy = y+7*H/24+pet(d)
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+16*W/24+pet(d), y+10*H/24+pet(d),cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+14*W/24+pet(d)
  cpy = y+8*H/24+pet(d)
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+11*W/24+pet(d), y+6*H/24+pet(d),cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+13*W/24+pet(d)
  cpy = y+12*H/24+pet(d)
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+11*W/24+pet(d), y+18*H/24+pet(d),cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+14*W/24+pet(d)
  cpy = y+16*H/24+pet(d)
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+16*W/24+pet(d), y+14*H/24+pet(d),cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+20*W/24+pet(d)
  cpy = y+17*H/24+pet(d)
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+24*W/24+pet(d), y+18*H/24+pet(d),cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()
}

function in_catAtog (x,y,W,A) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, d = 0, angle = A
  ctx.beginPath()
  p = rotatePoint(x+24*W/24+pet(d), y+10*H/24+pet(d) ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+16*W/24+pet(d), y+10*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+16*W/24+pet(d), y+5*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+15*W/24+pet(d), y+2*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+14*W/24+pet(d), y+2*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+15*W/24+pet(d), y+5*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+15*W/24+pet(d), y+22*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+16*W/24+pet(d), y+22*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+16*W/24+pet(d), y+15*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+18*W/24+pet(d), y+15*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+18*W/24+pet(d), y+22*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+19*W/24+pet(d), y+22*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+19*W/24+pet(d), y+15*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+24*W/24+pet(d), y+15*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.fill()
}

function out_catAt (x,y,W,A) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, d = 0, angle = A
//1
 //1
  ctx.beginPath()
  p = rotatePoint(x+0*W/24+pet(d), y+18*H/24+pet(d) ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  cpx = x+10*W/24+pet(d)
  cpy = y+17*H/24+pet(d)
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+16*W/24+pet(d), y+12*H/24+pet(d),cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+9*W/24+pet(d)
  cpy = y+12*H/24+pet(d)
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+9*W/24+pet(d), y+12*H/24+pet(d),cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+9*W/24+pet(d)
  cpy = y+13*H/24+pet(d)
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+8*W/24+pet(d), y+13*H/24+pet(d),cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+7*W/24+pet(d)
  cpy = y+13*H/24+pet(d)
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+7*W/24+pet(d), y+12*H/24+pet(d),cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+7*W/24+pet(d)
  cpy = y+11*H/24+pet(d)
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+8*W/24+pet(d), y+11*H/24+pet(d),cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+9*W/24+pet(d)
  cpy = y+11*H/24+pet(d)
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+9*W/24+pet(d), y+12*H/24+pet(d),cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+16*W/24+pet(d)
  cpy = y+12*H/24+pet(d)
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+16*W/24+pet(d), y+12*H/24+pet(d),cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  cpx = x+10*W/24+pet(d)
  cpy = y+7*H/24+pet(d)
  cp = rotatePoint(cpx,cpy,cx,cy,angle)
  p = rotatePoint(x+0*W/24+pet(d), y+6*H/24+pet(d),cx,cy,angle)
  ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1])
  ctx.fill()
}

function out_catAtog (x,y,W,A) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let p = [], cp = [], lastp = []
  let cx = x+W/2, cy = y+H/2, d = 0, angle = A
  ctx.beginPath()
  p = rotatePoint(x+6*W/24+pet(d), y+15*H/24+pet(d) ,cx,cy,angle)
  ctx.moveTo(p[0],p[1])
  p = rotatePoint(x+6*W/24+pet(d), y+22*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+7*W/24+pet(d), y+22*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+7*W/24+pet(d), y+15*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+9*W/24+pet(d), y+15*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+9*W/24+pet(d), y+22*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+10*W/24+pet(d), y+22*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+10*W/24+pet(d), y+10*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+9*W/24+pet(d), y+8*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+10*W/24+pet(d), y+7*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+10*W/24+pet(d), y+4*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+9*W/24+pet(d), y+5*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+7*W/24+pet(d), y+5*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+6*W/24+pet(d), y+4*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+6*W/24+pet(d), y+7*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+7*W/24+pet(d), y+8*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+6*W/24+pet(d), y+10*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+0*W/24+pet(d), y+10*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  p = rotatePoint(x+0*W/24+pet(d), y+15*H/24+pet(d) ,cx,cy,angle)
  ctx.lineTo(p[0],p[1])
  ctx.fill()
}          
 
function inoutAt (x,y,W,color) {
  let canvas = document.getElementById("myCanvas")
  let ctx = canvas.getContext("2d")
  let H = W, cpx, cpy, points = []
  let colors = shuffle(getCurrentPalette(true,13))
  ctx.lineWidth = 1 + document.getElementById("featuresize").value/50
  ctx.strokeStyle = color
  ctx.lineCap = "square"
  ctx.lineJoin = "bevel"
  ctx.beginPath()
  ctx.moveTo(x+22*W/24, y+4*H/24)
  ctx.lineTo(x+22*W/24, y+22*H/24)
  ctx.lineTo(x+21*W/24, y+22*H/24)
  ctx.lineTo(x+21*W/24, y+15*H/24)
  ctx.lineTo(x+20*W/24, y+15*H/24)
  ctx.lineTo(x+20*W/24, y+22*H/24)
  ctx.lineTo(x+19*W/24, y+22*H/24)
  ctx.lineTo(x+19*W/24, y+15*H/24)
  ctx.lineTo(x+6*W/24, y+15*H/24)
  ctx.lineTo(x+6*W/24, y+22*H/24)
  ctx.lineTo(x+5*W/24, y+22*H/24)
  ctx.lineTo(x+5*W/24, y+15*H/24)
  ctx.lineTo(x+4*W/24, y+15*H/24)
  ctx.lineTo(x+4*W/24, y+22*H/24)
  ctx.lineTo(x+3*W/24, y+22*H/24)
  ctx.lineTo(x+3*W/24, y+2*H/24)
  ctx.lineTo(x+4*W/24, y+2*H/24)
  ctx.lineTo(x+4*W/24, y+10*H/24)
  ctx.lineTo(x+19*W/24, y+10*H/24)
  ctx.lineTo(x+19*W/24, y+4*H/24)
  ctx.lineTo(x+20*W/24, y+5*H/24)
  ctx.lineTo(x+21*W/24, y+5*H/24)
  ctx.lineTo(x+22*W/24, y+4*H/24)
  ctx.stroke()
}

/***
Cat puzzle
16 peices (rooms)
Each room may have up to 4 cats entering or leaving
Cats leaving from the right edge must return from the left.
Cats leaving the left edge, must return from the right.
Same for cats leaving and entering from the top or bottom.
In other words, the rooms are set on a torus.
Print the image and cut out the squares.
Shuffle and rotate the pieces.
How difficult is it to arrange the rooms so that no cat is cut in half or twisted 180 degrees?
The three images show easy, difficult and prototype puzzle.
There are 16 factorial (16! = 20922789888000) possible arrangements - not including rotations.
 */