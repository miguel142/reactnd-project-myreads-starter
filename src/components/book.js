import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Book extends React.Component {
  render() {
    const { image, title, author, shelf, book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${image})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={(event) =>
                this.props.onChangeShelf(book, event.target.value)
              }
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    );
  }
}

export default Book;
