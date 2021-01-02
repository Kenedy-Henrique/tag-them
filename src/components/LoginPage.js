import React from "react";

import "../styles/loginPage.css";

const LoginPage = () => {
    return(
        <div>
            <form encType="UTF8" action="http://localhost:8000/" method="POST">
                <label htmlFor="choose">Would you prefer a banana or cherry?</label>
                <input type="text" id="choose" name="zimb" value="test"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default LoginPage;