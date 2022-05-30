import BookList from "./BookList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8006/books");
  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BookList books={data} title="All books" />}
    </div>
  );
};

export default Home;
