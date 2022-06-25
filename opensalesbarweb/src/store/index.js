import axios from 'axios'
import { createStore } from 'vuex'
//import axios from 'axios'

export default createStore({
  state: {
    /* APIエラー判定用 */
    apiErrorCode: null,
  },
  mutations: {
    setApiErrorCode(state, payload) {
      state.apiErrorCode = payload
    }
  },
  actions: {
    /* S3アップロードURLの取得 */
    async getUrl({ commit }, payload) {
      try {
        const res = await axios.get('/api/s3/getSignedUrl', {params: payload});
        console.log(res);
        return res.data;

      } catch(e) {
        commit('setApiErrorCode', 'failure')
        console.log(e);
      }
    },

    /* S3へアップロード */
    async s3Upload({ commit }, payload) {
      try {
        console.log('s3upload');
        const res = await axios.put(payload.url, payload.file, payload.config);
        return res;
      } catch(e) {
        commit('setApiErrorCode', 'failure')
        console.log(e);
      }
    },

    /* S3からオブジェクトリストを取得 */
    async getObjects({ commit }, payload) {
      try {
        console.log('getObjects');
        const res = await axios.get('/api/s3/listObjects', {params: payload});
        console.log(res);
        return res.data;

      } catch(e) {
        commit('setApiErrorCode', 'failure')
        console.log(e);
      }
    },

    /* microCMSにメニューを登録 */
    async postMenu({ commit }, payload) {
      try {
        console.log('postMicroCms', payload);
        const res = await axios.post('/api/microCms/postMenu', payload);
        console.log(res);
        return res.data;

      } catch(e) {
        commit('setApiErrorCode', 'failure')
        console.log(e);
      }
    },

    /*microCMSからメニューを取得 */
    async getMenu( { commit }) {
      try {
        // const res = await axios.get('/api/microCms/getMenu');
        // console.log('hi res')
        // console.log(res);
        // return res.data;
        const res = await axios.get('/api/microCms/getMenu');
            console.log({res});
            return res.data;
        

      } catch(e) {
        commit('setApiErrorCode', 'failure')
        console.log(e);
      }

    },

    
    /*microCMSからメニューを取得 */
    async getDrink( { commit }) {
      try {
        // const res = await axios.get('/api/microCms/getMenu');
        // console.log('hi res')
        // console.log(res);
        // return res.data;
        const res = await axios.get('/api/microCms/getDrink');
            console.log({res});
            return res.data;
        

      } catch(e) {
        commit('setApiErrorCode', 'failure')
        console.log(e);
      }

    },

    /* ルーティングテスト */
    async routingTest({ commit }, payload) {
      try {
        console.log('routingTest');
        const res = await axios.get('/api/common/routingTest', {params: payload});
        console.log(res);
        return res.data;

      } catch(e) {
        commit('setApiErrorCode', 'failure')
        console.log(e);
      }
    },



  },
  modules: {
  }
})
