let alunos = [];

function adicionarAluno() {
  const nome = document.getElementById("nomeAluno").value;
  if (nome === "") {
    alert("Por favor, digite um nome para o aluno.");
    return;
  }
  alunos.push({ nome, nota: null }); // Inicialize com null para notas não definidas
  document.getElementById("nomeAluno").value = "";
  mostrarAlunos();
}

function mostrarAlunos() {
  const lista = document.getElementById("listaAlunos");
  lista.innerHTML = "";
  alunos.forEach((aluno, index) => {
    const status = aluno.nota >= 6 ? "Aprovado" : "Reprovado";
    const color = aluno.nota >= 6 ? "text-blue-500" : "text-red-500";
    lista.innerHTML += `<tr>
            <td class="px-5 py-2 border-b border-gray-200">${aluno.nome}</td>
            <td class="px-5 py-2 border-b border-gray-200 ${color}">${
      aluno.nota !== null ? aluno.nota : "-"
    }</td>
            <td class="px-5 py-2 border-b border-gray-200 ${color}">${
      aluno.nota !== null ? status : "-"
    }</td>
            <td class="px-5 py-2 border-b border-gray-200 ">
                <button onclick="showNoteModal(${index})" class="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">Adicionar Nota</button>
                <button onclick="showEditModal(${index})" class="text-sm bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded">Editar</button>
                <button onclick="deletarAluno(${index})" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">Deletar</button>
            </td>
        </tr>`;
  });
}

function showNoteModal(index) {
  window.currentEditIndex = index;
  document.getElementById("inputNota").value =
    alunos[index].nota !== null ? alunos[index].nota : "";
  document.getElementById("noteModal").style.display = "flex";
}

function closeNoteModal() {
  document.getElementById("noteModal").style.display = "none";
}

function saveNote() {
  const nota = parseFloat(document.getElementById("inputNota").value);
  if (!isNaN(nota)) {
    alunos[window.currentEditIndex].nota = nota;
    mostrarAlunos();
  }
  closeNoteModal();
}

function showEditModal(index) {
  window.currentEditIndex = index;
  document.getElementById("editNomeAluno").value = alunos[index].nome;
  document.getElementById("editNotaAluno").value =
    alunos[index].nota !== null ? alunos[index].nota : "";
  document.getElementById("editModal").style.display = "flex";
}

function closeEditModal() {
  document.getElementById("editModal").style.display = "none";
}

function saveEdit() {
  const nome = document.getElementById("editNomeAluno").value;
  const nota = parseFloat(document.getElementById("editNotaAluno").value);
  if (nome === "" || isNaN(nota)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }
  alunos[window.currentEditIndex] = { nome, nota };
  mostrarAlunos();
  closeEditModal();
}

function deletarAluno(index) {
  alunos.splice(index, 1);
  mostrarAlunos();
}
