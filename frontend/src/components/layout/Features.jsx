function Features(props) {
  const { judul, ket1, ket2, children } = props;

  return (
    <div className="py-10 bg-tema-100 shadow-md w-full rounded-md flex flex-col justify-center items-center gap-2 group hover:scale-105 hover:shadow-xl transition-all duration-400">
      <div className="bg-tema-400 px-4 py-4 rounded-xl group-hover:rotate-12 transition-all duration-400">
        {children}
      </div>
      <div className="text-2xl font-playfair-display font-bold text-tema-900">
        {judul}
      </div>
      <div className="text-center text-tema-600">
        <h1>{ket1}</h1>
        <h1>{ket2}</h1>
      </div>
    </div>
  );
}

export default Features;
