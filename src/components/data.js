import React from 'react';
import Info from './info';

import '../stylesheets/data.css';

const Data = ({user}) =>  {
  if (!user) return null;
  else if (user === 'not found')
    return (
      <div className="data">
        <span className="user-not-found">USER NOT FOUND</span>
      </div>
    );

  const {id, login, avatar_url} = user;
  return (
    <div className="data">
      <Info {...{id, login, avatar_url}}/>
    </div>
  );
};

export default Data;