import React, {useState} from "react";

export default function Login () {
    const [UserInfo, setUserInfo] = useState({
        Email: "",
        Password: ""
    });
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value
        const name = target.name


        setUserInfo({
            ...UserInfo,
            [name]:value
        });

        
    }
    const handleClick = ()=> {
        setUserInfo(UserInfo);
    }

    return (
        <form>

            <h3>Log in</h3>

            <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input name="Email" type="email" className="form-control" placeholder="Enter email" required
                     value={UserInfo.Email} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input name="Password" type="password" className="form-control" required
                    placeholder="Enter password" value={UserInfo.Password} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleClick}>Sign in</button>
            <p className="forgot-password text-right">
                Forgot <a href="./Support">password?</a>
            </p>
        </form>
    );
}