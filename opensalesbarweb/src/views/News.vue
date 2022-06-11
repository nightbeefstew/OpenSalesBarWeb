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
      <img src="https://ddfjcsntx8hpk.cloudfront.net/私は大砲よ.jpg" />
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
        this.presignedUrl = res.url
        this.uploadS3(file, this.presignedUrl);
      });
      
    },

    /* S3にアップロード */
    uploadS3(file, presignedUrl) {
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
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

    }

  }

  

}

</script>

<style scoped>

</style>