import { Octokit, App } from "octokit";

async () => {
    // Octokit.js
    // https://github.com/octokit/core.js#readme
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    })
    
    const response = await octokit.request("GET /orgs/{org}/repos", {
        org: "gabrielTettamanti",
        type: "public",
    });

    console.log(response)
}
