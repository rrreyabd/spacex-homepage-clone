const Button = ({target, text}) => {
  return (
    <a 
        href={target}
        className="btn-custom border-2 border-white py-4 px-16 w-fit font-custom-bold text-sm hover:text-black transition-all duration-300 ease-in-out relative bg-transparent z-10"
    >
        {text}
    </a>
  )
}

export default Button