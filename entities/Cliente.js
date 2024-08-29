export const Cliente = (senha, email, nome_usuario) => {
  return {
    senha,
    email,
    nome_usuario,
  
    criar(novaSenha, novoEmail, novoNomeUsuario) {
      this.senha = novaSenha;
      this.email = novoEmail;
      this.nome_usuario = novoNomeUsuario;
    },
  
    ler() {
      return {
        senha: this.senha,
        email: this.email,
        nome_usuario: this.nome_usuario
      };
    },
  
    atualizar(novaSenha = null, novoEmail = null, novoNomeUsuario = null) {
      if (novaSenha !== null) this.senha = novaSenha;
      if (novoEmail !== null) this.email = novoEmail;
      if (novoNomeUsuario !== null) this.nome_usuario = novoNomeUsuario;
    },
  
    deletar() {
      this.senha = null;
      this.email = null;
      this.nome_usuario = null;
    }
  };
};
