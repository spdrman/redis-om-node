export type ReturnsArray = "ACL CAT" | "ACL GETUSER" | "ACL LIST" | "ACL USERS" | "BITFIELD" | "BITFIELD_RO" | "BLMPOP" | "BLPOP" | "BRPOP" | "BZMPOP" | "BZPOPMAX" | "BZPOPMIN" | "CLIENT TRACKINGINFO" | "CLUSTER GETKEYSINSLOT" | "CLUSTER LINKS" | "CLUSTER SHARDS" | "CLUSTER SLOTS" | "COMMAND DOCS" | "COMMAND GETKEYS" | "COMMAND GETKEYSANDFLAGS" | "COMMAND INFO" | "COMMAND LIST" | "CONFIG GET" | "EXEC" | "FUNCTION LIST" | "FUNCTION STATS" | "GEOHASH" | "GEOPOS" | "GEORADIUS" | "GEORADIUS_RO" | "GEOSEARCH" | "HELLO" | "HGETALL" | "HKEYS" | "HMGET" | "HVALS";

export type ReturnsString = "ACL DRYRUN" | "ACL GENPASS" | "ACL LOAD" | "ACL SAVE" | "ACL SETUSER" | "ACL WHOAMI" | "ASKING" | "AUTH" | "BGREWRITEAOF" | "BGSAVE" | "BLMOVE" | "BRPOPLPUSH" | "CLIENT CACHING" | "CLIENT GETNAME" | "CLIENT INFO" | "CLIENT LIST" | "CLIENT NO-EVCICT" | "CLIENT PAUSE" | "CLIENT REPLY" | "CLIENT SETNAME" | "CLIENT TRACKING" | "CLIENT UNPAUSE" | "CLUSTER ADDSLOTS" | "CLUSTER ADDSLOTSRANGE" | "CLUSTER BUMPEPOCH" | "CLUSTER DELSLOTS" | "CLUSTER DELSLOTSRANGE" | "CLUSTER FAILOVER" | "CLUSTER FLUSHSLOTS" | "CLUSTER FORGET" | "CLUSTER INFO" | "CLUSTER MEET" | "CLUSTER MYID" | "CLUSTER NODES" | "CLUSTER REPLICAS" | "CLUSTER REPLICATE" | "CLUSTER RESET" | "CLUSTER SAVECONFIG" | "CLUSTER SET-CONFIG-EPOCH" | "CLUSTER SETSLOT" | "CLUSTER SLAVES" | "CONFIG RESETSTAT" | "CONFIG REWRITE" | "CONFIG SET" | "DISCARD" | "DUMP" | "ECHO" | "FAILOVER" | "FLUSHALL" | "FLUSHDB" | "FUNCTION DELETE" | "FUNCTION DUMP" | "FUNCTION FLUSH" | "FUNCTION KILL" | "FUNCTION LOAD" | "FUNCTION RESTORE" | "GEODIST" | "GET" | "GETDEL" | "GETEX" | "GETRANGE" | "GETSET" | "HGET" | "HINCRBYFLOAT" | "HMSET" | "HSCAN" | "SCAN" | "SSCAN" | "ZSCAN";

export type ReturnsNumber = "ACL DELUSER" | "APPEND" | "BITCOUNT" | "BITOP" | "BITPOS" | "CLIENT GETREDIR" | "CLIENT ID" | "CLIENT UNBLOCK" | "CLUSTER COUNT-FAILURE-REPORTS" | "CLUSTER COUNTKEYINSLOT" | "CLUSTER KEYSLOT" | "COMMAND COUNT" | "COPY" | "DBSIZE" | "DECR" | "DECRBY" | "DEL" | "EXISTS" | "EXPIRE" | "EXPIREAT" | "EXPIRETIME" | "GEOADD" | "GEOSEARCHSTORE" | "GETBIT" | "HDEL" | "HEXISTS" | "HINCRBY" | "HLEN" | "HSET" | "HSETNX" | "HSTRLEN";

// ACL LOG count returns ARR; ACL LOG RESET returns string
// CLIENT KILL returns string but returns number if called with the filter/value format
// HRANDFIELD returns string without the count argument and array if count is passed