import { Api } from "./api.js";
export class Renderizador {
    static renderizarCard(arrCards) {
        
        const container = document.querySelector('.container')
    
        arrCards.forEach((cliente) => {
            const card = this.criarCard(cliente);
            
            container.appendChild(card);
        });
    }

    static criarCard(data) {
        const card = document.createElement("li");
        const nomeCliente = document.createElement("h2");
        const secaoDadosPessoais = document.createElement("div");
        const dadosPessoais = document.createElement("h3");
        const email = document.createElement("p");
        const idade = document.createElement("p");
        const cpf = document.createElement("p");
        const sexo = document.createElement("p");

        const secaoEndereco = document.createElement("div");
        const endereco = document.createElement("h3");
        const cep = document.createElement("p");
        const estado = document.createElement("p");
        const cidade = document.createElement("p");
        const bairro = document.createElement("p");
        const rua = document.createElement("p");
        const numero = document.createElement("p");
        
        
         card.id = data.id

        nomeCliente.innerText = data.nome;
        dadosPessoais.innerText = "Dados Pessoais:";
        email.innerText = 'Email: ' + data.email;
        idade.innerText = 'Idade: ' + data.idade;
        cpf.innerText = 'Cpf: ' + data.cpf;
        sexo.innerText = 'Sexo: ' + data.sexo;
        endereco.innerText = "Endereço:";
        cep.innerText = 'Cep: ' + data.endereco.cep;
        estado.innerText = 'Estado: ' + data.endereco.estado;
        cidade.innerText = 'Cidade: ' + data.endereco.cidade;

        bairro.innerText = 'Bairro: ' + data.endereco.bairro;
        rua.innerText = 'Rua: ' + data.endereco.rua;
        numero.innerText = 'Numero: ' + data.endereco.numero;

        card.classList = 'container. card'


        card.append(
            nomeCliente,
            secaoDadosPessoais,
            dadosPessoais,
            email,
            idade,
            cpf,
            sexo,
            secaoEndereco
            
        );
        secaoEndereco.append(endereco, cep, estado, cidade, bairro, rua, numero);

        return card;
    }
}

const baseClientes = await Api.listarClientes()
Renderizador.renderizarCard(baseClientes)


