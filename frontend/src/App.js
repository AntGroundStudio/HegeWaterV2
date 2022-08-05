import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/todos")
      .then( resData => {
          setData(resData.data);
        });
  }, []);
  
  return (
    <div className="App">
      <ul>
        {
          data.map( d => <li key={d.id}> {d.title}-{d.content} </li>)
        }
      </ul>
    </div>
  );
}

export default App;
