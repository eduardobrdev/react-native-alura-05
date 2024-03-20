import { formataBrasileiroParaDecimal, formataDecimalParaReal } from '../../../src/negocio/formatadores/moeda';

describe("negocio/formatadores/moeda", () => {
    describe("formataBrasileiroParaDecimal", () => {
        it("should return 8.59 when the value is '8.59'", () => {
            const resultado = formataBrasileiroParaDecimal('8,59')
            expect(resultado).toBe(8.59)
        }) 
    })

    describe("formataDecimalParaReal", () => {
        it("shold return 'R$ 10,61' when the value is 10.61", () => {
            const resultado = formataDecimalParaReal(10.61)
            expect(resultado).toMatch(/R\$\s10,61/)
        })
    })
})