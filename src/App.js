import React from 'react';
import { Link } from 'react-router-dom';
import Tick from './pages/Tick/tick.js';
import { CHANGE_VALUE } from './store/actionTypes';
import { connect } from 'react-redux';
// const mapStateToProps = state=>state;
const mapDispatchToProps = (dispatch, props) => {
    return {
        setTitle: function(){
            dispatch({
                type: CHANGE_VALUE,
                title: 'React'
            })
        }
    }
}
// import HelloWorld from './HelloWorld.js';
class App extends React.Component{
    // constructor(){
    //     super();
    // }
    componentDidMount() {
        this.props.setTitle();
    }
    render() {
        return (
            <article className="cm-pos-rel cm-wrapper za-castle" >
                <Tick></Tick>
                <ul className="cm-pd-lr-20">
                    <li className="cm-mg-t-20">
                        <Link to="/input"><button className="cm-btn cm-wh-100">Input</button></Link>
                    </li>
                    <li className="cm-mg-t-20">
                        <Link to="/button"><button className="cm-btn cm-wh-100">Button</button></Link>
                    </li>
                    <li className="cm-mg-t-20">
                        <Link to="/li"><button className="cm-btn cm-wh-100">li</button></Link>
                    </li>
                </ul>
            </article>
        );
    }
}
export default connect(null, mapDispatchToProps)(App);
