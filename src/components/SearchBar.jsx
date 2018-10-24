import React from "react";


class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <div className="search row">
                    <div className="col-6">
                        <h5>Search the bookstore:</h5>
                        <div className="row">
                            <span role="img"><h2>🔎</h2></span><input type="text"></input>
                        </div>
                    </div>
                    <div className="col-4">
                        <h5>Filter:</h5>
                        <select>
                            <option>By Author: (A-Z)</option>
                            <option>By Title: (A-Z)</option>
                        </select>
                    </div>
                </div >
            </div >
        )
    }
}

export default SearchBar;