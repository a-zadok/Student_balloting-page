import ScrollableButtons from "../../../components/ui/ScrollableButtons";

export default function RoomSummary() {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <h2 className="text-xl">Room Summary</h2>
      <ScrollableButtons />
    </div>
  );
}
