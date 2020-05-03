import React from 'react'
import { Link} from "react-router-dom"
import "../components/Navigation.css"

function Navigation(){
    return <div className="Nav">
        <Link to="/">Home</Link><br/>
        <Link to={{
            pathname: "/about",
            state:{
                fromNavigation: true
            }
        }
        }>About</Link>
    </div>
}

export default Navigation