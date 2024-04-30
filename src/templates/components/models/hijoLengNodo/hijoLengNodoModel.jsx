// Import necessary React components and hooks
import React, { useCallback, useState } from 'react';
import { Handle } from 'reactflow';

// Functional component RegistrarRetos
const LenguajeNodoModel = ({data}) => {
  return (
    <div className='w-146'>
      <label>
        <div className="bg-zinc-950 border-4 border-rose-200 grid text-white ">
          <div className="border-b-4 border-rose-100 grid grid-cols-4">
            <div className="grid grid-rows-3 col-span-3 text-start">
              <div className="border-b-4 border-rose-100 row-span-2 grid items-end">
                  <p className="text-4xl font-bold p-2 text-rose-300 h-fit">{data.nombre}</p>
              </div>

              <div className="p-2">
                  <p className="text-xl font-bold">{data.resumen}</p>
              </div>
            </div>
            <div className="border-s-4 border-rose-100 bg-rose-400 grid justify-center align-middle items-center p-2">
                  <img className='bg-rose-200 rounded-full p-2' src={data.codigoQR} alt="Código QR" width="100" />
            </div>
          </div>
          <div className="grid grid-cols-4 text-md">
            <div className="col-span-3 p-2">
              <p className='text-4xl codigoBarras'>{data.codigoBarras}</p>
            </div>
            <div className="border-s-4 border-rose-100 col-span-1 p-2 text-center font-bold text-2xl">
              <p>{data.serial}</p>
            </div>
          </div>
        </div>
      </label>
      <Handle
      className='border-rose-200 bg-rose-600 rounded-none h-4 w-4'
        type="target"
        position={data.handleDirection}
        isConnectable
        isValidConnection={(connection) => connection.target === target}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      
    </div>
  );
};

// Export RegistrarRetos component
export default LenguajeNodoModel;
