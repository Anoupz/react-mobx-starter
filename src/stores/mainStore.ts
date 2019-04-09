import { observable } from 'mobx';

export class MainStore {
  @observable name = 'Anoop';
}

export default new MainStore();
