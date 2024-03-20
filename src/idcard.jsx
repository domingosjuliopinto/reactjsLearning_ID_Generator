import React from 'react';
import './App.css';

class Idcard extends React.Component {
    render() {
        return (  
            <div>
                <br></br>
                <img src={this.props.pimage} alt='profile pic'></img>
                <br></br><br></br>
                <h3>Name: {this.props.firstname} {this.props.lastname}</h3>
                <br></br>
                <h3>Employee ID: {this.props.employeeid}</h3>
            </div>
        );
    }
}

export default Idcard;
  