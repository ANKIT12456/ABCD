class FORM{

    constructor(){
        //CREATING THE INPUT BOX
        this.input = createInput("Name");

        //CREATING THE PLAY BUTTON
        this.button = createButton('Play');

        //CREATING THE RESET BUTTON
        this.reset=createButton('RESET');

        //CREATING THE TITLE
        this.title = createElement('h2');

        this.store=createButton('STORE');
        this.gunshop=createButton("GUNSHOP");
        this.canteen=createButton('CANTEEN');
     }

     //HIDE FUNCTION TO HIDE THE ELEMENTS
     hide() {
         this.button.hide();
         this.input.hide();
         this.title.hide();
     }

     display(){

        //POSITIONING THE INPUT BOX
         this.input.position(50,50);
         this.input.style("width",'300px');


         //POSITIONING THE PLAY BUTTON
         this.button.position(400,50);
         this.button.style("image",'bullet1.png');

         //POSITIONING THE RESET BUTTON
         this.reset.position(900,20);

         //STYLING THE RESET BUTTON
         this.reset.style("width",'100px');
         this.reset.style("height",'100px');
         this.reset.style("font-size",'20px');

         //STYLING THE TITLE AND POSITIONING IT
        /* this.title.html("SHOOTING DESIRE");
         this.title.position(250,100);
         this.title.style("font-size",'50px');
         this.title.style("color","black");*/
         
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.title.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            background(bgimg7);
            strokeWeight(25);
            stroke("black");
            /*store=createSprite(100,500);
            store.addImage(storeimg);
            store.scale=0.35;*/
            this.store.position(100,500);
            rectMode(CENTER);
            rect(100,500,120,120);
            //Shapecolor='black';

            strokeWeight(25);
            stroke("black");
            /*gunshop=createSprite(100,300);
            gunshop.addImage(gunshopimg);
            gunshop.scale=0.35;*/
            this.gunshop.position(100,300);
            rectMode(CENTER);
            rect(100,300,170,120);

            strokeWeight(25);
            stroke("black");
            /*canteen=createSprite(100,100);
            canteen.addImage(canteenimg);
            canteen.scale=0.2;*/
            this.canteen.position(100,100);
            rectMode(CENTER);
            rect(100,100,170,120);

            coinbar=createSprite(800,55);
            coinbar.addImage(coinbarimg);

            energybar=createSprite(460,75);
            energybar.addImage(energybarimg);
            energybar.scale=0.4;

            healthbar=createSprite(640,110);
            healthbar.addImage(healthbarimg);

            leafbar=createSprite(270,20);
            leafbar.addImage(leafbarimg);
            leafbar.scale=0.4;

            /*if(mousePressedOver(store)){
                character=new CHARACTER();
                character.display();
            }*/

            this.store.mousePressed(() => {
                character=new CHARACTER();
                character.display();
            })

            this.gunshop.mousePressed(()=>{
                gunshop=new GUNSHOP();
                gunshop.display();
            })
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })
     }
}