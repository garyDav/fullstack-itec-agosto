## Conexion al contenedor

```bash
docker compose exec mongo bash
docker-compose exec mongo bash
```

## Conexion con mongosh

```bash
# Usuario y contraseña
mongosh -u root -p example
# Cadena de conexión [local]
mongosh "mongodb://root:example@localhost:27017/?authMechanism=DEFAULT&tls=false"
# MongoDB Atlas [nube]
mongosh "mongodb+srv://admin:example@mongodb101.wbxsnx8.mongodb.net/test"
```

## Comandos de mongosh

```bash
# Mostarar todas las bases de datos
show dbs;
# Ingresar a una base de datos
use local;
# Mostrar todas las colecciones
show collections;
```

## Scripts de mongodb

```bash
use('local')
db.usuarios.find()
```