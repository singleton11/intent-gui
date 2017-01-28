import Ember from 'ember';

export default Ember.Controller.extend({
  newModel: {},
  actions: {
    save() {
      this.store.createRecord('project', this.get('newModel')).save();
    }
  }
});
