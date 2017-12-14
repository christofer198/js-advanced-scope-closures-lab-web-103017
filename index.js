function produceDrivingRange(range){
  return function(endingBlock, startingBlock){
    let start = parseInt(startingBlock)
    let end = parseInt(endingBlock)
    let delta = end - start

    if(delta > this.range){
      return `${delta-range} blocks out of range`
    } else{
      return `within range by ${range-delta}`
    }
  }
}
