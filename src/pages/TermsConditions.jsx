import DropdownButton from "../components/DropdownButton";
import sunrise from '../assets/sunrise.png'
import ia from '../assets/IA.jpeg'
import users from '../assets/compteusers.png'
import service from '../assets/servicecompte.jpeg'
import responsabilites from '../assets/responsabilites.jpeg'
import service1 from '../assets/services.jpeg'
import term from '../assets/termes.jpeg'
import lois from '../assets/lois.jpg'
import contacts from '../assets/contacts.jpeg'


const TermsConditions = () => {
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
          src={sunrise}
          alt="Termes et Conditions"
          className="w-full h-64 object-cover brightness-75"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold">
          Termes et Conditions
        </h1>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-sm text-gray-600 mb-4">Dernière mise à jour : 09 juillet 2025</p>

        <p className="mb-6">
          Bienvenue sur <span className="font-bold">Meteo-mas</span>. Ces termes et conditions régissent votre utilisation de notre application. En accédant à notre service, vous acceptez ces termes dans leur intégralité.
        </p>

        {/* Section 1 */}
        <section className="flex items-start gap-4 mb-12">
            <img
            src={service}
            alt="Propriété intellectuelle"
            className="w-12 h-12"
            />
            <div>
                <h2 className="text-xl font-semibold mb-2">1. Utilisation du service</h2>
                <p className="mb-6">
                Vous vous engagez à utiliser WeatherWise uniquement à des fins légales et conformément à ces conditions. Vous ne devez pas utiliser notre application d'une manière qui pourrait l'endommager ou interférer avec son accès par d'autres utilisateurs.
                </p>
            </div>
        </section>


        {/* Section 2 */}
        <section className="flex items-start gap-4 mb-12">
            <img
            src={users}
            alt="Propriété intellectuelle"
            className="w-12 h-12"
            />
            <div>
                <h2 className="text-xl font-semibold mb-2">2. Compte utilisateur</h2>
                <p className="mb-6">
                Si l’utilisation de certaines fonctionnalités nécessite la création d’un compte, vous devez fournir des informations exactes et à jour. Vous êtes responsable de la confidentialité de vos identifiants et de toutes les activités effectuées via votre compte.
                </p>
            </div>
        </section>


        {/* Section 3 */}
        <section className="flex items-start gap-4 mb-12">
        <img
            src={ia}
            alt="Propriété intellectuelle"
            className="w-12 h-12"
        />
        <div>
            <h2 className="text-xl font-semibold mb-2">3. Propriété intellectuelle</h2>
            <p>
            Tous les contenus de l’application, y compris le texte, les logos, les icônes, les images et les logiciels, sont la propriété de <span className="font-bold">WeatherWise</span> ou de ses partenaires. Toute reproduction ou utilisation non autorisée est interdite.
            </p>
        </div>
        </section>

        {/* Section 4 */}
        <section className="flex items-start gap-4 mb-12">
            <img
                src={responsabilites}
                alt="Propriété intellectuelle"
                className="w-12 h-12"
            />
            <div>
                <h2 className="text-xl font-semibold mb-2">4. Limitation de responsabilité</h2>
                <p className="mb-6">
                Nous nous efforçons de fournir des prévisions météo précises, mais nous ne garantissons pas l'exactitude absolue de nos données. WeatherWise ne saurait être tenu responsable des pertes ou dommages découlant de l'utilisation de ses services.
                </p>
            </div>
        </section>


        {/* Section 5 */}
        <section className="flex items-start gap-4 mb-12">
            <img
                src={service1}
                alt="Propriété intellectuelle"
                className="w-12 h-12"
            />
            <div>
                <h2 className="text-xl font-semibold mb-2">5. Modifications du service</h2>
                <p className="mb-6">
                Nous nous réservons le droit de modifier ou d’interrompre, temporairement ou définitivement, tout ou partie du service, avec ou sans préavis.
                </p>
            </div>
        </section>


        {/* Section 6 */}
        <section  className="flex items-start gap-4 mb-12">
            <img
                src={term}
                alt="Propriété intellectuelle"
                className="w-12 h-12"
            />
            <div>
                <h2 className="text-xl font-semibold mb-2">6. Modifications des termes</h2>
                <p className="mb-6">
                Nous pouvons mettre à jour ces termes et conditions à tout moment. Les modifications prendront effet dès leur publication sur cette page. Nous vous encourageons à consulter régulièrement cette page pour rester informé.
                </p>
            </div>
        </section>


        {/* Section 7 */}
        <section  className="flex items-start gap-4 mb-12">
            <img
                src={lois}
                alt="Propriété intellectuelle"
                className="w-12 h-12"
            />
            <div>
                <h2 className="text-xl font-semibold mb-2">7. Loi applicable</h2>
                <p className="mb-6">
                Ces termes et conditions sont régis par les lois en vigueur dans votre pays de résidence. Tout litige sera soumis à la juridiction compétente.
                </p>             
            </div>  
        </section>


        {/* Section 8 */}
        <section className="flex items-start gap-4 mb-12">
            <img
                src={contacts}
                alt="Propriété intellectuelle"
                className="w-12 h-12"
            />
            <div>
                <h2 className="text-xl font-semibold mb-2">8. Contact</h2>
                <p>
                Pour toute question concernant ces termes et conditions, veuillez nous contacter à :
                </p>
            </div>  
        </section>

        <p className="mt-2 font-medium">📧 support@weatherwise.com</p>
      </section>
    </div>
        </>
    )
}

export default TermsConditions;
