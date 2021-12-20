import React from 'react';
import { connect } from 'react-redux';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Hello, Max</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
