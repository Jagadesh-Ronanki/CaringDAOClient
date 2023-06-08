import { erc20ABI } from 'wagmi'
import { 
  constants,
  variables, 
  postRegistry, 
  userRegistry, 
  timelock, 
  priceConversion,
  handler, 
  governor, 
  governanceToken
} from './Addresses.tsx'

export const wagmiContractConfig = {
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          name: 'approved',
          type: 'address',
        },
        {
          indexed: true,
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          name: 'operator',
          type: 'address',
        },
        {
          indexed: false,
          name: 'approved',
          type: 'bool',
        },
      ],
      name: 'ApprovalForAll',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'from',
          type: 'address',
        },
        { indexed: true, name: 'to', type: 'address' },
        {
          indexed: true,
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [
        { name: 'to', type: 'address' },
        { name: 'tokenId', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ name: 'owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ name: 'tokenId', type: 'uint256' }],
      name: 'getApproved',
      outputs: [{ name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { name: 'owner', type: 'address' },
        { name: 'operator', type: 'address' },
      ],
      name: 'isApprovedForAll',
      outputs: [{ name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ name: 'tokenId', type: 'uint256' }],
      name: 'ownerOf',
      outputs: [{ name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { name: 'from', type: 'address' },
        { name: 'to', type: 'address' },
        { name: 'tokenId', type: 'uint256' },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { name: 'from', type: 'address' },
        { name: 'to', type: 'address' },
        { name: 'tokenId', type: 'uint256' },
        { name: '_data', type: 'bytes' },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { name: 'operator', type: 'address' },
        { name: 'approved', type: 'bool' },
      ],
      name: 'setApprovalForAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ name: 'interfaceId', type: 'bytes4' }],
      name: 'supportsInterface',
      outputs: [{ name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [{ name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ name: 'tokenId', type: 'uint256' }],
      name: 'tokenURI',
      outputs: [{ name: '', type: 'string' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [{ name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { name: 'from', type: 'address' },
        { name: 'to', type: 'address' },
        { name: 'tokenId', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
} as const

export const usdcContractConfig = {
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  abi: erc20ABI,
} as const

export const Constants = {
  address: constants,
  // address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  abi: [
    {
      'inputs': [],
      'name': 'MIN_DELAY',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'QUORUM_PERCENTAGE',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'VOTING_DELAY',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'VOTING_PERIOD',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'getGovernanceToken',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'getGovernor',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'getHandler',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'getPostRegistry',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'getPriceConversion',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'getTimeLock',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'getUserRegistry',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'getVariables',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'governorAddr',
      'outputs': [
        {
          'internalType': 'address payable',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'handlerAddr',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'postRegistryAddr',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'priceConversionAddr',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_addr',
          'type': 'address'
        }
      ],
      'name': 'setGovernanceToken',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address payable',
          'name': '_addr',
          'type': 'address'
        }
      ],
      'name': 'setGovernor',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_addr',
          'type': 'address'
        }
      ],
      'name': 'setHandler',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_addr',
          'type': 'address'
        }
      ],
      'name': 'setPostRegistry',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_addr',
          'type': 'address'
        }
      ],
      'name': 'setPriceConversion',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address payable',
          'name': '_addr',
          'type': 'address'
        }
      ],
      'name': 'setTimeLock',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_addr',
          'type': 'address'
        }
      ],
      'name': 'setUserRegistry',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_addr',
          'type': 'address'
        }
      ],
      'name': 'setVariables',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'timeLockAddr',
      'outputs': [
        {
          'internalType': 'address payable',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'tokenAddr',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'userRegistryAddr',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'variablesAddr',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    }
  ],
} as const

export const Variables = {
  address: variables,
  // address: '0xDC74b53062Dd604Fc935409c9D759bec66d3e2E2',
  abi: [
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'previousOwner',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'newOwner',
          'type': 'address'
        }
      ],
      'name': 'OwnershipTransferred',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': '_threshold',
          'type': 'uint256'
        }
      ],
      'name': 'updatedBaseThreshold',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'value',
          'type': 'uint256'
        }
      ],
      'name': 'updatedLevelToGovern',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': '_percentage',
          'type': 'uint256'
        }
      ],
      'name': 'updatedPerWithdrawal',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': '_percentage',
          'type': 'uint256'
        }
      ],
      'name': 'updatedVariables',
      'type': 'event'
    },
    {
      'inputs': [],
      'name': 'owner',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'renounceOwnership',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'retriveBaseThreshold',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'retriveLevelToGovern',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'retrivePerWithdrawal',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_threshold',
          'type': 'uint256'
        }
      ],
      'name': 'storeBaseThreshold',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_level',
          'type': 'uint256'
        }
      ],
      'name': 'storeLevelToGovern',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_percentage',
          'type': 'uint256'
        }
      ],
      'name': 'storePerWithdrawal',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'newOwner',
          'type': 'address'
        }
      ],
      'name': 'transferOwnership',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    }
  ],
} as const

