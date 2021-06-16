export default function getAllUsers() {
    getAllUsers = (props) => {
        axios.get(url, headers)
          .then((res) => {
            this.setState({ usersList: res.data })
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
        }
}