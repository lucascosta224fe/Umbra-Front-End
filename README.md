<a id="readme-top"></a>

<br />
<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#umbra">Umbra</a>
      <ul>
        <li><a href="#resumo">Resumo</a></li>
        <li><a href="#feito-com">Feito Com</a></li>
      </ul>
    </li>
    <li>
      <a href="começando">Começando</a>
      <ul>
        <li><a href="#pré-requisitos">Pré requisitos</a></li>
        <li><a href="#running-the-project">Rodando o Projeto</a></li>
      </ul>
    </li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

---

## Umbra

Umbra foi o nome dado ao nosso projeto que tem o objetivo de fornecer uma visualização em tempo real e interativa do tráfego de rede de um servidor alvo, essencial para monitoramento e análise de carga.

### Resumo

O projeto é um Dashboard de Análise de tráfego de servidor em tempo real. Ele foi desenvolvido para monitorar a carga de um servidor específico, capturando e processando todo o tráfego de rede, ou seja, a entrada e saída de dados, que passam pela portas das máquinas virtuais espelhadas.
O sistema processa os dados com delays de cinco segundos, agregando o volume de tráfego por cada IP que se conecta com o servidor. A interface web exibe esses dados em um gráfico de barras dinâmico. O drill down permite uma análise mais ponderada, isto é, há gráficos que mostram uma investigação profunda do tráfego de rede. 

---

### Feito Com

[![React][React.js]][React-url]
[![Vite][Vite]][Vite-url]
[![Tailwind CSS][Tailwindcss]][Tailwind-url]
[![Shadcn UI][Shadcn]][Shadcn-url]

---

## Primeiros Passos

Para ter uma cópia local deste projeto, siga estes passos.

### Pré Requisitos

Exemplo: 

Antes de começar, tenha certeza de que as seguintes ferramentas estão instaladas em sua máquina:

* **Git**: Para clonar o repositório.
* **Node.js**: Inclui npm, que é necessário para rodar projetos de JavaScript.
* **pnpm**: Um gerenciador de pacotes rápido e eficiente em termos de espaço em disco.

Também é recomendável usar um editor de código como o [VSCode](https://code.visualstudio.com/) para uma melhor experiência de desenvolvimento.
### Rodando o Projeto

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/lucascosta224fe/Umbra-Front-End.git
    ```
2.  **Vá até a pasta do projeto:**
    ```bash
    cd Umbra-Front-End
    ```
3.  **Instale as dependências:**
    ```bash
    pnpm install
    ```
4.  **Rode a aplicação no modo de desenvolvimento:**
    ```bash
    pnpm run dev
    ```

---

## Contato

Nossa Equipe:

* **Pedro Costa**: https://github.com/Batsy13
* **Nathan**: https://github.com/Nathaan30
* **Gabriel Peixoto**: - https://github.com/HitokiriGD


Projeto:

* **Link do Projeto**: [Umbra no Github](https://github.com/lucascosta224fe/Umbra-Front-End.git)
* **Figma**: [Figma](https://www.figma.com/design/RCQpj5x2Dy3cVX0HkWhV8y/Umbra?node-id=1-6&t=zZeNSQqPfef6ctvN-1)

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white
[Vite-url]: https://vite.dev/
[Tailwindcss]: https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC
[Tailwind-url]: https://tailwindcss.com/
[React-url]: https://reactjs.org/
[Shadcn]: https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff&style=for-the-badge
[Shadcn-url]: https://ui.shadcn.com
