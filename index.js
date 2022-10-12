const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(function (total, amount) {
  return total + amount;
});

console.log(totalBatteries);

/* const sum = batteryBatches.reduce( function(total, amount){
    return total + amount;
  });
  console.log(sum); */

/* totalBatteries.push(
  batteryBatches.reduce(function (acc, currVal) {
    acc + currVal;
  })
);
console.log(totalBatteries);
 */
