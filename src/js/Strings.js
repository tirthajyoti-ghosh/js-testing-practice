const Strings = (() => {
  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const reverseString = (string) => string.split('').reverse().join('');

  return {
    capitalize,
    reverseString,
  };
})();

export default Strings;
