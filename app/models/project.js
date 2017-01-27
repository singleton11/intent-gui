import DS from 'ember-data';

export default DS.Model.extend({
  created: DS.attr(),
  modified: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
});
