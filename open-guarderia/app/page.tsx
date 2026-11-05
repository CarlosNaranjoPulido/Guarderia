import PostCard from "@/app/components/PostCard";
import Sidebar from "@/app/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#F6ECDF] font-nunito text-[#3F362E]">
      <Sidebar />

      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-[760px] px-[40px] py-[34px] pb-[80px]">
          <div className="mb-[24px]">
            <div className="mb-[4px] text-[12.5px] font-extrabold tracking-[0.8px] text-[#D9583C]">GUARDERÍA · SALA SOLES</div>
            <h1 className="font-fredoka text-[30px] font-semibold text-[#3F362E]">Buenas, Caro</h1>
            <p className="mt-[5px] mb-0 text-[14.5px] text-[#94887B]">12 niños · martes 17 jun</p>
          </div>

          <a
            href="#"
            className="mb-[24px] flex items-center gap-[14px] rounded-[18px] border border-[#ECE0D0] bg-[#FFFDF9] px-[18px] py-[14px] shadow-[0_4px_14px_-10px_rgba(120,90,60,0.4)]"
          >
            <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#F2937A] font-fredoka text-[16px] font-semibold text-white">C</div>
            <span className="min-w-0 flex-1 text-[15px] text-[#A89A8B]">Compartí un momento…</span>
            <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[12px] bg-[#FBE3D8] text-[#E0654A]">
              <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </span>
          </a>

          <div className="mb-[14px] flex items-center gap-[14px]">
            <span className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#8A7C6D]">PUBLICADO HOY</span>
            <span className="h-px flex-1 bg-[#E7DAC8]" />
          </div>

          <div className="flex flex-col gap-[16px]">
            <PostCard
              variant="logro"
              title="Mateo"
              time="14:20 · publicado por vos"
              audience="Para: familia de Mateo"
              text="¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso."
              likes={3}
              comments={1}
            />
            <PostCard
              variant="actividad"
              title="Mateo"
              time="09:40 · publicado por vos"
              audience="Para: familia de Mateo"
              text="Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores."
              likes={5}
              comments={2}
              hasPhoto
            />
            <PostCard
              variant="anuncio"
              title="Anuncio general"
              time="07:50 · publicado por vos"
              audience="Para: toda la sala"
              text="El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua."
              likes={8}
              comments={0}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
