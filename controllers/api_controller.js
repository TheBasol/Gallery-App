const { response } = require('express')
const axios = require('axios');


const obtenerImg = async(req, res = response) => {

    const { q = "" } = req.query;

    let route = `https://api.unsplash.com/photos/?${process.env.KEY}`;

    if(q !== ""){
        route = `https://api.unsplash.com/search/photos/?query=${encodeURI(q)}&${process.env.KEY}`
    }

    const data = await axios.get(route)
                .then( res => JSON.stringify(res.data))
                .then( data => JSON.parse(data));

    res.json({
        data
    })
}


module.exports = {
    obtenerImg
}