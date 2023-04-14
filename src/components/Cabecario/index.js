import Logo from '../LogoImagem'
import Navegacao from '../Navegacao'

function Header() {
    return (
        <header className="main-header">
            <div className="cabecario">
                <Logo/>
            </div>
                <Navegacao/>
        </header>
    )
}

export default Header