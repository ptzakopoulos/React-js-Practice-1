import styles from "./App.module.css";

//Local Components
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div className={styles.App}>
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
