import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import theme from "../theme";

const App = ({ Component, pageProps }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;