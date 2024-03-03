import React from "react";
import { Link } from "react-router-dom";


const biografis = [
    {
        nama: "Freyanashifa Jayawardana",
        foto: "/freya.jpg",
        deskripsi: "Freya Jayawardana bergabung dengan JKT48 pada tahun 2020 sebagai bagian dari Generasi ke-7. Sebelumnya, dia adalah seorang mahasiswa yang memiliki minat besar dalam dunia seni pertunjukan, terutama di bidang musik dan tari. Freya dikenal sebagai anggota yang enerjik dan memiliki bakat dalam menari dan bernyanyi."
    },
    {
        nama: "Azizi Shafa Asadel",
        foto: "/azizi.jpg",
        deskripsi: "Zee adalah salah satu anggota JKT48 yang memiliki kepribadian ceria dan energik. Dikenal dengan senyumannya yang menawan, Zee mampu menyajikan penampilan panggung yang memikat serta memiliki kemampuan dalam berbagai bidang, mulai dari menyanyi hingga menari. Keberaniannya dalam menghadapi tantangan dan dedikasinya terhadap grup membuatnya menjadi salah satu idola yang dicintai oleh penggemar JKT48."
    },
    {
        nama: "Reva Fidela Adel Pantjoro",
        foto: "/adel.jpg",
        deskripsi: "Adel atau Reva Fidela Adel Pantjoro adalah seorang penyanyi dan anggota grup idola JKT48 asal Indonesia. Dia bergabung dengan grup tersebut pada tahun 2018 dan telah menjadi salah satu anggota yang sangat disukai oleh penggemar. Adel dikenal karena keceriaannya, bakat vokalnya, dan dedikasinya dalam mempromosikan grup serta menghibur para penggemar melalui pertunjukan dan acara di berbagai platform."
    }, 
    {
        nama: "Angelina Christy",
        foto: "/christy.jpg",
        deskripsi: "Angelina Christy, yang dikenal dengan nama panggung Christy, adalah seorang penyanyi dan anggota grup idola JKT48 asal Indonesia. Ia bergabung dengan grup pada tahun 2019 sebagai bagian dari Generasi ke - 7. Christy dikenal sebagai salah satu anggota yang enerjik dan berbakat dalam menyanyi dan menari, serta aktif dalam berbagai kegiatan promosi dan pertunjukan grup."
    }
];


function Biografi({ nama, foto, deskripsi }) {
    return (
        <div className="mb-8 overflow-hidden bg-gray-100 border border-gray-300 rounded-lg shadow-lg md:flex md:items-center md:mb-16">
            <div className="mt-3 mb-3 ml-3 mr-3 md:w-1/3 md:mb-0 md:mr-8">
                <img src={foto} alt={nama} className="object-cover w-full mb-3 rounded-lg h-96 md:h-auto md:w-auto" />
            </div>
            <div className="md:w-2/3 md:pr-8 md:pt-2 md:pb-8">
                <h1 className="mb-4 text-3xl font-bold text-center md:text-left">BIOGRAFI</h1>
                <div className="mb-4 text-lg md:mb-8">
                    <p className="mb-2 ml-2 mr-2 font-semibold text-blue-600">Nama: {nama}</p>
                    <p className="ml-2 mr-2 text-gray-700 md:text-left">{deskripsi}</p>
                </div>
                <div className="text-center md:text-left">
                    <Link
                        to="/component/about"
                        className="inline-block px-4 py-2 mb-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 md:inline-block md:mx-0 md:mt-4"
                    >
                        Ke Halaman About
                    </Link>
                </div>
            </div>
        </div>
    );
}


function Home() {
    return (
        <div className="container px-4 mx-auto mt-8 mb-8 md:px-8">
          
            {biografis.map((biografi, index) => (
                <Biografi
                    key={index}
                    nama={biografi.nama}
                    foto={biografi.foto}
                    deskripsi={biografi.deskripsi}
                />
            ))}
        </div>
    );
}

export default Home;
