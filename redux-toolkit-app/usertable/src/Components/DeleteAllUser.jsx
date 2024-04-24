import React from "react";
import { clearAllUsers } from "../store/slices/UserSlices";
import { useDispatch } from "react-redux";

function DeleteAllUser() {
  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(clearAllUsers());
  };
  return (
    <>
      <button onClick={() => deleteAllUsers()}>Delete All User</button>
    </>
  );
}

export default DeleteAllUser;
