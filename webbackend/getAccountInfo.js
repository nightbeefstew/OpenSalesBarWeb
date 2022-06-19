var AWS = require("aws-sdk");

const sts = new AWS.STS();

async function getAccountInfo() {
    const accountInfo = (await sts.getCallerIdentity({}).promise());
    console.log({accountInfo})
}

getAccountInfo();