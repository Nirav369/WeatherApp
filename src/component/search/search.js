import React, {Component} from 'react';
import './search.css';

class Search extends Component {
  render(){
    return (
      <div className="Search" >
        <div className="innerSearch" >
            <form onSubmit={this.props.clicked}>
              <div className="SearchByCity">
                <input name ="city" type="text" placeholder="City"/>
                <button ><i class="material-icons">search</i></button>
              </div>
              <p>or</p>
              <p>Use my <button className="currentLocButton" onClick= {this.props.CurrLocClicked}>current locations</button> </p> 
            </form>
        </div>
      </div>
    );
  }
}
export default Search;
