import React from 'react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="pt-32 pb-20">
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <p className="text-primary font-semibold mb-3">
                            Mikel Flash
                        </p>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            Política de Privacidad
                        </h1>

                        <p className="text-foreground/60">
                            Última actualización: junio de 2026
                        </p>
                    </div>

                    <div className="space-y-8 text-foreground/75 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">
                                1. Introducción
                            </h2>

                            <p>
                                En Mikel Flash respetamos la privacidad de las personas que visitan nuestro sitio web
                                y se comunican con nosotros a través de nuestros canales de contacto.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">
                                2. Datos que solicitamos
                            </h2>

                            <p>
                                A través del formulario de contacto podemos solicitar nombre, email y servicio de interés.
                                También se puede completar teléfono y mensaje de manera opcional.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">
                                3. Finalidad del uso de los datos
                            </h2>

                            <p>
                                Los datos ingresados se utilizan únicamente para responder consultas, brindar información
                                sobre nuestros servicios, coordinar presupuestos, visitas o trabajos relacionados con
                                refacciones, pintura, impermeabilización, mantenimiento y servicios similares.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">
                                4. Envío de consultas por WhatsApp
                            </h2>

                            <p>
                                Al enviar el formulario, el sitio puede redirigir a WhatsApp con un mensaje previamente
                                cargado con la información ingresada. La comunicación continúa dentro de WhatsApp, una
                                plataforma externa que cuenta con sus propias políticas de privacidad y condiciones de uso.
                            </p>

                            <p className="mt-3">
                                Mikel Flash no controla el funcionamiento interno de WhatsApp ni el tratamiento de datos
                                que dicha plataforma pueda realizar.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">
                                5. Conservación de la información
                            </h2>

                            <p>
                                La información recibida será utilizada durante el tiempo necesario para responder la
                                consulta, coordinar el servicio solicitado o mantener la comunicación relacionada con el
                                pedido realizado.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">
                                6. No venta de datos personales
                            </h2>

                            <p>
                                Mikel Flash no vende, alquila ni comercializa los datos personales de las personas que
                                completan el formulario o se comunican por WhatsApp, email u otros medios de contacto.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">
                                7. Derechos de las personas usuarias
                            </h2>

                            <p>
                                La persona usuaria puede solicitar el acceso, rectificación, actualización o eliminación
                                de sus datos personales escribiendo a nuestro email de contacto.
                            </p>

                            <p className="mt-3 font-medium text-foreground">
                                Email: ort.ortega.refacciones@gmail.com
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">
                                8. Seguridad
                            </h2>

                            <p>
                                Adoptamos medidas razonables para proteger la información recibida y evitar su uso indebido,
                                pérdida, acceso no autorizado o divulgación no permitida.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">
                                9. Enlaces externos
                            </h2>

                            <p>
                                El sitio puede contener enlaces a plataformas externas, como WhatsApp, email o redes
                                sociales. Al acceder a esos servicios, la persona usuaria queda sujeta a las políticas
                                y condiciones propias de dichas plataformas.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">
                                10. Cambios en esta política
                            </h2>

                            <p>
                                Mikel Flash podrá actualizar esta Política de Privacidad cuando sea necesario. La versión
                                vigente será la publicada en este sitio web.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">
                                11. Contacto
                            </h2>

                            <p>
                                Para consultas relacionadas con esta Política de Privacidad, podés escribirnos a:
                            </p>

                            <a
                                href="mailto:ort.ortega.refacciones@gmail.com?subject=Consulta sobre Política de Privacidad"
                                className="inline-block mt-3 text-primary font-semibold hover:text-primary/80 transition-colors duration-300"
                            >
                                ort.ortega.refacciones@gmail.com
                            </a>
                        </section>
                    </div>

                    <div className="mt-12">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-background hover:bg-primary/90 transition-colors duration-300"
                        >
                            Volver al inicio
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default PrivacyPolicyPage;