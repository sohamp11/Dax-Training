import './App.css';
import Blogs from './components/Blogs';
import AddBlog from './components/AddBlog';

function App() {
  return (
    <div className="App">
      <h1>List of Blogs</h1>
      <Blogs />
      <AddBlog />
  
    </div>
  );
}

export default App;
