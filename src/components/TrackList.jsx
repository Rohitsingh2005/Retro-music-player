import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";
import BASE_URL from "../../config";

const TrackList = () => {
   const {tracks, currentTrackIndex} = useContext(MusicContext);

   return (
      <div className="pt-4">
         <h3>Track List</h3>
         <div>
            {tracks.map((track, i) => (
               <div key={track.id} className={`${i === currentTrackIndex ? 'current-track' : ''}`}>
                  <img
                     src={`${BASE_URL}${track.artworkUrl}`} 
                     alt={track.title}
                     className="track-img"
                  />
                  <p>{track.title}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default TrackList;
