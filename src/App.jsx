import {useState} from "react";
import "./App.css";

import FruitArticle from "./components/fruitAtricle/FruitArticle.jsx";
import InputField from "./components/inoutField/InputField.jsx";
import SelectField from "./components/selectField/SelectField.jsx";
import RadioField from "./components/radioField/RadioField.jsx";

import strawberryIcon from './assets/strawberry.png';
import bananaIcon from './assets/banana.png';
import appleIcon from './assets/apple.png';
import kiwiIcon from './assets/kiwi.png';

function App() {

    const [strawberryCount, setStrawberryCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [kiwiCount, setKiwiCount] = useState(0);

    function resetCount() {
        setStrawberryCount(0);
        setBananaCount(0);
        setAppleCount(0);
        setKiwiCount(0);
    }

    const [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        age: 0,
        zip: "",
        frequency: "weekly",
        time: "daytime",
        comment: "",
        condition: true,
    });

    function handleFormChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.type=== "checkbox" ? e.target.checked : e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Strawberry: " + strawberryCount);
        console.log("Banana: " + bananaCount);
        console.log("Apple: " + appleCount);
        console.log("Kiwi: " + kiwiCount);
        for (const key in formState) {
            console.log(key + ": " + formState[key]);
        }
    }


    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitArticle title="Aardbeien" img={strawberryIcon} counter={strawberryCount} handleClick={setStrawberryCount}/>
            <FruitArticle title="Bananen" img={bananaIcon} counter={bananaCount} handleClick={setBananaCount}/>
            <FruitArticle title="Appels" img={appleIcon} counter={appleCount} handleClick={setAppleCount}/>
            <FruitArticle title="Kiwi's" img={kiwiIcon} counter={kiwiCount} handleClick={setKiwiCount}/>
            <button type="button" className="reset-button" onClick={() => resetCount()}>Reset</button>
            <form onSubmit={handleSubmit}>
                <InputField title="Voornaam" name="firstname" value={formState.firstname} onChange={handleFormChange}/>
                <InputField title="Achternaam" name="lastname" value={formState.lastname} onChange={handleFormChange}/>
                <InputField title="Leeftijd" type="number" name="age" value={formState.age} onChange={handleFormChange}/>
                <InputField title="Postcode" pattern="[1-9][0-9]{3} ?[a-zA-Z]{2}" name="zip" value={formState.zip} onChange={handleFormChange}/>
                <SelectField name="frequency" title="Bezorgfrequentie"
                             options="weekly:iedere week,biweekly:om de week,monthly:iedere maand"
                             value={formState.frequency} onChange={handleFormChange}/>
                <RadioField name="time" options="daytime:Overdag,evening:'s Avonds" checked={formState.time} onChange={handleFormChange}/>
                <InputField type="textarea" name="comment" title="Opmerking:" cols="50" rows="10" value={formState.comment} onChange={handleFormChange}/>
                <p>
                    <label>
                        <input type="checkbox" name="condition" checked={formState.condition} onChange={handleFormChange}/>
                        Ik ga akkoord met de voorwaarden
                    </label>
                </p>
                <button type="submit">Verzend</button>
            </form>
        </>
    )
}

export default App
