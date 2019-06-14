import React from 'react';
import { connect } from 'react-redux'
import { fetchGraditude } from '../../actions'

class GraditudeShow extends React.Component{

  componentDidMount(){
    this.props.fetchGraditude(this.props.match.params.id)
  }

  render(){
    if (!this.props.graditude){
      return <div> Loading... </div>
    }

    const { title, description } = this.props.graditude;

    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { graditude: state.graditudes[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchGraditude })(GraditudeShow)
