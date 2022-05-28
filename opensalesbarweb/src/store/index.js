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
        const res = await axios.get('/api/getSignedUrl', {params: payload});
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
    }

  },
  modules: {
  }
})
