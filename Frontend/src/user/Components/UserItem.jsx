import React from "react";
import "./UserItem.css";
import Avatar from "../../shared/Components/Avatar";
import Card from "../../shared/Components/Card";
import { Link } from "react-router-dom";

function UserItem(props) {
  return (
    <li className="user-item">
      <Card className="user-item__content">
      
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}></Avatar>
          </div>
          <div className="user-item__info">
            <h2>{props.name} </h2> <h3> {props.places}</h3>
          </div>
        </Link>
     

      </Card>
    </li>
  );
}

export default UserItem;
