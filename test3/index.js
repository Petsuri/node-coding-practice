const { moveColumn, isValidLetterColumn } = require("./columns");

exports.canAttack = (knight, enemyPosition) => {
  if (!isValidSquare(knight)) {
    return false;
  }

  const canAttackSelectedEnemy = canAttackEnemyColumn.bind(null, enemyPosition);
  const attackSquares = squaresKnightCanAttack(knight).filter(isValidSquare);
  return attackSquares.some(canAttackSelectedEnemy);
};

const canAttackEnemyColumn = (enemy, knight) => {
  const [knightAttackColumn, knightAttackRow] = knight;
  const [enemyColumn, enemyRow] = enemy;

  return knightAttackColumn === enemyColumn && knightAttackRow === enemyRow;
};

const isValidSquare = ([column, row]) => {
  const FirstRow = 1;
  const LastRow = 8;
  return isValidLetterColumn(column) && FirstRow <= row && row <= LastRow;
};

const squaresKnightCanAttack = (knight) => {
  const Right = 2;
  const Left = -2;
  const Up = 2;
  const Down = -2;
  return [
    ...horizontalAttacks(knight, Right),
    ...horizontalAttacks(knight, Left),
    ...verticalAttacks(knight, Up),
    ...verticalAttacks(knight, Down),
  ];
};

const horizontalAttacks = (knight, columnCount) => {
  const [column, row] = knight;

  const OneDown = 1;
  const OneUp = 1;
  const attackColumn = moveColumn(column, columnCount);
  return [
    [attackColumn, row + OneUp],
    [attackColumn, row - OneDown],
  ];
};

const verticalAttacks = (knight, rowCount) => {
  const [column, row] = knight;

  const OneRight = 1;
  const OneLeft = -1;
  const attackRow = row + rowCount;
  return [
    [moveColumn(column, OneRight), attackRow],
    [moveColumn(column, OneLeft), attackRow],
  ];
};
