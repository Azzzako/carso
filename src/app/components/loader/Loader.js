import "./Loader.css";

export default function () {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-black gap-4">
        <h1 style={{fontFamily: "Poppins"}} className="text-white text-center text-5xl">Un momento, estamos cargando la plataforma!</h1>
      <span className="loader"></span>
    </div>
  );
}
