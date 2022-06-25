<template>
  <div id="admin2">
    <h1>This is a admin2 page</h1>
    <div>
      <h2>メニューの追加</h2>
      <div class="name">名前<input type="text" v-model="menuInfo.name"></div>
      <div class="category">カテゴリ
        <select v-model="menuInfo.category">
          <option>food</option>
          <option>drink</option>
          <option>plan</option>
        </select>
      </div>
      <div class="price">価格<input type="text" v-model="menuInfo.price"></div>
      <div class="description">説明<textarea v-model="menuInfo.description"></textarea></div>
      <div class="picture">
        <input @change="preventDefault" type="file" name="file">
        <button @click="uploadBtn" type="submit">アップロード</button>
      </div>
      <button class="test_button" @click="test">テスト</button>
      <p>
        URL: {{ presignedUrl }}
      </p>
    </div>

    
    <div>
      <h2>メニューの取得と削除</h2>
      <button class="get_menu" @click="getMenu">メニューの取得</button>
      <p>
        URL: {{ presignedUrl }}
      </p>

    </div>

  </div>
</template>


<script>
//import { ref } from '@vue/runtime-core'
//import axios from 'axios'

export default {
  name: 'admin2',
  setup() {

  },

  data() {
    return {
      menuInfo: {
        name: '',
        category: 'food',
        price: 0,
        description: '',
        pictureUrl: '',
      },
      firstImageUrl: 'https://ddfjcsntx8hpk.cloudfront.net',
      uploadFile: null,
      presignedUrl: null,

      menu: [],

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
          'content-type': 'multipart/form-data',
        }
      };
      const payload = {
        url: presignedUrl,
        file: file,
        config: config
      };
      this.$store.dispatch('s3Upload', payload)
        .then(res => {
          console.log({res})
          this.registerToMicroCms(file)
          return;
        });

    },

    registerToMicroCms(file) {
      const payload = {
        name: this.menuInfo.name,
        category: this.menuInfo.category,
        price: this.menuInfo.price,
        description: this.menuInfo.description,
        picture_url: "https://ddfjcsntx8hpk.cloudfront.net/" + file.name
      };
      this.$store.dispatch('postMenu', payload)
        .then(res => {
          console.log(res);
        });
    },


    /* 画像をセット */
    setFirstImage(content) {
      this.firstImageUrl += ('/' + content.Key);
    },
    
    getMenu() {
      const payload = {
        category: null,
      };

      this.$store.dispatch('getMenu', payload)
        .then((res) => {
          this.menu = res.contents;
          console.log(this.menu);
        });
    }

  }

  

}

</script>

<style scoped>

</style>