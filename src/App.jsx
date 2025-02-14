
import './App.css'
import {useState} from "react";

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
        <fieldset>
            <img src={strawberryIcon} alt="strawberry"/>
            Aardbeien
            <button
                type="button"
                onClick={() => setStrawberryCount(strawberryCount.valueOf()-1)}
            >
                -
            </button>
            {strawberryCount}
            <button
                type="button"
                onClick={() => setStrawberryCount(strawberryCount.valueOf()+1)}
            >
                +
            </button>
        </fieldset>
        <fieldset>
            <img src={bananaIcon} alt="banana"/>
            Bananen
            <button></button>
            {bananaCount}
            <button></button>
        </fieldset>
        <fieldset>
            <img src={appleIcon} alt="apple"/>
            Appels
            <button></button>
            {appleCount}
            <button></button>
        </fieldset>
        <fieldset>
            <img src={kiwiIcon} alt="kiwi"/>
            Kiwi's
            <button></button>
            {kiwiCount}
            <button></button>
        </fieldset>
    </>
  )
}

export default App
