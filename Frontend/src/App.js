import React, { useState, useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Users from "./user/Pages/Users";
import UserPlaces from "./places/Pages/UserPlaces";
import MainNavigation from "./shared/UIComponents/MainNavigation";
import NewPlace from "./places/Pages/NewPlace";
import UpdatePlace from "./places/Pages/UpdatePlace";
import Auth from "./user/Pages/Auth";
import { AuthContext } from "./shared/Context/auth-context";
import useAuth from "./shared/Components/hooks/auth-hook";


const App = () => {
  const {token,login,logout,userId} = useAuth()

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path={"/"} exact element={<Users />} />
        <Route path="/:userId/places" exact element={<UserPlaces />} />
        <Route path="/places/new" exact element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" exact element={<Users />} />
        <Route path="/:userId/places" exact element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" />}></Route>
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
