# Apache Kafka Quick Start Guide 🚀

This guide helps you set up and run an Apache Kafka environment using Docker and Node.js.

---

## 🎯 Prerequisites
Ensure you have the following installed on your system:
- **Docker** 🐳 (For running Kafka & Zookeeper containers)
- **Node.js & Yarn** (For running Kafka client scripts)

---

## 🛠️ Setup & Run Kafka

### 1️⃣ Start Zookeeper Container
Zookeeper manages the metadata for Kafka. Run the following command to start it and expose port **2181**:
```sh
docker run -p 2181:2181 zookeeper
```

### 2️⃣ Start Kafka Container
Now, start the Kafka container, exposing port **9092**, and configure environment variables:
```sh
docker run -p 9092:9092 \
    -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
    confluentinc/cp-kafka
```
> 🔹 Replace `<PRIVATE_IP>` with your system's local/private IP address.

---

## 🚀 Running Kafka Client Scripts

### 📌 Install Dependencies
Ensure all required dependencies are installed:
```sh
yarn install
```

### 🛠️ Create a Kafka Topic
Run the following command to create a topic:
```sh
node admin.js
```

### ✨ Produce Data
To send messages to Kafka:
```sh
node producer.js
```

### 🎧 Consume Data
To receive messages from Kafka:
```sh
node consumer.js user-1
```
or
```sh
node consumer.js user-2
```

---

## 🎥 Credits & Resources
Thanks to **Piyush Garg** for creating this amazing Apache Kafka Crash Course! 🎉

📺 Watch the full tutorial here: [Apache Kafka Crash Course](https://www.youtube.com/watch?v=ZJJHm_bd9Zo)

---

📝 **Happy Coding! 🚀**

