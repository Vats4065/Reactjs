import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import styled from "styled-components";
import { fakeUserData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/UserSlices";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };

  const deleteUser = (payload) => {
    dispatch(removeUser(payload));
  
  };

  const data = useSelector((state) => {
    return state.users;
  });
  console.log("data", data);
  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button
            className="btn add-btn"
            onClick={(payload) => addNewUser(fakeUserData())}
          >
            Add New Users
          </button>
        </div>
        <table style={{ textAlign: "left", width: "100%" }}>
          {data.map((item, id) => (
            <tr
              style={{ display: "flex", justifyContent: "space-between" }}
              key={id}
            >
              <td
                style={{
                  paddingBottom: "20px",
                }}
              >
                {item}
              </td>
              <td style={{ textAlign: "right" }}>
                <button className=" btn-delete" onClick={(payload) => deleteUser()}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </table>
        <hr />
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1em 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;
