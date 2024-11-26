'use strict';

exports.config = {
  app_name: ['Multivendor Ecommerce App'], 
  license_key: process.env.NEW_RELIC,    
  logging: {
    level: 'info',                   
  },
  distributed_tracing: {
    enabled: true,                
  },
};
