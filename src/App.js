import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Checkout from "./components/Checkout.jsx";
import BookList from "./components/Booklist.jsx";
import Footer from "./components/Footer.jsx";


class App extends Component {

  state = {
    books: []
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8082/api/books")
    const json = await response.json()
    console.log(json)
    this.setState({books: json})
  }



  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-9">
            <SearchBar />
            <div className="row booklist">
              <BookList books={this.state.books}/>
            </div>
          </div>
          <div className="col checkout">
            <Checkout />
          </div>
        </div>
        <Footer className="footer"/>
      </div>
    );
  }
}

export default App;
