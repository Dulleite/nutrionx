'use client';

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    patients: "",
  });

  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SUBMITTING');
    try {
      const response = await fetch('https://formspree.io/f/xlgwjlyw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    } catch (err) {
      setStatus('ERROR');
    }
  };

  return (
    <main className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 border-b bg-white/95 backdrop-blur">
        <img
          src="/logo.png"
          alt="NutrionX"
          className="max-w-[100px] object-contain"
        />
        <a
          href="#beta"
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Participar do Beta
        </a>
      </header>

      {/* Hero */}
      <section className="px-8 py-24 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Sua gestão nutricional, elevada a um novo nível de eficiência.
        </h2>

        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Centralize seus pacientes, elimine planilhas complexas e agilize seus atendimentos. O NutrionX organiza toda a sua rotina clínica em uma plataforma intuitiva e moderna.
        </p>

        <a
          href="#beta"
          className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-green-700 transition"
        >
          Quero participar da versão Beta
        </a>
      </section>

      {/* Problema */}
      <section className="bg-gray-200 py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">
            Você ainda trabalha assim?
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-4">📋</span>
              <h4 className="font-semibold text-lg mb-2">Planilhas espalhadas</h4>
              <p className="text-gray-600 text-sm">
                Dificuldade para encontrar e consolidar informações dos pacientes.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-4">💬</span>
              <h4 className="font-semibold text-lg mb-2">WhatsApp desorganizado</h4>
              <p className="text-gray-600 text-sm">
                Mensagens e dados importantes se perdem em conversas soltas.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-4">📉</span>
              <h4 className="font-semibold text-lg mb-2">Sem acompanhamento estruturado</h4>
              <p className="text-gray-600 text-sm">
                Progresso dos pacientes difícil de visualizar e acompanhar.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-4">🔄</span>
              <h4 className="font-semibold text-lg mb-2">Tarefas repetitivas manuais</h4>
              <p className="text-gray-600 text-sm">
                Muito tempo gasto com processos que poderiam ser automáticos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-16">
            O que estamos construindo
          </h3>

          <div className="grid md:grid-cols-4 gap-10">
            {/* Card 1 */}
            <div className="bg-white shadow rounded-lg p-8 flex flex-col items-center">
              <span className="text-4xl mb-4">📊</span>
              <h4 className="font-semibold text-xl mb-3">
                Dashboard Inteligente
              </h4>
              <p className="text-gray-600">
                Visualização completa dos pacientes em um único painel.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow rounded-lg p-8 flex flex-col items-center">
              <span className="text-4xl mb-4">🍎</span>
              <h4 className="font-semibold text-xl mb-3">
                Planos Alimentares Organizados
              </h4>
              <p className="text-gray-600">
                Criação e gestão simplificada de planos.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow rounded-lg p-8 flex flex-col items-center">
              <span className="text-4xl mb-4">📈</span>
              <h4 className="font-semibold text-xl mb-3">
                Gráficos de Evolução
              </h4>
              <p className="text-gray-600">
                Acompanhamento visual automático do progresso.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white shadow rounded-lg p-8 flex flex-col items-center">
              <span className="text-4xl mb-4">🤖</span>
              <h4 className="font-semibold text-xl mb-3">
                Automação no Envio da Anamnese
              </h4>
              <p className="text-gray-600">
                Envio automático e prático de formulários de anamnese para os pacientes, poupando tempo e aumentando a eficiência do atendimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Form */}
      <section id="beta" className="bg-green-50 py-20 px-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            Seja um dos primeiros a testar o NutrionX
          </h3>

          <p className="text-gray-600 mb-8">
            Estamos selecionando nutricionistas para testar gratuitamente a
            primeira versão.
          </p>

          {/* Formulário Beta Simples */}
          {status === 'SUCCESS' ? (
            <div className="p-8 bg-white rounded-lg shadow text-green-700 text-lg font-semibold">
              ✅ Inscrição enviada! Em breve entraremos em contato pelo WhatsApp.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Seu nome"
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg"
                value={form.name}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Seu e-mail profissional"
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg"
                value={form.email}
                required
              />

              <input
                name="phone"
                type="tel"
                placeholder="Telefone para contato"
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg"
                value={form.phone}
                required
              />

              <input
                name="patients"
                type="text"
                placeholder="Quantos pacientes você atende por mês?"
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg"
                value={form.patients}
                required
              />

              <button
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                type="submit"
                disabled={status === 'SUBMITTING'}
              >
                {status === 'SUBMITTING' ? 'Enviando...' : 'Quero participar do Beta'}
              </button>
              {status === 'ERROR' && (
                <div className="text-red-600 mt-2 text-sm">
                  Ocorreu um erro ao enviar. Tente novamente.
                </div>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-gray-500 bg-white/90">
        © 2026 NutrionX - MVP em desenvolvimento.
      </footer>
    </main>
  );
}
