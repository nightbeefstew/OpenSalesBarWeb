var router = require("express").Router();
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
        // 順番
        url += '?orders=menuId'

        // 取得件数の指定(指定しない場合、100件)
        if(req.query.limit) {
            url += '&limit=' + req.query.limit;
        } else {
            url += '&limit=' + 100;
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


/* 指定したカテゴリのメニューを数えて返却 */
async function countMenu(category) {
    let url = endPoint + '?limit=9999';
    
    /* カテゴリの指定があれば条件に含め、なければ全件取得 */
    if(category)
        url += '&filters=category[contains]' + category;

    const menu = await axios.get(url, config);
    return menu.data.totalCount;
}

/* 指定したカテゴリのメニューの順番の最小の欠番を返却 */
async function getMissingMenuId(category) {
    const url = endPoint + '?orders=menuId&limit=9999&filters=category[contains]' + category;

    const menuResponse = await axios.get(url, config);
    const menu = menuResponse.data.contents;

    let missingMenuId = getCategoryId(category) * 1000 + 1;

    // arr.foreach()だとbreakが使えない
    // arr.some()のコールバック関数がtrueを返したら動作を止める性質を利用する
    const missingMenuIdExists = menu.some(item => {
        console.log({missingMenuId});
        if(item.menuId === missingMenuId) {
            missingMenuId++;
            return false;
        } else {
            console.log(`missingMenuId is : ${missingMenuId}`);
            return true;
        }
    });
    
    // arr.some()の使い方を忘れないために一応ログしておく
    if(missingMenuIdExists) {
        console.log('missingMenuId exists');
    } else {
        console.log('missingMenuId does not exist');
    }
    return missingMenuId;
}


/* microCMSにメニューを追加 */
async function postMenu(req, res) {
    try {
        console.log(req.body);
        const url = endPoint;
        const category = req.body.category;
        const num = await countMenu(category);
        console.log(req.body.name);

        console.log({num});
        /* カテゴリに応じてmenuIdを設定 */
        const menuId = await getMissingMenuId(req.body.category);
        console.log({menuId});
        console.log(req.body.name);
        // リクエストボディの設定
        const payload = {
            menuId: menuId,
            name: req.body.name,
            category: req.body.category,
            subcategory: req.body.subcategory,
            price: req.body.price,
            description: req.body.description,
            picture_url: req.body.picture_url,
            file_name: req.body.file_name
        };
        config.headers['Content-Type'] = 'application/json';
        console.log(payload);
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

/* カテゴリIDの取得 */
function getCategoryId(category) {
    const categoryObj = {
        drink: 1,
        food: 2,
        plan: 3
    };
    return categoryObj[category];
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