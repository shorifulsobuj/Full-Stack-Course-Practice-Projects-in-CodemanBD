/* eslint-disable react/prop-types */
export default function TableRow({ room }) {
  const { name, maxCapacity, regularPrice, discount, image } = room;
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
          <button className="inline-flex items-center justify-center h-8 gap-2 px-3 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>Delete</span>
          </button>
        </td>
      </tr>
    </>
  );
}
