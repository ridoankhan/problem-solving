/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
  const results = []; // Store the resolved values
  let currentIndex = 0; // Track the index of the current function being executed
  let activeCount = 0; // Track the number of active promises

  while (currentIndex < functions.length || activeCount > 0) {
    if (activeCount < n && currentIndex < functions.length) {
      // Execute a new function if the pool limit is not reached and there are more functions
      const currentFunction = functions[currentIndex];
      const promise = currentFunction(); // Execute the function
      activeCount++; // Increment the active promise count

      promise.then(result => {
        results[currentIndex] = result; // Store the resolved value
        activeCount--; // Decrement the active promise count
      });

      currentIndex++; // Move to the next function
    }

    // Wait for the next function to resolve before proceeding
    await new Promise(resolve => setTimeout(resolve, 0));
  }

  return [results, results[results.length - 1]];
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */