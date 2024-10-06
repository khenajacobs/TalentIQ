//Preferably, this is a environment variable coming from the deployment configuration
const API_BASE_URL = 'LOCALHOST';

//future-proof as I assume we'll need it anyway in a follow-up
export const getUserInformation = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/user-information`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from GET /user-information`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const postUserInformation = async (data: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user-information`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
    //ERR message definition really depends on the HTTP code if it should be translated to a FE or BE error message.
    // 4XX (with exception on 429) should be covered with front-end error messages. 
    // 5XX should come from the server which could be reused in the console of the FE application.
      throw new Error(`Failed to post data to /user-information`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const postUserRoleInformation = async (data: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user-role-information`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
    //ERR message definition really depends on the HTTP code if it should be translated to a FE or BE error message.
    // 4XX (with exception on 429) should be covered with front-end error messages. 
    // 5XX should come from the server which could be reused in the console of the FE application.
      throw new Error(`Failed to post data to /user-information`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};