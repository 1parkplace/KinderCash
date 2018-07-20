module.exports = {
 
    "development": {
        "port"    : 3306,
        "username": "root",
        "password": "root",
        "database": "kindercash",
        "host": "locatlhost",
        "dialect": "mysql",
        multipleStatements: true
    },
   
    "test": {
        "username": "kgmp8opfjhenfehv",
        "password": "j3ow1yvokh9g9df3",
        "database": "y3jievdkq4ngg4kf",
        "host": "wiad5ra41q8129zn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        "dialect": "mysql"
    },
   
    "production": {
       "username": "kgmp8opfjhenfehv",
       "password": "j3ow1yvokh9g9df3",
       "database": "y3jievdkq4ngg4kf",
       "host": "wiad5ra41q8129zn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
       "dialect": "mysql",
       multipleStatements: true
    },

    'connection': {
        port:3306,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'kindercash',
        multipleStatements: true
    },
    'database': 'kindercash',
    'users_table': 'users'
   
   };