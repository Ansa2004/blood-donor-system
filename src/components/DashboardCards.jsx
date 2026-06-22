function DashboardCards() {
  const cards = [
       {
  title:"Total Donors",
  value:"125"
 },
 {
  title:"Available",
  value:"95"
 },
 {
  title:"Requests",
  value:"32"
 },
 {
  title:"Donations",
  value:"320"
 }
  ];

  return (
    <div className="row">

      {cards.map((card, index) => (
        <div className="col-md-3 mb-3" key={index}>
          <div className={`card border-0 shadow-sm bg-${card.color} bg-opacity-10`}>
            <div className="card-body text-center">
              <h3>{card.value}</h3>
              <h6>{card.title}</h6>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default DashboardCards;