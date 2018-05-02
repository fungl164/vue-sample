// Check for object equality
export default function isEqual(a, b) {
  if (a === b) {
      return true;
  }

  if (generalType(a) != generalType(b)) {
      return false;
  }

  if (a == b) {
      return true;
  }

  if (typeof a != 'object') {
      return false;
  }

  // null != {}
  if (a instanceof Object != b instanceof Object) {
      return false;
  }

  if (a instanceof Date || b instanceof Date) {
      if (a instanceof Date != b instanceof Date ||
          a.getTime() != b.getTime()) {
          return false;
      }
  }

  var allKeys = [].concat(keys(a), keys(b));
  uniqueArray(allKeys);

  for (var i = 0; i < allKeys.length; i++) {
      var prop = allKeys[i];
      if (!isEqual(a[prop], b[prop])) {
          return false;
      }
  }
  return true;
}
