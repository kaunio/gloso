export const START_GLOSOR_TEST = 'START_GLOSOR_TEST';
export const TEST_GLOSA_ANSWERED_CORRECT = 'TEST_GLOSA_ANSWERED_CORRECT';
export const TEST_GLOSA_ANSWERED = 'TEST_GLOSA_ANSWERED';

export function startGlosorTest(glosor) {
  return {
    type: START_GLOSOR_TEST,
    glosor
  };
}

export function testGlosaAnswered(testGlosa, answer) {
  return {
    type: TEST_GLOSA_ANSWERED,
    testGlosa,
    answer
  };
}

export function testGlosaAnsweredCorrect(testGlosa) {
  return {
    type: TEST_GLOSA_ANSWERED_CORRECT,
    testGlosa
  };
}
