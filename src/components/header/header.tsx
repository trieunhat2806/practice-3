import React from "react";

const Header =()=>{
    return(
    <div className="App">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <form className="form-inline">
                <div className="input-group">
                <div className="input-group-prepend">
                <span className="input-group-text">@</span>
                </div>
                        <input type="text" className="form-control" placeholder="Username" />
                        <div className="input-group-prenpend">
                            <span className="input-group-text">Password</span>
                        </div>
                        <input type="password" className="form-control" placeholder="Password" />
                    <button className="btn btn-info">Submit</button>
                </div>    
            </form>
        </nav>    
</div>
    );
}

export default Header;