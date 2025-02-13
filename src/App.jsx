
import './App.css'
import {useState} from "react";

function App() {

    const [strawberryCount, setStrawberryCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [kiwiCount, setKiwiCount] = useState(0);

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <fieldset>
            <img src="" alt="strawberry"/>
            Aardbeien
            <button></button>
            {strawberryCount}
            <button></button>
        </fieldset>
        <fieldset>
            <img src="" alt="banana"/>
            Bananen
            <button></button>
            {bananaCount}
            <button></button>
        </fieldset>
        <fieldset>
            <img src="" alt="apple"/>
            Appels
            <button></button>
            {appleCount}
            <button></button>
        </fieldset>
        <fieldset>
            <img src="" alt="kiwi"/>
            Kiwi's
            <button></button>
            {kiwiCount}
            <button></button>
        </fieldset>
    </>
  )
}

export default App
