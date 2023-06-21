// import logo from './logo.svg';
// import Button from "react-bootstrap/Button";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Button variant="primary">Primary</Button>
//     </div>
//   );
// }

// export default App;

import styles from "./App.module.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
    </div>
  );
}

export default App;
