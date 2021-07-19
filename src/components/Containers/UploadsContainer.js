import {Component} from 'react' 


class UploadsContainer extends Component {
    state = {
        count: 0
    }

    incrementLikes = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }

    //render Uploads components in this <div>

    render() {
        return (
            <div>
                <button onClick={this.incrementLikes}>Likes: {this.state.count}</button>
            </div>
        )
    }
}

export default UploadsContainer