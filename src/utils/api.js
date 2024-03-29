import axios from "axios";

const Base_url = 'https://saurav.tech/NewsAPI/';
const TOKEN = import.meta.env.VITE_APP_NEWSAPI_TOKEN;

const headers = {
    Authorization: TOKEN
}

export const fetchDataFromApi = async (path, params) => {
    try{
        const {data} = await axios.get(Base_url + path + '.json');
        return data
        } catch(err){
        return err
    }
}