import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../../shared/Components/Card";
import Button from "../../shared/Components/formElements/Button";
import Modal from "../../shared/UIComponents/Modal";
import Map from "../../shared/UIComponents/Map";
import { AuthContext } from "../../shared/Context/auth-context";
import { useHttpClient } from "../../shared/Components/hooks/http-hook";
import ErrorModal from "../../shared/UIComponents/ErrorModal";
import LoadingSpinner from "../../shared/UIComponents/LoadingSpinner";

import "./PlaceItem.css";

function PlaceItem(props) {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPlace, setLoadedPlace] = useState();
  const placeId = useParams().placeId;
  const navigate = useNavigate();

  const [showMap, setShowMap] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);

  function openMap() {
    setShowMap(true);
  }

  function closeMap() {
    setShowMap(false);
  }

  function showDeleteWarning() {
    setDeleteModal(true);
  }

  function hideDeleteWarning() {
    setDeleteModal(false);
  }

  async function confirmDeletePlace() {
    hideDeleteWarning(false);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL+`/places/${props.id}`,
        "DELETE",
        null,{
          authorization: "Bearer " + auth.token
        }
   
      );
      console.log(auth.token)
      props.onDelete(props.id);
    } catch (err) {}
  }

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMap}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMap}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showDeleteModal}
        onCancel={hideDeleteWarning}
        header="Are you sure?"
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={hideDeleteWarning}>
              Cancel
            </Button>
            <Button danger onClick={confirmDeletePlace}>
              Delete
            </Button>
          </React.Fragment>
        }
      >
        <p>Do you want to proceed this place? This cant be undone</p>
      </Modal>
      <li>
        <Card className="content">
          {isLoading && <LoadingSpinner asOverlay />}
          
          <div className="place-item__image">
            <img src={process.env.REACT_APP_ASSET_URL+`/${props.image}`} alt="" />
          </div>

          <div className="place-item__info">
            <h2>{props.title}</h2>
            <p>{props.creatorId}</p>
            <h3>{props.desc}</h3>
            <p>{props.address}</p>

            <div className="place-item__actions">
              <Button inverse onClick={openMap}>
                VIEW ONMAP
              </Button>
              {auth.userId === props.creatorId && (
                <Button to={`/places/${props.id}`}>EDIT</Button>
              )}
              {auth.userId === props.creatorId && (
                <Button danger onClick={showDeleteWarning}>
                  DELETE{" "}
                </Button>
              )}{" "}
            </div>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
}

export default PlaceItem;
