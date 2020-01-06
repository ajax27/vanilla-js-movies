const debounce = (cb, delay = 1000) => { // Debounce input to limit excessive calls
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb.apply(null, args);
    }, delay);
  }
};
