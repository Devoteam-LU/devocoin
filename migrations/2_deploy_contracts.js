const SimpleStorage = artifacts.require("SimpleStorage");
const DevocoinToken = artifacts.require("DevocoinToken");
const ComplexStorage = artifacts.require("ComplexStorage");
const Obligation = artifacts.require("Obligation");
const ObligationRegistry = artifacts.require("ObligationRegistry");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(DevocoinToken);
  deployer.deploy(ComplexStorage);
  deployer.deploy(Obligation, 1, '0x2b07023ec9a9eac6ddde1262d5e12c16f87ffc17');
  deployer.deploy(ObligationRegistry);
};
