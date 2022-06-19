var router = require("express").Router();
const axios = require('axios');


router.post('/postMenu', (req) => {
    const payload = {
        headers: {
            'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY,
            'Content-Type': 'application/json',
        },
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        picture_url: req.body.picture_url
    };
    console.log
    console.log({payload});
    postMenu(payload);
    
    return 'response';
})

async function postMenu(payload) {
    await axios.post("https://nbsblog.microcms.io/api/v1/opensalesbar_menu", payload)
    .then(
        (response) => {
            console.log(response);
            //res.send(response.data);
            //console.log(response.data);
        })
    .catch(
        (error) => {
            console.log(error);
            //res.send('failed to get API2');
        });
}

module.exports = router;