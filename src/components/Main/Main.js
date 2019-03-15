import React from "react";
import "./style.css";


function Main(props) {


    return (

        <main className="container">
            <div>
                <img src={props.image} value={props.id} onClick={() => props.handleClick(props.image)} alt="" />)

                </div>
        </main>

    )


}

export default Main;
