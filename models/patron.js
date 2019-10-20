module.exports = function (sequelize, DataTypes) {
    const Patron = sequelize.define("Patron", {
        // Giving the Patron model a name of type STRING
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Patron.associate = function (models) {
        // Associating Patron with Posts
        // When an Patron is deleted, also delete any associated Posts
        Patron.hasMany(models.Burger, {
            onDelete: "cascade"
        });
    };
    return Patron;
};