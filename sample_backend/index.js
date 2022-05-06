// console.log("Addition of two variables");
// const num1 = 10;
// const num2 = 20;
// const sum = num1 + num2;

// document.getElementById("something");

// console.log("Result" + sum);



const express = require('express');
const cors = require('cors');

const app  = express();
const port = 8080;

app.use(cors({
  'origin': "http://localhost:3000"
}));

app.listen(port, () => {
  console.log("Going live...");
});

app.get('/users', (request, response) => {
  response.json({
    'name': "KITS",
    'test_result': "Success"
  });
})
//  http://localhost:8080/test

app.get('/sum', (request, response) => {
  let num1 = request.query.num1;
  let num2 = request.query.num2;

  num1 = Number(num1);
  num2 = Number(num2);

  const sum = num1 + num2;
  response.json({
    'sum': sum
  });
});

//  http://localhost:8080/sum?num1=10&num2=30

app.post('/mul', (request, response) => {
  let num1 = request.query.num1;
  let num2 = request.query.num2;

  num1 = Number(num1);
  num2 = Number(num2);
  const result = num1 * num2;
  response.json({
    'product': result
  });
});

app.get('/user_list', (request, response) => {
  response.json([
    {
      'first_name': "Aayush",
      'last_name':  "Sinha",
      'email': "test@test.com"
    },
    {
      'first_name': "Nitin",
      'last_name': "Pathuri",
      'email': "test@test.com"
    },
    {
      'first_name': "Sravan",
      'last_name': "Bhashyam",
      'email': "test@test.com"
    }
  ]);
})