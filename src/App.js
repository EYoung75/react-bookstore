import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Checkout from "./components/Checkout.jsx";
import BookList from "./components/Booklist.jsx";
import Footer from "./components/Footer.jsx";


class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      total: 0,
      booksInCart: []
    }
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8082/api/books")
    const json = await response.json()
    this.setState({books: json})
    console.log(this.state.books)
  }

  sortByAuthorA = (a, b) => {
    if(a.author < b.author) { return -1; }
    if(a.author > b.author) { return 1; }
    return 0;
  }

  sortByAuthorZ = (a, b) => {
    if(a.author > b.author) { return -1; }
    if(a.author < b.author) { return 1; }
    return 0;
  }

  sortByTitleA = (a, b) => {
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
  }

  sortByTitleZ = (a, b) => {
    if(a.title > b.title) { return -1; }
    if(a.title < b.title) { return 1; }
    return 0;
  }

  filter = (e) => {
    if(e.target.value === "authorA") {
      this.setState({books: this.state.books.sort(this.sortByAuthorA)})    
    } else if(e.target.value ==="authorZ") {
      this.setState({books: this.state.books.sort(this.sortByAuthorZ)})
    } else if(e.target.value === "titleA") {
      this.setState({books: this.state.books.sort(this.sortByTitleA)})
    } else if(e.target.value === "titleZ") {
      this.setState({books: this.state.books.sort(this.sortByTitleZ)})
    }
  }

  addButton = (e) => {
    this.setState({total: this.state.total+5})
    this.setState({ booksInCart: [...this.state.booksInCart, e.target.title] });
    console.log(this.state.booksInCart)
  }

  clearCart = (e) => {
    this.setState({booksInCart: []})
    this.setState({total: 0})
  }

  ordered = (e) => {
    if(this.state.booksInCart == 0) {
      window.alert("Your shopping cart is empty!")
    } else {
      window.alert("Your books are magically on the way")
    }
  }
  

  render() {

    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-9">
            <SearchBar filter={this.filter}/>
            <div className="row booklist">
              <BookList books={this.state.books} add={this.addButton}/>
            </div>
          </div>
          <div className="col checkout container">
            <Checkout total={this.state.total} booksCart={this.state.booksInCart} clear={this.clearCart} ordered={this.ordered}/>
          </div>
        </div>
        <Footer className="footer"/>
      </div>
    );
  }
}

export default App;
