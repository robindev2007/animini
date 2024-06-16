const WatchingDetails = ({ ep }: { ep: number | string | undefined }) => {
  return (
    <div className="bg-card text-center p-2 lg:max-w-[20%] rounded-md text-muted-foreground text-sm border border-border/10 lg:p-5">
      You are watching
      <span className="text-[#9448ff] font-medium"> episode {ep}. </span>
      If current server dosen&apos;t work, try other one.
    </div>
  );
};

export default WatchingDetails;
