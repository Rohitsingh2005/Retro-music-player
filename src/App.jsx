import { MusicContextProvider } from './context/MusicContext';
import Player from './components/Player';

const App = () => {
  return (
    <div className='p-5'>
      <MusicContextProvider>
        <Player />
      </MusicContextProvider>
    </div>
  );
};

export default App;
