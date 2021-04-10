class GUNSHOP{
    constructor(){

    }

    display(){
        background(bgimg9);

        form.gunshop.hide();
        form.canteen.hide();
        form.store.hide();

            previous=createSprite(50,50);
            previous.addImage(previousimg);
            previous.scale=0.2;
    }
}