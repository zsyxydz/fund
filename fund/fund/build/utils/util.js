exports.getDevicePixelRatio = function () {
  let ratio = 1;
  // To account for zoom, change to use deviceXDPI instead of systemXDPI
  if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
    // Only allow for values > 1
    ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
  } else if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio;
  }
  return ratio
};

exports.findAll = function(str, searchStr) {
  let searchStrLen = searchStr.length;
  if (searchStrLen === 0) {
    return [];
  }
  let startIndex = 0,
    index, indices = [];

  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
};