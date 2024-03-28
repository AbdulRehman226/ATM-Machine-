#!/usr/bin/env node
import inquirer from "inquirer";
let balance: number = 10000;
let pinCode: number = 66554;
const code = await inquirer.prompt([
  {
    message: "Enter the Pin Code",
    type: "number",
    name: "pinCode",
  },
]);
if (code.pinCode === pinCode) {
  console.log("Correct pin code");
  let oprt = await inquirer.prompt([
    {
      name: "operations",
      type: "list",
      message: "What do you want ?",
      choices: ["Withdraw", "Check Balance", "Fastcash"],
    },
  ]);
  if (oprt.operations === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        message: "Enter The Amount",
        Type: "number",
        name: "Amount",
      },
    ]);
    if (amountAns.Amount < balance) {
      balance -= amountAns.Amount;
      console.log(" Now your amount is " + balance);
    } else {
      console.log("Your balance is unsuficiant");
    }
  } else if (oprt.operations === "Check Balance") {
    console.log("Your current balance is " + balance);
  } else if (oprt.operations === "Fastcash") {
    let cash = await inquirer.prompt([
      {
        message: "Select the amount To Fastcash",
        type: "list",
        name: "fastCash",
        choices: ["1000", "2000", "5000", "10000"],
      },
    ]);
    if (cash.fastCash === "1000") {
      balance -= cash.fastCash;
      console.log(`Your remaining balance is ${balance}`);
    }
    if (cash.fastCash === "2000") {
      balance -= cash.fastCash;
      console.log(`Your remaining balance is ${balance}`);
    }
    if (cash.fastCash === "5000") {
      balance -= cash.fastCash;
      console.log(`Your remaining balance is ${balance}`);
    }
    if (cash.fastCash === "10000") {
      balance -= cash.fastCash;
      console.log(`Your remaining balance is ${balance}`);
    }
  }
} else {
  console.log("Pin Code is invalid");
}
