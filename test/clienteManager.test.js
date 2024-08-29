import { describe, it, expect } from 'vitest';
import { Cliente } from '../entities/Cliente';
import { ClienteManager } from '../entities/ClienteManager';

describe('ClienteManager', () => {
  it('Adicionar um Cliente na lista', () => {
    const cliente = Cliente('123', 'd@gmail.com', 'Diogo');
    ClienteManager.addClient(cliente);
    expect(ClienteManager.clientes.length).toBe(1);
  });

  it('Remover um Cliente da Lista', () => {
    const cliente = Cliente('123', 'd@gmail.com', 'Diogo');
    ClienteManager.addClient(cliente);
    ClienteManager.removeClient('d@gmail.com');
    expect(ClienteManager.clientes.length).toBe(0);
  });

  it('Buscar um Cliente pelo email', () => {
    const cliente = Cliente('123', 'd@gmail.com', 'Diogo');
    ClienteManager.addClient(cliente);
    const clienteEncontrado = ClienteManager.getClient('d@gmail.com');
    expect(clienteEncontrado).toBe(cliente);
  });

  it('Se não existe email, retorna undefined', () => {
    const naoencontrado = ClienteManager.getClient('dd@gmail.com');
    expect(naoencontrado).toBeUndefined();
  });
});
