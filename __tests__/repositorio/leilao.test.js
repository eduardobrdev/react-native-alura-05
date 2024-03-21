import { obtemLeiloes } from "../../src/repositorio/leilao";
import apiLeiloes from '../../src/servicos/apiLeiloes'

jest.mock('../../src/servicos/apiLeiloes')

const mockLeiloes = [
    {
        id: 1,
        nome: 'Leilão',
        descricao: 'Descrição do Lei'
    }
]

const mockRequisicao = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: retorno
            })
        }, 200)
    })
}

const mockRequisicaoErro = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject()
        }, 200)
    })
}

describe('repositorio/leilao', () => {

    //Reseta o contador de requisições entre os testes.
    beforeEach(() => {
        apiLeiloes.get.mockClear()
    })

    describe('obtemLeiloes', () => {
        it("shold return auction list", async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes))
            const leiloes = await obtemLeiloes()

            expect(leiloes).toEqual(mockLeiloes)
            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes')
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1)
        })

        it("shold return empty list if fail", async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoErro())
            const leiloes = await obtemLeiloes()

            expect(leiloes).toEqual([])
            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes')
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1)
        })
    })
})