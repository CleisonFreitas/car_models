import { useCallback, useState } from "react";
import { CustomButton, FormInput, ReactDiv } from "..";
import { useAuth } from "../../contexts/auth/AuthContext";

export const FormLogin = () => {
    const [newUser, setNewUser] = useState<string>('');
    const authContext = useAuth();

    const userSubmit = useCallback(() => {
        if (!newUser || newUser.length < 3) {
            alert("O campo *Nome* precisar ter ao menos 4 Caractéres");
            return;
        }
        authContext.login(newUser as string)
    }, [newUser, authContext]);

    return (
        <ReactDiv style="w-screen h-screen bg-gray-900 flex justify-center items-center">
            <form onSubmit={userSubmit}>
                <ReactDiv
                    style="bg-gray-700 w-[320px] md:w-[380px] h-[240px] flex flex-col justify-around items-center rounded-lg p-4 text-white">
                    <h3>Acesse para consultar</h3>
                    <ReactDiv style="flex justify-between w-full">
                        <FormInput
                            id="nome"
                            label="nome"
                            name="nome"
                            placeholder="Digite seu nome para acessar"
                            type="text"
                            value={newUser}
                            sx="w-full md:ml-3 outline-blue-700"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewUser(e.currentTarget.value)}
                        />
                    </ReactDiv>
                    <CustomButton type="submit" variant="primary">Acessar</CustomButton>
                </ReactDiv>
            </form>
        </ReactDiv>
    );
}