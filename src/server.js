/**
 * 服务入口文件
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const errorHandle = require('./middleware/errorHandle');
const router = require('./router');
const config = require('./config');

const app = new Koa()
    .use(bodyParser())
    .use(errorHandle())
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(config.port, () => {
    console.info(`Server running on port ${config.port}`);
});
