class MIR{
    constructor(i,j,w){
        this.ij = createVector(i,j)
        this.pos = createVector((i+1/2)*w,(j+1/2)*w)
        this.w = w
        this.angle = random([PI/4,3*PI/4])
        this.touch = false
    }
    show(){
        push()
        stroke(255,150)
        noFill()
        if(this.touch)
        stroke(255)
        {
            strokeWeight(2)
        }
        rectMode(CENTER)
        // console.log(this.pos.x,this.pos.y,this.w,this.w)
        // rect(this.pos.x,this.pos.y,this.w,this.w)
        line(this.pos.x,this.pos.y,this.pos.x+this.w/2*sqrt(2)*cos(this.angle),this.pos.y+this.w/2*sqrt(2)*sin(this.angle))
        line(this.pos.x,this.pos.y,this.pos.x+this.w/2*sqrt(2)*cos(this.angle+PI),this.pos.y+this.w/2*sqrt(2)*sin(this.angle+PI))
        pop()
    }
    check(ray){
        if (this.ij.x == ray.ij.x  && this.ij.y == ray.ij.y){
            
                let angle = this.angle - ray.dir.heading()
                angle = floor(180 * angle/PI)
                // console.log(angle)
                this.touch = true
                
                if (angle ==-225 || angle == -45 || angle==135 || angle == 315){
                    // console.log(ray.dir.heading())
                    ray.dir.rotate(-PI/2)
                    // console.log(ray.dir.heading())

                    ray.dir.x = round(ray.dir.x)
                    ray.dir.y = round(ray.dir.y)      
                          }
               else  if (angle ==225 || angle == 45 || angle==-135 ||angle == -315){
                    // console.log(ray.dir.heading())

                    ray.dir.rotate(PI/2)
                    // console.log(ray.dir.heading())

                    ray.dir.y = round(ray.dir.y)
                    ray.dir.x = round(ray.dir.x)                }
                else {
                    console.log('Skipped at ' + angle,ray.dir.heading()*180/PI,this.angle*180/PI)
                    noLoop()
                }
                // this.angle +=PI/2
                this.angle%=PI
               
        }
    }
}