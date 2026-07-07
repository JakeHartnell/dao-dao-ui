export const AGENT_TOKEN_ID_REGEX = /^agent:[a-z][a-z0-9-]{1,31}$/
export const ROLE_SLUG_REGEX = /^[a-z][a-z0-9-]{1,31}$/

export const validateAgentTokenId = (value?: string | null) =>
  value && AGENT_TOKEN_ID_REGEX.test(value)
    ? true
    : 'Token ID must match agent:<lowercase-slug>, with a 2-32 character handle starting with a letter.'

export const validateRoleSlug = (value?: string | null) =>
  !value || ROLE_SLUG_REGEX.test(value)
    ? true
    : 'Role must be a lowercase slug, 2-32 characters, starting with a letter.'
