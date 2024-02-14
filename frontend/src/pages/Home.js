import React from "react";
import Posts from "../components/Posts";


const Hero = () => {
    return (
        <section className="overflow-hidden" style={{display: 'grid', alignItems: 'center', padding: '70px 0'}}>
            <div className="container">
                <div className="r">
                    <div className="col-lg-9 col-md-11 mx-auto text-center position-relative">
                        <h1 className="text-dark mb-0">Welcome to BlogBeat! Tech and Life</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
function Home() {
    return (
        <div className="over-all">
            <Hero />
            <Posts />
        </div>
    );
  }

export default Home
