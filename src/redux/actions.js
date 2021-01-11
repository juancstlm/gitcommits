import {
  FETCH_COMMITS,
  FETCH_COMMITS_FAILED,
  FETCH_COMMITS_SUCCESS,
} from './actionTypes';
import {getCommits} from '../../api';

export const fetchCommits = (user, repository) => {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCH_COMMITS,
    });

    const response = await getCommits(user, repository);
    if (response.status === 200) {
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
