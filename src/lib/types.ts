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

export type RoomRow = {
  room_id: string;
  room_number: number;
  block_number: number;
  floor_number: number;
  gender_type: "Male" | "Female";
  room_type: "S" | "L" | "Other";
  capacity: number;
  allocated_beds: number;
  available_beds: number;
  room_status: "Available" | "Allocated" | "Utility" | "Restricted";
};

export type Paginated<T> = {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
  data: T[];
};

export type RoomBed = {
  bed_id: string;
  bed_label: string;
  status: "Available" | "Allocated";
  student: {
    matric_number: string;
    name: string;
    department: string | null;
    level: number | null;
  } | null;
};

export type RoomDetail = {
  room_id: string;
  room_number: number;
  block_number: number;
  gender_type: "Male" | "Female";
  floor_number: number;
  room_type: "S" | "L" | "Other";
  room_status: "Available" | "Allocated" | "Utility" | "Restricted";
  capacity: number;
  allocated_beds: number;
  available_beds: number;
  beds: RoomBed[];
};

export type StudentResult = {
  matric_number: string;
  name: string;
  department: string | null;
  level: number | null;
  gender: "Male" | "Female" | null;
  allocated: boolean;
};
