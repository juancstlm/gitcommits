import {
  FETCH_COMMITS,
  FETCH_COMMITS_FAILED,
  FETCH_COMMITS_SUCCESS,
} from './actionTypes';

const initialState = {
  isFetchingCommits: false,
  isError: false,
  error: null,
  commits: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMITS:
      return {
        ...state,
        isFetchingCommits: true,
      };
    case FETCH_COMMITS_SUCCESS:
      return {
        ...state,
        isFetchingCommits: false,
        isError: false,
        error: null,
        commits: action.commits,
      };
    case FETCH_COMMITS_FAILED:
      return {
        ...state,
        isFetchingCommits: false,
        commits: [],
        isError: true,
        error: action.error,
      };
    default:
      return state;
  }
};
