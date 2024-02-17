/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRooms } from "../../api/apiRooms";
import toast from "react-hot-toast";

export default function TableRow({ room }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = room;

  // delete a room
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteRooms,
    onSuccess: () => {
      toast.success("Room Successfully Deleted");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <>
      <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
        <td
          data-th="Name"
          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 p-2"
        >
          <img
            src={image}
            className="w-full h-[3rem] rounded shadow-lg"
            alt={name}
          />
        </td>
        <td
          data-th="Title"
          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
        >
          {name}
        </td>
        <td
          data-th="Company"
          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
        >
          {maxCapacity}
        </td>
        <td
          data-th="Role"
          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
        >
          {regularPrice}
        </td>
        <td
          data-th="Username"
          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
        >
          {discount}
        </td>
        <td
          data-th="Username"
          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
        >
          <button
            className="inline-flex items-center justify-center h-10 gap-2 px-4 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none"
            onClick={() => mutate(id)}
          >
            <span>Delete</span>
          </button>
        </td>
      </tr>
    </>
  );
}
