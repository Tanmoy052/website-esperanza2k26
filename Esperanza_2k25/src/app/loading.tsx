import LoaderComponent from "@/components/Shared/Loader";

const loading = () => {
  return (
    <div className="fixed h-screen z-[100]">
      <LoaderComponent />
    </div>
  );
};

export default loading;
