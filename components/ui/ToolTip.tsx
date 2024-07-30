'use client';
const Tooltip = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => (
  <div className="relative group  rounded-full">
    {children}
    <div className="absolute hidden group-hover:inline w-max top-16 left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-black-100 border border-white/[0.2] text-white text-sm rounded-lg transition-all duration-300 p-2 whitespace-no-wrap z-10">
      {text}
    </div>
  </div>
);

export default Tooltip;
