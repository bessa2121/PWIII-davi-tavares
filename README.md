# PWIII-davi-tavares
Programação web III por Prof João Siles


# Creating a Laravel Framework

  

  

Welcome to my Git Hub!👋

  

Hi! I'm Leonardo Buso de Souza and I'm going to teach you how create a Laravel Framework!

  

  

## What you need?

  

  

- PHP

  

- Composer

  

- Laravel installer

  

- Node and NPM

  

- List item

  

  

## Use the Git Bash

  

  

1. Open the xampp folder

  

2. Open the htdocs folder

  

3. Open the Git Bash

  

4. Log in with your name

  

`Enter this code: git config --global user.name "Your-name"`

  

5. Log in with your email

  

`Enter this code: git config --global user.email Your-email`

  

6. Clone your git repository

  

`Enter this code: git clone (Your git url)`

  

7. Open your folder with this code

  

`cd your-folder`

  

## How to install these components

  

  

> Open the Windows PowerShell how administrator

  

  

Enter this code

  

  

Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))

  

  

## Laravel Installer

  

  

> Enter this code

  

  

composer global require laravel/installer

  

  

## Create the App

  

  

1. Close the Windows PowerShell

  

2. Open the terminal in your project

  

> Use these codes

  

> `cd --`

  

> `cd --`

  

> `cd C:`

  

> `cd xampp`

  

> `cd htdocs`

  

> `cd your repository`

  

  

3. Create the project

  

`Enter this code: laravel new example-app`

  

## Configuration

  

1. Close the terminal

2. Open the Windows PowerShell

  

> Enter this code to install al the files by creating the vendor folder

> `composer install`

> Enter this code to generate the files that are dependencies of Js

> `npm install`

> Enter this code to take the files from npm install and generate executables from them

> `npm run build`

  

3. Go to the Visual Studio Code copy and paste the file .env.example

4. Rename the file to .env

5. Go to the Windows PowerShell again

> Enter this code to help execute

> `php artisan`

> Enter this code to create a key

> `php artisan key:generate`

> Entre this code to run all the database files

> `
php artisan migrate`

> Write 'Yes'

## Save the project

 1. Close all
 2. Go to Git Bash

> Enter with these codes
> `cd your-repository`
> `git add .`
> `git commit- m "Your message"`
> `git push`

---

<h1 align="center"> Tailwind</h1>

Tailwind CSS é um framework CSS do tipo "utility-first" que fornece um conjunto de classes utilitárias predefinidas, permitindo que você construa designs diretamente no seu HTML, em vez de usar componentes pré-estilizados.
Muito usado no Laravel

---

````markdown
# 📘 Guia Completo: Desenvolvendo Views no Laravel com Tailwind CSS

## 🧠 Objetivo

Este guia tem como objetivo explicar de forma detalhada e acessível como:

-   Criar **views** no Laravel usando o Blade.
-   Integrar e utilizar o **Tailwind CSS** de forma eficiente.
-   Compreender **passo a passo**, **detalhes de cada comando** e **explicações linha por linha**.
-   Adotar **boas práticas** para desenvolvimento de interfaces web modernas.

----------

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de que você tenha as seguintes ferramentas instaladas:

-   PHP ≥ 8.1
-   Composer
-   Laravel
-   Node.js e NPM

Para verificar as versões instaladas, use os seguintes comandos:

```bash
php -v
composer -V
npm -v
````

---

## 📦 1. O que é uma View no Laravel?

No Laravel, uma **view** (ou visão) é um **arquivo responsável por gerar o conteúdo HTML exibido ao usuário**.

Por padrão, as views ficam localizadas em:

```
resources/views/
```

As views utilizam o Blade, o mecanismo de templates do Laravel, que permite incluir lógica simples diretamente no HTML. Por exemplo:

```blade
@if($usuario)
  <p>Olá, {{ $usuario->nome }}!</p>
