import React from 'react';
import Header from '../components/Header';
import { DSidebar } from '../components/Sidenav';
import { ChangeEmail } from '../components/userconf/ChangeEmail';
import { ChangePassword } from '../components/userconf/ChangePassword';
import { ChangeUsername } from '../components/userconf/ChangeUsername';



function Configuration() {
  

    return (
        //Pagina
    <div className='full-page '>
        <Header/> 
      <div className='logros-content '>
            <DSidebar>
            </DSidebar>
            <main className='w-auto grow min-h-full flex justify-center flex-col '>


              <ChangeUsername></ChangeUsername>
              <ChangeEmail></ChangeEmail>
              <ChangePassword></ChangePassword>



            </main>
        </div>

    </div>

    )
}

export default Configuration;