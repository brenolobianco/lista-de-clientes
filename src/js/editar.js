import { Api } from "./api.js";

class Editar {
  static async editarCliente() {
    await Api.listarClientes().then((listaEditar) => {
      const select = document.getElementsByName("cliente")[0];
      listaEditar.forEach((element) => {
        select.options[select.options.length] = new Option(
          element.nome,
          element.id
        );
      });
    });
    let idCliente = null;
    const formBusca = document.getElementById("formBusca");
    const formEditar = document.getElementById("formularioEditar");
    formEditar.addEventListener("click", (event) => {
      event.preventDefault();
      const infoFormulario = new FormData(formBusca);

      const selectValor = infoFormulario.get("cliente");

      Api.listarClientes(selectValor).then((cliente) => {
        idCliente = cliente.id;
      });
    });

    const editarNome = document.querySelector("#clienteEditNome");
    const editarEmail = document.querySelector("#clienteEditEmail");
    const editarCpf = document.querySelector("#clienteEditIdade");
    const editarIdade = document.querySelector("#clienteEditIdade");
    const editarSexo = document.querySelector("#clienteEditSexo");
    const enderecoEstado = document.querySelector("#clienteEditEstado");
    const enderecoCidade = document.querySelector("#clienteEditNumero");
    const enderecoNumero = document.querySelector("#clienteEditBairro");
    const enderecoBairro = document.querySelector("#clienteEditCidade");
    const enderecoRua = document.querySelector("#clienteEditEstado");
    const enderecoCep = document.querySelector("#clienteEditCep");

    const botaoAtualizar = document.getElementById("atualizarDados");

    botaoAtualizar.addEventListener("click", async (event) => {
      event.preventDefault();

      const data = {
        id: idCliente,
        nome: editarNome.value,
        email: editarEmail.value,
        cpf: editarCpf.value,
        idade: editarIdade.value,
        sexo: editarSexo.value,
        endereco: {
          estado: enderecoEstado.value,
          cidade: enderecoCidade.value,
          bairro: enderecoBairro.value,
          numero: enderecoNumero.value,
          rua: enderecoRua.value,
          cep: enderecoCep.value,
        },
      };

      Api.editarCliente(idCliente, data);
    });
  }
}
Editar.editarCliente();
