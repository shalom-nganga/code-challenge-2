import React, { useEffect} from 'react';
import './App.css';


function App() {
  useEffect(() => {
    // Fetch the data from the file
    fetch('http://localhost:8000/bots') // Replace the URL with the correct path to your db.json file
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


return (
  <>
  <div>
   <ul>
    <li>
      {bot.name}
    </li>
   </ul>
  </div>
  </>
)

}
  
        
  


export default App;
