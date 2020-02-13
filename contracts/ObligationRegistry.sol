pragma solidity >=0.4.21 <0.7.0;

import "./Obligation.sol";

contract ObligationRegistry {
    mapping(address => Obligation[]) public obligationsByBeneficiary;

    function createObligation(uint256 _reward, address payable _beneficiary)
        public
        returns (address)
    {
        Obligation obligation = new Obligation(_reward, _beneficiary);
        address deployedAddress = address(obligation);
        obligationsByBeneficiary[_beneficiary].push(obligation);

        return deployedAddress;
    }

    function getObligationsByBeneficiary(address _beneficiary)
        public
        view
        returns (Obligation[] memory)
    {
        return obligationsByBeneficiary[_beneficiary];

    }
}
