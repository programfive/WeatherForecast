import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { OpenProvider } from "./context/open.jsx";
import { SearchProvider } from "./context/search.jsx";
import { LocationProvider } from "./context/location.jsx";
import { LoaderProvider } from "./context/loader.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <LoaderProvider>
    <OpenProvider>
      <SearchProvider>
        <LocationProvider>
          <App />
        </LocationProvider>
      </SearchProvider>
    </OpenProvider>
  </LoaderProvider>,
)