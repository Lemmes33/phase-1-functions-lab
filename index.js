// question 1
function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(pickupLocation -42);
}
// question 2
function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks (pickupLocation)*264
}
// question 3
function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    // Define fare based on distance traveled
    let farePrice;
    if (distanceInFeet <= 400) {
      farePrice = 0; 
    } else if (distanceInFeet <= 2000) {
      const distanceOverFree = distanceInFeet - 400;
      farePrice = distanceOverFree * 0.02; 
    } else if (distanceInFeet <= 2500) {
      farePrice = 25;
    } else {
      farePrice = 'cannot travel that far'; 
    }
  
    return farePrice;
  }
  