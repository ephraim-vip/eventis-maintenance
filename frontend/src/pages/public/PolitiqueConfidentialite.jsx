import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function PolitiqueConfidentialite() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
                    Politique de confidentialité
                </h1>
                <p className="text-sm text-gray-500 mb-10">Dernière mise à jour : [à compléter]</p>

                <div className="space-y-10 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">1. Responsable du traitement</h2>
                        <p>
                            Le responsable du traitement des données collectées sur Éventis est
                            [Nom de l'organisation / de l'éditeur], joignable à l'adresse
                            [email de contact].
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">2. Données collectées</h2>
                        <p className="mb-3">Éventis collecte les données personnelles suivantes :</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Inscription à un événement</strong> : nom et adresse email du
                                participant.
                            </li>
                            <li>
                                <strong>Formulaire de contact</strong> : nom, email, sujet et message.
                                Ces données sont transmises par email et ne sont pas stockées dans notre
                                base de données.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">3. Finalité du traitement</h2>
                        <p>
                            Ces données sont utilisées exclusivement pour la gestion de votre inscription
                            à un événement (confirmation, information en cas d'annulation) ou pour
                            répondre à votre demande de contact. Elles ne sont ni revendues, ni partagées
                            avec des tiers à des fins commerciales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">4. Durée de conservation</h2>
                        <p>
                            Les données d'inscription sont conservées jusqu'à ce que vous vous
                            désinscriviez de l'événement concerné, ou jusqu'à 30 jours après une
                            désinscription (délai de grâce technique), après quoi elles sont supprimées
                            définitivement de nos serveurs.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">5. Vos droits</h2>
                        <p className="mb-3">
                            Conformément au Règlement Général sur la Protection des Données (RGPD), vous
                            disposez d'un droit d'accès, de rectification et d'effacement de vos données.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Pour vous désinscrire d'un événement et faire supprimer vos données,
                                utilisez le lien de désinscription présent dans votre email de
                                confirmation.
                            </li>
                            <li>
                                Pour toute autre demande (accès, rectification), contactez-nous via notre{' '}
                                <a href="/contact" className="text-red-600 hover:text-red-700 underline">
                                    formulaire de contact
                                </a>.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cookies et traceurs</h2>
                        <p>
                            Éventis n'utilise aucun cookie de suivi publicitaire ni aucun traceur tiers
                            (pas de Google Analytics, Facebook Pixel, ou équivalent).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact</h2>
                        <p>
                            Pour toute question relative à cette politique de confidentialité, contactez-nous
                            à [email de contact] ou via notre{' '}
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