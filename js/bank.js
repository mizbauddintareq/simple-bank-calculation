document.getElementById("deposit-btn").addEventListener("click", function () {
  const getDepositAmount = document.getElementById("deposit-field");
  const newDepositAmount = parseFloat(getDepositAmount.value);
  if (isNaN(newDepositAmount)) {
    Swal.fire({
      icon: "error",
      title: "Enter a valid amount",
    });
    return;
  } else if (newDepositAmount <= 0) {
    Swal.fire({
      icon: "error",
      title: "Please enter some amount",
    });
    return;
  } else if (newDepositAmount > 0) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Deposit successful",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  const getPreviousDepositAmount = document.getElementById("totalDeposit");
  const previousDepositAmount = parseFloat(getPreviousDepositAmount.innerText);

  const totalDeposit = newDepositAmount + previousDepositAmount;
  getPreviousDepositAmount.innerText = totalDeposit;

  const getPreviousTotalAmount = document.getElementById("totalBalance");
  const previousTotalAmount = parseFloat(getPreviousTotalAmount.innerText);
  const newTotalAmount = newDepositAmount + previousTotalAmount;
  getPreviousTotalAmount.innerText = newTotalAmount;

  getDepositAmount.value = "";
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const getWithdrawAmount = document.getElementById("withdraw-field");
  const newWithdrawAmount = parseFloat(getWithdrawAmount.value);

  getWithdrawAmount.value = "";

  if (isNaN(newWithdrawAmount)) {
    Swal.fire({
      icon: "error",
      title: "Enter a valid amount",
    });
    return;
  } else if (newWithdrawAmount <= 0) {
    Swal.fire({
      icon: "error",
      title: "Please enter some amount",
    });
    return;
  } else if (newWithdrawAmount > 0) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Withdraw successful",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const getPreviousWithdrawAmount = document.getElementById("total-withdraw");
  const previousWithdrawAmount = parseFloat(
    getPreviousWithdrawAmount.innerText
  );

  const getPreviousTotalAmount = document.getElementById("totalBalance");
  const previousTotalAmount = parseFloat(getPreviousTotalAmount.innerText);

  if (newWithdrawAmount > previousTotalAmount) {
    Swal.fire({
      icon: "error",
      title: "Insufficient balance",
    });
    return;
  }
  const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
  getPreviousWithdrawAmount.innerText = totalWithdrawAmount;

  const newTotalBalance = previousTotalAmount - newWithdrawAmount;
  getPreviousTotalAmount.innerText = newTotalBalance;
});
