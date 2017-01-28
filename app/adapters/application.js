import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:8000/api',
  namespace: 'projects',
  buildURL: function (type, id, record) {
    return this._super(type, id, record) + '/';
  },
});
