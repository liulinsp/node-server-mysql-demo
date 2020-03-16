/**
 * 路由
 */
const KoaRouter = require('koa-router');
const UserController = require('./controler/userControler');
const RoleController = require('./controler/roleControler');

const router = new KoaRouter();
router.get('/', (ctx, next) => {
    console.log('do welcome');
    ctx.body = {
        msg: 'Welcome'
    }
});

// 获取所有用户
// http://localhost:3000/users/
router.get('/users', UserController.getUsers);

// 获取指定ID的用户
// http://localhost:3000/users/3571a123-0454-49b4-a2bc-8b30a37f0b14
// http://localhost:3000/users/3571a123-0454-49b4-a2bc-8b30a37f0b14?withRoles=1
router.get('/users/:id', UserController.getUserById);

// 更新指定用户的角色列表
// http://localhost:3000/users/3571a123-0454-49b4-a2bc-8b30a37f0b14/roles
// { "roleIds": [ "7e8627d9-dc78-414b-b9ca-233911f8d7ec", "21be076f-f668-4880-8812-99b56bc56413" ] }
router.put('/users/:userId/roles', UserController.updateUserRoleRelations);

// 获取所有角色
// http://localhost:3000/roles/
router.get('/roles/', RoleController.getRoles);
// 获取指定ID的角色
// http://localhost:3000/roles/21be076f-f668-4880-8812-99b56bc56413
router.get('/roles/:id', RoleController.getRoleById);

// router.use('/users', user.routes(), user.allowedMethods());

module.exports = router;
