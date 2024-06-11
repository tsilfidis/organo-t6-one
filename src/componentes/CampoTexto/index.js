import './CampoTexto.css';

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`;

    let valor = "";

    const aoDigitar = (evento) => {
        valor = evento.target.value;
        console.log(valor);
    }


    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    );
}

export default CampoTexto;