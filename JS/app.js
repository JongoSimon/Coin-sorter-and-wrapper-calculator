
// 1. Store the number of each coin type
const pennies = 200;   // 1¢ each
const nickels = 200;   // 5¢ each
const dimes = 200;     // 10¢ each
const quarters = 200;  // 25¢ each

// 2. Calculate the total value of each coin type in dollars
const totalPennies = pennies * 0.01;    // 200 * $0.01 = $2.00
const totalNickels = nickels * 0.05;    // 200 * $0.05 = $10.00
const totalDimes = dimes * 0.10;        // 200 * $0.10 = $20.00
const totalQuarters = quarters * 0.25;   // 200 * $0.25 = $50.00

// 3. Calculate the combined total value of all coins
const totalValue = totalPennies + totalNickels + totalDimes + totalQuarters;


// Display results
console.log("Total Value per Coin Type:");
console.log(`Pennies: $${totalPennies.toFixed(2)}`);
console.log(`Nickels: $${totalNickels.toFixed(2)}`);
console.log(`Dimes: $${totalDimes.toFixed(2)}`);
console.log(`Quarters: $${totalQuarters.toFixed(2)}`);

console.log(`TotalValue: $${totalValue.toFixed(2)}`);

// Wrapper capacities
const PENNY_WRAPPER = 50;
const NICKEL_WRAPPER = 40;
const DIME_WRAPPER = 50;
const QUARTER_WRAPPER = 40;

// Calculate wrappers and leftovers for each coin type
const pennyWrappers = Math.floor(pennies / PENNY_WRAPPER);
const pennyLeftovers = pennies % PENNY_WRAPPER;

const nickelWrappers = Math.floor(nickels / NICKEL_WRAPPER);
const nickelLeftovers = nickels % NICKEL_WRAPPER;

const dimeWrappers = Math.floor(dimes / DIME_WRAPPER);
const dimeLeftovers = dimes % DIME_WRAPPER;

const quarterWrappers = Math.floor(quarters / QUARTER_WRAPPER);
const quarterLeftovers = quarters % QUARTER_WRAPPER;

// Display results
console.log('Coin Wrapping Results:');

console.log(`Pennies: ${pennyWrappers} wrappers + ${pennyLeftovers} loose coins`);
console.log(`Nickels: ${nickelWrappers} wrappers + ${nickelLeftovers} loose coins`);
console.log(`Dimes: ${dimeWrappers} wrappers + ${dimeLeftovers} loose coins`);
console.log(`Quarters: ${quarterWrappers} wrappers + ${quarterLeftovers} loose coins`);