
export default class CatGenerator{
    constructor()
    {
        this.weather="clean";
        console.log("CatGenerator is ONLINE :D");
        this.catBox = document.createElement("DIV");
        let body =document.body;
        body.appendChild(this.catBox);
        this.catBox.innerHTML="catBOX";
    }
    setWeather(weather){
        this.weather=weather;
    }
    createCats(catsQuantity, catClass)
    {
        for(let i=0;i<catsQuantity;i++)
        {
        let cat=document.createElement("DIV");
        cat.id="cat"+i;
        cat.className=catClass;
        cat.innerHTML= "cat";
        this.catBox.appendChild(cat);

        }
    }
    changeCats(){
        switch(weather){  //wea
            case "rain":{catsRain();
                break;}
            case "sun":{catsSun();
                break;}
            case "snow":{catSnow();
                break;}
            case "sky":{catsSky();
                break;} 

        }
    }

    catsRain(){

    }
    
    catsSun(){

    }

    catsSnow(){

    }

    
}