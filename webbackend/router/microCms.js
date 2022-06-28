var router = require("express").Router();
const { Endpoint } = require("aws-sdk");
const axios = require('axios');

const endPoint = "https://nbsblog.microcms.io/api/v1/opensalesbar_menu"
const config = {
    headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY,
    },
};

/* ルーティング */
router.get('/getMenu', getMenu);
router.post('/postMenu', postMenu);
router.delete('/deleteMenu', deleteMenu);


/* microCMSからメニューを取得 */
async function getMenu(req, res) {
    try {
        let url = endPoint;

        // クエリストリングで条件を指定
        // 取得件数の指定(指定しない場合、100件)
        if(req.query.limit) {
            url += '?limit=' + req.query.limit;
        } else {
            url += '?limit=' + 100;
        }
        // カテゴリの指定（指定しない場合、すべて）
        if(req.query.category)
            url +='&filters=category[contains]' + req.query.category;
        
        const result = await axios.get(url, config);
        res.json(result.data);
    }
    catch(e) {
        console.log(e);
        res.json(e);
    }
}


/* microCMSにメニューを追加 */
async function postMenu(req, res) {
    try {
        const url = endPoint;
        
        // リクエストボディの設定
        const payload = {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description,
            picture_url: req.body.picture_url,
            file_name: req.body.file_name
        };
        config.headers['Content-Type'] = 'application/json';

        const result = await axios.post(url, payload, config);
        res.json(result.data);
    } catch(e) {
        console.log(e);
        res.json(e);
    }
}

/* microCMSから指定したidのメニューを削除 */
async function deleteMenu(req, res) {
    try {
        const url = endPoint + '/' + req.query.content_id;

        const result = await axios.delete(url, config);
        res.json(result.data);
    } catch(e) {
        console.log(e);
        res.json(e);
    }
}
module.exports = router;


/* 以下、備忘録（こういう書き方もできる */
// router.get('/getMenu', (req, res) => {
//     (async() => {
//         const result = await getMenu(req.query.category, config);
//         res.json(result);
//     })().catch();
// // })
// router.get('/getMenu', (req, res) => {
//     getMenu(req.query.category, config)
//         .then(result => {
//             res.json(result);
//         }
//         ).catch(err => {
//             res.json(err)
//         })
// })

// /* 指定したカテゴリのメニューを10件取得 */
// async function getMenu(category, config) {
//     let url;
//     if(category) {
//         url = endPoint + '?filters=category[contains]' + category;
//     } else {
//         url = endPoint;
//     }
//     const result = await axios.get(url, config);
//     return result.data;
// }