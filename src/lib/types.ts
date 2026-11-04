export type RoomStats = {
  total_rooms: number;
  available_rooms: number;
  allocated_rooms: number;
  restricted_rooms: number;
};

export type BlockSummary = {
  block_id: string;
  block_number: number;
  gender_type: string;
  total_floors: number;
  total_rooms: number;
  available_rooms: number;
  allocated_rooms: number;
  restricted_rooms: number;
  utility_rooms: number;
  small_rooms: number;
  large_rooms: number;
  total_bedspaces: number;
  allocated_bedspaces: number;
  available_bedspaces: number;
  floors: FloorSUmmary[];
};

export type FloorSUmmary = {
  floor_number: number;
  total_rooms: number;
  available_rooms: number;
  allocated_rooms: number;
  restricted_rooms: number;
  utility_rooms: number;
  small_rooms: number;
  large_rooms: number;
  total_bedspaces: number;
  allocated_bedspaces: number;
  available_bedspaces: number;
};

export type BlockNumber = {
  block_number: number;
  gender_type: "Male" | "Female";
};
