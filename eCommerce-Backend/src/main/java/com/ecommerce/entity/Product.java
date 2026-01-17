package com.ecommerce.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String productName;
    private String productDescription;
    private Integer productQuantity;
    private String productImage;
    private Double productPrice;
    private Double productDiscountPrice;
    private Double productSpecialPrice;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category ProductCategory;

}
