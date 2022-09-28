const authorsModel = (sequelize, DataTypes) => {
	return sequelize.define(
		'Author',
		{
			id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				autoIncrement: true,
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'authors',
		}
	);
};

module.exports = authorsModel;
