module.exports = function(sequelize, DataTypes) {

	var Accounts = sequelize.define('accounts', {
		account_id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
		user_id: DataTypes.INTEGER,
		account_desc:DataTypes.STRING,
		account_type:DataTypes.STRING,
		account_term:DataTypes.STRING,
		account_rate:DataTypes.FLOAT,
		account_balance:DataTypes.FLOAT,
});

	return Accounts;

}






