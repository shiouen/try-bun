import Router from "koa-router";

const router = new Router();

router.get("/", async (ctx, next) => {
    ctx.body = "hello world"
    await next()
})


export { router };
