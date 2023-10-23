/**
 * Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces
 */


let regex = /\s+/;
function urlSlug(title) {
  
  let array = title.split(" ");
  if (/^\s+/.test(title)) { // if there is a empty space at beginging then proceed
    array.shift(); // remove the empty space at the begining
    title = array.join(" "); // join the elements of the splitted array with spaces
  }
  
  return (title.toLowerCase().split(regex)).join("-"); // then again splits with the regex and join with dashes

  // a lot of unnecessary works
  // better solution is:

  /*
  function urlSlug(title) {

  let array = title.split(/^\s|\s+/)//.join("-").toLowerCase();
  if (array[0] === "") {
    array.shift();
  }
  return array.join("-").toLowerCase();

  }
  console.log(urlSlug(" A Mind  Needs Books Like A Sword Needs A Whetstone"));
  */

}


console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))
console.log(urlSlug(" Winter Is  Coming"));
