import { Provider } from "react-redux";
import AppRouter from "./Config/Router";
import Store from "./Store";

const App = () => (
  <Provider store={Store}>
    <AppRouter />;
  </Provider>
);

export default App;
