import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('results', results));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      Ember.run.debounce(this, filter, filterInputValue, 1000);
    },
  }

});
function filter(filterInputValue){
  let filterAction = this.get('filter');
  filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
}