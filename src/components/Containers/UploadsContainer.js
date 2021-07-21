import React, { Component } from 'react' ;
import { connect } from 'react-redux';
import ImageSlider  from './ImageSlider';
import { fetchUploads } from '../Actions/fetchUploads'
import './UploadsContainer.css';

class UploadsContainer extends Component {
    // state = {
    //     uploads: []
    // }

    // incrementLikes = (id) => {
    //     let newCount = this.state.count + 1
    //     this.setState({
    //         count: newCount  
    //     })
    //     const headers = {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         }

    //     }
    //     fetch(`http://localhost:3001/likes/${id}`, headers)
    //     .then(r => r.json())
    //     .then(data => {
           
    //         this.setState({
    //             count: data.likes
    //         })
    //     })
    // }

    componentDidMount() {
        // fetch("http://localhost:3001/all_uploads")
        // .then(r => r.json())
        // .then(data => {
        //     this.setState({ 
        //         uploads: data })
        // })
        this.props.fetchUploads()
    }

    // renderUploads() {
    //     if (!this.state.uploads.length) {
    //         return <div className="loading">
    //             "Loading ..."
    //                </div>
    //     } else {
    //          return this.state.uploads.map((img) => {
                 
    //             return (
                       
    //                         <li key={img.id}>
    //                         <a target="_blank" href={img.img_url} rel="noreferrer">
    //                             <img src={img.img_url} alt=""/>
    //                             </a><br/>
    //                             <button onClick={() => this.incrementLikes(img.id)}>Likes: {this.state.count}</button>
    //                             </li>
                       
    //             )
    //         })
    //     }
    // }

    

    render() {
        
        return (
            <div>
                 {/* <ul className="img_list">
                    {this.renderUploads()}
                 </ul> */}
                <ImageSlider slides={this.props.uploads}/>
            </div>
           
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        uploads: state.uploads
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addImage: (image) => dispatch({type: 'ADD_IMAGE', payload: image})
        , fetchUploads : () => dispatch(fetchUploads()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadsContainer)