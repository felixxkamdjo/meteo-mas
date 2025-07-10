import DropdownButton from "../components/DropdownButton";
import nuageux from "C:/Users/GLC/Desktop/Nouveau dossier/meteo-mas/src/assets/nuageux.png"
import Emma from '../assets/emma.jpg'
import darcel from '../assets/darcel.jpg'
import felix from '../assets/felix.jpg'
import somme from '../assets/qui-somme-nous.jpg'
import mission from '../assets/mission.jpg'
import precision from '../assets/precision.jpg'
import update from '../assets/update.jpg'
import design from '../assets/design-users.jpg'
import monde from '../assets/monde.jpg'
import history from '../assets/histoire.jpg'

const AboutApp = () => {
    return (
        <>
            
            <header className="flex flex-row justify-between items-center p-1 w-full mb-12">
                <DropdownButton />
            </header>
           <div className="bg-gray-50 text-gray-800">
      {/* Hero section */}
      <section className="relative">
        <img
          src={nuageux}
          alt="Prévisions météo en temps réel"
          className="w-full h-64 object-cover brightness-75"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold">
          À propos de Meateo-mas
        </h1>
      </section>

      {/* Who We Are */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Qui sommes-nous ?
        </h2>
        <div className="md:flex md:items-center md:gap-8">
          <img
            src={somme}
            alt="Notre équipe WeatherWise"
            className="md:w-1/2 rounded-xl shadow-lg mb-6 md:mb-0 items-center"
            style={{height:'200px', width:'150px'}}
          />
          <p className="md:w-1/2 text-lg">
            Bienvenue sur <span className="font-bold">Meteo-mas</span>, votre
            compagnon de confiance pour des prévisions météo précises et en
            temps réel. Nous sommes une équipe passionnée de météorologues, de
            data scientists et de développeurs, déterminés à vous aider à mieux
            organiser votre journée.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Notre mission
          </h2>
          <p className="text-lg mb-6">
            Fournir des informations météorologiques rapides, fiables et
            précises, accessibles à tous, partout.
          </p>
          <img
            src={mission}
            alt="Notre mission"
            className="mx-auto w-20"
          />
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Ce qui nous distingue
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <img
              src={precision}
              alt="Haute précision"
              className="mx-auto w-16 mb-4"
            />
            <p className="font-medium">Haute précision</p>
          </div>
          <div>
            <img
              src={update}
              alt="Mises à jour en temps réel"
              className="mx-auto w-16 mb-4"
            />
            <p className="font-medium">Mises à jour en temps réel</p>
          </div>
          <div>
            <img
              src={design}
              alt="Design centré utilisateur"
              className="mx-auto w-16 mb-4"
            />
            <p className="font-medium">Design centré utilisateur</p>
          </div>
          <div> 
            <img
              src={monde}
              alt="Couverture mondiale"
              className="mx-auto w-16 mb-4"
            />
            <p className="font-medium">Couverture mondiale</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Notre histoire
          </h2>
          <div className="md:flex md:items-center md:gap-8">
            <img
              src={history}
              alt="Notre histoire"
              className="md:w-1/2 rounded-xl shadow-lg mb-6 md:mb-0"
            />
            <p className="md:w-1/2 text-lg">
              Meteo-mas est né de la frustration causée par des applications
              météo imprécises et surchargées. Nous avons imaginé une plateforme
              qui allie <span className="font-bold">précision scientifique et simplicité</span>,
              afin de permettre à chacun de prendre de meilleures décisions au
              quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Notre équipe
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src={Emma}
            alt="Emmanuel Mbono"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
          <img
            src={darcel}
            alt="Darcel Kameni"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
          <img
            src={felix}
            alt="Kamdjo Felix"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
          {/* Ajoute d’autres portraits si besoin */}
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg mb-4">
            Écrivez-nous à{" "}
            <a
              href="mailto:support@weatherwise.com"
              className="text-blue-600 underline"
            >
              groupeMeteo@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
        </>
    )
}

export default AboutApp;