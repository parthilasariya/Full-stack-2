//import axios from "axios"

export default UserList;
class UserList extends React.Component {
state = {
    name: ""
  };
}
  axios.get(`https://jsonplaceholder.typicode.com/users`).then(res =>{
        const users = res.data;
});

export default UserList;
 
class UserList extends React.Component {
    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Person Name:
                 <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <button type="submit">Add</button>
            </form>
          </div>
    );    
}
      




//handleChange event => { }; 
  //        handleSubmit event => {}; 
   //       event.preventDefault();
//}