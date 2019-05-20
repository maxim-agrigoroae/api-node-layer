/**
 * Represents an API executive interface for current module.
 *
 * @exports {any} Collection of public methods.
 */

const ExampleBusinessService = require('./example.business');

module.exports = {
  list: (query) => {
    return ExampleBusinessService.list(query);
  },

  find: (id) => {
    return ExampleBusinessService.getById(id);
  },

  /**
   * Exports upload business logic..
   */
  upload: (file) => {
    return ExampleBusinessService.upload(file);
  }
}
