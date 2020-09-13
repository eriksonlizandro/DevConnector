import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DashboardActions = ({
  profile: {
    user: { _id },
  },
}) => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary' /> Add Experience
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary' /> Add Education
      </Link>
      <Link to={`/profile/${_id}`} className='btn btn-light'>
        <i className='fas fa-eye text-primary' />
        View Profile
      </Link>
    </div>
  );
};

DashboardActions.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default DashboardActions;
