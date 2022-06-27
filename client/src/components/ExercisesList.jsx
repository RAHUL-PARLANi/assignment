import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = props => (
    
    <tr>
        <td>{props.exercise.productCategory}</td>
        <td>{props.exercise.productName}</td>
        <td>{props.exercise.productPrice}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <button className="btn btn-secondary"><Link to={"/edit/"+props.exercise._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.exercise._id) }}>Delete</button>
        </td>
    </tr>
)

/*function ProductTable(props) {
    const { products } = props;
    let sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return (
      <Table>
        <caption>Our products</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>In Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody>
      </Table>
    );
  }
*/
class ExercisesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: []
            
        }
        this.onSort = this.onSort.bind(this)

        this.deleteExercise = this.deleteExercise.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(res => {
                this.setState({ exercises: res.data })
            })
            .catch(error => console.log(error));
    }
    onSort(event, sortKey){
        /*
        assuming your data is something like
        [
          {accountname:'foo', negotiatedcontractvalue:'bar'},
          {accountname:'monkey', negotiatedcontractvalue:'spank'},
          {accountname:'chicken', negotiatedcontractvalue:'dance'},
        ]
        */
        const data = this.state.exercises;
        data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
        this.setState({data})
      }
    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/' +id)
            .then(res => console.log(res.data));

        this.setState({ exercises: this.state.exercises.filter(el => el._id !== id)})
    }

    exercisesList() {
        
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
        })
    }

    render() { 
        return ( 
            <div className="container">
                <h3>Products:</h3>
                <button onClick={e => this.onSort(e, 'productCategory')}>Sort</button>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th onClick={e => this.onSort(e, 'productCategory')}>productCategory</th>
                            <th>productName</th>
                            <th>productPrice</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exercisesList()}
                    </tbody>
                </table>
            </div>
         );
    }
}

 
export default ExercisesList;