let votes = {
    "Party A":0,
    "Party B":0,
    "Party C":0
};

let votedCNIC = [];

function vote(party){
    let cnic = document.getElementById("cnic").value;
    let age = document.getElementById("age").value;
    let msg = document.getElementById("message");

    if(cnic === "" || age === ""){
        msg.innerHTML = " Please fill CNIC & Age first";
        return;
    }

    if(cnic.length !== 13){
        msg.innerHTML = "CNIC must be 13 digits";
        return;
    }

    if(age < 18){
        msg.innerHTML = "Not Eligible (18+ only)";
        return;
    }

    if(votedCNIC.includes(cnic)){
        msg.innerHTML = " Double vote not allowed!";
        return;
    }

    votedCNIC.push(cnic);
    votes[party]++;

    msg.style.color = "green";
    msg.innerHTML = "Vote  submitted successfully!";
}

function showResult(){

let totalVotes = votes["Party A"] + votes["Party B"] + votes["Party C"];
let votesDone = votedCNIC.length;
let remainingVotes = totalVotes - votesDone;

let maxVote = Math.max(votes["Party A"], votes["Party B"], votes["Party C"]);

let winner = "";

if(
    (votes["Party A"] === maxVote && votes["Party B"] === maxVote) ||
    (votes["Party A"] === maxVote && votes["Party C"] === maxVote) ||
    (votes["Party B"] === maxVote && votes["Party C"] === maxVote)
){
    winner = "Tie";
}
else{
    for(let p in votes){
        if(votes[p] === maxVote){
            winner = p;
        }
    }
}

document.getElementById("finalResult").innerHTML =
`
Party A : ${votes["Party A"]} votes <br>
Party B : ${votes["Party B"]} votes <br>
Party C : ${votes["Party C"]} votes <br><br>

<b>Total Votes:</b> ${totalVotes} <br>
<b>Votes Done:</b> ${votesDone} <br>
<b>Remaining Votes:</b> ${remainingVotes} <br>
<b>Winning Party:</b> ${winner}
`;
}