import React, { Component} from 'react';
import { connect } from 'react-redux';


class Details extends Component {
    render() {
        return (
            <div>
              
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.data,
    };
};

export default connect(mapStateToProps, null)(Details);

