/**
 *Module work with the database.
 * @module database
 */

var createDataBase = function(mysql){
       
    var connection = mysql.createConnection({
                    host: '127.0.0.1',
                    user: 'root',
                    password: '25ser1987r'});
    
    //CREATE SCHEMA 
    var createShema = "CREATE SCHEMA IF NOT EXISTS `coin_keeper` DEFAULT CHARACTER SET utf8;";

    //Table `currencies`
    var tableCurrencies = "CREATE TABLE IF NOT EXISTS `coin_keeper`.`currencies` ( `id` INT(11) NOT NULL AUTO_INCREMENT, `name` VARCHAR(45) NOT NULL, PRIMARY KEY (`id`)) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;";

    //Table `pictures`
    var tablePictures = "CREATE TABLE IF NOT EXISTS `coin_keeper`.`pictures`(`id` INT(11) NOT NULL AUTO_INCREMENT,`pictur_name` VARCHAR(100) NOT NULL,PRIMARY KEY (`id`)) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;";

    //Table `users`
    var tableUsers = "CREATE TABLE IF NOT EXISTS `coin_keeper`.`users` ( `iduser` INT(11) NOT NULL AUTO_INCREMENT, `name` VARCHAR(45) NULL DEFAULT NULL, `sname` VARCHAR(45) NULL DEFAULT NULL, `age` INT(11) NULL DEFAULT NULL,  `email` VARCHAR(45) NULL DEFAULT NULL, `password` VARCHAR(25) NULL DEFAULT NULL, PRIMARY KEY (`iduser`)) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;";

    //Table categories_profits`
    var tableCategoriesProfits = "CREATE TABLE IF NOT EXISTS `coin_keeper`.`categories_profits` ( `id` INT(11) NOT NULL AUTO_INCREMENT, `users_id` INT(11) NOT NULL, `picture_id` INT(11) NULL DEFAULT NULL, `currency_id` INT(11) NULL DEFAULT NULL,  `name_category` VARCHAR(45) NOT NULL,  `balance` DECIMAL(20,2) NULL DEFAULT '0.00',  `balance_UAH` DECIMAL(20,2) NULL DEFAULT '0.00',  PRIMARY KEY (`id`),  INDEX `users_id_idx` (`users_id` ASC),  INDEX `picture_id_idx` (`picture_id` ASC),  INDEX `currency_id_idx` (`currency_id` ASC),  CONSTRAINT `currency_id`    FOREIGN KEY (`currency_id`)    REFERENCES `coin_keeper`.`currencies` (`id`)    ON DELETE NO ACTION    ON UPDATE NO ACTION,  CONSTRAINT `picture_id`    FOREIGN KEY (`picture_id`)    REFERENCES `coin_keeper`.`pictures` (`id`)    ON DELETE NO ACTION    ON UPDATE NO ACTION,  CONSTRAINT `users_id`    FOREIGN KEY (`users_id`)    REFERENCES `coin_keeper`.`users` (`iduser`)    ON DELETE NO ACTION    ON UPDATE NO ACTION) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;";

    //Table category_expenses`
    var tableCategoryExpenses = "CREATE TABLE IF NOT EXISTS `coin_keeper`.`category_expenses` (  `id` INT(11) NOT NULL AUTO_INCREMENT,  `users_id` INT(11) NOT NULL,  `picture_id` INT(11) NOT NULL,  `currency_id` INT(11) NULL DEFAULT NULL,  `name_category` VARCHAR(45) NOT NULL,  `balance` DECIMAL(20,2) NULL DEFAULT '0.00',  `balance_UAH` DECIMAL(20,2) NULL DEFAULT '0.00',  PRIMARY KEY (`id`),  INDEX `users_id_idx` (`users_id` ASC),  INDEX `picture_id_ex_idx` (`picture_id` ASC),  INDEX `currency_id_idx` (`currency_id` ASC),  CONSTRAINT `currency_id_ex`   FOREIGN KEY (`currency_id`) REFERENCES `coin_keeper`.`currencies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT `picture_id_ex` FOREIGN KEY (`picture_id`) REFERENCES `coin_keeper`.`pictures` (`id`) ON DELETE NO ACTION  ON UPDATE NO ACTION, CONSTRAINT `users_id_ex` FOREIGN KEY (`users_id`) REFERENCES `coin_keeper`.`users` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;";

    //Table `course`
    var tableCourse = "CREATE TABLE IF NOT EXISTS `coin_keeper`.`course` (  `id` INT(11) NOT NULL AUTO_INCREMENT,  `currency_id` INT(11) NOT NULL,  `period` DATE NULL DEFAULT NULL,  `course` DECIMAL(10,4) NULL DEFAULT NULL,  PRIMARY KEY (`id`),  INDEX `id_idx` (`currency_id` ASC),  CONSTRAINT `id`    FOREIGN KEY (`currency_id`)    REFERENCES `coin_keeper`.`currencies` (`id`)    ON DELETE NO ACTION    ON UPDATE NO ACTION) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;";

    //Table `transaction_history`
    var tableTransactionHistory = "CREATE TABLE IF NOT EXISTS `coin_keeper`.`transaction_history` (  `id` INT(11) NOT NULL AUTO_INCREMENT,  `users_id` INT(11) NOT NULL,  `currency_id` INT(11) NOT NULL,  `type` TINYINT(4) NOT NULL,  `period` DATE NOT NULL,  `sum` DECIMAL(10,0) NULL DEFAULT '0',  `UAH_sum` DECIMAL(10,0) NULL DEFAULT '0',  PRIMARY KEY (`id`),  INDEX `users_id_th_idx` (`users_id` ASC),  INDEX `currency_id_th_idx` (`currency_id` ASC),  CONSTRAINT `currency_id_th`    FOREIGN KEY (`currency_id`)    REFERENCES `coin_keeper`.`currencies` (`id`)    ON DELETE NO ACTION    ON UPDATE NO ACTION,  CONSTRAINT `users_id_th`    FOREIGN KEY (`users_id`)    REFERENCES `coin_keeper`.`users` (`iduser`)    ON DELETE NO ACTION    ON UPDATE NO ACTION)ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;";

    
    connection.query(createShema, function (err, result) {
    if (err) throw err;
    console.log("Database created");}); 
    
    connection.query(tableCurrencies, function (err, result) {
    if (err) throw err;
    console.log("Table `currencies` created");}); 
    
    connection.query(tablePictures, function (err, result) {
    if (err) throw err;
    console.log("Table `pictures` created");}); 
    
    connection.query(tableUsers, function (err, result) {
    if (err) throw err;
    console.log("Table `users` created");}); 
    
    connection.query(tableCategoriesProfits, function (err, result) {
    if (err) throw err;
    console.log("Table categories_profits` created");}); 
    
    connection.query(tableCategoryExpenses, function (err, result) {
    if (err) throw err;
    console.log("Table `category_expenses` created");}); 
    
    connection.query(tableCourse, function (err, result) {
    if (err) throw err;
    console.log("Table `course` created");});
    
    connection.query(tableTransactionHistory, function (err, result) {
    if (err) throw err;
    console.log("Table `transaction_history` created");});
    
}

var getRequestTextForAuthorization = function(){
    return "SELECT name_category as category_name, pictur_name, currencies.name as currencies_name, balance, balance_UAH FROM categories_profits left JOIN currencies ON categories_profits.currency_id = currencies.id left JOIN pictures ON categories_profits.picture_id = pictures.id where users_id = ? group by categories_profits.id;";
}

/**
 * Creating a database.
 */
module.exports.createDataBase = createDataBase;

/**
 * Get the text of the request when you authorize.
 * @return {string} The text of the request.
 */
module.exports.requestTextForAuthorization = getRequestTextForAuthorization;