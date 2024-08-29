/* eslint-env node */

import jsonServer from "json-server";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";

// Convert __dirname to ES module equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const router = jsonServer.router("data/cities.json");
const middlewares = jsonServer.defaults();

// Serve frontend static files
app.use(express.static(path.join(__dirname, "dist")));

// Use json-server for API
app.use("/api", middlewares, router);

// Fallback to serving the frontend for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
