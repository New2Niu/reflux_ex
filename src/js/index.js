/*
* @Author: Administrator
* @Date:   2016-10-12 13:57:34
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-12 16:29:12
*/

'use strict';
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import MyButtonCtrl from './components/MyButtonCtrl';
ReactDom.render(
	<MyButtonCtrl/>,
	document.getElementById('container')
)