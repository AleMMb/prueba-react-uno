import {useState, useEffect} from 'react'

const MiApi = () =>{

    const [informacion , setInformacion] = useState([])
    const [busqueda, setBusqueda] = useState('')

    useEffect(() =>{
        llamadoApi()
    },[])

    const llamadoApi = async ()=>{
        const url="https://api.victorsanmartin.com/feriados/en.json"
        const respuesta = await fetch (url)
        const datos = await respuesta.json()
        setInformacion (datos.data)
    }
 
    const listaFeriado = !busqueda ? informacion : informacion.filter((e) => e.extra.toLowerCase().includes(busqueda.toLocaleLowerCase()))

    const ordenando = () => {
        const ordenarefiado = [...listaFeriado].sort ((a,b)=> a.title > b.title ? 1 : -1)
        setInformacion (ordenarefiado)
    }

    return(
        <div>
            <section>
                <label htmlFor="busqueda">Filtre feriados civiles o religiosos:</label>
                <input type="text" name='busqueda' placeholder='escriba'onChange={(e) => { setBusqueda(e.target.value)}} value={busqueda} />
            </section>
            <h2>{listaFeriado.map(feriado => <li key={feriado.title}>{feriado.date} {feriado.title}</li>)}</h2>
            <button onClick={ordenando}>Ordenar</button>
        </div>
    )
}
export default MiApi