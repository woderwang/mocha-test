import React, { useEffect } from 'react';
import axios from 'axios';
function Avatar() {
    useEffect(() => {
        axios.get("/users").then(resp => {
            console.log('users api data is', resp.data)
        });
    }, []);
    return <div>Avatar</div>;
}
export default Avatar;