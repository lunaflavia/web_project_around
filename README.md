# Projeto 6: Around The EU

**Around The EU** é 6º projeto do curso de Desenvolvimento Web da TripleTen. Uma página web interativa que permite visualizar uma galeria de fotos de lugares visitados pela Europa. 

O utilizador pode interagir com as fotos, com funcionalidades para adicionar, remover (ainda não implementado neste estado) e curtir as imagens.

## Tecnologias Utilizadas
- HTML
- CSS
  - @font-face
  - Layouts responsivos 
- JavaScript
    - Interatividade
    - Manipulação do DOM

- Recursos de interatividade com JavaScript:
    - Abertura e fechamento de um modal de edição de perfil.
    - Atualização dinâmica do nome e da descrição do perfil.
    - Fechamento do modal ao pressionar a tecla "Esc" ou clicar fora da janela do modal.

- Figma
  - Todo desenvolvimento foi feito com base em layouts feitos no Figma.

## Melhorias Futuras
- **Adicionar:** Implementar a funcionalidade de adicionar novas fotos à galeria.
- **Remover:** Implementar a funcionalidade de remover fotos da galeria.
- **Persistência de dados:** Atualmente, as alterações (como curtir fotos ou adicionar/remover) não são persistentes. A ideia é integrar um mecanismo de armazenamento local (Local Storage) ou um backend para guardar as interações do utilizador.
- **Acessibilidade:** Garantir que a página seja acessível a todos os utilizadores. Isso pode envolver melhorias no HTML, CSS (garantindo contraste adequado) e no JavaScript (tornando as interações acessíveis via teclado).
- **Modularização do JavaScript:** Organizar o código em módulos para melhor manutenção e escalabilidade.