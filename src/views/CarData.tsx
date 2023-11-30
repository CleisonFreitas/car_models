import { useCallback, useEffect, useState } from "react";
import { CustomButton, FormInput, ReactDiv } from "../shared/components"
import ReactLoading from 'react-loading';
import { ApiCarModels } from "../shared/services/api/models/ApiCarModels";
import { CarDataType } from "../shared/types/CarDataType";

export const CarData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dataInfo, setDataInfo] = useState<CarDataType[]>([]);
  const [modelo, setModelo] = useState<string>('');
  const [marca, setMarca] = useState<string>('');
  const [limit, setLimit] = useState<string>('');

  const retriveData = async () => {
    const data = await ApiCarModels.getAll() as CarDataType[];
    setDataInfo(data as CarDataType[]);
    setIsLoading(false)
  }
  const SearchData = useCallback(async() => {
    setIsLoading(true)
    const data = await ApiCarModels.getAll(marca,modelo,limit) as CarDataType[]
    setDataInfo(data as CarDataType[]);
    setIsLoading(false)
  },[marca,modelo,limit]);

  useEffect(() => {
    retriveData()
  }, []);

  return (
    <ReactDiv style={`bg-gray-900 bg-opacity-30 text-white w-[340px] md:w-full md:h-96 h-full rounded-lg p-3 overflow-x-auto flex flex-col md:flex-row justify-start md:justify-center items-center md:items-center`}>
      {isLoading ?
        (
          <ReactLoading type={`spin`} color={'#fff'} height={'70px'} width={'70px'} />
        ) :
        (
          <>
            <ReactDiv style={`flex flex-col justify-start items-start w-full p-4 gap-3`}>
              <FormInput
                sx="w-full md:w-64 h-12"
                id="modelo"
                label="modelo"
                name="modelo"
                type="text"
                placeholder="Ex: A5"
                value={modelo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setModelo(e.currentTarget.value)}
              />
              <FormInput
                sx="w-full md:w-64 h-12"
                id="marca"
                label="marca"
                name="marca"
                type="text"
                placeholder="Ex: Audi"
                value={marca}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMarca(e.currentTarget.value)}
              />
              <FormInput
                sx="w-full md:w-64 h-12"
                id="limite"
                label="limite"
                name="limit"
                type="text"
                placeholder="Ex: 100"
                value={limit}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLimit(e.currentTarget.value)}
              />
              <CustomButton type="button" variant="primary" onClick={SearchData}>Consultar</CustomButton>
            </ReactDiv>
            <ReactDiv style="w-full text-sm h-full md:overflow-y-auto border border-gray-400">
              <div className="overflow-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="font-bold italic">
                      <th className="border border-gray-400 border-opacity-25 px-4 py-2">#</th>
                      <th className="border border-gray-400 border-opacity-25  px-4 py-2">modelo</th>
                      <th className="border border-gray-400 border-opacity-25  px-4 py-2">marca</th>
                      <th className="border border-gray-400 border-opacity-25  px-4 py-2">modelo_id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataInfo.map((item) => {
                      return (
                        <tr key={item.id} className="">
                          <td className="border border-gray-400 border-opacity-25 px-4 py-2">{item.id}</td>
                          <td className="border border-gray-400 border-opacity-25 px-4 py-2">{item.name}</td>
                          <td className="border border-gray-400 border-opacity-25 px-4 py-2">{item.make?.name}</td>
                          <td className="border border-gray-400 border-opacity-25 px-4 py-2">{item.make_id}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </ReactDiv>
          </>

        )
      }
    </ReactDiv>
  )
}