export const PostRegistry = {
  address: postRegistry,
  // address: '0x3646A4BB0601cB0DFebc41AfD24301AF1569E800',
  abi: [
    {
      'inputs': [],
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'uint256',
          'name': 'postId',
          'type': 'uint256'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'creator',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'string',
          'name': 'content',
          'type': 'string'
        }
      ],
      'name': 'PostCreated',
      'type': 'event'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'postId',
          'type': 'uint256'
        }
      ],
      'name': 'appreciate',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'payable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'string',
          'name': 'content',
          'type': 'string'
        }
      ],
      'name': 'createPost',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'postId',
          'type': 'uint256'
        }
      ],
      'name': 'getPost',
      'outputs': [
        {
          'components': [
            {
              'internalType': 'uint256',
              'name': 'id',
              'type': 'uint256'
            },
            {
              'internalType': 'address',
              'name': 'creator',
              'type': 'address'
            },
            {
              'internalType': 'string',
              'name': 'content',
              'type': 'string'
            },
            {
              'internalType': 'uint256',
              'name': 'timestamp',
              'type': 'uint256'
            },
            {
              'internalType': 'uint256',
              'name': 'appreciationsCnt',
              'type': 'uint256'
            }
          ],
          'internalType': 'struct PostRegistry.Post',
          'name': '',
          'type': 'tuple'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'handler',
      'outputs': [
        {
          'internalType': 'contract IHandler',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'postCount',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'name': 'posts',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': 'id',
          'type': 'uint256'
        },
        {
          'internalType': 'address',
          'name': 'creator',
          'type': 'address'
        },
        {
          'internalType': 'string',
          'name': 'content',
          'type': 'string'
        },
        {
          'internalType': 'uint256',
          'name': 'timestamp',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': 'appreciationsCnt',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_handlerAddr',
          'type': 'address'
        }
      ],
      'name': 'setHandler',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_userRegistryAddr',
          'type': 'address'
        }
      ],
      'name': 'setUserRegistry',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'userRegistry',
      'outputs': [
        {
          'internalType': 'contract IUserRegistry',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    }
  ],
} as const

export const UserRegistry = {
  address: userRegistry,
  // address: '0xac20120973123f857F94Fb0B4C91f3C0b8E5EFA0',
  abi: [
    {
      'inputs': [],
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'id',
          'type': 'address'
        }
      ],
      'name': 'UserRegistered',
      'type': 'event'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'userAddr',
          'type': 'address'
        }
      ],
      'name': 'addContributionBal',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'payable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'user',
          'type': 'address'
        }
      ],
      'name': 'getUserDetails',
      'outputs': [
        {
          'components': [
            {
              'internalType': 'string',
              'name': 'name',
              'type': 'string'
            },
            {
              'internalType': 'string',
              'name': 'profileCID',
              'type': 'string'
            },
            {
              'internalType': 'uint256',
              'name': 'level',
              'type': 'uint256'
            },
            {
              'internalType': 'bool',
              'name': 'registered',
              'type': 'bool'
            },
            {
              'internalType': 'uint256',
              'name': 'appreciationBalance',
              'type': 'uint256'
            },
            {
              'internalType': 'uint256',
              'name': 'contributionBalance',
              'type': 'uint256'
            },
            {
              'internalType': 'uint256',
              'name': 'appreciationsTaken',
              'type': 'uint256'
            },
            {
              'internalType': 'uint256',
              'name': 'appreciationsGiven',
              'type': 'uint256'
            },
            {
              'internalType': 'uint256',
              'name': 'takenAmt',
              'type': 'uint256'
            },
            {
              'internalType': 'uint256',
              'name': 'givenAmt',
              'type': 'uint256'
            },
            {
              'internalType': 'uint256',
              'name': 'tokenId',
              'type': 'uint256'
            },
            {
              'internalType': 'bool',
              'name': 'tokenHolder',
              'type': 'bool'
            }
          ],
          'internalType': 'struct UserRegistry.User',
          'name': '',
          'type': 'tuple'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_user',
          'type': 'address'
        }
      ],
      'name': 'isRegistered',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'string',
          'name': 'name',
          'type': 'string'
        },
        {
          'internalType': 'string',
          'name': 'profileCID',
          'type': 'string'
        }
      ],
      'name': 'registerUser',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_tokenAddr',
          'type': 'address'
        }
      ],
      'name': 'setGovernanceToken',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_handler',
          'type': 'address'
        }
      ],
      'name': 'setHandler',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_user',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'setTokenId',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'appreciator',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'amt',
          'type': 'uint256'
        }
      ],
      'name': 'updateAppreciator',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'creator',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'amt',
          'type': 'uint256'
        }
      ],
      'name': 'updateCreator',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'users',
      'outputs': [
        {
          'internalType': 'string',
          'name': 'name',
          'type': 'string'
        },
        {
          'internalType': 'string',
          'name': 'profileCID',
          'type': 'string'
        },
        {
          'internalType': 'uint256',
          'name': 'level',
          'type': 'uint256'
        },
        {
          'internalType': 'bool',
          'name': 'registered',
          'type': 'bool'
        },
        {
          'internalType': 'uint256',
          'name': 'appreciationBalance',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': 'contributionBalance',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': 'appreciationsTaken',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': 'appreciationsGiven',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': 'takenAmt',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': 'givenAmt',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        },
        {
          'internalType': 'bool',
          'name': 'tokenHolder',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'creator',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'fee',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': 'withdrawalThresholdInEth',
          'type': 'uint256'
        }
      ],
      'name': 'withdraw',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    }
  ],
} as const

