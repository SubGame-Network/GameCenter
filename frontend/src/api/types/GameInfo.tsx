export interface gameInfo {
  room: string;
  blockId: string;
  betLimit: string;
  status: string;
  totalBet: string;
  gameCreateBy: string;
  gameCreateTrime: string;
  resultBlockHash: string;
}

export interface betRecord {
  address: string;
  oddEven: "Odd" | "Even";
  bet: string;
  time: string;
}
export interface GameInfo_respone {
  gameInfo: gameInfo;
  betRecord: betRecord[];
}
