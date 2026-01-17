package com.ecommerce.DTO;

import com.ecommerce.entity.Category;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private Long categoryId;
    private String productName;
    private String productDescription;
    private Integer productQuantity;
    private String productImage;
    private Double productPrice;
    private Double productDiscountPrice;
    private Double productSpecialPrice;


}
