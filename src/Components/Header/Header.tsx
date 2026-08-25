import "./_Header.scss";
import MenuIcon from "@material-ui/icons/Menu";

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <div className="site-header">
            <div className="header-content">
                <button
                    className="menu-button"
                    type="button"
                    aria-label="Toggle side navigation"
                    onClick={onMenuClick}
                >
                    <MenuIcon />
                </button>
                <img alt="Voltera" src="/brand_image.png" height="40" width="143" />
            </div>
        </div>
    );
};

export default Header;