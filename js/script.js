let team=["Habiba","Humayra","Anjuman","sumaiya"];


function gratings(teamMembersName) {
    console.log(`assalamualaikum ${teamMembersName}`);

    let utterance = new SpeechSynthesisUtterance(`assalamualaikum ${teamMembersName}`);
speechSynthesis.speak(utterance);

}
for (let x = 0; x < team.length; x++) {
    gratings(team[x]);
    
}


