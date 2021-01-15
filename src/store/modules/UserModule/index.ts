import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators'
import store from '@/store'

export interface IUserModule {
  name: string
}

@Module({ dynamic: true, namespaced: true, name: 'userModule', store })
export class User extends VuexModule implements IUserModule {
  public name = ''

  @Mutation
  public setName(newName: string): void {
    this.name = newName
  }

  @Action
  public updateName(newName: string): void {
    this.context.commit('setName', newName)
  }

  get nameUpperCase() {
    return this.name.toUpperCase()
  }
}

export const UserModule = getModule(User)
