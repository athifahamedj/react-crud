import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const BookList = () => {
  const [bookData, setBookData] = useState(0);
  const navigate = useNavigate();

  const viewPage = (id) => {
    navigate("./view/" + id);
  };

  const editPage = (id) => {
    navigate("./edit/" + id);
  };

  const deletePage = (id) => {
    // console.log(id);
    fetch("http://localhost:8000/books/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // console.log(bookData[0]);
  useEffect(() => {
    fetch("http://localhost:8000/books")
      .then((res) => {
        // eslint-disable-next-line no-lone-blocks
        {
          return res.json();
          // console.log(res.json());
        }
      })
      .then((resp) => {
        setBookData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div class="card">
          <div class="card-body">
            <Link to="./Create" class="btn btn-primary">
              Create
            </Link>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Book Name</th>
              <th scope="col">Author</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookData &&
              bookData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>
                    <a
                      onClick={() => {
                        editPage(item.id);
                      }}
                      className="btn btn-warning"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => {
                        deletePage(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </a>
                    <a
                      onClick={() => {
                        viewPage(item.id);
                      }}
                      className="btn btn-info"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookList;
