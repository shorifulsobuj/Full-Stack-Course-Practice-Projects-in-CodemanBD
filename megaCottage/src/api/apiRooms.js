export async function getRooms() {
  // eslint-disable-next-line no-undef, no-unused-vars
  let { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error("Error! Rooms couldu't be loaded!");
    throw new Error("Rooms couldu't be Found!");
  }
}
