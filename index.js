const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce(function( total, currentVal){
    
 return total + currentVal  }); 

console.log( totalBatteries )