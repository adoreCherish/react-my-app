import React from 'react';
import './CptHeader.scss';
import store from '../../store/index.js';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
class CptHeader extends React.Component{
    constructor(props){
        super(props);
        this.onPress = this.onPress.bind(this);
        this.state = store.getState();
        /**
         * 添加数据监听
         */
        store.subscribe(()=>{
            this.setState(store.getState())
        });
    }
    onPress() {
        /**
         * 回退
         */
        history.goBack();
    }
    render() {
        return (
            <header className="cm-pos-rel cm-wh-100 cm-flex cm-col-c cm-bgc-white cm-header cm-fw-b">
                <div className="btn-lt" onClick={ this.onPress }>
                    <i className="cm-pos-rel cm-dpy-b cm-wh-100 cm-ht-100 back-icon cm-cur-ptr" ></i>
                </div>
                <div className="cm-flex-1 cm-txt-c cm-lh-32 cm-header-title">{ this.state.title }</div>
                <div className="btn-rt"></div>
            </header>
        );
    }
}

export default CptHeader;
