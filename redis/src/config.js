const config = {
  redis: {
    host: (process.env.REDIS_HOST !== undefined ? process.env.REDIS_HOST : '127.0.0.1'),
    port: (process.env.REDIS_PORT !== undefined ? process.env.REDIS_PORT : 6379)
  }
};

module.exports = config;
