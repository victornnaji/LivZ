import React from 'react';

const Guest = ({history}) => {
    const guest = history.location.state?.name;
    
    console.log(history);
    if(guest === undefined){
        history.push("/404");
    }
    return (
        <div>
            Welcome {guest}
        </div>
    )
}

export default Guest
