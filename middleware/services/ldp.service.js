const { LdpService, DocumentTaggerMixin } = require('@semapps/ldp');
const urlJoin = require('url-join');
const ontologies = require('../ontologies');
const CONFIG = require('../config');
const containers = require('../containers');

module.exports = {
  mixins: [LdpService, DocumentTaggerMixin],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    ontologies,
    containers: [
      {
        path: '/organizations',
        acceptedTypes: ['pair:Organization'],
        dereference: ['pair:hasLocation/pair:hasPostalAddress', 'petr:equipmentOffers'],
        disassembly: [{ path: 'petr:equipmentOffers', container:  process.env.SEMAPPS_HOME_URL + 'equipments' }]
      },
      {
        path: '/equipments',
        acceptedTypes: ['pair:Equipment'],
        dereference: ['petr:equipmentOfferedBy'],
        disassembly: [{ path: 'petr:equipmentOfferedBy', container:  process.env.SEMAPPS_HOME_URL + 'organizations' }]
      },
      '/',
      '/organizations',
      '/equipments',
      '/persons', 
      '/audiences',
      '/equipment-access-modalities',
      '/equipment-rates',
      '/equipment-types',
      '/labels',
      '/legal-status',
      '/networks',
      '/organization-types',
      '/sectors',
    ],
    defaultContainerOptions: {
      jsonContext: urlJoin(CONFIG.HOME_URL, 'context.json'),
      allowAnonymousEdit: true,
      allowAnonymousDelete: true
    }
  }
};
