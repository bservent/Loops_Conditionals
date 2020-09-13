/* console.log('HW-1')


Easy Going
1. Write a for loop that will log the numbers 1 through 20. */

/* for (i = 1; i <= 20; i+=1) {
    console.log(i);
} */


/* Get Even
1. Write a `for` loop that will log only the even numbers in 0 through 200.
>Hint: Think about the increment expression. */

/* for (i = 0; i <= 200; i+=2) {
        console.log(i);
    } */


/* Excited Kitten
1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times. */

    /* for (i = 1; i<=20; i +=1) {
        console.log('Love me, pet me! HSSSSSS!');
}  

2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random. */
    
/* const kitCat = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
    
    for (i = 0; i<=20; i +=1) {
        if (i % 2 === 0) {
        console.log(kitCat[Math.floor(Math.random() * kitCat.length)]);
        } else {
        console.log('Love me, pet me! HSSSSSS!');
        }
    } */


/* Fizz Buzz 

>NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA

Write a javascript application that logs all numbers from 1 - 100 **AND**: 

  1. If a number is divisible by 3 log "Fizz" instead of the number.
  
  1. If a number is divisible by 5 log "Buzz" instead of the number.
  
  1. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz". */
/* 
    for (i = 1; i <=100; i+=1) {
         if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if 
            (i % 5 === 0) {
                console.log('Buzz');
        } else if 
            (i % 3 === 0) {
                console.log('Fizz');
        } else {
                console.log(i);
        }
    } */
    

    /* Getting to Know You
Use the following arrays to answer the questions below (name, age, hometown):
```javascript
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
```
1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the `kenny` array and replace it with "Gameboy". */

/* const kenny = ["Kenny", 1000, "Austin"];
const delKenny = kenny.splice(0, 1, "Gameboy");
console.log(kenny); */

/* 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older.  Don't just hard code `187`--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
 */
/* const jimClark = ['Jim C', 186, 'LA'];
const jimUp = jimClark[1] + 1;
const jimclark = jimClark.splice(1,1, jimUp);
console.log(jimClark); */

/* 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City". */

/* const ryan = ['Ryan', 65, "Denver"];
ryan[2] = 'Gathom City';
console.log(ryan); */

/* 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
 */
/* const reuben = ['Reuben', 22, 'Durham']
reuben.pop();
reuben.push('Chicago');
console.log(reuben); */

/* 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but [see if you can do it in one line of code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
 */

/* const jimHaff = ['Jim H', 16, 'All cities'];
jimHaff.pop();
jimHaff.push('Melbourne', 'Auckland', 'Eagle River');

console.log(jimHaff); */

/* 6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities.  Whatever the _first_ of the 3 cities for Jim Haff is now, remove it from the array using [`.splice()`](https://www.google.com/search?q=mdn+splice&oq=mdn+splice&aqs=chrome.0.0j69i60j0l4.1078j0j7&sourceid=chrome&ie=UTF-8)
  */


/*  Yell at the Ninja Turtles

 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo) */
 
/* const ninTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']; */

 /* 2. Use a `for loop` to call `.toUpperCase()` on each of them and print out the result. */

/*  for (i = 0; i < ninTurtles.length; i+=1) {
    ninTurtles[i] = ninTurtles[i].toUpperCase()
 }
 console.log(ninTurtles); */
 
 /* 3. Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase. */

 /* Return of the Closets

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

```javascript
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// /* Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
]; */

/* Alien Attire
1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array. */
 
 const kristynsCloset = ["left shoe", "cowboy boots","right sock","GA hoodie","green pants","yellow knit hat","marshmallow peeps"];
 const thomsCloset = [
    [
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
] 
/* const kristynsShoe = kristynsCloset.shift();
thomsCloset[2].unshift(kristynsShoe);
console.log(thomsCloset[2]);  */

/* 1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!k  */ 



for (i = 0; i < thomsCloset.length; i +=1) {
    for (j = 0; j < thomsCloset[i].length; j +=1) {
        console.log(thomsCloset[i][j]);
        }
    }

    const typyOf = thomsCloset[i];
    article = thomsCloset[j];

// NOT DONE!




