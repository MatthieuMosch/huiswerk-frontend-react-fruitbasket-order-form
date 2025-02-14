
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
        <article>
            <img src={strawberryIcon} alt="strawberry"/>
            Aardbeien
            <button type="button" onClick={() => setStrawberryCount(strawberryCount.valueOf()-1)}>-</button>
            {strawberryCount}
            <button type="button" onClick={() => setStrawberryCount(strawberryCount.valueOf()+1)}>+</button>
        </article>
        <article>
            <img src={bananaIcon} alt="banana"/>
            Bananen
            <button type="button" onClick={() => setBananaCount(bananaCount.valueOf()-1)}>-</button>
            {bananaCount}
            <button type="button" onClick={() => setBananaCount(bananaCount.valueOf()+1)}>+</button>
        </article>
        <article>
            <img src={appleIcon} alt="apple"/>
            Appels
            <button type="button" onClick={() => setAppleCount(appleCount.valueOf()-1)}>-</button>
            {appleCount}
            <button type="button" onClick={() => setAppleCount(appleCount.valueOf()+1)}>+</button>
        </article>
        <article>
            <img src={kiwiIcon} alt="kiwi"/>
            Kiwi's
            <button type="button" onClick={() => setKiwiCount(kiwiCount.valueOf()-1)}>-</button>
            {kiwiCount}
            <button type="button" onClick={() => setKiwiCount(kiwiCount.valueOf()+1)}>+</button>
        </article>
    </>
  )
}

export default App
