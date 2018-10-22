import React from "react";
import "../style/searchBar.css";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search">
                <h5>Search the bookstore:</h5>
                <div className="row">
                    <span role="img"><h2>🔎</h2></span><input type="text"></input>
                </div>
            </div>
        )
    }
}

export default SearchBar;