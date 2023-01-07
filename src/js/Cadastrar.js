import { Api } from "./api.js";

class Cadastrar {
  static criarCliente() {
    const clienteNome = document.getElementById("clienteNome");
    const clienteEmail = document.getElementById("clienteEmail");
    const clienteIdade = document.getElementById("clienteIdade");
    const clienteCpf = document.getElementById("clienteCpf");
    const clienteSexo = document.getElementById("clienteSexo");
    const enderecoCep = document.getElementById("enderecoCep");
    const enderecoRua = document.getElementById("rua");
    const enderecoBairro = document.getElementById("enderecoBairro");
    const enderecoNumero = document.getElementById("enderecoNumero");
    const enderecoCidade = document.getElementById("enderecoCidade");
    const enderecoEstado = document.getElementById("enderecoEstado");
    const botaoCadastrar = document.getElementById("botaoCadastrar");

    botaoCadastrar.addEventListener("click", (event) => {
      event.preventDefault();
      const data = {
        nome: clienteNome.value,
        email: clienteEmail.value,
        idade: clienteIdade.value,
        cpf: clienteCpf.value,
        sexo: clienteSexo.value,
        endereco: {
          estado: enderecoEstado.value,
          cidade: enderecoCidade.value,
          bairro: enderecoBairro.value,
          numero: enderecoNumero.value,
          rua: enderecoRua.value,
          cep: enderecoCep.value,
        },
      };

      Api.cadastrarCliente(data);
    });
  }

  static async deletarCliente() {
    const botaoDeletarCliente = document.getElementById("deletarCliente");
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
      const formData = new FormData(form);
      const dataValor = formData.get("cliente");
      Api.deletarCliente(dataValor);
    });
    botaoDeletarCliente.addEventListener("click", async (event) => {
      event.preventDefault();
    });
  }
}

Cadastrar.criarCliente();
