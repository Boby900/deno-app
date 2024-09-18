// Output: JSON Data
// const jsonResponse = await fetch("https://api.github.com/users/denoland");

try {
  const jsonResponse = await fetch("https://api.github.com/users/boby900");
  const jsonData = await jsonResponse.json();
  console.log(jsonData, "\n");
} catch (error) {
  console.log(error.message);
}
