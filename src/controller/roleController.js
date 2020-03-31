/**
 * 角色 Controler
 */
const RoleService = require('../service/roleService');

class RoleController {

    static async getRoles (ctx) {
        const roles = await RoleService.findRoles();
        ctx.body = roles;
    }

    static async getRoleById (ctx) {
        const id = ctx.params.id;
        const role = await RoleService.findRoleById(id);
        ctx.body = role;
    }
}

module.exports = RoleController;
