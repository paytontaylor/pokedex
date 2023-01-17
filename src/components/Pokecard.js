export default function Pokecard({name, image, type, exp}){
    return (
            <div className="card">
                <div className="card-title">
                    <p>{name}</p>
                </div>
                <div className="card-img">
                    <img src={image} alt={name}/>
                </div>
                <div className="card-content">
                    <p>Type: {type}</p>
                    <p>EXP: {exp}</p>
                </div>
            </div>
    )
}
