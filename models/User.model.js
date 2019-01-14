module.exports = ({ Model }) =>
  class User extends Model {
    static get tableName() {
      return 'user';
    }

    static get jsonSchema() {
      return {
        type: 'object',
        required: [],
        properties: {
          id: { type: 'integer' },
          email: { type: 'string' },
        },
      };
    }

    static get relationMappings() {
      return {};
    }
  };
