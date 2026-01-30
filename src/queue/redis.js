// src/queue/redis.js
import { createClient } from "redis";

export const redis = createClient({
  url: "redis://localhost:6379",
});

await redis.connect();

export async function enqueue(event) {
  await redis.lPush("events", event);
}

export async function dequeue() {
  return redis.rPop("events");
}
