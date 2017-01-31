import DRFAdapter from './drf';

import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DRFAdapter.extend(DataAdapterMixin, {
  host: 'http://localhost:8000/api',
  namespace: 'projects',
  authorizer: 'authorizer:token'
});
