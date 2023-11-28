function listBooks() {
    const books = [
      {
        titulo: "O poder do hábito",
        autor: "Charles Duhigg",
        genero: "autoajuda",
        ano: 2012,
      },
      {
        titulo: "Textos para tocar cicatrizes",
        autor: "Igor Pires Da Silva",
        genero: "Poesia",
        ano: 2022,
      },
      {
        titulo: "O pequeno principe",
        autor: "Antoine de Saint-Exupéry",
        genero: "conto de fadas",
        ano: 1943,
      },
    ];
  
    for (const book of books) {
      console.log(`
        Título: ${book.titulo}
        Autor: ${book.autor}
        Gênero: ${book.genero}
        Ano: ${book.ano}
      `);
    }
  }
  
  listBooks();
  