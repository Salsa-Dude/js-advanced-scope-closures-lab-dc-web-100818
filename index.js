function produceDrivingRange(trip) {
  return function(start, end) {
    let beginNum = parseInt(start);
    let endNum = parseInt(end);

    let totalDistance = Math.abs(beginNum - endNum);
     
    if (totalDistance <= trip) {
      return `within range by ${Math.abs(totalDistance - trip)}`;
    } else {
      return `${totalDistance - trip} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(amount) {
    return amount * tip;
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name;
      this.id = driverId++
    }
  }
}