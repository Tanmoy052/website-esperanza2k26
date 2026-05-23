
export interface Team {
  _id?: string;
  teamKey: string;
  teamName: string;
  eventId: string;
  leader: string;
  members: string[];
  createdAt?: Date;
}

