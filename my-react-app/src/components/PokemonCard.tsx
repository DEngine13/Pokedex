interface PokemonCardProps {
    name: string,
    imgSrc: string,
};

function PokemonCard({name, imgSrc}: PokemonCardProps) {

    return (
        <figure>
        <div className="MBW">
        <figcaption> {name}</figcaption>
        {imgSrc? <img src= {imgSrc} ></img> : <p>???</p>} 
        <h3>Power ⚔️ : 50</h3>
        <h4>Defense 🛡️ : 65</h4>
        <h5>Skill 🌟 : Salad 🥗</h5>
        </div>
        </figure>)
}

export default PokemonCard;