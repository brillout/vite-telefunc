import express from "express";
import { createPageRender } from "vite-plugin-ssr";
import { createTelefuncCaller } from "telefunc/server";

const isProduction = process.env.NODE_ENV === "production";
const root = `${__dirname}/..`;

startServer();

async function startServer() {
  const app = express();

  let viteDevServer;
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`, { index: false }));
  } else {
    const vite = require("vite");
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: true },
    });
    app.use(viteDevServer.middlewares);
  }

  const callTelefunc = createTelefuncCaller({ viteDevServer, isProduction, root });
  app.all("*", async (req, res, next) => {
    const url = req.originalUrl;
    const method: string = req.method;
    //const headers: Record<string, string> = req.headers; // TODO
    const headers: Record<string, string> = {}
    const body: string = req.body
    const ctx = {
      url,
      method,
      headers,
      body,
    };
    const result = await callTelefunc(ctx);
    // console.log('rrr', url, method, result)
    if (!result) return next();
    res.status(result.statusCode).send(result.body);
  });

  const renderPage = createPageRender({ viteDevServer, isProduction, root });
  app.get("*", async (req, res, next) => {
    const url = req.originalUrl;
    const pageContext = {
      url,
    };
    const result = await renderPage(pageContext);
    if (result.nothingRendered) return next();
    res.status(result.statusCode).send(result.renderResult);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
