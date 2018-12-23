import ExampleClass from "./exampleClass";
import WeatherInfoManager from './weatherInfoManager';
let example = new ExampleClass('Wroclaw', 'pl', '0b72f178992e5ddc7fa93b511b4a5dff');
example.createLink();
example.getJSONfromAPI().then(function (response) {
    console.log(response);
   let weatherInfoManager = new WeatherInfoManager(response.data.main);
    weatherInfoManager.generateAllBlocks();
});
