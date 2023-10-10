import Card from '../Card/Card';
import style from './CardsContainer.module.css'

const pokemon = [
    {
        "id": 1,
        "name": "bulbasaur",
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "speed": 45,
        "height": 7,
        "weight": 69,
        "types": [
            "grass",
            "poison"
        ],
        "createInBd": false
    },
    {
        "id": 2,
        "name": "ivysaur",
        "hp": 60,
        "attack": 62,
        "defense": 63,
        "speed": 60,
        "height": 10,
        "weight": 130,
        "types": [
            "grass",
            "poison"
        ],
        "createInBd": false
    },
    {
        "id": 3,
        "name": "venusaur",
        "hp": 80,
        "attack": 82,
        "defense": 83,
        "speed": 80,
        "height": 20,
        "weight": 1000,
        "types": [
            "grass",
            "poison"
        ],
        "createInBd": false
    },
    {
        "id": 4,
        "name": "charmander",
        "hp": 39,
        "attack": 52,
        "defense": 43,
        "speed": 65,
        "height": 6,
        "weight": 85,
        "types": [
            "fire"
        ],
        "createInBd": false
    },
    {
        "id": 5,
        "name": "charmeleon",
        "hp": 58,
        "attack": 64,
        "defense": 58,
        "speed": 80,
        "height": 11,
        "weight": 190,
        "types": [
            "fire"
        ],
        "createInBd": false
    },
    {
        "id": 6,
        "name": "charizard",
        "hp": 78,
        "attack": 84,
        "defense": 78,
        "speed": 100,
        "height": 17,
        "weight": 905,
        "types": [
            "fire",
            "flying"
        ],
        "createInBd": false
    },
    {
        "id": 7,
        "name": "squirtle",
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "speed": 43,
        "height": 5,
        "weight": 90,
        "types": [
            "water"
        ],
        "createInBd": false
    },
    {
        "id": 8,
        "name": "wartortle",
        "hp": 59,
        "attack": 63,
        "defense": 80,
        "speed": 58,
        "height": 10,
        "weight": 225,
        "types": [
            "water"
        ],
        "createInBd": false
    },
    {
        "id": 9,
        "name": "blastoise",
        "hp": 79,
        "attack": 83,
        "defense": 100,
        "speed": 78,
        "height": 16,
        "weight": 855,
        "types": [
            "water"
        ],
        "createInBd": false
    },
    {
        "id": 10,
        "name": "caterpie",
        "hp": 45,
        "attack": 30,
        "defense": 35,
        "speed": 45,
        "height": 3,
        "weight": 29,
        "types": [
            "bug"
        ],
        "createInBd": false
    },
    {
        "id": 11,
        "name": "metapod",
        "hp": 50,
        "attack": 20,
        "defense": 55,
        "speed": 30,
        "height": 7,
        "weight": 99,
        "types": [
            "bug"
        ],
        "createInBd": false
    },
    {
        "id": 12,
        "name": "butterfree",
        "hp": 60,
        "attack": 45,
        "defense": 50,
        "speed": 70,
        "height": 11,
        "weight": 320,
        "types": [
            "bug",
            "flying"
        ],
        "createInBd": false
    }
]

const CardsContainer = () => {
    return(
        <div className={style.container}>
            { pokemon.map( pkm => {
                return <Card
                id={pkm.id}
                name={pkm.name}
                hp={pkm.hp}
       
                />
            })}
        </div>
    )
}

export default CardsContainer;