export const generateColor = (id) => {
  let hex = '#';
  for (let i = 1; i < 7; i++) {
    hex += id.toString()[0];
  }
  return hex;
};
