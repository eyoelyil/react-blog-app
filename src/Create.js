import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [content, setContent] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title,
      author,
      genre,
      content,
    };

    setIsPending(true);

    fetch("http://localhost:8006/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    }).then(() => {
      console.log("Book created");
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <label>Book Title</label>
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author</label>
        <input
          type="text"
          name="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          required
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <label>Content</label>
        <textarea
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {!isPending && <button>Add Book</button>}
        {isPending && <button disabled>Adding book...</button>}
      </form>
      <p>name</p>
    </div>
  );
};

export default Create;