export const Timelock = {
  address: timelock,
  // address: '0x6e7B28a0FB022294ecd94ed7e5D36D13f3b2f6cE',
  abi: [
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'minDelay',
          'type': 'uint256'
        },
        {
          'internalType': 'address[]',
          'name': 'proposers',
          'type': 'address[]'
        },
        {
          'internalType': 'address[]',
          'name': 'executors',
          'type': 'address[]'
        },
        {
          'internalType': 'address',
          'name': 'admin',
          'type': 'address'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'id',
          'type': 'bytes32'
        },
        {
          'indexed': true,
          'internalType': 'uint256',
          'name': 'index',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'address',
          'name': 'target',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'value',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'bytes',
          'name': 'data',
          'type': 'bytes'
        }
      ],
      'name': 'CallExecuted',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'id',
          'type': 'bytes32'
        },
        {
          'indexed': false,
          'internalType': 'bytes32',
          'name': 'salt',
          'type': 'bytes32'
        }
      ],
      'name': 'CallSalt',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'id',
          'type': 'bytes32'
        },
        {
          'indexed': true,
          'internalType': 'uint256',
          'name': 'index',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'address',
          'name': 'target',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'value',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'bytes',
          'name': 'data',
          'type': 'bytes'
        },
        {
          'indexed': false,
          'internalType': 'bytes32',
          'name': 'predecessor',
          'type': 'bytes32'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'delay',
          'type': 'uint256'
        }
      ],
      'name': 'CallScheduled',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'id',
          'type': 'bytes32'
        }
      ],
      'name': 'Cancelled',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'oldDuration',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'newDuration',
          'type': 'uint256'
        }
      ],
      'name': 'MinDelayChange',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'previousAdminRole',
          'type': 'bytes32'
        },
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'newAdminRole',
          'type': 'bytes32'
        }
      ],
      'name': 'RoleAdminChanged',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'sender',
          'type': 'address'
        }
      ],
      'name': 'RoleGranted',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'sender',
          'type': 'address'
        }
      ],
      'name': 'RoleRevoked',
      'type': 'event'
    },
    {
      'inputs': [],
      'name': 'CANCELLER_ROLE',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'DEFAULT_ADMIN_ROLE',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'EXECUTOR_ROLE',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'PROPOSER_ROLE',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'TIMELOCK_ADMIN_ROLE',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'id',
          'type': 'bytes32'
        }
      ],
      'name': 'cancel',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'target',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'value',
          'type': 'uint256'
        },
        {
          'internalType': 'bytes',
          'name': 'payload',
          'type': 'bytes'
        },
        {
          'internalType': 'bytes32',
          'name': 'predecessor',
          'type': 'bytes32'
        },
        {
          'internalType': 'bytes32',
          'name': 'salt',
          'type': 'bytes32'
        }
      ],
      'name': 'execute',
      'outputs': [],
      'stateMutability': 'payable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address[]',
          'name': 'targets',
          'type': 'address[]'
        },
        {
          'internalType': 'uint256[]',
          'name': 'values',
          'type': 'uint256[]'
        },
        {
          'internalType': 'bytes[]',
          'name': 'payloads',
          'type': 'bytes[]'
        },
        {
          'internalType': 'bytes32',
          'name': 'predecessor',
          'type': 'bytes32'
        },
        {
          'internalType': 'bytes32',
          'name': 'salt',
          'type': 'bytes32'
        }
      ],
      'name': 'executeBatch',
      'outputs': [],
      'stateMutability': 'payable',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'getMinDelay',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        }
      ],
      'name': 'getRoleAdmin',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'id',
          'type': 'bytes32'
        }
      ],
      'name': 'getTimestamp',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        }
      ],
      'name': 'grantRole',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        }
      ],
      'name': 'hasRole',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'target',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'value',
          'type': 'uint256'
        },
        {
          'internalType': 'bytes',
          'name': 'data',
          'type': 'bytes'
        },
        {
          'internalType': 'bytes32',
          'name': 'predecessor',
          'type': 'bytes32'
        },
        {
          'internalType': 'bytes32',
          'name': 'salt',
          'type': 'bytes32'
        }
      ],
      'name': 'hashOperation',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'pure',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address[]',
          'name': 'targets',
          'type': 'address[]'
        },
        {
          'internalType': 'uint256[]',
          'name': 'values',
          'type': 'uint256[]'
        },
        {
          'internalType': 'bytes[]',
          'name': 'payloads',
          'type': 'bytes[]'
        },
        {
          'internalType': 'bytes32',
          'name': 'predecessor',
          'type': 'bytes32'
        },
        {
          'internalType': 'bytes32',
          'name': 'salt',
          'type': 'bytes32'
        }
      ],
      'name': 'hashOperationBatch',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'pure',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'id',
          'type': 'bytes32'
        }
      ],
      'name': 'isOperation',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'id',
          'type': 'bytes32'
        }
      ],
      'name': 'isOperationDone',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'id',
          'type': 'bytes32'
        }
      ],
      'name': 'isOperationPending',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'id',
          'type': 'bytes32'
        }
      ],
      'name': 'isOperationReady',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'uint256[]',
          'name': '',
          'type': 'uint256[]'
        },
        {
          'internalType': 'uint256[]',
          'name': '',
          'type': 'uint256[]'
        },
        {
          'internalType': 'bytes',
          'name': '',
          'type': 'bytes'
        }
      ],
      'name': 'onERC1155BatchReceived',
      'outputs': [
        {
          'internalType': 'bytes4',
          'name': '',
          'type': 'bytes4'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        },
        {
          'internalType': 'bytes',
          'name': '',
          'type': 'bytes'
        }
      ],
      'name': 'onERC1155Received',
      'outputs': [
        {
          'internalType': 'bytes4',
          'name': '',
          'type': 'bytes4'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        },
        {
          'internalType': 'bytes',
          'name': '',
          'type': 'bytes'
        }
      ],
      'name': 'onERC721Received',
      'outputs': [
        {
          'internalType': 'bytes4',
          'name': '',
          'type': 'bytes4'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        }
      ],
      'name': 'renounceRole',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        }
      ],
      'name': 'revokeRole',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'target',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'value',
          'type': 'uint256'
        },
        {
          'internalType': 'bytes',
          'name': 'data',
          'type': 'bytes'
        },
        {
          'internalType': 'bytes32',
          'name': 'predecessor',
          'type': 'bytes32'
        },
        {
          'internalType': 'bytes32',
          'name': 'salt',
          'type': 'bytes32'
        },
        {
          'internalType': 'uint256',
          'name': 'delay',
          'type': 'uint256'
        }
      ],
      'name': 'schedule',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address[]',
          'name': 'targets',
          'type': 'address[]'
        },
        {
          'internalType': 'uint256[]',
          'name': 'values',
          'type': 'uint256[]'
        },
        {
          'internalType': 'bytes[]',
          'name': 'payloads',
          'type': 'bytes[]'
        },
        {
          'internalType': 'bytes32',
          'name': 'predecessor',
          'type': 'bytes32'
        },
        {
          'internalType': 'bytes32',
          'name': 'salt',
          'type': 'bytes32'
        },
        {
          'internalType': 'uint256',
          'name': 'delay',
          'type': 'uint256'
        }
      ],
      'name': 'scheduleBatch',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes4',
          'name': 'interfaceId',
          'type': 'bytes4'
        }
      ],
      'name': 'supportsInterface',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'newDelay',
          'type': 'uint256'
        }
      ],
      'name': 'updateDelay',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'stateMutability': 'payable',
      'type': 'receive'
    }
  ],
} as const

