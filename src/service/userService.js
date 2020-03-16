/**
 * 用户 Service
 */
const { execute, executeTransaction } = require('../db/execute');
const UserDao = require('../dao/userDao');
const RoleDao = require('../dao/roleDao');

class UserService {
    static async findUsers () {
        return await execute(UserDao.queryUsers);
    }

    static async findUserById (id) {
        return await execute(UserDao.queryUserById, id);
    }

    static async findUserWithRoles (id) {
        return await execute(async connection => {
            const user = await UserDao.queryUserById(connection, id);
            if (user) {
                user.roles = await RoleDao.queryRolesByUserId(connection, id);
            }
            return user;
        });
    }

    static async updateUserRoleRelations (userId, roleIds) {
        return await executeTransaction(async connection => {
            const oldRoleIds = await UserDao.queryUserRoleIds(connection, userId);
            const newRoleIds = roleIds || [];
            // 新增的角色数组
            const addList = [];
            // 移除的角色数组
            const removeList = [];
            newRoleIds.forEach(roleId => {
                if (oldRoleIds.indexOf(roleId) === -1) {
                    addList.push(roleId);
                }
            });
            oldRoleIds.forEach(roleId => {
                if (newRoleIds.indexOf(roleId) === -1) {
                    removeList.push(roleId);
                }
            });

            if (addList.length > 0) {
                await UserDao.insertUserRoleRelations(connection, userId, addList);
            }
            if (removeList.length > 0) {
                await UserDao.deleteUserRoleRelations(connection, userId, removeList);
            }
        });
    }
}

module.exports = UserService;
