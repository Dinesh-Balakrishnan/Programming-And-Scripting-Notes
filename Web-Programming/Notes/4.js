let newYearsResolutions = basicArraySyntax();
arrayMethods(newYearsResolutions);

function basicArraySyntax() {
  //To create a variable of type array:
  let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

  let nest = [[1, 2], [3, 4], [5, 6]];

  //Arrays are very flexible and can store data of any type.
  const rand = [10, 'Hello', true];

  //Arrays follow standard 0-based indexing.
  rand[0] = 4; //Notice that constant arrays can still be changed.
  console.log(nest[1][0]); //Logs 3

  //NOTE: Strings can also be accessed with such a format:
  console.log('See you'[1]); //Logs e

  //The length of an array can be found with the .length property.
  console.log(newYearsResolutions.length); //Logs 3

  return newYearsResolutions;
}

function arrayMethods(newYearsResolutions) {
  //Items can be added to the end of an array with .push().
  newYearsResolutions.push('Learn to Draw', 'Exersize frequently');

  //The last item can be removed with .pop(). (The result is also returned.)
  console.log(newYearsResolutions.pop()); //Logs 'Exersize frequently'

  //Items can be added to the beginning of an array with .unshift().
  newYearsResolutions.unshift('Exersize frequently');

  //The first item can be removed with .shift(). (The result is also returned.)
  console.log(newYearsResolutions.shift()); //Logs 'Exersize frequently'

  //Elements within a certain index range can be targeted with .slice().
  console.log(newYearsResolutions.slice(0, 2)); //Logs ['Keep a journal', 'Take a falconry class']

  //The index of an element can be found with .indexOf()/
  console.log(newYearsResolutions.indexOf('Exersize frequently')); //Logs -1

  //The elements of an array can be concatenated together into a string with .join().
  let example = [10, 11, 12];
  console.log(example.join()); //Logs 10, 11, 12
  console.log(example.join(' - ')); //Logs 10 - 11 - 12

  //The .splice() can remove, add, and return elements of an array at the same time.
  console.log(newYearsResolutions.splice(3));
  //Removes all elements at and after the 3rd index. in this case, 'Learn to Draw' is removed and returned.

  console.log(newYearsResolutions.splice(1, 1, 'Learn to Draw', 'Start Driving'));
  /*The second parameter specified how many elements can be removed. The parameters after
    allow as many elements needed to be added at the index. The list goes from
    ['Keep a journal', 'Take a falconry class', 'Learn to juggle'] to
    ['Keep a journal', 'Learn to Draw', 'Start Driving', 'Learn to juggle']. In addition,
    the removed 'Take a falconry class' is returned. */

  //.concat() joins together various arrays.
  let num1 = [1, 2, 3];
  let num2 = [4, 5, 6];
  let num3 = [7, 8, 9];
  console.log(num1.concat(num2, num3)); //Logs [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
