import Vue from 'vue'
import Vuex from 'vuex'
import Lockr from 'lockr'
Vue.use(Vuex)
import common from './common'

let store = new Vuex.Store({
    modules: {
        common
    },
});
for (let m in store.state) {
    for (let key in store.state[m]) {
        let data;
     
        data = Lockr.get(key)
        if (data) {
            store.state[m][key] = data
        }
    }
}
export default store