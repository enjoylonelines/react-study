export function checkType(type = "") {
  let color = "";
  switch (type) {
    case "grass":
      color = "green";
      break;
    case "poison":
      color = "violet";
      break;
    case "fire":
      color = "red";
      break;
    case "water":
      color = "blue";
      break;
    case "bug":
      color = "orange";
      break;
    case "flying":
      color = "sky";
      break;
    case "normal":
      color = "stone";
      break;
    default:
      color = "slate";
  }
  return color;
}
