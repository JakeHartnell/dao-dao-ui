import { PeopleAltOutlined, PeopleAltRounded } from '@mui/icons-material'

import { MainDaoInfoCardsTokenLoader } from '@dao-dao/stateless'
import {
  ActionCategoryKey,
  ActionKey,
  DaoTabId,
  VotingModuleAdapter,
} from '@dao-dao/types'
import { DAO_VOTING_CW721_ROLES_CONTRACT_NAMES } from '@dao-dao/utils'

import { MintCw721RoleAction } from '../../../actions/core/actions/MintCw721Role'
import { MembersTab, ProfileCardMemberInfo } from './components'
import { useMainDaoInfoCards, useVotingModuleRelevantAddresses } from './hooks'

export const DaoVotingCw721RolesAdapter: VotingModuleAdapter = {
  id: 'DaoVotingCw721Roles',
  contractNames: DAO_VOTING_CW721_ROLES_CONTRACT_NAMES,

  load: () => ({
    // Hooks
    hooks: {
      useMainDaoInfoCards,
      useVotingModuleRelevantAddresses,
    },

    // Components
    components: {
      extraTabs: [
        {
          id: DaoTabId.Members,
          labelI18nKey: 'title.members',
          Component: MembersTab,
          Icon: PeopleAltOutlined,
          IconFilled: PeopleAltRounded,
        },
      ],

      MainDaoInfoCardsLoader: MainDaoInfoCardsTokenLoader,
      ProfileCardMemberInfo,
    },

    // Functions
    fields: {
      actions: {
        actions: [MintCw721RoleAction],
        categoryMakers: [
          // Add to NFTs category only for dao-voting-cw721-roles DAOs.
          () => ({
            key: ActionCategoryKey.Nfts,
            actionKeys: [ActionKey.MintCw721Role],
          }),
        ],
      },
    },
  }),
}
