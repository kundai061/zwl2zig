let Sequelize = require("sequelize");
let ZwlAccount = require("./models/Account");
const usdZigRate = 2499.9263;
async function updateCurrency() {
  try {
    // Update the ZWL accounts
    await ZwlAccount.update(
      {
        zwl: Sequelize.literal(`zwl / ${usdZigRate}`),
      },
      {
        where: {
          zwl: {
            [Sequelize.Op.gt]: 0, // Update where zwl is greater than 0
          },
        },
      }
    );

    console.log("ZWL accounts updated successfully.");
  } catch (error) {
    console.error("Unable to update ZWL accounts:", error);
  }
}

updateCurrency();
