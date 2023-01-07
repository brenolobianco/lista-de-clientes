import { Api } from "./api.js";

class Deletar {
   
  static async deletarCliente() {
    await Api.listarClientes().then((listaDeletar) => {
      const select = document.getElementsByName("cliente")[0];

      listaDeletar.forEach((element) => {
        if (element.id > 6) {
          select.options[select.options.length] = new Option(
            element.nome,
            element.id
          );
        }
      });
    });
    const form = document.getElementById("formDeletar");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const dataValor = formData.get("cliente");

      Api.deletarCliente(dataValor);
    });
  }
}
Deletar.deletarCliente();
