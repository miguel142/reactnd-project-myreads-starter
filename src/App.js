import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookSearch from "./components/bookSearch";
import BookList from "./components/bookList";
import { BrowserRouter as Router, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: []
  };

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };

  updateShelf = (book, shelf) => {
    book.shelf = shelf;
    this.setState({
      books: this.state.books.filter((b) => b.id !== book.id).concat(book)
    });
    BooksAPI.update(book, shelf);
  };

  search = (value) => {
    BooksAPI.search(value).then((books) => {
      if (!books || books.error) return;

      const updatedSearch = books.map((book) => {
        const exists = this.state.books.find((b) => b.id === book.id);
        book.shelf = exists ? exists.shelf : "none";
        return book;
      });

      this.setState({ searchBooks: updatedSearch });
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <BookList
                books={this.state.books}
                onChangeShelf={(book, shelf) => {
                  this.updateShelf(book, shelf);
                }}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <BookSearch
                books={this.state.searchBooks}
                onSearch={(value) => this.search(value)}
                onChangeShelf={(book, shelf) => {
                  this.updateShelf(book, shelf);
                }}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
