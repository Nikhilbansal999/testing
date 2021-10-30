import React, { Component } from 'react'

export class cartComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                product cartteyrehyjklttywtnhreyjko  {this.props.name +" "+ this.props.quantity +" " +  this.props.price   } 
            </div>
        )
    }
}

export default cartComponent
