package book_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import book_app.entity.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, String> {

}