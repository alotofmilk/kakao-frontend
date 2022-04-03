type ChatType = {
  id: number;
  name: string;
  message: string;
  count?: number;
  date: Date;
};

export const chats: ChatType[] = [
  { id: 1, name: "나수진", message: " ", count: 1, date: new Date() },
  { id: 2, name: "정소영", message: " ", count: 2, date: new Date() },
  { id: 3, name: "김기령", message: " ", count: 10, date: new Date() },
  { id: 4, name: "손희수", message: " ", count: 1, date: new Date() },
  { id: 5, name: "이윤경", message: " ", count: 5, date: new Date() },
];
