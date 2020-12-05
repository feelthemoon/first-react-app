import data from '../data.model';
import '../styles/Main.css';
function nameMargin(player) {
    if (player.number >= 10) {
        return <span className="name min--margin">{player.name} {player.surname}</span>
    }
    return <span className="name">{player.name} {player.surname}</span>
}
function Main() {
    return (
        <main className="main">
            <div className="wrapper">
                <h2 className="title">{data.first.name}</h2>
                <ul className="main__list">
                    {data.first.players.map
                    (player => (
                        <li key={player.number} className="main__row">
                            <span className="number">{player.number}</span>
                            {nameMargin(player)}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="wrapper">
               <h2 className="title">{data.second.name}</h2>
                <ul className="main__list">
                    {data.second.players.map(player => (
                        <li key={player.number} className="main__row">
                            <span className="main__td number">{player.number}</span>
                            {nameMargin(player)}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
export default Main;