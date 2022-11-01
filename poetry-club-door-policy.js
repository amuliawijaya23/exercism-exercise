const frontDoorResponse = (line) => {
  return line[0];
};

const frontDoorPassword = (word) => {
  return `${word[0].toUpperCase()}${(word.slice(1)).toLowerCase()}`;
};

const backDoorResponse = (line) => {
  const newLine = line.trim();
  return newLine[(newLine.length - 1)];
};

const backDoorPassword = (word) => {
  return `${word[0].toUpperCase()}${(word.slice(1)).toLowerCase()}, please`;
};

module.exports = {
  frontDoorResponse,
  frontDoorPassword,
  backDoorResponse,
  backDoorPassword
};