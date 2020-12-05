import bayern from './img/bayern.png';
import psg from './img/psg.png';
import data from './data.model';
import './styles/Header.css';
function Header() {
    return (
        <header className="header">
            <div>
                <img alt="" src={psg} />
            </div>
            <span className="score">{data.score[0]}:{data.score[1]}</span>
            <div>
                <img alt="" src={bayern} />
            </div>
        </header>
    )
}
export default Header;