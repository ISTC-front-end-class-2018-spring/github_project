import React from 'react';

import '../stylesheets/repo.css';

const Repo = ({repo, userName}) => {
  const {name} = repo;
  return (
    <a target="blank" href={`https://github.com/${userName}/${repo.name}`} className="repo">
      <span>{name}</span>
    </a>
  );
};

export default Repo;