class Iron {
 constructor(x,y,r){
  
  var options ={
  restitution:0.2,
  density:30,
  friction:1
  }
  this.body=Bodies.circle(x,y,r/2-10,options)
  this.r=r 
  World.add(world,this.body)
 }
display(){
var pos=this.body.position;
push()
translate(pos.x,pos.y)
fill("BlanchedAlmond")
ellipseMode(CENTER)
ellipse(0,0,this.r,this.r)
pop()





}


}










