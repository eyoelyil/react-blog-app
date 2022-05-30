import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="create">
      <h2>Add a new book</h2>
      <form>
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
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Create;
