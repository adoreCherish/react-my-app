import React from 'react';
import { CHANGE_VALUE } from '../../store/actionTypes.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const mapStateToProps = state=>state;
const mapDispatchToProps = (dispatch, props) => {
    return {
        setTitle: function(){
            dispatch({
                type: CHANGE_VALUE,
                title: 'Button'
            })
        }
    }
}
class button extends React.Component{
    constructor(){
        super();
        this.goNext = this.goNext.bind(this);
    }
    componentDidMount(){
        this.props.setTitle();
    }
    goNext() {
        // this.props.history.push('/input')
    }
    render() {
        return(
            <div className="cm-pd-lr-30 cm-mg-t-20 cm-txt-c">
                
                
                <button className="cm-btn green cm-wh-100" > 
                    <Link to="/button/1">green</Link>
                </button>
                <button type="line" className="cm-btn green cm-wh-100 cm-mg-t-20" onClick={ this.goNext }>green</button>
                <button type="line" disabled className="cm-btn green cm-wh-100 cm-mg-t-20">green</button>
                <button disabled className="cm-btn green cm-wh-100 cm-mg-t-20">green</button>
                <button type="mini" className="cm-btn green cm-mg-t-20">green</button>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(button)