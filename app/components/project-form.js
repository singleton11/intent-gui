import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service('-routing'),
  actions: {
    save(changeset) {
      changeset.save().then((record) => {
        this.get('router').transitionTo('projects.project.show', [record.id]);
      }).catch(() => {
        alert('Server error');
      });
    }
  }
});
