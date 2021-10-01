import React from 'react';
import BreadCrumb from 'Components/BreadCrumb';
import Header from 'parts/Header';
import Curut from 'parts/partsAnimation/CategoryGm/filterGame';
import { useParams } from 'react-router';
import Footer from 'parts/Footer';


export default function AllGames() {
    const {nama_project, id} = useParams();
    return (
        <section className="bg-purple-900 pt-10">
            <div className="container mx-auto">
                <Header />
            </div>
            <BreadCrumb list={[
                {url: "/", name: "Games"},
                {url: `/games/${nama_project}/${id}`, name: `${nama_project}`}
            ]} />
            <Curut />
            <div className="py-12 bg-purple-800 mt-24">
                <Footer />
            </div>
        </section>
    )
}
