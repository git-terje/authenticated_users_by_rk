module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
        changelogTitle: "# Changelog"
      }
    ],
    [
      "@semantic-release/git",
      {
        assets: [
          "custom_components/authenticated_users_by_rk/manifest.json",
          "hacs.json",
          "CHANGELOG.md",
          "package.json"
        ],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "authenticated_users_by_rk.zip",
            label: "HACS Install Package"
          }
        ]
      }
    ]
  ],
  prepare: [
    {
      path: "@semantic-release/exec",
      cmd: "sed -i 's/\"version\": \".*\"/\"version\": \"${nextRelease.version}\"/' custom_components/authenticated_users_by_rk/manifest.json hacs.json"
    }
  ]
};
