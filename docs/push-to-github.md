# First push to the new GitHub account

The local repository is on main with no commits or remote. The website is configured for the GitHub account `meravious`. The directory name `Meraviglioso8.github.io` can stay unchanged locally.

## Create an empty repository

While signed in to GitHub as meravious, create `meravious.github.io`. For GitHub Free, choose a public repository to use Pages. Leave README, license and .gitignore initialization off because those files already exist locally.

If a repository with that name already contains commits, stop before using these first-push instructions. Inspect that repository first; do not resolve an unrelated-history rejection with a force push.

## Configure the commit identity

Run from PowerShell. Replace the email placeholder with your verified GitHub commit email or the exact private noreply email shown in GitHub Settings → Emails. Do not literally use the placeholder.

```powershell
cd D:\codex\Meraviglioso8.github.io
git config user.name "meravious"
git config user.email "YOUR_GITHUB_COMMIT_EMAIL"
```

This sets the author identity for this repository. It does not sign you in or change your GitHub account username. You can use a different display name for commits if preferred.

## Review and push

```powershell
git add .
git diff --cached --stat
git diff --cached
git commit -m "Start security engineering blog"
git remote add origin https://github.com/meravious/meravious.github.io.git
git push -u origin main
```

Review the staged source before committing. Generated public files, local proof records and local tools outside this repository are not included by git add. Authenticate as meravious when Git prompts; an ordinary GitHub account password is not used for HTTPS Git authentication.

For later changes, use git add, git commit and git push again. Do not repeat git remote add after origin exists.

## Publish with GitHub Pages

After the push, set repository Settings → Pages → Build and deployment → Source to GitHub Actions. Under Actions, open Check and publish security notebook, select Run workflow on main, and wait for the build and deployment jobs. Pushes only run checks; publishing is manual in the prepared workflow.

The expected published URL is https://meravious.github.io . Nothing in these local edits rewrites the old account's remote repository or removes its published site.

References: [GitHub Pages repository naming](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [Git author names](https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git), and [pushing local source](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github).
