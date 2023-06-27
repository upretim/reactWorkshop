import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//JSX

let imageURL =
  "https://m.media-amazon.com/images/I/41CNfYGhRvL._SX327_BO1,204,203,200_.jpg";
let title = "Average Sucks";
let author = "Michael Bernoff";

let imageURL2 =
  "https://m.media-amazon.com/images/I/41dmlKKCarL._SX327_BO1,204,203,200_.jpg";

// let title2 = "Lead or Get Out of the Way";
// let author2 = "Gary J Vien";

let imageURL3 = "https://m.media-amazon.com/images/I/5165He67NEL.jpg";

const BooKlist = () => {
  return (
    <section className="booklist">
      <Book URL={imageURL} />
      <Book URL={imageURL2} />
      <Book URL={imageURL3} />
    </section>
  );
};

const AuthStyle = {
  color: "#617d98",
  fontSize: ".75rem",
  marginTop: "0.5rem",
};

const Book = (props) => {
  console.log("URL for image ", props.URL);
  return (
    <article className="book">
      <img src={props.URL} alt="Average Sucks" />
      <h2>{title}</h2>
      <h4 style={AuthStyle}>{author}</h4>
    </article>
  );
};

const Image = () => {
  return <img src={imageURL} alt="Average Sucks" />;
};

const Title = () => {
  return <h2>{title}</h2>;
};

function Author() {
  const AuthStyle = {
    color: "#617d98",
    fontSize: ".75rem",
    marginTop: "0.5rem",
  };

  return <h4 style={AuthStyle}>{author}</h4>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BooKlist />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
