import React from 'react';
import BreadCrumb from 'Components/BreadCrumb';
import Header from 'parts/Header';
import Curut from 'parts/partsAnimation/CategoryGm/filterGame';
import { useParams } from 'react-router';



export default function AllGames() {
    const {nama_project, id} = useParams();
    return (
        <section className="bg-purple-900 pt-10">
            <div className="container mx-auto">
                <Header />
            </div>
            <BreadCrumb list={[
                {url: "/games", name: "Games"},
                {url: `/games/${nama_project}/${id}`, name: "Category"}
            ]} />
            <Curut />
        </section>
    )
}
