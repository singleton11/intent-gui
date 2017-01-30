import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    confirm() {
      $('#confirm').modal('show');
    },
    remove() {
      $('#confirm').modal('hide');
      this.get('model').destroyRecord().then(() => {
        this.transitionToRoute('projects');
      })
    },
  },
});
