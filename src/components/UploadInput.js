import { Component } from 'react' 
import './UploadInput.css'




class UploadInput extends Component {
    state = {
        img_url: ''
    }


    handleSubmit = event => {
        event.preventDefault()

        const headers = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                upload: {img_url: this.state.img_url}
            })
        }
        fetch("http://localhost:3001/uploads", headers)
        .then(r => r.json())
        .then(alert("Image uploaded!"))

        this.setState({
            img_url: ''
        })
    }

    handleChange(event) {
        this.setState({
            img_url: event.target.value
        })
    }

    render() {
        
        
        return (
            <div className="uploadForm">
                <form onSubmit={this.handleSubmit}>
                    <label className="inputLabel">Add Image:</label>
                    <input onChange={(event) => this.handleChange(event)} 
                           size="50" 
                           type="text" 
                           name="image_url" 
                           value={this.state.img_url}
                           placeholder=" img_url..."
                           className="url_input" />
                    <input className="submit" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}


export default UploadInput