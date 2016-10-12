/*
* @Author: Administrator
* @Date:   2016-10-12 15:36:34
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-12 17:48:59
*/

'use strict';

import Reflux from 'reflux';
import MyButtonAction from '../actions/MyButtonAction';

const MyButtonStore = Reflux.createStore({
	listenables:MyButtonAction,
	init:function(){
		this.items=[];
		console.log('init');
	},
	onAddItem:function(){
		this.items.push('item');
		this.trigger(this.items);
	}
})

export default MyButtonStore;