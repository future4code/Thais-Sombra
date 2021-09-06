const array = [
    {
      "id": "16306336541380.07414943867392276",
      "name": "Thaís",
      "age": 29,
      "email": "thais@hotmail.com",
      "product_id": "16306090846190.7064342093636162",
      "quantity": 2,
      "total_value": 101
    },
    {
      "id": "16306758943470.3088175407802123",
      "name": "Thaís",
      "age": 29,
      "email": "thais@hotmail.com",
      "product_id": "16306090846190.7064342093636162",
      "quantity": 2,
      "total_value": 101
    },
    {
      "id": "16306759038910.06334533805296738",
      "name": "Thaís",
      "age": 29,
      "email": "thais@hotmail.com",
      "product_id": "16306090846190.7064342093636162",
      "quantity": 3,
      "total_value": 151.5
    },
    {
      "id": "16306867998000.1994892263894481",
      "name": "Thaís",
      "age": 29,
      "email": "thais@hotmail.com",
      "product_id": "16306090846190.7064342093636162",
      "quantity": 3,
      "total_value": 151.5
    },
    {
      "id": "16306868420710.19609188426306345",
      "name": "Manu",
      "age": 30,
      "email": "manu@gmail.com",
      "product_id": "16306090846190.7064342093636162",
      "quantity": 5,
      "total_value": 252.5
    },
    {
      "id": "16306868480660.9424238755683774",
      "name": "Manu",
      "age": 30,
      "email": "manu@gmail.com",
      "product_id": "16306090846190.7064342093636162",
      "quantity": 15,
      "total_value": 757.5
    }
  ];

  const id =
    [
        {
          "id": "16306885447030.8830066086456474"
        },
        {
          "id": "16306858967340.8775202675459319"
        },
        {
          "id": "16306069622680.15192359525836197"
        }
    ];

    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]
    
    
    //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
    
    console.log(":::::: Exercício 2.b ::::::")
    
    const novoArrayProdutos = produtos.map((produto) => {
        return {
            nome: produto.nome, preco: (produto.preco * 0.95).toFixed(2)
        }
    })
    
    console.log(novoArrayProdutos)