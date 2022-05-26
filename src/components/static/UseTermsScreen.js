import React from 'react'
import { Container, Typography } from '@mui/material'
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined'

import commonSX from '../../theme/CommonSX'


const UseTermsScreen = () => {

    return (
        <Container sx={commonSX.container}>

            <Typography variant='h4' gutterBottom>
                REGLAS DE OPERACIÓN DEL SISTEMA DE CITAS MEDIANTE PLATAFORMA EN LÍNEA DEL PODER JUDICIAL DEL ESTADO DE COAHUILA DE ZARAGOZA
            </Typography>

            <Typography variant='subtitle2' gutterBottom>
                CAPÍTULO I. DISPOSICIONES GENERALES
            </Typography>

            <Typography variant='body2'>
                Artículo 1. El sistema de citas mediante plataforma en línea (en adelante SCL) tendrá por objeto agendar citas en línea para las personas que son parte, así como para sus representantes legales, en los procedimientos que se tramitan en los juzgados de primera instancia en materias civil, mercantil, familiar y penal; en los juzgados letrados civiles y en los tribunales distritales.
            </Typography>

            <Typography variant='body2'>
                Artículo 2. Para hacer uso del SCL se deben cumplir los mismos requisitos de capacidad legal previstos en el Código Civil y en el Código Procesal Civil del Estado de Coahuila de Zaragoza y la legislación en materia penal, y demás normatividad aplicable a los órganos jurisdiccionales referidos en el párrafo anterior.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Artículo 3. El SCL no dejará sin efectos los mecanismos y modalidades que previo a su implementación se han venido practicando en el Poder Judicial del Estado de Coahuila de Zaragoza.
            </Typography>

            <Typography variant='body2' gutterBottom>
                El SCL no impide que las y los justiciables puedan acudir a los órganos jurisdiccionales sin previa cita.
            </Typography>

            <Typography variant='body2'>
                Artículo 4. La Oficialía Mayor del Poder Judicial del Estado será el órgano encargado de la implementación y administración del SCL a través de la Dirección competente para ello, por lo que deberá realizar las gestiones administrativas necesarias para tal efecto, así como las de socialización del sistema entre las y los operadores de justicia y de la ciudadanía en general.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Artículo 5. La Oficialía Mayor podrá elaborar manuales, lineamientos y demás documentos que sean necesarios para cumplir con el artículo anterior.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Asimismo, podrá realizar las acciones que se requieran para la debida coordinación con los órganos jurisdiccionales y administrativos que sean pertinentes.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Artículo 6. Lo no previsto en las presentes reglas será resuelto y establecido por la Oficialía Mayor del Poder Judicial del Estado de Coahuila de Zaragoza
            </Typography>

            <Typography variant='subtitle2' gutterBottom>
                CAPÍTULO II. REGISTRO EN EL SISTEMA DE CITAS
            </Typography>

            <Typography variant='body2' gutterBottom>
                Artículo 7. Para hacer uso del SCL se deberá realizar el registro correspondiente.
            </Typography>

            <Typography variant='body2'>
                Para ello, se deberá contestar un formulario de registro y proporcionar los datos requeridos junto con puntos de contacto. Además, se solicitará generar una contraseña que debe resguardarse adecuadamente.
            </Typography>

            <Typography variant='body2'>
                Las contraseñas mediante las cuales las y los usuarios podrán acceder a los servicios del SCL serán creadas por ellos mismos, bajo las instrucciones que se señalen previamente en el sistema, a través de una serie consecutiva de caracteres alfanuméricos.
            </Typography>

            <Typography variant='body2'>
                La responsabilidad del uso de las contraseñas que sean dadas de alta en el sistema serán exclusivamente de la o el usuario por ser su creador y conocedor de las mismas.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Una vez que la persona se registre, deberá aceptar los términos y condiciones del SCL.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Artículo 8. Los datos que se requieren para ser usuario o usuaria del SCL, serán:
            </Typography>

            <Typography variant='body2'>
                Nombre y apellidos paterno y materno.
            </Typography>

            <Typography variant='body2'>
                Clave Única de Registro de Población (CURP).
            </Typography>

            <Typography variant='body2'>
                Número de teléfono móvil.
            </Typography>
            <Typography variant='body2' gutterBottom>
                Correo electrónico.
            </Typography>

            <Typography variant='body2'>
                El administrador del sistema deberá verificar el cumplimiento estricto de estos datos, procurando que los mismos llenen a satisfacción una identificación real del usuario, a quien se le podrá negar el registro hasta que aclare cualquier información dudosa o incorrecta.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Artículo 9. En el registro inicial del usuario manifestará bajo protesta de decir verdad que se conducirá con respeto y legalidad en el manejo de la información y los componentes del sistema, a fin de obtener el compromiso fehaciente del usuario en cuanto a su desenvolvimiento correcto dentro del SCL.
            </Typography>

            <Typography variant='subtitle2' gutterBottom>
                CAPÍTULO III. PROCEDIMIENTO PARA AGENDAR LA CITA
            </Typography>

            <Typography variant='body2' gutterBottom>
                Artículo 10. Las citas se podrán agendar en un horario de 8:30 horas a 14:00 horas, pudiendo establecer un horario particular para trámites específicos.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Artículo 11. Para agendar una cita, se deberán seguir los pasos siguientes:
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Ingresar al SCL desde el sitio web del Poder Judicial del Estado de Coahuila de Zaragoza, utilizando la combinación de correo electrónico y contraseña.
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Seleccionar el órgano jurisdiccional en el que se desea agendar la cita.
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} />  Indicar el tipo de trámite que se va a realizar y el número de expediente que corresponda al asunto.
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Seleccionar la fecha y la hora de preferencia para acudir a la sede del órgano jurisdiccional de que se trate, siempre y cuando haya disponibilidad.
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} />  Revisar que los datos de la cita sean correctos, seleccionando la opción de confirmar cita.
            </Typography>

            <Typography variant='body2' gutterBottom>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> En el correo utilizado para el registro se recibirá la confirmación de la cita con los datos correspondientes, confirmación que deberá ser mostrada de manera electrónica o impresa en el punto de entrada al edificio así como al órgano jurisdiccional correspondiente.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Artículo 12. Para agendar la cita será necesario elegir la opción correspondiente del catálogo de servicios que se prestarán con la cita. Los servicios son los siguientes:
            </Typography>

            <Typography variant='body2' gutterBottom>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Revisión de expedientes.
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Tramitación de oficios, edictos y exhortos.
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Citas con actuarios y actuarias (civiles y familiares únicamente).
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Citas con el juzgador o juzgadora.
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Expedición de copias simples certificadas.
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Devolución de documentos.
            </Typography>

            <Typography variant='body2' gutterBottom>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Entrega de cheques y certificados de depósito.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Los demás que estén disponibles por parte de las autoridades en beneficio de la ciudadanía.
            </Typography>

            <Typography variant='subtitle2' gutterBottom>
                CAPÍTULO IV. REGLAS DE USO DEL SISTEMA DE CITAS
            </Typography>

            <Typography variant='body2' gutterBottom>
                Artículo 13. Las y los titulares de los órganos jurisdiccionales serán los encargados de la operación adecuada del SCL; en tratándose de los Juzgados del Sistema Penal Acusatorio y Oral, el encargado de la operación adecuada del sistema estará a cargo el administrador de cada órgano jurisdiccional.
            </Typography>

            <Typography variant='body2'>
                En el supuesto de que constaten fallas técnicas en el SCL, deberán informarlo a la Dirección de Innovación del Poder Judicial del Estado, a través de reportes de servicio, podrán también por oficio manifestar comentarios adicionales que se susciten con motivo de la operación del referido sistema.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Si el usuario o usuaria detecta alguna falla técnica o se presenta algún problema con el uso del SCL, deberá reportarlo a través de la línea de whatsapp 844 2775774.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Artículo 14. Para el uso del SCL se observarán las siguientes reglas:
            </Typography>

            <Typography variant='body2' gutterBottom>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Las citas tendrán una duración de 30 minutos.
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Las citas con juezas, jueces y personal actuarial tendrán una duración de 15 minutos.
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> No se podrá agendar más de una cita en un día para acudir a un mismo órgano jurisdiccional.
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Si queda tiempo del que corresponde para la cita o citas agendadas, se podrá realizar un trámite adicional, siempre y cuando la persona lo especifique en el rubro de detalles del SCL.
            </Typography>

            <Typography variant='body2'>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Las citas con juezas y jueces se realizarán en un horario de 10 a 12 horas.
            </Typography>

            <Typography variant='body2' gutterBottom>
                <ArrowDropDownCircleOutlinedIcon sx={{fontSize:'small'}} /> Las citas con personal actuarial se realizarán en un horario de 12 a 14 horas.
            </Typography>

            <Typography variant='body2' gutterBottom>
                En ningún caso, el tiempo para la cita no podrá excederse del previamente establecido.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Artículo 15. La persona juzgadora podrá cancelar la cita, siempre que haya alguna cuestión urgente que deba atender conforme a sus atribuciones y obligaciones legales y constitucionales.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Al respecto, sobre la cancelación se deberá avisar previamente a la o el interesado. Asimismo, se le dará a conocer la posibilidad de que otro servidor o servidora pública del órgano jurisdiccional pueda atenderle. En caso de que la o el interesado acceda a ser atendido por otro servidor o servidora pública, deberá señalarlo; de lo contrario podrá programar otra cita.
            </Typography>

            <Typography variant='body2' gutterBottom>
                Artículo 16. El mal uso del SCL dará pie a la suspensión en el uso del mismo por los operadores del sistema.
            </Typography>

        </Container>
    )

}

export default UseTermsScreen