export const PriceConversion = {
  address: priceConversion,
  // address: '0xfDD84B8f447511006DaC2BDfe57FA0566C49b6cc',
  abi: [
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_pricefeed',
          'type': 'address'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': '_amountInUsd',
          'type': 'uint256'
        }
      ],
      'name': 'UsdtoEth',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'getLatestPrice',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        },
        {
          'internalType': 'uint8',
          'name': '',
          'type': 'uint8'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    }
  ],
} as const

export const Handler = {
  address: handler,
  // address: '0xa49A557Dc6505D979e4C39A99c8d90D41f690De2',
  abi: [
    {
      'inputs': [],
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'sender',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256'
        }
      ],
      'name': 'AddedFunds',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'previousOwner',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'newOwner',
          'type': 'address'
        }
      ],
      'name': 'OwnershipTransferred',
      'type': 'event'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'level',
          'type': 'uint256'
        }
      ],
      'name': 'calculateWithdrawalThreshold',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'getBaseThreshold',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'owner',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'creator',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': 'appreciator',
          'type': 'address'
        }
      ],
      'name': 'receiveAmount',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'payable',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'renounceOwnership',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_priceConversionAddr',
          'type': 'address'
        }
      ],
      'name': 'setPriceConversion',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_userRegistryAddr',
          'type': 'address'
        }
      ],
      'name': 'setUserRegistry',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_variables',
          'type': 'address'
        }
      ],
      'name': 'setVariables',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'newOwner',
          'type': 'address'
        }
      ],
      'name': 'transferOwnership',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'creator',
          'type': 'address'
        }
      ],
      'name': 'withdraw',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'payable',
      'type': 'function'
    },
    {
      'stateMutability': 'payable',
      'type': 'receive'
    }
  ],
} as const

