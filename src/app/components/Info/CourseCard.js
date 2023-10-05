import { LinearProgress } from "@mui/material";

export default function CourseCard({
  course,
  theme,
  sector,
  advance,
  img,
  certificationDate,
  inscriptionDate,
  score,
}) {
  
  const inscription = inscriptionDate.split("T")
  const dateInsc = inscription[0]
  const certification = certificationDate.split("T")
  const dateCert = certification[0]
 
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center rounded-xl"
      style={{ backgroundColor: theme }}
    >
      <div className="group w-full h-96 [perspective:1000px]">
        <div className="relative h-full w-full  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="flex flex-col w-full h-full absolute inset-0 justify-center items-center p-4 gap-10">
            <h1
              className="text-center text-xl font-bold text-white"
              style={{ fontFamily: "Poppins" }}
            >
              {course}
            </h1>

            <img src={img} alt={img} className="w-full h-52 object-cover" />
          </div>

          <section className="absolute inset-0 h-full w-full rounded-xl bg-black/75 px-12 text-center text-slate-200 duration-500 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div
              className="w-full h-full flex flex-col justify-center items-center gap-6"
              style={{ fontFamily: "Poppins" }}
            >
              <h1>Sector: {sector}</h1>
              <div className="w-full">
                <LinearProgress
                  value={advance}
                  variant="determinate"
                  sx={{
                    height: 10,
                    borderRadius: 25,
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: advance === 100 ? "green" : "red",
                    },
                  }}
                />
                <div>
                  <h1>{advance}%</h1>
                </div>
              </div>
              <h1>{advance === 100 ? `Te Certificaste el ${dateCert}` : `Te inscribiste el ${dateInsc}`}</h1>
              <h1>{advance === 100 ? `Calificacion: ${score}` : null}</h1>

              <button className="w-full h-20 text-center bg-red-600">
                {advance === 100 ? "Descargar Certificado" : "Continuar Curso"}
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
