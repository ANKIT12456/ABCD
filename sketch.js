//SPRITES FOR BACKGROUND IMAGE
var bgimg1,bgimg2,bgimg3,bgimg4,bgimg5,bgimg6,bgimg7,bgimg8;

//SPRITES FOR PLAYER1
var player1,player1img,player1fire;

//SPRITES FOR PLAYER2
var player2,player2img,player2fire;

var rand,database,player,character;
var ground,game,form;
var bullet1,bullet2,score=0,score2=0;
var bullet1img,bullet2img;

//SPRITES FOR GAMESTATE,PLAYERCOUNT
var gameState =0;
var playerCount = 0;
var allPlayers;

//SPRITES FOR COSTUME1
var dress1,dress1img;

//SPRITES FOR COSTUME2
var dress2,dress2img;

//SPRITES FOR COSTUME3
var dress3,dress3img;

//SPRITES FOR THE COSTUME4
var dress4,dress4img;

var dress5,dress5img;

var dress6,dress6img;

//SPRITES FOR STORE
var store,storeimg;

var coinbar,healthbar,energybar,leafbar;

var coinbarimg,healthbarimg,energybarimg,leafbarimg;

var gunshop,gunshopimg;
var canteen,canteenimg;

var previous,previousimg;
 
//PRELOAD FUNCTION TO LOAD THE IMAGES  
function preload(){

	//LOADING THE BACKGROUND IMAGES
	bgimg1=loadImage("BATTLEGROUND/bg1.jpg");
	bgimg2=loadImage("BATTLEGROUND/bg2.jpg");
	bgimg3=loadImage("BATTLEGROUND/bg3.jpg");
	bgimg4=loadImage("BATTLEGROUND/bg4.jpg");
	bgimg5=loadImage("BATTLEGROUND/bg5.jpg");
	bgimg6=loadImage("BATTLEGROUND/bg12.jpeg");
	bgimg7=loadImage("BATTLEGROUND/bg6.jpg");
	bgimg8=loadImage("BATTLEGROUND/bg7.jpg");
	bgimg9=loadImage("BATTLEGROUND/bg8.jpg");
	//LOADING THE BULLET IMAGES
	bullet1img=loadImage("bullet1.png");
	bullet2img=loadImage("bullet2.png");

	//LOADING THE IMAGES OF PLAYER FIRING
	player1fire=loadAnimation("PLAYER2/b7.png");
	player2fire=loadAnimation("PLAYER1/a5.png")

	//LOADING THE IMAGES OF PLAYERS STANDING
	player1img=loadAnimation("PLAYER2/b6.png");
	player2img=loadAnimation("PLAYER1/a7.png");

	//LOADING THE IMAGES OF COSTUMES
	dress1img=loadImage("PLAYER1/a7.png");
	dress2img=loadImage("PLAYER2/b6.png");
	dress3img=loadImage("PLAYER3/c1.png");
	dress4img=loadImage("PLAYER4/d5.png");
	dress5img=loadImage("PLAYER6/f5.png");
	dress6img=loadImage("PLAYER5/e8.png");

	//LOADING THE IMAGE OF STORE ICON
	storeimg=loadImage('STORE/store.png');
	gunshopimg=loadImage('STORE/store2.jpg');
	canteenimg=loadImage('STORE/store3.jpg');

	//LOADING THE IMAGES OF THE BARS
	coinbarimg=loadImage("BARS/BAR1.png");
	energybarimg=loadImage("BARS/BAR2.png");
	healthbarimg=loadImage("BARS/BAR3.png");
	leafbarimg=loadImage('BARS/BAR4.png');

	previousimg=loadImage("BUTTON/PREVIOUS.png");
}

function setup(){

	//CREATING THE CANVAS
	createCanvas(1000,600);

	//CREATING THE DATABASE
	database = firebase.database();

	//ADDING THE BACKGROUD IMAGE
	background(bgimg6);
	
	//CREATING THE OBJECT OF GAMEC= CLASS
	game=new GAME();

	//CALLING THE GETSTATE FUNCTION OF GAME CLASS
	game.getState();

	//CALLING THE ASYNCHRONOUS START FUNCTION OF GAME CLASS
	game.start();

}

function draw(){

	//UPDATING THE GAMESTATE TO 1 IN THE DATABASE WHEN THE PLAYEE COUNT IS 2
	if(playerCount===1){
		game.update(1);
	}

	//CALLING THE PLAY FUNCTION OF GAME CLASS WHEN THE GAMESTATE IS 1
	if(gameState===1){
		game.play();
	}

	//DRAWING THE SPRITES
	drawSprites();
}


