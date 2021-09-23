import React from 'react';
import ApiFaq from 'parts/Faq/Api/Faq.json';
import Faq from 'parts/Faq/Parent';
import Bounce from 'react-reveal/Bounce';

export default function FAQ() {
    return (
        <section className="my-20 w-3/4 container mx-auto">
            <Bounce left>
                <h6 className="flex justify-center font-medium text-gray-300 text-2xl mb-4">
                    FAQ
                </h6>
            </Bounce>
            {
                <Faq previews={ApiFaq?.data} />
            }
        </section>
    )
}
