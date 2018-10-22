import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Checkout from "./components/Checkout.jsx";
import BookList from "./components/Booklist.jsx";

class App extends Component {

  state = {
    books: []
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:8082/api/books`)
    const json = await response.json()
    this.setState({books: json})
  }



  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-8">
            <SearchBar />
            <div className="row">
              <BookList books={this.state.books}/>
            </div>
          </div>
          <div className="col-4">
            <Checkout />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
