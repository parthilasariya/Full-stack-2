import axios from "axios";
class UserList extends React.Component {
    state = {
        users: []
      };
}axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.id}`).then(res =>{
    const users = res.data;
  });
  