import axios from "axios"

const API_URL= "https://joao-sds2.herokuapp.com"

export const fetchProducts = () =>{
    return axios(`${API_URL}/products`);
};
