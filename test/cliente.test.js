import { describe, it, expect } from "vitest";
import {Cliente} from '../entities/Cliente'


describe('Cliente', () => {
    it('Criar um Cliente corretamente'), () => {

        const cliente = Object.create(Cliente)

        cliente.criar('dioguinho', "dioguinho@gmail.com", "Diogo Marques")

        expect(cliente.ler()).toEqual({

            senha: 'dioguinho',
            email: 'dioguinho@gmail.com',
            nome_usuario: 'Diogo Marques'

        })



    }



    it("Ler um Usuário corretamente"), () => {


        const cliente = new Object.create(Cliente)

        cliente.criar('dioguinho', "dioguinho@gmail.com", "Diogo Marques")

        const atributos = cliente.ler()


        expect(atributos.senha).toBe('dioguinho')
        expect(atributos.email).toBe('dioguinho@gmail.com')
        expect(atributos.nome_usuario).toBe("Diogo Marques")

    }


    it("Atualizar um usuário corretamente"), () => {

        const cliente = Object.create(Cliente)

        cliente.criar('dioguinho', "dioguinho@gmail.com", "Diogo Marques")
        cliente.atualizar(null, "di@gmail.com")

        const parcialmenteAtualizado = cliente.ler()

        expect(parcialmenteAtualizado.senha).toBe('dioguinho')
        expect(parcialmenteAtualizado.email).toBe('di@gmail.com')
        expect(parcialmenteAtualizado.nome_usuario).toBe('Diogo Marques')

    }


    it("Deletar um Cliente", () => {

        const cliente = Object.create(Cliente)

        cliente.criar('dioguinho', "dioguinho@gmail.com", "Diogo Marques")

        cliente.deletar()

        const atributoDeletado = cliente.ler()

        expect(atributoDeletado.senha).toBeNull()
        expect(atributoDeletado.email).toBeNull()
        expect(atributoDeletado.nome_usuario).toBeNull()

    })
})