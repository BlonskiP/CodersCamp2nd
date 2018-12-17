
export class CatGenerator{
    constructor()
    {
        this.weather="clean";
        console.log("CatGenerator is ONLINE :D")
    }
    setWeather(weather){
        this.weather=weather;
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