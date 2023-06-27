import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//JSX

let bookList = [
  {
    imageURL:
      "https://m.media-amazon.com/images/I/41CNfYGhRvL._SX327_BO1,204,203,200_.jpg",
    title: "Average Sucks",
    author: "Michael Bernoff",
    id: "1",
  },
  {
    imageURL:
      "https://m.media-amazon.com/images/I/41dmlKKCarL._SX327_BO1,204,203,200_.jpg",
    title: "Lead or Get Out of the Way",
    author: "Gary J Vien",
    id: "2",
  },
  {
    imageURL: "https://m.media-amazon.com/images/I/5165He67NEL.jpg",
    title: "Lead or Get Out of the Way",
    author: "Gary J Vien",
    id: "3",
  },
];

let book1 = {
  imageURL:
    "https://m.media-amazon.com/images/I/41CNfYGhRvL._SX327_BO1,204,203,200_.jpg",
  title: "Average Sucks",
  author: "Michael Bernoff",
};

let book2 = {
  imageURL:
    "https://m.media-amazon.com/images/I/41dmlKKCarL._SX327_BO1,204,203,200_.jpg",
  title: "Lead or Get Out of the Way",
  author: "Gary J Vien",
};

let book3 = {
  imageURL: "https://m.media-amazon.com/images/I/5165He67NEL.jpg",
  title: "Lead or Get Out of the Way",
  author: "Gary J Vien",
};

const BooKlist = () => {
  return (
    <section className="booklist">
      {bookList.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </section>
  );
};

const AuthStyle = {
  color: "#617d98",
  fontSize: ".75rem",
  marginTop: "0.5rem",
};

const Book = ({ book }) => {
  console.log("URL for image ");
  return (
    <article className="book">
      <img src={book?.imageURL} alt={book?.title} />
      <h2>{book?.title}</h2>
      <h4 style={AuthStyle}>{book?.author}</h4>
    </article>
  );
};

// const Image = (props) => {
//   return <img src={props.imageURL} alt="Average Sucks" />;
// };

// const Title = () => {
//   return <h2>{title}</h2>;
// };

// function Author() {
//   const AuthStyle = {
//     color: "#617d98",
//     fontSize: ".75rem",
//     marginTop: "0.5rem",
//   };

//   return <h4 style={AuthStyle}>{author}</h4>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BooKlist />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
