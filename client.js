const { Kafka } = require("kafkajs");
require("dotenv").config();
 
exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: [process.env.KAFKA_ADVERTISED_LISTENERS],
});
