***  Design de Software != Arquitetura de Software ***

# DDD (Domain-driven Design)

Design dirigido à domínio

## Domínio
O domínio (domain) refere-se a um conjunto de conceitos, regras, processos e comportamentos que são fundamentais para um determinado negócio ou aplicação. É a área de conhecimento que descreve e organiza todo o conhecimento e entendimento necessário para desenvolver um software que atenda às necessidades do negócio ou aplicação.

O domínio é a base do DDD e é a partir dele que os modelos de negócio são construídos. Ele é composto por um conjunto de entidades, agregados, serviços e eventos que representam conceitos fundamentais do negócio. O conhecimento do domínio é essencial para que os desenvolvedores possam entender as necessidades do negócio e construir um software que atenda a essas necessidades de forma eficiente e eficaz.

Além disso, o DDD enfatiza a importância da comunicação clara e constante entre os desenvolvedores e os especialistas do domínio (conhecidos como especialistas do domínio ou domain experts), para que o conhecimento do domínio possa ser compartilhado e incorporado ao processo de desenvolvimento de software.

- Domain Experts (Experts de domínio) -> Pessoas que entendem a problemática do software, lidam com isso diariamente 
  - Conversa

- Linguagem ubíqua -> Linguagem universal que todas as pessoas envolvidas conseguem entender
  - Ex: Usuário -> Cliente, Fornecedor, Atendente, Barman, etc...

- Agregados

- Value Objects -> Propriedades das entidades que possuem regras de negócios associadas a essas entidades (formatações, validações, etc...)
  - Ex: criação de um slug do título do exercício -> exige formatação e validação próprias, e inicialmente pode ser criado a partir do título. 
      Porém, futuramente pode ser alterado para que o usuário fornaça o slug.

- Eventos de domínio
- Subdomínio (Bounded Context)
- Entidades
- Casos de uso

### Entidades
  - Obtidas através da **Conversa**
  - Tudo que é factível dentro da aplicação, algo que será mantido

### Casos de uso
  - Obtidas através da **Conversa**
  - Descrição de uma sequência de ações que um usuário ou sistema realiza para atingir um objetivo

  Ex: _EU_ preciso _RESPONDER_ a atividade do _PROFESSOR_.
  *** EU e PROFESSOR -> Entidades ***
  *** RESPONDER ATIVIDADE -> Caso de uso ***

# Clean Architecture
<img 
  src="https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg" 
  alt="the-clean-architecture-diagram"
/>

- Desacoplamento
- SOLID 
  - Inversão de dependência -> permite que parte do código não dependa diretamente da implementação de uma outra camada do código, mas sim de uma abstração (de um contrato).
  - Ex: Camada de Casos de uso não deve depender da implementação da Camada de Infraestrutura.
