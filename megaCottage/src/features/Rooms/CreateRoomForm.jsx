/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createRooms } from "../../api/apiRooms";
import toast from "react-hot-toast";

export default function CreateRoomForm() {
  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createRooms,
    onSuccess: () => {
      toast.success("New Room Added Successfully");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function onSubmit(data) {
    console.log(data);
    mutate(data);
    reset();
  }

  return (
    <>
      <form
        action=""
        className="border-2 px-3 mt-10 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl mt-3 text-gray-600 font-bold ">
          Add Room Form
        </h2>

        {/* Room Name */}
        <div className="relative my-6">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Rooms Name"
            className=" peer input-style"
            {...register("name")}
          />
          <label htmlFor="name" className="input-label">
            Room Name
          </label>
        </div>

        {/* Max Capacity */}
        <div className="relative my-6">
          <input
            id="maxCapacity"
            type="number"
            name="maxCapacity"
            placeholder="Max Capacity"
            className=" peer input-style"
            {...register("maxCapacity")}
          />
          <label htmlFor="maxCapacity" className="input-label">
            Max Capacity
          </label>
        </div>

        {/* Regular Price */}
        <div className="relative my-6">
          <input
            id="regularPrice"
            type="number"
            name="regularPrice"
            placeholder="Regular Price"
            className=" peer input-style"
            {...register("regularPrice")}
          />
          <label htmlFor="regularPrice" className="input-label">
            Regular Price
          </label>
        </div>

        {/* Discount */}
        <div className="relative my-6">
          <input
            id="discount"
            type="number"
            name="discount"
            placeholder="Discount"
            className=" peer input-style"
            {...register("discount")}
          />
          <label htmlFor="discount" className="input-label">
            Discount
          </label>
        </div>

        {/* Image Uplode */}
        <div className="relative my-6">
          <input
            type="file"
            name="image"
            accept="image/*"
            className="room-image-input"
            {...register("image")}
          />
        </div>

        {/* Delete & Cancel btn */}
        <div className="relative my-6 flex gap-3">
          <button type="submit" className="btn btn-primary">
            <span>Add New Room</span>
          </button>
          <button type="reset" className="btn bg-transparent">
            <span>Cancel</span>
          </button>
        </div>
      </form>
    </>
  );
}
