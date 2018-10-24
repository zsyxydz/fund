exports.getDevicePixelRatio = function () {
  var ratio = 1;
  // To account for zoom, change to use deviceXDPI instead of systemXDPI
  if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
    // Only allow for values > 1
    ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
  } else if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio;
  }
  return ratio
};

exports.findAll = function (str, searchStr) {
  var searchStrLen = searchStr.length;
  if (searchStrLen == 0) {
    return [];
  }
  var startIndex = 0,
    index, indices = [];

  if(str.split('|')[0].length != str.split('|')[1].length){
    return indices
  }
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;

};


exports.getId = function(props){
  // console.log(props.params)
  if(props.params){
    return props.params.id
  }else{
    return window.location.href.split('/')[5]
  }
}