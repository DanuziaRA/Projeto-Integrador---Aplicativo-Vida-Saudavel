                                                   CENTRO UNIVERSITÁRIO SENAC
                                            ANÁLISE E DESENVOLVIMENTO DE SISTEMAS
                                   
                                                     PROJETO INTEGRADOR
                                    DESENVOLVIMENTO DE APLICATIVO PARA DISPOSITIVOS MÓVEIS E WEB
                                  
                                                                           

![VIDA+SAUDÁVEL](https://github.com/DanuziaRA/Projeto-Integrador---Aplicativo-Vida-Saudavel/blob/main/documenta%C3%A7%C3%A3o/logo%20git.jpg) 
                                                   #VIDA + SAUDÁVEL

Este é o projeto final da segunda etapa do Trabalho de Conclusão de Trimestre do Curso de Tecnologia em Análise e Desenvolvimento de Sistemas, do Centro Universitário Senac – Santo Amaro, EAD. O Projeto Integrador tem como objetivo o desenvolvimento de uma solução orientada a objetos, com a criação de um aplicativo móvel e web para o sistema de saúde, nomeado "Vida+Saudável".

---

**Integrantes do grupo**: 
- Aillin Baldan Duran
- Beatriz Maximiano Sampaio
- Danuzia Moreira Rocha

---
# Estrutura do Repositório  
```text
📦 Vida+Saudável
 ┣ 📂 frontend     # Código do aplicativo web e mobile
 ┣ 📂 backend      # API, banco de dados e package.json 
 ┣ 📂 documentação # Documentação do projeto
 ┣ 📜 .gitignore   # Arquivos ignorados pelo Git
 ┣ 📜 README.md    # Apresentação do projeto
 ┣ 📜 vídeo de apresentação do projeto

```
### 📂 Vídeo apresentação do aplicativo Vida+Saudável
⚠️ **Visualize o arquivo mp4 com um clique na opção "View Raw". Em seguida, iniciará o download do conteúdo.** 

----------

### 📂 documentação (Documentação do projeto)
⚠️ **Caso o arquivo não abra diretamente no aplicativo, utilize a opção "Abrir em navegador" para baixar e visualizar o conteúdo.**  

Este diretório contém materiais essenciais para entender o projeto, suas revisões e a prova de conceito.
Conteúdo:\
**Proposta de Revisão do Projeto (.pdf)** – Documento detalhando os ajustes sugeridos para o projeto após análises iniciais. \
**Protótipo revisado e ajustado (vídeo .mp4)** – Demonstração visual das mudanças aplicadas ao protótipo. \
**Relatório de Registro de Ajustes (.pdf)** – Listagem das modificações feitas com justificativas e impactos. \
**Preparação do ambiente de desenvolvimento (.pdf)** - Descreve as tecnologias utilizados no desenvolvimento do projeto. \
**Prova de Conceito (.pdf)** – Implementação básica para validar a viabilidade do projeto. \
**Resultado da Prova de Conceito (.pdf)** – Implementação básica para validar a viabilidade do projeto.

**Recomendações de leitura**: \
⚠️ **Sugere-se fazer o download dos documentos.**
1. Comece com a Proposta de Revisão do Projeto para entender o contexto das mudanças.
2. Assista ao vídeo do Protótipo revisado e ajustado para uma visão prática.
3. Leia o Relatório de Registro de Ajustes para conferir as modificações detalhadas e o documento de Preparação do ambiente de desenvolvimento.
4. Explore a Prova de Conceito para validar as soluções propostas. 

📱**Acesso aos Documentos no GitHub Mobile** 
 >  Para acessá-los no **GitHub Mobile**, siga as instruções:  
 > 1. **Abra o aplicativo GitHub** no seu dispositivo.  
 > 2. **Navegue até o repositório** do projeto Vida+Saudável.  
 > 3. Vá até a **pasta de documentos** e selecione o arquivo desejado.  
 > 4. Toque em **"View raw"** para visualizar ou baixar o arquivo.


### 📂frontend (Código do aplicativo web e mobile) 
Este diretório contém o código-fonte do aplicativo desenvolvido para web e dispositivos móveis. 

**Recomendações de leitura**: 
1. Consulte o arquivo README.md dentro do diretório para entender a estrutura do frontend.

### 📂backend (API e banco de dados)
Este diretório contém a API e a estrutura do banco de dados do projeto. 

**Recomendações de leitura**: 
1. Verifique o README.md dentro da pasta backend para entender as tecnologias utilizadas. 
2. Consulte a documentação das rotas da API e a estrutura dos endpoints.

### 📜 .gitignore (Arquivos ignorados pelo Git)
Este arquivo define quais arquivos e diretórios não devem ser versionados pelo Git. 

**Recomendações de leitura**: 
1. Confira as regras do .gitignore para garantir que arquivos sensíveis ou não necessários não sejam enviados ao repositório.

### 📜 package.json (Configuração do projeto)
O arquivo principal de configuração do projeto em Node.js, contendo: 
1. Dependências do projeto
2. Scripts para execução e build
3. Informações gerais sobre o projeto

**Recomendações de leitura**:
1. Leia a seção de scripts para entender como rodar o projeto (npm start, npm test, etc.).
2. Consulte a lista de dependências para saber quais pacotes são utilizados.

--- 

## Tecnologias Utilizadas  

🔹**Frontend:** Javascript, HTML e CSS; \
🔹**Backend e API - Banco de Dados:** Node.js com Express.

---

# Instruções para executar o projeto 

## Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Git](https://git-scm.com/)
- Um gerenciador de pacotes: `npm` (padrão do Node.js)

---

## Clonando o Repositório
Abra o terminal e execute:

```sh
git clone https://github.com/DanuziaRA/Projeto-Integrador---Aplicativo-Vida-Saudavel.git
cd Projeto-Integrador---Aplicativo-Vida-Saudavel
```
---

## Configurando o Back-end
**1️.Acesse o diretório do backend:**
cd backend

**2. Instale as dependências:**
npm install

**3. Configurar variáveis de ambiente:** \
Crie um arquivo .env na raiz do backend e adicione as credenciais do banco de dados:\
DB_HOST=localhost \
DB_USER=postgres \
DB_PASSWORD=1234 \
DB_NAME=vida_mais_saudavel \
DB_PORT=5432 \
JWT_SECRET=seu_segredo_jwt

**4.Crie um arquivo .env na raiz do backend e adicione as credenciais do banco de dados:** \
npx prisma migrate dev \
ou \
npx sequelize-cli db:migrate

**5. Rodar o servidor Express.js:** \
npm run dev 

Observações: O backend já inclui cors, permitindo requisições do frontend.

⚠️ Atenção! O backend estará rodando em http://localhost:3000 

---

## Configurando o Front-end
**1.Acesse o diretório do frontend:**

**2.Instale as dependências:** \
npm install

**3.Crie um arquivo .env na raiz do frontend e adicione a URL do backend:** \
REACT_APP_API_URL=http://localhost:3000 \
PORT=3001

**Se a variável de ambiente PORT=3001 não funcionar, inicie o frontend com o comando:** \
PORT=3001 npm start

**4.Iniciar o front-end:** \
npm start

⚠️ **Atenção! Após a adequação no arquivo .env o frontend estará disponível em http://localhost:3001**

---

# 🏥 Vida+Saudável

> **Plataforma integrada para a gestão da saúde individual e coletiva.**  

## Introdução  

O **Vida+Saudável** é um aplicativo móvel e web desenvolvido para auxiliar os usuários no monitoramento e gestão da sua saúde, ao mesmo tempo que promove a conexão com iniciativas públicas e privadas focadas na prevenção de doenças.  

A plataforma busca capacitar os usuários para adotarem hábitos saudáveis, além de oferecer suporte a profissionais da saúde e permitir a participação ativa em campanhas preventivas e ações comunitárias.  

---
## Objetivo  
O principal objetivo do Vida+Saudável é facilitar o acompanhamento da saúde dos usuários e promover ações de prevenção e conscientização.  
Os objetivos específicos incluem:  
✅ Monitorar e gerenciar indicadores de saúde pessoal.  
✅ Conectar usuários a profissionais da saúde e programas comunitários.  
✅Reduzir a sobrecarga nos sistemas de saúde por meio da prevenção.  
✅ Oferecer um ambiente digital intuitivo e acessível para o autocuidado.  

---

## Justificativa  
A necessidade de plataformas de promoção da saúde nunca foi tão evidente. O aumento de doenças crônicas e a relevância da saúde mental demandam soluções acessíveis e inovadoras.  
A criação do Vida+Saudável permite:  
✅ Prevenção de doenças através do monitoramento de indicadores.  
✅ Apoio à saúde pública**, reduzindo a necessidade de atendimentos emergenciais.  
✅ Empoderamento dos usuários**, incentivando hábitos saudáveis.  
✅ Facilidade para profissionais da saúde no acompanhamento de pacientes.  

---

## Funcionalidades  
🔹 **Monitoramento de Saúde**: Usuários acompanham indicadores como pressão arterial, glicemia, IMC, entre outros.  
🔹 **Notificações Inteligentes**: Alertas para exames, vacinas e consultas.  
🔹 **Plano Personalizado de Saúde**: Recomendações com base no estilo de vida e histórico médico.  
🔹 **Integração com Profissionais de Saúde**: Médicos e enfermeiros acessam dados e acompanham pacientes.  
🔹 **Ações Comunitárias**: Engajamento em campanhas preventivas e suporte entre usuários.  
🔹 **Relatórios Automatizados**: Geração de insights sobre a saúde individual e coletiva.  
🔹 **Gamificação**: Sistema de recompensas para incentivar hábitos saudáveis. 

---

## Público-Alvo  
👨‍💼 Adultos de 25 a 50 anos: Pessoas interessadas em monitorar e melhorar sua saúde.  
👩‍⚕️ Profissionais de saúde: Médicos, enfermeiros e nutricionistas que necessitam acompanhar pacientes. 

--- 



