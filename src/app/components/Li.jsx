const Li = ({ liText, href, isActive }) => {
  return (
    <li className="list-none">
      <a
        href={href}
        className={`relative text-sm font-lato transition
          ${isActive ? "text-[#ff7a00]" : "text-white hover:text-[#ff7a00]"}`}
      >
        {liText}

        {/* underline */}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-[#ff7a00] transition-all
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
        />
      </a>
    </li>
  );
};

export default Li;
