
let groups = [
    ["AbdulRazak", "Sakinat", "Fatimat"],
    ["Abdullateef", "Aishat", "Latifat"],
    ["Ibrahim", "Isiak", "Uthman"]
]
for (let i = 0; i < groups.length; i++) {
    let matches = 0
    for (let j = 0; j < groups[i].length; j++) {
        if (groups[i][j].startsWith("A")) {
            matches++
        } else {
            continue
        }
        if (matches === 2) {
            console.log("These are the names starting with an A", groups[i])
            break 
        }
    }
}
// for(let group of groups){
//     for(let member of group){
//         if (member.startsWith("A")) {
//             console.log("Found names starting with A," , member);
//             break    
//         }
//     }
// }

