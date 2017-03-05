import { List } from 'immutable';
import { START_GLOSOR_TEST, TEST_GLOSA_ANSWERED_CORRECT, TEST_GLOSA_ANSWERED, TEST_NEXT_QUESTION } from '../actions/testGlosorActions';
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
        attempts: glosa.attempts + 1
      };

    let newGlosor = state.glosor.set(0, newGlosa);

    return { ...state,
        glosor: newGlosor,
        mode: "correct"};
  } else {
    let newGlosa = { ...glosa,
        attempts: glosa.attempts + 1,
        streak: glosa.streak + 1
      };

    let newGlosor = state.glosor.set(0, newGlosa);
    const mode = newGlosa.streak >= newGlosa.requiredAttempts ?
      "failed" :
      "incorrect";

    // Answer was wrong
    return { ...state,
      glosor: newGlosor,
      mode };
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
    case TEST_NEXT_QUESTION:
      let glosor = state.glosor;
      if (state.mode !== "failed") {
        glosor = state.glosor.rest();
      }

      return {
        ...state,
        glosor: state.glosor.rest(),
        mode: 'input'
      };

    default:
      return state;
  }
}
