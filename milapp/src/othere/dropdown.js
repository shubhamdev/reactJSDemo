
import React, { Component } from 'react';
import Search from './Search';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import '../assets/stylesheets/base.scss';
import $ from 'jquery'; 

class App extends Component {

	constructor(props) {
      super(props);
      
      this.state = {
				list : [],
				original :[],
				value: ''
      }
       const {dispatch} = props;
       this.boundActionCreators = bindActionCreators(Actions, dispatch);
       console.log(this.boundActionCreators)

   	};

  componentDidMount() {
			let arrayList =[{ label: "Apple", value: 1 },
			{ label: "Facebook", value: 2 },
			{ label: "Netflix", value: 3 },
			{ label: "Tesla", value: 4 },
			{ label: "Amazon", value: 5 },
			{ label: "Alphabet", value: 6 }
		];
		localStorage.setItem('arrayList', JSON.stringify(arrayList));
    	this.getList();
		}
		
	  getList() {

			let list1 =  JSON.parse(localStorage.getItem('arrayList'));
			// let list1 = Object.assign([], this.state, {list : list1});
			this.setState({ list: [...this.state.list, ...list1 ],
				original: [...this.state.list, ...list1 ] })
		}	

		onChange (event) {
			const value = event.target.value.toLowerCase();
			this.setState({typed: event.target.value});
			const filterData =this.state.original.filter(data => {
			   return data.label.toLowerCase().match(value)
			})
			if(filterData.length === 0) {
				let dynamicList = {
					label:value,
					value: this.state.original.length++
				}
				// this.state.original
				this.setState({ myArray: [...this.state.original, dynamicList] })
				debugger;
			}
			this.setState({ list: [...this.state.list, ...filterData ],
			value: value });
			
		}
		
   	render() {
			 const list =  JSON.parse(localStorage.getItem('arrayList'));
			 const selectedColor = 'Alphabet'
      return (
        <div>
						<input  value={this.state.value}  type="text" onChange={this.onChange.bind(this)} />    
            <DropDown data={this.state.list} Selected={selectedColor}></DropDown>
        </div>
      );
   	}
}

var DropDown = React.createClass(
	{
			render: function () {
					var items = this.props.data;
					return (
					<select value={this.props.Selected}>
							{
									items.map(function (item) {
											return <option value={item.label }>{item.label}</option>;
									})
							}
					</select>);
			}
	});


const mapStateToProps = store => {
  return {
    items: store.updateData.cart
  }
}


const mapDispatchToProps = dispatch => {
	return {
  addCampaigsData: (campaigns) => dispatch(Actions.addCampaigsData(campaigns))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
