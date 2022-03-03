import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("news");

  return (
    <div className="search-bar ui segment">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onFormSubmit(term);
        }}
        className="ui form"
      >
        <div className="field">
          <label>Search for a video</label>
          <input
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

// import React from 'react';

// class SearchBar extends React.Component {

//   state = {term:'Enter Search'}

//   onInputChange =(event) =>
//   {
//     this.setState({term:event.target.value})
//   }
//   onFormSubmit =(event) =>{
//     event.preventDefault();

//     this.props.onFormSubmit(this.state.term)
//   }
//   render() {
//     return <div className='search-bar ui segment'>
//       <form onSubmit={this.onFormSubmit} className='ui form'>
//         <div className='field'>
//           <label>Video Search</label>
//           <input type="text" onChange={this.onInputChange} value = {this.state.term} />
//         </div>
//       </form>
//     </div>;
//   }
// }

// export default SearchBar;
