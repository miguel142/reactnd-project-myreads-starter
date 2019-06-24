import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Book from "./book.js";

class BookShelf extends React.Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books
                .filter((book) => book.shelf === this.props.header)
                .map((book) => (
                  <li key={book.author + book.title}>
                    <Book
                      image={book.imageLinks && book.imageLinks.thumbnail}
                      author={book.authors}
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
      </div>
    );
  }
}

export default BookShelf;
