import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
  });
  const [data, setData] = useState([]);
//   const [firstname, setFname] = useState("");
//   const [lastname, setLname] = useState("");
  const [Id, setId] = useState(0);

  const handleClear = () => {
    setForm({ fname: "", lname: "" });
    // setFname("");
    // setLname("");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const index = data.findIndex((item) => item.id === Id);

    console.log("index", index);

    const updatedData = [...data];
    updatedData[index].dataOf.fname = form.fname;
    updatedData[index].dataOf.lname = form.lname;
    setData(updatedData);
    handleClear();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { id: uuidv4(), dataOf: form }]);
    handleClear();
  }; 

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    handleClear();
  };

  const handleEdit = (id) => {
    const editItem = data.find((item) => item.id === id);
    setId(id);
    setForm(editItem.dataOf);
  };

  return (
    <>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Firstname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter fname"
            name="fname"
            value={form.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Lastname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Lastname"
            name="lname"
            value={form.lname}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          Add
        </button>
        <button className="btn btn-danger ms-3 mt-3" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-info ms-3 mt-3" onClick={handleUpdate}>
          Update
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.dataOf.fname}</td>
              <td>{item.dataOf.lname}</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Form;
