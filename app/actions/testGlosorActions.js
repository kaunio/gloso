export const START_GLOSOR_TEST = 'START_GLOSOR_TEST';
export const TEST_GLOSA_ANSWERED_CORRECT = 'TEST_GLOSA_ANSWERED_CORRECT';

export function startGlosorTest(glosor) {
  return {
    type: START_GLOSOR_TEST,
    glosor
  };
}

export function testGlosaAnsweredCorrect(testGlosa) {
  return {
    type: TEST_GLOSA_ANSWERED_CORRECT,
    testGlosa
  };
}
