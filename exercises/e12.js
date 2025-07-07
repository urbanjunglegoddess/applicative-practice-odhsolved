import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  // Your code goes here...
  // Access the planets data
  const planets = data.planets 

    return planets 
  // Get the total moon count 
  // Sum all the moon counts together
    .reduce((acc,ele)=> {
     return  (ele.moonsCount ? ele.moonsCount:0)  + acc
    }, 0)
  // Return the total sum of all the moon counts
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
