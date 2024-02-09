import supabase from "./supabase";

export async function getRooms() {
  let { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error("Error! Rooms couldu't be loaded!");
    throw new Error("Rooms couldu't be Found!");
  }
  return data;
}
