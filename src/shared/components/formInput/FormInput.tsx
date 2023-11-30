import { ReactDiv } from '..'

type FormInputType = {
    sx: string;
    label: string;
    type: string;
    name: string;
    id:string;
    value:string;
    onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const FormInput: React.FC<FormInputType> = ({sx,label,type,id,name,value,onChange}) => {
  return (
    <ReactDiv style={`flex flex-col md:flex-row justify-between w-full items-center px-5`}>
        <label htmlFor={id} className='font-bold capitalize'>{label}:</label>
        <input 
            className={`${sx} rounded-lg p-3 bg-white bg-opacity-0 border-2 border-gray-600`}
            type={type} 
            id={id} 
            name={name} 
            value={value} 
            onChange={onChange}/>
    </ReactDiv>
  )
}
