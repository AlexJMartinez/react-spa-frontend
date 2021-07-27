import React from 'react'
import './Top.css'
import { connect } from 'react-redux'



const Top = ({uploads}) => {
    const images = uploads.slice(Math.max(uploads.length - 10, 0))
    return(
        <div className="top">
    
            <div align="center"> 
                        
                    
                <div className="recent-container">
                    <ul>
                        {images.map((image, index) => {
                            return (
                                <li key={index}><a target="_blank" href={image.img_url} rel="noreferrer">
                                    <img className="recent-images" src={image.img_url} alt="" />
                                                </a></li>
                            )})}
                    </ul>
                </div>
            </div>
            

        </div>
    )     
               
}
                    
const mapStateToProps = state => {
    return {
        uploads: state.uploads
    }
}


export default connect(mapStateToProps)(Top)

