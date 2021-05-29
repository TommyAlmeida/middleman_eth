import React from "react";

import "./App.css";
import AccountsContainer from "./components/accounts/AccountsList";
import AccountsProvider from "./components/accounts/AccountsProvider";

const App = () => {
  return (
    <AccountsProvider>
      <div className="App">
        <AccountsContainer />
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: 0</div>
      </div>
    </AccountsProvider>
  );
};

export default App;
