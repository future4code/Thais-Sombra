//Exercício 1

// a*) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*

// Resposta: Constructo é upm tipo de método para criar e iniciar um pbjeto criado pela classe. Para chamá-lo devemos incluí-lo dentro da class que desejamos criar com a seguinte sintaxe "constructor () {}"

//b*) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

//c*) Como conseguimos ter acesso às propriedades privadas de uma classe?*