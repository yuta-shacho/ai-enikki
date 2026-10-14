// コミットメッセージのルール。詳しくは CONTRIBUTING.md
const TYPES = ["feat", "fix", "docs", "test", "refactor", "perf", "build", "ci", "chore", "revert"];
const SCOPES = ["web", "api", "cli", "infra", "db", "openapi", "docs"];
const MAX_LINES = 3;

// 空行とコメント行（#）を除いた行数を数える
const countLines = (raw) =>
  raw.split("\n").filter((line) => line.trim() !== "" && !line.startsWith("#")).length;

export default {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "max-lines": ({ raw }, _when, max) => {
          const lines = countLines(raw);
          return [lines <= max, `空行を除いて${max}行以内にしてください（今は${lines}行）`];
        },
      },
    },
  ],
  rules: {
    "type-enum": [2, "always", TYPES],
    "scope-enum": [2, "always", SCOPES],
    // 要約は日本語で書くので、英語の大文字・小文字のルールは使わない
    "subject-case": [0],
    "max-lines": [2, "always", MAX_LINES],
  },
};
