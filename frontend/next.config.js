module.exports = {
  async rewrites() {
    return [
      {
        source: '/projects',
        destination: `${process.env.BACKEND_URL}/projects/`,
      },
    ];
  },
};