class rope{
  constructor(bodyA, pointB){
      var o = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 1.2,
          length: 200
      }

      this.pointB = pointB
      this.rope = Constraint.create(o);
      World.add(world, this.rope);
      
  }

  fly(){
      this.rope.bodyA = null;
  }

  attach(body){
      this.rope.bodyA = body;
  }

  display(){
      
      if(this.rope.bodyA){
          var pointA = this.rope.bodyA.position;
          var pointB = this.pointB;
          push();
          stroke("white");
          line(pointB.x,pointB.y,pointA.x,pointA.y)
          pop();
      }
  }
  
}