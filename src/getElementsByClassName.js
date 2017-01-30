// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  var result = [];
  var element = element || document.body;
  var children = element.childNodes;
  if (element.classList && element.classList.contains(className)) {
    result.push(element);
  }
  if (children.length > 0) {
    for(var i = 0; i < children.length; i++) {
      result = result.concat(getElementsByClassName(className, children[i]));
    }
  }
  return result;
};