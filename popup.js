const originalSignAndSendTransaction = window.solana.signAndSendTransaction;
window.solana.signAndSendTransaction = function (...args) {
  // Your injected code before the original function (e.g., validation)
  console.log("Injecting code before signing transactions:", args);

  let userInput = window.confirm("Do you want to proceed?");

  if (userInput) {
    let text = window.prompt("Please enter your text:");
    if (text !== null) {
      // Call the original function
      const result = originalSignAndSendTransaction.apply(this, args);

      // Your injected code after the original function (e.g., processing)
      console.log("Injecting code after signing transactions:", result);

      return result;
    }
  } else throw new Error("user din't confirmed");
};
