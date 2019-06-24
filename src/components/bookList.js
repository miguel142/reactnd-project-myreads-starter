import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import BookShelf from "./bookShelf";

class BookList extends React.Component {
  state = {
    shelves: [
      {
        shelf: "Currently Reading",
        header: "currentlyReading"
      },
      {
        shelf: "Want to Read",
        header: "wantToRead"
      },
      {
        shelf: "Read",
        header: "read"
      }
    ]
  };

  render() {
    const { books } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {this.state.shelves.map((shelfs) => (
            <BookShelf
              key={shelfs.header}
              title={shelfs.shelf}
              books={books}
              header={shelfs.header}
              onChangeShelf={(book, shelf) => {
                this.props.onChangeShelf(book, shelf);
              }}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BookList;
