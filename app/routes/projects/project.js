import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: {},
  model(params) {
    return this.store.findRecord('project', params.id);
  },
  afterModel(model) {
    this.set('breadCrumb', {
      title: model.get('title'),
    });
  }
});
