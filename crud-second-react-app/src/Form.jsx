import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
  });
  const [data, setData] = useState([]);
  const [firstname, setFname] = useState();
  const [lastname, setLname] = useState();

  const handleClear = () => {
    setFname("");
    setLname("");
  };

  const handleChange = (e) => {
    setForm(() => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { id: uuidv4(), ...form }]);
    handleClear();
  };

  const handleDelete = (id) => {
    const dt = data.filter((item) => item.id !== id);
    setData(dt);
    handleClear();
  };

  const handleEdit = (id) => {
    const ed = data.filter((item) => item.id === id);

    setFname(ed[0].fname);
    setLname(ed[0].lname);
  };

  console.log(data);
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Firstname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter fname"
            name="fname"
            onChange={handleChange}
            value={firstname}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Lastname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            name="lname"
            onChange={handleChange}
            value={lastname}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Add
        </button>
      </form>

      <table className="table table-striped text-center table-bordered mt-5">
        <thead>
          <tr>
            <th>no.</th>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(item.id);
                   
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Form;
