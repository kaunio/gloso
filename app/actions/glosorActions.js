import type { glosorStateType } from '../reducers/glosorReducer';

export const SET_LANG1 = 'SET_LANG1';
export const SET_LANG2 = 'SET_LANG2';
export const SET_LANGS = 'SET_LANGS';
export const ADD_GLOSA = 'ADD_GLOSA';
export const REPLACE_STATE = 'REPLACE_STATE';

export function setLang1(lang) {
  return {
    type: SET_LANG1,
    lang
  };
}

export function setLang2(lang) {
  return {
    type: SET_LANG2,
    lang
  };
}

export function setLangs(lang1, lang2) {
  return {
    type: SET_LANGS,
    lang1,
    lang2
  };
}

export function addGlosa(lang1, lang2) {
  return {
    type: ADD_GLOSA,
    lang1,
    lang2
  };
}

export function replaceState(newData) {
  return {
    type: REPLACE_STATE,
    newData
  };
}
