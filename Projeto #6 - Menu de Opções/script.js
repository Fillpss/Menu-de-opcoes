let list = [];
let option = 0;
let item = 0;

while(option != '4') {

  option = prompt("Olá usuário! Digite o número da opção desejada:\n\n1. Cadastrar um item na lista\n2. Mostrar itens cadastrados\n3. Limpar a lista\n4. Sair do programa\n\n");

  switch(option){
    case '1':
      item = prompt("Cadastre um novo item: ");
      if(list.includes(item))
        alert("Este item já existe na lista");
      else
        list.push(item);
      break;
    case '2':
      if(list.length != 0)
        alert(`No momento sua lista está preenchida desta forma: ${list}`);
      else
        alert("Não existem itens cadastrados");
      break;
    case '3':
      list.splice(0, list.length);
      alert("Os itens da sua lista acabam de ser excluídos");
      break;
    case '4':
      break;
    default:
      alert("Opção inválida, tente novamente!");
  }
}