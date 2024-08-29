export const ClienteManager = {
    
    clientes: [],


    addClient(cliente){

        this.clientes.push(cliente)

    },

    removeClient(email){

        this.clientes = this.clientes.filter(cliente => cliente.email !== email)

    },

    getClient(email){

        return this.clientes.find(cliente => cliente.email === email)

    }

}