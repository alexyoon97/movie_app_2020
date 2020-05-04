import React from "react"
import { Redirect } from "react-router-dom"
import "../routes/Detail.css"

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props
        if(location.state == undefined){
            history.push("/")
        }
    }
    render(){
        const { location } = this.props
        if(location.state){
            return(
                <div className="d_movie-info">
                    <img className="d_img" src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                    <div className="d_movie-desc">
                        <h3>{location.state.title}, {location.state.year}</h3>
                        {location.state.genres.map(genre=><span className="genre">{genre}</span>)}
                        <h3>{location.state.summary}</h3>
                    </div>
                </div>
            )
        }
        else
            return null;
        
    }
}
export default Detail