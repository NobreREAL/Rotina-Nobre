import './Navegacao.css'
import LinksImportar from '../Links';

function Navegacao(){
    
    const Opcoes = [
        'Sobre Nós',
        'Cadastro',
        'Descubra',
        'Entrar'
    ]

    return(
        <nav>
            <LinksImportar itens={Opcoes}/>
        </nav>
    )
}

export default Navegacao;