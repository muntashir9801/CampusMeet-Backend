const Queue = require('bull');
const redisConfig = require('./redisConfig');

const statusQueue = new Queue('status', {
    redis: redisConfig
});

const otpQueue = new Queue('otp', {
    redis: redisConfig
});

const userQueue = new Queue('user', {
    redis: redisConfig
});

const imageQueue = new Queue('image', {
    redis: redisConfig
});

const friendQueue = new Queue('friend', {
    redis: redisConfig
});


module.exports = {
    statusQueue,
    otpQueue,
    userQueue,
    imageQueue,
    friendQueue
};
