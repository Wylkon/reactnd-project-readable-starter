import { uniqueId } from 'utils/uniqueId';
import { unionBy } from 'lodash';

const TYPES = {
  GET_POST: 'GET_POST',
  GET_POST_SUCCESS: 'GET_POST_SUCCESS',
  GET_POST_ERROR: 'GET_POST_ERROR',
  GET_COMMENTS: 'GET_COMMENTS',
  GET_COMMENTS_SUCCESS: 'GET_COMMENTS_SUCCESS',
  GET_COMMENTS_ERROR: 'GET_COMMENTS_ERROR',
  SUBMIT_COMMENTS: 'SUBMIT_COMMENTS',
  SUBMIT_COMMENTS_SUCCESS: 'SUBMIT_COMMENTS_SUCCESS',
  SUBMIT_COMMENTS_ERROR: 'SUBMIT_COMMENTS_ERROR',
  REMOVE_COMMENTS: 'REMOVE_COMMENTS',
  REMOVE_COMMENTS_SUCCESS: 'REMOVE_COMMENTS_SUCCESS',
  REMOVE_COMMENTS_ERROR: 'REMOVE_COMMENTS_ERROR',
  VOTE_COMMENT: 'VOTE_COMMENT',
  VOTE_COMMENT_SUCCESS: 'VOTE_COMMENT_SUCCESS',
  VOTE_COMMENT_ERROR: 'VOTE_COMMENT_ERROR',
  VOTE_POST: 'VOTE_POST',
  VOTE_POST_SUCCESS: 'VOTE_POST_SUCCESS',
  VOTE_POST_ERROR: 'VOTE_POST_ERROR',
  UPDATE_POST: 'UPDATE_POST',
  UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',
  UPDATE_POST_ERROR: 'UPDATE_POST_ERROR',
  UPDATE_COMMENT: 'UPDATE_COMMENT',
  UPDATE_COMMENT_SUCCESS: 'UPDATE_COMMENT_SUCCESS',
  UPDATE_COMMENT_ERROR: 'UPDATE_COMMENT_ERROR',
};

const initialState = {
  data: {},
  comments: [],
  loaded: false,
  error: false,
};

export const reducer = (state = initialState, { type, result, id, voteValue }) => {
  switch (type) {
    case TYPES.GET_POST:
      return {
        ...state,
      };
    case TYPES.GET_POST_SUCCESS:
      return {
        ...state,
        loaded: true,
        data: result.data,
      };
    case TYPES.GET_POST_ERROR:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    case TYPES.GET_COMMENTS:
      return {
        ...state,
      };
    case TYPES.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loaded: true,
        comments: [...result.data],
      };
    case TYPES.GET_COMMENTS_ERROR:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    case TYPES.SUBMIT_COMMENTS:
      return {
        ...state,
      };
    case TYPES.SUBMIT_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: state.comments.concat(result.data),
      };
    case TYPES.SUBMIT_COMMENTS_ERROR:
      return {
        ...state,
      };
    case TYPES.REMOVE_COMMENTS:
      return {
        ...state,
      };
    case TYPES.REMOVE_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== id),
      };
    case TYPES.REMOVE_COMMENTS_ERROR:
      return {
        ...state,
      };
    case TYPES.VOTE_COMMENT:
      return {
        ...state,
        comments: votedComment(state.comments, voteValue, id),
      };
    case TYPES.VOTE_COMMENT_SUCCESS:
      return {
        ...state,
      };
    case TYPES.VOTE_COMMENT_ERROR:
      return {
        ...state,
        comments: votedComment(state.comments, voteValue === 'upVote' ? 'downVote' : 'upVote', id),
      };
    case TYPES.VOTE_POST:
      return {
        ...state,
        data: votedPost(state.data, voteValue),
      };
    case TYPES.VOTE_POST_SUCCESS:
      return {
        ...state,
      };
    case TYPES.VOTE_POST_ERROR:
      return {
        ...state,
        data: votedPost(state.data, voteValue === 'upVote' ? 'downVote' : 'upVote'),
      };
    case TYPES.UPDATE_POST:
      return {
        ...state,
      };
    case TYPES.UPDATE_POST_SUCCESS:
      return {
        ...state,
        data: result.data,
      };
    case TYPES.UPDATE_POST_ERROR:
      return {
        ...state,
      };
    case TYPES.UPDATE_COMMENT:
      return {
        ...state,
      };
    case TYPES.UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: updatedComment(state.comments, result.data),
      };
    case TYPES.UPDATE_COMMENT_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

const actualVote = vote => {
  return vote === 'upVote' ? 1 : -1;
};

const newTimestamp = () => {
  return Date.parse(new Date());
};

const votedComment = (arr, vote, id) => {
  const currentComment = arr.filter(comment => comment.id === id)[0];
  const voted = [{ ...currentComment, ...{ voteScore: currentComment.voteScore + actualVote(vote) } }];

  return unionBy(voted, arr, 'id');
};

const votedPost = (obj, vote) => {
  return { ...obj, ...{ voteScore: obj.voteScore + actualVote(vote) } };
};

const updatedComment = (arr, comment) => {
  const updated = [{ ...comment }];
  return unionBy(updated, arr, 'id');
};

// action creators
export const getPost = id => ({
  types: [TYPES.GET_POST, TYPES.GET_POST_SUCCESS, TYPES.GET_POST_ERROR],
  promise: client => client.get(`/posts/${id}`),
});

export const getComments = id => ({
  types: [TYPES.GET_COMMENTS, TYPES.GET_COMMENTS_SUCCESS, TYPES.GET_COMMENTS_ERROR],
  promise: client => client.get(`/posts/${id}/comments`),
});

export const submitComment = (comment, parentId) => {
  const commentValues = {
    ...comment,
    timestamp: newTimestamp(),
    id: uniqueId(),
    parentId: parentId,
  };

  return {
    types: [TYPES.SUBMIT_COMMENTS, TYPES.SUBMIT_COMMENTS_SUCCESS, TYPES.SUBMIT_COMMENTS_ERROR],
    promise: client => client.post('/comments', { ...commentValues }),
  };
};

export const removeComment = id => {
  return {
    types: [TYPES.REMOVE_COMMENTS, TYPES.REMOVE_COMMENTS_SUCCESS, TYPES.REMOVE_COMMENTS_ERROR],
    promise: client => client.delete(`/comments/${id}`),
    id: id,
  };
};

export const vote = ({ id, vote }) => ({
  types: [TYPES.VOTE_COMMENT, TYPES.VOTE_COMMENT_SUCCESS, TYPES.VOTE_COMMENT_ERROR],
  promise: client => client.post(`/comments/${id}`, { option: vote }),
  voteValue: vote,
  id,
});

export const votePost = ({ id, vote }) => ({
  types: [TYPES.VOTE_POST, TYPES.VOTE_POST_SUCCESS, TYPES.VOTE_POST_ERROR],
  promise: client => client.post(`/posts/${id}`, { option: vote }),
  voteValue: vote,
  id,
});

export const updatePost = values => ({
  types: [TYPES.UPDATE_POST, TYPES.UPDATE_POST_SUCCESS, TYPES.UPDATE_POST_ERROR],
  promise: client => client.put(`/posts/${values.id}`, { title: values.title, body: values.body }),
});

export const updateComment = values => {
  return {
    types: [TYPES.UPDATE_COMMENT, TYPES.UPDATE_COMMENT_SUCCESS, TYPES.UPDATE_COMMENT_ERROR],
    promise: client => client.put(`/comments/${values.id}`, { body: values.body, timestamp: newTimestamp() }),
  };
};
