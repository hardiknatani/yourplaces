import React, { useEffect, useState } from 'react';

import UsersList from "../../user/Components/UsersList"
import ErrorModal from '../../shared/UIComponents/ErrorModal';
import LoadingSpinner from '../../shared/UIComponents/LoadingSpinner';
import { useHttpClient } from "../../shared/Components/hooks/http-hook"

const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL+'/users'
        );

        setLoadedUsers(responseData.users);
       
      } catch (err) {
        // console.log(err)
      }
    };
    fetchUsers();
    
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </React.Fragment>
  );
};

export default Users;
