import Vue from 'vue'
import Vuex from 'vuex'
import { User } from '@/store/modules/UserModule'

Vue.use(Vuex)

export interface IRootState {
  userModule: User
}

export default new Vuex.Store<IRootState>({})
