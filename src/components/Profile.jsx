import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Profile.css";
import { myData } from '../auth'

//the object error we were getting is because you cant make a component async but you can put an async function in a componenet which is what we need to do
const Profile =  ({userData, setUserData, token}) => { 
    
    const getData = async (token) => {
        try {
            let fetchedData = await myData(token)
            console.log(fetchedData);
            setUserData(fetchedData.data);
            // return fetchedData
            
        } catch (error) {
            console.log(error)
        }
    }
    
    //getMe is done and posting to the page by CRUD OPS 18:37
    useEffect(() => {
        getData(token);
    }, [])

    console.log({userData});
    
    return(
    <>
        <h1>hello this is your {token}</h1>
    </>
    )
    
}

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     console.log(profile);


// }

// const buttonStyle = {
//     backgroundColor: stored.color,
//     color: calcButtonTextColor(stored.color)
// };

// return <div>
//     <Group>
//         <h2>Name:</h2> {stored.name}
//     </Group>
//     <Group>
//         <h2>Birthday:</h2> {months.getShortName(stored.month)} {stored.day}
//     </Group>
//     <Group>
//         <button
//             style={buttonStyle}
//             onClick={startEditCallback}
//         >Edit</button>
//     </Group>
// </div>
// }

export default Profile;