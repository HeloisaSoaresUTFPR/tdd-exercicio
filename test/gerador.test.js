const Gerador = require('../lib/gerador');

describe('Gerador',() => {
    test('faixa ate 1000', () =>{
        const g =  new Gerador();
        const cliente = {
            nome: 'Heloisa',
            salario: 500.00,
            idade:30,
            valorDoEmprestimo: 1000.00
        } 
        const props = g.montarPropostas(cliente);

        expect(props.length).toBe(2);
        expect(props[0].parcelas).toBe(2);
        expect(props[0].total).toBeCloseTo(2000);
        expect(props[0].valorDaParcela).toBeCloseTo(1000);

        expect(props[1].parcelas).toBe(3);
        expect(props[1].total).toBeCloseTo(2000);
        expect(props[1].valorDaParcela). toBeCloseTo(666.67);
    }); 

    test('faixa de 1000 ate 5000', () =>{
        const g =  new Gerador();
        const cliente = {
            nome: 'Joao',
            salario: 2500.00,
            idade:30,
            valorDoEmprestimo: 1000.00
        } 
        const props = g.montarPropostas(cliente);

        expect(props.length).toBe(3);
        expect(props[0].parcelas).toBe(2);
        expect(props[0].total).toBeCloseTo(1300.00);
        expect(props[0].valorDaParcela).toBeCloseTo(650.00);

        expect(props[1].parcelas).toBe(4);
        expect(props[1].total).toBeCloseTo(1500.00);
        expect(props[1].valorDaParcela).toBeCloseTo(375.00);

        expect(props[2].parcelas).toBe(10);
        expect(props[2].total).toBeCloseTo(1500.00);
        expect(props[2].valorDaParcela).toBeCloseTo(150.00);
    }); 
})