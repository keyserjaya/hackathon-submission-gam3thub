import { ethers } from 'ethers';    

// Smart contract details
const CONTRACT_ADDRESS = '0x3eB818638c8b0D5eBAcA1Fdd5CB7Ab637C67745a';
const CONTRACT_ABI = [
  // Replace with your contract's ABI
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "TokensClaimed",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "claimTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "claimableTokens",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "recipients",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }
        ],
        "name": "setClaimableTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "withdrawUnclaimedTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Function to get the contract instance
export const getContract = async (theSigner) => {
  // Ensure the user has a provider (e.g., MetaMask)

  const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_JSON_RPC_PROVIDER);
  const signer = theSigner ?? new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider);
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

  /*
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.JsonRpcProvider(window.ethereum);
    const signer = provider.getSigner(); // Get the user's wallet address
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  } else {
    throw new Error('No Ethereum provider found');
  }
  */
};

// Example function to call the smart contract
export const ClaimAirdrop = async (theSigner) => {
    try {
      const contract = await getContract(theSigner);
      const response = await contract.claimTokens();
      console.log('Response:', response);
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

// Example function to call the smart contract
export const SendAirdrop = async (wallets, amounts) => {
  try {
    const contract = await getContract(null);
    const response = await contract.setClaimableTokens(wallets, amounts);
    console.log('Response:', response);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const GetClaimableTokens = async (walletAddress) => 
{
    try {
        const contract = await getContract(null);
        const response = await contract.claimableTokens(walletAddress); // Replace `myFunction` with your method name
        console.log('Response:', response);
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
