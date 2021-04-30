export interface historyData {
  room: string;
  blockId: string;
  totalBet: string;
  betLimit: string;
  bet?: string;
  oddEven?: string;
  draw: string;
  result: string;
  timestamp: string;
}

interface historyDetailInfo {
  room: string;
  betLimit: string;
  createTime: string;
  bookmakerAddress: string;
  blockId: string;
  hash: string;
  draw: "Odd" | "Even";
  result: string;
  status: "1" | "2";
}

interface historyDetailBetRecord {
  address: string;
  oddEven: "Odd" | "Even";
  bet: string;
  result: string;
}

export interface IApi_getHistoryPlayer_response {
  room: string;
  blockId: string;
  totalBet: string;
  betLimit: string;
  bet: string;
  oddEven: "Odd" | "Even";
  draw: string;
  result: string;
  timestamp: string;
}

export interface IApi_getHistoryBookmaker {
  room: string;
  blockId: string;
  totalBet: string;
  betLimit: string;
  draw: string;
  result: string;
  timestamp: string;
}

export interface IApi_getHistoryDetails {
  historyDetailInfo: historyDetailInfo;
  historyDetailBetRecord: historyDetailBetRecord[];
}

export interface IApi_getGameCenter_response {
  room: string;
  blockId: string;
  betLimit: string;
  status: "1" | "2";
}
