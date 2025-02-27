1. Start Zookeper Container and expose PORT 2181.
    docker run -p 2181:2181 zookeeper

2. Start Kafka Container, expose PORT 9092 and setup ENV variables.
    docker run -p 9092:9092 ^
    -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 ^
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 ^
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 ^
    confluentinc/cp-kafka

3. yarn install
4. node admin.js [for create topic]
5. node producer.js [for produce data]
6. node consumer.js user-1/2 [for consume data]

Thanks to Piyush Garg for creating this amazing Apache Kafka Crash Course.
https://www.youtube.com/watch?v=ZJJHm_bd9Zo

