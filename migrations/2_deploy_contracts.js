const SimpleStorage = artifacts.require("SimpleStorage");
const DevocoinToken = artifacts.require("DevocoinToken");
const ComplexStorage = artifacts.require("ComplexStorage");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(DevocoinToken);
  deployer.deploy(ComplexStorage);
};
