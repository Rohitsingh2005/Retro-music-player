
import { Helmet } from 'react-helmet';

const HelmetHead = () => {
   return (
      <Helmet>
         <title>Music Player</title>
         <meta name='description' content='A simple music player application with React + Vite and Howler.js'/>
         <meta name='keywords' content='Music Player, Retro Player, srk-music-player'/>
         <meta property='og:title' content='Retro Player'/>
         <meta property='og:description' content='Retro Player'/>
         <meta property='og:url' content='https://srk-music-player.netlify.app/'/>
         <meta property='og:image' content='/logo512.png'/>
         <meta property='og:type' content='Website'/>
         <meta property='og:site_name' content='Retro Player'/>
      </Helmet>
   )
}

export default HelmetHead;