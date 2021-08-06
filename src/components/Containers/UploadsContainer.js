import React, { Component } from 'react' ;
import { connect } from 'react-redux';
import ImageSlider  from './ImageSlider';
import { fetchUploads } from '../Actions/fetchUploads'
import './UploadsContainer.css';
class UploadsContainer extends Component {
 
    // Rather than doing a fetch call inside of componentDidMount
    // I made a dispatch action that returns a function (thunk)
    // since generally dispatch actions return an object 
    // (the new state based on the older state of the object)

    // That function uses axios to fetch uploads, assign them to a variable
    // and use that variable as the payload value in my dispatch action.

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