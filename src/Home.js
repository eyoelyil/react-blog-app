import { useState } from "react";

const Home = () => {
  const [books, setPosts] = useState([
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      content:
        "The Alchemist is a novel by Brazilian author Paulo Coelho that is set in Portugal and Portugal's north-eastern coast. The novel chronicles the journey of a shepherd",
      id: 1,
    },
    {
      title: "The Pelican Brief",
      author: "John Grisham",
      content:
        "The Pelican Brief is a novel by American author John Grisham. It is set in the United States and is the first novel by Grisham to be published in the United States",
      id: 2,
    },
    {
      title: "The Fault in Our Stars",
      author: "John Green",
      content:
        "The Fault in Our Stars is a novel by American author John Green. It was first published on August 17, 2012, and is the green novel debut of the author",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      {books.map((book) => (
        <div className="book-preview" key={book.id}>
          <h2>{book.title}</h2>
          <p>Written by {book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
