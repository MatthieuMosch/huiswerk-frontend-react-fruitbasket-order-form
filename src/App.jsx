
import {useState} from "react";
import Article from "./components/atricle/Article.jsx";

import strawberryIcon from './assets/strawberry.png';
import bananaIcon from './assets/banana.png';
import appleIcon from './assets/apple.png';
import kiwiIcon from './assets/kiwi.png';

function App() {

    const [strawberryCount, setStrawberryCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [kiwiCount, setKiwiCount] = useState(0);

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <Article title="Aardbeien" img={strawberryIcon} count={strawberryCount} handleClick={setStrawberryCount}/>
        <Article title="Bananen" img={bananaIcon} count={bananaCount} handleClick={setBananaCount}/>
        <Article title="Appels" img={appleIcon} count={appleCount} handleClick={setAppleCount}/>
        <Article title="Kiwi's" img={kiwiIcon} count={kiwiCount} handleClick={setKiwiCount}/>
    </>
  )
}

export default App
