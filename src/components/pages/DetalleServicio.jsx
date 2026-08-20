import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { useAppContext } from "../../context/AppContext";
import { useState } from "react";

const DetalleServicio = () => {
  const {id} = useParams()
  const { servicios } = useAppContext();
  const [servicio, setServicio] = useState({})
  console.log(id)

  useEffect(()=>{
    const servicioBuscado = buscarServicio(id)
    setServicio(servicioBuscado)
  }, [])

  const buscarServicio = (idServicio) => {
    return servicios.find((item) => item.id === idServicio);
  };

  return (
    <div className="max-w-xl mx-auto bg-zinc-900 rounded-lg shadow-lg p-8 mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center">{servicio.nombreServicio}</h2>
      <img
        src={servicio.imagen}
        alt={servicio.nombreServicio}
        className="w-full h-64 object-cover rounded mb-4 border border-zinc-700"
      />
      <p className="text-lg mb-2">
        <span className="font-semibold">Precio:</span> ${servicio.precio}
      </p>
      <p className="text-lg mb-2">
        <span className="font-semibold">Categoría:</span> {servicio.categoria}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Descripción:</span> {servicio.descripcion}
      </p>
      <Link
        to="/"
        className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded"
      >
        Volver
      </Link>
    </div>
  );
};

export default DetalleServicio;
