import "./OptionsList.css"

const ListaOpciones = (props) => 
{
    //Para recorrer un arreglo es recomendable usar una funcion arrow
    //Metodo map -> arreglo.map ( (equipos, posicion)=> 
    //{
    //  return <option></option>
    //})
    const manejarCambio = (e) => 
    {
        console.log("Cambio",e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            {/*Manera corta y simplificada*/}
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
            {/*Manera larga*/}
            {/*{ equipos.map((equipo, index) => 
            {
                return <option key={index}>{equipo}</option>
            })}*/}
        </select>
    </div>
}

export default ListaOpciones