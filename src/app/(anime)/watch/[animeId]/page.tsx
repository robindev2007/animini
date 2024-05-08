import { redirect } from "next/navigation";
import React from "react";

const WatchPage = ({ params }: { params: { animeId: string } }) => {
  redirect(`/watch/${params.animeId}/1`);
};

export default WatchPage;
