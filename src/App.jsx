import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Set default state
    this.state = {
      userList: [
        {
          name: 'Hannah',
          age: 20,
          occupation: 'Dreamer'
        },
        {
          name: 'Stacy',
          age: 19,
          occupation: 'Gamer'
        }
      ],
      user: {
        name: '',
        age: '',
        occupation: ''
      }
    }

    // Add funciton bindings

  }

  // Add event handlers
  handleChangeInfo = e => {

    // let arr = [1, 2, 3, 4, 5];
    // let arr2 = [2.5, 2.8];
    
    // arr = [1, 2, arr2, 3, 4, 5]; //[1,2[2.5,2.8],3,4,5]
    // arr = [1,2, [...arr2],3,4,5];
    
    console.log('EVENT'); //console.log is used for debugging

    const {name, value} = e.target;

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  }

  handleAddUser = e => {

    console.log('PASSED HANDLE ADD USER');

    console.log(this.state.userList);

    let user = this.state.user;
    let userList = [...this.state.userList];
    userList.push(user);

    console.log(this.state.userList);

    this.setState({userList: userList});
    
    e.preventDefault();
    
  }

  deleteUser = index => {
    let userList = [...this.state.userList];
    userList.splice(index, 1);
    this.setState({userList : userList});
  }

  render() {

    let userList = this.state.userList;
    let user = this.state.user;

    console.log('USERS');
    console.log(this.state.userList);

    console.log('USERS');
    console.log(user);

    return (
      <div className="App">

        <div className='forms-panel'>
          <form>
            Name: <br /> <input type='text' name='name'
                  placeholder='Name' onChange={this.handleChangeInfo} /> <br />
            Age: <br /> <input type='text' name='age'
                  placeholder='Age' onChange={this.handleChangeInfo} /> <br />
            Occupation: <br /> <input type='text' name='occupation'
                  placeholder='Occupation' onChange={this.handleChangeInfo} /> 
                  <br />
                  <br />
                  <button type='button' onClick={this.handleAddUser}>Add user</button>
                  <br />
                  <br />
          </form>
        </div>

        <div className='table-panel'>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <th className='user-table-cell'>Name</th>
                <th className='user-table-cell'>Age</th>
                <th className='user-table-cell'>Occupation</th>
                <th></th>
              </tr>
              {
                userList.map((user, index) => {
                  return (
                    <tr className='user-table-row'>
                      <td className='user-table-cell'>{user.name}</td>
                      <td className='user-table-cell'>{user.age}</td>
                      <td className='user-table-cell'>{user.occupation}</td>
                      <td className='user-table-cell'>
                        <button type='button'
                                onClick={ () => this.deleteUser(index)}>
                          Delete User</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
