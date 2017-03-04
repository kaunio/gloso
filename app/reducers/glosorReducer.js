import { Record, List } from 'immutable';
import { SET_LANG1, SET_LANG2, SET_LANGS, ADD_GLOSA, REPLACE_STATE } from '../actions/glosorActions';


export type glosorStateType = {
  lang1: string,
  lang2: string
};

type actionType = {
  type: string
};

export const Glosa = Record({ g1: '', g2: 'g2', lorder: 0 });

const defaultState = {
  lang1: null,
  lang2: null,
  counter: 0,
  glosor: List()
};

export default function glosor(state = defaultState, action: actionType) {
  const { lang1, lang2 } = action;
  switch (action.type) {
    case SET_LANG1:
      return Object.assign({}, state, { lang1: action.lang });
    case SET_LANG2:
      return Object.assign({}, state, { lang1: action.lang });
    case SET_LANGS:
      return Object.assign({}, state, { lang1, lang2 });
    case ADD_GLOSA:
        var glosa = new Glosa({ g1: lang1, g2: lang2, lorder: state.counter });
        var glosorList = state.glosor.push(glosa);
        return {...state,
          glosor: glosorList,
          counter: state.counter + 1
        };
    case REPLACE_STATE:
        return action.newData;
    default:
      return state;
  }
}
