import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import MyButton from './MyButton';
import MyButtonAction from '../actions/MyButtonAction';
import MyButtonStore from '../stores/MyButtonStore';
class MyButtonCtrl extends React.Component{
	state={
		items:[]
	}
	clickHandler(){
		MyButtonAction.addItem();
	}
	render(){
		return(
			<div>
				<MyButton items={this.state.items} onClick={::this.clickHandler}/>
			</div>
		)
	}
}
ReactMixin.onClass(MyButtonCtrl, Reflux.connect(MyButtonStore,'items'));
export default MyButtonCtrl;