/*
    capitalize words function
*/

const mySreing = document.querySelector('.myString').textContent;

function capitalize(string) {
   // بنحول السترنج دا ل اراي
   let wordsArray = string.split(' '); // بيحولك السترج لاراي و بيحدد كل عنصر بناء علي المسافة
   let newArray = [];
   for (let i = 0; i < wordsArray.length; i++) {
      // فور لوب علشان نمشي علي كل كلمة في الاراي
      // newArray.push(wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1));
      newArray.push(wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1)); // جبنا اول حرف في الكلمة و حولناه لكابيتال و دمجناه مع السلايس اللي اخناه من الكلمة اللي هوا الكلمة كلها ماعادها اول حرف و هنحط اللي عملناه دا كلو هنبشو في الاراي الجديدة
   }
   return newArray.join(' '); // بيحولك عناصر الاراي لسترنج و هتفصل بينهم ب مسافة
}

console.log(capitalize(mySreing));

// or
/*
// if you want to use for of loop
const mySreing = 'mustafa ahmed saad';

function capitalize(string) {
    // بنحول السترنج دا ل اراي
    let wordsArray = string.split(' '); // بيحولك السترج لاراي و بيحدد كل عنصر بناء علي المسافة
    let newArray = [];
    for (word of wordsArray) {  // فور لوب علشان نمشي علي كل كلمة في الاراي
        // newArray.push(wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1));
        newArray.push(word.charAt(0).toUpperCase() + word.slice(1)); // جبنا اول حرف في الكلمة و حولناه لكابيتال و دمجناه مع السلايس اللي اخناه من الكلمة اللي هوا الكلمة كلها ماعادها اول حرف و هنحط اللي عملناه دا كلو هنبشو في الاراي الجديدة
    }
    return newArray.join(' '); // بيحولك عناصر الاراي لسترنج و هتفصل بينهم ب مسافة
}

console.log(capitalize(mySreing));
*/
