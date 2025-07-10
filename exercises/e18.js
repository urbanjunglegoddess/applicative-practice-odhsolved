/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

// Create an object where the year is the key and has the value of an array of the names of the asteroids that fall in that year. 
const asteroidByYear = data.asteroids.reduce((groups, asteroid) => {
  const year = asteroid.discoveryYear;
  groups[year] = groups[year] || [];
  groups[year].push(asteroid.name);
  return groups;
}, {});

// Use the new object of arrays to find the year with the most discoveries
let maxYear = undefined;
let maxCount = 0;
for (let year in asteroidByYear) {
  if (asteroidByYear[year].length > maxCount) {
    maxCount = asteroidByYear[year].length;
    maxYear = Number (year);
  }
}
return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
