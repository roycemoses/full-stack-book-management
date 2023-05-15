package book_app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="book")
public class Book {

	@Id
	// Alternative option (instead of UUID): auto-increment (for each DB entry), unique ID
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id; // auto-generation using UUID through React
	private String title;
	private float price;
	private String imageURL;
	
	// AllArgsConstructor (EXCLUDES Auto-Generated primary key: ID) 
	public Book(String title, float price, String imageURL)
	{
		this.title = title;
		this.price = price;
		this.imageURL = imageURL;
	}
	
}
