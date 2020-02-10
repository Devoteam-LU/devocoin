pragma solidity >=0.4.21 <0.7.0;

import "./Obligation.sol";

contract ObligationRegistry {
    mapping(address => address) public userContracts;

    function newInstanceFunc(
        address _address,
        uint256 _reward,
        address payable _beneficiary
    ) public returns (address) {
        Obligation T = new Obligation(_reward, _beneficiary);
        address deployedAddress = address(T);
        userContracts[_address] = deployedAddress;
        return deployedAddress;
    }
}
