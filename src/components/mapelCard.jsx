import React from "react";

export default function MapelCard() {
  const ujianBerlangsung = {
    title: "Ujian - Matematika",
    date: "28 Jan 2025",
    time: "3 Jam setelah dimulai",
    progress: 100,
    progressLabel: "Sedang Berlangsung",
    image: "/img/MTK.png"
  };

  const riwayatUjian = [
    {
      title: "Ujian - Bahasa Indonesia",
      date: "25 Jan 2025",
      score: "85%",
      image: "/img/PKN.png"
    },
    {
      title: "Kuis Biologi",
      date: "20 Jan 2025",
      score: "80%",
      image: "/img/BIO.png"
    },
    {
      title: "Ujian - Kimia",
      date: "18 Jan 2025",
      score: "75%",
      image: "/img/kimia.png"
    }
  ];

  return (
    <div className="container mapel-card-container">
      <h5 className="fw-bold mb-3">Sedang Berlangsung</h5>
      <div className="mapel-card-section mb-4 d-flex align-items-center p-3 rounded" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          src={ujianBerlangsung.image}
          alt={ujianBerlangsung.title}
          width="100"
          height="100"
          className="rounded"
        />
        <div className="flex-grow-1 ms-3">
          <h6 className="fw-bold mb-1">{ujianBerlangsung.title}</h6>

          {/* Progress bar */}
          <div className="progress mb-1" style={{ height: "20px" }}>
            <div
              className="progress-bar bg-info text-dark fw-bold"
              role="progressbar"
              style={{ width: `${ujianBerlangsung.progress}%` }}
            >
              {ujianBerlangsung.progressLabel}
            </div>
          </div>

          <small className="text-muted">
            {ujianBerlangsung.date} • {ujianBerlangsung.time}
          </small>
        </div>

        <div className="ms-3">
          <button className="btn btn-success d-flex align-items-center gap-1">
            <i className="bi bi-play-fill"></i> Mulai
          </button>
        </div>
      </div>

      <h5 className="fw-bold mb-3">Riwayat</h5>
      {riwayatUjian.map((item, index) => (
        <div key={index} className="d-flex align-items-center p-3 mb-3 rounded" style={{ backgroundColor: "#f0f0f0" }}>
          <img
            src={item.image}
            alt={item.title}
            width="80"
            height="80"
            className="rounded"
          />
          <div className="flex-grow-1 ms-3">
            <h6 className="fw-bold mb-1">{item.title}</h6>
            <span className="badge bg-success mb-1">Selesai</span>
            <div>
              <small className="text-muted">{item.date}</small>
            </div>
            <div>
              <small className="fw-bold text-dark">
                Nilai: {item.score}
              </small>
            </div>
          </div>

          {/* Tombol */}
          <div className="ms-3">
            <button className="btn btn-light border d-flex align-items-center gap-1">
              <i className="bi bi-search"></i> Lihat Hasil
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
