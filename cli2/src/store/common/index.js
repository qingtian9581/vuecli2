// import actions from './actions.js';
// import mutations from './mutations.js';
// import getters from './getters.js';
import Lockr from 'lockr'

let state = {
    examinfo: null
}
let mutations = {
    setExaminfo(state, examinfo) {
        console.log(1)
        state.examinfo = examinfo;
        Lockr.set('examinfo', examinfo);
    }
}
// let actions = {
//     setExaminfo: ({ commit }, param) => commit('setExaminfo', { examinfo: param })
// }
export default {
    state,
    // actions,
    mutations,
    // getters
}