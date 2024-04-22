import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const AnimePage = ({ params }: { params: { animeId: string } }) => {
  const useCookies = cookies();
  let currentEp = 1;

  if (useCookies.has(params.animeId)) {
    currentEp = useCookies.get(params.animeId) as unknown as number;
  }
  return redirect(`/watch/${params.animeId}/ep-${currentEp}`);
};

export default AnimePage;
