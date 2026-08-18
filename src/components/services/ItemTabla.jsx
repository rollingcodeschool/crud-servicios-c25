import { Link } from "react-router";
import { useAppContext } from "../../context/AppContext";

const ItemTabla = ({servicio, fila}) => {

  const { servicios, setServicios } = useAppContext();

  const borrarServicio = () => {
    const serviciosFiltrados = servicios.filter(
      (itemServicio) => itemServicio.id !== servicio.id,
    );
    setServicios(serviciosFiltrados);
  };
  return (
    <tr className="border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 font-mono">
        {fila}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-200">
        {servicio.nombreServicio}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400 font-mono">
        ${servicio.precio}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex gap-3">
          <Link
            className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1"
            to={`/administrador/editar/${servicio.id}`}
          >
            <i className="bi bi-pencil-square"></i> Editar
          </Link>
          <button
            className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-1"
            onClick={borrarServicio}
          >
            <i className="bi bi-trash"></i> Borrar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemTabla;
