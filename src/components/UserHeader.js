import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userid)
    }
    
    render() { 
        const user = this.props.user.find((user)=> user.id === this.props.userid)
        if(!user){
            return null;
        }

        return ( 
            <div>{user.name}</div>
         );
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}
 
export default connect(mapStateToProps, {fetchUser})(UserHeader);