class Food{
    constructor(){
        this.image = loadImage("Images/milk.png");
    }

    getFoodStock(){
        database.ref('/').update({
            Food: foodS
        })
    }

    updateFoodStock(){
        database.ref('/').update({
            Food: foodS
        })
    }

    deductFood(){
        database.ref('/').update({
            Food: foodS
        })
    }

    display(){
        var x = 80, y = 100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock != 0){
            for(var i=0;i<this.foodSTock;i++){
                if(i%10 === 0){
                    x = 80; 
                    y = y+50; 
                }
                image(this.image,x,y,50,50);
                x = x+30;
            }
        }
    }
}