export const Governor = {
  address: governor,
  // address: '0x8C22c5330Bc8F2ba0324FC8b7383E1eA21a015AC',
  abi: [
    {
      'inputs': [
        {
          'internalType': 'contract IVotes',
          'name': '_token',
          'type': 'address'
        },
        {
          'internalType': 'contract TimelockController',
          'name': '_timelock',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': '_quorumPercentage',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': '_votingPeriod',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': '_votingDelay',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'inputs': [],
      'name': 'Empty',
      'type': 'error'
    },
    {
      'inputs': [],
      'name': 'InvalidShortString',
      'type': 'error'
    },
    {
      'inputs': [
        {
          'internalType': 'string',
          'name': 'str',
          'type': 'string'
        }
      ],
      'name': 'StringTooLong',
      'type': 'error'
    },
    {
      'anonymous': false,
      'inputs': [],
      'name': 'EIP712DomainChanged',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        }
      ],
      'name': 'ProposalCanceled',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'address',
          'name': 'proposer',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'address[]',
          'name': 'targets',
          'type': 'address[]'
        },
        {
          'indexed': false,
          'internalType': 'uint256[]',
          'name': 'values',
          'type': 'uint256[]'
        },
        {
          'indexed': false,
          'internalType': 'string[]',
          'name': 'signatures',
          'type': 'string[]'
        },
        {
          'indexed': false,
          'internalType': 'bytes[]',
          'name': 'calldatas',
          'type': 'bytes[]'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'voteStart',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'voteEnd',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'string',
          'name': 'description',
          'type': 'string'
        }
      ],
      'name': 'ProposalCreated',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        }
      ],
      'name': 'ProposalExecuted',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'eta',
          'type': 'uint256'
        }
      ],
      'name': 'ProposalQueued',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'oldProposalThreshold',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'newProposalThreshold',
          'type': 'uint256'
        }
      ],
      'name': 'ProposalThresholdSet',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'oldQuorumNumerator',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'newQuorumNumerator',
          'type': 'uint256'
        }
      ],
      'name': 'QuorumNumeratorUpdated',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'address',
          'name': 'oldTimelock',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'address',
          'name': 'newTimelock',
          'type': 'address'
        }
      ],
      'name': 'TimelockChange',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'voter',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint8',
          'name': 'support',
          'type': 'uint8'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'weight',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'string',
          'name': 'reason',
          'type': 'string'
        }
      ],
      'name': 'VoteCast',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'voter',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint8',
          'name': 'support',
          'type': 'uint8'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'weight',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'string',
          'name': 'reason',
          'type': 'string'
        },
        {
          'indexed': false,
          'internalType': 'bytes',
          'name': 'params',
          'type': 'bytes'
        }
      ],
      'name': 'VoteCastWithParams',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'oldVotingDelay',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'newVotingDelay',
          'type': 'uint256'
        }
      ],
      'name': 'VotingDelaySet',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'oldVotingPeriod',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'newVotingPeriod',
          'type': 'uint256'
        }
      ],
      'name': 'VotingPeriodSet',
      'type': 'event'
    },
    {
      'inputs': [],
      'name': 'BALLOT_TYPEHASH',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'CLOCK_MODE',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'COUNTING_MODE',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'stateMutability': 'pure',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'EXTENDED_BALLOT_TYPEHASH',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address[]',
          'name': 'targets',
          'type': 'address[]'
        },
        {
          'internalType': 'uint256[]',
          'name': 'values',
          'type': 'uint256[]'
        },
        {
          'internalType': 'bytes[]',
          'name': 'calldatas',
          'type': 'bytes[]'
        },
        {
          'internalType': 'bytes32',
          'name': 'descriptionHash',
          'type': 'bytes32'
        }
      ],
      'name': 'cancel',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        },
        {
          'internalType': 'uint8',
          'name': 'support',
          'type': 'uint8'
        }
      ],
      'name': 'castVote',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        },
        {
          'internalType': 'uint8',
          'name': 'support',
          'type': 'uint8'
        },
        {
          'internalType': 'uint8',
          'name': 'v',
          'type': 'uint8'
        },
        {
          'internalType': 'bytes32',
          'name': 'r',
          'type': 'bytes32'
        },
        {
          'internalType': 'bytes32',
          'name': 's',
          'type': 'bytes32'
        }
      ],
      'name': 'castVoteBySig',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        },
        {
          'internalType': 'uint8',
          'name': 'support',
          'type': 'uint8'
        },
        {
          'internalType': 'string',
          'name': 'reason',
          'type': 'string'
        }
      ],
      'name': 'castVoteWithReason',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        },
        {
          'internalType': 'uint8',
          'name': 'support',
          'type': 'uint8'
        },
        {
          'internalType': 'string',
          'name': 'reason',
          'type': 'string'
        },
        {
          'internalType': 'bytes',
          'name': 'params',
          'type': 'bytes'
        }
      ],
      'name': 'castVoteWithReasonAndParams',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        },
        {
          'internalType': 'uint8',
          'name': 'support',
          'type': 'uint8'
        },
        {
          'internalType': 'string',
          'name': 'reason',
          'type': 'string'
        },
        {
          'internalType': 'bytes',
          'name': 'params',
          'type': 'bytes'
        },
        {
          'internalType': 'uint8',
          'name': 'v',
          'type': 'uint8'
        },
        {
          'internalType': 'bytes32',
          'name': 'r',
          'type': 'bytes32'
        },
        {
          'internalType': 'bytes32',
          'name': 's',
          'type': 'bytes32'
        }
      ],
      'name': 'castVoteWithReasonAndParamsBySig',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'clock',
      'outputs': [
        {
          'internalType': 'uint48',
          'name': '',
          'type': 'uint48'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'eip712Domain',
      'outputs': [
        {
          'internalType': 'bytes1',
          'name': 'fields',
          'type': 'bytes1'
        },
        {
          'internalType': 'string',
          'name': 'name',
          'type': 'string'
        },
        {
          'internalType': 'string',
          'name': 'version',
          'type': 'string'
        },
        {
          'internalType': 'uint256',
          'name': 'chainId',
          'type': 'uint256'
        },
        {
          'internalType': 'address',
          'name': 'verifyingContract',
          'type': 'address'
        },
        {
          'internalType': 'bytes32',
          'name': 'salt',
          'type': 'bytes32'
        },
        {
          'internalType': 'uint256[]',
          'name': 'extensions',
          'type': 'uint256[]'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address[]',
          'name': 'targets',
          'type': 'address[]'
        },
        {
          'internalType': 'uint256[]',
          'name': 'values',
          'type': 'uint256[]'
        },
        {
          'internalType': 'bytes[]',
          'name': 'calldatas',
          'type': 'bytes[]'
        },
        {
          'internalType': 'bytes32',
          'name': 'descriptionHash',
          'type': 'bytes32'
        }
      ],
      'name': 'execute',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'payable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        }
      ],
      'name': 'getProposalDetails',
      'outputs': [
        {
          'internalType': 'address[]',
          'name': '',
          'type': 'address[]'
        },
        {
          'internalType': 'uint256[]',
          'name': '',
          'type': 'uint256[]'
        },
        {
          'internalType': 'bytes[]',
          'name': '',
          'type': 'bytes[]'
        },
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'getProposalIds',
      'outputs': [
        {
          'internalType': 'uint256[]',
          'name': '',
          'type': 'uint256[]'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'timepoint',
          'type': 'uint256'
        }
      ],
      'name': 'getVotes',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'timepoint',
          'type': 'uint256'
        },
        {
          'internalType': 'bytes',
          'name': 'params',
          'type': 'bytes'
        }
      ],
      'name': 'getVotesWithParams',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        },
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        }
      ],
      'name': 'hasVoted',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address[]',
          'name': 'targets',
          'type': 'address[]'
        },
        {
          'internalType': 'uint256[]',
          'name': 'values',
          'type': 'uint256[]'
        },
        {
          'internalType': 'bytes[]',
          'name': 'calldatas',
          'type': 'bytes[]'
        },
        {
          'internalType': 'bytes32',
          'name': 'descriptionHash',
          'type': 'bytes32'
        }
      ],
      'name': 'hashProposal',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'pure',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'name',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'uint256[]',
          'name': '',
          'type': 'uint256[]'
        },
        {
          'internalType': 'uint256[]',
          'name': '',
          'type': 'uint256[]'
        },
        {
          'internalType': 'bytes',
          'name': '',
          'type': 'bytes'
        }
      ],
      'name': 'onERC1155BatchReceived',
      'outputs': [
        {
          'internalType': 'bytes4',
          'name': '',
          'type': 'bytes4'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        },
        {
          'internalType': 'bytes',
          'name': '',
          'type': 'bytes'
        }
      ],
      'name': 'onERC1155Received',
      'outputs': [
        {
          'internalType': 'bytes4',
          'name': '',
          'type': 'bytes4'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        },
        {
          'internalType': 'bytes',
          'name': '',
          'type': 'bytes'
        }
      ],
      'name': 'onERC721Received',
      'outputs': [
        {
          'internalType': 'bytes4',
          'name': '',
          'type': 'bytes4'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        }
      ],
      'name': 'proposalDeadline',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        }
      ],
      'name': 'proposalEta',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        }
      ],
      'name': 'proposalProposer',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        }
      ],
      'name': 'proposalSnapshot',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'proposalThreshold',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        }
      ],
      'name': 'proposalVotes',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': 'againstVotes',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': 'forVotes',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': 'abstainVotes',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address[]',
          'name': 'targets',
          'type': 'address[]'
        },
        {
          'internalType': 'uint256[]',
          'name': 'values',
          'type': 'uint256[]'
        },
        {
          'internalType': 'bytes[]',
          'name': 'calldatas',
          'type': 'bytes[]'
        },
        {
          'internalType': 'string',
          'name': 'description',
          'type': 'string'
        }
      ],
      'name': 'propose',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address[]',
          'name': 'targets',
          'type': 'address[]'
        },
        {
          'internalType': 'uint256[]',
          'name': 'values',
          'type': 'uint256[]'
        },
        {
          'internalType': 'bytes[]',
          'name': 'calldatas',
          'type': 'bytes[]'
        },
        {
          'internalType': 'bytes32',
          'name': 'descriptionHash',
          'type': 'bytes32'
        }
      ],
      'name': 'queue',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'blockNumber',
          'type': 'uint256'
        }
      ],
      'name': 'quorum',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'quorumDenominator',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'timepoint',
          'type': 'uint256'
        }
      ],
      'name': 'quorumNumerator',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'quorumNumerator',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'target',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'value',
          'type': 'uint256'
        },
        {
          'internalType': 'bytes',
          'name': 'data',
          'type': 'bytes'
        }
      ],
      'name': 'relay',
      'outputs': [],
      'stateMutability': 'payable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'newProposalThreshold',
          'type': 'uint256'
        }
      ],
      'name': 'setProposalThreshold',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'newVotingDelay',
          'type': 'uint256'
        }
      ],
      'name': 'setVotingDelay',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'newVotingPeriod',
          'type': 'uint256'
        }
      ],
      'name': 'setVotingPeriod',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'proposalId',
          'type': 'uint256'
        }
      ],
      'name': 'state',
      'outputs': [
        {
          'internalType': 'enum IGovernor.ProposalState',
          'name': '',
          'type': 'uint8'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes4',
          'name': 'interfaceId',
          'type': 'bytes4'
        }
      ],
      'name': 'supportsInterface',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'timelock',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'token',
      'outputs': [
        {
          'internalType': 'contract IERC5805',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'newQuorumNumerator',
          'type': 'uint256'
        }
      ],
      'name': 'updateQuorumNumerator',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'contract TimelockController',
          'name': 'newTimelock',
          'type': 'address'
        }
      ],
      'name': 'updateTimelock',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'version',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'votingDelay',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'votingPeriod',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'stateMutability': 'payable',
      'type': 'receive'
    }
  ],
} as const

