const redis = require('redis');
const config = require('./config');

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'redis-example' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console()
  ]
});

logger.info('Main has started');
const client = redis.createClient({
  host: config.redis.host,
  port: config.redis.port
});

client.on('error', (error) => {
  logger.error(error);
});

client.keys('*', (err, resp) => {
  if(err !== null){
    logger.error(err);
    return;
  }
  logger.info({ keys: resp });
});

client.hgetall('task0', redis.print);
client.hgetall('task0', (err, value) => {
  if(err !== null){
    logger.error(err);
    return;
  }
  logger.info({ task: value });
});
