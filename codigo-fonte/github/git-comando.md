# Tutorial Completo de Git e GitHub

## Índice

1. [Introdução](#introdução)
2. [Instalação do Git](#instalação-do-git)
3. [Configuração Inicial](#configuração-inicial)
4. [Comandos Básicos do Git](#comandos-básicos-do-git)
5. [Trabalhando com Branches](#trabalhando-com-branches)
6. [GitHub: Conceitos e Integração](#github-conceitos-e-integração)
7. [Fluxos Avançados](#fluxos-avançados)
8. [Dicas e Boas Práticas](#dicas-e-boas-práticas)
9. [Referências](#referências)

---

## Introdução

**Git** é um sistema de controle de versão distribuído.  
**GitHub** é uma plataforma para hospedagem de repositórios Git.

---

## Instalação do Git

### Windows

Baixe em: [git-scm.com](https://git-scm.com/download/win)  
Siga o instalador padrão.

### Linux

```bash
sudo apt update
sudo apt install git
```

### macOS

```bash
brew install git
```

---

## Configuração Inicial

Configure seu nome e email:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

Verifique as configurações:

```bash
git config --list
```

---

## Comandos Básicos do Git

### Inicializar um repositório

```bash
git init
```

### Clonar um repositório existente

```bash
git clone https://github.com/usuario/repositorio.git
```

### Status dos arquivos

```bash
git status
```

### Adicionar arquivos ao staging

```bash
git add arquivo.txt
git add .
```

### Commitar alterações

```bash
git commit -m "Mensagem do commit"
```

### Visualizar histórico

```bash
git log
```

### Enviar para o repositório remoto

```bash
git push origin main
```

### Atualizar do repositório remoto

```bash
git pull origin main
```

---

## Trabalhando com Branches

### Criar uma branch

```bash
git branch nome-da-branch
```

### Trocar de branch

```bash
git checkout nome-da-branch
```

### Criar e trocar de branch

```bash
git checkout -b nova-branch
```

### Mesclar branches

```bash
git merge nome-da-branch
```

### Excluir branch

```bash
git branch -d nome-da-branch
```

---

## GitHub: Conceitos e Integração

### Criar repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Defina nome, descrição e visibilidade

### Conectar repositório local ao GitHub

```bash
git remote add origin https://github.com/usuario/repositorio.git
git push -u origin main
```

### Fork e Pull Request

- **Fork:** Crie uma cópia de um repositório para sua conta.
- **Pull Request:** Solicite a inclusão de suas alterações no repositório original.

---

## Fluxos Avançados

### Stash: Guardar alterações temporariamente

```bash
git stash
git stash pop
```

### Revertendo commits

```bash
git revert <hash-do-commit>
```

### Rebase

```bash
git rebase main
```

### Tags

```bash
git tag v1.0
git push origin v1.0
```

---

## Dicas e Boas Práticas

- Faça commits pequenos e frequentes.
- Use mensagens de commit claras.
- Mantenha o repositório atualizado.
- Utilize branches para novas funcionalidades.
- Revise código via Pull Requests.

---

## Referências

- [Documentação Oficial do Git](https://git-scm.com/doc)
- [Guia do GitHub](https://docs.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
