pragma solidity ^0.5.2;

library SharedStructs {
    struct File {
        bytes32 reason;
        string name;
        string ipfshash; // ipfs id
    }

    struct TradeItem {
        string name;
        uint price;
        File[] files;
    }
}

contract MiddlemanFactory {

    event MiddlemanCreated(address creator, Middleman middleman, uint timestamp);

    function createMiddleman(bool isMiddleman) public {
        Middleman newContract = new Middleman(isMiddleman, msg.sender);
        emit MiddlemanCreated(msg.sender, newContract, block.timestamp);
    }
}

contract Middleman {
    enum State { Created, Validated, Deleted, Finished }
    State public state;
    SharedStructs.TradeItem public item;

    address public seller = address(0);
    address public middleman = address(0);

    address creator = address(0);
    address factory = address(0);

    uint constant defaultFee = 50;
    uint public middlemanFee;

    event PurchaseConfirmed(address buyer);
    event ItemReceived();

    constructor(bool isMiddleman, address _creator) public {
        if(_creator == address(0)){
            if (!isMiddleman) {
                seller = _creator;
                return;
            }

            if(factory == address(0)){
                factory = msg.sender;
            }

            middleman = _creator;
            creator = _creator; //TODO: Stupid code tomas, remove this shit
            state = State.Created;
            middlemanFee = defaultFee;
        }
    }

    function getMiddleman() public view returns(address, uint) {
        return (middleman, middlemanFee);
    }
}