import {useState} from "react";
import "./App.css";

import FruitArticle from "./components/fruitAtricle/FruitArticle.jsx";

import strawberryIcon from './assets/strawberry.png';
import bananaIcon from './assets/banana.png';
import appleIcon from './assets/apple.png';
import kiwiIcon from './assets/kiwi.png';
import InputField from "./components/inoutField/InputField.jsx";

function App() {

    const [strawberryCount, setStrawberryCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [kiwiCount, setKiwiCount] = useState(0);

    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age: 0,
        zip: '',
    });

    function handleFormChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit() {

    }

    function resetCount() {
        setAppleCount(0);
        setBananaCount(0);
        setAppleCount(0);
        setAppleCount(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitArticle title="Aardbeien" img={strawberryIcon} counter={strawberryCount}
                          handleClick={setStrawberryCount}/>
            <FruitArticle title="Bananen" img={bananaIcon} counter={bananaCount} handleClick={setBananaCount}/>
            <FruitArticle title="Appels" img={appleIcon} counter={appleCount} handleClick={setAppleCount}/>
            <FruitArticle title="Kiwi's" img={kiwiIcon} counter={kiwiCount} handleClick={setKiwiCount}/>
            <button type="button" className="reset-button" onClick={() => resetCount()}>Reset</button>
            <form onSubmit={handleSubmit}>
                <InputField title="Voornaam" id="firstname" value={formState.firstname} onChange={handleFormChange}/>
                <InputField title="Achternaam" id="lastname" value={formState.lastname} onChange={handleFormChange}/>
                <InputField title="Leeftijd" type="number" id="age" value={formState.age} onChange={handleFormChange}/>
                <InputField title="Postcode" type="zip" id="zip" value={formState.zip} onChange={handleFormChange}/>
            </form>
        </>
    )
}

export default App
