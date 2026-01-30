// src/worker/pool.js
import { dequeue } from "../queue/redis.js";
import { insertEvent } from "../db/postgres.js";

export function startWorkers(count) {
  for (let i = 0; i < count; i++) {
    processEvent();
  }
}

async function processEvent() {
  while (true) {
    const data = await dequeue();
    const event = JSON.parse(data);
    await insertEvent(event);
  }
}
