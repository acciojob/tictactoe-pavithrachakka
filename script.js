//your JS code here. If required.
let player1="";
let player2="";
let currentPlayer=1;
let gameActive=true;
let board=["","","","","","","","",""];
const messageDiv=document.querySelector(".message");
const submitBtn=document.getElementById("submit");
submitBtn.addEventListener("click",()=>{
	player1=document.getElementById("player-1").value;
	player2=document.getElementById("player-2").value;
	if(!player1 || !player2) return;
	document.getElementById("form").style.display="none";
	document.getElementById("game").style.display="block";
	messageDiv.textContent=`${player1}, you're up`;
});
const cells=document.querySelectorAll(".cell");
cells.forEach(cell=>{
	cell.addEventListener("click",()=>{
		const index=parseInt(cell.id)-1;
		if(!gameActive || board[index]!=="") return;
		if(currentPlayer===1){
			board[index]="x";
			cell.textContent="x";
			if(checkWin()){
				messageDiv.textContent=`${player1}, congratulations you won!`;
				gameActive=false;
				return;
			}
			currentPlayer=2;
			messageDiv.textContent=`${player2}, you're up`;
		}else{
			board[index]="o";
			cell.textContent="o";
			if(checkWin()){
				messageDiv.textContent=`${player2}, congratulations you won!`;
				gameActive=false;
				return;
		}
	});
});
function checkWin(){
	const winCombos=[
		[0,1,2],[3,4,5],[6,7,8],
		[0,3,6],[1,4,7],[2,5,8],
		[0,4,8],[2,4,6]
	];
	return winCombos.some(combos=>{
		const [a,b,c]=combo;
		return board[a] && board[a]===board[b]&&board[a]===board[c];
	});
}
