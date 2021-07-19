import { Component } from 'react' 
import './UploadInput.css'



class UploadInput extends Component {
    state = {
        img_url: ''
    }

    handleChange(event) {
        this.setState({
            img_url: event.target.value
        })
    }

    render() {
        return (
            <div className="uploadForm">
                <form>
                    <label>Add Image:</label>
                    <input onChange={(event) => this.handleChange(event)} size="50" type="text" name="image_url" value={this.state.img_url} />
                    <input className="submit" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}


export default UploadInput