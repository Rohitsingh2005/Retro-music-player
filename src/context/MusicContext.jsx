import { createContext, useEffect, useState } from "react";
import { Howl } from 'howler';
import BASE_URL from "../../config";

const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
   const [tracks, setTracks] = useState([]);
   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [sound, setSound] = useState(null);

   useEffect(() => {
      const fetchTracks = async () => {
         try {
            const response = await fetch(`${BASE_URL}/api/v1/tracks?limit=10&cursor=1`);
            const data = await response.json();
            setTracks(data.body.tracks);
         } catch (error) {
            console.error('Error fetching tracks:', error);
         }
      };

      fetchTracks();
   }, []);


   useEffect(() => {
      if (sound) {
         sound.unload();
      }

      const newSound = new Howl({
         src: [`${BASE_URL}${tracks?.[currentTrackIndex]?.streamUrl}`],
         html5: true,
         autoplay: true,
         loop: true,
         // volume: 0.5,
         // onload: () => {
         //    console.log("test")
         // },
         onplay: () => {
            setIsPlaying(true);
         },
         onpause: () => {
            setIsPlaying(false);
         },
         onstop: () => {
            setIsPlaying(false);
         },
         onend: () => {
            setIsPlaying(false);
            if (currentTrackIndex < tracks.length - 1) {
               setCurrentTrackIndex(currentTrackIndex + 1);
            } else {
               setCurrentTrackIndex(0); // Loop back to first
            }
         },
      });
      setSound(newSound);

      return () => {
         if (sound) {
            sound.unload();
         }
      };
   }, [currentTrackIndex, tracks]);

   const playTrack = () => {
      if (sound) {
         sound.play();
      }
   };

   const pauseTrack = () => {
      if (sound) {
         sound.pause();
      }
   };

   const stopTrack = () => {
      if (sound) {
         sound.stop();
      }
   };

   const nextTrack = () => {
      if (currentTrackIndex < tracks.length - 1) {
         setCurrentTrackIndex(currentTrackIndex + 1);
      } else {
         setCurrentTrackIndex(0); // Loop back to first 
      }
   };

   const currentTrack = tracks[currentTrackIndex];

   return (
      <MusicContext.Provider value={{ tracks, currentTrackIndex, setCurrentTrackIndex, currentTrack, isPlaying, playTrack, pauseTrack, stopTrack, nextTrack }}>
         {children}
      </MusicContext.Provider>
   );
}

export { MusicContext, MusicContextProvider };