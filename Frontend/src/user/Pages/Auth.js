import React, { useState, useContext } from 'react'
import useForm from '../../shared/Components/hooks/form-hook'
import Card from '../../shared/Components/Card'
import Input from '../../shared/Components/formElements/Input'
import Button from '../../shared/Components/formElements/Button'
import {AuthContext} from '../../shared/Context/auth-context'
import ErrorModal from '../../shared/UIComponents/ErrorModal'
import LoadingSpinner from '../../shared/UIComponents/LoadingSpinner'
import {useHttpClient} from "../../shared/Components/hooks/http-hook"
import ImageUpload from '../../shared/Components/formElements/ImageUpload'

import "./Auth.css"

import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'



const Auth = () => {


  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image:undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          },
          image:{
            value:null,
            isValid:false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = async event => {
    event.preventDefault();

    if (isLoginMode) {
 
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL+'/users/login',
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          }),
          {
            'Content-Type': 'application/json'
          }
        );
        auth.login(responseData.userId,responseData.token);
      } catch (err) {
        // console.log("auth js 86",err)
      }
    } else {
      try {

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
                // console.log(err);
              });
              return respData
                } 

        const formData = new FormData();
        formData.append('email', formState.inputs.email.value);
        formData.append('name', formState.inputs.name.value);
        formData.append('password', formState.inputs.password.value);
        formData.append('image',await uploadImage(formState.inputs.image.value));


        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL+'/users/signup',
          'POST',
          formData
        );

        auth.login(responseData.userId,responseData.token);
      } catch (err) {
        // console.log("auth js 105",err)
      }
    }

  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
            />
          )}
          {!isLoginMode && 
<ImageUpload id="image" center onInput={inputHandler} errorText="Please provide an image"/>
          }
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 6 characters."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default Auth;
