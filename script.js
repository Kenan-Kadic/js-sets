'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// WHAT ON EARTH ARE SETS?

// a set is a collection of a unique value in which there are no duplicates at all

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet)
// when you console.log it all duplicates are gone.
// order of elements in set is irrelevant
// it is iterable

// use Set with string
console.log(new Set('Jonas'));

// get size of set
console.log(ordersSet.size)

// check if element is in a set

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// add items
ordersSet.add('Garic Bread');
ordersSet.add('Garlic Bread');

// delete items
ordersSet.delete('Risotto')

// HOW DO YOU GET VALUES OUT OF A SET
// sets have no indexes - you can't get data out of it

// clear the set
// ordersSet.clear()

for (const order of ordersSet) console.log(order);

// WHAT IS THE MAIN USECODE OF SETS?

// remove duplicate values of arrays?

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', ' Chef', 'Waiter' ]

//how to convert from set to array

let staffUnique = new Set(staff);
console.log(staffUnique);

// the ... is a spread to pull items out and the [] ensure it becomes an array
staffUnique = [...new Set(staff)];
console.log(staffUnique);

// you can also get the amount of unique items after removing duplicates

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']))

// how to count letters in string

console.log(new Set('kenankadic').size);




