package book_app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import book_app.entity.Book;
import book_app.repository.BookRepository;

@SpringBootApplication
public class BookApplication implements CommandLineRunner {

	@Autowired
	BookRepository bookRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(BookApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		bookRepository.save(new Book("1", "To Kill a Mockingbird", 1.99f, "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg"));
		bookRepository.save(new Book("2", "The Fault in Our Stars", 2.00f, "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg"));
		bookRepository.save(new Book("3", "The Alchemist", 3.50f, "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg"));
		bookRepository.save(new Book("4", "The Midnight Library", 4.1f, "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg"));
		bookRepository.save(new Book("5", "Life of Pi", 5.55f, "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg"));
		
	}

}
