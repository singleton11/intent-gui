import Ember from 'ember';
import ProjectValidations from '../validations/project'

export default Ember.Component.extend({
  ProjectValidations,
  router: Ember.inject.service('-routing'),
  actions: {
    save(changeset) {
      changeset.validate().then(() => {
        if (changeset.get('isValid')) {
          changeset.save().then((record) => {
            this.get('router').transitionTo('projects.project.show', [record.id]);
          }).catch(() => {
            alert('Something goes wrong');
          });
        }
        else {
          $('#error').modal('show');
        }
      });
    }
  }
});
