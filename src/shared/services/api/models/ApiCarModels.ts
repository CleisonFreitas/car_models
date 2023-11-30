import { CarDataType } from "../../../types/CarDataType";
import { ApiException } from "../ApiException";
import { ApiRapidCar } from "../ApiRapidCar";

const getAll = async(
    make?:string, 
    make_id?: string, 
    model?: string, 
    limit?: number | string, 
    sort?: string,
    direction?: string, 
    year?: string)
    : Promise<CarDataType[] | ApiException> => {
    try{
        const {data} = await ApiRapidCar().get('/models', {
            params: {
                make: make ? make : '',
                make_id: make_id ? make_id : '',
                limit:limit ? limit : 1000,
                model: model ? model : '',
                sort: sort ? sort :'id',
                direction: direction ? direction : 'asc',
                year: year ? year : '2020',
                verbose: 'yes'
            }
        });
        return data.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(error: any) {
        return new ApiException(error.message || 'Dados não encontrados');
    }
}

export const ApiCarModels = {
    getAll
}