export const splitStringAtClosestSpace = (str, index) => {
  let leftIndex = str.lastIndexOf(" ", index);
  let rightIndex = str.indexOf(" ", index);
  if (
    leftIndex === -1 ||
    (rightIndex !== -1 && rightIndex - index < index - leftIndex)
  ) {
    leftIndex = rightIndex;
  }
  if (leftIndex === -1) {
    return [str];
  } else {
    return [str.slice(0, leftIndex), str.slice(leftIndex + 1)];
  }
};
