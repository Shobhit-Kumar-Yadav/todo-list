import React from 'react'
import todo from "../images/todo.png";

const Todo = () => {
    return(
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo"/>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default Todo