import React from "react"
import MapelCard from "../../../components/mapelCard"
export default function Home() {
    return (
        <>
           <div className="homepage">
            <div className="row d-flex w-100 flex-column gap-2">
            <div className="col jumbotron d-flex flex-column gap-4">
           <div className="col">
             <h5 className="text-center p-2 text-white">11 IPA 2</h5>
           </div>
            <div className="col d-flex  p-2 justify-content-bettween">
                <div className="col">
                <button className="btn-transparent">Riwayat Pengerjaan <img src="/img/icon1.svg"className="iconbtn"/></button>
                </div>
                <div className="col">
                    <div className="input-group mb-3">
                    <input type="text" className="form-control serchbar" placeholder="Search...." aria-label="Search...." aria-describedby="basic-addon1"/>
                    <span className="input-group-text serchbar-btn" id="basic-addon1"><i className="bi bi-search"></i></span>
                    </div>
                </div>
            </div>
            </div>
<MapelCard></MapelCard>
            </div>
           </div>
        </>
    )
}