import express from "express";
import type { Express } from "express-serve-static-core";
import MailSender from "../Utils/MailSender";
const router = express.Router();

function routes(app: Express) {
  router.get("/", (req, res) => {
    res.end("Welcome to the depth of the ocean");
  });

  router.post("/message", (req, res) => {
      console.log(req.body)
      const mail = new MailSender("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");
      mail.sendMail(req.body.firstName, req.body.email, req.body.message)
        .then(()=> res.status(200).json({ sender: req.body.firstName }) )
        .catch(()=> res.status(400))
  });

  return router
}



export default routes