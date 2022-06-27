import React, { Component } from 'react';
import axios from "axios";

class CreateUser extends Component {
  /*  constructor(props){
        super();
        this.state = {
            productCategory: ""
        }
        this.onChangeproductCategory = this.onChangeproductCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeproductCategory(e) {
        this.setState({ productCategory: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            productCategory: this.state.onChangeproductCategory
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        
       
         this.setState({
            onChangeproductCategory: ''
       })
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Create New Category</h3>
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
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}*/
 constructor(props){
        super();
        this.state = {
           // username: "",
           // description: "",
           // duration: 0,
           // date: new Date(),
           // users: []
        
            productCategory: "",
           
        }
        //this.onChangeUsername = this.onChangeUsername.bind(this);
        //this.onChangeDescription = this.onChangeDescription.bind(this);
        //this.onChangeDuration = this.onChangeDuration.bind(this);
        //this.onChangeDate = this.onChangeDate.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        
        this.onChangeproductCategory = this.onChangeproductCategory.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);
    }



    onChangeproductCategory(e) {
        this.setState({ productCategory: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const exercise = {
           
            productCategory: this.state.productCategory,
           
        }

        console.log(exercise);

        axios.post('http://localhost:5000/users/add', exercise)
            .then(res => console.log(res.data));

        window.location = "/Category";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Create New Exercise Log</h3>
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
                        <input type="submit" value="Create Category" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default CreateUser;