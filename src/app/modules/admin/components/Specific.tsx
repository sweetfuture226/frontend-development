/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Plus from "../assets/pluss.png";
import Minus from "../assets/minus.svg";
import { Modal } from "antd";
import "antd/dist/antd.css";
import ModalAgent from "./AddAgentModal";

const SpecificNotes = () => {
  const [selected, setSelected] = useState<any>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const data = [
    {
      title: "Postcards - Agent uses different supplier",
      description:
        "He likes to order from luxurycards.com, and is already aware of the increased cost.",
    },
    {
      title: "What platforms are compatible?",
      description:
        "First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.",
    },
    { title: "Do I need a designer to use Metronic?", description: "" },
    { title: "How many people can it support?", description: "" },
    { title: "What do I need to do to start selling?", description: "" },
    { title: "How long is the warrianty?", description: "" },
    { title: "How much does Extended license cost?", description: "" },
    { title: "How fast is the installation?", description: "" },
  ];

  const showAgent = (o: any) => {
    const copySelected: any = [...selected];
    const index = copySelected.indexOf(o);
    if (index === -1) {
      copySelected.push(o);
    } else {
      copySelected.splice(index, 1);
    }
    setSelected(copySelected);
  };

  return (
    <div className="card notes">
      <div className="notes__contain">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center mb-2">
              <a
                href="#"
                className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
              >
                Agent Specific Notes
              </a>
            </div>
          </div>

          <div className="d-flex my-4">
            <a
              className="btn btn-sm btn-primary me-3"
              style={{
                backgroundColor: "#000",
                width: "123px",
                borderRadius: "6px",
              }}
              onClick={() => setIsModalVisible(true)}
            >
              Add Note
            </a>
          </div>
        </div>

        <ModalAgent
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
        <h2>
          First, a disclaimer – the entire process of writing a blog post often
          takes more than a couple of hours, even if you can type eighty words
          as per minute and your writing skills are sharp.
        </h2>

        <div className="row agent">
          {data.map((o: any, index: any) => (
            <div className="col-xl-6 box-agnet" key={index}>
              <h3 onClick={() => showAgent(index)}>
                <img src={selected.includes(index) ? Minus : Plus} />
                {o.title}
              </h3>
              {selected.includes(index) && <p>{o.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificNotes;
