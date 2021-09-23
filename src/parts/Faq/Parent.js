import React from "react";
import Accordion from './Component/Ancordions';
import Item from './Component/Items';
import Zoom from 'react-reveal/Zoom';

export default function Faq({ previews }) {
  console.log(previews)
  return (
    <Zoom delay={1000}>
      <div className="accordion">
        <Accordion>
          {(Active, Toggle) => {
            return previews.map((item, index) => {
              return (
              <Item
                id={item?.id}
                name={item?.name}
                child={item?.tanggapan}
                active={Active}
                toggle={Toggle}
                key={item?.id}
              >
                <div className="relative flex items-center pr-4 pl-8 pb-5">
                  <span className="text-teal-500 text-sm">{item?.tanggapan?.name}</span>
                </div>
              </Item>
              )
            });
          }}
        </Accordion>
      </div>
    </Zoom>
  );
}