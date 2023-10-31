import "./Searchbar.css";

interface SearchBarProps {
    onSearch: (term: string) => void;
}

const Searchbar = ({onSearch}: SearchBarProps) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value)
    }

    return (
        <section className="container section">
            <div className="search__bar">
                <input type="text" className="search__input" placeholder="Search blogs" onChange={handleChange}/>
            </div>
        </section>
    );
}

export default Searchbar;
