import './App.css';


async function authenticate() {

}

function Login() {
  return (
    <div className="container">
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input> </input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
