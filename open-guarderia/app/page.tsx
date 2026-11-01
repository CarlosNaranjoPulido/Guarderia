export default function Home() {
  return (
    <div className="flex h-screen bg-[#F6ECDF] font-nunito text-[#3F362E]">
      <aside className="sticky top-0 flex h-screen w-[248px] shrink-0 flex-col overflow-y-auto border-r border-[#ECE0D0] bg-[#FFFDF9] px-[16px] py-[24px]">
        <a href="#" className="flex items-center gap-[11px] px-[8px] pb-[22px] pt-[4px]">
          <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[12px] bg-linear-to-br from-[#F8C3A8] to-[#F2937A]">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </div>
          <div>
            <div className="font-fredoka text-[17px] leading-[1] font-semibold text-[#3F362E]">OpenDayCare</div>
            <div className="mt-[2px] text-[11.5px] text-[#A89A8B]">Sala Soles</div>
          </div>
        </a>

        <a
          href="#"
          className="mb-[18px] flex w-full items-center justify-center gap-[8px] rounded-[14px] bg-linear-to-b from-[#F4977E] to-[#EE8164] py-[12px] font-extrabold text-[14.5px] text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,0.75)]"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Nueva publicación
        </a>

        <nav className="flex flex-1 flex-col gap-[4px]">
          <a href="#" className="flex items-center gap-[12px] rounded-[12px] bg-[#FBE3D8] px-[12px] py-[11px] font-extrabold text-[14.5px] text-[#D9583C]">
            <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
            </svg>
            Feed
          </a>
          <a href="#" className="flex items-center gap-[12px] rounded-[12px] px-[12px] py-[11px] font-semibold text-[14.5px] text-[#6E6359]">
            <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="7" r="3" />
              <circle cx="17" cy="9" r="2.4" />
              <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 20a5 5 0 0 1 5.5-4.9" />
            </svg>
            Niños
          </a>
          <a href="#" className="flex items-center gap-[12px] rounded-[12px] px-[12px] py-[11px] font-semibold text-[14.5px] text-[#6E6359]">
            <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
            </svg>
            Avisos
          </a>
          <a href="#" className="flex items-center gap-[12px] rounded-[12px] px-[12px] py-[11px] font-semibold text-[14.5px] text-[#6E6359]">
            <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Mi cuenta
          </a>
        </nav>

        <div className="mt-[10px] border-t border-[#ECE0D0] pt-[14px]">
          <div className="flex items-center gap-[11px] px-[8px] py-[6px]">
            <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#F2937A] font-fredoka text-[16px] font-semibold text-white">C</div>
            <div className="min-w-0 flex-1">
              <div className="text-[14px] font-extrabold text-[#3F362E]">Caro Giménez</div>
              <div className="text-[12px] text-[#A89A8B]">Maestra · Soles</div>
            </div>
            <a href="#" title="Cerrar sesión" className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[10px] bg-[#F6ECDF] text-[#94887B]">
              <svg className="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
              </svg>
            </a>
          </div>
        </div>
      </aside>

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
            <article className="rounded-[20px] border border-[#ECE0D0] bg-[#FFFDF9] p-[20px] px-[22px] shadow-[0_4px_16px_-12px_rgba(120,90,60,0.5)]">
              <div className="mb-[14px] flex items-center gap-[12px]">
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#A9D9E8] font-fredoka text-[17px] font-semibold text-[#1F7A93]">M</div>
                <div className="min-w-0 flex-1">
                  <div className="font-fredoka text-[16.5px] font-semibold text-[#3F362E]">Mateo</div>
                  <div className="text-[12.5px] text-[#A89A8B]">14:20 · publicado por vos</div>
                </div>
                <div className="flex items-center gap-[7px] rounded-full bg-[#CFEBD8] px-[12px] py-[6px]">
                  <span className="h-[8px] w-[8px] rounded-full bg-[#3E9B6C]" />
                  <span className="text-[12px] font-extrabold tracking-[0.5px] text-[#3E9B6C]">LOGRO</span>
                </div>
              </div>
              <div className="mb-[10px] text-[12.5px] text-[#A89A8B]">Para: familia de Mateo</div>
              <p className="m-0 text-[15.5px] leading-[1.55] text-[#4A4038]">¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso.</p>
              <div className="mt-[16px] flex items-center gap-[18px] border-t border-[#F0E6D8] pt-[14px]">
                <span className="flex items-center gap-[7px] font-bold text-[14px] text-[#E0654A]">
                  <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="#E0654A" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
                  </svg>
                  3
                </span>
                <a href="#" className="flex items-center gap-[7px] font-bold text-[14px] text-[#94887B]">
                  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
                  </svg>
                  1
                </a>
                <span className="flex-1" />
                <a href="#" className="font-extrabold text-[14px] text-[#C5503A]">Editar</a>
              </div>
            </article>

            <article className="rounded-[20px] border border-[#ECE0D0] bg-[#FFFDF9] p-[20px] px-[22px] shadow-[0_4px_16px_-12px_rgba(120,90,60,0.5)]">
              <div className="mb-[14px] flex items-center gap-[12px]">
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#A9D9E8] font-fredoka text-[17px] font-semibold text-[#1F7A93]">M</div>
                <div className="min-w-0 flex-1">
                  <div className="font-fredoka text-[16.5px] font-semibold text-[#3F362E]">Mateo</div>
                  <div className="text-[12.5px] text-[#A89A8B]">09:40 · publicado por vos</div>
                </div>
                <div className="flex items-center gap-[7px] rounded-full bg-[#C7E7F1] px-[12px] py-[6px]">
                  <span className="h-[8px] w-[8px] rounded-full bg-[#2E89A6]" />
                  <span className="text-[12px] font-extrabold tracking-[0.5px] text-[#2E89A6]">ACTIVIDAD</span>
                </div>
              </div>
              <div className="mb-[10px] text-[12.5px] text-[#A89A8B]">Para: familia de Mateo</div>
              <p className="m-0 text-[15.5px] leading-[1.55] text-[#4A4038]">Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores.</p>
              <a href="#" className="mt-[14px] flex h-[200px] flex-col items-center justify-center gap-[8px] rounded-[16px] border border-dashed border-[#DBCDBA] bg-[#F4ECE1] text-[#B0A290]">
                <svg className="h-[30px] w-[30px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 21" />
                </svg>
                <span className="text-[13.5px]">Foto · pintando con témperas</span>
              </a>
              <div className="mt-[16px] flex items-center gap-[18px] border-t border-[#F0E6D8] pt-[14px]">
                <span className="flex items-center gap-[7px] font-bold text-[14px] text-[#E0654A]">
                  <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="#E0654A" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
                  </svg>
                  5
                </span>
                <a href="#" className="flex items-center gap-[7px] font-bold text-[14px] text-[#94887B]">
                  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
                  </svg>
                  2
                </a>
                <span className="flex-1" />
                <a href="#" className="font-extrabold text-[14px] text-[#C5503A]">Editar</a>
              </div>
            </article>

            <article className="rounded-[20px] border border-[#ECE0D0] bg-[#FFFDF9] p-[20px] px-[22px] shadow-[0_4px_16px_-12px_rgba(120,90,60,0.5)]">
              <div className="mb-[14px] flex items-center gap-[12px]">
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#CCD8F4] text-[#4E72C8]">
                  <svg className="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-fredoka text-[16.5px] font-semibold text-[#3F362E]">Anuncio general</div>
                  <div className="text-[12.5px] text-[#A89A8B]">07:50 · publicado por vos</div>
                </div>
                <div className="flex items-center gap-[7px] rounded-full bg-[#CCD8F4] px-[12px] py-[6px]">
                  <span className="h-[8px] w-[8px] rounded-full bg-[#4E72C8]" />
                  <span className="text-[12px] font-extrabold tracking-[0.5px] text-[#4E72C8]">ANUNCIO</span>
                </div>
              </div>
              <div className="mb-[10px] text-[12.5px] text-[#A89A8B]">Para: toda la sala</div>
              <p className="m-0 text-[15.5px] leading-[1.55] text-[#4A4038]">El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua.</p>
              <div className="mt-[16px] flex items-center gap-[18px] border-t border-[#F0E6D8] pt-[14px]">
                <span className="flex items-center gap-[7px] font-bold text-[14px] text-[#E0654A]">
                  <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="#E0654A" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
                  </svg>
                  8
                </span>
                <a href="#" className="flex items-center gap-[7px] font-bold text-[14px] text-[#94887B]">
                  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
                  </svg>
                  0
                </a>
                <span className="flex-1" />
                <a href="#" className="font-extrabold text-[14px] text-[#C5503A]">Editar</a>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
