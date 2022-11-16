import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLocation(position);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{location.timestamp}</p>
    </div>
  );
}

export default App;
