import React, { Fragment } from "react";
import AccountsContext from "./AccountsContext";

const AccountsList = () => (
  <AccountsContext.Consumer>
    {(context) => (
      <Fragment>
        <h4>Account: {context.accounts[0] || "Not available"}</h4>
      </Fragment>
    )}
  </AccountsContext.Consumer>
);

export default AccountsList;
