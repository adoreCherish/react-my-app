import React from 'react';
import {  Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import { Provider } from "react-redux";
import store from '../store/index.js';

import CptHeader from '../components/CptHeader/CptHeader.js';
import App from '../App.js';

import input from './input.js';
import button from './button.js';

let routes = [];

routes = routes.concat( input,button );

const history = createBrowserHistory();



let routeConfig =
    <Provider store={ store }>
        <Router history={ history }>
            <CptHeader></CptHeader>
            {/* 设置默认组件 */}
            <Route exact path="/" component={App}/>
            {/* 遍历所有component */}
            {
                routes.map((item,index)=>{
                    return (
                        <Route path={item.path} key={index} component={item.cpt}></Route>
                    )
                })
            }
        </Router>
    </Provider>;


export default routeConfig;