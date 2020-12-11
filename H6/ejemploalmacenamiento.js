var Etcd = require('node-etcd');

etcd = new Etcd("127.0.0.1:2379");

etcd.set("clave", "creo que esto es el valor");

etcd.get("clave", console.log);

etcd.get("clave_nueva", console.log);