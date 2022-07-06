import axios from 'axios'
import { createStore } from 'vuex'
//import axios from 'axios'

export default createStore({
  state: {
    /* APIエラー判定用 */
    apiErrorCode: null,

    /* 管理者判定 */
    isAdmin: false,
  },
  mutations: {
    setApiErrorCode(state, payload) {
      state.apiErrorCode = payload;
    },
    setAuth(state, payload) {
      state.isAdmin = payload;
    }
  },
  actions: {
    /* S3署名付きURLの取得 */
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
    
    /* S3から削除 */
    async s3Delete({ commit }, payload) {
      try {
        console.log('s3delete');
        const res = await axios.delete(payload.url);
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
        console.log({res});
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
        console.log({res});
        return res.data;

      } catch(e) {
        commit('setApiErrorCode', 'failure')
        console.log(e);
      }
    },

    /*microCMSからメニューを取得 */
    async getMenu( { commit }, payload) {
      try {
        console.log(payload);
        const res = await axios.get('/api/microCms/getMenu', {params: payload});
            console.log({res});
            return res.data;

      } catch(e) {
        commit('setApiErrorCode', 'failure')
        console.log(e);
      }

    },

    /* microCMSからメニューを削除 */
    async deleteMenu({ commit }, payload) {
      try {
        console.log('deleteMenu', payload);
        const res = await axios.delete('/api/microCms/deleteMenu', {params: payload});
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
