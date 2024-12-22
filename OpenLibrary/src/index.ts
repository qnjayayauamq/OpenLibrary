class Book {
    id: string;
    title: string;
    author: string;
    description: string;
    bookURL: string;
    uploader: string;
    createdAt: Date;
    updatedAt: Date | null;
  }
  
  const bookStorage = StableBTreeMap<string, Book>(0);
  
  app.post("/books", (req, res) => {
    const book: Book = {
      id: uuidv4(),
      createdAt: getCurrentDate(),
      ...req.body,
      updatedAt: null,
    };
    bookStorage.insert(book.id, book);
    res.json({ message: "Book uploaded successfully", book });
  });
  
  // Add endpoints for book retrieval and updates.
  