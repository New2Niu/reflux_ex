import React from 'react';

class MyButton extends React.Component{
	render(){
		return(
			<div>
				<ul>
					{
						this.props.items.map((item,i)=>{
							return(
								<li key={i}>{item}</li>
							)
						})
					}
				</ul>
				<button onClick={this.props.onClick}>增加</button>
			</div>
		)
	}
}

export default MyButton;