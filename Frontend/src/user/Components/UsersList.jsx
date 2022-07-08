import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";

function UsersList(props) {


  return (
    <ul className="users-list ">
      {props.items.length > 0 &&
        props.items.map((user) => {
          return (
            <UserItem
              id={user.id}
              image={user.image}
              name={user.name}
              places={user.places.length}
            />
          );
        })}
    </ul>
  );
}

export default UsersList;
