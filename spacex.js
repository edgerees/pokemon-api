//example with rome

//get data from Space X
fetch('https://api.spacexdata.com/v3/capsules')
.then(response =>{
    console.log(response);
    return response.json();

})

.then(spacexCapsules=>{ 
    console.log(spacexCapsules);
})
.catch(error=> {
    console.log(error);
})

//My Example #1
fetch('https://api.spacexdata.com/v3/landpads')
.then(response =>{
    console.log(response);
    return response.json();

})

.then(spacexLaunchpad=>{ 
    console.log(spacexLaunchpad);
})
.catch(error=> {
    console.log(error);
})

//My Example #2
fetch('https://api.spacexdata.com/v3/launches')
.then(response =>{
    console.log(response);
    return response.json();

})

.then(spacexLaunches=>{ 
    console.log(spacexLaunches);
})
.catch(error=> {
    console.log(error);
})

//My Example #3
fetch('https://api.spacexdata.com/v3/missions')
.then(response =>{
    console.log(response);
    return response.json();

})

.then(spacexMissions=>{ 
    console.log(spacexMissions);
})
.catch(error=> {
    console.log(error);
})