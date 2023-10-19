 

let particles = []; 

function setup() {
  createCanvas(400, 400);
  noStroke(); 
  mousePressed(); 
  
}

function draw() {
  background(0,0,0); 
  
  // fill(random(0,255), random(0,255), color3, 100); 
  // circle(x, y, 100); 
  // x = x + xVel; 
  // y = y + yVel; 
  
  
  for (let i  = 0; i < particles.length; i++) {
    let p = particles[i]; 
    fill(p.r, p.g, p.b); 
    circle(p.x, p.y, 15); 
      p.x +=p.xVel; 
      p.y += p.yVel;
    p.yVel += 0.03; 
    
  }

}

function createFirework(x, y) {
  
  for (let i = 0; i < 100; i++) {
    let p = new Particle(); 
    // p.x = random(0, width); 
    // p.y = random(0, height);
    // if (mouseIsPressed) {
    //   p.x = mouseX; 
    //   p.y = mouseY; 
    // }
    p.x = x; 
    p.y = y; 
    // p.x = width/2;
    // p.y = width/2; 
    // p.xVel = random(-1,1);
    // p.yVel = random(-1, 1); 
    let angle = random(0, 2 * PI); 
    let vel = random(0,1); 
    
    p.xVel = vel * cos(angle);
    p.yVel = vel * sin(angle);    
   
    
    
    particles.push(p); 
  }
  
}

function mousePressed() {
  createFirework(mouseX, mouseY)
}

function deleteDeadParticles() {
  let aliveParticles = [];
  
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i]
  }
}