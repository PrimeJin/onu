package com.ssafy.onu.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Entity
@Getter
@DynamicInsert
@NoArgsConstructor
@Table(name = "nutrient_ingredient")
public class NutrientIngredient {
    @Id
    private int nutrientIngredientId;

    @Column
    private long nutrientId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredientId;

    @Column
    private String ingredientAmount;
}
