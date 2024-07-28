# To Do List
Esse repositório armazena o código para o desafio proposto do processo seletivo da Gama.
Link do deploy: https://to-do-list-v2-eta.vercel.app/
### Descrição do Desafio
Você será responsável por criar uma aplicação de Lista de Estudos funcional e visualmente
agradável. A aplicação deve ser capaz de gerenciar tarefas de maneira eficiente e intuitiva
para o usuário.
#### HTML
- Estrutura básica da aplicação, incluindo:
  - Um campo de entrada (input) para o usuário digitar o nome da nova
tarefa.
   - Um botão "Adicionar" para inserir a nova tarefa na lista.
   - Uma área de lista onde as tarefas serão exibidas.
#### CSS
- Estilos básicos para melhorar a aparência da aplicação, incluindo:
	- Estilo diferenciado para tarefas pendentes e concluídas.
	- Utilização de classes para aplicar estilos de forma organizada e
reutilizável.
	- Opcional: Responsividade para diferentes tamanhos de tela.
#### JavaScript
- Funcionalidades interativas, incluindo:
	 - Adicionar Tarefa: Permitir ao usuário adicionar uma nova tarefa à
lista ao clicar no botão "Adicionar" ou pressionar a tecla "Enter".
	- Marcar como Concluída: Permitir ao usuário marcar uma tarefa como
concluída ao clicar nela. A tarefa concluída deve ter um estilo visual
diferente (ex. riscada).
	- Remover Tarefa: Permitir ao usuário remover uma tarefa da lista ao
clicar em um botão "Remover" ao lado de cada tarefa.
### Escolhas de tecnologia e design
Além das tecnologias básicas citadas pelo desafio, escolhi outras tecnologias que me ajudariam a fazer o desafio da melhor forma possível:
- React
- Next
- Typescript

Quanto ao design, optei por utilizar o CSS padrão. Utilizei cores cinzas escuras, azul e branco que trouxeram um design agradável à aplicação, e utilizei componentes arredondados para trazer um aspecto mais moderno. Também foi feito a responsividade para qualquer tipo de tamanho de tela.

### Como interagir
O usuário vai escrever a tarefa que ele tem interesse em adicionar, vai apertar no botão de adicionar ou apertar enter e uma nova tarefa aparecerá em baixo. O usuário terá a opção de marcar como concluída ou excluir a tarefa selecionada por completo. Ainda poderá fazer uma filtragem de tarefas, baseado se foram concluídas ou se estão em andamento.

### Código
O site em si só possui uma página, e eu criei uma pasta de componentes para melhor organização dos arquivos, e lá tem dois componentes importantes para a aplicação que fazia sentido componentizar. Além disso, por estar utilizando Typescript, também precisei definir a tipagem de cada objeto de maneira correta. 
