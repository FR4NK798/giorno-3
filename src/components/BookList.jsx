// import SingleBook from "./SingleBook";
import SingleBookClass from "./SingleBookClass";

const BookList = function (prop) {
  return (
    <>
      {prop.books.map((book, i) => {
        return <SingleBookClass book={book} key={i}></SingleBookClass>;
      })}
    </>
  );
};

export default BookList;
