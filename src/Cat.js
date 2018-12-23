export default class Cat{
    constructor(index){
      
        this.cat=document.createElement("IMG");
        this.cat.style.left=this.xPosition;
        this.cat.style.top=this.yPosition;
        this.cat.id="cat"+index;
        this.cat.className="cat";
        this.cat.innerHTML= "cat";
    }
}