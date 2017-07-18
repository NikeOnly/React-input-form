import {observable, computed} from 'mobx';

class Store {
  @observable value = '';

  @computed get dobuledValue() {
    return this.value === '' ? '' : this.value * 2;
  }

  @computed get squaredValue() {
    return this.value === '' ? '' : this.value * this.value;
  }
}

export const userNumberStore = new Store;
