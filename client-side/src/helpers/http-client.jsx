import axios from "axios"

export const baseURL = axios.create({
    baseURL : "http://localhost:3000/"
})

export const wizardsAPI = axios.create({
    wizardsAPI : "https://hp-api.herokuapp.com/api/characters"
})

export const wizardAPI = axios.create({
    wizardAPI : "https://hp-api.herokuapp.com/api/character"
})