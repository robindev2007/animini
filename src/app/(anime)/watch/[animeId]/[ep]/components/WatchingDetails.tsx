const WatchingDetails = ({ currentEp }: { currentEp: string | number }) => {
  return (
    <div className="bg-card rounded-md flex items-center justify-center flex-1 md:max-w-[30%] xl:max-w-[25%] p-2">
      <p className="text-center text-pretty text-sm">
        You are currently watching{" "}
        <span className="text-purple-600 font-semibold shadow-md">
          episode {currentEp}.
        </span>{" "}
        If current server does not work try another one.
      </p>
    </div>
  );
};

export default WatchingDetails;
