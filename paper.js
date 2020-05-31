class Paper {
    constructor(x, y, r) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        'isStatic':true
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipesMode(CENTER);
      fill("pink");
      rect(0,0, this.r);
      pop();
    }
  };
  