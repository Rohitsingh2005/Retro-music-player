import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { MusicContext } from '../context/MusicContext';
import BASE_URL from '../../config';

const Player = () => {
   const {currentTrack, isPlaying, playTrack, pauseTrack, stopTrack, nextTrack} = useContext(MusicContext);
   
   return (
      <div>
         {currentTrack && (
            <>
               <style jsx="true">
                  {`
                     :root {
                        --bg-image-url: url(${`${BASE_URL}${currentTrack.artworkUrl}`});
                     }
                  `}
               </style>
            
               <div>
                  <Card className="text-center track-card">
                     <div className="bg-image">
                        <Card.Body className='position-relative'>
                           <h2 className="card-title mb-5">{currentTrack.title}</h2>
                           <div className="d-flex justify-content-center ">
                              <Button variant="primary" onClick={isPlaying ? pauseTrack : playTrack} className="me-2">
                                 {isPlaying ? <i className="bi bi-pause-circle"></i> : <i className="bi bi-play-circle"></i>}
                              </Button>
                              <Button variant="danger" onClick={stopTrack} className="me-2"><i className="bi bi-stop-circle"></i></Button>
                              <Button variant="secondary" onClick={nextTrack} className="me-2"><i className="bi bi-skip-end-circle"></i></Button>
                           </div>
                        </Card.Body>
                     </div>
                  </Card>
               </div>
            </>
         )}
      </div>
   );
};

export default Player;
