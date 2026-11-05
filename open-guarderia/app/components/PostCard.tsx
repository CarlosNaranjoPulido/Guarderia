type PostVariant = "logro" | "actividad" | "anuncio";

type PostCardProps = {
  variant: PostVariant;
  title: string;
  time: string;
  audience: string;
  text: string;
  likes: number;
  comments: number;
  hasPhoto?: boolean;
};

const badgeStyles: Record<PostVariant, { container: string; dot: string; label: string; text: string }> = {
  logro: {
    container: "bg-[#CFEBD8]",
    dot: "bg-[#3E9B6C]",
    label: "LOGRO",
    text: "text-[#3E9B6C]",
  },
  actividad: {
    container: "bg-[#C7E7F1]",
    dot: "bg-[#2E89A6]",
    label: "ACTIVIDAD",
    text: "text-[#2E89A6]",
  },
  anuncio: {
    container: "bg-[#CCD8F4]",
    dot: "bg-[#4E72C8]",
    label: "ANUNCIO",
    text: "text-[#4E72C8]",
  },
};

export default function PostCard({ variant, title, time, audience, text, likes, comments, hasPhoto = false }: PostCardProps) {
  const badge = badgeStyles[variant];
  const isAnnouncement = variant === "anuncio";

  return (
    <article className="rounded-[20px] border border-[#ECE0D0] bg-[#FFFDF9] p-[20px] px-[22px] shadow-[0_4px_16px_-12px_rgba(120,90,60,0.5)]">
      <div className="mb-[14px] flex items-center gap-[12px]">
        {isAnnouncement ? (
          <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#CCD8F4] text-[#4E72C8]">
            <svg className="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6" />
            </svg>
          </div>
        ) : (
          <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#A9D9E8] font-fredoka text-[17px] font-semibold text-[#1F7A93]">{title[0]}</div>
        )}
        <div className="min-w-0 flex-1">
          <div className="font-fredoka text-[16.5px] font-semibold text-[#3F362E]">{title}</div>
          <div className="text-[12.5px] text-[#A89A8B]">{time}</div>
        </div>
        <div className={`flex items-center gap-[7px] rounded-full px-[12px] py-[6px] ${badge.container}`}>
          <span className={`h-[8px] w-[8px] rounded-full ${badge.dot}`} />
          <span className={`text-[12px] font-extrabold tracking-[0.5px] ${badge.text}`}>{badge.label}</span>
        </div>
      </div>
      <div className="mb-[10px] text-[12.5px] text-[#A89A8B]">{audience}</div>
      <p className="m-0 text-[15.5px] leading-[1.55] text-[#4A4038]">{text}</p>
      {hasPhoto ? (
        <a href="#" className="mt-[14px] flex h-[200px] flex-col items-center justify-center gap-[8px] rounded-[16px] border border-dashed border-[#DBCDBA] bg-[#F4ECE1] text-[#B0A290]">
          <svg className="h-[30px] w-[30px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 21" />
          </svg>
          <span className="text-[13.5px]">Foto · pintando con témperas</span>
        </a>
      ) : null}
      <div className="mt-[16px] flex items-center gap-[18px] border-t border-[#F0E6D8] pt-[14px]">
        <span className="flex items-center gap-[7px] font-bold text-[14px] text-[#E0654A]">
          <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="#E0654A" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
          {likes}
        </span>
        <a href="#" className="flex items-center gap-[7px] font-bold text-[14px] text-[#94887B]">
          <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
          </svg>
          {comments}
        </a>
        <span className="flex-1" />
        <a href="#" className="font-extrabold text-[14px] text-[#C5503A]">Editar</a>
      </div>
    </article>
  );
}
