const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Desea eliminar el paciente?')

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
        <p className="block text-gray-700 font-bold mb-3 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="block text-gray-700 font-bold mb-3 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
        </p>
        
        <p className="block text-gray-700 font-bold mb-3 uppercase">Email: {''}
        <span className="font-normal normal-case">{email}</span>
        </p>
        
        <p className="block text-gray-700 font-bold mb-3 uppercase">Fecha Alta: {''}
        <span className="font-normal normal-case">{fecha}</span>
        </p>
        
        <p className="block text-gray-700 font-bold mb-3 uppercase">Sintomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-7">
        <button
                type="button"
                className="py-2 px-7 bg-indigo-600 text-white font-bold rounded-lg uppercase hover:bg-indigo-700"
                onClick={() => setPaciente(paciente) }
            >Editar</button>

            <button
                type="button"
                className="py-2 px-7 bg-red-600 text-white font-bold rounded-lg uppercase hover:bg-red-700"
                onClick={handleEliminar}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente