import axios from "axios"

const API_URL= "https://joao-sds2.herokuapp.com"
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export const fetchProducts = () =>{
    return axios(`${API_URL}/products`);
};

export const fetchLocalMapBox : any = (local : string) =>{
        
        return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}