import axios from 'axios'
const api = axios.create({
    baseURL :"https://restcountries.com/v3.1",
})

// HTTP GET REQUEST Method

export const getCountryData = ()=>{
    return api.get("/all?feilds=name,population,region,capital,flags")
}

// HTTP GET COUNTRY DETAILS BY GET REQUEST METHOD

export const getIndividualCountryData = (name)=>{
    return api.get(`/name/${name}?fullText=true&feilds=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}