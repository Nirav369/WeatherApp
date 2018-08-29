import React, {Component} from 'react';
import './search.scss';

class Search extends Component {
  render(){
    return (
      <div className="search" >
        <div className="innerSearch" >
            <form onSubmit={this.props.clicked}>
              <div className="searchByCity">
                <input name ="city" type="text" placeholder="City" required/>
                <button ><i class="material-icons">search</i></button>
              </div>
            </form>
              <p>or</p>
              <p>Use my <button className="currentLocButton" onClick= {this.props.currLocClicked}>current locations</button> </p> 
        </div>
      </div>
    );
  }
}
export default Search;
