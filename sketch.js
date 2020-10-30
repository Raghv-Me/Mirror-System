let mirs = []
let rays = []
let w = 10
function setup() {
  createCanvas(640,360);
  let bw = floor(width/w)
  let bh = floor(height/w)
  let side = random(['u','d','l','r'])
  for (let i = 0;i<15;i++)
    rays.push( new Ray(bw,bh,w,side))
  mirs.push(new MIR(floor(bw/2),floor(bh/2),w))
  for (let i = 0;i<bw;i++){
    for(let j = 0;j<bh;j++){
    if (random()<0.1){
        mirs.push(new MIR(i,j,w))
      }
    }
  }
  console.log(mirs.length)
}

function draw() {
  background(0);
  for (let ray of rays)
  
  ray.move()
  for (let i = 0 ;i<mirs.length;i++){
    for (let ray of rays)
    mirs[i].check(ray)
  }
  for (let ray of rays)
  ray.show()
  for (let i = 0 ;i<mirs.length;i++){
    mirs[i].show()
  }
  let count = 0
  for (let mir of mirs){
    if (mir.touch){
      count++
    }
  }
  if (count == mirs.length){
    noLoop()
  }
  frameRate(30)
}