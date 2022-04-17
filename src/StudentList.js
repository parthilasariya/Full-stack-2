import axios from "axios";
import './DeleteStudent';

class UserList extends React.Component {
    state = {
        users: []
      };
}
axios.get(`https://jsonplaceholder.typicode.com/users`).then(res =>{
  const users = res.data;
});


export default UserList;