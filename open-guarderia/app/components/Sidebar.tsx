export default function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-[248px] shrink-0 flex-col overflow-y-auto border-r border-[#ECE0D0] bg-[#FFFDF9] px-[16px] py-[24px] md:flex">
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
  );
}
