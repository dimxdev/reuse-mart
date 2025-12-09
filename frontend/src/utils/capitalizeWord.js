function capitalizeWord(word) {
  const result = word
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return result;
}

export default capitalizeWord;
