import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Profile.css";
import { myData } from '../auth'


const Profile = async ({token}) => { 
    // let variable = await myData(token)
    // console.log(variable)
    return(<h1>hello</h1>)

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