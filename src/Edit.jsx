import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Edit = () => {
  const [bookId, setBookId] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [isActive, setIsActive] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedData = { id, title, author, isActive };

    fetch("http://localhost:8000/books/" + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
    //  console.log(updatedData);
  };
  useEffect(() => {
    fetch("http://localhost:8000/books/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        //   console.log(resp);
        setBookId(resp.id);
        setTitle(resp.title);
        setAuthor(resp.author);
        setIsActive(resp.isActive);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="row container wrapper">
        <div className="col-md-4 form">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label className="mb-1" htmlFor="title">
                ID
              </label>
              <input
                type="text"
                className="form-control"
                disabled="disabled"
                value={bookId}
              />
            </div>

            <div className="form-group">
              <label className="mb-1" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
            </div>
            <div className="form-group">
              <label className="mb-1" htmlFor="author">
                Author
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter author"
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
                value={author}
              />
            </div>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                onChange={(e) => {
                  setIsActive(e.target.checked);
                }}
                checked={isActive}
              />
              <label
                className="mt-2 custom-control-label"
                htmlFor="customCheck1"
              >
                Active/In Active
              </label>
            </div>

            <button className="mt-2 btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
