export default () => ({
  port: 3000,
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/nestjs-api',
  },
});