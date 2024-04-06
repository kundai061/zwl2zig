let sequelize = require('./db');
let Account = require('./models/Account');
(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
  
      await Account.sync({ force: true }); 
  
      // Add example data entries
      await Account.bulkCreate([
        { zwl: 1000.0 },
        { zwl: 2500.0 },
        { zwl: 5000.0 },
        { zwl: 7500.0 },
        { zwl: 10000.0 },
      ]);
  
      console.log('Example data added successfully.');
    } catch (error) {
      console.error('Unable to set up the database:', error);
    } finally {
      await sequelize.close();
    }
  })();