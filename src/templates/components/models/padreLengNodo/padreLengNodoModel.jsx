import React, { useCallback, useState } from 'react';
import { Handle } from 'reactflow';

const padreLengNodoModel = ({data}) => {
  return (
    <div>
      <label>
        <div className=" border-4 bg-stone-50 border-stone-800 rounded-full text-center p-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
            <path fill="rgb(12, 10, 9)" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path>
            <path fill="rgb(12, 10, 9)" d="M9.293 9.293 5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z"></path>
          </svg>

        </div>  
      </label>
      <Handle
        className='border-rose-200 bg-rose-600 rounded-none h-4 w-4'
        id='rightHandle'
        type="source"
        position="right"
        isConnectable
        isValidConnection={(connection) => connection.source === source}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <Handle
        className='border-rose-200 bg-rose-600 rounded-none h-4 w-4'
        id='topHandle'
        type="source"
        position="top"
        isConnectable
        isValidConnection={(connection) => connection.source === source}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <Handle
        className='border-rose-200 bg-rose-600 rounded-none h-4 w-4'
        id='leftHandle'
        type="source"
        position="left"
        isConnectable
        isValidConnection={(connection) => connection.source === source}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <Handle
        className='border-rose-200 bg-rose-600 rounded-none h-4 w-4'
        id='bottomHandle'
        type="source"
        position="bottom"
        isConnectable
        isValidConnection={(connection) => connection.source === source}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      
    </div>
  );
};

// Export RegistrarRetos component
export default padreLengNodoModel;
