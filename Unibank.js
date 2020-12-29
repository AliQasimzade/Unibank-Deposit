/** @format */
function atTheEndWithdrawal() {
  document.getElementById("tableTwo").style.opacity = "0";
  document.getElementById("btnTwo").style.border = "none";
  document.getElementById("tableOne").style.opacity = "1";
}

function monthlyWithdrawal() {
  document.getElementById("tableOne").style.opacity = "0";
  document.getElementById("tableTwo").style.opacity = "1";
  document.getElementById("btnOne").style.border = "none";
}

function calculateDeposit() {
  let inputAmount = Number(document.getElementById("rangeAmount").value);
  const selectCurrency = document.getElementById("selectCurrency").value;
  let percent = Number(document.getElementById("outputPercent").innerHTML);
  let month = Number(document.getElementById("inputMonth").innerHTML);
  const rangeMonth = Number(document.getElementById("rangeMonth").value);
  const yearOrMonthly = document.getElementById("yearOrMonthly").value;
  document.getElementById("inputAmount").innerHTML = inputAmount;
  document.getElementById("changeCurrency").innerHTML = "AZN";
  document.getElementById("changeCurrencyMonth").innerHTML = "AZN";
  document.getElementById("outputs").style.opacity = "1";
  if (selectCurrency == 1 && rangeMonth == 1 && yearOrMonthly == 1) {
    month = 3;
    percent = 6;
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    const totalAmount = inputAmount + (inputAmount * percent) / 100 / 4;
    const monthlyProfit = ((inputAmount * percent) / 100 / 4 / month).toFixed(
      2
    );
    document.getElementById("totalAmount").innerHTML = totalAmount;
    document.getElementById("monthlyProfit").innerHTML = monthlyProfit;
  } else if (selectCurrency == 1 && rangeMonth == 2 && yearOrMonthly == 1) {
    percent = 8;
    month = 6;
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    const totalAmount = inputAmount + (inputAmount * percent) / 100 / 2;
    const monthlyProfit = ((inputAmount * percent) / 100 / 2 / month).toFixed(
      2
    );
    document.getElementById("totalAmount").innerHTML = totalAmount;
    document.getElementById("monthlyProfit").innerHTML = monthlyProfit;
  } else if (selectCurrency == 1 && rangeMonth == 3 && yearOrMonthly == 1) {
    percent = 12;
    month = 12;
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    const totalAmount = inputAmount + (inputAmount * percent) / 100;
    const monthlyProfit = ((inputAmount * percent) / 100 / month).toFixed(2);
    document.getElementById("totalAmount").innerHTML = totalAmount;
    document.getElementById("monthlyProfit").innerHTML = monthlyProfit;
  } else if (selectCurrency == 1 && rangeMonth == 4 && yearOrMonthly == 1) {
    month = 18;
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    const totalAmount = inputAmount + (inputAmount * percent) / 100 + 30;
    const monthlyProfit = ((inputAmount * percent) / 100 / 12).toFixed(2);
    document.getElementById("totalAmount").innerHTML = totalAmount;
    document.getElementById("monthlyProfit").innerHTML = monthlyProfit;
  } else if (selectCurrency == 1 && rangeMonth == 5 && yearOrMonthly == 1) {
    month = 24;
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    const totalAmount = inputAmount + (inputAmount * percent) / 100 + 120;
    const monthlyProfit = ((inputAmount * percent) / 100 / 12).toFixed(2);
    document.getElementById("totalAmount").innerHTML = totalAmount;
    document.getElementById("monthlyProfit").innerHTML = monthlyProfit;
  } else if (selectCurrency == 1 && rangeMonth == 6 && yearOrMonthly == 1) {
    month = 36;
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    const totalAmount = inputAmount + (inputAmount * percent) / 100 + 180;
    const monthlyProfit = ((inputAmount * percent) / 100 / 12).toFixed(2);
    document.getElementById("totalAmount").innerHTML = totalAmount;
    document.getElementById("monthlyProfit").innerHTML = monthlyProfit;
  } else if (selectCurrency == 2 && yearOrMonthly == 1) {
    month = 12;
    percent = 2;
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    const totalAmount = inputAmount + (inputAmount * percent) / 100;
    const monthlyProfit = ((inputAmount * percent) / 100 / month).toFixed(2);
    document.getElementById("totalAmount").innerHTML = totalAmount;
    document.getElementById("monthlyProfit").innerHTML = monthlyProfit;
    document.getElementById("changeCurrency").innerHTML = "USD";
    document.getElementById("changeCurrencyMonth").innerHTML = "USD";
  } else if (selectCurrency == 3 && yearOrMonthly == 1) {
    month = 12;
    percent = 0.1;
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    const totalAmount = inputAmount + (inputAmount * percent) / 100;
    const monthlyProfit = ((inputAmount * percent) / 100 / month).toFixed(2);
    document.getElementById("totalAmount").innerHTML = totalAmount;
    document.getElementById("monthlyProfit").innerHTML = monthlyProfit;
    document.getElementById("changeCurrency").innerHTML = "EUR";
    document.getElementById("changeCurrencyMonth").innerHTML = "EUR";
  } else if (selectCurrency == 1 && rangeMonth == 1 && yearOrMonthly == 2) {
    month = 3;
    percent = "";
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("monthlyProfit").innerHTML = "";
  } else if (selectCurrency == 1 && rangeMonth == 2 && yearOrMonthly == 2) {
    month = 6;
    percent = "";
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("monthlyProfit").innerHTML = "";
  } else if (selectCurrency == 1 && rangeMonth == 3 && yearOrMonthly == 2) {
    month = 12;
    percent = 11;
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    const totalAmount = inputAmount + (inputAmount * percent) / 100;
    const monthlyProfit = ((inputAmount * percent) / 100 / month).toFixed(2);
    document.getElementById("totalAmount").innerHTML = totalAmount;
    document.getElementById("monthlyProfit").innerHTML = monthlyProfit;
  } else if (selectCurrency == 1 && rangeMonth == 4 && yearOrMonthly == 2) {
    month = 18;
    percent = 11;
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    const totalAmount = inputAmount + (inputAmount * percent) / 100 + 27;
    const monthlyProfit = ((inputAmount * percent) / 100 / 12).toFixed(2);
    document.getElementById("totalAmount").innerHTML = totalAmount;
    document.getElementById("monthlyProfit").innerHTML = monthlyProfit;
  } else if (selectCurrency == 1 && rangeMonth == 5 && yearOrMonthly == 2) {
    month = 24;
    percent = 11;
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    const totalAmount = inputAmount + (inputAmount * percent) / 100 + 54;
    const monthlyProfit = ((inputAmount * percent) / 100 / 12).toFixed(2);
    document.getElementById("totalAmount").innerHTML = totalAmount;
    document.getElementById("monthlyProfit").innerHTML = monthlyProfit;
  } else if (selectCurrency == 1 && rangeMonth == 6 && yearOrMonthly == 2) {
    month = 36;
    percent = 11;
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    const totalAmount = inputAmount + (inputAmount * percent) / 100 + 109;
    const monthlyProfit = ((inputAmount * percent) / 100 / 12).toFixed(2);
    document.getElementById("totalAmount").innerHTML = totalAmount;
    document.getElementById("monthlyProfit").innerHTML = monthlyProfit;
  } else if (selectCurrency == 2 && rangeMonth == 1 && yearOrMonthly == 2) {
    month = 3;
    percent = "";
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("monthlyProfit").innerHTML = "";
    document.getElementById("changeCurrency").innerHTML = "USD";
    document.getElementById("changeCurrencyMonth").innerHTML = "USD";
  } else if (selectCurrency == 2 && rangeMonth == 2 && yearOrMonthly == 2) {
    month = 6;
    percent = "";
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("monthlyProfit").innerHTML = "";
    document.getElementById("changeCurrency").innerHTML = "USD";
    document.getElementById("changeCurrencyMonth").innerHTML = "USD";
  } else if (selectCurrency == 2 && rangeMonth == 3 && yearOrMonthly == 2) {
    month = 12;
    percent = 1.6;
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    const totalAmount = inputAmount + (inputAmount * percent) / 100;
    const monthlyProfit = ((inputAmount * percent) / 100 / month).toFixed(2);
    document.getElementById("totalAmount").innerHTML = totalAmount;
    document.getElementById("monthlyProfit").innerHTML = monthlyProfit;
    document.getElementById("changeCurrency").innerHTML = "USD";
    document.getElementById("changeCurrencyMonth").innerHTML = "USD";
  } else if (selectCurrency == 2 && rangeMonth == 4 && yearOrMonthly == 2) {
    month = 18;
    percent = "";
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("monthlyProfit").innerHTML = "";
    document.getElementById("changeCurrency").innerHTML = "USD";
    document.getElementById("changeCurrencyMonth").innerHTML = "USD";
  } else if (selectCurrency == 2 && rangeMonth == 5 && yearOrMonthly == 2) {
    month = 24;
    percent = "";
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("monthlyProfit").innerHTML = "";
    document.getElementById("changeCurrency").innerHTML = "USD";
    document.getElementById("changeCurrencyMonth").innerHTML = "USD";
  } else if (selectCurrency == 2 && rangeMonth == 6 && yearOrMonthly == 2) {
    month = 36;
    percent = "";
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("monthlyProfit").innerHTML = "";
    document.getElementById("changeCurrency").innerHTML = "USD";
    document.getElementById("changeCurrencyMonth").innerHTML = "USD";
  } else if (selectCurrency == 3 && rangeMonth == 1 && yearOrMonthly == 2) {
    month = 3;
    percent = "";
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("monthlyProfit").innerHTML = "";
    document.getElementById("changeCurrency").innerHTML = "EUR";
    document.getElementById("changeCurrencyMonth").innerHTML = "EUR";
  } else if (selectCurrency == 3 && rangeMonth == 2 && yearOrMonthly == 2) {
    month = 6;
    percent = "";
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("monthlyProfit").innerHTML = "";
    document.getElementById("changeCurrency").innerHTML = "EUR";
    document.getElementById("changeCurrencyMonth").innerHTML = "EUR";
  } else if (selectCurrency == 3 && rangeMonth == 4 && yearOrMonthly == 2) {
    month = 18;
    percent = "";
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("monthlyProfit").innerHTML = "";
    document.getElementById("changeCurrency").innerHTML = "EUR";
    document.getElementById("changeCurrencyMonth").innerHTML = "EUR";
  } else if (selectCurrency == 3 && rangeMonth == 5 && yearOrMonthly == 2) {
    month = 24;
    percent = "";
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("monthlyProfit").innerHTML = "";
    document.getElementById("changeCurrency").innerHTML = "EUR";
    document.getElementById("changeCurrencyMonth").innerHTML = "EUR";
  } else if (selectCurrency == 3 && rangeMonth == 6 && yearOrMonthly == 2) {
    month = 36;
    percent = "";
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("monthlyProfit").innerHTML = "";
    document.getElementById("changeCurrency").innerHTML = "EUR";
    document.getElementById("changeCurrencyMonth").innerHTML = "EUR";
  } else if (selectCurrency == 3 && rangeMonth == 3 && yearOrMonthly == 2) {
    month = 12;
    percent = "";
    document.getElementById("inputMonth").innerHTML = month;
    document.getElementById("outputPercent").innerHTML = percent;
    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("monthlyProfit").innerHTML = "";
    document.getElementById("changeCurrency").innerHTML = "EUR";
    document.getElementById("changeCurrencyMonth").innerHTML = "EUR";
  }
}

document.getElementById("rangeAmount").addEventListener("input", calculateDeposit);
document.getElementById("selectCurrency").addEventListener("change", calculateDeposit);
document.getElementById("rangeMonth").addEventListener("input", calculateDeposit);
document.getElementById("yearOrMonthly").addEventListener("change", calculateDeposit);
