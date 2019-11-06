import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../store/actions/actions';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        //this.props.getAllUsers();
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        //console.log('getDerivedStateFromProps', nextProps, prevState)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.getAllUsers}>Press to see Users</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return ({
        article: state.news,
        allUsers: state.users,
    })
}

const mapDispatchToProps = {
    getAllUsers
};

Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default withRouter(Home);
