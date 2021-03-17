import React ,{useState} from "react";

export default function SignUp()  {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        textarea: ""
    });

    const handleChange = (e) => {
        if(e.target.name === "textarea") {
            if  (e.target.value.length <= 500){
                setUserInfo({
                    ...userInfo,
                    [e.target.name]:e.target.value
                });
                console.log(e.target.value.length);
            }
        } else {
            setUserInfo({
                ...userInfo,
                [e.target.name]:e.target.value
            });
        }
    };

    const handleClick = ()=> {
        setUserInfo(userInfo);
    }


    return (
        <div className="container pt-3">
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" required
                        name="firstName" value={userInfo.firstName} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" required
                        name="lastName" value={userInfo.lastName} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" required
                        name="email" value={userInfo.email} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required
                        name="password" value={userInfo.password} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="comment">Essay:</label>
                    <textarea className="form-control" rows="5" id="comment"  required
                            placeholder="Write 250 to 500 words explaining your goals for this program"
                            name="textarea" value={userInfo.textarea} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleClick}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./sign-in">log in?</a>
                </p>
            </form>
        </div>
    );
}