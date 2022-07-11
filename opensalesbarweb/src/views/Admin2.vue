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
      <div class="subcategory">サブカテゴリ
        <select v-model="menuInfo.subcategory">
          <option>special</option>
          <option>appetizer</option>
          <option>soup</option>
          <option>main</option>
          <option>pasta</option>
          <option>dessert</option>
          <option>cocktails</option>
          <option>whisky</option>
          <option>brandy</option>
          <option>spirits</option>
          <option>wine</option>
          <option>beer</option>
          <option>champagne</option>
          <option>softdrink</option>
          <option>regular</option>
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
        <ul class="row header" style="display:flex;">
          <li class="col menuId">メニューID</li>
          <li class="col picture">画像</li>
          <li class="col category">カテゴリ</li>
          <li class="col subcategory">サブカテゴリ</li>
          <li class="col name">名前</li>
          <li class="col price">価格</li>
          <li class="col description">説明</li>
          <li class="col picture_url">画像URL</li>
          <li class="col created_at">作成日時</li>
          <li class="col btn">削除</li>
        </ul>
        <template v-for="item in menu" :key="item.id">
          <ul class="row" style="display:flex;">
            <li class="col menuId">{{item.menuId}}</li>
            <li class="col picture"><img v-bind:src="item.picture_url"></li>
            <li class="col category">{{item.category}}</li>
            <li class="col subcategory">{{item.subcategory[0]}}</li>
            <li class="col name">{{item.name}}</li>
            <li class="col price">{{item.price}}</li>
            <li class="col description">{{item.description}}</li>
            <li class="col picture_url">{{item.picture_url}}</li>
            <li class="col created_at">{{item.createdAt}}</li>
            <li class="col btn"><button @click="deleteBtn(item)">削除</button></li>
          </ul>
        </template>
        

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
        subcategory: 'special',
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
      this.uploadMenu();
    },

    /* 削除ボタンを押したときの処理 */
    deleteBtn(item) {
      console.log(item)
      console.log('deletebtn')
      this.deleteMenu(item);
    },

    /* アップロード */
    uploadMenu() {
      const file = this.uploadFile;
      this.getS3UploadUrl(file);
    },

    /* 署名付きURLの取得 */
    getS3UploadUrl(file) {
      const payload = {
        operation: 'putObject',
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

    /* microCMSに登録 */
    registerToMicroCms(file) {
      const payload = {
        name: this.menuInfo.name,
        category: this.menuInfo.category,
        subcategory: [this.menuInfo.subcategory],
        price: this.menuInfo.price,
        description: this.menuInfo.description,
        picture_url: "https://ddfjcsntx8hpk.cloudfront.net/" + file.name,
        file_name: file.name
      };
      this.$store.dispatch('postMenu', payload)
        .then(res => {
          console.log(res);
        });
    },

    /* 削除 */
    deleteMenu(item) {
      this.getS3DeleteUrl(item.file_name);
      this.deleteFromMicroCms(item.id);
    },

    /* 署名付きURLの取得 */
    getS3DeleteUrl(fileName) {
      const payload = {
        operation: 'deleteObject',
        fileName: fileName,
        headers: {}
      }

      this.$store.dispatch('getUrl', payload)
      .then(res => {
        this.presignedUrl = res.url;
        this.deleteS3(fileName, this.presignedUrl);
        console.log(this.presignedUrl);
      });
      
    },

    /* S3から削除 */
    deleteS3(fileName, presignedUrl) {
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        }
      };
      const payload = {
        url: presignedUrl,
        fileName: fileName,
        config: config
      };
      this.$store.dispatch('s3Delete', payload)
        .then(res => {
          console.log({res})
          return;
        });

    },

    /* microCMSから削除 */
    deleteFromMicroCms(id) {
      const payload = {
        content_id: id,
      };
      this.$store.dispatch('deleteMenu', payload)
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
  .col {
    margin: 10px 4px;
    width: 120px;
  }

</style>