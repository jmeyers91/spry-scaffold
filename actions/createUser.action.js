module.exports = ({ models }) =>
  async function createUser({ email }) {
    const { User } = models;
    return User.query().insert({ email });
  };
