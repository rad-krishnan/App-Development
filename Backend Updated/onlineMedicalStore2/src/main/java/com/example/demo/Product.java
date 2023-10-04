package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double price;
    
    public Product() {
        // default no-arg constructor
    }
    
	public Product(Long id, String name, double price) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	} 
	
	@Override
	public String toString() {
	    return "Product{" +
	            "id=" + id +
	            ", name='" + name + '\'' +
	            ", price=" + price +  // Note that we don't have single quotes around price anymore
	            '}';
	}

	@Override
	public boolean equals(Object o) {
	    if (this == o) return true;
	    if (o == null || getClass() != o.getClass()) return false;

	    Product product = (Product) o;

	    if (Double.compare(product.price, price) != 0) return false; 
	    if (!id.equals(product.id)) return false;
	    return name != null ? name.equals(product.name) : product.name == null;
	}

	@Override
	public int hashCode() {
	    int result;
	    long temp;
	    result = id != null ? id.hashCode() : 0;
	    result = 31 * result + (name != null ? name.hashCode() : 0);
	    temp = Double.doubleToLongBits(price);  // Convert the double to a long for hashing
	    result = 31 * result + (int) (temp ^ (temp >>> 32));  // Hash the long value of price
	    return result;
	}
}
