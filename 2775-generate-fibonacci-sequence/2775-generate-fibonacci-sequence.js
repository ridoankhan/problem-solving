/**
 * @return {Generator<number>}
 */
function* fibGenerator(current = 0, next = 1) {
  yield current;
  yield* fibGenerator(next, current + next);
}


/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */