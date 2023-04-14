import './Logo.css'

function Logo(){
    return(
        <h1 className="logo">Rotina Nobre
        <img src={require("../../imgs/logo.png")} alt="Logo da empresa"></img>
        </h1>
    )
}

export default Logo