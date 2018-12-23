
export default class WeatherInfoManager {

    constructor(APIdata) {
       this.APIdata=APIdata;
      
    }

    generateInfoBlock = function(data, dataName)
    {
        let weatherInfo=document.getElementById("weatherInfo");
        let dataBox = document.createElement("DIV");
        dataBox.innerHTML=dataName+" " +data;
        weatherInfo.appendChild(dataBox);
    }

    cleanInfoBlock()
    {
        let weatherInfo=document.getElementById("weatherInfo");
        while(weatherInfo.firstChild)
        {
            weatherInfo.removeChild();
        }
    }
    generateAllBlocks = function ()
    {
        this.cleanInfoBlock();
        //humidity
        console.log(this.APIdata);
        let humidity = this.APIdata.humidity;
        let pressure = this.APIdata.pressure;
        let temp = this.APIdata.temp;
        let tempMax= this.APIdata.temp_max-273.15;
        let tempMin = this.APIdata.temp_min-273.15;//kelwin to celsius

        this.generateInfoBlock(humidity,"humidity");
        this.generateInfoBlock(pressure,"pressure");
        this.generateInfoBlock(temp,"temp");
        this.generateInfoBlock(tempMax,"tempMax");
        this.generateInfoBlock(tempMin,"tempMin");

    }

}