import { List } from 'immutable';
import { START_GLOSOR_TEST, TEST_GLOSA_ANSWERED_CORRECT, TEST_GLOSA_ANSWERED } from '../actions/testGlosorActions';
import TestGlosa from '../data/TestGlosa';
import shuffle from '../utils/shuffle';

const defaultState = {
  glosor: List(),
  mode: 'input'
};

function toTestglosa(glosa, leftside) {
  return new TestGlosa(glosa, 3, leftside);
}

function createTestglosor(gList) {
  let tglistLeft = gList.map((m) => toTestglosa(m, false));
  let tglistRight = gList.map((m) => toTestglosa(m, true));

  return List(tglistLeft.concat(tglistRight));
}

function testGlosaAnswered(state, answer) {
  const glosa = state.glosor.get(0);
  const glosaAnswer = glosa.leftSide ?
    glosa.glosa.g2 :
    glosa.glosa.g1;


    if (glosaAnswer === answer) {
      let newGlosa = { ...glosa,
          attempts: glosa.attempts + 1,
          streak: glosa.streak + 1
        };

      let newGlosor = state.glosor.set(0, newGlosa);

      return { ...state,
          glosor: newGlosor,
          mode: "correct"};
    } else {
      // Answer was wrong
      return { ...state,
          "mode": "incorrect"};
    }
}

export default function glosor(state = defaultState, action) {
  switch (action.type) {
    case START_GLOSOR_TEST:
      let testglosor = createTestglosor(action.glosor);
      testglosor = shuffle(testglosor);

      return {
        ...state,
        glosor: testglosor
      };
    case TEST_GLOSA_ANSWERED_CORRECT:
      return {
        ...state,
        glosor: state.glosor.rest()
      };
    case TEST_GLOSA_ANSWERED:
      return testGlosaAnswered(state, action.answer);
    default:
      return state;
  }
}
