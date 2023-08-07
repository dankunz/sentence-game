import './App.css'
import SentencePage from './pages/SentencePage'
import { Provider } from 'react-redux';
import store from "./redux/store";
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme.ts"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <SentencePage />
      </Provider>
    </ChakraProvider>
  )
}

export default App
