import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Link, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const PreguntasFrecuentes = () => {

  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }


  return (
      <div style={{ maxWidth:'auto', maxHeight:'auto', marginBottom:105 }}>
        <Typography component={'div'} variant='h4' mt={2} align='center' style={{ fontFamily:'Roboto', fontSize:30, fontWeight:400}} gutterBottom>
          Preguntas Frecuentes Sistema de Citas Versión 2
        </Typography>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ paddingLeft:15, marginTop:40}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{ bgcolor: expanded === 'panel1' ? "#B4B7BA" : "#fff" }}
          >
            <Typography component={'div'} sx={{ width: '33%', flexShrink: 0 }}>
              <b>¿Qué es Citas versión 2?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'div'} style={{ paddingRight:70}}>
              El Poder Judicial del Estado de Coahuila de Zaragoza pone al servicio de la ciudadanía el Sistema de Citas que te permitirá agendar tu visita a nuestros órganos jurisdiccionales mediante una sencilla herramienta en línea. En la segunda versión mejoramos la seguridad de tus datos y los procesos internos para brindarte un mejor servicio.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ paddingLeft:15}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            sx={{ bgcolor: expanded === 'panel2' ? "#B4B7BA" : "#fff" }}
          >
            <Typography component={'div'} sx={{ width: '33%', flexShrink: 0 }}>
              <b>¿Cómo accedo a Citas versión 2?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'div'} gutterBottom>
              Puedes acceder a Citas Versión 2 a través de nuestro sitio oficial 
              <Link href='https://www.pjecz.gob.mx' style={{ textDecoration:'none', color:'#044180' }}> www.pjecz.gob.mx </Link>  
              y haz clic sobre el acceso directo de Citas,<br/> o bien directamente en 
              <Link href='https://citas.justiciadigital.gob.mx' style={{ textDecoration:'none', color:'#044180' }}> citas.justiciadigital.gob.mx</Link>
  
            </Typography>
            <Typography component={'div'}>
              Te puede interesar: 
              <ul>
                <li>
                  <Link href='#panel4bh-header' onClick={() => { setExpanded('panel4') }} style={{ textDecoration:'none', color:'#044180' }}> 
                    Si tenía cuenta en la versión anterior, ¿Cómo puedo iniciar sesión en Citas Versión 2?
                  </Link>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ paddingLeft:15}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            sx={{ bgcolor: expanded === 'panel3' ? "#B4B7BA" : "#fff" }}
          >
            <Typography component={'div'} sx={{ width: '50%', flexShrink: 0 }}>
              <b>¿Cómo crear una nueva cuenta en Citas versión 2?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <Typography component={'div'}>
                1.- Ve a <Link href='https://citas.justiciadigital.gob.mx' style={{ textDecoration:'none', color:'#044180' }}>citas.justiciadigital.gob.mx</Link>
              </Typography>
              <Typography component={'div'}>
                2.- Ingresa y haz clic en Quiero crear una nueva cuenta.
              </Typography>
              <Typography component={'div'} style={{ paddingRight:70}}>
                3.- Escribe tu nombre, CURP, número de teléfono celular, correo electrónico, acepta el aviso de privacidad y los términos y condiciones.
              </Typography>
              <Typography component={'div'} style={{ paddingRight:80}}>
                4.- Para terminar de crear la cuenta, debes de verificar tu cuenta a través de un mensaje que se envía a tu correo electrónico.
              </Typography>
              <Typography component={'div'}>
                5.- Crea tu contraseña y no la compartas con nadie.
              </Typography>
            </ul>
            <Typography component={'div'}>
              Te puede interesar:
              <ul>
                <li>
                  <Link href='#panel7bh-header' onClick={() => { setExpanded('panel7') }} style={{ textDecoration:'none', color:'#044180' }}>
                    Si no conozco mi CURP, ¿Cómo puedo obtenerla?
                  </Link>
                </li>
                <li>
                  <Link href='#panel8bh-header' onClick={() => { setExpanded('panel8') }} style={{ textDecoration:'none', color:'#044180' }}>
                    ¿Por qué no veo los mensajes que por correo electrónico deben de llegarme?
                  </Link>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ paddingLeft:15}} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{ bgcolor: expanded === 'panel4' ? "#B4B7BA" : "#fff" }}
          >
            <Typography component={'div'} sx={{ width: '65%', flexShrink: 0 }}>
              <b>Si tenía cuenta en la versión anterior, ¿Cómo puedo iniciar sesión en Citas Versión 2?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div name='contrasena'>

              <Typography component={'div'} style={{ paddingRight:70}}>
                Cuando inicies sesión en la Citas Versión 2 con tus datos registrados en la versión anterior, deberás de actualizar tu contraseña, 
                esto es necesario porque el cifrado de contraseñas es más fuerte y te brindará mayor seguridad de tus datos.
              </Typography>
            </div>
            <Typography component={'div'}>
              Te puede interesar:
              <ul>
                <li>
                  <Link href='#panel5bh-header' onClick={ () => { setExpanded('panel5') }} style={{ textDecoration:'none', color:'#044180' }}>
                    ¿Cómo puedo recuperar mi contraseña?
                  </Link>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ paddingLeft:15}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
            sx={{ bgcolor: expanded === 'panel5' ? "#B4B7BA" : "#fff" }}
          >
            <Typography component={'div'} sx={{ width: '65%', flexShrink: 0 }}>
              <b>¿Cómo puedo recuperar mi contraseña?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <Typography component={'div'}>
                1.- Ve a <Link href='https://citas.justiciadigital.gob.mx' style={{ textDecoration:'none', color:'#044180' }}> citas.justiciadigital.gob.mx </Link>
              </Typography>
              <Typography component={'div'}>
                2.- Haz clic en ingresar.
              </Typography>
              <Typography component={'div'}>
                3.- Ingresa tu correo electrónico con el cual ingresabas en la Versión anterior.
              </Typography>
              <Typography component={'div'}>
                4.- Confirma tu correo electrónico.
              </Typography>
              <Typography component={'div'}>
                5.- Haz clic sobre el CAPTCHA.
              </Typography>
              <Typography component={'div'}>
                6.- Haz clic en aceptar.
              </Typography>
              <Typography component={'div'}>
                7.- Recibirás un mensaje en tu correo electrónico, haz clic o copia el link.
              </Typography>
              <Typography component={'div'} style={{ paddingRight:60}}>
                8.- Cambia la contraseña la cual debe tener de 8 a 24 caracteres, comenzando con una letra y contener por lo menos una mayúscula y un número. Asegúrate de anotar y guardar tu contraseña en un lugar seguro.
              </Typography>
              <Typography component={'div'}>
                9.- Confirma la contraseña.
              </Typography>
              <Typography component={'div'}>
                10.- Haz clic sobre el CAPTCHA.
              </Typography>
              <Typography component={'div'}>
                11.- Haz clic en cambiar mi contraseña.
              </Typography>
            </ul>
            <Typography component={'div'}>
              Te puede interesar:
              <ul>
                <li>
                  <Link href='#panel8bh-header' onClick={() => { setExpanded('panel8') }} style={{ textDecoration:'none', color:'#044180' }}>
                    ¿Por qué no veo los mensajes que por correo electrónico deben de llegarme?
                  </Link>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{ paddingLeft:15}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
            sx={{ bgcolor: expanded === 'panel6' ? "#B4B7BA" : "#fff" }} 
          >
            <Typography component={'div'} sx={{ width: '70%', flexShrink: 0 }}>
              <b>Si ahora tengo una nueva dirección de correo electrónico, ¿Cómo puedo solicitar ese cambio?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'div'}>
              Envía un mensaje por correo electrónico a <b>citas@pjecz.gob.mx</b> con tu nombre completo, CURP, el correo anterior 
              <br/>y el nuevo correo para registrar.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{ paddingLeft:15}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
            sx={{ bgcolor: expanded === 'panel7' ? "#B4B7BA" : "#fff" }} 
          >
            <Typography component={'div'} sx={{ width: '50%', flexShrink: 0 }}>
              <b>Si no conozco mi CURP, ¿Cómo puedo obtenerla?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'div'}>
              Accede a <Link href='https://www.gob.mx/curp/' style={{ textDecoration:'none', color:'#044180' }}>www.gob.mx/curp/</Link> e ingresa los datos que te solicitan.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{ paddingLeft:15}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
            sx={{ bgcolor: expanded === 'panel8' ? "#B4B7BA" : "#fff" }} 
          >
            <Typography component={'div'} sx={{ width: '70%', flexShrink: 0 }}>
              <b>¿Por qué no veo los mensajes que por correo electrónico deben de llegarme?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'div'}>
              Ingresa a tu correo electrónico y revisa la bandeja de correo no deseados o spam.
            </Typography>
          </AccordionDetails>
        </Accordion>      

        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} style={{ paddingLeft:15}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9bh-content"
            id="panel9bh-header"
            sx={{ bgcolor: expanded === 'panel9' ? "#B4B7BA" : "#fff" }} 
          >
            <Typography component={'div'} sx={{ width: '50%', flexShrink: 0 }}>
              <b>¿Cuántas citas puedo generar en Citas Versión 2?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'div'}>
              Con la versión de Citas Versión 2 puedes agendar 30 citas, conforme pasen las citas, podrás volver a agendar más.
            </Typography>
          </AccordionDetails>
        </Accordion>  

        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} style={{ paddingLeft:15}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10bh-content"
            id="panel10bh-header"
            sx={{ bgcolor: expanded === 'panel10' ? "#B4B7BA" : "#fff" }} 
          >
            <Typography component={'div'} sx={{ width: '70%', flexShrink: 0 }}>
              <b>Por mi carga de trabajo, necesito agendar más citas que el límite del sistema ¿Qué debo hacer?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'div'} style={{ paddingRight:70}}>
              Enviar un mensaje por correo electrónico a <b>citas@pjecz.gob.mx</b> con tus datos (Nombre, correo electrónico) solicitando se puedan agendar más citas de la cantidad límite.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} style={{ paddingLeft:15}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel11bh-content"
            id="panel11bh-header"
            sx={{ bgcolor: expanded === 'panel11' ? "#B4B7BA" : "#fff" }} 
          >
            <Typography component={'div'} sx={{ width: '70%', flexShrink: 0 }}>
              <b>Agendé una cita usando la versión anterior y no la veo, ¿Qué puedo hacer?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'div'} style={{ paddingRight:70}}>
              Algunos datos no se migraron porque no cumplieron con los requisitos de la nueva versión. Por favor, accede a Citas Versión 2 y agenda nuevamente tu cita.
            </Typography>
            <br/>
            <Typography component={'div'}>
              Te puede interesar:
              <ul>
                <li>
                  <Link href='#panel2bh-header' onClick={() => { setExpanded('panel2') }} style={{ textDecoration:'none', color:'#044180' }}>
                    ¿Cómo ingreso a Citas versión 2? 
                  </Link>
                </li>
                <li>
                  <Link href='#panel4bh-header' onClick={() => { setExpanded('panel4') }} style={{ textDecoration:'none', color:'#044180' }}>
                    Si tenía cuenta en la versión anterior, ¿Cómo puedo entrar a Citas Versión 2?
                  </Link>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} style={{ paddingLeft:15}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel12bh-content"
            id="panel12bh-header"
            sx={{ bgcolor: expanded === 'panel12' ? "#B4B7BA" : "#fff" }} 
          >
            <Typography component={'div'} sx={{ width: '70%', flexShrink: 0 }}>
              <b>¿Con cuántos días de anticipación puedo generar una cita en el futuro?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'div'}>
              En Citas Versión 2 puedes agendar una cita hasta 90 días en el futuro, en días hábiles.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')} style={{ paddingLeft:15}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel13bh-content"
            id="panel13bh-header"
            sx={{ bgcolor: expanded === 'panel13' ? "#B4B7BA" : "#fff" }} 
          >
            <Typography component={'div'} sx={{ width: '70%', flexShrink: 0 }}>
              <b>¿Por qué no puedo agendar una cita para mañana o el siguiente día hábil?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'div'} style={{ paddingRight:70}}>
              Uno de los objetivos de Citas Versión 2 es garantizar un mejor servicio. para agendar una cita el día siguiente se deberá agendar antes de las 14:00 hrs. siempre y cuando haya disponibilidad en el horario, si intentas agendar una cita después de este horario te mostrará la fecha del segundo día hábil.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')} style={{ paddingLeft:15}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel14bh-content"
            id="panel14bh-header"
            sx={{ bgcolor: expanded === 'panel14' ? "#B4B7BA" : "#fff" }} 
          >
            <Typography component={'div'} sx={{ width: '50%', flexShrink: 0 }}>
              <b>¿Citas regresará a Poder en línea?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'div'} style={{ paddingRight:70}}>
              El Poder Judicial del Estado está en constante innovación para brindar un mejor servicio y garantizar la protección de tu información, en un futuro de nuevo Citas Versión 2 estará en Poder en línea.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} style={{ paddingLeft:15}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel15bh-content"
            id="panel15bh-header"
            sx={{ bgcolor: expanded === 'panel15' ? "#B4B7BA" : "#fff" }} 
          >
            <Typography component={'div'} sx={{ width: '50%', flexShrink: 0 }}>
              <b>¿Cómo puedo obtener soporte técnico?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'div'}>
              Escríbenos a <b>citas@pjecz.gob.mx</b>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
  )
}
