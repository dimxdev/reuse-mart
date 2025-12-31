function TestimoniCard(props) {
  const { rating, ket1, ket2, customer } = props;

  return (
    <div className="py-10 bg-tema-100 shadow-md w-full rounded-md flex flex-col justify-center items-center gap-4 group hover:scale-105 hover:shadow-xl cursor-pointer transition-all duration-300">
      <div className="group-hover:scale-105 transition-all duration-400 text-2xl font-bold text-tema-600 tracking-tight">
        {rating}
      </div>
      <div className="text-center text-tema-900 italic">
        <h1>{ket1}</h1>
        <h1>{ket2}</h1>
      </div>
      <div className="font-bold text-tema-600">- {customer}</div>
    </div>
  );
}

export default TestimoniCard;
