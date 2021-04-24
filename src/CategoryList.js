import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from "reactstrap"

export default class CategoryList extends Component {
    state = {
        categories: [ ],
    }

    componentDidMount(){
        this.getCategories();
    }

   getCategories=(data)=>{
       fetch("http://localhost:3000/categories")
       .then(response=>response.json())
       .then(data=>this.setState({categories:data}));

       console.log("data",data);
       

   }

    render() {
        return (
            <div>
                <h4>CategoryList</h4>

                <ListGroup>
                    {this.state.categories.map(category => (
                        <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
                        onClick={()=>this.props.changeCategory(category)} 
                        key={category.id}>
                            {category.categoryName}
                        </ListGroupItem>
                    ))}

                </ListGroup>
                {/* <h5> {this.props.currentCategory}</h5> */}

            </div>
        )
    }
}
