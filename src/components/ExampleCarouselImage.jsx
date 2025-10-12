// components/ExampleCarouselImage.jsx
function ExampleCarouselImage({ image, title, price, date, days }) {
  return (
    <>
    <div
      className="card"
      style={{
        width: '18rem',
        margin: '0 10px',
        border: 'none',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ height: '180px', objectFit: 'cover', borderRadius: "12px 12px 0 0" }}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title" style={{ fontWeight: 600 ,color:"#05155dff"}}>{title}</h5>
        <div style={{ color: "#4677e2ff", fontWeight: 700, float: "right" }}>${price}</div>
        <div style={{ marginTop: 8, color: "rgba(47, 47, 148, 1)" }}>
          <span style={{ background: "white", padding: "2px 8px", borderRadius: "6px", fontSize: 12 }}>{date}</span>
          <span style={{ marginLeft: 12, fontSize: 13, fontWeight: 600 }}>{days} Days</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default ExampleCarouselImage;
