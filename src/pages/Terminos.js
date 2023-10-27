import Header from '../components/Header';
import '../css/tstyles.css';
import React from 'react';

const Terminos = () => {
  return (
    <div className="TerminosContainer">
      <Header />
      <section className="TerminosSection">
        <div className="TerminosList">
          <ul className="TerminosItems">
            <li className="TerminosItem">
              <h4 className="TerminosTitle">1. Aceptación de los Términos y Condiciones</h4>
              <h5 className="TerminosDescription">Al acceder y utilizar este sitio web, usted acepta cumplir con los siguientes términos y condiciones. Esto incluye el compromiso de seguir todas las reglas y regulaciones establecidas en este documento.</h5>
            </li>
            <li className="TerminosItem">
              <h4 className="TerminosTitle">2. Uso Aceptable del Sitio Web</h4>
              <h5 className="TerminosDescription">Usted se compromete a utilizar este sitio web de manera responsable y ética. Esto incluye el compromiso de seguir todas las reglas y regulaciones establecidas en este documento, así como respetar a otros usuarios y el propósito del sitio. Los siguientes compromisos se aplican:</h5>
              <ul className="TerminosSubItems">
                <li className="TerminosSubItem">
                  <h5 className="TerminosSubTitle">Comportamiento Respetuoso:</h5>
                  <h6 className="TerminosSubDescription">Usted se compromete a tratar a todos los usuarios con respeto y cortesía en todas las interacciones en el sitio. No se tolerarán comportamientos ofensivos, abusivos o discriminatorios.</h6>
                </li>
                <li className="TerminosSubItem">
                  <h5 className="TerminosSubTitle">No Divulgación de Información Personal:</h5>
                  <h6 className="TerminosSubDescription">No divulgará información personal de otros usuarios sin su consentimiento expreso. Esto incluye, pero no se limita a, direcciones de correo electrónico, números de teléfono u otra información privada.</h6>
                </li>
                <li className="TerminosSubItem">
                  <h5 className="TerminosSubTitle">No Spam ni Comportamiento Malicioso:</h5>
                  <h6 className="TerminosSubDescription">No utilizará el sitio para enviar correo no deseado, publicidad no solicitada o participar en actividades maliciosas, como el phishing o la distribución de software malicioso.</h6>
                </li>
                <li className="TerminosSubItem">
                  <h5 className="TerminosSubTitle">No Suplantación de Identidad:</h5>
                  <h6 className="TerminosSubDescription">No se hará pasar por otra persona o entidad, incluyendo otros usuarios, administradores del sitio o cualquier figura pública.</h6>
                </li>
                <li className="TerminosSubItem">
                  <h5 className="TerminosSubTitle">Denuncia de Comportamiento Inapropiado:</h5>
                  <h6 className="TerminosSubDescription">Si observa o es víctima de comportamientos inapropiados por parte de otros usuarios, se compromete a denunciarlo al equipo de administración del sitio para su revisión y acción apropiada.</h6>
                </li>
              </ul>
            </li>
            <li className="TerminosItem">
              <h4 className="TerminosTitle">3. Privacidad y Manejo de Datos Personales</h4>
              <h5 className="TerminosDescription">Nuestra política de privacidad está diseñada para proteger su información personal y garantizar que se maneje de manera segura y ética. A continuación, se detallan nuestras prácticas de privacidad y conservación de datos:</h5>
              <ul className="TerminosSubItems">
                <li className="TerminosSubItem">
                  <h5 className="TerminosSubTitle">Recopilación de Datos:</h5>
                  <h6 className="TerminosSubDescription">Recopilamos información personal, como nombre, dirección de correo electrónico y otra información relevante, únicamente con su consentimiento y con el propósito de proporcionarle servicios y mejorar su experiencia en nuestro sitio.</h6>
                </li>
                <li className="TerminosSubItem">
                  <h5 className="TerminosSubTitle">Uso de Datos:</h5>
                  <h6 className="TerminosSubDescription">Los datos personales se utilizan para la administración de cuentas, la prestación de servicios, la comunicación con los usuarios y la personalización de la experiencia en el sitio. No compartiremos su información con terceros no autorizados.</h6>
                </li>
                <li className="TerminosSubItem">
                  <h5 className="TerminosSubTitle">Conservación de Datos:</h5>
                  <h6 className="TerminosSubDescription">Mantendremos su información personal durante el tiempo que sea necesario para los fines para los que fue recopilada. La duración puede variar según la finalidad, la legislación aplicable y los requisitos empresariales. Conservamos los datos durante un período razonable después de que los usuarios cierren sus cuentas.</h6>
                </li>
                <li className="TerminosSubItem">
                  <h5 className="TerminosSubTitle">Seguridad de Datos:</h5>
                  <h6 className="TerminosSubDescription">Implementamos medidas de seguridad para proteger sus datos personales contra accesos no autorizados, pérdida, divulgación, alteración y destrucción. Estas medidas incluyen el cifrado de datos y el acceso limitado a empleados autorizados.</h6>
                </li>
                <li className="TerminosSubItem">
                  <h5 className="TerminosSubTitle">Derechos del Usuario:</h5>
                  <h6 className="TerminosSubDescription">Usted tiene derechos sobre sus datos personales, que incluyen el acceso, la corrección, la eliminación y la portabilidad de sus datos. Si desea ejercer estos derechos o tiene preguntas sobre su información, comuníquese con nosotros.</h6>
                </li>
                <li className="TerminosSubItem">
                  <h5 className="TerminosSubTitle">Consentimiento:</h5>
                  <h6 className="TerminosSubDescription">Al utilizar nuestro sitio, usted otorga su consentimiento para la recopilación y el procesamiento de sus datos personales de acuerdo con esta política de privacidad.</h6>
                </li>
              </ul>
            </li>
            <li className="TerminosItem">
              <h4 className="TerminosTitle">4. Contacto</h4>
              <h5 className="TerminosDescription">Si tiene alguna pregunta o inquietud sobre estos términos y condiciones, puede ponerse en contacto con nosotros en <a href="mailto:h6931495@gmail.com" className='Referencia'>h6931495@gmail.com</a>.</h5>
            </li>
            <li className="TerminosItem">
              <h4 className="TerminosTitle">5. Política Anti-Spam</h4>
              <h5 className="TerminosDescription">Está terminantemente prohibido el envío de spam o cualquier forma de comunicación no deseada a través de este sitio web. Esto incluye el envío de correos electrónicos no solicitados, publicidad no autorizada o cualquier otro tipo de mensajes no deseados. Cualquier usuario que viole esta política estará sujeto a medidas disciplinarias, que pueden incluir la suspensión o eliminación de la cuenta.</h5>
            </li>
            <li className="TerminosItem">
              <h4 className="TerminosTitle">6. Propiedad Intelectual</h4>
              <h5 className="TerminosDescription">Nosotros poseemos y retenemos todos los derechos de propiedad intelectual sobre el contenido y los materiales presentes en este sitio web. Esto incluye, pero no se limita a, derechos de autor, marcas comerciales y otros derechos. Usted se compromete a respetar estos derechos y no podrá copiar, distribuir, transmitir o crear trabajos derivados basados en el contenido de este sitio sin nuestro consentimiento expreso por escrito.</h5>
            </li>
            <li className="TerminosItem">
              <h4 className="TerminosTitle">7. Suspension o Terminación de Cuentas</h4>
              <h5 className="TerminosDescription">Nos reservamos el derecho de suspender o cancelar cuentas de usuario en cualquier momento y por cualquier motivo, incluyendo la violación de estos términos y condiciones, actividades ilegales o comportamiento inapropiado. La suspensión o cancelación de cuentas puede ser temporal o permanente, a nuestra entera discreción.</h5>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Terminos;

