/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
  const results = [] 
  let currentIndex = 0 
  let activeCount = 0 

  while (currentIndex < functions.length || activeCount > 0) {
    if (activeCount < n && currentIndex < functions.length) {
      const currentFunction = functions[currentIndex]
      const promise = currentFunction()
      activeCount++

      promise.then(result => {
        results[currentIndex] = result 
        activeCount--
      });
      currentIndex++ 
    }
    await new Promise(resolve => setTimeout(resolve, 0))
  }
  return [results, results[results.length - 1]]
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */