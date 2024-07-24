import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { GoogleGenerativeAI } from '@google/generative-ai'

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY)
// const weahterApiKey = process.env.OPENWEATHER_API_KEY;
// const city = 'Seattle';
// const url =     `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

// async function getWeather(){
//     try{
//         const response = await fetch(url);
//         const data = await response.json();

//         if (response.ok){
//             const temprature = data.main.temp;
//             const weatherDescription = data.weahter[0].description;
//         }
//     }
    


// }


async function run(){
    const model = genAI.getGenerativeModel({model: "gemini-pro"});
    const prompt = "what's the weather in Seattle in July18th 2024";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

}

run();

