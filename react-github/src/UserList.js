import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

//a list of link routs
const UserList = (props)=>{
    return (<ul>
                <li>{props.match.params.repo}</li>
                <li>Two</li>
            </ul>
        )
}

export default UserList;