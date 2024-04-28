import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 12345; // PinNumber

console.log("\n Welcome Our Bank - ATM Machine \n");

let pinAnswer = await inquirer.prompt([
  {
    name: "Pin",
    message: "Enter Your Pin code :",
    type: "number",
  },
]);

if (pinAnswer.Pin === myPin) {
  console.log(" Your Pin Number Was Correct !!!");
  console.log(`Current Account Balance is ${myBalance}`)

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["Withdraw Amount", "Your Check Balance"],
    },
  ]);

  if (operationAns.operation === "Withdraw Amount") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter Your Withdraw Amount",
        type: "number",
      },
    ]);
    if(amountAns.amount > myBalance){
      console.log("Insufficient Balance");
    }
    else{
      myBalance -= amountAns.amount;
      console.log(`${amountAns.amount} Withdraw Successfully`);
      console.log(`Your Remaining Balance is: ${myBalance}`);
    }
  }
  else if(operationAns.operation === "Check Balance"){
    console.log(`Your Current Balance is: ${myBalance}`);
    }
  }
  else{
    console.log("Pin is incorrect, Try Again");
  }