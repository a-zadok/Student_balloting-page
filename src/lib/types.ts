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
  small_rooms: number;
  large_rooms: number;
  floors: FloorSUmmary[];
};

export type FloorSUmmary = {
  floor_number: number;
  total_rooms: number;
  available_rooms: number;
  allocated_rooms: number;
  restricted_rooms: number;
  small_rooms: number;
  large_rooms: number;
};

export type BlockNumber = {
  block_number: number;
  gender_type: "Male" | "Female";
};
