var monkey, monkey_animation;
var bg, bgImg;
var invis;
var stoneGroup,stone;
var banGroup,banImg;
var score;

function preload(){
  
  bgImg = loadImage("jungle.jpg");
     
  monkey_animation = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png");
  
  banImg = loadImage("Banana.png");
  stone = loadImage("stone.png");
}

function setup() {
  createCanvas(400,400);
  bg=createSprite(200,200,400,400);
  bg.addImage("bg",bgImg);
  bg.velocityX=-4;
  bg.x = bg.width/2;
  
  
  monkey=createSprite(20,300,20,20);
  monkey.addAnimation("mon",monkey_animation);
  monkey.scale=0.07;
  
  
  invis = createSprite(300,375,700,10);
  invis.visible=false;

  banGroup = new Group();
  stoneGroup = new Group();
  bg.width=1000;
  bg.height=1000;
  score=0;
}

function draw(){
 background(255);
  
  if(keyDown("space")&&monkey.y>349) {
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
 console.log(monkey.y);
    
  if (bg.x < 0){
    bg.x = bg.width/2;
  }
  monkey.collide(invis);
  
  if(monkey.isTouching(banGroup))
     {
     
     banGroup.destroyEach();
     score=score+2;
     
     }
  if(monkey.isTouching(stoneGroup))
  {
   monkey.scale=0.05;
  }
  
  b();                           
  s();
  
  drawSprites();
  fill("white");
  textSize(20);
  text("Score:"+score,300,75);
}

function b() {
  
  if (frameCount % 200 === 0) {
    var bana = createSprite(600,120,40,10);
    bana.y = Math.round(random(200,200));
    bana.addImage("ba",banImg);
    bana.scale = 0.09;
    bana.velocityX = -3;
    
    switch(score){
        
      case 10: monkey.scale=0.1;
        break;
    
    case 20 : monkey.scale=0.2;
        break;
    
    case 30: monkey.scale=0.7;
        break;
    
    case 40: monkey.scale=0.9;
        break;
    
        default: break;
    
    }
    
    bana.lifetime = 200;
    banGroup.add(bana);
  }
}


function s() {
  
  if (frameCount % 100 === 0) {
    var st = createSprite(400,300,40,10);
    st.y = Math.round(random(370,370));
    st.addImage("sto",stone);
    st.scale = 0.09;
    st.velocityX = -3;
    
     
    st.lifetime = 200;
    stoneGroup.add(st);
  }
}