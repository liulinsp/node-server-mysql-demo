/**
 * 用户 Dao
 */
const { query, queryOne } = require('../db/curd');

class RoleDao {
    /**
     * 根据角色ID查询角色信息
     * @param connection 数据库连接
     * @param id 角色ID
     * @return {Promise.<Role>}
     */
    static async queryRoleById (connection, id) {
        const sql = `SELECT role.id, role.name, role.enable, role.deleteFlag,
                            role.createTime, role.updateTime
                   FROM sys_role role
                   WHERE role.id = ?`;
        const role = await queryOne(connection, sql, id);
        return role;
    }

    /**
     * 查询所有角色信息
     * @param connection
     * @return {Promise.<Array<Role>>}
     */
    static async queryRoles (connection) {
        const sql = `SELECT role.id, role.name, role.enable, role.deleteFlag,
                            role.createTime, role.updateTime
                   FROM sys_role role`;
        const list = await query(connection, sql);
        return list;
    }

    /**
     * 根据用户ID查询该用户的所有角色信息
     * @param connection 数据库连接
     * @param userId 用户ID
     * @return {Promise.<Array<Role>>}
     */
    static async queryRolesByUserId (connection, userId) {
        const sql = `SELECT role.id, role.name, role.enable, role.deleteFlag,
                            role.createTime, role.updateTime
                   FROM sys_role role
                   LEFT OUTER JOIN sys_r_user_role r
                   ON role.id = r.roleId
                   WHERE r.userId = ?`;
        const roles = await query(connection, sql, userId);
        return roles;
    }
}

module.exports = RoleDao;