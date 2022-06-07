import './App.css';
import ItemCount from './components/ItemCount';

function App() {

  const onAdd = (count) => {
    alert(`Son ${count} productos`);
  }

  return (
    <>
      <ItemCount inicial={1} max={15} onAdd={onAdd}/>
    </>
  );
}

export default App;
