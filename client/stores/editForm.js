import { observable, action, runInAction, computed } from 'mobx'

class editForm {
  @observable currentRecord = {};
  @computed get formConfig() {
    let result = [];
    const { currentRecord } = this;
    for(let [key, value ] of Object.entries(currentRecord)) {
      const obj = {
        label: key,
        value: value,
      };
      result.push(obj)
    }
    return result;
  }
  @action setCurrentRecord = record => {
    console.log('hello', record)
    this.currentRecord = record;
  }
};

export default editForm;