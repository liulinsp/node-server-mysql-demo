/**
 * 用户 Controler
 */
const UserService = require('../service/userService');

class UserControler {
    /**
     * 获取所有用户
     * @param ctx 上下文
     * @return {Promise.<Array<User>>}
     */
    static async getUsers (ctx) {
        const users = await UserService.findUsers();
        ctx.body = users;
    }

    /**
     * 根据ID获取所有用户
     * @param ctx 上下文
     * @return {Promise.<User>}
     */
    static async getUserById (ctx) {
        // 用户ID
        const id = ctx.params.id;
        // 是否包含用户角色信息，如果withRoles 为 "1" 表示需要包含角色信息
        const withRoles = ctx.query.withRoles;

        let user;
        if (withRoles === '1') {
            user = await UserService.findUserWithRoles(id);
        } else {
            user = await UserService.findUserById(id);
        }
        if (user) {
            ctx.body = user;
        } else {
            ctx.body = {
                code: 1004,
                msg: '用户不存在!'
            }
        }
    }

    /**
     * 更新用户的角色
     * @param ctx
     * @return {Promise.<void>}
     */
    static async updateUserRoleRelations (ctx) {
        const userId = ctx.params.userId;
        const roleIds = ctx.request.body.roleIds;

        await UserService.updateUserRoleRelations(userId, roleIds);
        ctx.body = {
            msg: '操作成功'
        };
    }
}

module.exports = UserControler;
