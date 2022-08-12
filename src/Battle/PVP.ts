import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  public _player1: Fighter;
  private _player2: Fighter; 

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    // condição
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    return super.fight();
  }
}

/* se super.fight() retornar 1 o player quer foi usado como parâmetro do super na inicialização 
ganhou, e se retornar -1 a vitória foi do player que não foi o parâmetro do super */