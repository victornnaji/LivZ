import React, { useState } from 'react';
import {ClickButton } from '../../Atom/Button';
import {RemoteStyle} from "../Remote";
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

const Join = ({history, match}) => {
    const [state, setState] = useState({
        name: "",
    });

    console.log(match.params.id);

    const [error, setError] = useState("");

    const handleClick = () => {
        if(state.name !== "" && state.name !== null){
            history.push(`/guest/${match.params.id}`, state);
        }

        else{
            setError("Please Enter a name");
            console.log("enter a name");
        }
    }

    const handleChange = (value) => {
        setState({
            ...state,
            [value.target.name]: value.target.value
        })
    }


    return (
        <RemoteStyle>
           <div className="form-holder">
                <div className="container">
                    {error && 
                     <ErrorStyle>
                        <div class="alert alert-warning">
                        <div class="alert-container">
                        <b><i class="fa fa-info-circle"></i></b>
                           {error}
                        </div>
                       </div>
                     </ErrorStyle>
                    }
                    <div className="row input-container">
                        <div className="styled-input wide">
                            <input type="text" required name="name" value={state.name} onChange={handleChange}/>
                            <label>Display Name</label> 
                        </div>
                    </div>

                    <ClickButton onClickkkk={handleClick} primary="true" >
                            Continue
                    </ClickButton>

                </div>
            </div>
        </RemoteStyle>
    )
};

const ErrorStyle = styled.div`
  .alert {
    background-color: #29d2e4;
    border: 1px solid #29d2e4;
    color: #fff;
    padding: 15px 20px;
  }

  .alert .alert-container {
  position: relative;
  max-width: 960px;
  margin: 0 auto;
}
.alert.alert-warning {
  background-color: #008cff8c;
  border: 1px solid #008cff8c;
}

.alert-container b{
    margin-right: 2px;
}

`;

export default withRouter(Join);
