import React, { Component }from 'react';
import web3Service from 'utils/blockchain-service'

class TransactionList extends Component {
 
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            value: '',
            transactions: [],
        };
    }

    getAllTransactionsByAddress(address: string): Array<String> {
        let transac = web3Service.eth.getBlockNumber().then(function (currentBlock) {
            for (var i = currentBlock; i >= 0; --i) {
                web3Service.eth.getBlock(currentBlock, true).then(function (block) {
                    block.transactions.forEach(function (e) {
                        if (address == e.from) {
                            if (e.from != e.to) {
                                this.setState( state => {
                                    const transactions = [...state.transactions, state.value];
                                    return {
                                        transactions,
                                        value: '',
                                    };
                                });
                               
                            }
                        }
                        if (address == e.to) {
                            if (e.from != e.to)
                                this.setState({ data: e.hash });
                        }
                    });
                });
            }
        })
        return ["T"];
    }


    render() {
        return
        <div>
            Bonjour {this.state.value}
        </div>;
    }
}