import React from 'react'
import { Container, Typography } from '@mui/material'

import commonSX from '../../theme/CommonSX'


const PrivacyTermsScreen = () => {

    return (
        <Container sx={commonSX.container}>

            <Typography variant='h4'>
                AVISO DE PRIVACIDAD SIMPLIFICADO
            </Typography>

            <Typography variant='body2'>
                En los términos de lo dispuesto por los artículos 16, 20, 21 y 22 de la Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado de Coahuila, se emite el actual aviso de privacidad simplificado, en los siguientes términos:
            </Typography>

            <Typography variant='subtitle1'>
                Las finalidades del tratamiento para las cuales se obtienen sus datos personales.
            </Typography>

            <Typography variant='body2'>
                El Sistema de Citas mediante plataforma en línea (en adelante SCL), recaba datos personales de los usuarios con el fin de brindar los servicios siguientes: a) revisión de expedientes; b) tramitación de oficios, edictos y exhortos; c) citas con actuarios y actuarias (civiles y familiares únicamente); d) citas con el juzgador o juzgadora; e) expedición de copias simples o certificadas; f) devolución de documentos; g) entrega de cheques y certificados de depósitos; h) los demás que estén disponibles por parte de las autoridades en beneficio de la ciudadanía. Razón por la cual los datos personales únicamente serán utilizados en el momento en el que se brinden los servicios mencionados.
            </Typography>

            <Typography variant='subtitle1'>
                Transferencias de datos personales.
            </Typography>

            <Typography variant='body2'>
                Sus datos personales no podrán ser difundidos o transmitidos a terceros o al público en general, salvo que: a) medie su consentimiento expreso; b) por disposición legal; o c) por ser indispensable para el ejercicio de alguna atribución por parte de esta u otra autoridad competente, incluyendo cualquier otro órgano jurisdiccional o área del Poder Judicial, en términos de los artículos 16 y 72 de la Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado de Coahuila.
            </Typography>

            <Typography variant='subtitle1'>
                Mecanismos y medios disponibles para manifestar la negativa para el tratamiento de sus datos personales para finalidades y transferencias de datos personales.
            </Typography>

            <Typography variant='body2'>
                Usted por su propia cuenta o por medio de su representante, podrán solicitar el acceso, rectificación, cancelación u oposición al tratamiento de sus datos personales, conocidos como derechos ARCO. Para lo anterior, deberá comparecer personalmente o presentar la solicitud respectiva, por escrito, ante la Unidad de Atención a las Solicitudes de Acceso a la Información de la Secretaría Técnica y de Transparencia de la Presidencia del Tribunal Superior de Justicia del Estado. ubicada en Blvd. Venustiano Carranza número 2673, Colonia Santiago, en Saltillo, Coahuila de Zaragoza en un horario de atención de 8:30 a 16:30 horas de lunes a viernes.
            </Typography>

            <Typography variant='body2'>
                El teléfono de contacto de la Unidad de Atención a las Solicitudes de Acceso a la Información Pública de la Secretaría Técnica y de Transparencia de la Presidencia del Tribunal Superior de Justicia del Estado, para cualquier duda, es el siguiente: 844 438 09 80 ext. 6808, el cual será atendido en un horario de lunes a viernes de 08:30 a 16:30 horas.
            </Typography>

            <Typography variant='subtitle1'>
                El sitio donde se podrá consultar el Aviso de Privacidad Integral.
            </Typography>

            <Typography variant='body2'>
                El Aviso de Privacidad Integral estará a su disposición en la página de internet siguiente: https://www.pjecz.gob.mx/aviso-de-privacidad/
            </Typography>

        </Container>
    )

}

export default PrivacyTermsScreen
