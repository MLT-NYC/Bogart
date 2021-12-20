import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
