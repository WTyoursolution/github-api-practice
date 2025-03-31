'use strict';

async function fetchPosts() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await response.json();

        console.log(data[0].title);
    } catch (error){
        console.error(error) 
    }
}

async function createPost() {
    const postData = {
        title: "Hello, Github",
        body: "This is a sample post",
        userId: 1
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        const data = await response.json();
        console.log("Response Data:", data);
    } catch (error) {
        console.error("Error creating post:", error);
    }

}

async function fetchGitHubUser(username) {
    try {
        const res = await fetch(`https://api.github.com/users/${WTyoursolution}`);
        if (res != 200) {
            throw new Error(`User not found`);
        }

        const data = await res.json();
        console.log(`Username: ${data.login}`);
        console.log(`Public Repos: ${data.public_repos}`);
        console.log(`Profile: ${data.html_url}`);
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

async function fetchGitHubRepos(username) {
    try {
        const res= await fetch(`https://api.github.com/users/${WTyoursolution}/repos`);
        if (res != 200) {
            throw new Error(`User not found`);
        }

        const data = await res.json();
        console.log(`First 5 Repositories for ${WTyoursolution}:`);
        data.slice(0, 5).forEach((repo, index) => {
            console.log(`${index + 1}. ${repo.name}`);
        });
    } catch (error) {
        console.error("Error fetching repositories:", error);
    }
}

fetchPosts();
createPost();
fetchGitHubUser("WTyoursolution");
fetchGitHubRepos("WTyoursolution");

