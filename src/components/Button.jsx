const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-zinc-700 rounded-full text-white border-zinc-700 border-2 max-md:w-full">
        {label}
        <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full bg-white w-5 h-5"
        />

    </button>
  );
}

export default Button