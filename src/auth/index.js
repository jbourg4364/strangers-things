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
        body: JSON.stringify(userObj)
      });
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

// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
      console.log(result)
      return result
    } catch (err) {
      console.error(err);
    }
  }