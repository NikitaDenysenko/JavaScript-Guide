/* Liskov Substitution Principle  */
//Подклассы должны дополнять, а не замещать поведение базового класса
//All parent classes can be replaced with thier child classes, and code won't break

class Database {
    connect() {}
    read() {}
    write() {}
}

class SQLDataBase extends Database {
    connect() {}
    read() {}
    write() {}
    joinTables() {}
}
class NoSQLDataBase extends Database {
    connect() {}
    read() {}
    write() {}
    createIndex() {}
}

class MySQLDataBase extends SQLDataBase {
    connect() {}
    read() {}
    write() {}
    joinTables() {}
}

class MongoDatabase extends NOSQLDatabase {
    connect() {}
    read() {}
    write() {}
    createIndex() {}
    mergeDocuments() {}
}

function startApp(database) {
    database.connect()
}
startApp(new MongoDatabase())
startApp(new MySQLDatabase())
