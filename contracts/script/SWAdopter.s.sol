// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {Script, console2} from "forge-std/Script.sol";
import "../src/SWAdopter.sol";

contract SWAdopterScript is Script {
    function setUp() public {}

    function run() public {
        uint256 privateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(privateKey);
        address owner = vm.envAddress("OWNER");
        SWAdopter nft = new SWAdopter(owner);
        vm.stopBroadcast();
        console2.log("SWAdopter address: ", address(nft));
    }
}
