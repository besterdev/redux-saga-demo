import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import createSagaMiddleware from "redux-saga";

// import thunk from "redux-thunk";

import reducers from "../redux/reducers";
import rootSaga from "../redux/saga/index";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
