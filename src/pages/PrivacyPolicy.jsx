
import DropdownButton from "../components/DropdownButton";
import storm from '../assets/storm.png'


const PrivacyPolicy = () => {
    return (
        <>
            {/* <Header /> */}
            <header className="flex flex-row justify-between items-center p-1 w-full mb-12">
                <DropdownButton />
                
            </header>
            <div className="bg-gray-50 text-gray-800">
      {/* Hero section */}
      <section className="relative">
        <img
          src={storm}
          alt="Politique de Confidentialité"
          className="w-full h-64 object-cover brightness-75"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold">
          Politique de Confidentialité
        </h1>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-sm text-gray-600 mb-4">Dernière mise à jour : 09 juillet 2025</p>

        <p className="mb-6">
          Bienvenue sur <span className="font-bold">Meteo-mas</span>. Nous accordons une grande importance à la
          confidentialité et à la protection de vos données personnelles. Cette politique décrit comment nous collectons,
          utilisons et protégeons vos informations lorsque vous utilisez notre application.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold mb-2">1. Collecte des informations</h2>
        <p className="mb-6">
          Lorsque vous utilisez Meteo-mas, nous pouvons collecter certaines informations, notamment :
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Données de localisation pour fournir des prévisions météo précises.</li>
          <li>Informations techniques : type d’appareil, système d’exploitation, version de l’application.</li>
          <li>Données d’utilisation : pages consultées, temps passé sur l’application, fonctionnalités utilisées.</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold mb-2">2. Utilisation des informations</h2>
        <p className="mb-6">
          Nous utilisons les données collectées pour :
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Vous fournir des prévisions météo personnalisées et précises.</li>
          <li>Améliorer et optimiser les performances de l’application.</li>
          <li>Vous envoyer des notifications importantes concernant la météo ou les mises à jour.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold mb-2">3. Partage des informations</h2>
        <p className="mb-6">
          Nous <span className="font-bold">ne vendons ni ne louons vos informations personnelles</span> à des tiers. Nous
          pouvons partager vos données uniquement avec :
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Des prestataires techniques qui nous aident à exploiter l’application (hébergeurs, services d’analyse).</li>
          <li>Les autorités légales si cela est requis par la loi.</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold mb-2">4. Sécurité des données</h2>
        <p className="mb-6">
          Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout
          accès non autorisé, toute perte, destruction ou divulgation.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold mb-2">5. Conservation des données</h2>
        <p className="mb-6">
          Vos données sont conservées uniquement le temps nécessaire pour remplir les objectifs décrits dans cette politique,
          sauf si la loi exige une durée plus longue.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold mb-2">6. Vos droits</h2>
        <p className="mb-6">
          Conformément aux réglementations en vigueur, vous disposez de droits concernant vos données personnelles, notamment :
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Droit d’accès : savoir quelles données nous détenons sur vous.</li>
          <li>Droit de rectification : corriger vos informations inexactes.</li>
          <li>Droit de suppression : demander l’effacement de vos données, sous conditions.</li>
          <li>Droit d’opposition : vous opposer au traitement de vos données dans certains cas.</li>
        </ul>
        <p className="mb-6">
          Pour exercer vos droits, contactez-nous à <a href="mailto:support@weatherwise.com" className="text-blue-600 underline">groupeMeteo@gmail.com</a>.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold mb-2">7. Cookies et technologies similaires</h2>
        <p className="mb-6">
          WeatherWise utilise des cookies et technologies similaires pour :
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Mémoriser vos préférences.</li>
          <li>Analyser l’utilisation de l’application et améliorer votre expérience.</li>
        </ul>
        <p className="mb-6">
          Vous pouvez gérer vos préférences en matière de cookies dans les paramètres de votre appareil.
        </p>

        {/* Section 8 */}
        <h2 className="text-xl font-semibold mb-2">8. Modifications de cette politique</h2>
        <p className="mb-6">
          Nous pouvons mettre à jour cette politique. Toute modification sera affichée sur cette page avec la date de mise à
          jour. Nous vous encourageons à la consulter régulièrement.
        </p>

        {/* Section 9 */}
        <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
        <p>
          Pour toute question relative à cette politique ou à vos données personnelles, contactez-nous à :
        </p>
        <p className="mt-2 font-medium">📧 groupeMeteo@gmail.com</p>
      </section>
    </div>
    </>
  );
}

export default PrivacyPolicy;
