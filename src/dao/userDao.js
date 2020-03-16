/**
 * 用户 Dao
 */
const { query, queryOne, insert, del } = require('../db/curd');

class UserDao {
    /**
     * 根据用户ID查询用户信息
     * @param connection 数据库连接
     * @param id 用户ID
     * @return {Promise.<User>} 用户信息
     */
    static async queryUserById (connection, id) {
        const sql = `SELECT user.id, user.account, user.name, user.email, user.phone,
                          user.birthday, user.enable, user.deleteFlag, user.creator,
                          user.createTime, user.updater, user.updateTime
                   FROM sys_user user
                   WHERE user.id = ?`;
        const user = await queryOne(connection, sql, id);
        return user;
    }

    /**
     * 查询所有用户信息
     * @param connection 数据库连接
     * @return {Promise.<Array>} 用户信息数组
     */
    static async queryUsers (connection) {
        const sql = `SELECT user.id, user.account, user.name, user.email, user.phone,
                          user.birthday, user.enable, user.deleteFlag, user.creator,
                          user.createTime, user.updater, user.updateTime
                   FROM sys_user user
                   WHERE user.deleteFlag = ?`;
        const list = await query(connection, sql, [0]);
        // await new Promise( resolve => setTimeout(() => resolve(), 5000));
        return list;
    }

    /**
     * 根据用户ID查询
     * @param connection
     * @param userId
     * @return {Promise.<Array<String>>}
     */
    static async queryUserRoleIds (connection, userId) {
        const querySql = `SELECT roleId, userId FROM sys_role_users_user WHERE userId = ?`;
        const list = await query(connection, querySql, userId);
        const roleIds = list.map(item => item.roleId);
        return roleIds;
    }

    /**
     * 增加用户与角色的关联关系
     * @param connection 数据库连接
     * @param userId 用户ID
     * @param roleIds 角色ID数组
     * @return {Promise.<void>}
     */
    static async insertUserRoleRelations (connection, userId, roleIds) {
        const sql = `INSERT INTO sys_role_users_user(roleId, userId) VALUES (?, ?)`;
        let i, roleId;
        for (i = 0; i < roleIds.length; i++) {
            roleId = roleIds[i];
            await db.insert(connection, sql, [ roleId, userId ], true);
        }
    }

    /**
     * 删除用户与角色的关联关系
     * @param connection 数据库连接
     * @param userId 用户ID
     * @param roleIds 角色ID数组
     * @return {Promise.<void>}
     */
    static async deleteUserRoleRelations (connection, userId, roleIds) {
        const sql = `DELETE FROM sys_role_users_user WHERE roleId = ? AND  userId = ?`;
        let i, roleId;
        for (i = 0; i < roleIds.length; i++) {
            roleId = roleIds[i];
            await del(connection, sql, [roleId, userId]);
        }
    }
}

module.exports = UserDao;