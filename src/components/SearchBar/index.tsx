import './styles.css';

export default function SearchBar() {
    return (
        <form className="dsc-search-bar">
            <button className="dsc-search-btn" type="submit">🔎︎</button>
            <input type="text" placeholder="Nome do produto" />
            <button className="dsc-clear-btn" type="reset">🗙</button>
        </form>
    );
}