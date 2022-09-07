import React, {useState} from 'react';
import {Card,CardBody,CardTitle,CardText,Button,CardImgOverlay,CardGroup,CardImg,Alert,Navbar,NavbarBrandbu,UncontrolledCarousel} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import styled from 'styled-components';
import Modal from "./componentes/Modal";

const App = () =>  {

const[estadoModal1, cambiarEstadoModal1] = useState(false);

  return (
    
  <div>

  <Alert color="light">
  <h4 className="alert-heading">
  ¿Que es la comunicacion en sistemas distribuidos?
  </h4>
  <p>
  Un sistema distribuido se define como aquel en que los componentes localizados en 
computadores, conectados en red, comunican y coordinan sus acciones únicamente 
mediante el paso de mensajes. Es habitual que los sistemas 
distribuidos se caractericen por la concurrencia de los componentes, la ausencia de un 
reloj común y la independencia en los fallos. La concurrencia permite que los recursos 
disponibles, incluidos los propios componentes, puedan ser utilizados simultáneamente. 
La ausencia de de un reloj común, o global, se debe a que la transferencia de mensajes 
entre los componentes no tienen una base temporal común sino que el factor temporal 
está distribuida entre los componentes. Finalmente el aislado de los fallos de los 
componentes implica que cada componente debe tener una independencia con respecto 
al resto de manera que pueda seguir funcionando aunque otro componente no se 
encuentre disponible. Esto último se puede matizar en la medida en que un componente 
dependa de otro para su funcionamiento.
  </p>
  

  
</Alert>
<Card className="my-2">
    <CardImg
      alt="Card image cap"
      src="https://i.picsum.photos/id/504/900/180.jpg?hmac=dXZ_v2hJwJMWbHu2_YGSCpntKGp_-WzlScipzrDsi8M"
      style={{
        height: 180
      }}
      top
      width="100%"
    />
    <CardBody>
    
      <CardText>
      Los mensajes se intercambian de diversas formas, existiendo muchas opciones de diseño al respecto; una importante opción es la “llamada a un procedimiento remoto”.
También es importante considerar las posibilidades de comunicación entre grupos de procesos, no solo entre dos procesos. 
      </CardText>
      <CardText>
        <small className="text-muted">
          Por tal razon conoceremos los tipos de sistemas distribuidos
        </small>
      </CardText>
    </CardBody>
  </Card>

 

    

<br></br>

    <br></br>
<center>
    <iframe src="https://prezi.com/p/embed/46i2d0kmvmeu/" id="iframe_container" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allow="autoplay; fullscreen" height="600" width="100%"></iframe>
</center>

<br></br>

<br>
</br>

<div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://th.bing.com/th/id/R.c03df3bc35138a28dd44c15980d0c740?rik=gMwaKjC%2fwgIPSg&riu=http%3a%2f%2fwww.pc-junky.com%2fPB%2fimages%2fBlack.jpg&ehk=S4a62QYNCtXZ0TURCFCWCwAjR%2blLhpXiRJPnjVgzx0o%3d&risl=&pid=ImgRaw&r=0"
      style={{
        height: 90
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h1">
        TIPOS DE COMUNICACION
      </CardTitle>
     
    </CardImgOverlay>
  </Card>
</div>
<CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://lh3.googleusercontent.com/Q3WRALBtV0dD_y7GZzUl05xCpdOiCz9C7mxGfxqZI3lxS2yflEJ43vDgjRJ5xOhMtfIqJuku71zc9c8FmRaIYyCYOg=s2048"
      top
      width="100%"
      height="50%"
    />
    <CardBody>
      <CardTitle tag="h2">
      Middleware
      </CardTitle>
      <CardText>
      El middleware es un software que permite uno o varios tipos de comunicación o conectividad entre dos o más aplicaciones o componentes de aplicaciones en una red distribuida.
      Al facilitar la conexión de aplicaciones que no fueron diseñadas para conectarse entre sí -y al proporcionar funcionalidad para conectarlas de manera inteligente- el middleware agiliza el desarrollo de aplicaciones y acelera el tiempo de comercialización.


      </CardText>
      
    </CardBody>
  </Card>


  













  <Card>
    <CardImg
      alt="Card image cap"
      src="https://th.bing.com/th/id/R.f2acd936c10663985b6f4443174dad6f?rik=LlFbLvW30mmRzg&riu=http%3a%2f%2felearningmasters.galileo.edu%2fwp-content%2fuploads%2f2017%2f06%2fComunicaci%c3%b3n-sincr%c3%b3nica.jpg&ehk=uHExLohCJdqBiA4qZB8wDjUUziYtR%2bNmur%2fy7GkLFcc%3d&risl=&pid=ImgRaw&r=0"
      top
      height="50%"
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h3">
     Sincrónica y asincrónica
      </CardTitle>
      
      <CardText>
      Cuando hablamos de comunicación sincrónica y asincrónica nos estamos refiriendo a dos formas de intercambio de la información en función de la simultaneidad con la que se envía y ofrece el mensaje.
      En la comunicación sincrónica, los datos se transfieren en forma de tramas, mientras que, en la asincrónica, los datos se envían de un byte en un byte.
      </CardText>
     
    </CardBody>
  </Card>







  <Card>
    <CardImg
      alt="Card image cap"
      src="https://userscontent2.emaze.com/images/4d094983-fe5c-47ad-acaf-648ae4afc801/415272481f4e41a1708ed1b0f78a2293.png"
      top
      height="50%"
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h3">
        Comunicación persistente
      </CardTitle>
   
      <CardText>
      El sistema de cola de mensajes proporciona soporte múltiple para la comunicación asincrónica persistente,La esencia es proporcionar capacidades de almacenamiento intermedio para mensajes.De esta forma, no es necesario que tanto el remitente como el receptor del mensaje permanezcan activos durante la transmisión del mensaje.
      </CardText>
      
    </CardBody>
  </Card>


  
</CardGroup>

  
<CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://th.bing.com/th/id/OIP.vlBFaOwMMKsk4XBjCWQKCQHaD4?pid=ImgDet&rs=1"
      top
      width="100%"
      height="50%"
    />
    <CardBody>
      <CardTitle tag="h2">
      Orientada a mensajes
      </CardTitle>
      <CardText>
      Comunicación basada en mensajes:
- La comunicación la inicia una
aplicacion que desea enviar un mensaje
a otra aplicación situada en una
máquina distinta. Las máquinas que intercambian
mensajes hacen uso de una interfaz
para acceder a los servicios de
mensajería.Las máquinas están conectadas a través de una red de
servidores de comunicaciones. Los servidores de comunicaciones se encargan de encaminar
los mensajes y proporcionar la semántica que requiera el paso
de mensajes.
.
      </CardText>
     
    </CardBody>
  </Card>




  <Card>
    <CardImg
      alt="Card image cap"
      src="https://image.eztalks.com/article/2022/4161773eab492ca420771995c1b39733.webp"
      top
      height="60%"
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h2">
     Comunicación remota-RPC
      </CardTitle>
      
      <CardText>
      ¿Tiene alguna idea sobre la definición de comunicación remota? La comunicación remota permite a los empleados de una empresa desde diferentes ubicaciones comunicarse y colaborar juntos como un equipo. Usan muchas herramientas y medios como correo electrónico, chat y herramientas de colaboración en línea para facilitar el proceso. Estas herramientas vienen con muchas instalaciones desarrolladas para permitir a los miembros realizar la tarea más difícil con facilidad. 
      </CardText>
     
    </CardBody>
  </Card>







  <Card>
    <CardImg
      alt="Card image cap"
      src="https://i.ytimg.com/vi/sbh3H7jdQvk/maxresdefault.jpg"
      top
      height="50%"
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h2">
      SOA Arquitecturas orientadas a servicios
      </CardTitle>
   
      <CardText>
      La SOA, o arquitectura orientada a servicios, define una manera de hacer que los componentes de software sean reutilizables a través de interfaces de servicio. Estas interfaces utilizan estándares de comunicación comunes entre sí, de tal manera que pueden incorporarse rápidamente a nuevas aplicaciones sin tener que realizar una integración profunda cada vez.
      </CardText>
      
    </CardBody>
  </Card>


  
</CardGroup>
  

 
<div>
			<ContenedorBotones>
				<Boton onClick={()=> cambiarEstadoModal1(!estadoModal1)}>Obtener mas información</Boton>
			</ContenedorBotones>
      
      
      <Modal
            
       estado={estadoModal1}
       cambiarEstado={cambiarEstadoModal1}
       >
        <Contenido>
          <h1>ventana modal</h1>
          <p>reutilizables</p>
          <button onClick={()=> cambiarEstadoModal1(!true)}>hola</button>
        </Contenido>
      </Modal>
		</div>



    <Alert color="light">
  <h2 className="alert-heading">
  Middleware
  </h2>
  <p>
  Hay muchos tipos de middleware. Algunos, como los corredores de mensajes o los monitores de procesamiento de transacciones, se centran en un tipo de comunicación. Otros, como los servidores de aplicaciones web o el middleware para dispositivos móviles, proporcionan toda la gama de capacidades de comunicación y conectividad necesarias para crear un tipo de aplicación concreto. Otros, como una plataforma de integración como servicio (iPaaS) basada en la nube o un bus de servicios empresariales (EBS), funcionan como un centro de integración para conectar todos los componentes de una empresa. (Incluso hay middleware que permite a los desarrolladores construir su propio middleware personalizado).

El nombre de middleware se debe a que el primer middleware solía actuar como mediador entre el front-end de una aplicación, o cliente, y un recurso back-end -por ejemplo, una base de datos, una aplicación mainframe o un dispositivo de hardware especializado- al que el cliente podía solicitar datos. 

  </p>
  <h4 className="alert-heading">
  ¿Cómo funciona el middleware?
  </h4>
  <p>
  Configurar y controlar las conexiones e integraciones. Basándose en la información de la solicitud de un cliente o de una aplicación front-end, el middleware puede personalizar la respuesta de la aplicación o servicio back-end. En una aplicación de comercio electrónico de un minorista, la lógica de la aplicación de middleware puede ordenar los resultados de la búsqueda de productos de una base de datos de inventario de back-end por la ubicación de la tienda más cercana, basándose en la dirección IP o la información de ubicación en el encabezado de la solicitud HTTP. 
Conexiones seguras y transferencia de datos.  El middleware suele establecer una conexión segura desde la aplicación del front-end hasta las fuentes de datos del back-end utilizando Transport Layer Security (TSL) u otro protocolo de seguridad de red. Y puede proporcionar capacidades de autenticación, desafiando las solicitudes de la aplicación front-end de credenciales (nombre de usuario y contraseña) o certificados digitales. 
Gestionar el tráfico de forma dinámica en los sistemas distribuidos. Cuando el tráfico de las aplicaciones se dispara, el middleware empresarial puede escalar para distribuir las solicitudes de los clientes entre varios servidores, en las instalaciones o en la nube. Y las capacidades de procesamiento concurrente pueden evitar problemas cuando varios clientes intentan acceder simultáneamente a la misma fuente de datos back-end.
 
 
  </p>
  
  <h4 className="alert-heading">
  Ejemplo
  </h4>
  <p>
  Los ejemplos comunes de middleware incluyen:

-Herramientas para la integración de datos o procesos, como un bus de servicios empresariales.
-Plataformas para la ejecución de transacciones comerciales como el mercado.
-Conjunto de herramientas para desarrollar aplicaciones para un entorno de hardware particular.
-Marcos para el desarrollo de juegos que implementan servicios como la representación de gráficos, simulaciones de física y scripts de juegos.
-Servicios para la construcción de robots tales como el control de robots y marcos de simulación.
  </p>
  

  




</Alert>


<Alert color="light">
  <h2 className="alert-heading">
  Comunicación sincrónica y asincrónica
  </h2>
  <p>
   la comunicación sincrónica es aquella “en la que los usuarios, a través de una red telemática, coinciden en el tiempo y se comunican entre sí mediante texto, audio y/o vídeo”. Por ejemplo, en una vídeo conferencia, los interlocutores implicados conversan al mismo tiempo, siendo necesario que, tanto emisor, como receptor se encuentren conectados al mismo tiempo.
Por el contrario, en la asincrónica, continúa el autor, “los participantes utilizan el sistema de comunicación en tiempos diferentes”.  Sería el caso del correo electrónico, por ejemplo, pues el receptor puede leer el mensaje en cualquier momento después de que el receptor lo envíe, sin que se produzca esa simultaneidad en la comunicación.
  </p>
  <h4 className="alert-heading">
  Tipos de comunicación sincrónica y asincrónica
  </h4>
  <p>
  No obstante, dentro de la comunicación sincrónica y asincrónica también podemos realizar una distinción. En concreto, según recoge Roberto de Miguel Pascual, en Fundamentos de la comunicación humana, los servicios que proporciona la comunicación en internet pueden agruparse en estas otras cuatro categorías:
  <p>
-Comunicación asincrónica de usuario a usuario: cuando el contenido es enviado por un emisor a un receptor concreto, como ocurre con un SMS.

-Comunicación asincrónica entre múltiples usuarios: en el caso de que el mensaje esté dirigido a un grupo de personas, como es el caso de un foro de discusión en una página web.

-Comunicación sincrónica de usuario a usuario: si se trata de conversaciones personalizadas y simultáneas, como una llamada por Skype.

-Comunicación sincrónica entre múltiples usuarios: aquellas conversaciones electrónicas interactivas con varios participantes, como un Hangout grupal.
 </p>
  </p>
  
  <h4 className="alert-heading">
  Ejemplo
  </h4>
  <p>
  <h5>dentro de la comunicación sincrónica, utilizamos las siguientes:</h5>

Audio conferencia: consiste en una llamada de voz, ya sea por teléfono o por algún otro programa informático; permite hablar a dos personas en tiempo real desde diferentes sitios.
Vídeo conferencia: posibilita mantener conversaciones con audio y vídeo de forma simultánea y es habitual para reuniones entre trabajadores o proveedores, que físicamente se encuentran en zonas geográficas diferentes.
Chat: permite a varias personas comunicarse en tiempo real, a través de mensajes de texto. Es empleado tanto para la comunicación interna de los trabajadores, como para la atención a los clientes.
Mensajería instantánea: a través de ella, los interlocutores pueden intercambiar información –principalmente texto, pero también audios, vídeos y documentos-en tiempo real. Whatsapp sería el caso más popular, aunque en el ámbito empresarial también es frecuente el empleo de Slack.

<h5>En cuanto a los instrumentos de comunicación asincrónica, encontramos</h5>

Audio conferencia: consiste en una llamada de voz, ya sea por teléfono o por algún otro programa informático; permite hablar a dos personas en tiempo real desde diferentes sitios.
Vídeo conferencia: posibilita mantener conversaciones con audio y vídeo de forma simultánea y es habitual para reuniones entre trabajadores o proveedores, que físicamente se encuentran en zonas geográficas diferentes.
Chat: permite a varias personas comunicarse en tiempo real, a través de mensajes de texto. Es empleado tanto para la comunicación interna de los trabajadores, como para la atención a los clientes.
Mensajería instantánea: a través de ella, los interlocutores pueden intercambiar información –principalmente texto, pero también audios, vídeos y documentos-en tiempo real. Whatsapp sería el caso más popular, aunque en el ámbito empresarial también es frecuente el empleo de Slack.
  </p>
  

  
</Alert>






<Alert color="light">
  <h2 className="alert-heading">
  Comunicación persistente
  </h2>
  <p>
   El sistema de cola de mensajes proporciona soporte múltiple para la comunicación asincrónica persistente,La esencia es proporcionar capacidades de almacenamiento intermedio para mensajes.De esta forma, no es necesario que tanto el remitente como el receptor del mensaje permanezcan activos durante la transmisión del mensaje.
   Las aplicaciones pueden comunicarse insertando mensajes en una cola específica. El mensaje es reenviado por una serie de servidores de comunicación a su vez y finalmente entregado al destino. Incluso si la máquina del destinatario no se está ejecutando durante el proceso de envío del mensaje, el mensaje se puede enviar.
  </p>
  <h4 className="alert-heading">
  Tipos de comunicación sincrónica y asincrónica
  </h4>
  <p>
  No obstante, dentro de la comunicación sincrónica y asincrónica también podemos realizar una distinción. En concreto, según recoge Roberto de Miguel Pascual, en Fundamentos de la comunicación humana, los servicios que proporciona la comunicación en internet pueden agruparse en estas otras cuatro categorías:
  <p>
  1. Proporcionar soporte para medios continuos
  El sistema de cola de mensajes proporciona soporte múltiple para la comunicación asincrónica persistente,La esencia es proporcionar capacidades de almacenamiento intermedio para mensajes.
  2. flujo de datos
  Para un flujo de datos continuo, La sincronización es extremadamente crítica. Para capturar el estado de sincronización, es necesario distinguir entre diferentes modos de transmisión.
  3. Mecanismo de sincronización
  La sincronización se logra manipulando explícitamente las unidades de datos de un solo flujo. En esencia, existe un proceso que se especializa en realizar operaciones de lectura y escritura en unos pocos flujos simples.
 </p>
  </p>
  <h4 className="alert-heading">
  Ejemplo
  </h4>
  <p>
  En el sistema de middleware multimedia, el middleware proporciona un conjunto de interfaces para controlar las transmisiones de video y audio, incluidas las interfaces para dispositivos como pantallas, cámaras y habitaciones para huéspedes. Cada dispositivo y cada flujo tiene su propia interfaz de alto nivel, incluida la interfaz de la aplicación de notificación cuando ocurren ciertos eventos, y esta última se utiliza para escribir controladores para la sincronización del flujo.
 </p>
  
  
</Alert>

<Alert color="light">
  <h2 className="alert-heading">
  Comunicacion orientada a mensajes
  </h2>
  <p>
  - La comunicación la inicia una
aplicacion que desea enviar un mensaje
a otra aplicación situada en una
máquina distinta.
- Las máquinas que intercambian
mensajes hacen uso de una interfaz
para acceder a los servicios de
mensajería.
- Las máquinas están conectadas a través de una red de
servidores de comunicaciones.
- Los servidores de comunicaciones se encargan de encaminar
los mensajes y proporcionar la semántica que requiera el paso
de mensajes.
- Todas las máquinas disponen de “buffers” para el envío de
mensajes y al menos la máquina receptora dispone de “buffers”
para la recepción.
 </p>
  <h4 className="alert-heading">
  Tipos de comunicacion orientada a mensajes
  </h4><p>
  - A su buffer local: mayor asincronía.
- Al sistema de comunicaciones: menor asíncronía.

  </p>
  
  <h4 className="alert-heading">
  Ejemplo
  </h4>
  <p>
  - Berkeley sockets
Servidor: socket(), bind(), listen(), accept(), read(), write(), close().
Cliente: socket(), connect(), write(), read(), close().
- The Message Passing Interface (MPI): Para entornos de computación en paralelo.Permite en envío de mensajes a grupos de procesos con todas las variantes no-persistentes.
 </p>
  
  
</Alert>





<Alert color="light">
  <h2 className="alert-heading">
  Comunicación remota
  </h2>
  <p>
  La comunicación remota es una forma de comunicarse con otros en línea. Las reuniones, la información y los materiales de capacitación se comparten a través de Internet. Las empresas crean equipos virtuales. Se comunican y colaboran en línea y no en un espacio de oficina compartido.
 </p>
  <h4 className="alert-heading">
  Tipos de comunicacion remota
  </h4><p>
  Hay dos tipos de comunicación remota: síncrona y asincrónica. La comunicación sincrónica ocurre en tiempo real y la comunicación asincrónica no requiere que todas las partes participen al mismo tiempo.

Tipos comunes de comunicación síncrona remota:
Zoom u otras videollamadas.
Llamadas telefónicas.
Reuniones virtuales.
Mensajes de texto SMS.
Conversaciones de Slack o Microsoft Teams.
Tipos comunes de comunicación asíncrona remota:
Aplicaciones de gestión de proyectos.
Sitio Wiki o Sharepoint.
Vídeos informativos o instructivos.
Guías de referencia rápida.
Capturas de pantalla con marcado.
Chats de Slack o Microsoft Teams.

  </p>
  
  <h4 className="alert-heading">
  Ejemplo
  </h4>
  <p>
  1. Videos informativos o instructivos
  2. Guías de referencia rápida
  3. Capturas de pantalla con marcado
  4. Herramientas de gestión de proyectos
  5. El sitio wiki o Sharepoint de su organización
 </p>
  
  
</Alert>





<Alert color="light">
  <h2 className="alert-heading">
  Comunicación Arquitecturas orientadas a servicios
  </h2>
  <p>
  La SOA, o arquitectura orientada a servicios, define una manera de hacer que los componentes de software sean reutilizables a través de interfaces de servicio. Estas interfaces utilizan estándares de comunicación comunes entre sí, de tal manera que pueden incorporarse rápidamente a nuevas aplicaciones sin tener que realizar una integración profunda cada vez.
 </p>
  <h4 className="alert-heading">
  Tipos de Arquitecturas orientadas a servicios
 </h4> <p>
  Proveedor de servicios
Se encarga de crear servicios web, ofrecerlos a un registro de servicios disponibles y gestionar sus condiciones de uso.

Agente o registro de servicios
Se encarga de brindar información acerca del servicio a quien lo solicite, y puede ser público o privado.

Usuario del servicio o persona que lo solicita
Buscará un servicio en el registro o por medio del agente, y se conectará con el proveedor para recibirlo.
  </p>
  
  <h4 className="alert-heading">
  Ejemplo
  </h4>
  <p>
  Delaware Electric recurrió a la SOA para integrar sistemas que antes no se comunicaban entre sí, lo que generó eficiencias de desarrollo que ayudaron a la organización a mantenerse solvente durante un congelamiento de cinco años por mandato estatal de las tarifas eléctricas.
Cisco adoptó la SOA para asegurarse de que su experiencia de pedidos de productos fuera consistente en todos los productos y canales exponiendo los procesos de pedidos como servicios que las divisiones, adquisiciones y socios de negocios de Cisco podrían incorporar a sus sitios web.
Independence Blue Cross (IBC) de Filadelfia implementó una SOA para asegurar que los diferentes componentes que se ocupan de los datos de los pacientes —agentes del servicio al cliente de IBC, consultas médicas, usuarios del sitio web de IBC— estuvieran funcionando con la misma fuente de datos (una “versión única de la verdad”).
 </p>
  
  
</Alert>



 </div>
   
      );
      
     } 
     

      
 





      
export default App;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;
