let adress = [
  { id: 1, street: 'Av. paulista', city: 'São Paulo', num: 44, state: 'SP' },
  { id: 2, street: 'Av. brigadeiro luiz antonio', city: 'São Paulo', state: 'SP' },
  { id: 3, street: 'Rua tremenbé bonifacio', city: 'São Paulo', num: 12, state: 'SP' },
  { id: 4, street: 'Rua doutor alexandre pinheiros', city: 'São Paulo', num: 97, state: 'SP' },
  { id: 5, street: 'Av. torres do Brazil', city: 'São Paulo', state: 'SP' }
];

let employee = [
  { id: 1, name: 'Joaozinho', email: 'Joaozinho@gmail.com', username: 'Joaozinho123', age: 50, adress_id: 1 },
  {id: 2, name: 'Laura', email: 'Laura@gmail.com', username: 'Laura123', age: 25, adress_id: 2 },
  {id: 3, name: 'José', email: 'José@gmail.com', username: 'José123', age: 30, adress_id: 3 },
  {id: 4, name: 'Maria', email: 'Maria@gmail.com',username: 'Maria123', adress_id: 5 },
  { id: 5, name: 'Antônio', email: 'Antônio@gmail.com', username: 'Antônio123', age: 18, adress_id: 2 },
  { id: 6,name: 'Eduarda', email: 'Eduarda@gmail.com', username: 'Eduarda123', age: 32 , adress_id: 6},
  { id: 7,name: 'Marcos', email: 'Marcos@gmail.com', username: 'Marcos123',age: 23, adress_id: 7},
  { id: 8,name: 'Otávio', email: 'Otávio@gmail.com', username: 'Otávio123',age: 16, adress_id: 11},
  {id: 9, name: 'Simone', email: 'Simone@gmail.com', username: 'Simone123', age: 37, adress_id: 2},
  {id: 10, name: 'Vinicius', email: 'Vinicius@gmail.com', username: 'Vinicius123', age: 34, adress_id: 4},
  { id: 11,name: 'Cris', email: 'Cris@gmail.com', username: 'Cris123' ,age: 46, adress_id: 5}
]

export const getAllEmployees = (app) => {
  app.get('/', (req, res) => {
      res.status(200).json({employee})
    });
}

export const getAllAdrees = (app) => {
  app.get('/enderecos', (req, res) => {
      res.status(200).json({adress})
    });
}

export const getAllEmployeesByAdress = (app) => {
  app.get('/funcionarios', (req, res) => {
      let result = employee.filter(employee => employee.adress_id == req.body);
      res.status(200).json({employee: result})
    });
}