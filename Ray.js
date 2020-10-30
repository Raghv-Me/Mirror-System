class Ray{
    constructor(w,h,ww,side,x,y)
    {
       
        this.w = ww
        this.x = w
        this.y = h
        if (side == 'u'){
            this.dir = createVector(0,1)
            this.ij = createVector(floor(w/2),-1)
        }
        else if (side == 'd'){
            this.dir = createVector(0,-1)
            this.ij = createVector(floor(random(w/2)),h)
        }
        else if (side == 'l'){
            this.dir = createVector(1,0)
            this.ij = createVector(-1,floor(random(h/2)))
        }
        else if (side == 'r'){
            this.dir = createVector(-1,0)
            this.ij = createVector(w,floor(random(h)))
        }
       
    }
    warp(){
        if (this.ij.x>this.x){
            this.ij.x = -1
        }
        else if (this.ij.x<-1){
            this.ij.x = this.x
        }
        if (this.ij.y>this.y){
            this.ij.y = -1
        }
        else if (this.ij.y<-1){
            this.ij.y = this.y
        }
    }
    show(){
        push()
        strokeWeight(3)
        stroke(random(255),random(255),random(255))
        line((this.ij.x+1/2)*this.w,(this.ij.y+1/2)*this.w,(this.ij.x+1/2-this.dir.x/2)*this.w,(this.ij.y+1/2-this.dir.y/2)*this.w)
        line((this.ij.x+1/2)*this.w,(this.ij.y+1/2)*this.w,(this.ij.x+1/2+this.dir.x/2)*this.w,(this.ij.y+1/2+this.dir.y/2)*this.w)
        pop()
    }
    move(){
        this.ij.add(this.dir)
        this.ij.x = floor(this.ij.x)
        this.ij.y = floor(this.ij.y)
        this.warp()
        // console.log(this.dir)
    }
}