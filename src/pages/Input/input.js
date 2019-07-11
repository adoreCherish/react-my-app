import React from 'react';
import CptInput from '../../components/CptInput/cptInput.js';
import store from '../../store/index.js';
import { connect } from 'react-redux';
import { CHANGE_VALUE } from '../../store/actionTypes.js';
// import { setTitle } from '../../store/actionCreators.js';
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
    return {
        title: store.getState().title
    }
}

const mapDispatchToProps =  (dispatch, props) => {
    return {
        setTitle: function() {
            dispatch({
                type: CHANGE_VALUE,
                title: 'Input'
            })
                
            
        }
    }
  }
  
  

class input extends React.Component{
    constructor(){
        super();
        //this.state = store.getState();
    }
    componentDidMount() {
        this.props.setTitle();
        // let type = CHANGE_VALUE;
        // let title = 'Input';
        // const action = setTitle(type, title);
        // console.log('action',action);
        // store.dispatch(action);
    }
    render() {
        return (
            <div className="cm-mg-t-20 cm-pd-lr-30">
                <CptInput className="cm-dpy-b cm-ipt" value="text" type="text" name="input"></CptInput>
                <CptInput className="cm-dpy-b cm-ipt cm-mg-t-20" value="1" type="number" name="number"></CptInput>
                <CptInput className="cm-dpy-b cm-ipt cm-mg-t-20" value="tel" type="tel" name="tel"></CptInput>
                <CptInput className="cm-dpy-b cm-ipt cm-mg-t-20" value="password" type="password" name="password"></CptInput>
                {/* <CptInput className="cm-dpy-b cm-mg-t-20" type="file" name="file"></CptInput> */}
                <div className="cm-txt-c cm-flex cm-mg-t-20">
                    <CptInput className="cm-btn cm-bgc-green cm-wh-100" value="button" type="button" name="button"></CptInput>
                    <CptInput className="cm-wh-100 cm-mg-l-10" value="submit" type="submit" name="submit"></CptInput>
                </div>
                
            </div>
            
        );
    }
}


// export default input;
/**
 * component 模板->input
 * mapDispatchToProps 更新state
 * 
 */
export default connect(null,mapDispatchToProps)(input)