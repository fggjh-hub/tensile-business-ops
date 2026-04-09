# Pre-Incorporation: Configure Automation Mocks

## The Objective
Your £1,500/month per covered core system Safety Retainer promises proactive dependency management. For this to stay profitable without widening the scope, you must automate the dependency update process. Do not learn how to use Renovate on a paying client's repository. Master it now.

## Step 1: The Mock Environment
1.  Log into your personal GitHub account.
2.  Create a completely new, mock repository (e.g., a basic `create-react-app` or a basic Express server).
3.  Intentionally install heavily outdated packages into the `package.json` (e.g., `npm install lodash@4.17.10`).

## Step 2: Installing Renovate
1.  Go to the GitHub Marketplace and install the **Renovate** application on your personal mock repository.
2.  Renovate will automatically open an onboarding Pull Request containing a `renovate.json` configuration file.

## Step 3: Mastering the Configuration
You must configure Renovate to behave exactly as it will for a retainer client.
1.  Edit the `renovate.json` file.
2.  **Scheduling:** Set it to only execute PRs on a specific day (e.g., Tuesday mornings). You do not want it pinging client repositories on weekends.
3.  **Grouping:** Configure it to group minor/patch updates together (e.g., "Group all React ecosystem minor updates into one PR") to prevent PR fatigue.
4.  **Auto-Merging:** (Optional) Set up an auto-merge rule for patch updates *if* the CI pipeline passes.

## Step 4: The CI/CD Bridge
Set up a basic GitHub Action YAML file that runs `npm install` and `npm t` (tests). Watch Renovate open the PR, watch the GitHub Action run the tests, and verify how it looks when it succeeds.

By doing this, you guarantee that when you sell a retainer, you can set up their automated dependency pipelines in 10 minutes flat.
