export type RuleToken = {
  id: string
  toString: (d: Date) => string
}

export type FormatToken = string | RuleToken

export type ParseResult = {
  date: Date | null
  missingPunctuation: string
}
