// Variables generales
var Limon,Limon_Salto,Limon_Chocar,Limon_Caminar;
var Suelo,gSuelo,Sueloinvisible;
var Fondo;
var Obstaculo2,Obstaculo3;
var Sol, Luna, Nubes, Sol1;
var Estrella1;
var Obstaculo;
var Choque,Salto

function preload(){
    Limon_Salto = loadImage("Salto.png");
    Limon_Chocar = loadImage("Chocar.png");
    Limon_Caminar = loadImage("Limon_Caminando.png");

    gSuelo = loadImage("Suelo.png");

    Fondo = loadImage("Fondo.png");

    Obstaculo2 = loadImage("Obstaculo_2.png");
    Obstaculo3 = loadImage("Obstaculo_3.png");

    Sol = loadImage("Sol.png");
    Luna = loadImage("Luna.png");
    Nubes = loadImage("Nubesitas.png");

    Estrella1 = loadImage("Estrella.png");


}

function setup(){
Limon= createSprite(26,181,11,21);
Limon.addImage(Limon_Salto);
Limon.addImage(Limon_Chocar);
Limon.addImage(Limon_Caminar);
 Limon.scale=0.4;


 Suelo = createSprite(300,185,300,10);
  Suelo.velocityX=-4
 Suelo.addImage("Suelo", gSuelo);

 Sueloinvisible = createSprite(100,197,200,5);
  Sueloinvisible.visible = false;

}

function draw(){
createCanvas(600,200);
background(Fondo);
drawSprites();

if (Suelo.x < 0){
  Suelo.x = Suelo.width/2;
}

Premio();

Obstaculos();

Cielo();
}

function Obstaculos(){
  if(frameCount % 59 == 0){
     Obstaculo = createSprite(700,180,10,40);
    Obstaculo.velocityX= -3;

    Obstaculo.scale=0.35;

   var uno = Math.round(random(1,2));

    switch(uno){
      case 1: Obstaculo.addImage(Obstaculo2);
      break;
      case 2: Obstaculo.addImage(Obstaculo3);
      break;
      default: break;
    }
    Obstaculo.scale=0.5;
    Obstaculo.lifetime=230;
}
}

function Cielo(){
  if(frameCount % 60 == 0 ){
  Sol1 = createSprite(550,30,20,20);
   Sol1.velocityX= -3;
  
   var uno = Math.round(random(1,3));
   
    switch(uno){
      case 1 : Sol1.addImage(Sol);
      break;
      case 2 : Sol1.addImage(Luna);
      break;
      case 3 : Sol1.addImage(Nubes);
      break;
      default: break;
     }
     Sol1.scale=0.2;
     Sol1.lifetime=230;
   }
}

function Premio(){
  if(frameCount % 100 == 0){
  var Estrella = createSprite(600,155,20,20);
  Estrella.addImage(Estrella1);
   Estrella.velocityX= -3;
   Estrella.scale=0.4;
   Estrella.lifetime=230;
   Estrella.depth = Obstaculo.depth;
   Estrella.depth+=1;
  }
}