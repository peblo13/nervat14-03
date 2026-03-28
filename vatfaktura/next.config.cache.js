
const config = {
  webpack: (config, { isServer }) => {
    config.cache = false;
    return config;
  },
};

module.exports = config;
