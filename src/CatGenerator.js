import $ from "jquery";
import Cat from "./Cat";
const rain="/images/rain.jpg"; 

export default class CatGenerator{

    
    constructor(weather)
    {
        this.weather=weather;
        console.log("CatGenerator is ONLINE :D");
        this.catBox = document.createElement("DIV");
        let body =document.body;
        body.appendChild(this.catBox);
        this.catBox.innerHTML="catBOX";
        this.catArray=[];
    }
    setWeather(weather){
        this.weather=weather;
    }
    createCats(catsQuantity, catClass)
    {
        for(let i=0;i<catsQuantity;i++)
        {
            let cat = new Cat(i);
            this.catBox.appendChild(cat.cat);
            this.catArray[i]=cat;
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
        let position=0;
       for(let i=0;i<this.catArray.length;i++)
       {
           let cat=this.catArray[i].cat;
           cat.src=rain;
           cat.className+=" rotating";
           
           let newPositionY=Math.random()*1500;
           this.catArray[i].yPosition=newPositionY;
          
          let newPositionX=position+"px";
           document.getElementById("cat"+i).style.top=newPositionY+"px";
           document.getElementById("cat"+i).style.left=newPositionX;
           position+=screen.width/this.catArray.length;

       }
      setInterval(this.catsGoDown,10);
     
    }
    catsGoDown= () =>
    {
       
        for(let i=0;i<this.catArray.length;i++)
       {
        let cat=this.catArray[i].cat;
        this.catArray[i].goDown(1);
       }
       
    }
    catsSun(){
        console.log("Cats will sun bathe");
    }

    catsSnow(){
        console.log("Cats will play with snow");
    }

    
}