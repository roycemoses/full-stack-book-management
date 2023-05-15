package book_app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import book_app.entity.Book;
import book_app.repository.BookRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:3000/")
public class BookController {
	
	@Autowired
	BookRepository bookRepository;
	
	@GetMapping("books")
	public List<Book> findAll() {
		return bookRepository.findAll();
	}
	
	@DeleteMapping("books/id={bookID}")
	public void delete(@PathVariable String bookID) {
		bookRepository.deleteById(bookID);
	}
	
	@PostMapping("books")
	public Book add(@Validated @RequestBody Book book)
	{
		return bookRepository.save(book);
	}
	
	@PutMapping("books")
	public void update(@Validated @RequestBody Book book) {
		bookRepository.save(book);
	}
}
