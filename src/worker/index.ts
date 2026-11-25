// Worker entrypoint (railway.worker.toml). Placeholder: keeps the process alive and logs a heartbeat.
// Real queues (BullMQ) attach here once REDIS_URL and the job processors exist.
console.log("[worker] started");
const timer = setInterval(() => console.log("[worker] heartbeat"), 60_000);
for (const sig of ["SIGINT", "SIGTERM"] as const) {
  process.on(sig, () => {
    clearInterval(timer);
    console.log(`[worker] ${sig}, exiting`);
    process.exit(0);
  });
}
