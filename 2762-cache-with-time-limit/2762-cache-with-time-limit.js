var TimeLimitedCache = function() {
  this.cache = new Map(); // Store the key-value pairs
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration - Time until expiration in milliseconds
 * @return {boolean} - If an un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  const currentTime = Date.now();
  const expirationTime = currentTime + duration;

  if (this.cache.has(key) && this.cache.get(key).expirationTime > currentTime) {
    // Key already exists and not expired, overwrite the value and duration
    this.cache.set(key, { value, expirationTime });
    return true;
  }

  this.cache.set(key, { value, expirationTime });
  return false;
};

/** 
 * @param {number} key
 * @return {number} - Value associated with the key if un-expired, otherwise -1
 */
TimeLimitedCache.prototype.get = function(key) {
  const currentTime = Date.now();

  if (this.cache.has(key)) {
    const { value, expirationTime } = this.cache.get(key);

    if (expirationTime > currentTime) {
      // Key is un-expired, return the associated value
      return value;
    } else {
      // Key has expired, remove it from the cache
      this.cache.delete(key);
    }
  }

  return -1;
};

/** 
 * @return {number} - Count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  const currentTime = Date.now();
  let count = 0;

  for (const [key, { expirationTime }] of this.cache.entries()) {
    if (expirationTime > currentTime) {
      count++; // Increment count for each un-expired key
    } else {
      this.cache.delete(key); // Remove expired key from the cache
    }
  }

  return count;
};
/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */