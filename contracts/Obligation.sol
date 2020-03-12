pragma solidity >=0.4.21 <0.7.0;

contract Obligation {
    address payable public beneficiary;
    uint256 public reward;

    bool public approved;
    bool public completed;
    bool public archived;

    // Events that will be emitted on changes.
    event ObligationCreated(string _message);
    event ObligationCompleted(string _message);
    event ObligationApproved(string _message);
    event ObligationRejected(string _message);
    event ObligationArchived(string _message);

    constructor(uint256 _reward, address payable _beneficiary) public {
        beneficiary = _beneficiary;
        reward = _reward;
        emit ObligationCreated("Obligation created");
    }

    function archive() public {
        require(!approved, "This obligation has already been approved.");
        require(
            !completed,
            "This obligation has already been marked as complete."
        );

        archived = true;

        emit ObligationApproved("The obligation has been approved.");
    }

    function complete() public {
        require(!approved, "This obligation has already been approved.");
        require(
            !completed,
            "This obligation has already been marked as complete."
        );

        completed = true;

        emit ObligationCompleted(
            "The obligation has been submited for approval."
        );

    }

    function approve() public payable {
        require(!approved, "This obligation has already been approved.");
        require(
            completed,
            "This obligation needs to be marked as complete before it can be approved."
        );

        approved = true;

        emit ObligationApproved("The obligation has been approved!");
        beneficiary.transfer(address(this).balance);
    }

    function reject() public {
        require(!approved, "This obligation has already been approved.");
        require(
            completed,
            "This obligation needs to be marked as complete before it can be rejected."
        );

        completed = false;
        approved = false;

        emit ObligationRejected("The obligation has been rejected!");
    }

}
