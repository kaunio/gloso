import { List } from 'immutable';
import { START_GLOSOR_TEST } from '../actions/testGlosorActions';
import TestGlosa from '../data/TestGlosa';
import shuffle from '../utils/shuffle';

const defaultState = {
  glosor: List()
};

function toTestglosa(glosa, leftside) {
  return new TestGlosa(glosa, 3, leftside);
}

function createTestglosor(gList) {
  let tglistLeft = gList.map((m) => toTestglosa(m, false));
  let tglistRight = gList.map((m) => toTestglosa(m, true));

  return tglistLeft.concat(tglistRight);
}

export default function glosor(state = defaultState, action) {
  switch (action.type) {
    case START_GLOSOR_TEST:
      let testglosor = createTestglosor(action.glosor);
      testglosor = shuffle(testglosor);

      return {
        ...state,
        glosor: testglosor };
    default:
      return state;
  }
}
