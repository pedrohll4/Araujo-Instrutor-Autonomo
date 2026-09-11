# ARAUJO INSTRUTOR AUTÔNOMO

> **Site profissional, moderno e premium para instrutor autônomo de condução veicular (Categorias A e B).**

Desenvolvido com estética automotiva cinematográfica (Obsidian & Gold), composição editorial de alto nível e foco em conversão direta para o WhatsApp.

---

## 🏎️ Identidade Visual e Conceito

- **Paleta de Cores:**
  - Base: `#0B0D10` (Preto profundo / Cockpit)
  - Superfícies: `#12151B`, `#141720`, `#1A1E26`
  - Destaques Metálicos: `#D4AF37`, `#B08A3C`, `#E8C862`
  - Textos de Alto Contraste: `#F5F7FA` e `#9CA3AF`
- **Tipografia:**
  - **Oswald:** Títulos condensados e impacto automotivo
  - **Inter:** Textos corridos e máxima legibilidade
  - **JetBrains Mono:** Telemetria, labels técnicos e etapas
- **Linhas de Rodovia:** Elementos gráficos com animação e curvatura inspirados no monograma "AA" da marca.

---

## ✨ Seções do Site

1. **Header Fixo com Blur:** Transparente sobre o hero e compacto com backdrop blur ao rolar. Menu mobile responsivo.
2. **Hero Cinematográfico:** Full-screen com atmosfera noturna, tipografia imponente e 3 blocos de telemetria (Categoria A, Categoria B e Aulas Personalizadas).
3. **Por que aprender com o Araújo? (Diferenciais):** Layout editorial assimétrico com números grandes (`01` a `04`) e diretrizes de precisão.
4. **Categorias A & B:** Painéis imersivos para Motocicleta e Carro com hover zoom e mensagens contextuais para WhatsApp.
5. **Planos / Pacotes de Aulas:** Cards com estrutura flexível (Essencial, Preparação e Intensivo), destaque no plano mais procurado e botões com gatilhos prontos.
6. **Como Funciona:** Trilha de 4 etapas conectadas visualmente por uma rodovia com faixa tracejada.
7. **Quem está ao seu lado (Sobre):** Apresentação humanizada com moldura técnica reservada para foto real do instrutor.
8. **Depoimentos:** Avaliações estruturadas para relatos reais de alunos aprovados.
9. **CTA Final:** Perspectiva de pista noturna convergindo ao horizonte com botão de agendamento.
10. **Botão Flutuante de WhatsApp:** Radar pulsante discreto para conversão rápida em qualquer dispositivo.

---

## 🛠️ Tecnologias Utilizadas

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Lucide Icons**
- **Framer Motion**

---

## 🚀 Como Rodar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/pedrohll4/Araujo-Instrutor-Autonomo.git
   cd Araujo-Instrutor-Autonomo
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse no navegador: `http://localhost:5173`

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```

---

## ⚙️ Como Personalizar Informações

Todas as informações essenciais (WhatsApp, textos, preços e dados do instrutor) estão concentradas no arquivo:
👉 `src/config/site.ts`

- `whatsappNumber`: altere para o número oficial com DDI e DDD (ex: `"5531999999999"`)
- `location.city`: cidade ou região atendida
- `plans`: valores e características dos pacotes de aulas
