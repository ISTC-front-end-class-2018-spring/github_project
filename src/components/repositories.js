import React from 'react';
import Repo from './repo';
import Loading from '../images/repo_loading.gif';

import '../stylesheets/repositories.css';

export default
class Repositories extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      loading: true,
      repos: []
    };
  }

  async componentDidMount(){
    try {
      const res = await fetch(this.props.reposUrl);
      const repos = await res.json();
      this.setState({repos, loading: false});
    } catch (e) {}
  }

  render(){
    const {loading, repos} = this.state;

    return (
      <div className="repositories">{
        loading ? <img src={Loading} alt="" /> : 
          repos.map(repo =>(
            <Repo {...{key: repo.name, repo, userName: this.props.userName}} />
          ))
      }</div>
    );

    
  }
}