import React, { Component } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditCategory extends Component {

    constructor(props){
        super();
        this.state = {
            productCategory: "",
            
        }
        this.onChangeproductCategory = this.onChangeproductCategory.bind(this);
               this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    productCategory: res.data.productCategory,
                    //productName: res.data.productName,
                    //productPrice: res.data.productPrice,
                    //date: new Date(res.data.date),
                })
            })
            .catch(function (error){
                console.log(error);
            })

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({ 
                        users: response.data.map(user => user.productCategory)
                    });
                }
            })
    }

    onChangeproductCategory(e) {
        this.setState({ productCategory
            : e.target.value})
    }
    
    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            productCategory: this.state.productCategory,
              }

        console.log(exercise);

        axios.post('http://localhost:5000/users/update/'+this.props.match.params.id, exercise)
            .then(res => console.log(res.data));

        window.location = "/Category";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Edit Category </h3>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>productCategory: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.productCategory}
                            onChange={this.onChangeproductCategory}
                        />
                    </div>
                  
                    <div className="form-group">
                        <input type="submit" value="Edit Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default EditCategory;