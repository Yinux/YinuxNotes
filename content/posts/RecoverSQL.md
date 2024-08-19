---
title: 'sql_server_suspend_recover'
date: 2024-08-19T22:19:08+08:00
draft: false
categories:
- SQL
tags:
- SQL
---

# SQL Server 置疑后的修复

```sql
-- 设置数据库为紧急模式
alter database AIS20140312133253 set emergency 
-- 设置单用户模式
alter database AIS20140312133253 set single_user 
-- 重建日志文件
alter database  AIS20140312133253  Rebuild Log on
(name=AIS20140312133253_log,filename='E:\data\AIS20140312133253_log2.ldf')
-- 恢复为多用户模式
alter database AIS20140312133253 set multi_user
-- 检查数据库
dbcc checkdb(AIS20140312133253)

```

