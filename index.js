function produceDrivingRange(range){
  return function drivingRange(trip){
    if(trip < range){
      return true
    } else {
      return false
    }
  };
}