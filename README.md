***  Design de Software != Arquitetura de Software ***

# DDD (Domain-driven Design)

Design dirigido à domínio

## Domínio

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



