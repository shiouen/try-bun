import path from "node:path";

import Router from "koa-router";

import { walk } from "../utils/fs.ts";

const router = new Router();

const root = import.meta.dir;
const files = await walk(root)

for (const file of files) {
    const relativePath = file.replace(root, "")
    const routerPath = path.dirname(relativePath)

    if (routerPath == "/") continue

    const routerModule = require(file);

    router.use(routerPath, routerModule.router.routes())
}


export { router };
