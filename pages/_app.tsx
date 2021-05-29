import "../public/styles/index.scss";
import { Provider } from 'react-redux';
import store from 'configure-store';
import useRouterScroll from "hooks/use-router-scroll";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  useRouterScroll()

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
