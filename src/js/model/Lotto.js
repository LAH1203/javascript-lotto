import { RULES } from '../constants/index.js';
import { pickLottoNumber } from '../util/common.js';

export default class Lotto {
  constructor() {
    this.init();
  }

  init() {
    this.numberList = pickLottoNumber(RULES.LOTTO_COUNT);
  }

  setList(numberList) {
    this.numberList = numberList;
  }

  getList() {
    return this.numberList;
  }
}
