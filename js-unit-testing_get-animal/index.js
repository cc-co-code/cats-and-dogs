export function getAnimal(animal) {
  if (!animal) {
    return "I do not like animals at all!";
  }

  if (animal === "cats") {
    return "I totally love cats!";
  }

  if (animal === "dogs") {
    return `I like ${animal}!`;
  }

  console.log(animal);
}
