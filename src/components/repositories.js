import React from 'react';

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
      loading ? <p>LOADING</p> : 
      <div className="repositories">
        {
          repos.map(({name}) =>(
            <p key={name}>{name}</p>
          ))
        }
      </div>
    );

    
  }
}