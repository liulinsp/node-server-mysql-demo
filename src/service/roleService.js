/**
 * 角色 Service
 */
const { execute, executeTransaction } = require('../db/execute');
const RoleDao = require('../dao/roleDao');

class RoleService {
    static async findRoles() {
        return await execute(RoleDao.queryRoles);
    }

    static async findRoleById(id) {
        return await execute(RoleDao.queryRoleById, id);
    }
}

module.exports = RoleService;