@endif
```

Ou então, você pode reutilizar layouts com:

```blade
@extends('layouts.app')
```

---

## ✨ 2. O que é o Tailwind CSS?

**Tailwind CSS** é um framework de **estilos utilitários** que fornece classes de baixo nível para facilitar a construção de interfaces.

> **Classes utilitárias** são aquelas que realizam uma única tarefa, como definir cores, margens ou padding.
> Exemplo: `bg-blue-500` define o fundo azul, enquanto `p-4` adiciona padding de 1rem.

Diferente de frameworks como o **Bootstrap**, o Tailwind não fornece componentes prontos, você **cria a interface do zero** usando essas classes, como se estivesse montando uma estrutura.

### Principais benefícios do Tailwind:

* Menos necessidade de CSS customizado.
* Estilos responsivos nativos.
* Design rápido e consistente.
* Facilidade para manutenção em sistemas grandes.

---

## 🚀 3. Criando um Projeto Laravel com Tailwind CSS

### 3.1 Iniciando um novo projeto Laravel

Execute o comando abaixo para criar um novo projeto Laravel:

```bash
composer create-project laravel/laravel minha-aplicacao
cd minha-aplicacao
```

### 3.2 Instalando o Tailwind CSS

Instale o Tailwind com os seguintes comandos:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

> Isso cria o arquivo `tailwind.config.js`, onde você configurará os diretórios onde o Tailwind buscará as classes CSS.

### 3.3 Configurando o Tailwind CSS

Abra o arquivo `tailwind.config.js` e faça as edições necessárias para incluir os diretórios de views e scripts:

```js
module.exports = {
  content: [
    './resources/**/*.blade.php', // Arquivos Blade
    './resources/**/*.js',        // Arquivos JS
    './resources/**/*.vue',       // Componentes Vue (caso esteja usando)
  ],
  theme: {
    extend: {}, // Personalize o tema aqui
  },
  plugins: [],
}
```

### 3.4 Criando o CSS com o Tailwind

Crie o arquivo `resources/css/app.css` e adicione o seguinte conteúdo:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> Este arquivo importa as configurações principais do Tailwind para o seu projeto.

---

## ⚙️ 4. Compilando com Vite

Laravel utiliza o **Vite** para compilar e otimizar os arquivos CSS e JavaScript.

No arquivo `vite.config.js`, verifique se ele está configurado da seguinte forma:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
  ],
});
```

Execute os seguintes comandos para instalar as dependências e iniciar o servidor:

```bash
npm install
npm run dev
```

> O comando `npm run dev` compila o Tailwind em tempo real, com recarga automática durante o desenvolvimento.

---

## 📄 5. Criando uma View Blade com Tailwind

### 5.1 Definindo a Rota

Abra o arquivo `routes/web.php` e defina a rota para exibir a view:

```php
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});
```

> Aqui, estamos criando a rota `/` que vai renderizar a view `home.blade.php`.

---

### 5.2 Criando a View

Agora crie a view `resources/views/home.blade.php` com o seguinte conteúdo:

```blade
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Home - Laravel + Tailwind</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-100 text-gray-900 font-sans">

    <div class="max-w-2xl mx-auto mt-16 p-8 bg-white rounded-lg shadow">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Bem-vindo ao Laravel com Tailwind</h1>
        <p class="text-lg text-gray-700 mb-6">
            Este é um exemplo de uma view simples usando Blade para estrutura e Tailwind CSS para estilização.
        </p>

        <a href="/contato" class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Acesse a página de Contato
        </a>
    </div>

</body>
</html>
```

---

## 🧪 6. Criando um Formulário com Tailwind (Exemplo Prático)

Aqui está um exemplo de formulário simples utilizando Tailwind:

```blade
<div class="max-w-xl mx-auto mt-12 bg-white p-6 rounded-lg shadow">
    <h2 class="text-2xl font-semibold mb-4">Formulário de Contato</h2>

    <form method="POST" action="/contato">
        @csrf

        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Nome</label>
            <input type="text" name="nome" class="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none">
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" name="email" class="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none">
        </div>

        <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Mensagem</label>
            <textarea name="mensagem" rows="4" class="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
        </div>

        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enviar Mensagem
        </button>
    </form>
</div>
```

### Explicação das Classes Tailwind:

* `bg-white`: Fundo branco
* `p-6`: Padding interno
* `rounded-lg`: Bordas arredondadas
* `shadow`: Adiciona sombra
* `text-gray-700`: Cor do texto
* `focus:ring-*`: Anel de foco em campos de entrada
* `hover:bg-blue-700`: Muda a cor do botão ao passar o mouse

---

## 📋 Recapitulando

* **View**: Arquivo Blade responsável pela exibição de conteúdo ao usuário.
* **Blade**: Sistema de templates do Laravel que facilita a reutilização e organização de código.
* **Tailwind CSS**: Framework de classes utilitárias para estilização rápida e flexível.
* **@vite(...):** Diretriz para incluir arquivos CSS e JS processados pelo Vite.
* **npm run dev**: Comando que inicia o processo de compilação do Tailwind e ativa o hot reload.

---

## 💡 Dicas e Melhores Práticas

* 🔄 **Reutilize código**: Use `@extends` e `@include` para evitar repetição de layouts e componentes.
* 🎨 **Crie componentes Blade reutilizáveis**: Como botões, campos de formulário, alertas, etc.
* 📁 **Organize suas views em pastas**: Exemplo: `views/pages`, `views/components`.
* 📦 **Use o Tailwind com equilíbrio**: Evite um excesso de classes inline que podem dificultar

