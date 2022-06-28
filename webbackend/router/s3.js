var router = require("express").Router();

var AWS = require("aws-sdk");

router.get('/getSignedUrl', (req, res) => {
    const s3 = new AWS.S3({signatureVersion: 'v4', region: 'ap-northeast-1'});
    const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: req.query.fileName,
        Expires: 3600,
        ContentType: req.query.fileType
    };
    // 署名付きURLの取得
    s3.getSignedUrl(req.query.operation, params, (err, url) => {
        if (err) {
            console.log('error occured');
            return;
        }
        // フロントに返す
        res.json({
            url,
        });
    })

    const signedUrl = null;
    return signedUrl;
})


router.get("/s3upload", (req, res, next) => {
    console.log(req.query);
    console.log(req.params);
    const s3 = new AWS.S3({ signatureVersion: 'v4', region: 'ap-northeast-1' });
    const params = {
        Bucket: process.env.AWS_S3_BUCKET, // 環境変数に公開設定されたS3のバケット名を指定しておく。
        Key: req.query.fileName,    //アップロードするファイルのファイル名
        Expires: 60,
        ContentType: req.query.fileType,    //アップロードするファイルのfileType
    };
    // 署名付きURLの取得
    s3.getSignedUrl('putObject', params, (err, url) => {
        if (err) {
            console.log('error occured');
            return err;
        };
        // res.jsonでフロントに返す
        res.json({ url });
        return;
    });

});

router.get("/listObjects", (req, res, next) => {
    console.log(req.query);
    const s3 = new AWS.S3({ signatureVersion: 'v4', region: 'ap-northeast-1' });
    const params = {
        Bucket: process.env.AWS_S3_BUCKET, // 環境変数に公開設定されたS3のバケット名を指定しておく。
        MaxKeys: 3
    };

    s3.listObjectsV2(params, (err, data)=> {
        if(err) console.log(err, err.stack);
        else {
            res.json({data});
            return;
        }
    })

});

module.exports = router;