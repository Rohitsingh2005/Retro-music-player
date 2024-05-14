// For a bit SEO 😊
import { Helmet } from 'react-helmet';

const HelmetHead = () => {
   return (
      <Helmet>
         <title>Music Player</title>
         <meta name='description' content='A simple music player application with React + Vite and Howler.js'/>
         <meta name='keywords' content='Music Player, Sudhil&apos;s Retro Player, srk-music-player'/>
         <meta property='og:type' content='Website'/>
         <meta property='og:title' content='Music Player'/>
         <meta property='og:description' content='Sudhil&apos;s Retro Player'/>
      </Helmet>
   )
}

export default HelmetHead;