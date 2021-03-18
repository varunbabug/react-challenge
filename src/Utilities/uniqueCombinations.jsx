export function uniqueCombinations(height, width) {
    let rgbUniqueCombination = [];

    for (let blue = 1; blue <= 255; blue += 8) {
      for (let green = 1; green <= 255; green += 8) {
        for (let red = 1; red <= 255 ; red += 8) {
          rgbUniqueCombination.push([red, green, blue]);
        }
      }
    }

    return rgbUniqueCombination;
}