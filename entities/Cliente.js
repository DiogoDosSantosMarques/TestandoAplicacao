export const Cliente = {
    senha: null,
    email: null,
    nome_usuario: null,
  
    criar(senha, email, nome_usuario) {
      this.senha = senha;
      this.email = email;
      this.nome_usuario = nome_usuario;
    },
  
    ler() {
      return {
        senha: this.senha,
        email: this.email,
        nome_usuario: this.nome_usuario
      };
    },
  
    atualizar(senha = null, email = null, nome_usuario = null) {
      if (senha !== null) this.senha = senha;
      if (email !== null) this.email = email;
      if (nome_usuario !== null) this.nome_usuario = nome_usuario;
    },
  
    deletar() {
      this.senha = null;
      this.email = null;
      this.nome_usuario = null;
    }
  };

  


