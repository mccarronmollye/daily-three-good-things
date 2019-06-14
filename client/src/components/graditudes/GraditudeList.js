import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchGraditudes } from '../../actions'

class GraditudeList extends React.Component{
  componentDidMount(){
    this.props.fetchGraditudes()
  }

  renderAdmin(graditude){
    if (graditude.userId === this.props.currentUserId){
      return (
        <div className="right floated content">
          <Link to={`/graditudes/edit/${graditude.id}`} className="ui button primary">Edit</Link>
          <Link to={`/graditudes/delete/${graditude.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      )
    }
  }

  renderList(){
    return this.props.graditudes.map(graditude => {
      return(
        <div className="item" key={graditude.id}>
          {this.renderAdmin(graditude)}
          <i className="large middle aligned icon camera"/>
          <div className="content">
            <Link to={`/graditudes/${graditude.id}`} className="header">
              {graditude.title}
            </Link>
            <div className="description">{graditude.description}</div>
          </div>
        </div>
      )
    })
  }

  renderCreate(){
    if (this.props.isSignedIn){
      return(
        <div style={{ textAlign: 'right'}}>
          <Link to="/graditudes/new" className="ui button primary">
            Create Graditude
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h2>Graditudes</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    graditudes: Object.values(state.graditudes),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {fetchGraditudes})(GraditudeList)
