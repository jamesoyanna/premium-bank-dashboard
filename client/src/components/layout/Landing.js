import React from 'react'
import {Link} from "react-router-dom";

class extends Component {
    render() {
        return (
            <div className="landing">
                <header>
                    <Link className="logo" to="/">
                        <h1>
                        <strong>PREMIUM BANK</strong>
                        </h1>
                    </Link>
                    <button className="form-register"
                </header>
            </div>
        )
    }
}

export default  Landing;