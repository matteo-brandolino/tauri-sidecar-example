import reactLogo from "./assets/react.svg";
import "./App.css";
import { Command } from "@tauri-apps/api/shell";
import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";

async function sendAlert(body: string): Promise<void> {
  let permissionGranted = await isPermissionGranted();
  if (!permissionGranted) {
    const permission = await requestPermission();
    permissionGranted = permission === "granted";
  }
  if (permissionGranted) {
    sendNotification({
      title: "Test alert",
      body,
    });
  }
}

function App() {
  const createTestFolder = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const command = Command.sidecar("binaries/script");

    const output = await command.execute();

    if (output.stderr !== "") {
      sendAlert("Something went wrong");
      return;
    }
    sendAlert("Folder created");
  };

  return (
    <div className="container">
      <div className="t-container">
        <div className="row">
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>
          Welcome to <strong>Tauri Sidecar example</strong>!
        </h1>
      </div>
      <div>
        <button
          onClick={(e) => {
            createTestFolder(e);
          }}
          className="button-30"
          role="button"
        >
          <em>Create a test folder</em>
        </button>
      </div>
    </div>
  );
}

export default App;
