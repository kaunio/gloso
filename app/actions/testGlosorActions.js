export const START_GLOSOR_TEST = 'START_GLOSOR_TEST';

export function startGlosorTest(glosor) {
  return {
    type: START_GLOSOR_TEST,
    glosor
  };
}
