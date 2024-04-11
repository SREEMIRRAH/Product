module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('product',{
        productName: {
            type: DataTypes.STRING, 
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        regularPrice:DataTypes.DECIMAL(10,2),
        offerPrice : DataTypes.DECIMAL(10,2),
        offerStartDate: DataTypes.DATEONLY,
        offerEndDate: DataTypes.DATEONLY
    },{
        getterMethods: {
            currentPrice() {
                const currentDate = new Date().toISOString().split('T')[0];
                if (this.offerStartDate && this.offerEndDate && this.offerStartDate <= currentDate && this.offerEndDate >= currentDate) {
                    return this.offerPrice;
                } else {
                    return this.regularPrice;
                }
            }
        }
    }
    );
    return User;
};  