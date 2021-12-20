import React from 'react';
import { connect } from 'react-redux';

class Session extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Hello, Rando</div>
        )
    }
}

const mapStateToProps = state => {
    return ({

    })
}

const mapDispatchToProps = dispatch => {
    return ({

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Session);
