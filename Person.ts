class Player {
    firstName:string;
    lastName:string;
    score:number;

    calculateScore = (otherPlayer:Player) =>{
        return this.score - otherPlayer.score;
    }
}
