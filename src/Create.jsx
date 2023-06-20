import { useState, useId } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const { ID } = useId();
  const [id, setId] = useState();
  const [title, setTitle] = useState();

  const [author, setAuthor] = useState();
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { id, title, author, isActive };
    fetch("http://localhost:8000/books", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        //   res.json();
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div className="row container wrapper">
        <div className="col-md-4 form">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label className="mb-1" htmlFor={"title-" + ID}>
                ID
              </label>
              <input
                id={"title-" + ID}
                type="text"
                className="form-control"
                disabled="disabled"
                value={id}
              />
            </div>

            <div className="form-group">
              <label className="mb-1" htmlFor={"title-" + ID}>
                Title
              </label>
              <input
                id={"title-" + ID}
                type="text"
                className="form-control"
                placeholder="Enter Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label className="mb-1" htmlFor={"title-" + ID}>
                Author
              </label>
              <input
                id={"title-" + ID}
                type="text"
                className="form-control"
                placeholder="Enter author"
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
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

export default Create;
