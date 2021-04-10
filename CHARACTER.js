class CHARACTER{
    constructor(){

    }

    display(){
        background(bgimg8);
        form.gunshop.hide();
        form.canteen.hide();
        form.store.hide();

            previous=createSprite(50,50);
            previous.addImage(previousimg);
            previous.scale=0.2;

            dress1=createSprite(200,235);
            dress1.addImage(dress1img);
            dress1.scale=0.3;
            this.coinbutton1=createButton("RS.200/-");
            this.coinbutton1.position(165,317);
            rectMode(CENTER);
            rect(200,250,150,200);

            dress2=createSprite(200,435);
            dress2.addImage(dress2img);
            dress2.scale=0.3;
            this.coinbutton2=createButton("RS.200/-");
            this.coinbutton2.position(165,517);
            rectMode(CENTER);
            rect(200,450,150,200);

            dress3=createSprite(510,195);
            dress3.addImage(dress3img);
            dress3.scale=0.5;
            this.coinbutton3=createButton("RS.200/-");
            this.coinbutton3.position(465,317);
            rectMode(CENTER);
            rect(500,250,150,200);

            dress4=createSprite(500,435);
            dress4.addImage(dress4img);
            dress4.scale=0.3;
            this.coinbutton4=createButton("RS.200/-");
            this.coinbutton4.position(465,517);
            rectMode(CENTER);
            rect(500,450,150,200);

            dress5=createSprite(800,235);
            dress5.addImage(dress5img);
            dress5.scale=0.3;
            this.coinbutton5=createButton("RS.200/-");
            this.coinbutton5.position(765,317);
            rectMode(CENTER);
            rect(800,250,150,200);

            dress6=createSprite(800,435);
            dress6.addImage(dress6img);
            dress6.scale=0.3;
            this.coinbutton6=createButton("RS.200/-");
            this.coinbutton6.position(765,517);
            rectMode(CENTER);
            rect(800,450,150,200);
    }


}