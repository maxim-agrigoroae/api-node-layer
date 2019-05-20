/**
 * Example service layer.
 *
 * Represents a piece of business logic for the module.
 * @exports {Any}
 */

module.exports = {
  async list(query) {
    // DB query ..
    return {};
  },

  async getById(id) {
    // DB query ..
    // or
    const result = await this.list({ id })

    return result;
  },

  async create(data) {
    // DB query...

    return {}; // created
  },

  async update(data) {
    // DB query...

    return {}; // updated
  },

  async destroy(id) {
    // DB query...

    return {}; // destroyed
  },

  async upload(file) {
    return {}; // uploaded
  }
}
