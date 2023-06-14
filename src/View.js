import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const View = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:8000/books/" + id)
      .then((res) => {
        return res.json();
        // console.log(res);
      })
      .then((response) => {
        // console.log(response);
        setDetails(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      {details && (
        <div className="jumbotron">
          <h1 className="display-4">Book Title : {details.title}</h1>
          <p className="lead">Written by {details.author}</p>
          <p className="">ID : {id}</p>
        </div>
      )}
      <Link to="/" className="btn btn-outline-info">
        Back
      </Link>
    </>
  );
};
export default View;
