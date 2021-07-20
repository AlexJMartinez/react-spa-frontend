import React from 'react'
import './Top.css'
import { connect } from 'react-redux'



const Top = ({uploads}) => {
    return(
        <div className="top">
            <h1>Top 10 Images</h1>

            

        </div>
    )   
}

const mapStateToProps = state => {
    return {
        uploads: state.uploads
    }
}


export default connect(mapStateToProps)(Top)

