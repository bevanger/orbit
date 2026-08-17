import "./Header.css"

interface HeaderProps {
    onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
    return (
        <header className="header">
            <h2>🪐 Orbit</h2>

            <p>Welcome back!</p>

               <button onClick={onMenuClick} aria-label="Toggle sidebar">
                ☰
            </button>
        </header>
    )
}

export default Header;