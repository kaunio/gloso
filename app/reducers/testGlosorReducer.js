import { List } from 'immutable';
import { START_GLOSOR_TEST, TEST_GLOSA_ANSWERED_CORRECT, TEST_GLOSA_ANSWERED, TEST_NEXT_QUESTION } from '../actions/testGlosorActions';
import TestGlosa from '../data/TestGlosa';
import shuffle from '../utils/shuffle';

const defaultState = {
  glosor: List(),
  mode: 'input',
  correctAnswers: 0,
  incorrectAnswers: 0
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


  if (glosaAnswer.toLocaleLowerCase() === answer.toLocaleLowerCase()) {
    let newGlosa = { ...glosa,
        attempts: glosa.attempts + 1,
        streak: 0,
        correctStreak: glosa.correctStreak + 1
      };

    let newGlosor = state.glosor.set(0, newGlosa);

    return { ...state,
        glosor: newGlosor,
        mode: "correct",
        correctAnswers: state.correctAnswers + 1
      };
  } else {
    let newGlosa = { ...glosa,
        attempts: glosa.attempts + 1,
        streak: glosa.streak + 1,
        correctStreak: 0
      };

    let newGlosor = state.glosor.set(0, newGlosa);
    const mode = newGlosa.streak >= newGlosa.requiredAttempts ?
      "failed" :
      "incorrect";

    // Answer was wrong
    return { ...state,
      glosor: newGlosor,
      mode,
      incorrectAnswers: state.incorrectAnswers + 1
      };
  }
}

export default function glosor(state = defaultState, action) {
  switch (action.type) {
    case START_GLOSOR_TEST:
      let testglosor = createTestglosor(action.glosor);
      testglosor = List(shuffle(testglosor.toArray()));

      return {
        ...state,
        glosor: testglosor
      };
    case TEST_GLOSA_ANSWERED:
      return testGlosaAnswered(state, action.answer);
    case TEST_NEXT_QUESTION:
      let glosor = state.glosor;
      let glosa = state.glosor.get(0);
      if (glosa.correctStreak >= glosa.requiredAttempts) {
        glosor = state.glosor.rest();
      }
      glosor = List(shuffle(glosor.toArray()));

      return {
        ...state,
        glosor: glosor,
        mode: 'input'
      };

    default:
      return state;
  }
}
