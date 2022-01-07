import express from "express";
import type { Express } from "express-serve-static-core";
const router = express.Router();

function routes(app: Express) {
  router.get("/", (req, res) => {
    res.end("We made it! And it's great");
  });
  router.get("/about", (req, res) => {
    res.end("nothing interesting");
  });
  return router;
};

export default routes;