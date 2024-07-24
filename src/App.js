import "./App.css";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="App">
      <div className="chatbot-overlay">
        <ChatBot />
      </div>
    </div>
  );
}

export default App;
