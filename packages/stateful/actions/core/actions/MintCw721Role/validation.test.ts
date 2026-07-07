import { describe, expect, it } from 'vitest'

import { validateAgentTokenId, validateRoleSlug } from './validation'

describe('cw721 roles mint validation', () => {
  it('requires agent token IDs to use the agent:<lowercase-slug> convention', () => {
    expect(validateAgentTokenId('agent:ab')).toBe(true)
    expect(validateAgentTokenId('agent:builder-01')).toBe(true)

    expect(validateAgentTokenId('builder-01')).not.toBe(true)
    expect(validateAgentTokenId('agent:A-builder')).not.toBe(true)
    expect(validateAgentTokenId('agent:a')).not.toBe(true)
    expect(validateAgentTokenId('agent:builder_01')).not.toBe(true)
  })

  it('keeps optional role slugs lowercase and bounded', () => {
    expect(validateRoleSlug('')).toBe(true)
    expect(validateRoleSlug(null)).toBe(true)
    expect(validateRoleSlug('steward')).toBe(true)
    expect(validateRoleSlug('agent-ops')).toBe(true)

    expect(validateRoleSlug('Steward')).not.toBe(true)
    expect(validateRoleSlug('s')).not.toBe(true)
    expect(validateRoleSlug('agent_ops')).not.toBe(true)
  })
})
