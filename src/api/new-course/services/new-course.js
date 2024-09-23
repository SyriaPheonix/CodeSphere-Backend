'use strict';

/**
 * new-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-course.new-course');
