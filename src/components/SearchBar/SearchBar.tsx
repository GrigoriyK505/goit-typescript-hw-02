import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import s from './SearchBar.module.css'

type SearchBarProps = {
    handleSetQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSetQuery }) => {
    const [value, setValue] = useState<string>("");

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!value || value === "") {
            toast("Error nothing. Recieved nothing", {
                style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                },
                position: "top-right"
            });
            return;
        }
        handleSetQuery(value.trim());
        setValue("");
    };

    return (
        <header>
            <form className={s.form}>
                <input
                    onChange={(e) => setValue(e.target.value.trim())}
                    value={value}
                    name="search"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={s.input}
                />
                <button type="submit" onClick={onSubmit} className={s.button}>Search</button>
            </form>
        </header>
    );
}
export default SearchBar