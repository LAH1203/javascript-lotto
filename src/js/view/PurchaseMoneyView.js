export default class PurchaseMoneyView {
  constructor() {
    this.initDom();
  }

  initDom() {
    this.form = document.getElementById('purchase-money-form');
    this.input = document.getElementById('purchase-money-input');
  }

  addSubmitEvent(submitHandler) {
    this.form.addEventListener('submit', e => {
      e.preventDefault();

      const purchaseMoney = Number(this.input.value);
      submitHandler(purchaseMoney);
    });
  }
}