export const GovernanceToken = {
  address: governanceToken,
  // address: '0xd5058cC6CcCF7Adb70De34696F097597087D5a18',
  abi: [
    {
      'inputs': [],
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'inputs': [],
      'name': 'InvalidShortString',
      'type': 'error'
    },
    {
      'inputs': [
        {
          'internalType': 'string',
          'name': 'str',
          'type': 'string'
        }
      ],
      'name': 'StringTooLong',
      'type': 'error'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'owner',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'approved',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'Approval',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'owner',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'operator',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'bool',
          'name': 'approved',
          'type': 'bool'
        }
      ],
      'name': 'ApprovalForAll',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': '_fromTokenId',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': '_toTokenId',
          'type': 'uint256'
        }
      ],
      'name': 'BatchMetadataUpdate',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'delegator',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'fromDelegate',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'toDelegate',
          'type': 'address'
        }
      ],
      'name': 'DelegateChanged',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'delegate',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'previousBalance',
          'type': 'uint256'
        },
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'newBalance',
          'type': 'uint256'
        }
      ],
      'name': 'DelegateVotesChanged',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [],
      'name': 'EIP712DomainChanged',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'internalType': 'uint256',
          'name': '_tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'MetadataUpdate',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'previousOwner',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'newOwner',
          'type': 'address'
        }
      ],
      'name': 'OwnershipTransferred',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'from',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'to',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'Transfer',
      'type': 'event'
    },
    {
      'inputs': [],
      'name': 'CLOCK_MODE',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'DOMAIN_SEPARATOR',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'to',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'approve',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'owner',
          'type': 'address'
        }
      ],
      'name': 'balanceOf',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'clock',
      'outputs': [
        {
          'internalType': 'uint48',
          'name': '',
          'type': 'uint48'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'delegatee',
          'type': 'address'
        }
      ],
      'name': 'delegate',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'delegatee',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'nonce',
          'type': 'uint256'
        },
        {
          'internalType': 'uint256',
          'name': 'expiry',
          'type': 'uint256'
        },
        {
          'internalType': 'uint8',
          'name': 'v',
          'type': 'uint8'
        },
        {
          'internalType': 'bytes32',
          'name': 'r',
          'type': 'bytes32'
        },
        {
          'internalType': 'bytes32',
          'name': 's',
          'type': 'bytes32'
        }
      ],
      'name': 'delegateBySig',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        }
      ],
      'name': 'delegates',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'eip712Domain',
      'outputs': [
        {
          'internalType': 'bytes1',
          'name': 'fields',
          'type': 'bytes1'
        },
        {
          'internalType': 'string',
          'name': 'name',
          'type': 'string'
        },
        {
          'internalType': 'string',
          'name': 'version',
          'type': 'string'
        },
        {
          'internalType': 'uint256',
          'name': 'chainId',
          'type': 'uint256'
        },
        {
          'internalType': 'address',
          'name': 'verifyingContract',
          'type': 'address'
        },
        {
          'internalType': 'bytes32',
          'name': 'salt',
          'type': 'bytes32'
        },
        {
          'internalType': 'uint256[]',
          'name': 'extensions',
          'type': 'uint256[]'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'getApproved',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'timepoint',
          'type': 'uint256'
        }
      ],
      'name': 'getPastTotalSupply',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'timepoint',
          'type': 'uint256'
        }
      ],
      'name': 'getPastVotes',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        }
      ],
      'name': 'getVotes',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'owner',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': 'operator',
          'type': 'address'
        }
      ],
      'name': 'isApprovedForAll',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'name',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'owner',
          'type': 'address'
        }
      ],
      'name': 'nonces',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'owner',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'ownerOf',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'renounceOwnership',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'to',
          'type': 'address'
        },
        {
          'internalType': 'string',
          'name': 'uri',
          'type': 'string'
        }
      ],
      'name': 'safeMint',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'from',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': 'to',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'safeTransferFrom',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'from',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': 'to',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        },
        {
          'internalType': 'bytes',
          'name': 'data',
          'type': 'bytes'
        }
      ],
      'name': 'safeTransferFrom',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'operator',
          'type': 'address'
        },
        {
          'internalType': 'bool',
          'name': 'approved',
          'type': 'bool'
        }
      ],
      'name': 'setApprovalForAll',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_userRegistry',
          'type': 'address'
        }
      ],
      'name': 'setUserRegistry',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '_variables',
          'type': 'address'
        }
      ],
      'name': 'setVariables',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes4',
          'name': 'interfaceId',
          'type': 'bytes4'
        }
      ],
      'name': 'supportsInterface',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'symbol',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'index',
          'type': 'uint256'
        }
      ],
      'name': 'tokenByIndex',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'owner',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'index',
          'type': 'uint256'
        }
      ],
      'name': 'tokenOfOwnerByIndex',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'tokenURI',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'totalSupply',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'from',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': 'to',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'transferFrom',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'newOwner',
          'type': 'address'
        }
      ],
      'name': 'transferOwnership',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    }
  ],
} as const