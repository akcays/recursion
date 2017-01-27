// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var type = typeof obj;
  var stringify = (n) => String(n);
  if (type === 'number') return stringify(obj);
  if (type === 'boolean') return stringify(obj);
  if (type === 'string') return '"' + obj + '"';
  if (obj === null) return 'null';
  if (type === 'object') {
    if (Array.isArray(obj)) {
      var n = [];
      for (var i = 0; i < obj.length; i++) {
        if (typeof i === 'function') {  
          n.push(stringify(null));
        } else {
          n.push(stringifyJSON(obj[i]));
        } 
      }
      return '[' + n.join() + ']';
     } else {
      var n = [];
      for (var key in obj) {
        if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
          var ele = stringifyJSON(key) + ':' + stringifyJSON(obj[key]);  
          n.push(ele);
        }
      }
      return '{' + n.join() + '}';
    }
  }
};