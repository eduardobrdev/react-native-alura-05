import { renderHook } from '@testing-library/react-hooks'
import useListaLeiloes from '../../src/hooks/useListaLeiloes'
import { obtemLeiloes } from "../../src/repositorio/leilao";

jest.mock('../../src/servicos/apiLeiloes')

const mockLeiloes = [
    {
        id: 1,
        nome: 'Leilão',
        descricao: 'Descrição do Lei'
    }
]

describe('hooks/useListaLeiloes', () => {

    it('shold return auction list and function to update', async () => {
        obtemLeiloes.mockImplementation(() => mockLeiloes)
        const { result, waitForNextUpdate } = renderHook(() => useListaLeiloes())
        await waitForNextUpdate()
        console.log(result.current[0]);
    })

})