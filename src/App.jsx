import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/message")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-blue-300 h-screen w-full">
      <h1 className="text-center text-orange-700 text-6xl font-medium top-100">{message}</h1>
    </div>
  );
}

export default App;