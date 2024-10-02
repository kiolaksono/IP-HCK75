export default function Card({ data }) {
  return (
    <div className="card bg-white h-11/12 w-96 shadow-xl">
      <figure className="p-3">
        <img src={data.image} className="bg-white max-h-72"  alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>Production Year : {data.productionYear}</p>
      </div>
    </div>
  );
}
