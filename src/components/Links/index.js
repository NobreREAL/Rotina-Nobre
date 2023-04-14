import './Links.css'

function LinksImportar(props) {
    return (
        <ul>
            {props.itens.map((item,index) => <li className="links" key={index}><a href="#" target="_blank"  className="opcoes">{item}</a></li>)}
        </ul>
    )
}

export default LinksImportar