/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : server-demo

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 16/03/2020 16:44:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `deleteFlag` tinyint(0) NOT NULL DEFAULT 0 COMMENT '是否删除',
  `creator` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '创建者',
  `createTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updater` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '更新者',
  `updateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色ID',
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色名称',
  `enable` tinyint(0) NULL DEFAULT 1 COMMENT '是否可用',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (0, '3571a123-0454-49b4-a2bc-8b30a37f0b14', '2020-03-12 16:29:36.504230', '3571a123-0454-49b4-a2bc-8b30a37f0b14', '2020-03-12 16:29:36.504230', '21be076f-f668-4880-8812-99b56bc56413', '销售经理', 1);
INSERT INTO `sys_role` VALUES (0, '3571a123-0454-49b4-a2bc-8b30a37f0b14', '2020-03-12 17:30:27.833390', '3571a123-0454-49b4-a2bc-8b30a37f0b14', '2020-03-12 17:30:27.833390', '7e8627d9-dc78-414b-b9ca-233911f8d7ec', '销售主管', 1);

-- ----------------------------
-- Table structure for sys_role_users_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_users_user`;
CREATE TABLE `sys_role_users_user`  (
  `roleId` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userId` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`roleId`, `userId`) USING BTREE,
  INDEX `IDX_517d92cac28956e196ded56349`(`roleId`) USING BTREE,
  INDEX `IDX_37a82dfc2ca5d670f47c6e0e99`(`userId`) USING BTREE,
  CONSTRAINT `FK_37a82dfc2ca5d670f47c6e0e997` FOREIGN KEY (`userId`) REFERENCES `sys_user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `FK_517d92cac28956e196ded563497` FOREIGN KEY (`roleId`) REFERENCES `sys_role` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;


-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `deleteFlag` tinyint(0) NOT NULL DEFAULT 0 COMMENT '是否删除',
  `creator` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '创建者',
  `createTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updater` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '更新者',
  `updateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户ID',
  `account` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '账号',
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '姓名',
  `email` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '邮箱',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机号码',
  `birthday` date NULL DEFAULT NULL COMMENT '生日',
  `enable` tinyint(0) NULL DEFAULT 1 COMMENT '是否可用',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (0, '3571a123-0454-49b4-a2bc-8b30a37f0b14', '2020-02-13 17:38:51.000000', '3571a123-0454-49b4-a2bc-8b30a37f0b14', '2020-02-13 17:57:16.000000', '3571a123-0454-49b4-a2bc-8b30a37f0b14', 'admin', '管理员', 'admin@mymail.com', '18688886666', NULL, 1);
INSERT INTO `sys_user` VALUES (0, '3571a123-0454-49b4-a2bc-8b30a37f0b14', '2020-03-06 16:13:46.377038', '3571a123-0454-49b4-a2bc-8b30a37f0b14', '2020-03-06 16:13:46.377038', '5f52bf67-d50e-42b1-9c04-d0bdb8f7086c', 'lixh', '李向华', 'lixianghua@mymail.com', '18688886666', '1990-10-10', 1);

SET FOREIGN_KEY_CHECKS = 1;
