
//get user profile from GITHUB
fetch('https://api.github.com/users/edgerees')
.then(response => { 
    console.log(response); 
    return response.json(); //uses json to send the data
})

//response goes into githubData via jSon
.then(githubDate=> {
console.log(githubDate); //console log displays the data.
})


.then(githubDate => {
   const edgereesObj= {
       bio: githubDate.bio,
       username: githubDate.login,
       name:githubDate.name
   }
   console.log(edgereesObj);

    })
    
// check error, only runws if there is an error, console log will show "error"
.catch(error=> {
    console.log(error);
})