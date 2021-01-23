class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0,
            'density':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
      }

      Score(){
        if(this.Visibility<0 && this.Visibility>-105){
          score++;
        }
    }

      display(){
        if(this.body.speed < 3) {
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          fill(this.color);
          rect(pos.x, pos.y, this.width, this.height);
          pop();
        } else {
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255,this.Visibility);
          pop();
        }
      }
  };
  