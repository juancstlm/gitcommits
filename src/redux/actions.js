import {
  FETCH_COMMITS,
  FETCH_COMMITS_FAILED,
  FETCH_COMMITS_SUCCESS,
} from './actionTypes';

export const fetchCommits = (user, repository) => {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_COMMITS,
    });

    const response = api.getCommits(user, repository);
    if (response.ok) {
      return dispatch(fetchCommitsSuccess(response.data));
    } else {
      return dispatch(fetchCommitsFailed(response.error));
    }
  };
};

export const fetchCommitsSuccess = (commits) => ({
  type: FETCH_COMMITS_SUCCESS,
  commits,
});

export const fetchCommitsFailed = (error) => ({
  type: FETCH_COMMITS_FAILED,
  error,
});
