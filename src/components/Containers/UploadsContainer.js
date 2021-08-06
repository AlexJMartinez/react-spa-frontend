import React, { Component } from 'react' ;
import { connect } from 'react-redux';
import ImageSlider  from './ImageSlider';
import { fetchUploads } from '../Actions/fetchUploads'
import './UploadsContainer.css';
class UploadsContainer extends Component {
 
    componentDidMount() {
        this.props.fetchUploads()
    }

    render() {
        
        return (
            <div>
                <ImageSlider slides={this.props.uploads}/>
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
        uploads: state.uploads
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addImage: (image) => dispatch({type: 'ADD_IMAGE', payload: image})
        , fetchUploads: () => dispatch(fetchUploads()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadsContainer)