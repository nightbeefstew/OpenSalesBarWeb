var router = require("express").Router();
const axios = require('axios');

const endPoint = "https://nbsblog.microcms.io/api/v1/opensalesbar_menu"

// router.get('/getMenu', (req, res) => {
//     const config = {
//         headers: {
//             'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY,
//         },
//     };
//     const result = getMenu(config);
//     console.log({result});
//     res.json(getMenu(config));
// })

router.get('/getMenu', (req, res) => {
    (async() => {
        
        const config = {
            headers: {
                'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY,
            },
        };
        const result = await getMenu(config);
        console.log({result});
        res.json(result);
    })().catch();
})

router.get('/getDrink', (req, res) => {
    (async() => {
        
        const config = {
            headers: {
                'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY,
            },
        };
        const result = await getDrink(config);
        console.log({result});
        res.json(result);
    })().catch();
})

router.post('/postMenu', (req, res) => {
    const config = {
        headers: {
            'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY,
            'Content-Type': 'application/json',
        },
    };
    const payload = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        picture_url: req.body.picture_url
    };
    
    res.json(postMenu(endPoint, payload, config));
})

/* メニューを10件取得 */
async function getMenu(config) {
    console.log('hello');
    const result = await axios.get(endPoint, config);
    return result.data;
    // .then(
    //     (response) => {
    //         resolve(response.data);
    //     })
    // .catch(
    //     (error) => {
    //         console.log(error);
    //         return error;
    //     });
}

async function getDrink(config) {
    console.log('helloDrink');
    const url = endPoint + '?filters=category[contains]drink'
    const result = await axios.get(url, config);
    return result.data;
    // .then(
    //     (response) => {
    //         resolve(response.data);
    //     })
    // .catch(
    //     (error) => {
    //         console.log(error);
    //         return error;
    //     });
}

async function postMenu(endPoint, payload, config) {
    await axios.post(endPoint, payload, config)
    .then(
        (response) => {
            return response;
        })
    .catch(
        (error) => {
            return error;
        });
}

module.exports = router;