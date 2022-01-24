const sqlite3 = require('sqlite3').verbose();


function initialise() {
    // connects to a database named restaurants.sqlite
    const db = new sqlite3.Database('./restaurants.sqlite');

    try {
        db.serialize(function () { 

            console.log('creating table');

    
            // creates new tables
            db.run("CREATE TABLE RESTAURANTS (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imagelink TEXT)");
            db.run("CREATE TABLE MENUS (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, restaurant_id INT, FOREIGN KEY (restaurant_id) REFERENCES RESTAURANTS(id))");
            db.run("CREATE TABLE MENU_ITEMS (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL, menu_id INT, FOREIGN KEY (menu_id) REFERENCES MENUS(id))");
        });
    } finally {
        db.close();
        console.log('table created');
    }
}

module.exports = initialise;


initialise();