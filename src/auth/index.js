const COHORT_NAME = '2303-FTB-ET-WEB-FT';

const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const loginUser = async (userObj) => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        const {success, error, data} = await response.json();
        if (success) {
            const {token, message} = data;
            localStorage.setItem('token', token);
            console.log(success, error, data);
            return {token, message};
        }
        if (!success && !error) {
            const {name, message} = data;
            console.log(success, error, data);
            return {name, message};
        }
        console.log(success, error, data);
    } catch (error) {
        console.log(error);
    }
}

export const registerUser = async (userObj) => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // user: {
            // username: 'admin',
            // password: 'admin'
            // }
            //need to return this ^ from a function that collects the input from register (given as a param called userObj)
            //see Login functional component for reference on how to do this ^ it should be very similar except for maybe token info
            //login and register can be on one component and can share the same userObj...
            //loginBttn onClick => loginUser()
            //registerBttn onClick => registerUser()
        })
      });
      const result = await response.json();
// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
      console.log(result)
      return result
    } catch (err) {
      console.error(err);
    }
  }