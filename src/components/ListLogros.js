import "./list.css";
import React,{ useState,useEffect } from "react";
import axios from "axios";

export const ListLogros = () => {
  const [goals,setGoals]=useState([]);

  useEffect(() => {
      // Obtener la lista de logros
      axios
        //.get("http://localhost:3000/books")
        .get("http://localhost:3000/goal")
  
        .then((response) => {
          setGoals(response.data.goals);
        })
        .catch((error) => {
          console.error("Error al obtener los logros:", error);
        });
    }, []);


const [showModal, setShowModal] = React.useState(false);


  return (

    <div className="contenedor">
      <h2>Logros</h2>
    <div className='customer-form'>
      <ul className="listicons">
        <img src="./images/logros/l1.png" className="icon" alt="logro" />
        <img src="./images/logros/l2.png" className="icon" alt="logro" />
        <img src="./images/logros/l3.png" className="icon" alt="logro" />
        <img src="./images/logros/l4.png" className="icon" alt="logro" />
        <img src="./images/logros/l5.png" className="icon" alt="logro" />
        <img src="./images/logros/l6.png" className="icon" alt="logro" />
        <img src="./images/logros/l7.png" className="icon" alt="logro" />
        <img src="./images/logros/next.png" className="icon" alt="logro"onClick={() => setShowModal(true)} />
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl " >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Lista de Logros:
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
      <ul className="flex-col ">
            {goals.map((goal) => (
          <li key={goal.id} className="mb-3">
            {goal.id}.-  <span className="font-semibold"> "{goal.name}" </span>: {goal.description}.
              
          </li>
        ))}
      </ul>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </ul>

    </div>

    </div>
  )
}
