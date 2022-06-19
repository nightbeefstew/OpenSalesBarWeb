<template>
  <div id="news">
    <h1>This is a news page</h1>
    <div>
      <h2>画像直リンクのテスト</h2>
      <img src="https://gismarck-s3-001.s3.ap-northeast-1.amazonaws.com/img/testimg.png" alt="テスト画像">
    </div>

    <div>
      <h2>S3アップロードテスト</h2>
      <input @change="preventDefault" type="file" name="file">
      <button @click="uploadBtn" type="submit">アップロード</button>

      <button class="submit_button" @click="getUrl">送信</button>
      <p>
        URL: {{ presignedUrl }}
      </p>

    </div>
    <div>
      <h2>CloudFront配信テスト</h2>
      <img src="https://ddfjcsntx8hpk.cloudfront.net/" />
      <img :src="firstImageUrl"/>
    </div>

    <div>
      <h2>listObjectsテスト</h2>
      <button @click="getListBtn">オブジェクト一覧取得</button>
    </div>

    <div>
      <h2>ルーティングテスト</h2>
      <button @click="routingBtn">ルーティング</button>
    </div>

  </div>
</template>


<script>
//import { ref } from '@vue/runtime-core'
//import axios from 'axios'

export default {
  name: 'news',
  setup() {

  },

  data() {
    return {
      firstImageUrl: 'https://ddfjcsntx8hpk.cloudfront.net',
      uploadFile: null,
      presignedUrl: null,

    }

  },

  methods: {
    /* ブラウザのデフォルトの動作を止める */
    preventDefault(event) {
      event.preventDefault();
      const files = event.target.files;
      this.uploadFile = files[0];
    },

    /* アップロードボタンを押したときの処理 */
    uploadBtn() {
      this.upload()
    },

    /* アップロード */
    upload() {
      const file = this.uploadFile;

      console.log(file);

      this.getS3UploadUrl(file);
    },

    /* 署名付きURLの取得 */
    getS3UploadUrl(file) {
      const payload = {
        fileName: file.name,
        fileType: file.type,
        headers: {}
      }

      this.$store.dispatch('getUrl', payload)
      .then(res => {
        console.log(res)
        this.presignedUrl = res.url
        this.uploadS3(file, this.presignedUrl);
      });
      
    },

    /* S3にアップロード */
    uploadS3(file, presignedUrl) {
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        }
      };
      const payload = {
        url: presignedUrl,
        file: file,
        config: config
      }
      this.$store.dispatch('s3Upload', payload)
        .then(res => {
          return console.log(res);
        });

    },

    /* オブジェクト取得ボタンが押されたら */
    getListBtn() {
      console.log('getListBtn');

      this.$store.dispatch('getObjects', {})
        .then(res => {
          const contents = res.data.Contents;
          this.setFirstImage(contents[0]);
        });
    },

    /* 画像をセット */
    setFirstImage(content) {
      console.log({content});
      this.firstImageUrl += ('/' + content.Key);
    },

    /* ルーティングボタンが押されたら */
    routingBtn() {
      this.$store.dispatch('routingTest', {})
        .then(res => {
          console.log(res);
        });
    }

  }

  

}

</script>

<style scoped>

</style>