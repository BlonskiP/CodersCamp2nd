export default class Cat{
    constructor(index){
      
        this.cat=document.createElement("IMG");
       
        this.yPosition=0;
        this.cat.id="cat"+index;
        this.cat.className="cat";
        this.cat.innerHTML= "cat";
        this.cat.style.top=this.yPosition+"px";
    }
    goDown(x)
    {
       this.yPosition+=x;
       if(this.yPosition>screen.height) this.yPosition=-150;
       this.cat.style.top=this.yPosition+"px";

    }
}