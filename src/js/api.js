export class Api {
  static urlBase = "https://atividade-api-clientes.herokuapp.com/clientes";

  static async listarClientes() {
    const baseClientes = await fetch(`${this.urlBase}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => resp)
      .catch((erro) => console.log(erro));

    return baseClientes;
  }

  static async cadastrarCliente(data) {
    const novoCliente = await fetch(this.urlBase, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((resp) => resp)
      .then((resp) => console.log("Cliente cadastrado"))
      .catch((erro) => console.log(erro));

    return novoCliente;
  }

  static async editarCliente(id, data) {
    const cliente = await fetch(`${this.urlBase}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resp) => resp)
      .catch((err) => console.log(err));

    return cliente;
  }

  static async deletarCliente(id) {
    const clienteDeletado = await fetch(`${this.urlBase}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
   
      .then((res) => {
        console.log("cliente removido com sucesso");
        return res;
      });

    return clienteDeletado;
  }
}
