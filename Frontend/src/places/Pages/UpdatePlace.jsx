import React, { useContext, useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Input from "../../shared/Components/formElements/Input";
import Button from "../../shared/Components/formElements/Button";
import Card from "../../shared/Components/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import useForm from "../../shared/Components/hooks/form-hook";
import { useHttpClient } from "../../shared/Components/hooks/http-hook";
import { AuthContext } from "../../shared/Context/auth-context";
import ErrorModal from "../../shared/UIComponents/ErrorModal";
import LoadingSpinner from "../../shared/UIComponents/LoadingSpinner";

import "./NewPlace.css";

function UpdatePlace() {
  const auth = useContext(AuthContext)
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPlace, setLoadedPlace] = useState();
  const placeId = useParams().placeId;
  const navigate = useNavigate()
  console.log("place id to search: ", placeId)

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL+`/places/${placeId}`
        );
        setLoadedPlace(responseData.place);
        setFormData(
          {
            title: {
              value: responseData.place.title,
              isValid: true
            },
            description: {
              value: responseData.place.description,
              isValid: true
            }
          },
          true
        );

      } catch (err) {}
    };
    fetchPlace();
  }, [sendRequest, placeId, setFormData]);



  async function submitHandler(event) {
    event.preventDefault();
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL+`/places/${placeId}`,
        'PATCH',
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value
        }),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token
        }
      );
      navigate('/' + auth.userId + '/places');
    } catch (err) {}
  };
  
  if (!loadedPlace && error) {

    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  console.log(error)
  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && loadedPlace && (
        <form action="" className="place-form" onSubmit={submitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title"
            onInput={inputHandler}
            initialValue={loadedPlace.title}
            initialValid={true}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description"
            onInput={inputHandler}
            initialValue={loadedPlace.description}
            initialValid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE PLACE
          </Button>
        </form>
      )}
    </React.Fragment>
  );
}

export default UpdatePlace;