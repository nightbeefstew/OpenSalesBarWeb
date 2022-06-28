const express = require("express");
const app = express();
const https = require('https');
const fs = require('fs');

// SSL/TSL通信
/* const sslOptions = {
    key: fs.readFileSync('./keys/server.key'),
    cert: fs.readFileSync('./keys/server.crt')
}; */

//bodyParserでpostメソッドのbodyを受け取る準備をする
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//corsの使用
const cors = require('cors');
//const { default: axios } = require("axios");
const { nextTick } = require("process");

app.use(cors({
	origin: ['https://gismarck.com', 'http://localhost:8080'],  //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}));

// 環境変数の読み込み
console.log('.envから読み込み');
require('dotenv').config()
const key = process.env.MICROCMS_API_KEY;


/* 起動テスト */
app.get("/", (req, res) => {
    res.status(200).send("Express!!");
})

/* ルーティング */
app.use('/', require('./router/index.js'));
app.use('/api/common', require('./router/common.js'));
app.use('/api/s3', require('./router/s3.js'));
app.use('/api/microCms', require('./router/microCms.js'));

/* 環境変数の取得テスト */
app.get("/api/envTest", (req, res) => {
    try {
        res.send('OK');
        //このファイルに書いたconsole.logはターミナルに表示される
        console.log('ok');
        console.log(key);
    } catch (error) {
        console.error(error);
    }

});

// var AWS = require("aws-sdk");

app.get('/api/getSignedUrl', (req, res) => {
    const s3 = new AWS.S3({signatureVersion: 'v4', region: 'ap-northeast-1'});
    const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: req.query.fileName,
        Expires: 6000,
        ContentType: req.query.fileType
    };
    // 署名付きURLの取得
    s3.getSignedUrl('putObject', params, (err, url) => {
        if (err) {
            console.log('error occured');
            console.log(err);
            return;
        }
        // フロントに返す
        res.json({
            url,
        });
        console.log('url returned!');
    })

//     console.log('reached');
//     //console.log(req);
//     const signedUrl = null;
//     return signedUrl;
// })


// app.get("/api/s3upload", (req, res, next) => {
//     console.log(req.query);
//     console.log(req.params);
//     const s3 = new AWS.S3({ signatureVersion: 'v4', region: 'ap-northeast-1' });
//     const params = {
//         Bucket: process.env.AWS_S3_BUCKET, // 環境変数に公開設定されたS3のバケット名を指定しておく。
//         Key: req.query.fileName,    //アップロードするファイルのファイル名
//         Expires: 60,
//         ContentType: req.query.fileType,    //アップロードするファイルのfileType
//     };
//     // 署名付きURLの取得
//     s3.getSignedUrl('putObject', params, (err, url) => {
//         if (err) {
//             return err;
//             console.log('error occured');
// 	    next(err)
//             return;
//         };
//         // res.jsonでフロントに返す
//         res.json({ url });
// 	    console.log("url returned!");
//         return;
//     });

// });

// app.get("/api/listObjects", (req, res, next) => {
//     console.log(req.query);
//     const s3 = new AWS.S3({ signatureVersion: 'v4', region: 'ap-northeast-1' });
//     const params = {
//         Bucket: process.env.AWS_S3_BUCKET, // 環境変数に公開設定されたS3のバケット名を指定しておく。
//         MaxKeys: 3
//     };

//     s3.listObjectsV2(params, (err, data)=> {
//         if(err) console.log(err, err.stack);
//         else {
//             res.json({data});
//             return;
//         }
//     })

// });

// ポート3000番でlistenする
//https.createServer(sslOptions, app).listen(3000);

app.listen(3000);