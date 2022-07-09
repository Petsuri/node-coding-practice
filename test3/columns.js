const numberColumns = {};
numberColumns[1] = "A";
numberColumns[2] = "B";
numberColumns[3] = "C";
numberColumns[4] = "D";
numberColumns[5] = "E";
numberColumns[6] = "F";
numberColumns[7] = "G";
numberColumns[8] = "H";

const letterColumns = {};
letterColumns["A"] = 1;
letterColumns["B"] = 2;
letterColumns["C"] = 3;
letterColumns["D"] = 4;
letterColumns["E"] = 5;
letterColumns["F"] = 6;
letterColumns["G"] = 7;
letterColumns["H"] = 8;

exports.moveColumn = (initialColumnLetter, numberOfSquares) => {
  const newColumn = letterColumns[initialColumnLetter] + numberOfSquares;
  return numberColumns[newColumn];
};

exports.isValidLetterColumn = (letterColumn) => {
  return letterColumns[letterColumn] !== undefined;
};
