import React, { useCallback, useReducer,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../../shared/Components/formElements/Input";
import Button from '../../shared/Components/formElements/Button';
import useForm from '../../shared/Components/hooks/form-hook';
import {  VALIDATOR_REQUIRE,  VALIDATOR_MINLENGTH} from '../../shared/util/validators';
import { useHttpClient } from '../../shared/Components/hooks/http-hook';
import { AuthContext} from '../../shared/Context/auth-context';
import ErrorModal from '../../shared/UIComponents/ErrorModal';
import LoadingSpinner from '../../shared/UIComponents/LoadingSpinner';
import ImageUpload from '../../shared/Components/formElements/ImageUpload';
import './NewPlace.css';



const NewPlace = () => {
  const navigate=useNavigate()

  const auth = useContext(AuthContext)

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
const [formState,inputHandler] = useForm({
  title: {
    value: '',
    isValid: false
  },
  description: {
    value: '',
    isValid: false
  },
  address:{
    value:"",
    isValid:false
  },
  image:{
    value:null,
    isValid:false
  }
},false);

async  function uploadImage(file){
  const data = new FormData();
  data.append("file",file)
      data.append("upload_preset", "zpq3re9b");
      data.append("cloud_name", "yourhappyplaces");
  const respData = await fetch("https://api.cloudinary.com/v1_1/yourhappyplaces/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
      .then((data) => {
        return (data.url.toString());

      })
      .catch((err) => {
        console.log(err);
      });
      console.log(respData)
      return respData
        }  


  const placeSubmitHandler = async event=>{
    event.preventDefault();
    try {

      const formData = new FormData();
      formData.append('title', formState.inputs.title.value);
      formData.append('description', formState.inputs.description.value);
      formData.append('address', formState.inputs.address.value);
      formData.append('creator', auth.userId);
      formData.append('image', await uploadImage(formState.inputs.image.value));

      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL+'/places',
        'POST',
        formData,{
          authorization: "Bearer "+ auth.token
        }
      );
      navigate('/')
    } catch (err) {}
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
    <form className="place-form" onSubmit={placeSubmitHandler}>
      {isLoading && <LoadingSpinner asOverlay />}
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
            <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE(5)]}
        errorText="Please enter a valid address"
        onInput={inputHandler}
      />
      <ImageUpload id='image' onInput={inputHandler} errorText="Please provide an image" />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>


    </React.Fragment>
  );
};

export default NewPlace;
