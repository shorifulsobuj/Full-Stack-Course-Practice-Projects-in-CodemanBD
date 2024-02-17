/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../api/apiRooms";
import TableRow from "./TableRow";
import CreateRoomForm from "./CreateRoomForm";

export default function Table() {
  const {
    data: rooms,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  console.log(rooms);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {/*<!-- Component: Responsive Table --> */}
      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellSpacing="0"
      >
        <tbody>
          <tr>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            ></th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Name
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Capacity
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Price
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Discount
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            ></th>
          </tr>
          {/* show rooms */}
          {rooms.map((room) => (
            <TableRow room={room} key={room.id} />
          ))}
        </tbody>
      </table>
      {/*<!-- End Responsive Table --> */}
      <div className="w-[800px]">
        <CreateRoomForm />
      </div>
    </>
  );
}
