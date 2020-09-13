import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import {
  deleteComment,
  addLikeComment,
  removeLikeComment,
} from '../../actions/post';

const CommentItem = ({
  addLikeComment,
  removeLikeComment,
  postId,
  comment: { _id, text, name, avatar, user, likes, date },
  auth,
  deleteComment,
  showActions,
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${user}`}>
        <img className='round-img' src={avatar} alt='' />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='my-1'>{text}</p>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
          <button
            onClick={() => addLikeComment(postId, _id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-up' />{' '}
            {/*This will show the number of like only if it is greater than zero*/}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>

          <button
            onClick={() => removeLikeComment(postId, _id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-down' />
          </button>

          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deleteComment(postId, _id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times' />
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

CommentItem.defaultProps = {
  showActions: true,
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLikeComment: PropTypes.func.isRequired,
  removeLikeComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  addLikeComment,
  removeLikeComment,
  deleteComment,
})(CommentItem);
