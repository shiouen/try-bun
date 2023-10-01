import Koa from 'koa';
import logger from "koa-logger";

import { router } from "./api/router.ts";

async function main() {
    const app = new Koa();

    app.use(logger());

    app.use(router.routes());
    app.use(router.allowedMethods());

    app.listen(3000, () => {
        console.log(router.stack.map(i => i.path));
        console.log("server started");
    });
}

await main();
