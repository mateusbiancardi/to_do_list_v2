
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
A organização de arquivos seguiu o padrão do Next e React, tendo uma pasta principal chamada de `src/app` onde ficará a página principal `page.tsx`, o layout `layout.tsx` e o arquivo CSS da página. Essa página principal é a única página que será acessada para utilização do To Do List. Ainda dentro de `src` teremos a pasta `components` onde ficará componentes importantes para reutilização e seus respectivos arquivos CSS.
Dentro de `page.tsx` temos as importações necessárias para fazer a aplicação rodar e a criação de uma interface para tipagem exigida pelo Typescript. Por ser um arquivo `.tsx`, podemos exportar uma função que retorna as tags HTMLs que estruturarão o site. Além disso, o React permite colocar código direto nessa função que retorna HTML, e com ela podemos manipular as informações da página. Temos as funções flecha que iniciam com `handleFunction` para representar a ação que elas tem quando executadas, e finalmente temos no HTML toda a estrutura da página e que mistura funções Javascript para que execute, a exemplo do seguinte trecho:

![image](https://github.com/user-attachments/assets/1a9f18a3-5115-431e-a61b-b852563a8cf5)

Essa imagem também demonstra que a componentização das funções foi de bastante utilidade, pois permitiu um melhor reaproveitamento de trechos de código e uma diminuição de linhas da página principal, ocasionando em um código mais limpo e legível.


O site também foi projetado já pensando na responsividade, portanto a estilização pelo CSS já trabalhou mais com valores relativos em medidas como `height` e `width`, tendo que fazer poucos ajustes para que a responsividade fique agradável. O poder do React com a utilização do `useState` também foi de grande utilidade para a estilização, pois foi utilizado diferentes estilizações de acordo com os estados dos componentes (por exemplo, mudar a cor do texto e riscar quando o checkbox é marcado)

![image](https://github.com/user-attachments/assets/5c4df375-35db-4d97-aaa2-06a8a3af83d8)

Também temos a feature extra que considerei uma adição interessante e que consiste em fazer a filtragem de acordo com o estado da tarefa: temos a filtragem por todas as tarefas (sem filtro), a filtragem por tarefas em andamento e filtragem por tarefas concluídas.

![image](https://github.com/user-attachments/assets/f49ed97e-06d3-46b7-9061-a969329f255a)

