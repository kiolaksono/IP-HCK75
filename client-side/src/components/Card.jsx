export default function Card({ data }) {
  return (
    <div className="card bg-white h- w-96 shadow-xl">
      <figure className="p-3">
        <img src={data.image ? data.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zv605IDYRA7f3I0IMFUy4BKP3ETSMleuJA&s'} className="bg-white h-72"  alt={data.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.productionYear ? `Production Year : ${data.productionYear}` : `Gender : ${data.gender}`}</p>
      </div>
    </div>
  );
}
