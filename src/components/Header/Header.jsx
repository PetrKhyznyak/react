import "./Header.css";
const Header = ({ header, text}) => {
    return (
        <header className={"header"}>
            <h3>{header}</h3>
            <p>{text}</p>
        </header>
    )
}

export default Header;