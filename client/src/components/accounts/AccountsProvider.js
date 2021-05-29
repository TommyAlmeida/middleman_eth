import React, { useState, useEffect } from "react";
import getWeb3 from "../../getWeb3";
import AccountsContext from "./AccountsContext";

const AccountsProvider = ({ children }) => {
  const [accounts, setAccounts] = useState();

  useEffect(() => {
    async function fetchBlockchainAccounts() {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();

      setAccounts(accounts);
    }

    fetchBlockchainAccounts();
  }, []);

  const fetchedAccounts = [].concat(accounts);

  return (
    <AccountsContext.Provider value={{ accounts: fetchedAccounts }}>
      {children}
    </AccountsContext.Provider>
  );
};

export default AccountsProvider;
