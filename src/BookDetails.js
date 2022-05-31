import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: book,
    error,
    isPending,
  } = useFetch("http://localhost:8006/books/" + id);

  const handleClick = () => {
    fetch("http://localhost:8006/books/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("Book deleted");
      navigate("/");
    });
  };

  return (
    <div className="book-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {book && (
        <article>
          <h2>{book.title}</h2>
          <p>Written by {book.author}</p>
          <div>Content: {book.content}</div>
          <div>Genre: {book.genre}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BookDetails;
