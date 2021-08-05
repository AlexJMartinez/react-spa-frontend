import React from 'react'
import './Top.css'
import ImageSlider  from './Containers/ImageSlider';
import { connect } from 'react-redux'


const Top = ({uploads}) => {
    const images = uploads.slice(Math.max(uploads.length - 10, 0))
   
    return(
        <div className="top">
            <div>     
                <div>
                    <ImageSlider slides={images}/>
                    {/* <table className="grid">
                        {images.map((image, index) => {
                            return (
                                <td>
                                    <tr key={index}><a target="_blank" href={image.img_url} rel="noreferrer">
                                    <img className="recent-images" src={image.img_url} alt="" />
                                                </a></tr>
                                </td>
                                
                            )})}
                            
                            <td>
                                <tr><a target="_blank" href={images[0].img_url} rel="noreferrer">
                                    <img className="recent-images" src={images[0].img_url} alt="" /></a></tr>
                                <tr><a target="_blank" href={images[1].img_url} rel="noreferrer">
                                    <img className="recent-images" src={images[1].img_url} alt="" /></a></tr>
                            </td>
                            <td>
                                <tr><a target="_blank" href={images[2].img_url} rel="noreferrer">
                                    <img className="recent-images" src={images[2].img_url} alt="" /></a></tr>
                                <tr><a target="_blank" href={images[3].img_url} rel="noreferrer">
                                    <img className="recent-images" src={images[3].img_url} alt="" /></a></tr>
                            </td>
                            <td>
                                <tr><a target="_blank" href={images[4].img_url} rel="noreferrer">
                                    <img className="recent-images" src={images[4].img_url} alt="" /></a></tr>
                                <tr><a target="_blank" href={images[5].img_url} rel="noreferrer">
                                    <img className="recent-images" src={images[5].img_url} alt="" /></a></tr>
                            </td>
                            <td>
                                <tr><a target="_blank" href={images[6].img_url} rel="noreferrer">
                                    <img className="recent-images" src={images[6].img_url} alt="" /></a></tr>
                                <tr><a target="_blank" href={images[7].img_url} rel="noreferrer">
                                    <img className="recent-images" src={images[7].img_url} alt="" /></a></tr>
                            </td>
                            <td>
                                <tr><a target="_blank" href={images[8].img_url} rel="noreferrer">
                                    <img className="recent-images" src={images[8].img_url} alt="" /></a></tr>
                                <tr><a target="_blank" href={images[9].img_url} rel="noreferrer">
                                    <img className="recent-images" src={images[9].img_url} alt="" /></a></tr>   
                            </td>
                    </table> */}
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

