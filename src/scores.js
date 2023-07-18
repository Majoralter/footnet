// @ts-nocheck
let  container = "";

window.addEventListener('load', () =>{
    const url = 'https://sportscore1.p.rapidapi.com/sports/1/events/live?page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '301e85f9b2msh2716c2dd45a2964p17fb6bjsn77621ad69bff',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        }
    };

    fetch(url, options).then(response => response.json()).then(data => {
        let gameInfo = data.data
        let leagues = []
        gameInfo.forEach((info) => {
        if (!leagues.includes(info.league.name)){
        leagues.push(info.league.name)
        }})
        
        let newData = leagues.map((league) => ({league, matches: []}))

        gameInfo.forEach((info) => {
            const leagueIndex = newData.findIndex((obj) => obj.league == info.league.name)

            const formerMatches = newData[leagueIndex]['matches']

            // @ts-ignore
            newData[leagueIndex] = {league: newData[leagueIndex]['league'], matches: [...formerMatches, {home_team: info.home_team.name, away_team: info.away_team.name, home_team_logo: info.home_team.logo, away_team_logo: info.away_team.logo, time: info.status_more, home_team_score: info.home_score?.current ?? "TBD", away_team_score: info.away_score?.current ?? "TBD"}]}
        })


                    for(let i = 0; i < newData.length; i++){
                    for(let j = 0; j < newData[i].matches.length; j++){
                    container += `
                    <div class="league">${(!container.includes(newData[i].league)) ? newData[i].league : ""}</div>
                    <div class="scores-container">
                    <div class="home-team">
                    <img src=${newData[i].matches[j].home_team_logo}>
    
                    <h3 class="team-name">
                        ${newData[i].matches[j].home_team}
                    </h3>
                    </div>
    
    
                    <div class="game-details">
                    <h4 class="time">
                         ${newData[i].matches[j].time}*
                    </h4>
    
                    <div>
                    <h2 class="team-score">
                        ${newData[i].matches[j].home_team_score}
                    </h2>
    
                    <h2 class="team-score">
                    ${newData[i].matches[j].away_team_score}
                     </h2>
                     </div>
                     </div>
    
                     <div class="away-team">
                    <h3 class="team-name">
                    ${newData[i].matches[j].away_team}
                    </h3>
    
                    <img src=${newData[i].matches[j].away_team_logo}>
                    </div>
                </div>
                `
                }}

            document.querySelector('.scores').innerHTML = container    
    }).catch(err => console.log(err))
})

