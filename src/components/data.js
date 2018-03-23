import React from 'react';
import Info from './info';

import '../stylesheets/data.css';

const Data = ({user}) =>  {
  if (!user) return null;

  const {id, login, avatar_url} = user;
  return (
    <div className="data">
      <Info {...{id, login, avatar_url}}/>
    </div>
  );
};

export default Data;