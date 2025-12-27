"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/IMG_2364.png",
  "/TV.jpg",
  "/Kitchen.jpg",
  "/Hall.png",
  "/Room 1.png",
  "/Room 2.jpg",
  "/Washroom.jpg",
];

const itemStyle = {
  background: "rgba(255,255,255,0.15)",
  padding: "8px",
  borderRadius: "8px",
  textAlign: "left",
  fontSize: "11px",
  flex: "1 1 30%",
  boxSizing: "border-box",
  lineHeight: "1",
  fontFamily: "sans-serif",
};

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // ⏱ auto slide every 4 sec

    return () => clearInterval(interval);
  }, []);

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
          fontSize: "11px",
          lineHeight: "1.5",
        }}
      >
        {/* AUTO SLIDING BACKGROUND IMAGE */}
        <Image
          src={images[current]}
          alt="PG Background"
          fill
          priority
          style={{
            objectFit: "fill",
            transition: "opacity 1s ease-in-out",
          }}
        />

        {/* DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
          }}
        />

        {/* CONTENT (UNCHANGED) */}
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
              maxHeight: "660px",
              background: "rgba(0,0,0,0.5)",
              padding: "25px",
              borderRadius: "75px",
              fontFamily: "sans-serif",
            }}
          >
            <h1>Elite Living Men's PG </h1>

            <p><b>
              Semi Furnished shared rooms for Bachelor men, Rooms are spacious having attached Toilets & Balconies, Common Kitchen, Living room & Dining area.
              <br />
              PG is located 200 meters from Srirampura Metro Station & Bus Stop, with ATMs, Restaurants, and Markets within 300 meters.
              The PG is situated in a peaceful Residential area. The property is under CCTV surveillance for security.
            </b></p>

            <h2><strong> CONTACT US </strong></h2>

            <h3>
              📞 <b>Call : </b>
              <a href="tel:+919448229630" style={{ color: "white" }}>
                +91 94482 29630
              </a>
              <br /><br />

              💬 <b style={{color:"green"}}>WhatsApp : </b>
              <a
                href="https://wa.me/919448229630"
                target="_blank"
                style={{ color: "white" }}
              >
                +91-9448229630
              </a>

              <br /><br />

              📍 <b>Address : </b>
              <a
                href="https://maps.app.goo.gl/Hw1GqtRayyZRWfkK9"
                target="_blank"
                style={{ color: "white" }}
              >
                1539/81, Sri Amba Krupa, 1st Floor, 4th Cross, Nagappa Block,
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
              <li style={itemStyle}><b>✔ Almirah</b></li>
              <li style={itemStyle}><b>✔ Beds & Mattresses</b></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
