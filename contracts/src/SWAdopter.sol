// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SWAdopter is ERC721, ERC721Pausable, Ownable {
    uint256 private _nextTokenId;

    // Mapping to track whether an address has already minted
    mapping(address => bool) private _hasMinted;

    constructor(
        address initialOwner
    ) ERC721("SWAdopter", "SW") Ownable(initialOwner) {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function safeMint(address to) public {
        //require(msg.sender.code.length > 0, "Smart Wallet Account is required to mint");
        //require(!_hasMinted[msg.sender], "Address has already minted");

        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _hasMinted[msg.sender] = true;
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721, ERC721Pausable) returns (address) {
        return super._update(to, tokenId, auth);
    }
}
