const VideoTemplate = () => {
  return (
    <div className="shadow-2xl bg-white max-w-[1000px] mx-auto h-64 mt-10 overflow-hidden relative">
      <video
        src="https://res.cloudinary.com/db4dxnilx/video/upload/v1758524613/VN20250922_122110_xervaq.mp4"
        autoPlay
        loop
        playsInline
        muted
        className="w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
};

export default VideoTemplate;

