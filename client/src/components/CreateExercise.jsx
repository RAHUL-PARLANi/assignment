import React, { Component } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateExercise extends Component {

    constructor(props){
        super();
        this.state = {
           // username: "",
           // description: "",
           // duration: 0,
           // date: new Date(),
           // users: []
            productCategory: "",
            productName: "",
            productPrice: 0,
            date: new Date(),
            users: []
        }
        //this.onChangeUsername = this.onChangeUsername.bind(this);
        //this.onChangeDescription = this.onChangeDescription.bind(this);
        //this.onChangeDuration = this.onChangeDuration.bind(this);
        //this.onChangeDate = this.onChangeDate.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        this.onChangeproductCategory = this.onChangeproductCategory.bind(this);
        this.onChangeproductName = this.onChangeproductName.bind(this);
        this.onChangeproductPrice = this.onChangeproductPrice.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({ 
                        //users: response.data.map(user => user.username),
                        //username: response.data[0].username
                        users: response.data.map(user => user.productCategory),
                        productCategory: response.data[0].productCategory
                    });
                }
            })
    }

    onChangeproductCategory(e) {
        this.setState({ productCategory: e.target.value})
    }
    onChangeproductName(e) {
        this.setState({ productName: e.target.value})
    }
    onChangeproductPrice(e) {
        this.setState({ productPrice: e.target.value})
    }
    onChangeDate(date) {
        this.setState({ date: date})
    }
    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            productCategory: this.state.productCategory,
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            date: this.state.date
        }

        console.log(exercise);

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>productCategory: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.productCategory}
                            onChange={this.onChangeproductCategory} >
                            {
                                this.state.users.map(function(user) {
                                    return <option key={user} value={user}>{user}</option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>productName: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.productName}
                            onChange={this.onChangeproductName}
                        />
                    </div>
                    <div className="form-group">
                        <label>productPrice(in Rs): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.productPrice}
                            onChange={this.onChangeproductPrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default CreateExercise;