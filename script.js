let eu = {};

eu = {
   nome: "Raphael",
   idade: 17,
   cidade: "Itaguai"
}
eu.altura = '1.75'
delete eu.cidade

console.log(eu)

let cadastro = [
    {
        nome:"Pedro",
        idade:18,
        telefone:21,
        amigos: ['Juliana', 'Thiago', 'João', 'Maria' ]
    },
    {
        nome:"Fabio",
        idade:18,
        telefone:21,
        amigos: ['Juliana', 'Sonia', 'João', 'Maria' ]
    },
    {
        nome:"Junior",
        idade:18,
        telefone:21,
        amigos: ['Juliana', 'Patrícia', 'João', 'Maria' ]
    },
    {
        nome:"Priscila",
        idade:18,
        telefone:21,
        amigos: ['Juliana', 'Miguel', 'João', 'Maria' ]
    },
    {
        nome:"Alexandre",
        idade:18,
        telefone:21,
        amigos: ['Juliana', 'Matheus', 'João', 'Maria' ]
    }
]
console.log(cadastro);
for(let x = 0; x < cadastro.length; x++){
    const amigos = cadastro[x].amigos[1];
    console.log(amigos)
}