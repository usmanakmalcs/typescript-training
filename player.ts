export class Player {
    private _score:number;

    constructor(_score?:number){
        this._score = _score;
    }

    get score(){
     return this._score;
    }

    set score(score:number) {
        this._score = score;
    }

    calculateScore = (otherPlayer:Player) =>{
        return this.score - otherPlayer.score;
    }
}
