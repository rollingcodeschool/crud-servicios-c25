import { Link } from "react-router";
import logoError from "../../assets/404.png";

const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logoError} alt="logo del error 404" />
      <p className="text-2xl ">Pagina no encontrada</p>
      <Link to={"/"} className="text-blue-400 hover:underline">
        Vuelve al inicio
      </Link>
    </div>
  );
};

export default Error404;
