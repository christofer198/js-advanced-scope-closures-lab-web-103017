function produceDrivingRange(range){
  return function(endingBlock, startingBlock){
    let start = parseInt(startingBlock)
    let end = parseInt(endingBlock)
    let delta = Math.abs(end-start)
    let difference = delta-range

    if(difference > 0){
      return `${difference} blocks out of range`
    } else {
      return false
    }
  }
}
