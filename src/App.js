import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { messaging } from "./firebase-config";
import { getToken, onMessage } from "firebase/messaging";

function App() {
  //
  const askUserPermission = async () => {
    await Notification.requestPermission();
    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    getToken(messaging, {
      vapidKey:
        "BFKw7ywhfBGpp6UQa4XT4UoxfYm01CgJXDnms5LawuR_a_VmIZKtcbmQ9dwYkYnFDQjKuMRAF2mlLrppc_-EW98",
    })
      .then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
          console.log(currentToken);
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });
  };

  useEffect(() => {
    askUserPermission();
    // Handle incoming messages. Called when:
    // - a message is received while the app has focus
    // - the user clicks on an app notification created by a service worker
    //   `messaging.onBackgroundMessage` handler.

    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      // ...
      
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
