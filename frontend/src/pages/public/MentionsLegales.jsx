import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function MentionsLegales() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
                    Mentions légales
                </h1>
                <p className="text-sm text-gray-500 mb-10">Dernière mise à jour : [à compléter]</p>

                <div className="space-y-10 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">1. Éditeur du site</h2>
                        <p>
                            Le site Éventis est édité par [Nom de l'organisation / de l'étudiant],
                            [statut — ex. projet étudiant réalisé dans le cadre du RNCP Développeur
                            Multimédia, L'École Multimédia], contact : [email de contact].
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">2. Directeur de publication</h2>
                        <p>[Nom du responsable de publication].</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">3. Hébergement</h2>
                        <p>
                            Le site est hébergé par [nom de l'hébergeur — ex. Railway], [adresse de
                            l'hébergeur].
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">4. Propriété intellectuelle</h2>
                        <p>
                            L'ensemble des éléments du site Éventis (textes, images, logo) sont, sauf
                            mention contraire, la propriété de leurs auteurs respectifs et protégés par
                            le droit de la propriété intellectuelle.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">5. Données personnelles</h2>
                        <p>
                            Pour toute information sur le traitement de vos données personnelles,
                            consultez notre{' '}
                            <a href="/politique-de-confidentialite" className="text-red-600 hover:text-red-700 underline">
                                Politique de confidentialité
                            </a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact</h2>
                        <p>
                            Pour toute question, utilisez notre{' '}
                            <a href="/contact" className="text-red-600 hover:text-red-700 underline">
                                formulaire de contact
                            </a>.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}