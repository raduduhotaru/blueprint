import React from "react";

export const AgendaPlaceholder = () => {
  return (
    <div className="container mx-auto mt-14">
      <h1 className="text-3xl font-bold mb-4">Entries Page</h1>
      <div className="flex">
        <div className="border border-black outline-none w-96 h-8 rounded px-2 py-1 mb-4"></div>
        <div className="border border-black outline-none w-44 h-8 rounded px-2 py-1 ml-2 mb-4"></div>
        <div className="ml-auto text-white w-40 h-8 rounded-md bg-[#A27B5C] hover:bg-[#A27B5C]/80 animate-pulse"></div>
      </div>
      <table className="table-auto w-full">
        <thead className="">
          <tr className="bg-[#A27B5C] h-10">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Notes</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            className={`hover:bg-[#3F4E4F] items-center text-center rounded-md border-b border-[#3F4E4F] border-1 h-10 animate-pulse`}
          >
            <td className="w-60">
              <div className="w-32 h-4 mx-auto bg-stone-600"></div>
            </td>
            <td className="w-60">
              <div className="w-32 h-4 mx-auto bg-stone-600"></div>
            </td>
            <td className="w-60">
              <div className="w-32 h-4 mx-auto bg-stone-600"></div>
            </td>
            <td className="w-64">
              <div className="w-32 h-4 mx-auto bg-stone-600"></div>
            </td>
            <td className="w-64">
              <div className="w-32 h-4 mx-auto bg-stone-600"></div>
            </td>
            <td>
              <div className="bg-[#DCD7C9] hover:bg-[#DCD7C9]/90 w-40 text-black h-8 px-2 rounded-md text-sm"></div>
            </td>
            <td>
              <div className="bg-[#DCD7C9] hover:bg-[#DCD7C9]/90 w-32 text-black h-8 px-2 rounded-md text-sm"></div>
            </td>
          </tr>

          <tr
            className={`hover:bg-[#3F4E4F] items-center text-center rounded-md border-b border-[#3F4E4F] border-1 h-10 animate-pulse`}
          >
            <td className="w-60">
              <div className="w-32 h-4 mx-auto bg-stone-400"></div>
            </td>
            <td className="w-60">
              <div className="w-32 h-4 mx-auto bg-stone-400"></div>
            </td>
            <td className="w-60">
              <div className="w-32 h-4 mx-auto bg-stone-400"></div>
            </td>
            <td className="w-64">
              <div className="w-32 h-4 mx-auto bg-stone-400"></div>
            </td>
            <td className="w-64">
              <div className="w-32 h-4 mx-auto bg-stone-400"></div>
            </td>
            <td>
              <div className="bg-[#DCD7C9] hover:bg-[#DCD7C9]/90 w-40 text-black h-8 px-2 rounded-md text-sm"></div>
            </td>
            <td>
              <div className="bg-[#DCD7C9] hover:bg-[#DCD7C9]/90 w-32 text-black h-8 px-2 rounded-md text-sm"></div>
            </td>
          </tr>

          <tr
            className={`hover:bg-[#3F4E4F] items-center text-center rounded-md border-b border-[#3F4E4F] border-1 h-10 animate-pulse`}
          >
            <td className="w-60">
              <div className="w-32 h-4 mx-auto bg-stone-600"></div>
            </td>
            <td className="w-60">
              <div className="w-32 h-4 mx-auto bg-stone-600"></div>
            </td>
            <td className="w-60">
              <div className="w-32 h-4 mx-auto bg-stone-600"></div>
            </td>
            <td className="w-64">
              <div className="w-32 h-4 mx-auto bg-stone-600"></div>
            </td>
            <td className="w-64">
              <div className="w-32 h-4 mx-auto bg-stone-600"></div>
            </td>
            <td>
              <div className="bg-[#DCD7C9] hover:bg-[#DCD7C9]/90 w-40 text-black h-8 px-2 rounded-md text-sm"></div>
            </td>
            <td>
              <div className="bg-[#DCD7C9] hover:bg-[#DCD7C9]/90 w-32 text-black h-8 px-2 rounded-md text-sm"></div>
            </td>
          </tr>

          <tr
            className={`hover:bg-[#3F4E4F] items-center text-center rounded-md border-b border-[#3F4E4F] border-1 h-10 animate-pulse`}
          >
            <td className="w-60">
              <div className="w-32 h-4 mx-auto bg-stone-400"></div>
            </td>
            <td className="w-60">
              <div className="w-32 h-4 mx-auto bg-stone-400"></div>
            </td>
            <td className="w-60">
              <div className="w-32 h-4 mx-auto bg-stone-400"></div>
            </td>
            <td className="w-64">
              <div className="w-32 h-4 mx-auto bg-stone-400"></div>
            </td>
            <td className="w-64">
              <div className="w-32 h-4 mx-auto bg-stone-400"></div>
            </td>
            <td>
              <div className="bg-[#DCD7C9] hover:bg-[#DCD7C9]/90 w-40 text-black h-8 px-2 rounded-md text-sm"></div>
            </td>
            <td>
              <div className="bg-[#DCD7C9] hover:bg-[#DCD7C9]/90 w-32 text-black h-8 px-2 rounded-md text-sm"></div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};
