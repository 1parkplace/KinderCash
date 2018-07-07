module.exports = function(sequelize, DataTypes) {

	var Transactions = sequelize.define('transactions', {
		trx_id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
		account_id:DataTypes.INTEGER,
		trx_type:DataTypes.STRING,
		trx_amt:DataTypes.STRING
});

	return Transactions;

}






