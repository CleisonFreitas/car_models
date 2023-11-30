import { Link } from "react-router-dom";
import { CustomButton, ReactDiv } from "../shared/components"
const msg = `Pesquise veículos vendidos nos Estados Unidos por ano, marca, modelo, acabamento, motor, carroceria, quilometragem, decodificador VIN e muito mais.`;
export const Home = () => {
  return (
    <ReactDiv style={`bg-gray-900 bg-opacity-30 text-white w-full md:h-64 h-96 rounded-lg p-5`}>
      <h3 className="text-2xl font-bold italic underline md:text-start text-center">Consulta e análise de carros vendidos</h3>
      <ReactDiv style={`w-full h-64 mt-4 rounded-lg py-5`}>
        <p className="text-xl italic">{msg}</p>
        <ReactDiv style={`flex gap-2 mt-4 w-full md:w-48`}>
          <Link to={`/car-models`}>
            <CustomButton type="button" variant="primary">Começar!</CustomButton>
          </Link>
        </ReactDiv>
      </ReactDiv>
    </ReactDiv>
  )
}
