import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Book from "./book.js";
class BookSearch extends React.Component {
  render() {
    const { books } = this.props;
    if (books.length > 0) console.log(books);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" />
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.props.onSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books &&
              books.length > 0 &&
              books.map((book) => (
                <li key={book.title + book.id}>
                  <Book
                    author={book.authors}
                    image={book.imageLinks && book.imageLinks.thumbnail}
                    title={book.title}
                    shelf={book.shelf}
                    book={book}
                    onChangeShelf={(book, shelf) => {
                      this.props.onChangeShelf(book, shelf);
                    }}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
