import './Header.scss';

function Header() {
    return (
        <header className="App-header">
            <div className="header-container">
                <div class="img-header-container">
                    <img src={process.env.PUBLIC_URL + '/Pixel_art_PP_transparent.png'} alt="image_profil" />
                </div>
                <div class="text-header-container">
                    <h1>Victor BOISSON</h1>
                    <h2>Développeur PHP/Symfony</h2>
                </div>
            </div>
        </header>
    );
}

export default Header;