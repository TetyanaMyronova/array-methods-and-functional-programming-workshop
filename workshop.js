function forEach(callback, theArray) {
  for (var i = 0; i < theArray.length; i++) {
     callback(theArray[i]);
  }
}

function map(mappingFunction, theArray) {
  var newArray = [];
  theArray.forEach(function(item) {
    var newItem = mappingFunction(item);
    console.log(newItem);
    newArray.push(newItem);
    return(newItem);
  })
  return newArray;
}

function filter(predicate, theArray) {  var newArray =[];
   forEach(function(i){
     if(predicate(i)) {
       newArray.push(i);
     }
   }, theArray);
   return newArray;
}

function every(predicate, theArray) {
  var booleanValue = true;
  forEach(function(theArray) {
     if(!predicate(theArray)) {
       booleanValue = false;
     }
  }, theArray);
  return booleanValue;
}

function some(predicate, theArray) {
  var booleanValue = false;
    forEach(function(theArray) {
     if(predicate(theArray)) {
       booleanValue = true;
    }
  }, theArray);
    return booleanValue;
}

function indexOf(item, theArray) {
  var index = -1;
    for(var i=0; i<theArray.length; i++) {
      if(item === theArray[i]) {
        index = i;
        break;
      }
    }
    return index;
}

function findIndex(predicate, theArray) {
  var index = -1;
  for(var i=0; i<theArray.length; i++) {
   if(predicate(theArray[i]) === true) {
      index = i;
      break;
    }
  }  return index;
}

function first(n, theArray) {
  var newArray = [];
    if (Array.isArray(n)) {
    return n[0];
  }
  if (n<0) {
    return newArray;
  }
  if (n>theArray.length) {
    return theArray;
  }
  else {
    for (var i=0; i<n; i++) {
       newArray.push(theArray[i]);
     }
  return newArray;
  }
}

function last(n, theArray) {
	var newArray = [];
   if (Array.isArray(n)) {
     return n.slice(-1)[0];
   }
   if (n<0) {
     return newArray;
   }
   if (n>theArray.length) {
     return theArray;
   }
   else {
     for (var i=0; i<n; i++) {
       newArray.push(theArray.slice(-n)[i]);
     }
   return newArray;
   }
}

function pluck(property, arrayOfObjects) {
  var newArray = map(function(object) {
    return object[property];
    }, arrayOfObjects);
  return newArray;
}

function flatten(theArray) {
var newArray = [];
  forEach(function(element) {
    if(Array.isArray(element)) {
      newArray = newArray.concat(flatten(element))
    }
    else {
      newArray.push(element);
    }
  }, theArray);
  return newArray;
}

function negate1(predicate) {
  return function(element) {
    return !predicate(element);
  }
}

function negate2(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  }
}

function compose1(fun1, fun2) {
  return function(element) {
      return fun1(fun2(element))
  }
}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
