import Header from "./Header"
import PetPage from "./PetPage"
import React, {useState} from "react";

function App() {

  const [searchText, setSearchText] = useState("")

  const pets = [
    {
        id: 1,
        name: "Fido",
        image: "./images/dog.jpeg"
    },
    {
        id: 2,
        name: "Kitty",
        image: "./images/cat.png"
    },
    {
        id: 3,
        name: "Hammy",
        image: "./images/hamster.jpeg"
    },
    {
        id: 4,
        name: "Polly",
        image: "./images/parrot.jpeg"
    },
    {
        id: 5,
        name: "Angel",
        image: "./images/horse.jpeg"
    },
    {
        id: 6,
        name: "Fluffy",
        image: "./images/guinea-pig.jpeg"
    },
    {
        id: 7,
        name: "Goldie",
        image: "./images/fish.jpeg"
    }
  ]

  function updateSearchText(event) {
      setSearchText(event.target.value)
  }

  const fileredPet = pets.filter(pet => {

    if(searchText === "") {
      return true
    }
    // if(pet.name.toLowerCase() === searchText.toLowerCase()) {
    //   return true
    // } 
    // else {
    //   return false
    // }
    return pet.name.toLowerCase().includes(searchText.toLowerCase())

  })

  return (
    <div className="app">
      <Header />
      <PetPage pets={fileredPet}  updateSearchText={updateSearchText}/>
    </div>
  );
}

export default App;