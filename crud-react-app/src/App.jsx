import { useEffect, useState } from "react";
import "./App.css";
import userData from "./data";

function App() {
  const [data, setData] = useState([]);
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(userData);
  }, []);

  const handleEdit = (id) => {
    const ed = data.filter((item) => item.Id === id);
    setIsUpdate(true);
    setId(id);
    setFname(ed[0].Fname);
    setLname(ed[0].Lname);
  };

  const handleDelete = (id) => {
    const dt = data.filter((item) => item.Id !== id);
    setData(dt);
  };

  const handleClear = () => {
    setId(0);
    setFname("");
    setLname("");
    setIsUpdate(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const index = data
      .map((item) => {
        return item.Id;
      })
      .indexOf(id);

    const dt = [...data];
    dt[index].Fname = firstname;
    dt[index].Lname = lastname;
    setData(dt);
    handleClear();

    console.log(index);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const dt = [...data];
    const obj = {
      Id: dt.length + 1,
      Fname: firstname,
      Lname: lastname,
    };
    dt.push(obj);
    setData(dt);
   
  };

  return (
    <>
      <section className="py-5">
        <form>
          <table className="table table-bordered border-dark table-striped text-center p-1">
            <tr>
              <td className="text-end">
                <label>Fname: </label>
              </td>
              <td className="text-start">
                <input
                  type="text"
                  className="ms-1"
                  onChange={(e) => setFname(e.target.value)}
                  value={firstname}
                  placeholder="enter fname"
                />
              </td>

              <td className="text-end">
                <label>Lname: </label>
              </td>
              <td className="text-start">
                <input
                  type="text"
                  className="ms-1"
                  onChange={(e) => setLname(e.target.value)}
                  value={lastname}
                  placeholder="enter lname"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={6}>
                {isUpdate ? (
                  <button
                    className="btn btn-primary me-2"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                ) : (
                  <button className="btn btn-primary me-2" onClick={handleAdd}>Add</button>
                )}

                <button className="btn btn-danger" onClick={handleClear}>
                  Clear
                </button>
              </td>
            </tr>
          </table>
        </form>
      </section>

      <div className="app">
        <table className="table table-dark table-striped table-hover table-bordered text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Fname</th>
              <th>Lname</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.Id}</td>
                  <td>{item.Fname}</td>
                  <td>{item.Lname}</td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleEdit(item.Id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.Id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
