import express from "express";
import next from "next";
import routes from "./routes";

const PORT = process.env.PORT || 8000 ;
const dev = process.env.NODE_ENV !== 'production';
console.log(dev)
const app = next({ dev : true });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.listen(PORT, () => {
        console.log(`> Ready on ${PORT}`);
      });

    server.use("/api", routes(server));

    server.get("*", (req: any, res: any) => {
      return handle(req, res);
    });

    
  })
  .catch((ex: any ) => {
    console.error(ex.stack);
    process.exit(1);
  });