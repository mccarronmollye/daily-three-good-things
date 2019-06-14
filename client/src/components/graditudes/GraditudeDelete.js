import React from 'react';
import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { fetchGraditude, deleteGraditude } from '../../actions'
import { Link } from 'react-router-dom'

class GraditudeDelete extends React.Component {

  componentDidMount(){
    this.props.fetchGraditude(this.props.match.params.id);
  }

  renderActions(){

    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteGraditude(id)} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }

  renderContent(){
    if (!this.props.graditude){
      return 'Are you sure you want to delete this Graditude?'
    }
    return `Are you sure you want to delete this Graditude with title: ${this.props.graditude.title}`
  }

  render(){
    return (
        <Modal
          title="Delete Graditude"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
          />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { graditude: state.graditudes[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchGraditude, deleteGraditude})(GraditudeDelete)
