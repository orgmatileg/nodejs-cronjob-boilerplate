const express = require("express");
const cronjob = require("node-cron");

app = express();

cron.schedule("0 0 */2 * * *", async () => {
  console.log("Print setiap 2 jam");
});
