
import {useState} from "react";
import FruitArticle from "./components/fruitAtricle/FruitArticle.jsx";

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
        <FruitArticle title="Aardbeien" img={strawberryIcon} counter={strawberryCount} handleClick={setStrawberryCount}/>
        <FruitArticle title="Bananen" img={bananaIcon} counter={bananaCount} handleClick={setBananaCount}/>
        <FruitArticle title="Appels" img={appleIcon} counter={appleCount} handleClick={setAppleCount}/>
        <FruitArticle title="Kiwi's" img={kiwiIcon} counter={kiwiCount} handleClick={setKiwiCount}/>
        <button
            type="button"
            className="reset-button"
            onClick={() => {
                setAppleCount(0);
                setBananaCount(0);
                setAppleCount(0);
                setAppleCount(0);
            }}
        >
            Reset
        </button>
    </>
  )
}

export default App
