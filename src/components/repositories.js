import React from 'react';
import Repo from './repo';
import Loading from '../images/repo_loading.gif';
import _ from 'lodash';

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
      this.setState({repos, allRepos: [...repos], loading: false});
    } catch (e) {}
  }

  reverse = () => {
    const {repos} = this.state;
    const reversedRepos = [...repos].reverse();
    this.setState({repos: reversedRepos});
  };

  search = e => {
    const text = e.target.value;
    const filtered = _.filter(this.state.allRepos, (repo) => {
      return repo.name.toLowerCase().includes(text.toLowerCase());
    });
    this.setState({repos: filtered});
  }

  render(){
    const {loading, repos} = this.state;

    return (
      <div className="repositories">
        <button onClick={this.reverse}>Reverse</button>
        <input onChange={this.search} placeholder="Search"/>
        {
          loading ? <img src={Loading} alt="" /> : 
            repos.map(repo =>(
              <Repo {...{key: repo.name, repo, userName: this.props.userName}} />
            ))
        }
      </div>
    );

    
  }
}