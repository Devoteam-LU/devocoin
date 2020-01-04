pragma solidity >=0.4.21 <0.7.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract DevocoinToken is ERC20 {
    string public name = "DevocoinToken";
    string public symbol = "Ð";
    uint public decimals = 2;
    uint public INITIAL_SUPPLY = 12000;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
