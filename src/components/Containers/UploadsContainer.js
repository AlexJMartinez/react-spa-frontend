import { Component } from 'react' 
import { connect } from 'react-redux'
import './UploadsContainer.css'



class UploadsContainer extends Component {
    state = {
        count: 0,
        uploads: []
    }

    incrementLikes = (id) => {
        // let newCount = this.state.count + 1
        // this.setState({
        //     count: newCount  
        // })
        const headers = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }

        }
        fetch(`http://localhost:3001/likes/${id}`, headers)
        .then(r => r.json())
        .then(data => {
            console.log(data) 
            this.setState({
                count: data.likes
            })
        })
    }

    componentDidMount() {
        fetch("http://localhost:3001/all_uploads")
        .then(r => r.json())
        .then(data => {
            this.setState({ 
                uploads: data })
        })
        
    }

    renderUploads() {
        if (!this.state.uploads.length) {
            return <div className="loading">
                "Loading ..."
                   </div>
        } else {
             return this.state.uploads.map((img) => {
                 
                return (
                       
                            <li key={img.id}>
                            <a target="_blank" href={img.img_url} rel="noreferrer">
                                <img src={img.img_url} alt=""/>
                                </a><br/>
                                <button onClick={() => this.incrementLikes(img.id)}>Likes: {this.state.count}</button>
                                </li>
                       
                )
            })
        }
    }

    

    render() {
        return (
            <div>
                 <ul className="img_list">
                    {this.renderUploads()}
                 </ul>
                   
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadsContainer)