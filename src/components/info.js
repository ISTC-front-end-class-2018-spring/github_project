import React from 'react';
import '../stylesheets/info.css';

const Info = ({login, id, avatar_url}) => (
  <div className="user-info">
    <img src={avatar_url} alt="avatar" />
    <div>
      <span className="login">{login}</span>
      <span className="id">{id}</span>
    </div>
  </div>
);

export default Info;