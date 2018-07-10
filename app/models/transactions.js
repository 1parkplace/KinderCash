module.exports = function(sequelize, DataTypes) {

	var Transactions = sequelize.define('transactions', {
		trx_id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
		account_id:DataTypes.INTEGER,
		trx_details:DataTypes.STRING,
		trx_type:DataTypes.STRING,
		trx_amt:DataTypes.FLOAT,
		beg_bal:DataTypes.FLOAT,
		end_bal:DataTypes.FLOAT
});

	return Transactions;

}






