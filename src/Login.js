import {useState} from React


async function authenticate() {

}

function App() {
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

export default App;
