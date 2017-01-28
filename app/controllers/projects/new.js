import Ember from 'ember';

export default Ember.Controller.extend({
  newModel: {},
  actions: {
    save() {
      let record = this.store.createRecord('project', this.get('newModel'));
      record.save().then(() => {
        this.transitionToRoute('projects.project.show', record.id)
      })
    }
  }
});
