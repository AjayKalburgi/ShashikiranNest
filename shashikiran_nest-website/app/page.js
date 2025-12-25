import Image from "next/image";

const itemStyle = {
  background: "rgba(255,255,255,0.15)",
  padding: "8px",
  borderRadius: "8px",
  textAlign: "left",
  fontSize: "11px",
  flex: "1 1 30%", 
  boxSizing: "border-box",
  lineHeight: "1",
  fontFamily: "sans-serif"
};

export default function Home() {
  return (
    <main style={{ margin: 0 }}>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          color: "white",
          textAlign: "center",
          borderRadius: "12px",
          fontSize: "11px",
          lineHeight: "1.5",
         }}
      >
        <Image
          src="/IMG_2364.png"
          alt="Sunrise PG Building"
          fill
          priority
          style={{ objectFit: "fill" }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              maxWidth: "500px",
              maxHeight: "520px",
              color: "white",
              textAlign: "center",
              background: "rgba(0,0,0,0.5)",
              padding: "25px",
              borderRadius: "75px",
              lineHeight: "20px",
              fontFamily: "sans-serif"            
            }}
          >
            <h1>Shashikiran Nest - Men's PG</h1>

            <p><b>
              Semi-furnished shared rooms for achelor men, spread across a spacious 2000 sqft area,
              Rooms have attached Toilets & Balconies, Common Kitchen, Living room & Dining area.
              <br /> 
              PG is 200 meters from Srirampura Metro Station & Bus Stop, with ATMs, restaurants, and markets within 300 meters. 
              The PG is situated in a peaceful residential area. The property is under CCTV surveillance for security.
            </b></p>

            <h2><strong> CONTACT US </strong></h2>

            <h3> 
              📞 <b>Call : </b>    
              <strong><a href="tel:+919448229630" style={{ color: "white" }}>
                  +91 94482 29630
              </a></strong>
              <br></br><br />

            
              💬 <b>WhatsApp : </b>   
              <b><a
                href="https://wa.me/919448229630"
                target="_blank"
                style={{ color: "white" }}
              >
                +91-9448229630
              </a></b>
              <br />

           <br></br>
              📍{" "}<b>Address : </b>   
              <a
                href="https://maps.app.goo.gl/Hw1GqtRayyZRWfkK9"
                target="_blank"
                style={{ color: "white" }}
              >
                1539/81, Sri Amba Krupa, 1st Floor, Nagappa Block,
                Srirampuram (Near Srirampuram Metro Station),
                Bengaluru, Karnataka – 560021
              </a>
            </h3>

            <h2>Facilities / Services</h2>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                justifyContent: "space-between",
                lineHeight: "8px"
              }}
            >
              <li style={itemStyle}><b>✔ High Speed Wi-Fi</b></li>
              <li style={itemStyle}><b>✔ Refrigerator</b></li>
              <li style={itemStyle}><b>✔ TV</b></li>
              <li style={itemStyle}><b>✔ Washing Machine</b></li>
              <li style={itemStyle}><b>✔ House Keeping</b></li>
              <li style={itemStyle}><b>✔ Gas Stove</b></li>
              <li style={itemStyle}><b>✔ Water Purifier</b></li>
              <li style={itemStyle}><b>✔ Geyser</b></li>
              <li style={itemStyle}><b>✔ 24×7 Water Supply</b></li>
              <li style={itemStyle}><b>✔ Waste Disposal</b></li>
              <li style={itemStyle}><b>✔ Cupboards</b></li>
              <li style={itemStyle}><b>✔ Beds & Mattresses</b></li>
            </ul>

            
          </div>
        </div>
      </div>
    </main>
  );
}
